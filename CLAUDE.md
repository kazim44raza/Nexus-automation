# Nexus Automation — Project Rules

Next.js 15 (App Router) · TypeScript · Prisma/PostgreSQL · NextAuth v5 · Tailwind · Vercel AI SDK.

## Security Rules (must follow — adapted from the AI-app security checklist)

1. **Secrets** — All keys/tokens/DB URLs live in `.env*` only (git-ignored). Never hardcode secrets in client code. Only `NEXT_PUBLIC_*` vars reach the browser and must never be secret. Keep `.env.example` updated with empty values.
2. **Rate limiting** — Every public endpoint is rate-limited via `src/lib/rate-limit.ts`. Auth: 5/15min. General API: 60/min. LLM: 10/min/IP. Return `429` + `Retry-After`. (For multi-instance prod, back the limiter with Upstash Redis / Vercel KV.)
3. **Input validation** — Validate/sanitize on the **server** with Zod. Check type, length, allowed chars, enums. Reject with `400`.
4. **Auth** — NextAuth v5. Passwords: bcrypt cost ≥ 12. JWT short expiry. Refresh tokens in httpOnly cookies (NextAuth default). Check **identity AND permission/ownership** on every protected request. Throttle login attempts. Admin routes must verify `role`.
5. **SQL** — Prisma only. Never string-concatenate user input into queries. Least-privilege DB user. Never return raw DB errors to clients.
6. **CORS** — No wildcard in prod. API is same-origin by default; if cross-origin is ever needed, whitelist explicit origins.
7. **HTTP headers** — Set in `next.config.ts`: CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, HSTS, `Referrer-Policy`, `Permissions-Policy`. `poweredByHeader: false`.
8. **File uploads** — None today. If added: validate MIME+extension+size server-side, rename to UUID, store in a bucket (S3/GCS/Cloudinary) outside web root, never executable.
9. **Errors** — Generic message to client ("Something went wrong"); full context server-side only. Correct status codes (4xx client, 5xx server; never 500 for validation).
10. **Dependencies** — Run `npm audit` after installs; fix high/critical. Pin via `package-lock.json`.
11. **XSS** — No `dangerouslySetInnerHTML` with user content (sanitize with DOMPurify if unavoidable). No `eval`/`new Function`/`innerHTML` with dynamic data. JSON-LD uses only static, server-controlled data.
12. **Deploy gate** — `.env` not committed; secrets set in host env; debug off; DB not publicly exposed; HTTPS enforced; rate limiting active; CORS restricted; unused routes removed/protected.
13. **AI / LLM** — Never send raw user input to the model — sanitize first (`src/app/api/chat/route.ts` strips control chars + clamps length). Always set `maxOutputTokens`. Keep the key server-side; all LLM calls route through our backend. Per-IP rate limit on the chat endpoint. Render LLM output as text, never raw HTML.

## Conventions
- Design tokens in `tailwind.config.ts` + `globals.css`. Palette: teal primary (`#0D9488`) + emerald accent on navy darks (`#0B1220`). No purple.
- 3D via raw three.js (no React-Three-Fiber — it conflicts with Next 15's React). See `WaveField.tsx` / `FloatingObjects.tsx`.
- All DB calls in API routes wrapped in try/catch so the site works without a live DB in local dev.
