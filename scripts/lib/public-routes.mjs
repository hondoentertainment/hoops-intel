/**
 * Single source of truth for public route monitoring + sitemap static paths.
 * Keep `STATIC_SITEMAP_PATHS` in client/src/lib/seoConfig.ts aligned — CI verifies via verify-route-manifest.mjs.
 */

/** Nightly production smoke + site-review-agent fetch list */
export const SITE_REVIEW_PATHS = [
  "/",
  "/tools",
  "/archive",
  "/playoffs",
  "/injuries",
  "/performance",
  "/pulse-history",
  "/my-pulse",
  "/print-edition",
  "/momentum",
  "/lineups",
  "/trade-value",
  "/ask",
  "/betting-intel",
  "/community-pulse",
  "/widgets",
  "/widgets/analytics",
  "/embed-stats",
  "/account",
  "/pro",
  "/trivia",
  "/pick-em",
  "/badges",
  "/trade-simulator",
  "/clutch",
  "/draft",
  "/sentiment",
  "/tactics",
  "/projections",
  "/rivals",
  "/compare-players",
  "/refs",
  "/watch-guide",
  "/podcast-companion",
  "/history",
  "/guest-pulse",
  "/pulse-methodology",
  "/sitemap.xml",
];

/** Static tool paths written to sitemap.xml (excludes /, /archive, /pulse-history, /playoffs). */
export const SITEMAP_STATIC_ROUTES = [
  { loc: "/tools", priority: "0.65", changefreq: "weekly" },
  { loc: "/injuries", priority: "0.65", changefreq: "weekly" },
  { loc: "/pick-em", priority: "0.65", changefreq: "daily" },
  { loc: "/trade-value", priority: "0.65", changefreq: "weekly" },
  { loc: "/trivia", priority: "0.65", changefreq: "weekly" },
  { loc: "/performance", priority: "0.65", changefreq: "weekly" },
  { loc: "/momentum", priority: "0.65", changefreq: "weekly" },
  { loc: "/lineups", priority: "0.65", changefreq: "weekly" },
  { loc: "/trade-simulator", priority: "0.65", changefreq: "weekly" },
  { loc: "/clutch", priority: "0.65", changefreq: "weekly" },
  { loc: "/draft", priority: "0.65", changefreq: "weekly" },
  { loc: "/sentiment", priority: "0.65", changefreq: "weekly" },
  { loc: "/tactics", priority: "0.65", changefreq: "weekly" },
  { loc: "/projections", priority: "0.65", changefreq: "weekly" },
  { loc: "/badges", priority: "0.65", changefreq: "weekly" },
  { loc: "/community-pulse", priority: "0.65", changefreq: "weekly" },
  { loc: "/watch-guide", priority: "0.65", changefreq: "weekly" },
  { loc: "/podcast-companion", priority: "0.65", changefreq: "weekly" },
  { loc: "/history", priority: "0.65", changefreq: "weekly" },
  { loc: "/refs", priority: "0.65", changefreq: "weekly" },
  { loc: "/ask", priority: "0.65", changefreq: "weekly" },
  { loc: "/compare-players", priority: "0.65", changefreq: "weekly" },
  { loc: "/pulse-methodology", priority: "0.55", changefreq: "monthly" },
  { loc: "/rivals", priority: "0.65", changefreq: "weekly" },
  { loc: "/my-pulse", priority: "0.6", changefreq: "daily" },
  { loc: "/print-edition", priority: "0.6", changefreq: "daily" },
  { loc: "/widgets", priority: "0.6", changefreq: "daily" },
  { loc: "/widgets/analytics", priority: "0.55", changefreq: "weekly" },
  { loc: "/embed-stats", priority: "0.55", changefreq: "weekly" },
  { loc: "/pro", priority: "0.7", changefreq: "weekly" },
  { loc: "/betting-intel", priority: "0.65", changefreq: "daily" },
  { loc: "/guest-pulse", priority: "0.55", changefreq: "weekly" },
];

export const SITEMAP_PLAYER_META = { priority: "0.5", changefreq: "weekly" };
export const SITEMAP_TEAM_META = { priority: "0.6", changefreq: "weekly" };
export const SITEMAP_GAME_META = { priority: "0.55", changefreq: "daily" };
/** Default series sitemap meta; generate-sitemap.mjs bumps during active playoffs. */
export const SITEMAP_SERIES_META = { priority: "0.85", changefreq: "daily" };
export const SITEMAP_PLAYOFFS_HUB_META = { priority: "0.9", changefreq: "daily" };
export const SITEMAP_PLAYOFFS_HUB_OFFSEASON_META = { priority: "0.7", changefreq: "daily" };

/** Paths that must appear in seoConfig STATIC_SITEMAP_PATHS (core + static tool routes). */
export const SEO_CONFIG_SITEMAP_PATHS = [
  "/archive",
  "/pulse-history",
  "/playoffs",
  ...SITEMAP_STATIC_ROUTES.map((r) => r.loc),
];
