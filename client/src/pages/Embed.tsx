// /embed/:id — Minimal chrome-less page that renders a single widget so it
// can be embedded via iframe or <script>. Never shows navigation or footer.

import { useRoute } from "wouter";
import { useEffect, type ReactElement } from "react";
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

export default function Embed() {
  const [, params] = useRoute("/embed/:id");
  const { theme, size } = useQueryParams();

  // Post height to parent so iframe can auto-resize
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
  }, []);

  const widgetId = params?.id;
  const bg = theme === "dark" ? "#050D1A" : "#ffffff";

  let content: ReactElement;
  switch (widgetId) {
    case "pulse":
      content = <PulseWidget theme={theme} size={size} />;
      break;
    case "ticker":
      content = <TickerWidget theme={theme} size={size} />;
      break;
    case "injury":
      content = <InjuryWidget theme={theme} size={size} />;
      break;
    default:
      content = (
        <div className="p-4 text-sm" style={{ color: theme === "dark" ? "rgba(255,255,255,0.6)" : "#555" }}>
          Unknown widget: {widgetId}
        </div>
      );
  }

  return (
    <div style={{ background: bg, minHeight: "100%", padding: 0, margin: 0 }}>
      {content}
      <div
        className="text-[10px] py-1 px-2 text-right"
        style={{ color: theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.4)" }}
      >
        Powered by{" "}
        <a
          href="https://hoopsintel.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0EA5E9", textDecoration: "none" }}
        >
          Hoops Intel
        </a>
      </div>
    </div>
  );
}
