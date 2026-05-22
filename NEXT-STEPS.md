# Hoops Intel — Next steps (living doc)

_Last revised: May 21, 2026_

### P0 — Ops (manual: Supabase + Vercel/GitHub secrets)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Actions → **Supabase migrations** (or `supabase db push`) — `20260519` … `20260521` | **Run in dashboard** |
| Secrets | Stripe, VAPID, `PUSH_API_*`, Supabase, Resend, `CONTACT_INBOUND_EMAIL`, `GUEST_PULSE_ADMIN_SECRET`, optional `ODDS_API_KEY`, `ADMIN_NOTIFY_EMAIL` | **Set in Vercel + GitHub** |
| Preflight | `npm run ops:preflight:strict` with prod env pulled locally | Verify before flip |
| Push smoke | `npm run smoke:push` then workflow_dispatch **Playoff Push Alerts** | After secrets live |
| Deploy smoke | Push to `main` → **Deployment Smoke** waits for Vercel + HTTP checks | Automated |

### Shipped (code complete — May 21)

| Area | Status |
|------|--------|
| CI pre-push gate + deployment wait/smoke chain | Shipped |
| The Odds API ingest (`ODDS_API_KEY` → `fetch-line-odds.mjs`) | Shipped |
| Per-user push history filter (`?teams=` + Account “My teams”) | Shipped |
| `/api/team-intel` + blocking deploy smoke | Shipped |
| Push history inbox + Account panel | Shipped |
| Publisher v2, Pick'em W/L, line movement, playoff nightly | Shipped |
| Finals `isFinalsActive()` + home OG | Shipped |

### P1 — Remaining product

- SSR/SEO only if Lighthouse regresses
- The Odds API quota monitoring (log `x-requests-remaining` in workflow summary)

### P2 — Offseason

- Draft/FA/Summer League desk via `season-mode`

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
