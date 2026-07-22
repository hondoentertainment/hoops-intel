# Hoops Intel — Next steps (living doc)

_Last revised: July 21, 2026 (roadmap ops + team tip + digest quiet + multi-book)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0–P5 product/CI | CI, smoke, print, social dry-run, Guest Pulse feed, rival_pairs, opener archive | **Done** |
| Post-deploy | `npm run smoke:deploy` after each prod push | **Ongoing ritual** |

### P0 — Ops (manual — still blocking live Pro/push)

`/api/ops-readiness` must flip to ready. Until secrets land, code paths soft-skip.

| Step | Action | Status |
|------|--------|--------|
| Migrations | Through **`20260722_rival_pairs`** | **Run** (SQL or Actions → Supabase migrations) |
| Secrets | Stripe, VAPID, Supabase, Resend, push, ODDS_API_KEY | **Set in Vercel + GitHub** |
| Preflight | `vercel env pull` → `npm run ops:preflight:strict` | Before monetization flip |
| Push smoke | `npm run smoke:push` | After secrets live |
| Social secrets | X + Bluesky (optional) | Dry-run until set |
| Decommission | Archive `hoops-intel-1`, `hoops-intel-2` | Vercel dashboard |

### Shipped product (this cycle)

| Item | Notes |
|------|--------|
| Favorite-team **game-start** | Already in `playoff-push.yml`; defaults + Account “Team tip alerts” + `team_abbr` refresh on Save topics |
| Digest quiet hours | Wired in `email-digest.yml` (6–11 PT) + List-Unsubscribe header |
| Multi-book consensus UI | `oddsBooksData` + Betting Intel; fills when Odds API fetch returns `books[]` |
| Dependabot Actions #241 | Merged |
| Dependabot npm #242 | Deferred if Vercel preview still red |

### Deferred

- SSR/SEO unless Lighthouse regresses
- Public API / native / WNBA (Q4+)

---

_See [`ROADMAP.md`](./ROADMAP.md) · [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md)._
