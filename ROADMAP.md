# Hoops Intel — Feature Roadmap

## Currently Live (v1.0)
- [x] Daily NBA edition with Pulse Index, game recaps, standings, injury wire
- [x] Archive of past editions with search
- [x] GitHub Actions daily auto-update (5am PST via ESPN + Claude API)
- [x] Live ESPN scorebar with 30s polling
- [x] Player detail pages (`/player/:slug`)
- [x] Team detail pages (`/team/:abbr`)
- [x] Global search (Cmd+K) across players, teams, games, stories
- [x] Interactive sortable standings with playoff/play-in line
- [x] Dark/light theme toggle
- [x] Sparkline trend indicators on Pulse Index
- [x] Betting links (DraftKings, FanDuel, BetMGM)
- [x] Browser notifications + email digest subscription UI
- [x] Archive pagination (12 per page)
- [x] PWA (installable, offline shell)
- [x] RSS feed (`/feed.xml`)
- [x] SEO meta tags, Open Graph, Twitter Cards
- [x] OG share image
- [x] Sitemap (`/sitemap.xml`)
- [x] Vercel Analytics
- [x] Schema validation for daily generation

---

## Phase 2 — Data & Content Depth

### 2.1 Full Box Scores
- Fetch detailed box scores from ESPN API per game
- Display player stat lines (PTS, REB, AST, STL, BLK, FG%, 3P%, FT%)
- Expandable box score accordion in game recap cards
- Link to individual player pages from box score rows

### 2.2 Historical Pulse Index Tracking
- Store daily Pulse Index snapshots in a persistent JSON/archive
- Pulse Index History page showing 7-day, 30-day, season trends
- "Biggest movers" widget — who gained/lost the most rank this week
- Per-player sparkline on their detail page showing rank over time

### 2.3 Advanced Standings
- Division standings view toggle
- Clinch/elimination scenarios as postseason approaches
- Head-to-head records between teams
- Strength of schedule remaining

### 2.4 Playoff Bracket (April–June)
- Auto-detect when playoffs begin
- Interactive bracket visualization
- Series scores and game-by-game results
- Conference finals / Finals spotlight sections

---

## Phase 3 — User Features & Engagement

### 3.1 User Accounts (Auth)
- Email/password or OAuth (Google) sign-in
- Favorite teams and players for personalized feed
- Persistent dark/light mode and notification preferences

### 3.2 Real Email Digest
- Integrate email provider (Resend, SendGrid, or Mailgun)
- Daily morning email with edition highlights
- Configurable: all games vs. favorite teams only
- Unsubscribe management

### 3.3 Push Notifications (Web Push)
- Service worker push subscription with VAPID keys
- Notify when a favorite team plays or a game goes to OT
- "Your player just dropped 40" alerts
- Configurable notification categories

### 3.4 Comments / Reactions
- Lightweight reactions (fire, cold, GOAT) on game recaps
- Optional comment threads per edition (could use Giscus/GitHub Discussions)
- "Hot take of the day" community poll

---

## Phase 4 — Platform & Performance

### 4.1 SSR/SSG Migration
- Migrate from client-side SPA to Next.js or Astro
- Static generation for archive pages (instant load, better SEO)
- Server-side rendering for current edition
- Incremental static regeneration on each daily update

### 4.2 Database Layer
- Move from hardcoded TypeScript to a database (Supabase, PlanetScale, or Turso)
- Store historical editions, player stats, standings snapshots
- Enable querying: "show me all games where Player X scored 40+"
- API endpoints for third-party integrations

### 4.3 Mobile App
- React Native or Expo wrapper around the PWA
- Native push notifications (APNs / FCM)
- Offline reading of recent editions
- App Store / Play Store distribution

### 4.4 Performance Optimization
- Image optimization pipeline (WebP/AVIF team logos)
- Code splitting per route (lazy load Player, Team, Archive pages)
- Edge caching via Vercel Edge Config
- Lighthouse score targeting: 95+ across all categories

---

## Phase 5 — Monetization & Growth

### 5.1 Premium Tier
- "Hoops Intel Pro" with advanced stats, historical data deep dives
- DFS optimizer integration (lineup suggestions)
- Early access to daily edition (6am vs 8am)
- Ad-free experience

### 5.2 Affiliate Revenue
- Sportsbook affiliate links in betting section
- Merchandise affiliate links for trending players
- Sponsored "Player of the Week" features

### 5.3 API Access
- Public API for developers (`api.hoopsintel.net`)
- Pulse Index API — real-time player rankings
- Webhook support for new edition notifications
- Rate-limited free tier, paid for higher volume

### 5.4 Social Features
- Twitter/X bot posting daily highlights (`@HoopsIntel`)
- Shareable player cards / game recap images
- "Share to story" formatted for Instagram/TikTok
- Discord bot integration

---

## Phase 6 — Expansion

### 6.1 Multi-League Support
- WNBA coverage (summer season)
- G League / NBA Draft coverage
- March Madness bracket + analysis (seasonal)
- EuroLeague / international basketball

### 6.2 AI-Powered Features
- "Ask Hoops Intel" — natural language Q&A about NBA stats and history
- AI-generated game previews with win probability predictions
- Trend detection: "Luka is shooting 28% from 3 over his last 10 games"
- Automated highlight clip curation from YouTube/NBA.com

### 6.3 Podcast / Video
- Daily 5-minute audio briefing (TTS from edition narrative)
- Video recap generation with stock highlights
- Embedded podcast player on the site

---

## Priority Matrix

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Full Box Scores | High | Medium | P1 |
| Historical Pulse Index | High | Medium | P1 |
| SSR/SSG Migration | High | High | P1 |
| Real Email Digest | Medium | Medium | P2 |
| Playoff Bracket | High | Medium | P2 (seasonal) |
| User Accounts | Medium | High | P2 |
| Database Layer | High | High | P2 |
| Code Splitting | Medium | Low | P2 |
| Twitter Bot | Medium | Low | P3 |
| Mobile App | Medium | High | P3 |
| API Access | Medium | High | P3 |
| AI Q&A | High | High | P3 |
| Multi-League | Medium | High | P4 |
