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
const Trivia = lazy(() => import("./pages/Trivia"));
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

function VercelAnalyticsScript() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (typeof document === "undefined") return;
    if (document.querySelector('script[data-hi-vercel-insights="1"]')) return;
    const s = document.createElement("script");
    s.dataset.hiVercelInsights = "1";
    s.src = "/_vercel/insights/script.js";
    s.defer = true;
    document.body.appendChild(s);
  }, []);
  return null;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] px-4" role="status" aria-live="polite">
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded border-2 border-t-transparent animate-spin shrink-0"
            style={{ borderColor: "#0EA5E9", borderTopColor: "transparent" }}
            aria-hidden
          />
          <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
            Loading page…
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

  return (
    <ThemeProvider switchable={true}>
      <ToastProvider>
      <RouteSeo />
      <SkipToContent />
      <VercelAnalyticsScript />
      <div
        className="min-h-screen pb-16 md:pb-0"
        style={{
          background: "var(--hi-bg-page, #050d1a)",
          color: "var(--hi-shell-text, rgba(255,255,255,0.85))",
        }}
      >
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
            <Route path="/pick-em" component={PickEm} />
            <Route path="/trade-value" component={TradeValue} />
            <Route path="/injuries" component={InjuryReport} />
            <Route path="/card/:player" component={PlayerCard} />
            <Route path="/trivia" component={Trivia} />
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
              <main id="main-content" tabIndex={-1} className="container py-20 text-center outline-none" lang="en">
                <p className="section-label mb-3">NOT FOUND</p>
                <h1 className="display-heading text-2xl font-bold text-white mb-4">404 — Page not found</h1>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  That route is not part of Hoops Intel. Try search (⌘K / Ctrl+K) from any page.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                  <a href="/" className="text-sky-400 underline">
                    Today&apos;s desk
                  </a>
                  <a href="/tools" className="text-sky-400 underline">
                    All tools
                  </a>
                  <a href="/archive" className="text-sky-400 underline">
                    Archive
                  </a>
                </div>
              </main>
            </Route>
          </Switch>
        </Suspense>
        </RouteErrorBoundary>
        <AskHoopsIntel />
        <MobileBottomNav />
        <BackToTop />
        <PwaInstallPrompt />
        <KeyboardShortcutsHelp />
      </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
