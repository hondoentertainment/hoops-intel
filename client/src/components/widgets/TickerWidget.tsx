// TickerWidget — Scrolling ticker of today's scores/alerts
// Self-contained component for embedding

import { tickerItems } from "../../lib/pulseData";

interface TickerWidgetProps {
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large";
}

const sizeConfig = {
  small: { width: 300, height: 36, fontSize: 11 },
  medium: { width: 480, height: 42, fontSize: 12 },
  large: { width: 640, height: 48, fontSize: 13 },
};

const typeStyles = (type: string, isDark: boolean) => {
  switch (type) {
    case "alert":
      return { color: "#F59E0B", dot: "#F59E0B" };
    case "injury":
      return { color: "#F43F5E", dot: "#F43F5E" };
    default:
      return { color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)", dot: "#0EA5E9" };
  }
};

export default function TickerWidget({ theme = "dark", size = "medium" }: TickerWidgetProps) {
  const isDark = theme === "dark";
  const cfg = sizeConfig[size];

  const bg = isDark ? "#0A1628" : "#FFFFFF";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const accent = "#0EA5E9";
  const textSecondary = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  // Filter to scores and alerts for the ticker
  const items = tickerItems.filter((t) => t.type === "score" || t.type === "alert");

  // Duplicate items for seamless scrolling
  const scrollContent = [...items, ...items];

  // Calculate animation duration based on content length
  const totalWidth = scrollContent.reduce((acc, item) => acc + item.text.length * 7 + 60, 0);
  const duration = Math.max(totalWidth / 35, 45);

  return (
    <div
      style={{
        width: cfg.width,
        height: cfg.height,
        background: bg,
        borderRadius: 8,
        border: `1px solid ${border}`,
        overflow: "hidden",
        position: "relative" as const,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Label */}
      <div
        style={{
          position: "absolute" as const,
          left: 0,
          top: 0,
          bottom: 0,
          width: 72,
          background: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          borderRadius: "7px 0 0 7px",
        }}
      >
        <span
          style={{
            fontSize: cfg.fontSize - 2,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
          }}
        >
          LIVE
        </span>
      </div>

      {/* Scrolling content */}
      <div
        style={{
          position: "absolute" as const,
          left: 80,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            whiteSpace: "nowrap" as const,
            animation: `ticker-scroll ${duration}s linear infinite`,
          }}
        >
          {scrollContent.map((item, i) => {
            const ts = typeStyles(item.type, isDark);
            return (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  paddingRight: 40,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: ts.dot,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: cfg.fontSize,
                    fontWeight: 600,
                    color: ts.color,
                  }}
                >
                  {item.text}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer badge */}
      <div
        style={{
          position: "absolute" as const,
          right: 8,
          bottom: -1,
          top: -1,
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(90deg, transparent, ${bg} 30%)`,
          paddingLeft: 20,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: cfg.fontSize - 3,
            color: textSecondary,
            fontWeight: 500,
          }}
        >
          hoopsintel.net
        </span>
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
