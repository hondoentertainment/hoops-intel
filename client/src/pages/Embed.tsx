// /embed/:id — Minimal chrome-less page that renders a single widget so it
// can be embedded via iframe or <script>. Never shows navigation or footer.

import {
  Component,
  type ErrorInfo,
  type ReactElement,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { useRoute } from "wouter";
import PulseWidget from "../components/widgets/PulseWidget";
import TickerWidget from "../components/widgets/TickerWidget";
import InjuryWidget from "../components/widgets/InjuryWidget";

type WidgetSize = "small" | "medium" | "large";
type WidgetTheme = "dark" | "light";

function useQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const theme = (params.get("theme") === "light" ? "light" : "dark") as WidgetTheme;
  const rawSize = params.get("size");
  const size: WidgetSize =
    rawSize === "small" || rawSize === "medium" || rawSize === "large" ? rawSize : "medium";
  return { theme, size };
}

type EBProps = { children: ReactNode; widgetId?: string; theme: WidgetTheme };

class EmbedErrorBoundary extends Component<EBProps, { err: Error | null }> {
  state = { err: null as Error | null };

  static getDerivedStateFromError(err: Error) {
    return { err };
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn("[hoops-intel/embed]", err, info.componentStack);
    }
  }

  render() {
    if (!this.state.err) return this.props.children;
    const t = this.props.theme === "dark";
    return (
      <div style={{ background: t ? "#050d1a" : "#ffffff", padding: "1rem" }} role="alert">
        <div
          className="rounded-lg p-4 text-sm"
          style={{
            border: "1px solid rgba(239,68,68,0.35)",
            background: "rgba(239,68,68,0.06)",
            color: t ? "rgba(255,255,255,0.88)" : "#1e293b",
          }}
        >
          &quot;{this.props.widgetId}&quot; could not render in this iframe.&nbsp;
          <a href="https://hoopsintel.net/widgets" style={{ color: "#0EA5E9" }}>
            Copy a fresh snippet
          </a>
          .
          <span className="block text-[10px] mt-2 opacity-70">{this.state.err.message}</span>
        </div>
      </div>
    );
  }
}

function renderWidget(widgetId: string | undefined, theme: WidgetTheme, size: WidgetSize): ReactElement {
  switch (widgetId) {
    case "pulse":
      return <PulseWidget theme={theme} size={size} />;
    case "ticker":
      return <TickerWidget theme={theme} size={size} />;
    case "injury":
      return <InjuryWidget theme={theme} size={size} />;
    default:
      return (
        <div
          className="p-6 rounded-xl text-center mx-2 mt-4"
          style={{
            border: theme === "dark" ? "1px dashed rgba(255,255,255,0.12)" : "1px dashed rgba(0,0,0,0.14)",
          }}
          role="status"
          aria-live="polite"
        >
          <div className="text-sm font-semibold mb-1" style={{ color: theme === "dark" ? "#f8fafc" : "#0f172a" }}>
            Widget not available
          </div>
          <p className="text-xs leading-relaxed" style={{ color: theme === "dark" ? "rgba(248,250,252,0.58)" : "rgba(15,23,42,0.65)" }}>
            Use <strong>pulse</strong>, <strong>ticker</strong>, or <strong>injury</strong> in this URL.&nbsp;
            Preview snippets at{" "}
            <a href="https://hoopsintel.net/widgets" style={{ color: "#0EA5E9" }}>
              /widgets
            </a>
            .
          </p>
        </div>
      );
  }
}

function EmbedChrome({
  theme,
  children,
}: {
  theme: WidgetTheme;
  children: ReactNode;
}) {
  const bg = theme === "dark" ? "var(--hi-bg-page, #050D1A)" : "#ffffff";
  const foot = theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.42)";
  return (
    <div style={{ background: bg, minHeight: "100%", padding: 0, margin: 0 }}>
      {children}
      <div className="text-[10px] py-1 px-2 text-right" style={{ color: foot }}>
        Powered by{" "}
        <a href="https://hoopsintel.net" target="_blank" rel="noopener noreferrer" style={{ color: "#0EA5E9", textDecoration: "none" }}>
          Hoops Intel
        </a>
      </div>
    </div>
  );
}

export default function Embed() {
  const [, params] = useRoute("/embed/:id");
  const { theme, size } = useQueryParams();
  const widgetId = params?.id;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    const report = () => {
      const h = document.documentElement.scrollHeight;
      try {
        window.parent?.postMessage({ type: "hoops-intel-resize", height: h }, "*");
      } catch {
        // ignore cross-origin failures
      }
    };
    report();
    const ro = new ResizeObserver(report);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [widgetId, mounted, theme, size]);

  useEffect(() => {
    if (!mounted || !widgetId) return;
    if (widgetId !== "pulse" && widgetId !== "ticker" && widgetId !== "injury") return;
    const payload = JSON.stringify({
      widgetId,
      referrer: typeof document !== "undefined" ? document.referrer ?? "" : "",
    });
    void fetch("/api/embed-analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  }, [mounted, widgetId]);

  const bgShell = theme === "dark" ? "var(--hi-bg-page, #050D1A)" : "#ffffff";

  if (!mounted) {
    return (
      <div style={{ background: bgShell, minHeight: "120px", padding: "1rem" }} role="progressbar" aria-busy aria-label="Loading widget">
        <div
          className="h-24 rounded-xl animate-pulse mx-auto max-w-md"
          style={{ background: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
        />
        <div
          className="text-[10px] mt-3 text-center"
          style={{ color: theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.4)" }}
        >
          Loading Hoops Intel…
        </div>
      </div>
    );
  }

  const needsBoundary = widgetId === "pulse" || widgetId === "ticker" || widgetId === "injury";
  const body = renderWidget(widgetId, theme, size);

  return (
    <EmbedChrome theme={theme}>
      {needsBoundary ? (
        <EmbedErrorBoundary widgetId={widgetId} theme={theme}>
          {body}
        </EmbedErrorBoundary>
      ) : (
        body
      )}
    </EmbedChrome>
  );
}
