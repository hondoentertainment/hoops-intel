import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Player from "./pages/Player";
import Team from "./pages/Team";

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{ background: "#050D1A", color: "rgba(255,255,255,0.85)" }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/player/:slug" component={Player} />
          <Route path="/team/:abbr" component={Team} />
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
      </div>
    </ThemeProvider>
  );
}
