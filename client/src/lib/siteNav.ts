import { isPlayoffsActive } from "./playoffData";
import { isOffseasonDesk, offseasonPrimaryHref } from "./deskMode";

export const PLAYOFFS_NAV_HREF = "/playoffs";

/** Header + mobile bottom nav label during synced postseason. */
export function playoffsNavLabel(): string {
  return isPlayoffsActive() ? "Playoffs" : "Playoffs";
}

/** Primary desk navigation — hashes resolve on home */
export interface MainNavLink {
  label: string;
  href: string;
}

/** Compact header links (desktop) — season-aware. */
export function headerNavLinks(date = new Date()): MainNavLink[] {
  if (isOffseasonDesk(date)) {
    return [
      { label: "Pulse", href: "/#pulse-index" },
      { label: "Briefing", href: "/#today-desk" },
      { label: "Injuries", href: "/injuries" },
      { label: "Projections", href: offseasonPrimaryHref(date) },
      { label: "Tools", href: "/tools" },
    ];
  }
  return [
    { label: "Scores", href: "/#scores" },
    { label: "Pulse", href: "/#pulse-index" },
    { label: "Injuries", href: "/injuries" },
    { label: "Tonight", href: "/#tonight" },
    { label: playoffsNavLabel(), href: PLAYOFFS_NAV_HREF },
    { label: "Tools", href: "/tools" },
  ];
}

/** Full drawer navigation (mobile menu + overflow) */
export function mainNavLinks(date = new Date()): MainNavLink[] {
  const seasonal = isOffseasonDesk(date)
    ? [
        { label: "Pulse", href: "/#pulse-index" },
        { label: "Briefing", href: "/#today-desk" },
        { label: "Injuries", href: "/injuries" },
        { label: "Projections", href: offseasonPrimaryHref(date) },
      ]
    : [
        { label: "Scores", href: "/#scores" },
        { label: "Pulse", href: "/#pulse-index" },
        { label: "Injuries", href: "/injuries" },
        { label: "Tonight", href: "/#tonight" },
        { label: playoffsNavLabel(), href: PLAYOFFS_NAV_HREF },
      ];

  return [
    ...seasonal,
    { label: "Watch guide", href: "/watch-guide" },
    { label: "Archive", href: "/archive" },
    { label: "Tools", href: "/tools" },
    { label: "Projections", href: "/projections" },
    { label: "Compare", href: "/compare-players" },
    { label: "Performance", href: "/performance" },
    { label: "Hoops IQ", href: "/trivia" },
    { label: "Ask Hoops Intel", href: "/ask" },
  ].filter((link, index, all) => all.findIndex((l) => l.href === link.href) === index);
}

/** Home footer explore links — keep discoverable product routes out of crawl orphan status. */
export const FOOTER_QUICK_LINKS: MainNavLink[] = [
  { label: "Briefing", href: "#today-desk" },
  { label: "Pulse", href: "#pulse-index" },
  { label: "Injuries", href: "#injuries" },
  { label: "Projections", href: "/projections" },
  { label: "Archive", href: "/archive" },
  { label: "Tools", href: "/tools" },
  { label: "My Pulse", href: "/my-pulse" },
  { label: "Watch guide", href: "/watch-guide" },
  { label: "Compare players", href: "/compare-players" },
  { label: "History", href: "/history" },
  { label: "Refs", href: "/refs" },
  { label: "Podcast companion", href: "/podcast-companion" },
  { label: "Guest Pulse", href: "/guest-pulse" },
  { label: "Rivals", href: "/rivals" },
  { label: "How Pulse works", href: "/pulse-methodology" },
  { label: "RSS", href: "/feed.xml" },
];

/** Sticky in-page section jumps on today's desk */
export function deskSectionLinks(date = new Date()): MainNavLink[] {
  if (isOffseasonDesk(date)) {
    return [
      { label: "Briefing", href: "#today-desk" },
      { label: "Pulse", href: "#pulse-index" },
      { label: "Injuries", href: "#injuries" },
      { label: "Outlook", href: "#offseason-desk" },
      { label: "Standings", href: "#standings" },
    ];
  }
  return [
    { label: "Briefing", href: "#today-desk" },
    { label: "Scores", href: "#scores" },
    { label: "Pulse", href: "#pulse-index" },
    { label: "Injuries", href: "#injuries" },
    { label: "Tonight", href: "#tonight" },
    { label: "Standings", href: "#standings" },
  ];
}

export function mobileBottomNavLinks(date = new Date()): MainNavLink[] {
  if (isOffseasonDesk(date)) {
    return [
      { label: "Today", href: "/" },
      { label: "Pulse", href: "/#pulse-index" },
      { label: "Projections", href: offseasonPrimaryHref(date) },
      { label: "My Pulse", href: "/my-pulse" },
      { label: "Ask", href: "/ask" },
    ];
  }
  return [
    { label: "Today", href: "/" },
    { label: "Scores", href: "/#scores" },
    { label: playoffsNavLabel(), href: PLAYOFFS_NAV_HREF },
    { label: "My Pulse", href: "/my-pulse" },
    { label: "Picks", href: "/pick-em" },
  ];
}

/** @deprecated Prefer headerNavLinks() — snapshot at module load for older imports. */
export const HEADER_NAV_LINKS: MainNavLink[] = headerNavLinks();
/** @deprecated Prefer mainNavLinks() */
export const MAIN_NAV_LINKS: MainNavLink[] = mainNavLinks();
/** @deprecated Prefer deskSectionLinks() */
export const DESK_SECTION_LINKS: MainNavLink[] = deskSectionLinks();
/** @deprecated Prefer mobileBottomNavLinks() */
export const MOBILE_BOTTOM_NAV_LINKS: MainNavLink[] = mobileBottomNavLinks();

/** All feature routes — Tools directory */
export type ToolCategory = "desk" | "postseason" | "analysis" | "community" | "publishing";

export const TOOL_CATEGORY_ORDER: ToolCategory[] = ["desk", "postseason", "analysis", "community", "publishing"];

export const TOOL_CATEGORY_LABELS: Record<ToolCategory, string> = {
  desk: "Daily desk",
  postseason: "Playoffs & health",
  analysis: "Analysis & tools",
  community: "Community & companion",
  publishing: "Publishing & account",
};

export interface ToolLink {
  label: string;
  href: string;
  description: string;
  category: ToolCategory;
  /** Hide from the public /tools grid (admin, opt-out, internals). */
  hideFromDirectory?: boolean;
}

export const TOOLS_DIRECTORY: ToolLink[] = [
  { label: "Today’s desk", href: "/", description: "Daily briefing, scores, Pulse Index, slate", category: "desk" },
  { label: "Archive", href: "/archive", description: "Past morning editions", category: "desk" },
  { label: "Pulse history", href: "/pulse-history", description: "Ranking history", category: "desk" },
  { label: "My Pulse", href: "/my-pulse", description: "Personalized edition", category: "desk" },
  { label: "Print edition", href: "/print-edition", description: "Clean PDF / print sheet", category: "desk" },
  { label: "Playoffs", href: "/playoffs", description: "Bracket and series board", category: "postseason" },
  { label: "Picks", href: "/pick-em", description: "Bracket-style picks", category: "postseason" },
  { label: "Injuries", href: "/injuries", description: "Full injury report", category: "postseason" },
  { label: "Rival alerts", href: "/rivals", description: "Headline banners for grudge games", category: "postseason" },
  { label: "Performance", href: "/performance", description: "AI season tracker", category: "analysis" },
  { label: "Momentum", href: "/momentum", description: "Game momentum swings", category: "analysis" },
  { label: "Lineups", href: "/lineups", description: "Lineup intel", category: "analysis" },
  { label: "Trade value", href: "/trade-value", description: "Trade value charts", category: "analysis" },
  { label: "Trade simulator", href: "/trade-simulator", description: "Mock trades", category: "analysis" },
  { label: "Clutch", href: "/clutch", description: "Clutch factor", category: "analysis" },
  { label: "Draft", href: "/draft", description: "Draft tracker", category: "analysis" },
  { label: "Sentiment", href: "/sentiment", description: "Sentiment pulse", category: "analysis" },
  { label: "Tactics", href: "/tactics", description: "Coach corner", category: "analysis" },
  { label: "Projections", href: "/projections", description: "Projections", category: "analysis" },
  { label: "Badges", href: "/badges", description: "Achievement badges", category: "analysis" },
  { label: "History engine", href: "/history", description: "Historical lookups", category: "analysis" },
  { label: "Ref reports", href: "/refs", description: "Crew tendencies", category: "analysis" },
  { label: "Ask Hoops Intel", href: "/ask", description: "Full-page assistant", category: "analysis" },
  { label: "Player compare", href: "/compare-players", description: "Pulse Index side-by-side", category: "analysis" },
  { label: "Pulse methodology", href: "/pulse-methodology", description: "How Pulse rankings are judged", category: "analysis" },
  { label: "82-0 Challenge", href: "/82-0", description: "Spin eras, draft a five, chase the perfect season", category: "community" },
  { label: "Community pulse", href: "/community-pulse", description: "Community trends", category: "community" },
  { label: "Watch guide", href: "/watch-guide", description: "What to watch", category: "community" },
  { label: "Podcast companion", href: "/podcast-companion", description: "Show notes mode", category: "community" },
  { label: "Guest Pulse pitch", href: "/guest-pulse", description: "Submit a takeover idea", category: "community" },
  { label: "Widgets", href: "/widgets", description: "Embeddable widgets", category: "publishing" },
  {
    label: "Embed analytics",
    href: "/embed-stats",
    description: "Publisher dashboard — embed load trends and CSV export",
    category: "publishing",
    hideFromDirectory: true,
  },
  {
    label: "Widget load timeline",
    href: "/widgets/analytics",
    description: "Stacked daily embed loads — pulse vs ticker vs injury",
    category: "publishing",
    hideFromDirectory: true,
  },
  {
    label: "Guest Pulse queue",
    href: "/creator-queue",
    description: "Moderate Guest Pulse submissions (admin secret)",
    category: "publishing",
    hideFromDirectory: true,
  },
  { label: "Account", href: "/account", description: "Profile, Pro billing, shortcuts", category: "publishing" },
  { label: "Hoops Intel Pro", href: "/pro", description: "Pro tier", category: "publishing" },
  { label: "Hoops IQ (Trivia)", href: "/trivia", description: "IQ challenges", category: "publishing" },
  {
    label: "Unsubscribe digest",
    href: "/unsubscribe",
    description: "Email opt-out page",
    category: "publishing",
    hideFromDirectory: true,
  },
];

/** Publisher / embed surfaces — linked from /tools and /pro (noindex, not in sitemap). */
export const DISTRIBUTION_TOOL_HREFS = ["/widgets", "/embed-stats", "/widgets/analytics"] as const;

export function distributionTools() {
  return DISTRIBUTION_TOOL_HREFS.map((href) => TOOLS_DIRECTORY.find((t) => t.href === href)).filter(
    (t): t is ToolLink => Boolean(t),
  );
}

export function publicToolsDirectory() {
  return TOOLS_DIRECTORY.filter((t) => !t.hideFromDirectory);
}

/** Related tools in the same category (excluding current route). */
export function relatedToolsForHref(href: string, limit = 4) {
  const path = href.split("#")[0] || href;
  const current = TOOLS_DIRECTORY.find((t) => t.href === path || path.startsWith(`${t.href}/`));
  const category = current?.category ?? "analysis";
  return publicToolsDirectory()
    .filter((t) => t.href !== path && t.category === category)
    .slice(0, limit);
}
