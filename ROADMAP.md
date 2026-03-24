# Hoops Intel — Feature Roadmap

> Last updated: March 24, 2026

---

## Currently Live (v2.0)

### Core Platform
- [x] Daily AI-generated NBA edition with Pulse Index, game recaps, standings, injury wire
- [x] Archive of past editions with search & pagination (12 per page)
- [x] GitHub Actions daily auto-update (5 AM PST via ESPN + Claude API)
- [x] Live ESPN scorebar with 30s polling / 5min idle
- [x] Dark/light theme toggle with localStorage persistence
- [x] Vercel deployment with SPA rewrites

### Pages & Navigation
- [x] Player detail pages (`/player/:slug`) with career context
- [x] Team detail pages (`/team/:abbr`) with roster & schedule
- [x] Pulse Index History (`/pulse-history`) with 7-day/30-day trends & biggest movers
- [x] Playoff Bracket (`/playoffs`) with projected matchups & play-in tournament
- [x] Global search (Cmd+K) across players, teams, games, stories

### Data & Content
- [x] Full ESPN box scores — expandable per game with starter/bench split & shooting %
- [x] Interactive sortable standings with playoff/play-in cut lines
- [x] Sparkline trend indicators on Pulse Index rankings
- [x] Betting links (DraftKings, FanDuel, BetMGM)

### User Features
- [x] Supabase auth (email/password + Google OAuth)
- [x] Reactions system (🔥 fire / 🧊 cold / 🐐 GOAT / 🧢 cap) with localStorage persistence
- [x] Browser notification & email digest subscription UI
- [x] PWA — installable, offline shell via service worker

### Infrastructure
- [x] Supabase database schema (user_favorites, reactions, digest_preferences, push_subscriptions, pulse_snapshots, editions — all with RLS)
- [x] Code splitting with React.lazy (6 route chunks)
- [x] Zero-dependency Supabase REST client
- [x] RSS feed (`/feed.xml`) — auto-generated
- [x] Sitemap (`/sitemap.xml`) — 147 URLs, auto-generated
- [x] OG image, Twitter Cards, SEO meta tags
- [x] Vercel Analytics
- [x] Schema validation for daily generation

---

## Phase 5 — Real-Time & Engagement

### 5.1 Live Game Experience
- WebSocket-powered live box scores during games (replace 30s polling)
- Play-by-play feed with auto-scrolling timeline
- Live win probability chart that updates with each possession
- "Clutch alert" push notification when a game enters final 2 minutes within 5 points

### 5.2 Real Email Digest
- Integrate Resend or SendGrid for transactional email
- Daily morning digest with edition highlights at configurable time
- "Favorite teams only" vs. "all games" toggle
- Weekly Pulse Index recap email with trend charts
- Unsubscribe management with one-click link

### 5.3 Web Push Notifications (Live)
- VAPID key generation and subscription management
- Notify when a favorite team tips off, wins, or loses
- "Your player just dropped 40" milestone alerts
- OT / buzzer-beater alerts
- Configurable quiet hours

### 5.4 Comments & Community
- Giscus (GitHub Discussions) integration for per-edition comments
- "Hot take of the day" community poll with live results
- Prediction market — pick game winners before tip-off, track accuracy
- Leaderboard for top predictors

---

## Phase 6 — Platform & Performance

### 6.1 SSR/SSG Migration
- Migrate from Vite SPA to Next.js or Astro
- Static generation for archive pages (instant load, better SEO)
- Server-side rendering for current edition with ISR on daily update
- Edge middleware for geo-based content (local team prioritization)

### 6.2 Advanced Database Queries
- Full-text search across all historical editions
- "Show me all games where Player X scored 40+" query interface
- Season-long stat aggregation per player/team
- Head-to-head records between any two teams
- Strength of schedule remaining calculations

### 6.3 Performance Optimization
- Image optimization pipeline (WebP/AVIF team logos, player headshots)
- Edge caching via Vercel Edge Config for standings & scores
- Bundle analysis and tree-shaking audit
- Lighthouse score target: 95+ across all categories
- Prefetch next likely navigation (e.g., trending player pages)

### 6.4 Advanced Standings
- Division standings view toggle
- Clinch/elimination magic numbers as postseason approaches
- Playoff seeding scenarios simulator ("if Team X wins tonight…")
- Conference comparison charts

---

## Phase 7 — Monetization & Growth

### 7.1 Premium Tier ("Hoops Intel Pro")
- Advanced stats deep dives (pace-adjusted, clutch splits, lineup +/-)
- DFS optimizer integration — suggested lineups for DraftKings/FanDuel
- Early access to daily edition (6 AM vs. 8 AM)
- Ad-free experience
- Stripe integration for subscription billing

### 7.2 Affiliate Revenue
- Sportsbook affiliate links in betting section with click tracking
- Merchandise affiliate links for trending players (Fanatics, NBA Store)
- Sponsored "Player of the Week" spotlight features
- Affiliate revenue dashboard

### 7.3 Public API
- `api.hoopsintel.com` — RESTful endpoints
- Pulse Index API — real-time player rankings with historical data
- Webhook support for new edition notifications
- Rate-limited free tier (100 req/day), paid tiers for higher volume
- API key management and usage analytics

### 7.4 Social & Distribution
- Twitter/X bot (`@HoopsIntel`) posting daily highlights + game alerts
- Shareable player cards with dynamic OG images
- "Share to story" formatted for Instagram Stories / TikTok
- Discord bot with `/pulse`, `/scores`, `/standings` slash commands
- Bluesky integration

---

## Phase 8 — AI & Expansion

### 8.1 "Ask Hoops Intel" — AI Q&A
- Natural language interface: "How has Luka been shooting this month?"
- RAG pipeline over all historical editions and box scores
- Conversational follow-ups with context retention
- Source citations linking back to specific editions

### 8.2 AI-Powered Insights
- Automated game preview generation with win probability predictions
- Trend detection alerts: "Luka is shooting 28% from 3 over his last 10"
- Injury impact analysis: "How do the Bucks perform without Giannis?"
- Trade deadline analysis and roster fit scoring

### 8.3 Multi-League Support
- WNBA coverage (May–October season)
- March Madness bracket + analysis (seasonal, March–April)
- NBA Draft coverage with prospect scouting reports
- G League & two-way player tracking
- EuroLeague coverage for international fans

### 8.4 Audio & Video
- Daily 5-minute audio briefing via TTS from edition narrative
- Embedded podcast player on the site
- Video recap generation with stock highlights from NBA.com
- YouTube Shorts / TikTok auto-formatted clips

---

## Phase 9 — Mobile Native

### 9.1 React Native App
- Expo wrapper for iOS & Android distribution
- Native push notifications (APNs / FCM)
- Offline reading of recent 7 editions
- Haptic feedback on reactions
- App Store & Play Store listing

### 9.2 Mobile-First Features
- Swipe between game recaps
- Widget for home screen (today's scores, Pulse Index top 5)
- Apple Watch complication for live scores
- Siri Shortcuts: "Hey Siri, what's the Pulse Index?"

---

## Priority Matrix

| Feature | Impact | Effort | Priority | Target |
|---------|--------|--------|----------|--------|
| Real Email Digest | High | Medium | **P1** | Q2 2026 |
| Live Web Push | High | Medium | **P1** | Q2 2026 |
| SSR/SSG Migration | High | High | **P1** | Q2 2026 |
| Comments / Community | Medium | Low | **P2** | Q2 2026 |
| Advanced Standings | Medium | Medium | **P2** | Q2 2026 |
| Full-Text Search | Medium | Medium | **P2** | Q3 2026 |
| Twitter/X Bot | Medium | Low | **P2** | Q3 2026 |
| Premium Tier | High | High | **P2** | Q3 2026 |
| AI Q&A | High | High | **P3** | Q3 2026 |
| Public API | Medium | High | **P3** | Q4 2026 |
| Mobile App | Medium | High | **P3** | Q4 2026 |
| Multi-League | Medium | High | **P4** | 2027 |
| Audio Briefing | Low | Medium | **P4** | 2027 |

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React 19 + Vite | Fast builds, HMR, modern React features |
| Router | Wouter | Lightweight (1.5KB), sufficient for 6 routes |
| Styling | Tailwind CSS | Utility-first, no CSS-in-JS overhead |
| Auth | Supabase Auth | Free tier, OAuth support, RLS integration |
| Database | Supabase (PostgreSQL) | Real-time subscriptions, RLS, edge functions |
| Deployment | Vercel | Zero-config, preview deploys, analytics |
| AI | Claude API (Anthropic) | Superior narrative generation for daily editions |
| Data Source | ESPN API | Comprehensive, real-time, free tier sufficient |

---

## Contributing

Hoops Intel is open to contributions. See the current phase priorities above and pick up any unstarted item. File an issue to discuss before starting work on anything in Phase 7+.
