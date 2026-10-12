"""
Fin Growth India — inquiry endpoint for the Vercel deployment.

Vercel Python file-based function: this file maps to /api/inquiry.
The top-level `app` (FastAPI/ASGI) is what Vercel loads.

Direct Resend integration (user's own account). No database — email only.
Secrets (RESEND_API_KEY) live in Vercel Project → Settings → Environment
Variables. Never prefix them with REACT_APP_ (those leak to the browser).
"""

import os
import re
import time
import logging
from html import escape
from datetime import datetime, timezone, timedelta

import resend
from fastapi import FastAPI, HTTPException, Request
from fastapi.concurrency import run_in_threadpool
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from resend.exceptions import ResendError

logger = logging.getLogger(__name__)

app = FastAPI()

# Same-origin in the normal one-project Vercel deploy, so CORS is not needed.
# FRONTEND_ORIGIN exists only for a split frontend/API setup.
_origins = [o.strip() for o in os.getenv("FRONTEND_ORIGIN", "").split(",") if o.strip()]
if _origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=_origins,
        allow_credentials=False,
        allow_methods=["POST", "OPTIONS"],
        allow_headers=["Content-Type"],
    )


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


# Best-effort per-instance rate limit (serverless instances are ephemeral;
# validation above is the primary protection).
_RATE_WINDOW = 600
_RATE_MAX = 5
_rate_hits: dict[str, list[float]] = {}


def _rate_limit(ip: str) -> None:
    now = time.time()
    hits = [t for t in _rate_hits.get(ip, []) if now - t < _RATE_WINDOW]
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


@app.post("/")
@app.post("/api/inquiry")
async def create_inquiry(inquiry: Inquiry, request: Request):
    receiver = os.getenv("APPLICATION_RECEIVER_EMAIL")
    sender = os.getenv("APPLICATION_FROM_EMAIL")
    api_key = os.getenv("RESEND_API_KEY")
    if not receiver or not sender or not api_key:
        logger.error("Inquiry service env vars missing (RESEND_API_KEY / APPLICATION_FROM_EMAIL / APPLICATION_RECEIVER_EMAIL)")
        raise HTTPException(status_code=500, detail="Inquiry service is not configured yet. Please try again later.")

    client_ip = request.headers.get("x-forwarded-for", "unknown").split(",")[0].strip()
    _rate_limit(client_ip)

    ist = timezone(timedelta(hours=5, minutes=30))
    submitted_at = datetime.now(ist).strftime("%d %b %Y, %I:%M %p IST")

    resend.api_key = api_key

    try:
        await run_in_threadpool(resend.Emails.send, {
            "from": sender,
            "to": [receiver],
            "reply_to": str(inquiry.email),
            "subject": "New Work Inquiry — Fin Growth India",
            "html": _inquiry_email_html(inquiry, submitted_at),
            "text": (
                f"New Work Inquiry — Fin Growth India\n\n"
                f"Full Name: {inquiry.full_name}\nCity: {inquiry.city}\n"
                f"Email: {inquiry.email}\nPhone: +91 {inquiry.phone}\n"
                f"Age: {inquiry.age}\nSubmitted: {submitted_at}"
            ),
        })
    except ResendError as exc:
        reason = getattr(exc, "message", None) or str(exc)
        logger.error(
            "Resend failed | type=%s | code=%s | error_type=%s | message=%s | from=%s | to=%s",
            type(exc).__name__,
            getattr(exc, "code", None),
            getattr(exc, "error_type", None),
            reason,
            sender,
            receiver,
        )
        # TEMPORARY: reason dikhane ke liye. Problem solve hone ke baad hata dena.
        raise HTTPException(status_code=502, detail=f"Email failed: {reason}")

    # No applicant confirmation email — the visitor only sees the on-site
    # success message; inquiry details go to the owner inbox only.

    return {"status": "success", "message": "Your inquiry has been submitted successfully."}