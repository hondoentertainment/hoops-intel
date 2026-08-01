# Hoops Intel — Next steps (living doc)

_Last revised: August 1, 2026 — see refreshed [`ROADMAP.md`](./ROADMAP.md)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0–P5 product/CI | CI, smoke, print, social dry-run, Guest Pulse feed, rival_pairs, opener archive, multi-fav push, creator edit | **Done** |
| Post-deploy | `npm run smoke:deploy` after each prod push | **Ongoing ritual** |

### July 2026 outage post-mortem (both resolved)

Two independent defects overlapped and froze the dashboard for ~6 days.

| Defect | Cause | Fix |
|--------|-------|-----|
| Generator freeze (#268) | `dead-period` window skipped generation July 23 – Aug 31 | `generatorActive()` now returns true in every window |
| Deploy break (#272, #275) | TypeScript 7 is Go-native and drops the JS Compiler API (`ts.sys` / `createProgram`) that Vercel's serverless compilation needs — `Cannot read properties of undefined (reading 'readFile')` | Pinned `typescript@~6.0.3` + Dependabot `ignore` on TS majors (#278) |

**Standing constraint:** do not unpin TypeScript to 7.x until Vercel's Node
builder supports the Go-native compiler. The Dependabot ignore rule enforces
this; removing it re-breaks production deploys, not just the build.

### Alerting

Failure issues were auto-filed but never reached a human — `deployment-smoke`,
`health-check` and `ops-readiness` opened issues and never closed them, while
`site-review` filed a fresh report every day and closed none. 65 open issues
buried five real deploy failures dating back to June.

| Step | Action | Status |
|------|--------|--------|
| Shared helper | `.github/scripts/alert-issues.cjs` — one open/close/assign path for all workflows | **Done** |
| Auto-close on recovery | `deployment-smoke`, `health-check`, `ops-readiness` now clear their own backlog | **Done** |
| Site-review noise | Each day's report supersedes and closes the previous one | **Done** |
| Health-check alert | `exit_code=$?` after a pipe read `tee`'s status, so the stale-content alert could never fire | **Fixed** (`PIPESTATUS[0]`) |
| Assignee | Set repo variable **`ALERT_ASSIGNEE`** to a collaborator login | **Manual** — defaults to `github.repository_owner`, which is silently ignored if that's an org |
| Slack | Set `SLACK_DATA_QUALITY_WEBHOOK` for out-of-band alerts | **Manual** — smoke failures post there today only if set |

### Dependencies

The npm bump was deferred pending a green Vercel preview — now satisfied.

| Step | Action | Status |
|------|--------|--------|
| Dependabot npm group | PR **#279** (9 updates) | **Verified, awaiting merge** — keeps `typescript@~6.0.3`; full suite, `vite build`, `dist/embed.js` and `typecheck:api` all pass against it |
| jsdom 29 → 30 | Major bump of the vitest environment, bundled in #279 | **Verified** — 223/223 pass |

Verified locally on Node 22; CI and Vercel run Node 24.

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
- Weekly generation is all-or-nothing: one failed section (exit code 2) discards
  the seven that succeeded. Deliberate today — revisit only if partial-commit
  semantics are worth the risk of shipping half an edition.
- Six workflows still inline their own `github-script` blocks. The shared helper
  covers issue open/close; the surrounding boilerplate could become a composite
  action if it drifts again.

---

_See [`ROADMAP.md`](./ROADMAP.md) · [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md)._
