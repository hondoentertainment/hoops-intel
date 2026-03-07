# Hoops Intel — Daily NBA Intelligence

**Live at:** [hoopsintel.net](https://hoopsintel.net) | [nbapulse-egx4nuuj.manus.space](https://nbapulse-egx4nuuj.manus.space)

A daily NBA intelligence dashboard delivering box scores, Pulse Index player rankings, injury wire, media reactions, fantasy alerts, tonight's game previews, and more — updated every morning.

---

## Overview

Hoops Intel is a modern, dark-themed NBA intelligence dashboard built with React, TypeScript, and TailwindCSS. It provides a comprehensive daily briefing for NBA fans, analysts, and fantasy players.

### Features

- **Daily Scores & Recaps** — All game results with narrative recaps and top performers
- **Pulse Index** — Top 10 player rankings by overall impact (editorial, not just stats)
- **Stat Leaders** — Points, rebounds, assists, 3-pointers, blocks, and +/-
- **Media Reactions** — 6 curated quotes from real journalists and analysts
- **Injury Wire** — Notable injuries with status, timeline, and impact ratings
- **Tonight's Games** — Previews with spreads, O/U, TV info, and predictions
- **Rookie Watch** — Top 5 rookies with season averages and trend analysis
- **Fantasy Alerts** — Actionable add/drop/hold/stream recommendations
- **Standings** — East and West conference standings with play-in teams
- **Archive** — Searchable history of all past editions

---

## Design System

| Element | Value |
|---------|-------|
| Background | Navy `#050D1A` |
| Primary Accent | Electric Blue `#0EA5E9` |
| Success/Stats | Emerald `#10B981` |
| Alert/Negative | Rose `#F43F5E` |
| Warning | Amber `#F59E0B` |
| Headers Font | Barlow Condensed |
| Body Font | DM Sans |
| Stats/Mono Font | JetBrains Mono |

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** TailwindCSS + custom CSS
- **Build Tool:** Vite
- **Deployment:** Manus Space
- **Routing:** Wouter (lightweight React router)

---

## Project Structure

```
hoops-intel/
├── client/src/
│   ├── lib/
│   │   ├── pulseData.ts        # Today's edition data (replaced daily)
│   │   ├── archiveData.ts      # Cumulative archive (prepended daily)
│   │   └── teamColors.ts       # NBA team color mapping
│   ├── pages/
│   │   ├── Home.tsx             # Main dashboard page
│   │   └── Archive.tsx          # Archive/search page
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Dark/light theme context
│   ├── styles/
│   │   └── index.css            # Global styles and animations
│   ├── App.tsx                  # Root app with routing
│   └── main.tsx                 # Entry point
├── dist/                        # Production build output
│   ├── index.html
│   ├── sitemap.xml
│   └── assets/
│       ├── index-*.js           # Bundled JavaScript
│       └── index-*.css          # Bundled CSS
├── public/
│   └── assets/
│       ├── hero-bg.webp         # Hero section background
│       └── logo.png             # Site logo/favicon
├── references/
│   ├── data-schema.md           # Full TypeScript interface definitions
│   └── edition-examples.md      # Annotated writing examples
└── README.md
```

---

## Daily Update Workflow

Each morning, two data files are updated:

1. **`pulseData.ts`** — Replaced entirely with the new day's data
2. **`archiveData.ts`** — New entry prepended to the archive array

### Data Sources

| Source | What to Collect |
|--------|----------------|
| Basketball-Reference | Game scores, box scores |
| ESPN Recap | Narrative, key plays |
| The Athletic / ESPN / BR | Media reaction quotes |
| CBS Sports / ESPN | Injury reports |
| CBS Sports / ESPN | Tonight's spreads, O/U, TV |

### Edition Numbering

- Format: `"Vol. 2026 · No. {N}"`
- Increment `N` by 1 each day from the previous edition

---

## Data Schema

See [`references/data-schema.md`](references/data-schema.md) for complete TypeScript interface definitions covering:

- `PulseEdition` — Date and edition metadata
- `TickerItem` — Live ticker items (scores, injuries, alerts)
- `GameResult` — Final scores with recaps
- `PulseIndexPlayer` — Top 10 player rankings
- `MediaReaction` — Journalist quotes with sentiment
- `InjuryUpdate` — Injury statuses and timelines
- `GamePreview` — Tonight's games with predictions
- `RookieWatch` — Top 5 rookies
- `FantasyAlert` — Fantasy recommendations
- `StandingsEntry` — Conference standings

---

## Writing Quality

See [`references/edition-examples.md`](references/edition-examples.md) for annotated examples of well-written:

- Headlines and subtitles
- Game recaps (narrative arc, specific numbers, context)
- Pulse Index notes (explain WHY, not just WHAT)
- Media reaction quotes (journalist voice, clear stance)
- Archive entries (searchable tags and player arrays)
- Fantasy alerts (specific, actionable, explains logic)

---

## License

Private project. All rights reserved.
