# Web push & digest — ops checklist

Use this runbook when debugging **no alerts**, **duplicate alerts**, or **digest drops**.

## Pipelines

| Workflow | Role |
|----------|------|
| `playoff-push.yml` | Elimination / clincher / **game-start (30m tip)** / rival pushes (every 15m) |
| `injury-check.yml` | Injury delta pushes |
| `email-digest.yml` | Resend digest after edition write (+ fantasy push pass) |

## Required secrets / env

- `SUPABASE_URL`, service role for workflows that enqueue recipients.
- `PUSH_API_URL`, `PUSH_API_SECRET` (or project-specific equivalents) reachable from GitHub-hosted runners.
- VAPID key pair deployed wherever `api/push-notify` validates subscriptions.
- Digest: `RESEND_API_KEY`, optional `DIGEST_EMAILS`.

## Client expectations

1. Visitor grants **browser permission** and selects **topics** on **`/account`** (or quick enable from the header bell for digest-only email).
2. Logged-in users with **favorite teams** benefit when server rules filter pushes by `team_abbr` (first My Pulse team — refreshed when you **Save topics**).
3. **Game start** topic fires ~30 minutes before tip for that `team_abbr` via `check-tip-off-push.mjs`.
4. Multi-pair **rival** alerts need migration `20260722_rival_pairs` + Sync rival / Save topics after configuring `/rivals`.

## Digest quiet hours & deliverability

| Setting | Default / notes |
|---------|-----------------|
| Trigger | After Daily Edition Update succeeds → wait 15m → `send-digest.mjs` |
| Quiet window | `DIGEST_USE_QUIET_WINDOW=1` in `email-digest.yml` — sends only **6–11 America/Los_Angeles** |
| Force | Repo variable `DIGEST_QUIET_OVERRIDE=1`, or local `DIGEST_QUIET_OVERRIDE=1` / `--test-email` |
| Unsubscribe | HTML link + `List-Unsubscribe` header → `/unsubscribe` |
| Smoke | Confirm one Resend delivery + `/unsubscribe` still works |

If digests “vanish”, check Actions logs for `Skipping blast — PST hour … outside configured morning window`.

## Monitoring

1. Actions tab → failing `playoff-push` / `injury-check` should page maintainers immediately.
2. Verify Supabase table `push_subscriptions` churn after major deploys (`service worker` bumps can invalidate endpoints).
3. Compare volume vs manual estimate: postseason peaks should remain **≤ few alerts per subscribed user weekly** unless double-firing bugs appear.
4. Apply migrations through `20260722_rival_pairs` (Actions → **Supabase migrations** or SQL editor).

## Quick smoke test

```bash
npm run smoke:push
# or: node scripts/check-tip-off-push.mjs with PUSH_* + SUPABASE_* set
```

Dispatch `check-playoff-series.mjs` locally with `PUSH_API_URL` pointed at staging; confirm HTTP 200 and single fan-out bucket.
