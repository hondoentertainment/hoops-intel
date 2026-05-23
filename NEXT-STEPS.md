# Hoops Intel — Next steps (living doc)

_Last revised: May 23, 2026_

### Deploy & reliability (May 23)

| Phase | Action | Status |
|-------|--------|--------|
| P0 | Home crash fix (`nextPlayoffGameAcross` + `deskMode.ts` on main) | **Done** — `a38badf`, `308fc14` |
| P1 | Single prod project: **`hoops-intel`** (not `hoops-intel-1`) | **Done** — relink CLI locally; GitHub → prod |
| P2 | Desk/offseason WIP batch (Beat the Desk, badges, push scripts) | **Done** — `308fc14` |
| P4 | `SectionErrorBoundary` on 60-second read | **Done** |
| P4 | Post-deploy smoke | Run `npm run smoke:deploy` after each prod push |

**DNS (manual):** `hoopsintel.net` nameservers still point to GoDaddy (`domaincontrol.com`), not Vercel. Either switch to `ns1.vercel-dns.com` / `ns2.vercel-dns.com` in your registrar, or confirm A/CNAME records match Vercel’s domain panel. Until then, rely on Vercel dashboard → Domains for record checks.

### P0 — Ops (manual: Supabase + Vercel/GitHub secrets)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Actions → **Supabase migrations** — `20260519` … `20260521` | **Run in dashboard** |
| Secrets | Stripe, VAPID, `PUSH_API_*`, Supabase, Resend, `ODDS_API_KEY`, admin secrets | **Set in Vercel + GitHub** |
| Preflight | `npm run ops:preflight:strict` with prod env (`vercel env pull`) | Verify before flip |
| Push smoke | `npm run smoke:push` → **Playoff Push Alerts** (15-min cron) | After secrets live |

### Shipped (May 22–23)

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
| Offseason desk mode + `deskMode.ts` calendar fallback | Shipped |
| Home section error boundary (60-second read) | Shipped |

### P1 — Remaining

- SSR/SEO only if Lighthouse regresses
- Draft desk polish via `season-mode` (offseason)

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
