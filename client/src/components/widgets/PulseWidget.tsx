// PulseWidget — Compact Pulse Index showing top 5 players
// Self-contained component for embedding

import { pulseIndex } from "../../lib/pulseData";

interface PulseWidgetProps {
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large";
}

const sizeConfig = {
  small: { width: 280, fontSize: 11, padding: 12, rowPad: 8 },
  medium: { width: 360, fontSize: 13, padding: 16, rowPad: 10 },
  large: { width: 440, fontSize: 14, padding: 20, rowPad: 12 },
};

export default function PulseWidget({ theme = "dark", size = "medium" }: PulseWidgetProps) {
  const isDark = theme === "dark";
  const cfg = sizeConfig[size];
  const top5 = pulseIndex.slice(0, 5);

  const bg = isDark ? "#0A1628" : "#FFFFFF";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const textPrimary = isDark ? "#FFFFFF" : "#1A1A2E";
  const textSecondary = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
  const accent = "#0EA5E9";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  const trendColor = (trend: string) => {
    if (trend === "up") return "#10B981";
    if (trend === "down") return "#F43F5E";
    return "rgba(255,255,255,0.3)";
  };

  const trendArrow = (trend: string) => {
    if (trend === "up") return "\u25B2";
    if (trend === "down") return "\u25BC";
    return "\u25CF";
  };

  return (
    <div
      style={{
        width: cfg.width,
        background: bg,
        borderRadius: 12,
        border: `1px solid ${border}`,
        padding: cfg.padding,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: cfg.padding }}>
        <div
          style={{
            fontSize: cfg.fontSize - 2,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: accent,
            textTransform: "uppercase" as const,
            marginBottom: 4,
          }}
        >
          PULSE INDEX
        </div>
        <div
          style={{
            fontSize: cfg.fontSize + 4,
            fontWeight: 800,
            color: textPrimary,
            lineHeight: 1.2,
          }}
        >
          Today's Top 5
        </div>
      </div>

      {/* Player rows */}
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
        {top5.map((p) => (
          <div
            key={p.rank}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: cfg.rowPad,
              borderRadius: 8,
              background: cardBg,
            }}
          >
            {/* Rank */}
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: p.rank === 1 ? accent : "transparent",
                border: p.rank === 1 ? "none" : `1px solid ${border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: cfg.fontSize - 1,
                fontWeight: 800,
                color: p.rank === 1 ? "#fff" : textSecondary,
                flexShrink: 0,
              }}
            >
              {p.rank}
            </div>

            {/* Name + Team */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: cfg.fontSize,
                  fontWeight: 700,
                  color: textPrimary,
                  whiteSpace: "nowrap" as const,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {p.player}
              </div>
              <div
                style={{
                  fontSize: cfg.fontSize - 2,
                  color: textSecondary,
                }}
              >
                {p.team} · {p.teamRecord}
              </div>
            </div>

            {/* Trend */}
            <div
              style={{
                fontSize: cfg.fontSize - 3,
                color: trendColor(p.trend),
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {trendArrow(p.trend)}
            </div>

            {/* Score */}
            <div
              style={{
                fontSize: cfg.fontSize + 1,
                fontWeight: 800,
                color: accent,
                fontFamily: "'Barlow Condensed', sans-serif",
                flexShrink: 0,
                minWidth: 32,
                textAlign: "right" as const,
              }}
            >
              {p.indexScore}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: cfg.padding,
          paddingTop: cfg.rowPad,
          borderTop: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: accent,
          }}
        />
        <span
          style={{
            fontSize: cfg.fontSize - 3,
            color: textSecondary,
            fontWeight: 500,
          }}
        >
          Powered by Hoops Intel
        </span>
      </div>
    </div>
  );
}
