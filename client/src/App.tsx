import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";

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
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{ background: "#050D1A", color: "rgba(255,255,255,0.85)" }}
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
      </div>
    </ThemeProvider>
  );
}
