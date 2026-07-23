# Hoops Intel — Next steps (living doc)

_Last revised: July 22, 2026 — see refreshed [`ROADMAP.md`](./ROADMAP.md)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0–P5 product/CI | CI, smoke, print, social dry-run, Guest Pulse feed, rival_pairs, opener archive, multi-fav push, creator edit | **Done** |
| Post-deploy | `npm run smoke:deploy` after each prod push | **Ongoing ritual** |

### P0 — Ops (manual — still blocking live Pro/push)

`/api/ops-readiness` must flip to ready. Until secrets land, code paths soft-skip.

| Step | Action | Status |
|------|--------|--------|
| Migrations | Through **`20260723_team_abbrs_published_pitch`** | **Run** (SQL or Actions → Supabase migrations) |
| Secrets | Stripe, VAPID, Supabase, Resend, push, ODDS_API_KEY | **Set in Vercel + GitHub** |
| Preflight | `vercel env pull` → `npm run ops:preflight:strict` | Before monetization flip |
| Push smoke | `npm run smoke:push` | After secrets live |
| Social secrets | X + Bluesky (optional) | Dry-run until set |
| Decommission | Archive `hoops-intel-1`, `hoops-intel-2` | Vercel dashboard |

### Shipped product (this cycle)

| Item | Notes |
|------|--------|
| Multi-favorite **game-start / injury** | `team_abbrs[]` + Account sync of all My Pulse favorites (capped at 8) |
| Creator **edit before publish** | `published_pitch` on Guest Pulse; `/creator-queue` public body editor |
| Favorite-team **game-start** | Defaults + Account “Team tip alerts” + team refresh on Save topics |
| Digest quiet hours | Wired in `email-digest.yml` (6–11 PT) + List-Unsubscribe header |
| Multi-book consensus UI | `oddsBooksData` + Betting Intel; fills when Odds API fetch returns `books[]` |

### Deferred

- SSR/SEO unless Lighthouse regresses
- Public API / native / WNBA (Q4+)
- Dependabot npm #242 (after green Vercel preview)

---

_See [`ROADMAP.md`](./ROADMAP.md) · [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md)._
