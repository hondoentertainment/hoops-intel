# Hoops Intel — Next steps (living doc)

_Last revised: July 21, 2026 (ship polish + product backlog)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0–P5 | CI, smoke, sitemap, ops-readiness, print packet, social dry-run | **Done** |
| Post-deploy | `npm run smoke:deploy` after each prod push | **Ongoing ritual** |

**DNS:** Production deploys alias to `hoopsintel.net` — confirm registrar records stay synced with Vercel Domains panel.

### P0 — Ops (manual)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Supabase `20260519` … `20260521` + **`20260722_rival_pairs`** | **Run in dashboard / Actions workflow** |
| Secrets | Stripe, VAPID, Supabase, Resend, push, odds keys | **Set in Vercel + GitHub** |
| Preflight | `vercel env pull` → `npm run ops:preflight:strict` | Before monetization flip |
| Push smoke | `npm run smoke:push` | After secrets live |
| Social secrets | X + Bluesky GitHub secrets (optional; workflow dry-runs without) | **Ops** |
| Decommission | Archive `hoops-intel-1`, `hoops-intel-2` | Vercel dashboard |

```bash
vercel env pull .env.production.local
npm run ops:preflight:strict
npm run test:ci:fast
npm run smoke:deploy
```

Full checklist: [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md)

### P1 — Product (shipped)

| Step | Status |
|------|--------|
| Multi-page print / Save-as-PDF | **Done** |
| Social packages + dry-run workflow | **Done** |
| Guest Pulse accepted → public feed | **Done** (`/api/guest-pulse-published`) |
| Multi-pair rival push (`rival_pairs` jsonb) | **Done** (needs migration) |
| Betting opener archive UI | **Done** (`lineOpenersArchiveData.ts`) |
| SSR/SEO | Deferred unless Lighthouse regresses |
| Dependabot Actions #241 | **Merged** |
| Dependabot npm #242 | Deferred — Vercel preview fails on PR; schedule dedicated bump day |

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
