// InjuryWidget — Compact injury list with status badges
// Self-contained component for embedding

import { injuryUpdates } from "../../lib/pulseData";

interface InjuryWidgetProps {
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large";
}

const sizeConfig = {
  small: { width: 280, fontSize: 11, padding: 12, rows: 5 },
  medium: { width: 360, fontSize: 13, padding: 16, rows: 6 },
  large: { width: 440, fontSize: 14, padding: 20, rows: 8 },
};

const statusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "out":
      return { color: "#F43F5E", bg: "rgba(244,63,94,0.12)" };
    case "questionable":
      return { color: "#F59E0B", bg: "rgba(245,158,11,0.12)" };
    case "day-to-day":
      return { color: "#EAB308", bg: "rgba(234,179,8,0.12)" };
    default:
      return { color: "#10B981", bg: "rgba(16,185,129,0.12)" };
  }
};

export default function InjuryWidget({ theme = "dark", size = "medium" }: InjuryWidgetProps) {
  const isDark = theme === "dark";
  const cfg = sizeConfig[size];

  const bg = isDark ? "#0A1628" : "#FFFFFF";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const textPrimary = isDark ? "#FFFFFF" : "#1A1A2E";
  const textSecondary = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
  const accent = "#F43F5E";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // Sort by impact (high first), take top N
  const impactOrder = { high: 3, medium: 2, low: 1 };
  const sorted = [...injuryUpdates]
    .sort((a, b) => (impactOrder[b.impact as keyof typeof impactOrder] || 0) - (impactOrder[a.impact as keyof typeof impactOrder] || 0))
    .slice(0, cfg.rows);

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
          INJURY WIRE
        </div>
        <div
          style={{
            fontSize: cfg.fontSize + 4,
            fontWeight: 800,
            color: textPrimary,
            lineHeight: 1.2,
          }}
        >
          Latest Updates
        </div>
      </div>

      {/* Injury rows */}
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
        {sorted.map((injury, i) => {
          const sc = statusColor(injury.status);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: `${cfg.padding - 4}px ${cfg.padding - 4}px`,
                borderRadius: 8,
                background: cardBg,
                borderLeft: `3px solid ${sc.color}`,
              }}
            >
              {/* Player info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: cfg.fontSize,
                      fontWeight: 700,
                      color: textPrimary,
                      whiteSpace: "nowrap" as const,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {injury.player}
                  </span>
                  <span
                    style={{
                      fontSize: cfg.fontSize - 3,
                      color: textSecondary,
                      fontWeight: 500,
                    }}
                  >
                    {injury.team}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: cfg.fontSize - 2,
                    color: textSecondary,
                    whiteSpace: "nowrap" as const,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {injury.injury}
                </div>
              </div>

              {/* Status badge */}
              <span
                style={{
                  fontSize: cfg.fontSize - 3,
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: 12,
                  background: sc.bg,
                  color: sc.color,
                  whiteSpace: "nowrap" as const,
                  flexShrink: 0,
                  textTransform: "uppercase" as const,
                }}
              >
                {injury.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: cfg.padding,
          paddingTop: cfg.padding - 6,
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
            background: "#0EA5E9",
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
