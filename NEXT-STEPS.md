# Hoops Intel — Next steps (living doc)

_Last revised: May 26, 2026 (production hardening batch)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0–P4 | CI, deskMode, route manifest, sitemap, refData guard | **Done** |
| P5 | Expanded deployment smoke (series pages + key tools) | **Done** |
| P5 | Finals Command Mode vitest + print injury/fantasy sections | **Done** |
| P5 | Social bot dry-run (`npm run social:preview`) | **Done** |
| P5 | Embed analytics host filter on `/embed-stats` | **Done** |
| Weekly CI gate | `stage-weekly-edition.mjs` + `test:pre-push` + no partial commit | **Done** |
| Weekly validation | All weekly `*Data.ts` in `validate-generated-structure` | **Done** |
| Deploy smoke on `main` push | `deployment-smoke.yml` triggers on push + weekly | **Done** |
| Sitemap playoffs SEO | Hub/series/pick-em priority boost when playoffs active | **Done** |
| Ops visibility | `ops-readiness-check.yml` + `PRODUCTION-OPS.md` | **Done** |
| Post-deploy | `npm run smoke:deploy` after each prod push | **Ongoing ritual** |

**DNS:** Production deploys alias to `hoopsintel.net` — confirm registrar records stay synced with Vercel Domains panel.

### P0 — Ops (manual)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Supabase `20260519` … `20260521` | **Run in dashboard** |
| Secrets | Stripe, VAPID, Supabase, Resend, push, odds keys | **Set in Vercel + GitHub** |
| Preflight | `vercel env pull` → `npm run ops:preflight:strict` | Before monetization flip |
| Push smoke | `npm run smoke:push` | After secrets live |
| Decommission | Archive `hoops-intel-1`, `hoops-intel-2` | Vercel dashboard |

```bash
vercel env pull .env.production.local
npm run ops:preflight:strict
npm run test:ci:fast
npm run smoke:deploy
npx vercel deploy --prod --yes
```

Full checklist: [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md)

### P1 — Remaining (product)

- SSR/SEO only if Lighthouse regresses
- Richer multi-page PDF export beyond print sheet
- Live social posting once Twitter/Bluesky credentials are in GitHub secrets
- Merge Dependabot PRs (Vitest, Anthropic SDK, Vite/React)

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
