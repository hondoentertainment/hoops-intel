# Hoops Intel — Production operations checklist

Use this after code changes ship to GitHub and Vercel. Automated workflows now cover most reliability gates; these steps remain **manual** where secrets and dashboards are involved.

## Automated (in CI / Actions)

| Check | Workflow / command |
|-------|-------------------|
| Unit tests + Vite build | `CI` on every push |
| Daily edition pre-push gate | `Daily Edition Update` → `npm run test:pre-push` |
| Weekly edition pre-push gate | `Weekly Data Update` → `stage-weekly-edition.mjs` + `test:pre-push` |
| Production HTTP smoke | `Deployment Smoke` (after content pushes + `main` push) |
| Ops env snapshot | `Ops Readiness Check` (daily) → `/api/ops-readiness` |
| Site route review | `Site Review Agent` (daily) |

## Manual — one-time or when rotating secrets

### 1. Supabase migrations

Apply in order in the Supabase SQL editor (if not already applied):

- `supabase/migrations/20260519_push_dispatch_log.sql`
- `supabase/migrations/20260520_embed_referrer_agg.sql`
- `supabase/migrations/20260521_push_alert_history.sql`

### 2. Environment variables

Mirror production values in **Vercel** (Production) and **GitHub Actions** secrets:

```bash
vercel env pull .env.production.local
npm run ops:preflight:strict
```

Required keys are listed in `scripts/ops-preflight.mjs`. Client-side: `VITE_*` publishable keys in Vercel.

Verify live: https://hoopsintel.net/api/ops-readiness

### 3. Stripe Pro

- Production webhook → `https://hoopsintel.net/api/stripe-webhook`
- Test checkout → billing portal → confirm Supabase subscription row updates

### 4. Push + digest

```bash
npm run smoke:push
```

Send a test digest; confirm `/unsubscribe` works.

### 5. Vercel hygiene

- Confirm `hoopsintel.net` DNS → Vercel production project **hoops-intel**
- Archive duplicate projects `hoops-intel-1` and `hoops-intel-2`

## Ship ritual (every production deploy)

```bash
git push origin main
npm run smoke:deploy          # or wait for Deployment Smoke on Actions
npx vercel deploy --prod --yes   # optional immediate CLI prod deploy
```

## Playoff series URL schema

Series IDs use `{E|W|F}{roundRank}-{higherTeam}-{lowerTeam}` where the digit is **round** (1 = first round, 2 = semifinals, 3 = conference finals, 4 = NBA Finals), not seed. The conference prefix is `E` for East and `W` for West through round 3; the NBA Finals belongs to neither conference and uses `F`. Examples: `W2-SAS-MIN` (West semifinal), `E3-NYK-CLE` (East conference final), `F4-SAS-NYK` (NBA Finals).

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| Vercel build fails on `*Data.ts` | Truncated AI output — weekly/daily gate should block; repair file and push |
| Weekly commit broke prod | Partial failure committed before May 2026 hardening — now exits 1 on partial |
| Smoke fails after push | Vercel deploy lag — re-run Deployment Smoke with `skip_wait: false` |
| Ops issue opened daily | Missing Vercel env — complete preflight checklist |
