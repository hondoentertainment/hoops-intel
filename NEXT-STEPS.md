# Hoops Intel — Next steps (living doc)

_Last revised: May 22, 2026_

### P0 — Ops (manual: Supabase + Vercel/GitHub secrets)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Actions → **Supabase migrations** — `20260519` … `20260521` | **Run in dashboard** |
| Secrets | Stripe, VAPID, `PUSH_API_*`, Supabase, Resend, `ODDS_API_KEY`, admin secrets | **Set in Vercel + GitHub** |
| Preflight | `npm run ops:preflight:strict` with prod env | Verify before flip |
| Push smoke | `npm run smoke:push` → **Playoff Push Alerts** (15-min cron) | After secrets live |

### Shipped (May 22 — multi-agent pass)

| Area | Status |
|------|--------|
| Live Game Desk (Game Center live scores, lines, share OG) | Shipped |
| Finals Command Mode (hero, Pulse scope, print, SEO) | Shipped (activates when `round: "finals"`) |
| Series timeline hub (`/playoffs/series/:id`) | Shipped |
| Pick'Em leaderboard + Beat the desk + share card v2 | Shipped |
| Badges v2 (streak, visits, bracket round) | Shipped |
| Betting Intel v2 (opener/closer/current + movement) | Shipped |
| Odds API quota in CI step summary | Shipped |
| Push: tip-off, clincher-preview, rival pair automation | Shipped |
| Creator queue admin + publisher CSV export | Shipped |
| Pro/Account ops-readiness UX | Shipped |
| Morning Brief HTML v2 + Ask shortcuts + Pulse explain modal | Shipped |
| PWA offline edition cache (sw v4) | Shipped |

### P1 — Remaining

- SSR/SEO only if Lighthouse regresses
- Draft desk via `season-mode` (offseason)

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
