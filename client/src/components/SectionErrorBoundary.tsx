import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Short label for logs and fallback copy */
  section: string;
  fallback?: ReactNode;
};

type State = { err: Error | null };

/** Isolates a desk section so one render error does not blank the home page. */
export default class SectionErrorBoundary extends Component<Props, State> {
  state: State = { err: null };

  static getDerivedStateFromError(err: Error): State {
    return { err };
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(`[hoops-intel/${this.props.section}]`, err, info.componentStack);
    }
  }

  render() {
    if (!this.state.err) return this.props.children;
    if (this.props.fallback) return this.props.fallback;
    return (
      <section
        className="rounded-xl border border-amber-500/25 bg-amber-500/[0.06] p-4 sm:p-5"
        role="alert"
        aria-live="polite"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300/90 mb-2">
          Section unavailable
        </p>
        <p className="text-sm text-white/70">
          {this.props.section} could not load. The rest of today&apos;s desk is still available below.
        </p>
      </section>
    );
  }
}
