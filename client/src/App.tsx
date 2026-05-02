import { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import AskHoopsIntel from "./components/AskHoopsIntel";

// Eager load Home (critical path)
import Home from "./pages/Home";

// Lazy load all other pages for code splitting
const Archive = lazy(() => import("./pages/Archive"));
const Player = lazy(() => import("./pages/Player"));
const Team = lazy(() => import("./pages/Team"));
const PulseHistory = lazy(() => import("./pages/PulseHistory"));
const PlayoffBracket = lazy(() => import("./pages/PlayoffBracket"));
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
const PodcastCompanion = lazy(() => import("./pages/PodcastCompanion"));
const HistoryEngine = lazy(() => import("./pages/HistoryEngine"));
const RefReports = lazy(() => import("./pages/RefReports"));
const AskAI = lazy(() => import("./pages/AskAI"));
const MyPulse = lazy(() => import("./pages/MyPulse"));
const Pro = lazy(() => import("./pages/Pro"));
const Embed = lazy(() => import("./pages/Embed"));
const Tools = lazy(() => import("./pages/Tools"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const PlayerCompare = lazy(() => import("./pages/PlayerCompare"));
const BettingIntel = lazy(() => import("./pages/BettingIntel"));
const PrintEdition = lazy(() => import("./pages/PrintEdition"));
const GuestPulse = lazy(() => import("./pages/GuestPulse"));
const Rivals = lazy(() => import("./pages/Rivals"));

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
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div
          className="w-8 h-8 rounded border-2 border-t-transparent animate-spin mx-auto mb-3"
          style={{ borderColor: "#0EA5E9", borderTopColor: "transparent" }}
        />
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Loading...</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider switchable={true}>
      <VercelAnalyticsScript />
      <div
        className="min-h-screen"
        style={{
          background: "var(--hi-bg-page, #050d1a)",
          color: "var(--hi-shell-text, rgba(255,255,255,0.85))",
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/player/:slug" component={Player} />
            <Route path="/team/:abbr" component={Team} />
            <Route path="/pulse-history" component={PulseHistory} />
            <Route path="/playoffs" component={PlayoffBracket} />
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
            <Route path="/podcast-companion" component={PodcastCompanion} />
            <Route path="/history" component={HistoryEngine} />
            <Route path="/refs" component={RefReports} />
            <Route path="/ask" component={AskAI} />
            <Route path="/my-pulse" component={MyPulse} />
            <Route path="/pro" component={Pro} />
            <Route path="/tools" component={Tools} />
            <Route path="/embed/:id" component={Embed} />
            <Route path="/unsubscribe" component={Unsubscribe} />
            <Route path="/compare-players" component={PlayerCompare} />
            <Route path="/betting-intel" component={BettingIntel} />
            <Route path="/print-edition" component={PrintEdition} />
            <Route path="/guest-pulse" component={GuestPulse} />
            <Route path="/rivals" component={Rivals} />
            <Route>
              <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">404</h1>
                <p>Page not found</p>
                <a href="/" className="text-sky-400 underline mt-4 inline-block">
                  Back to Hoops Intel
                </a>
              </div>
            </Route>
          </Switch>
        </Suspense>
        <AskHoopsIntel />
      </div>
    </ThemeProvider>
  );
}
