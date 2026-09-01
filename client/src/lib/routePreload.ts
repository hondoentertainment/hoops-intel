// Route chunk preloading — Vite dedupes these dynamic imports against the
// lazy() calls in App.tsx, so warming a chunk here makes the eventual
// navigation render instantly instead of showing the page loader.

type Importer = () => Promise<unknown>;

const STATIC_IMPORTERS: Record<string, Importer> = {
  "/archive": () => import("../pages/Archive"),
  "/pulse-history": () => import("../pages/PulseHistory"),
  "/playoffs": () => import("../pages/PlayoffBracket"),
  "/pick-em": () => import("../pages/PickEm"),
  "/trade-value": () => import("../pages/TradeValue"),
  "/injuries": () => import("../pages/InjuryReport"),
  "/tonight": () => import("../pages/Tonight"),
  "/trivia": () => import("../pages/Trivia"),
  "/82-0": () => import("../pages/EightyTwoZero"),
  "/performance": () => import("../pages/SeasonPerformance"),
  "/momentum": () => import("../pages/Momentum"),
  "/lineups": () => import("../pages/LineupIntel"),
  "/trade-simulator": () => import("../pages/TradeSimulator"),
  "/clutch": () => import("../pages/ClutchFactor"),
  "/draft": () => import("../pages/DraftTracker"),
  "/sentiment": () => import("../pages/SentimentPulse"),
  "/tactics": () => import("../pages/CoachCorner"),
  "/projections": () => import("../pages/Projections"),
  "/badges": () => import("../pages/Badges"),
  "/community-pulse": () => import("../pages/CommunityPulse"),
  "/watch-guide": () => import("../pages/WatchGuide"),
  "/widgets": () => import("../pages/Widgets"),
  "/widgets/analytics": () => import("../pages/WidgetAnalytics"),
  "/embed-stats": () => import("../pages/EmbedPublisherStats"),
  "/podcast-companion": () => import("../pages/PodcastCompanion"),
  "/history": () => import("../pages/HistoryEngine"),
  "/refs": () => import("../pages/RefReports"),
  "/ask": () => import("../pages/AskAI"),
  "/my-pulse": () => import("../pages/MyPulse"),
  "/pro": () => import("../pages/Pro"),
  "/account": () => import("../pages/Account"),
  "/tools": () => import("../pages/Tools"),
  "/unsubscribe": () => import("../pages/Unsubscribe"),
  "/compare-players": () => import("../pages/PlayerCompare"),
  "/betting-intel": () => import("../pages/BettingIntel"),
  "/print-edition": () => import("../pages/PrintEdition"),
  "/guest-pulse": () => import("../pages/GuestPulse"),
  "/rivals": () => import("../pages/Rivals"),
  "/pulse-methodology": () => import("../pages/PulseMethodology"),
  "/creator-queue": () => import("../pages/CreatorQueue"),
};

const PREFIX_IMPORTERS: [string, Importer][] = [
  ["/player/", () => import("../pages/Player")],
  ["/team/", () => import("../pages/Team")],
  ["/game/", () => import("../pages/GameCenter")],
  ["/card/", () => import("../pages/PlayerCard")],
  ["/playoffs/series/", () => import("../pages/PlayoffSeriesRedirect")],
];

/** Most-travelled destinations, warmed during idle time after first paint. */
export const HOT_ROUTES = ["/tools", "/archive", "/injuries", "/tonight", "/playoffs", "/82-0", "/trivia", "/pick-em", "/my-pulse", "/ask"];

export function importerForPath(pathname: string): Importer | null {
  const direct = STATIC_IMPORTERS[pathname];
  if (direct) return direct;
  for (const [prefix, importer] of PREFIX_IMPORTERS) {
    if (pathname.startsWith(prefix)) return importer;
  }
  return null;
}

const warmed = new Set<string>();

/** Fire-and-forget chunk warm-up; failures are irrelevant (nav still works). */
export function preloadRoute(pathname: string): void {
  if (warmed.has(pathname)) return;
  const importer = importerForPath(pathname);
  if (!importer) return;
  warmed.add(pathname);
  importer().catch(() => {
    warmed.delete(pathname);
  });
}

export function preloadHotRoutes(): void {
  for (const path of HOT_ROUTES) preloadRoute(path);
}
