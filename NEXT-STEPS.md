# Hoops Intel — Next steps (living doc)

_Last revised: May 23, 2026 (post next-steps implementation batch)_

### Deploy & reliability

| Phase | Action | Status |
|-------|--------|--------|
| P0 | Home crash fix (`nextPlayoffGameAcross` + `deskMode.ts`) | **Done** |
| P1 | Single prod project: **`hoops-intel`** | **Done** — CLI linked; use `npx vercel deploy --prod` on `hoops-intel` |
| P2 | Desk/offseason WIP batch | **Done** |
| P3 | Route manifest + site-review expansion | **Done** — `scripts/lib/public-routes.mjs`, CI `verify-route-manifest.mjs` |
| P3 | Sitemap SEO tuning (player weekly, print/widgets daily, `/embed-stats`) | **Done** |
| P3 | `generate-refs.mjs` parse guard before commit | **Done** |
| P4 | `SectionErrorBoundary` on 60-second read | **Done** |
| P4 | Post-deploy smoke | Run `npm run smoke:deploy` after each prod push |

**DNS (manual — still required):** `hoopsintel.net` nameservers point to GoDaddy. Switch to Vercel DNS or match A/CNAME in Vercel Domains panel.

### P0 — Ops (manual: Supabase + Vercel/GitHub secrets)

| Step | Action | Status |
|------|--------|--------|
| Migrations | Actions → **Supabase migrations** — `20260519` … `20260521` | **Run in dashboard** |
| Secrets | Stripe, VAPID, `PUSH_API_*`, Supabase, Resend, `ODDS_API_KEY`, admin secrets | **Set in Vercel + GitHub** |
| Preflight | `vercel env pull` → `npm run ops:preflight:strict` | Verify before monetization flip |
| Push smoke | `npm run smoke:push` | After secrets live |
| Decommission | Archive Vercel projects `hoops-intel-1`, `hoops-intel-2` | Manual in Vercel dashboard |

Quick checklist:

```bash
vercel env pull .env.production.local
npm run ops:preflight:strict
npm run test:ci:fast
npm run smoke:deploy
npx vercel deploy --prod --yes
```

### Shipped (May 22–23 + next-steps batch)

| Area | Status |
|------|--------|
| Live Game Desk, Finals Command Mode, series timeline hub | Shipped |
| Pick'Em leaderboard, Beat the Desk, badges v2, betting v2 | Shipped |
| Push tip-off / clincher / rival automation | Shipped |
| Creator queue admin + CSV export | Shipped |
| Embed publisher analytics (`/embed-stats`, `/widgets/analytics`) | Shipped |
| Fantasy-only push preset on Account | Shipped |
| Offseason desk + season-mode generator hint | Shipped |
| Betting slate movement summary + RG disclaimer | Shipped |
| Print edition: 60-second read, page breaks, disclaimer | Shipped |
| Unified public route manifest + expanded site review | Shipped |

### P1 — Remaining (product)

- SSR/SEO migration only if Lighthouse regresses
- Embed analytics: first-class filtered dashboard polish (APIs exist)
- Richer multi-page PDF export beyond print sheet
- Social distribution bots (Q3 roadmap)

### Non-goals

Native app first, non-NBA core, on-site comments.

---

_See [`ROADMAP.md`](./ROADMAP.md)._
