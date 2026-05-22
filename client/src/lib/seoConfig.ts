import { narrative, pulseEdition } from "./pulseData";
import { isFinalsActive, isPlayoffsActive, playoffSeries, type PlayoffRound } from "./playoffData";

export const SITE_ORIGIN = "https://hoopsintel.net";
export const SITE_NAME = "Hoops Intel";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/api/og?type=edition`;
export const TWITTER_SITE = "@hoopsintel";

export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

/** Routes with page-level useMetaTags (player, team, game center). */
const PAGE_LEVEL_SEO_PREFIXES = ["/player/", "/team/", "/game/"];

/** Private or thin pages — noindex in meta + robots.txt where applicable. */
export const NOINDEX_PATHS = new Set([
  "/account",
  "/creator-queue",
  "/unsubscribe",
  "/widgets/analytics",
  "/embed",
]);

const STATIC_ROUTE_SEO: Record<string, PageSeo> = {
  "/archive": {
    title: "NBA Edition Archive | Hoops Intel",
    description:
      "Browse past Hoops Intel morning editions — headlines, box scores, Pulse Index movers, and daily NBA storylines.",
    canonicalPath: "/archive",
  },
  "/pulse-history": {
    title: "Pulse Index History | Hoops Intel",
    description: "Track Pulse Index™ ranking history and daily movers across the NBA season and playoffs.",
    canonicalPath: "/pulse-history",
  },
  "/playoffs": {
    title: "NBA Playoff Bracket & Series Intel | Hoops Intel",
    description: "Live playoff bracket, series context, schedules, and Hoops Intel postseason analysis.",
    canonicalPath: "/playoffs",
  },
  "/playoff-bracket": {
    title: "NBA Playoff Bracket & Series Intel | Hoops Intel",
    description: "Live playoff bracket, series context, schedules, and Hoops Intel postseason analysis.",
    canonicalPath: "/playoffs",
  },
  "/tools": {
    title: "NBA Tools & Features | Hoops Intel",
    description:
      "Explore every Hoops Intel tool — injuries, trade value, lineups, sentiment, refs, watch guide, and more.",
    canonicalPath: "/tools",
  },
  "/injuries": {
    title: "NBA Injury Report | Hoops Intel",
    description: "Daily injury wire with status updates, return timelines, and impact on tonight's slate.",
    canonicalPath: "/injuries",
  },
  "/pick-em": {
    title: "NBA Playoff Pick 'Em | Hoops Intel",
    description: "Bracket-style playoff picks and series predictions on Hoops Intel.",
    canonicalPath: "/pick-em",
  },
  "/trade-value": {
    title: "NBA Trade Value Charts | Hoops Intel",
    description: "Player and pick trade value tiers with context for deadline and offseason moves.",
    canonicalPath: "/trade-value",
  },
  "/trivia": {
    title: "Hoops IQ Trivia | Hoops Intel",
    description: "Test your NBA knowledge with daily Hoops IQ trivia challenges.",
    canonicalPath: "/trivia",
  },
  "/performance": {
    title: "Season Performance Tracker | Hoops Intel",
    description: "AI-assisted season performance tracking and trend analysis for NBA players.",
    canonicalPath: "/performance",
  },
  "/momentum": {
    title: "Game Momentum Intel | Hoops Intel",
    description: "Swing moments and momentum shifts from recent NBA games.",
    canonicalPath: "/momentum",
  },
  "/lineups": {
    title: "Lineup Intel | Hoops Intel",
    description: "Starting lineups, rotations, and matchup notes for tonight's NBA games.",
    canonicalPath: "/lineups",
  },
  "/trade-simulator": {
    title: "NBA Trade Simulator | Hoops Intel",
    description: "Mock trades and roster scenarios with Hoops Intel trade value context.",
    canonicalPath: "/trade-simulator",
  },
  "/clutch": {
    title: "Clutch Factor | Hoops Intel",
    description: "Clutch-time scoring, shot-making, and late-game impact across the NBA.",
    canonicalPath: "/clutch",
  },
  "/draft": {
    title: "NBA Draft Tracker | Hoops Intel",
    description: "Draft board movement, prospect intel, and team needs throughout draft season.",
    canonicalPath: "/draft",
  },
  "/sentiment": {
    title: "NBA Sentiment Pulse | Hoops Intel",
    description: "Social and media sentiment trends around players, teams, and storylines.",
    canonicalPath: "/sentiment",
  },
  "/tactics": {
    title: "Coach Corner & Tactics | Hoops Intel",
    description: "Schematic adjustments, coaching decisions, and tactical trends in the NBA.",
    canonicalPath: "/tactics",
  },
  "/projections": {
    title: "NBA Projections | Hoops Intel",
    description: "Win projections, series odds context, and model-driven NBA outlooks.",
    canonicalPath: "/projections",
  },
  "/badges": {
    title: "Hoops Intel Badges | Hoops Intel",
    description: "Achievement badges earned across Hoops Intel tools and community features.",
    canonicalPath: "/badges",
  },
  "/community-pulse": {
    title: "Community Pulse | Hoops Intel",
    description: "Community ratings and trends on players and storylines.",
    canonicalPath: "/community-pulse",
  },
  "/watch-guide": {
    title: "NBA Watch Guide | Hoops Intel",
    description: "What to watch tonight — must-see games, matchups, and storyline priorities.",
    canonicalPath: "/watch-guide",
  },
  "/podcast-companion": {
    title: "Podcast Companion | Hoops Intel",
    description: "Show-notes mode linking Hoops Intel data to your favorite NBA podcasts.",
    canonicalPath: "/podcast-companion",
  },
  "/history": {
    title: "NBA History Engine | Hoops Intel",
    description: "Historical comparisons, precedent games, and legacy context for today's NBA.",
    canonicalPath: "/history",
  },
  "/refs": {
    title: "NBA Referee Reports | Hoops Intel",
    description: "Crew assignments, foul tendencies, and officiating context for tonight's games.",
    canonicalPath: "/refs",
  },
  "/ask": {
    title: "Ask Hoops Intel AI | Hoops Intel",
    description: "Ask questions about scores, injuries, Pulse Index, and today's NBA slate.",
    canonicalPath: "/ask",
  },
  "/compare-players": {
    title: "Compare Players — Pulse Index | Hoops Intel",
    description: "Side-by-side Pulse Index™ comparisons for NBA players.",
    canonicalPath: "/compare-players",
  },
  "/pulse-methodology": {
    title: "Pulse Index Methodology | Hoops Intel",
    description: "How Hoops Intel ranks players with the Pulse Index™ — criteria, weights, and updates.",
    canonicalPath: "/pulse-methodology",
  },
  "/rivals": {
    title: "Rival Game Alerts | Hoops Intel",
    description: "Headline banners and context for grudge games and rivalry matchups.",
    canonicalPath: "/rivals",
  },
  "/my-pulse": {
    title: "My Pulse — Personalized Edition | Hoops Intel",
    description: "Your personalized Hoops Intel briefing based on favorite teams and players.",
    canonicalPath: "/my-pulse",
  },
  "/print-edition": {
    title: "Print Edition | Hoops Intel",
    description: "Clean print-friendly layout of today's Hoops Intel morning desk.",
    canonicalPath: "/print-edition",
  },
  "/widgets": {
    title: "Embeddable NBA Widgets | Hoops Intel",
    description: "Embed Pulse, injury, and ticker widgets on your site or newsletter.",
    canonicalPath: "/widgets",
  },
  "/embed-stats": {
    title: "Embed Publisher Stats | Hoops Intel",
    description: "Publisher dashboard for embed load trends and export.",
    canonicalPath: "/embed-stats",
    noindex: true,
  },
  "/pro": {
    title: "Hoops Intel Pro | Hoops Intel",
    description: "Pro tier features — deeper intel, sharing tools, and premium desk access.",
    canonicalPath: "/pro",
  },
  "/betting-intel": {
    title: "Betting Intel Context | Hoops Intel",
    description: "Line movement and betting context tied to Hoops Intel game and injury intel.",
    canonicalPath: "/betting-intel",
  },
  "/guest-pulse": {
    title: "Guest Pulse Pitch | Hoops Intel",
    description: "Submit a Guest Pulse takeover idea for the Hoops Intel morning desk.",
    canonicalPath: "/guest-pulse",
  },
};

/** Indexable static paths for sitemap generation (keep in sync with STATIC_ROUTE_SEO). */
export const STATIC_SITEMAP_PATHS: string[] = [
  "/archive",
  "/pulse-history",
  "/playoffs",
  "/tools",
  "/injuries",
  "/pick-em",
  "/trade-value",
  "/trivia",
  "/performance",
  "/momentum",
  "/lineups",
  "/trade-simulator",
  "/clutch",
  "/draft",
  "/sentiment",
  "/tactics",
  "/projections",
  "/badges",
  "/community-pulse",
  "/watch-guide",
  "/podcast-companion",
  "/history",
  "/refs",
  "/ask",
  "/compare-players",
  "/pulse-methodology",
  "/rivals",
  "/my-pulse",
  "/print-edition",
  "/widgets",
  "/pro",
  "/betting-intel",
  "/guest-pulse",
];

function homePageSeo(): PageSeo {
  const subtitle = pulseEdition.subtitle;
  const finalsDesk =
    isFinalsActive() ||
    pulseEdition.editionContext === "finals" ||
    (isPlayoffsActive() && playoffSeoRoundPhrase()?.startsWith("NBA Finals"));
  let title = `${SITE_NAME} — ${subtitle}`;
  if (finalsDesk) {
    title = title.length > 70 ? `NBA Finals — ${SITE_NAME}` : `NBA Finals — ${subtitle}`;
  } else if (title.length > 70) {
    title = `${SITE_NAME} — Daily NBA Intelligence`;
  }
  const description = narrative.subhead;
  const published = pulseEdition.date;
  return {
    title: title.length > 70 ? `${SITE_NAME} — Daily NBA Intelligence` : title,
    description,
    canonicalPath: "/",
    ogType: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: narrative.headline,
      description,
      datePublished: published,
      dateModified: published,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/assets/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": SITE_ORIGIN },
      image: [DEFAULT_OG_IMAGE],
    },
  };
}

const PLAYOFF_ROUND_ORDER: PlayoffRound[] = [
  "first-round",
  "conference-semifinals",
  "conference-finals",
  "finals",
];

const PLAYOFF_ROUND_LABEL: Record<PlayoffRound, string> = {
  "first-round": "first round",
  "conference-semifinals": "conference semifinals",
  "conference-finals": "conference finals",
  finals: "NBA Finals",
};

/** Current postseason phase for meta copy when `playoffSeries` is synced. */
export function playoffSeoRoundPhrase(): string | null {
  if (playoffSeries.length === 0) return null;
  let peak = 0;
  for (const s of playoffSeries) {
    const ix = PLAYOFF_ROUND_ORDER.indexOf(s.round);
    if (ix > peak) peak = ix;
  }
  const round = PLAYOFF_ROUND_LABEL[PLAYOFF_ROUND_ORDER[peak]!];
  const active = playoffSeries.filter((s) => s.status !== "complete").length;
  const n = playoffSeries.length;
  if (active > 0) {
    return `${round} — ${active} active series on the board`;
  }
  return `${round} — ${n} series tracked`;
}

function playoffsPageSeo(_path: "/playoffs" | "/playoff-bracket"): PageSeo {
  const canonicalPath = "/playoffs";
  const roundPhrase = playoffSeoRoundPhrase();
  const base = STATIC_ROUTE_SEO["/playoffs"]!;
  if (!roundPhrase) return { ...base, canonicalPath };

  const active = playoffSeries.filter((s) => s.status !== "complete").length;
  const description =
    active > 0
      ? `Live ${roundPhrase}: bracket, series scores, schedules, Pulse movers, and Hoops Intel postseason analysis.`
      : `${roundPhrase}: full bracket ledger, finals scores, and Hoops Intel postseason analysis.`;

  return {
    ...base,
    title: roundPhrase.startsWith("NBA Finals")
      ? "NBA Finals Bracket & Series Intel | Hoops Intel"
      : `NBA Playoffs — ${roundPhrase.split(" — ")[0]} | Hoops Intel`,
    description,
    canonicalPath,
  };
}

function normalizePath(pathname: string): string {
  const base = pathname.split("?")[0].split("#")[0];
  if (!base || base === "/") return "/";
  return base.endsWith("/") && base.length > 1 ? base.slice(0, -1) : base;
}

export function isPageLevelSeoRoute(pathname: string): boolean {
  const path = normalizePath(pathname);
  return PAGE_LEVEL_SEO_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export function resolveRouteSeo(pathname: string): PageSeo | null {
  const path = normalizePath(pathname);

  if (isPageLevelSeoRoute(path)) return null;
  if (path.startsWith("/card/") || path.startsWith("/embed/")) {
    return {
      title: `${SITE_NAME}`,
      description: "Hoops Intel — daily NBA intelligence.",
      canonicalPath: path,
      noindex: true,
    };
  }

  if (NOINDEX_PATHS.has(path) || path.startsWith("/embed/")) {
    const base = STATIC_ROUTE_SEO[path];
    return {
      title: base?.title ?? `${SITE_NAME}`,
      description: base?.description ?? "Hoops Intel account and settings.",
      canonicalPath: path,
      noindex: true,
    };
  }

  if (path === "/") return homePageSeo();
  if (path === "/playoffs") return playoffsPageSeo("/playoffs");
  if (path === "/playoff-bracket") return playoffsPageSeo("/playoff-bracket");

  const seriesMatch = /^\/playoffs\/series\/([^/]+)$/.exec(path);
  if (seriesMatch) {
    const seriesId = decodeURIComponent(seriesMatch[1]!);
    const row = playoffSeries.find((s) => s.seriesId === seriesId);
    if (row) {
      const intel = row.summary;
      return {
        title: `${row.higherTeam} vs ${row.lowerTeam} Playoff Series | Hoops Intel`,
        description: `${intel} — live scores, schedules, and series intel on Hoops Intel.`,
        canonicalPath: `/playoffs#series-card-${seriesId}`,
        ogImage: `${SITE_ORIGIN}/api/og?type=edition`,
      };
    }
  }

  const known = STATIC_ROUTE_SEO[path];
  if (known) return known;

  return {
    title: "Page Not Found | Hoops Intel",
    description: "This page is not part of Hoops Intel. Browse today's desk, tools, or the archive.",
    canonicalPath: path,
    noindex: true,
  };
}

export function toMetaTags(seo: PageSeo) {
  const canonicalUrl = `${SITE_ORIGIN}${seo.canonicalPath === "/" ? "" : seo.canonicalPath}`;
  return {
    title: seo.title,
    description: seo.description,
    ogImage: seo.ogImage ?? DEFAULT_OG_IMAGE,
    ogUrl: canonicalUrl,
    canonicalUrl,
    ogType: seo.ogType,
    noindex: seo.noindex,
    jsonLd: seo.jsonLd,
  };
}

export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/assets/logo.png`,
      sameAs: [`https://twitter.com/${TWITTER_SITE.replace("@", "")}`],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      description:
        "Daily NBA intelligence briefing with box scores, Pulse Index rankings, injury wire, and game previews.",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en-US",
    },
  ],
};
