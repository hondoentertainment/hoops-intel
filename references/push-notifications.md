# Web push & digest — ops checklist

Use this runbook when debugging **no alerts**, **duplicate alerts**, or **digest drops**.

## Pipelines

| Workflow | Role |
|----------|------|
| `playoff-push.yml` | Elimination / clincher urgency notifications (polling ESPN + Supabase subscriptions) |
| `injury-check.yml` | Injury delta pushes |
| `email-digest.yml` | Resend digest after edition write |

## Required secrets / env

- `SUPABASE_URL`, service role for workflows that enqueue recipients.
- `PUSH_API_URL`, `PUSH_API_SECRET` (or project-specific equivalents) reachable from GitHub-hosted runners.
- VAPID key pair deployed wherever `api/push-notify` validates subscriptions.

## Client expectations

1. Visitor grants **browser permission** and selects **topics** on **`/account`** (or quick enable from the header bell for digest-only email).
2. Logged-in users with **favorite teams** benefit when server rules filter pushes by `team_abbr` (first My Pulse team when you register the device).

## Monitoring

1. Actions tab → failing `playoff-push` / `injury-check` should page maintainers immediately.
2. Verify Supabase table `push_subscriptions` churn after major deploys (`service worker` bumps can invalidate endpoints).
3. Compare volume vs manual estimate: postseason peaks should remain **≤ few alerts per subscribed user weekly** unless double-firing bugs appear.

## Quick smoke test

Dispatch `check-playoff-series.mjs` locally with `PUSH_API_URL` pointed at staging; confirm HTTP 200 and single fan-out bucket.
