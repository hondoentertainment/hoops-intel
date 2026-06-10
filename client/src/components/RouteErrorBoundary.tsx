import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Changes (e.g. the current path) reset the boundary so navigating away recovers. */
  resetKey?: string;
};

type State = { err: Error | null };

/**
 * Top-level boundary for the lazy route tree. A failed chunk download (stale
 * deploy, flaky network) throws inside Suspense and would otherwise blank the
 * whole page; here it falls back to a recoverable shell instead.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { err: null };

  static getDerivedStateFromError(err: Error): State {
    return { err };
  }

  componentDidUpdate(prev: Props) {
    if (this.state.err && prev.resetKey !== this.props.resetKey) {
      this.setState({ err: null });
    }
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn("[hoops-intel/route]", err, info.componentStack);
    }
  }

  render() {
    if (!this.state.err) return this.props.children;

    const isChunkError = /chunk|dynamically imported module|Failed to fetch/i.test(
      this.state.err.message,
    );

    return (
      <main id="main-content" tabIndex={-1} className="container py-20 text-center outline-none" role="alert" aria-live="assertive">
        <p className="section-label mb-3">SOMETHING BROKE</p>
        <h1 className="display-heading text-2xl font-bold text-white mb-4">
          This page didn&apos;t load
        </h1>
        <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
          {isChunkError
            ? "A newer version of the site shipped while you were here. Reloading will pull the latest."
            : "An unexpected error stopped this page from rendering. Reloading usually clears it."}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#0EA5E9" }}
          >
            Reload page
          </button>
          <a
            href="/"
            className="px-5 py-2 rounded text-sm font-semibold transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Back to today&apos;s desk
          </a>
        </div>
      </main>
    );
  }
}
