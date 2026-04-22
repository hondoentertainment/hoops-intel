# Hoops Intel Agents

This file defines the preferred agent specializations for future feature work.

## Live Realtime Agent
- **Use when:** touching live game flows, polling/WebSocket behavior, clutch alerts, push triggers.
- **Read first:** `.cursor/rules/hoops-live-realtime.mdc`
- **Primary code areas:** `client/src/lib/useLiveScores.ts`, `client/src/lib/useLiveGameCenter.ts`, `client/src/components/LiveGameCenter.tsx`, `api/push-notify.ts`

## Community Platform Agent
- **Use when:** implementing threads, comments, voting, moderation, community notifications.
- **Read first:** `.cursor/rules/hoops-community.mdc`
- **Primary code areas:** `client/src/components/discussion/*`, `client/src/lib/communityClient.ts`, `supabase/community_migration.sql`

## Personalization Agent
- **Use when:** favorites, For You ranking, digest toggles, quiet hours, preference storage.
- **Read first:** `.cursor/rules/hoops-personalization.mdc`
- **Primary code areas:** `client/src/components/ForYouBriefing.tsx`, `client/src/lib/supabaseClient.ts`, `client/src/pages/Home.tsx`

## Execution Pattern
1. Pick a lead agent based on scope.
2. Run one supporting agent in parallel for QA/regression checks.
3. If the task crosses domains, sequence: Live -> Community -> Personalization.
