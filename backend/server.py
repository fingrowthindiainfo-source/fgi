from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from datetime import datetime, timezone, timedelta
from collections import defaultdict
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
import os
import re
import time
import ipaddress
import logging
import threading

import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Email configuration (Emergent managed email / Resend-compatible proxy)
# ---------------------------------------------------------------------------
EMAIL_BASE_URL = "https://integrations.emergentagent.com"  # constant, never from env
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Fin Growth India")
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
APPLICATION_RECEIVER_EMAIL = os.environ.get("APPLICATION_RECEIVER_EMAIL")

# ---------------------------------------------------------------------------
# Guardrail gate (G2/G3 structural checks on every send)
# ---------------------------------------------------------------------------
_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        try:
            code = e.response.json().get("code", "")
        except ValueError:
            code = ""
        if code in ("insufficient_credits", "integration_disabled", "daily_limit_reached"):
            logger.warning(f"Email paused: {code} ({e.response.status_code})")
            raise HTTPException(status_code=503, detail="Email is temporarily unavailable. Please try again later.")
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="We could not send your inquiry right now. Please try again.")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="We could not send your inquiry right now. Please try again.")


# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------
app = FastAPI()
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"message": "Fin Growth India API"}


# ---------------------------------------------------------------------------
# Inquiry endpoint (no database — email only)
# ---------------------------------------------------------------------------
INDIAN_MOBILE = re.compile(r"^[6-9]\d{9}$")


class Inquiry(BaseModel):
    full_name: str
    city: str
    email: EmailStr
    phone: str
    age: int

    @field_validator("full_name", "city")
    @classmethod
    def not_blank(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2 or len(v) > 100:
            raise ValueError("Please provide a valid value (2-100 characters).")
        return v

    @field_validator("phone")
    @classmethod
    def valid_indian_mobile(cls, v: str) -> str:
        digits = re.sub(r"\D", "", v or "")
        if len(digits) == 12 and digits.startswith("91"):
            digits = digits[2:]
        elif len(digits) == 11 and digits.startswith("0"):
            digits = digits[1:]
        if not INDIAN_MOBILE.match(digits):
            raise ValueError("Please enter a valid 10-digit Indian mobile number.")
        return digits

    @field_validator("age")
    @classmethod
    def adult_only(cls, v: int) -> int:
        if v < 18:
            raise ValueError("Applicants must be at least 18 years old.")
        if v > 100:
            raise ValueError("Please enter a valid age.")
        return v


# Simple in-memory rate limiting: max 5 inquiries per IP per 10 minutes
_RATE_WINDOW = 600
_RATE_MAX = 5
_rate_lock = threading.Lock()
_rate_hits: dict[str, list[float]] = defaultdict(list)


def _rate_limit(ip: str) -> None:
    now = time.time()
    with _rate_lock:
        hits = [t for t in _rate_hits[ip] if now - t < _RATE_WINDOW]
        if len(hits) >= _RATE_MAX:
            raise HTTPException(status_code=429, detail="Too many inquiries. Please try again in a few minutes.")
        hits.append(now)
        _rate_hits[ip] = hits


def _inquiry_email_html(data: Inquiry, submitted_at: str) -> str:
    row = (
        '<tr><td style="padding:10px 16px;border-bottom:1px solid #1d3a5f;color:#A8B3C5;'
        'font-size:13px;letter-spacing:0.06em;text-transform:uppercase;width:160px">{k}</td>'
        '<td style="padding:10px 16px;border-bottom:1px solid #1d3a5f;color:#F7F4ED;font-size:15px">{v}</td></tr>'
    )
    rows = "".join([
        row.format(k="Full Name", v=escape(data.full_name)),
        row.format(k="City", v=escape(data.city)),
        row.format(k="Email", v=escape(data.email)),
        row.format(k="Phone", v="+91 " + escape(data.phone)),
        row.format(k="Age", v=str(data.age)),
        row.format(k="Submitted", v=escape(submitted_at)),
    ])
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
        'style="background:#071426;padding:32px 16px;font-family:Arial,Helvetica,sans-serif">'
        '<tr><td align="center">'
        '<table role="presentation" width="600" cellpadding="0" cellspacing="0" '
        'style="max-width:600px;width:100%;background:#102B4E;border:1px solid #D6B574;border-radius:12px;overflow:hidden">'
        '<tr><td style="padding:28px 32px;border-bottom:2px solid #D6B574">'
        '<div style="color:#D6B574;font-size:12px;letter-spacing:0.24em;text-transform:uppercase">Fin Growth India</div>'
        '<div style="color:#FFFFFF;font-size:22px;font-weight:bold;margin-top:8px">New Work Inquiry</div>'
        '</td></tr>'
        f'<tr><td style="padding:8px 16px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">{rows}</table></td></tr>'
        '<tr><td style="padding:20px 32px;background:#071426;color:#A8B3C5;font-size:12px">'
        'Submitted through the Fin Growth India website inquiry form. '
        'Fin Growth India &middot; Your Growth Partner</td></tr>'
        '</table></td></tr></table>'
    )


@api_router.post("/inquiry")
async def submit_inquiry(inquiry: Inquiry, request: Request):
    if not APPLICATION_RECEIVER_EMAIL:
        logger.error("APPLICATION_RECEIVER_EMAIL is not configured")
        raise HTTPException(status_code=500, detail="Inquiry service is not configured yet. Please try again later.")

    client_ip = request.client.host if request.client else "unknown"
    _rate_limit(client_ip)

    ist = timezone(timedelta(hours=5, minutes=30))
    submitted_at = datetime.now(ist).strftime("%d %b %Y, %I:%M %p IST")

    html = _inquiry_email_html(inquiry, submitted_at)
    email_id = await send_email(
        to=APPLICATION_RECEIVER_EMAIL,
        subject="New Work Inquiry — Fin Growth India",
        html=html,
        reply_to=inquiry.email,
    )
    logger.info(f"Inquiry email sent (id={email_id})")
    return {"status": "success", "message": "Your inquiry has been submitted successfully."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
