import { useState, useMemo } from "react";
import { getPlayerTrends, getBiggestMovers, type PlayerTrend } from "../lib/pulseHistory";
import { slugify } from "../lib/searchUtils";
import SiteHeader from "../components/SiteHeader";

// ═══════════════════════════════════════════════════════════
// TREND CHART — SVG sparkline with labels
// ═══════════════════════════════════════════════════════════

function TrendChart({ history, width = 200, height = 50 }: {
  history: { date: string; rank: number | null; score: number | null }[];
  width?: number;
  height?: number;
}) {
  const points = history
    .filter((h) => h.score !== null)
    .slice(0, 10)
    .reverse();
  if (points.length < 2) return null;

  const scores = points.map((p) => p.score!);
  const min = Math.min(...scores) - 5;
  const max = Math.max(...scores) + 5;
  const range = max - min || 1;

  const pathPoints = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p.score! - min) / range) * height;
    return `${x},${y}`;
  });

  const isUp = scores[scores.length - 1] >= scores[0];

  return (
    <svg width={width} height={height} className="flex-shrink-0">
      <defs>
        <linearGradient id={`grad-${isUp}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isUp ? "#10B981" : "#EF4444"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={isUp ? "#10B981" : "#EF4444"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${pathPoints.join(" ")} ${width},${height}`}
        fill={`url(#grad-${isUp})`}
      />
      <polyline
        points={pathPoints.join(" ")}
        fill="none"
        stroke={isUp ? "#10B981" : "#EF4444"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={width}
        cy={height - ((scores[scores.length - 1] - min) / range) * height}
        r="3"
        fill={isUp ? "#10B981" : "#EF4444"}
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
// MOVER CARD
// ═══════════════════════════════════════════════════════════

function MoverCard({ trend, direction }: { trend: PlayerTrend; direction: "up" | "down" }) {
  return (
    <div
      className="glass-card rounded-lg p-4 flex items-center gap-4"
      style={{ borderLeft: `3px solid ${direction === "up" ? "#10B981" : "#EF4444"}` }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
        style={{ background: direction === "up" ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)", color: direction === "up" ? "#10B981" : "#EF4444" }}
      >
        {direction === "up" ? "\u2191" : "\u2193"}
      </div>
      <div className="flex-1 min-w-0">
        <a href={`/player/${slugify(trend.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
          {trend.player}
        </a>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="section-label text-xs">{trend.team}</span>
          <span className="mono-data text-xs" style={{ color: direction === "up" ? "#10B981" : "#EF4444" }}>
            {direction === "up" ? "+" : ""}{Math.abs(trend.weeklyChange)} ranks
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>#{trend.currentRank}</div>
        <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{trend.currentScore.toFixed(1)}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PULSE HISTORY PAGE
// ═══════════════════════════════════════════════════════════

export default function PulseHistory() {
  const [sortBy, setSortBy] = useState<"rank" | "score" | "change">("rank");
  const trends = useMemo(() => getPlayerTrends(), []);
  const { risers, fallers } = useMemo(() => getBiggestMovers(), []);

  const sorted = useMemo(() => {
    const copy = [...trends];
    switch (sortBy) {
      case "rank": return copy.sort((a, b) => a.currentRank - b.currentRank);
      case "score": return copy.sort((a, b) => b.currentScore - a.currentScore);
      case "change": return copy.sort((a, b) => a.weeklyChange - b.weeklyChange);
    }
  }, [trends, sortBy]);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PULSE INDEX HISTORY" />

      <div className="container py-8">
        <div className="section-label mb-2">RANKINGS OVER TIME</div>
        <h1 className="display-heading text-white text-3xl mb-2">Pulse Index History</h1>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          Track how player rankings shift day to day. Trends based on recent edition data.
        </p>

        {/* Biggest Movers */}
        {(risers.length > 0 || fallers.length > 0) && (
          <div className="mb-8">
            <div className="section-label mb-3">BIGGEST MOVERS THIS WEEK</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-medium mb-2" style={{ color: "#10B981" }}>RISING</div>
                <div className="space-y-2">
                  {risers.map((t) => <MoverCard key={t.player} trend={t} direction="up" />)}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium mb-2" style={{ color: "#EF4444" }}>FALLING</div>
                <div className="space-y-2">
                  {fallers.map((t) => <MoverCard key={t.player} trend={t} direction="down" />)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sort controls */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Sort by:</span>
          {(["rank", "score", "change"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className="px-3 py-1 rounded text-xs font-medium transition-colors"
              style={{
                background: sortBy === s ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.04)",
                color: sortBy === s ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                border: `1px solid ${sortBy === s ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {s === "rank" ? "Rank" : s === "score" ? "Score" : "Weekly Change"}
            </button>
          ))}
        </div>

        {/* Player Table */}
        <div className="space-y-3">
          {sorted.map((trend) => (
            <div key={trend.player} className="glass-card rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                  style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}
                >
                  {trend.currentRank}
                </div>
                <div className="flex-1 min-w-0">
                  <a href={`/player/${slugify(trend.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                    {trend.player}
                  </a>
                  <div className="flex items-center gap-3 mt-0.5">
                    <a href={`/team/${trend.team}`} className="section-label text-xs hover:text-sky-400">{trend.team}</a>
                    <span className="mono-data text-xs" style={{ color: "#0EA5E9" }}>{trend.currentScore.toFixed(1)}</span>
                    {trend.weeklyChange !== 0 && (
                      <span
                        className="mono-data text-xs"
                        style={{ color: trend.weeklyChange < 0 ? "#10B981" : "#EF4444" }}
                      >
                        {trend.weeklyChange < 0 ? "\u2191" : "\u2193"}{Math.abs(trend.weeklyChange)}
                      </span>
                    )}
                  </div>
                </div>
                <TrendChart history={trend.history} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
