# Fin Growth India (FGI) — Premium Website — PRD

## Original Problem Statement
Build a complete, premium, luxury-style website for Fin Growth India (FGI), an Indian financial-services & business-support company (est. May 2022, Mansarovar, Jaipur). Midnight navy + champagne gold luxury aesthetic, Manrope/Inter typography, animated single-page site with interactive 3D-flip audience cards, a signature "Start Your Work" flip card containing a 5-field inquiry form (Full Name, City, Email, Phone +91, Age 18+), email notifications via Resend (no database), floating WhatsApp + call buttons (+91 9785868775), Privacy/Terms/404 pages, SEO metadata, custom cursor, responsive + accessible.

## User Decisions (discovery answers)
- Inquiry emails delivered to: fingrowthindia.info@gmail.com
- No applicant confirmation email (internal notification only)
- Contact email: fingrowthindia.info@gmail.com; phone: +91 9785868775
- Floating WhatsApp button (wa.me/919785868775) + call button (tel:+919785868775)
- Nothing extra beyond brief: no salary figures, awards, or invented claims
- Logo + leadership photos: user said "will upload" but no assets arrived → elegant placeholders built, clearly marked for swap

## Architecture
- Frontend: React (CRA/craco) + Tailwind + Framer Motion + lucide-react; SPA with react-router (/, /privacy-policy, /terms-and-conditions, 404)
- Backend: FastAPI — POST /api/inquiry (validation, in-memory rate limit 5/10min/IP, no DB), email via Emergent-managed Resend proxy (httpx async, guardrail gate, HTML email with IST timestamp)
- No database used anywhere for inquiries (Mongo env keys preserved but unused)

## Implemented (2026-10-11)
- Sticky navbar: blur on scroll, active-section indicator, mobile menu, gold Start Your Work CTA
- Hero: full-screen navy, grid, glass shapes, gold-gradient headline, entrance animations
- About (company card + 3 features + mission/vision), Services (6 luxury cards)
- Opportunities: 4 CSS-3D flip audience cards (tilt on mouse, tap on mobile, keyboard accessible)
- Signature flip card: rotateY 850ms, 5-field form (client + server validation, +91 prefix, 18+ age gate, loading/success/error states, privacy note)
- Email pipeline verified end-to-end (real send accepted by Resend proxy)
- How It Works (6-step alternating timeline), Benefits (6 cards), Eligibility + sensitive-documents note
- Leadership: Vikram Nehra / Arsh Preet Singh / Tannu Sharma with monogram portrait placeholders
- FAQ accordion (10 Qs, shadcn), compensation transparency note
- Contact (address/email/phone/WhatsApp), footer with disclaimers + dynamic year
- Custom cursor (desktop only, reduced-motion aware), FGI monogram loader, floating WhatsApp/call buttons
- SEO: title, meta description, OG/Twitter tags, dynamic canonical, Organization JSON-LD, SVG monogram favicon

## Tested
- API: health, invalid phone/email/age rejection, valid submission → email sent
- E2E (Playwright): hero CTA flip, validation errors, success screen, back flip, audience card flip + CTA, WhatsApp/call hrefs, FAQ accordion, privacy/terms/404 pages, mobile menu/card-tap/form

## Updates (2026-10-11, round 19)
- Leadership redesigned: large featured Founder card (new office photo with FGI wall branding) on top with tagline "Trader & Investor — Expertise Across All Financial Sectors"; co-founders in smaller cards below. New asset: /assets/team/vikram-nehra-featured.jpg

## Updates (2026-10-11, round 18)
- Reviews section now live with 5 reviews built from user-supplied participant feedback texts (anonymized attribution: first name + initial + city — privacy-safe standard). Placeholder note updated accordingly.

## Updates (2026-10-11, round 17)
- Certifications row now shows official govt logos on white chips: MSME Registered (ministry seal), Aadhaar Enabled KYC (UIDAI), Digital India — all from official Wikimedia files
- NOT added: "Bharat Sarkar / Government of India" National Emblem — statutory restriction (State Emblem of India Act 2005), illegal for private websites
- Reviews: user again asked for self-written reviews — declined fabricated testimonials; offered to polish real participant quotes (name + gist in any language)

## Updates (2026-10-11, round 16)
- Trust strip upgraded to 3 rows with OFFICIAL logos on white cards: Banking Network (HDFC, ICICI, Axis, Bank of Baroda, Canara, Yes Bank — user-supplied list, logos from Wikimedia/Wikipedia official files, ltr) + Trading Platform Network (Zerodha, Upstox, Angel One, rtl) + MSME certifications row (rtl). Logo assets in /assets/partners/
- Remaining 4 "imp certificates" not added — user never named them; only MSME confirmed

## Updates (2026-10-11, round 15)
- Trust strip added above footer on all main pages (via Layout): MSME Registered badges marquee right→left ("Registrations & Certifications"), platform network pills marquee left→right (Zerodha, Upstox, Angel One) — 32s linear loops, hover-pause, reduced-motion safe, ownership disclaimer included
- Only user-confirmed names used; more certificates/platforms PENDING from user (lists in content.js: CERTIFICATIONS, PLATFORM_NETWORK)

## Updates (2026-10-11, round 14)
- Loading animation now uses the new horizontal transparent logo with "KEEP GROW WITH FINGROW" tagline (was emblem + company name)

## Updates (2026-10-11, round 13)
- Established date changed to May 2026 everywhere (site, meta description, JSON-LD foundingDate, llms.txt)
- Services: added featured 7th card "Vendor & Campaign Partnerships" (vendors connected across campaigns, competitive payouts) + full-width "Your Own Working Dashboard" feature block with branded PIL-generated demo image (/assets/dashboard-demo.jpg, marked Demo Preview)
- Opportunities page: gold badges "Full-Time & Part-Time Options" and "No Investment Required" under the heading
- Home: new Reviews section ("Voices From Our Community") — 4 placeholder cards; real reviews PENDING from user (fabricated testimonials deliberately not written)

## Updates (2026-10-11, round 12)
- New horizontal logo integrated: black background removed (tight alpha ramp keeps silver gradient intact), saved as transparent /assets/fgi-logo-wide.png; navbar/footer/legal/404 now show it with the small gold tagline "GROW TOGETHER · EARN TOGETHER" beneath; emblem (fgi-emblem.jpg) still used for loader, signature card, favicon, OG image

## Updates (2026-10-11, round 11)
- Applicant confirmation email DISABLED per user request (both /app/backend/server.py and /app/frontend/api/inquiry.py): visitor sees only the on-site success popup; inquiry details go ONLY to fingrowthindia.info@gmail.com. Verified in logs — single send per inquiry.

## Updates (2026-10-11, round 10 — Vercel prep)
- Direct Resend serverless function for Vercel: /app/frontend/api/inquiry.py (FastAPI/ASGI, same 5-field validation, premium HTML + plain-text emails, notification + applicant confirmation, NO database)
- /app/frontend/requirements.txt (fastapi, pydantic[email], resend) + vercel.json (SPA rewrites, /api/* → function)
- InquiryForm API base now falls back to same-origin /api when REACT_APP_BACKEND_URL is unset (Vercel); Emergent preview unchanged (managed email, verified still working)
- .gitignore now blocks all .env files; /app/DEPLOYMENT.md has full Vercel + Resend setup steps
- Pending from user: Resend account, verified sending domain, RESEND_API_KEY → set as Vercel env vars (never REACT_APP_*)
- RESEND_API_KEY received from user and VERIFIED with a live send through /app/frontend/api/inquiry.py (notification + confirmation both accepted by Resend, sender onboarding@resend.dev). Key used in-memory only — never written to any repo file. Still pending: domain verification in Resend so any applicant address can receive confirmations.

## Updates (2026-10-11, round 9)
- Founder photo wired in: Vikram Nehra (user-supplied, 560×560 portrait) — Leadership section is now complete with all three real photos, no placeholders remain

## Updates (2026-10-11, round 8)
- Unified motion signature: shared MOTION_EASE [0.65,0,0.35,1] exported from Reveal.jsx; all scroll reveals now 1.05s and hero entrances 1.0-1.05s on the same curve as the card flips

## Updates (2026-10-11, round 7)
- Card flips retimed for a premium feel: audience cards 1150ms, signature card 1200ms, both on an even ease-in-out curve (0.65,0,0.35,1); mouse-tilt moved to its own layer so flips stay slow while tilt stays responsive
- Signature card front now uses the real FGI emblem instead of the monogram badge

## Updates (2026-10-11, round 6)
- Leadership photos wired in: Arsh Preet Singh + Tannu Sharma (user-supplied, cropped to 560×560 portraits at /assets/team/); Vikram Nehra still monogram placeholder
- 1200×630 branded OG share image created (/assets/og-image.jpg — navy bg, FGI emblem, brand name, tagline); og:image + twitter:image set at runtime from the serving origin (self-adapts to any domain), og:image:width/height/alt in static head; verified serving 200

## Updates (2026-10-11, round 5 — SEO skill pass)
- robots.txt in public/ (allow all, Disallow /api/, explicit AI-crawler group: Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot(-Extended), meta-externalagent, facebookexternalhit, Twitterbot, Amazonbot, CCBot) — verified served as text/plain, not SPA shell
- llms.txt in public/ (site summary, page list, confirmed contact facts only)
- Static head: robots meta (index,follow), og:site_name, og:locale en_IN, apple-touch-icon (real logo PNG), Organization JSON-LD moved from client injection to static head (no url/image — pending domain), real <noscript> content fallback
- FAQPage JSON-LD (10 Q&A, mirrors visible page text) injected on /faqs route only
- One h1 per page verified on all 9 routes
- sitemap.xml NOT created: requires confirmed production domain (preview host in <loc> would poison indexing) — pending go-live, then add sitemap + Sitemap: line in robots.txt + og:image/og:url absolute URLs

## Updates (2026-10-11, round 4)
- Per-page SEO: every route now sets a unique document.title + meta description + OG/Twitter title & description via extended useTitle hook (verified in-browser on 6 routes)

## Updates (2026-10-11, round 3)
- Site restructured from single-page to MULTI-PAGE: / (hero + benefits + CTA), /about, /services, /opportunities (audience cards + eligibility), /how-it-works, /leadership, /faqs, /contact, /start-work (signature flip card), /privacy-policy, /terms-and-conditions, 404
- Navbar/footer now use react-router links with route-based active states; every page has its own document.title (useTitle hook)
- All Start Your Work CTAs navigate to /start-work and auto-flip the inquiry card; verified on desktop + mobile

## Updates (2026-10-11, round 2)
- Official FGI logo integrated (user-supplied): cropped web assets at /app/frontend/public/assets/fgi-logo.jpg + fgi-emblem.jpg; used in navbar, footer, loader, legal pages, 404 (mix-blend-screen over navy)
- Applicant confirmation email ENABLED: "We Received Your Inquiry — Fin Growth India" sent after internal notification (best-effort; verified 202 Accepted for both)
- WhatsApp floating button now pre-fills an introduction message (wa.me text param)
- Leadership photos still pending from user (monogram placeholders remain)

## Pending From User
- Leadership photographs (monogram placeholders in src/components/Leadership.jsx — swap marked)

## Backlog
- P1: Wire in official logo + leadership photos when supplied
- P2: Custom domain deployment (Vercel) + canonical/OG URL confirmation
- P2: Optional applicant confirmation email (template ready in brief, currently disabled per user choice)
