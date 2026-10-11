# Deploying Fin Growth India to Vercel

The repository is split so the **frontend and backend never mix**:

```
/app
├── frontend/          ← deploy THIS folder to Vercel (React site + email function)
│   ├── api/inquiry.py ← Vercel serverless function (direct Resend, no database)
│   ├── requirements.txt ← Python deps for the function
│   ├── vercel.json    ← SPA routing (all pages → index.html, /api/* → function)
│   └── src/ ...       ← the React website
└── backend/           ← Emergent preview backend only. NOT needed on Vercel.
```

## How the backend stays out of the frontend deploy

In Vercel: **Project → Settings → General → Root Directory → `frontend`**.
Vercel then uploads and builds only the `frontend/` folder. `backend/` stays in
the GitHub repo but is never uploaded, built, or reachable.

Additionally, `.gitignore` now blocks every `.env` file, so no secret can be
pushed to GitHub by accident.

## One-time Resend setup (your own account)

1. Create a free account at https://resend.com
2. **Domains → Add Domain** → enter your domain (e.g. `fingrowthindia.in`) and
   publish the DKIM/SPF DNS records Resend shows you. Wait for verification.
3. **API Keys → Create API Key** → "Sending access", restricted to your domain.
   Copy it — it is shown only once.

> `onboarding@resend.dev` only delivers to your own Resend account email.
> Verify your domain before going live so applicants actually receive the
> confirmation email.

## Vercel environment variables

**Project → Settings → Environment Variables** (Production + Preview):

| Name | Example | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxx` | Secret. NEVER prefix with `REACT_APP_` |
| `APPLICATION_FROM_EMAIL` | `Fin Growth India <no-reply@yourdomain.in>` | Must be on your verified Resend domain |
| `APPLICATION_RECEIVER_EMAIL` | `fingrowthindia.info@gmail.com` | Where inquiries arrive |
| `PUBLIC_SITE_URL` | `https://yourdomain.in` | Your custom domain |

Do **not** set `REACT_APP_BACKEND_URL` on Vercel — the form automatically
calls the same-origin `/api/inquiry` function. (It is only used for the
Emergent preview.)

Redeploy after adding variables — Vercel only applies them to new deployments.

## Deploy steps

1. In Emergent: **Save → Save to GitHub** (pushes this repo; `.env` files are excluded)
2. In Vercel: **Add New → Project → Import** your GitHub repo
3. Set **Root Directory** to `frontend` — framework auto-detects as Create React App
4. Add the environment variables above
5. **Deploy**, then attach your custom domain under **Settings → Domains**

## After deploy — quick verification

```bash
curl -i -X POST https://yourdomain.in/api/inquiry \
  -H 'Content-Type: application/json' \
  -d '{"full_name":"Deploy Test","city":"Jaipur","email":"you@example.com","phone":"9785868775","age":30}'
```

Expect `200 {"status":"success", ...}`, one notification in your Gmail, and one
confirmation at the applicant address. Invalid data (bad phone, age under 18)
must return `422` with a clear message.

## Notes

- No database anywhere — inquiries go straight to email, per your brief.
- The form's rate limit (5 submissions / 10 min) is best-effort on serverless;
  add Cloudflare Turnstile later if spam becomes an issue.
- The Emergent preview keeps running on the managed email integration and is
  unaffected by this Vercel setup.
