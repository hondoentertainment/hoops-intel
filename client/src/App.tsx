import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./contexts/ToastContext";
import AskHoopsIntel from "./components/AskHoopsIntel";
import MobileBottomNav from "./components/MobileBottomNav";
import SkipToContent from "./components/SkipToContent";
import BackToTop from "./components/BackToTop";
import PwaInstallPrompt from "./components/PwaInstallPrompt";
import KeyboardShortcutsHelp from "./components/KeyboardShortcutsHelp";
import RouteSeo from "./components/RouteSeo";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import SpaNavigator from "./components/SpaNavigator";
import { incrementVisitCount } from "./lib/visitCount";
import { syncEngagementBadges } from "./lib/badgeChecks";

// Eager load Home (critical path)
import Home from "./pages/Home";

// Lazy load all other pages for code splitting
const Archive = lazy(() => import("./pages/Archive"));
const Player = lazy(() => import("./pages/Player"));
const Team = lazy(() => import("./pages/Team"));
const GameCenter = lazy(() => import("./pages/GameCenter"));
const PulseHistory = lazy(() => import("./pages/PulseHistory"));
const PlayoffBracket = lazy(() => import("./pages/PlayoffBracket"));
const PlayoffSeriesRedirect = lazy(() => import("./pages/PlayoffSeriesRedirect"));
const PickEm = lazy(() => import("./pages/PickEm"));
const TradeValue = lazy(() => import("./pages/TradeValue"));
const InjuryReport = lazy(() => import("./pages/InjuryReport"));
const Tonight = lazy(() => import("./pages/Tonight"));
const Players = lazy(() => import("./pages/Players"));
const Trivia = lazy(() => import("./pages/Trivia"));
const EightyTwoZero = lazy(() => import("./pages/EightyTwoZero"));
const PlayerCard = lazy(() => import("./pages/PlayerCard"));
const SeasonPerformance = lazy(() => import("./pages/SeasonPerformance"));

// New feature pages
const Momentum = lazy(() => import("./pages/Momentum"));
const LineupIntel = lazy(() => import("./pages/LineupIntel"));
const TradeSimulator = lazy(() => import("./pages/TradeSimulator"));
const ClutchFactor = lazy(() => import("./pages/ClutchFactor"));
const DraftTracker = lazy(() => import("./pages/DraftTracker"));
const SentimentPulse = lazy(() => import("./pages/SentimentPulse"));
const CoachCorner = lazy(() => import("./pages/CoachCorner"));
const Projections = lazy(() => import("./pages/Projections"));
const Badges = lazy(() => import("./pages/Badges"));
const CommunityPulse = lazy(() => import("./pages/CommunityPulse"));
const WatchGuide = lazy(() => import("./pages/WatchGuide"));
const Widgets = lazy(() => import("./pages/Widgets"));
const EmbedPublisherStats = lazy(() => import("./pages/EmbedPublisherStats"));
const PodcastCompanion = lazy(() => import("./pages/PodcastCompanion"));
const HistoryEngine = lazy(() => import("./pages/HistoryEngine"));
const RefReports = lazy(() => import("./pages/RefReports"));
const AskAI = lazy(() => import("./pages/AskAI"));
const MyPulse = lazy(() => import("./pages/MyPulse"));
const Pro = lazy(() => import("./pages/Pro"));
const Account = lazy(() => import("./pages/Account"));
const Embed = lazy(() => import("./pages/Embed"));
const Tools = lazy(() => import("./pages/Tools"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const PlayerCompare = lazy(() => import("./pages/PlayerCompare"));
const BettingIntel = lazy(() => import("./pages/BettingIntel"));
const PrintEdition = lazy(() => import("./pages/PrintEdition"));
const GuestPulse = lazy(() => import("./pages/GuestPulse"));
const Rivals = lazy(() => import("./pages/Rivals"));
const PulseMethodology = lazy(() => import("./pages/PulseMethodology"));
const WidgetAnalytics = lazy(() => import("./pages/WidgetAnalytics"));
const CreatorQueue = lazy(() => import("./pages/CreatorQueue"));
const NotFound = lazy(() => import("./pages/NotFound"));

function VercelAnalyticsScript() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (typeof document === "undefined") return;
    // vite preview / local hosts SPA-fallback HTML for /_vercel/*, which throws
    // SyntaxError: Unexpected token '<' and flakes E2E visual smoke.
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host.endsWith(".local")) {
      return;
    }
    if (document.querySelector('script[data-hi-vercel-insights="1"]')) return;
    const s = document.createElement("script");
    s.dataset.hiVercelInsights = "1";
    s.src = "/_vercel/insights/script.js";
    s.defer = true;
    s.onerror = () => {
      s.remove();
    };
    document.body.appendChild(s);
  }, []);
  return null;
}

function pageLoaderLabel(path: string): string {
  if (path.startsWith("/pick-em") || path === "/picks") return "Loading picks";
  if (path.startsWith("/playoffs")) return "Loading playoffs";
  if (path.startsWith("/ask")) return "Loading Ask Hoops Intel";
  if (path.startsWith("/injuries")) return "Loading injury report";
  if (path.startsWith("/tonight")) return "Loading tonight's slate";
  if (path.startsWith("/players") || path.startsWith("/player/")) return "Loading players";
  if (path.startsWith("/archive")) return "Loading archive";
  if (path.startsWith("/my-pulse")) return "Loading My Pulse";
  if (path.startsWith("/pro")) return "Loading Pro";
  if (path.startsWith("/tools")) return "Loading tools";
  return "Loading page";
}

function RedirectTo({ href }: { href: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(href);
  }, [href, setLocation]);
  return <PageLoader />;
}

function PageLoader() {
  const [location] = useLocation();
  return (
    <div className="flex items-center justify-center min-h-[50vh] px-4" role="status" aria-live="polite">
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded border-2 border-t-transparent animate-spin shrink-0"
            style={{ borderColor: "var(--hi-accent,#8ec8f0)", borderTopColor: "transparent" }}
            aria-hidden
          />
          <div className="text-sm font-medium" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            {pageLoaderLabel(location)}…
          </div>
        </div>
        <div className="space-y-2" aria-hidden>
          <div className="h-3 rounded bg-white/10 animate-pulse" />
          <div className="h-3 rounded bg-white/10 animate-pulse w-4/5" />
          <div className="h-24 rounded-lg bg-white/5 animate-pulse mt-4" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    incrementVisitCount();
    syncEngagementBadges();
  }, []);

  const chromeless = location.startsWith("/embed/");

  return (
    <ThemeProvider switchable={true}>
      <ToastProvider>
      <RouteSeo />
      <SpaNavigator />
      <SkipToContent />
      <VercelAnalyticsScript />
      <div
        className={`min-h-screen hi-app-shell${chromeless ? " hi-app-shell--chromeless" : ""}`}
        style={{
          background: "var(--hi-bg-page, #f7f7f5)",
          color: "var(--hi-shell-text, #5c5c58)",
        }}
      >
        <div className="hi-app-scroll">
        <RouteErrorBoundary resetKey={location}>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/game/:gameId" component={GameCenter} />
            <Route path="/player/:slug" component={Player} />
            <Route path="/team/:abbr" component={Team} />
            <Route path="/pulse-history" component={PulseHistory} />
            <Route path="/playoffs" component={PlayoffBracket} />
            <Route path="/playoffs/series/:seriesId" component={PlayoffSeriesRedirect} />
            <Route path="/picks">
              <RedirectTo href="/pick-em" />
            </Route>
            <Route path="/pick-em" component={PickEm} />
            <Route path="/trade-value" component={TradeValue} />
            <Route path="/injuries" component={InjuryReport} />
            <Route path="/tonight" component={Tonight} />
            <Route path="/players" component={Players} />
            <Route path="/card/:player" component={PlayerCard} />
            <Route path="/trivia" component={Trivia} />
            <Route path="/82-0" component={EightyTwoZero} />
            <Route path="/performance" component={SeasonPerformance} />
            <Route path="/momentum" component={Momentum} />
            <Route path="/lineups" component={LineupIntel} />
            <Route path="/trade-simulator" component={TradeSimulator} />
            <Route path="/clutch" component={ClutchFactor} />
            <Route path="/draft" component={DraftTracker} />
            <Route path="/sentiment" component={SentimentPulse} />
            <Route path="/tactics" component={CoachCorner} />
            <Route path="/projections" component={Projections} />
            <Route path="/badges" component={Badges} />
            <Route path="/community-pulse" component={CommunityPulse} />
            <Route path="/watch-guide" component={WatchGuide} />
            <Route path="/widgets" component={Widgets} />
            <Route path="/widgets/analytics" component={WidgetAnalytics} />
            <Route path="/embed-stats" component={EmbedPublisherStats} />
            <Route path="/podcast-companion" component={PodcastCompanion} />
            <Route path="/history" component={HistoryEngine} />
            <Route path="/refs" component={RefReports} />
            <Route path="/ask" component={AskAI} />
            <Route path="/my-pulse" component={MyPulse} />
            <Route path="/pro" component={Pro} />
            <Route path="/account" component={Account} />
            <Route path="/tools" component={Tools} />
            <Route path="/embed/:id" component={Embed} />
            <Route path="/unsubscribe" component={Unsubscribe} />
            <Route path="/compare-players" component={PlayerCompare} />
            <Route path="/betting-intel" component={BettingIntel} />
            <Route path="/print-edition" component={PrintEdition} />
            <Route path="/guest-pulse" component={GuestPulse} />
            <Route path="/pulse-methodology" component={PulseMethodology} />
            <Route path="/rivals" component={Rivals} />
            <Route path="/creator-queue" component={CreatorQueue} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
        </RouteErrorBoundary>
        </div>
        {chromeless ? null : <AskHoopsIntel />}
        {chromeless ? null : <MobileBottomNav />}
        {chromeless ? null : <BackToTop />}
        {chromeless ? null : <PwaInstallPrompt />}
        {chromeless ? null : <KeyboardShortcutsHelp />}
      </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
