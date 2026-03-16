import { useState } from "react";
import {
  getSeasonStats,
  getTopMentionedPlayers,
  getTeamCoverage,
  getSeasonHighlights,
  getCoverageTimeline,
} from "../lib/seasonShowcase";
import { getTeamColor } from "../lib/teamColors";
import { slugify } from "../lib/searchUtils";

const stats = getSeasonStats();
const topPlayers = getTopMentionedPlayers(15);
const teamCoverage = getTeamCoverage();
const highlights = getSeasonHighlights();
const timeline = getCoverageTimeline();

const categoryColors: Record<string, string> = {
  historic: "#F59E0B",
  milestone: "#8B5CF6",
  performance: "#0EA5E9",
  streak: "#10B981",
  comeback: "#F97316",
  debut: "#EC4899",
};

const categoryLabels: Record<string, string> = {
  historic: "HISTORIC",
  milestone: "MILESTONE",
  performance: "BIG NIGHT",
  streak: "STREAK",
  comeback: "COMEBACK",
  debut: "RETURN",
};

// ═══════════════════════════════════════════════════════════
// STAT CARD
// ═══════════════════════════════════════════════════════════

function StatCard({ value, label, accent }: { value: string | number; label: string; accent?: string }) {
  return (
    <div
      className="glass-card p-5 text-center"
      style={{ borderLeft: `3px solid ${accent || "#0EA5E9"}` }}
    >
      <div className="mono-data text-3xl font-bold mb-1" style={{ color: accent || "#0EA5E9" }}>
        {value}
      </div>
      <div className="section-label text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
        {label}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// COVERAGE BAR CHART
// ═══════════════════════════════════════════════════════════

function CoverageChart() {
  const maxGames = Math.max(...timeline.map((t) => t.games));

  return (
    <div className="glass-card p-5">
      <div className="section-label mb-4">GAMES COVERED PER EDITION</div>
      <div className="flex items-end gap-1" style={{ height: 120 }}>
        {timeline.map((t, i) => {
          const height = (t.games / maxGames) * 100;
          return (
            <div
              key={i}
              className="flex-1 group relative cursor-pointer"
              style={{ height: "100%" }}
            >
              <div
                className="absolute bottom-0 w-full rounded-t transition-all group-hover:opacity-100"
                style={{
                  height: `${height}%`,
                  background: `linear-gradient(to top, #0EA5E9, #38BDF8)`,
                  opacity: 0.7,
                  minHeight: 4,
                }}
              />
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none px-2 py-1 rounded"
                style={{ background: "rgba(0,0,0,0.8)", color: "#fff", fontSize: "0.65rem" }}
              >
                {t.label}: {t.games} games
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          {timeline[0]?.label}
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          {timeline[timeline.length - 1]?.label}
        </span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HIGHLIGHT CARD
// ═══════════════════════════════════════════════════════════

function HighlightCard({ highlight }: { highlight: typeof highlights[0] }) {
  const color = categoryColors[highlight.category];
  const label = categoryLabels[highlight.category];

  return (
    <div
      className="glass-card p-4 hover:border-sky-500/30 transition-all"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="section-label text-xs px-2 py-0.5 rounded"
          style={{ background: `${color}20`, color }}
        >
          {label}
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          {highlight.displayDate}
        </span>
      </div>
      <div className="text-sm font-semibold text-white mb-1">
        {highlight.headline}
      </div>
      <div className="flex items-center gap-2">
        <a
          href={`/player/${slugify(highlight.topPlayer)}`}
          className="text-xs font-medium hover:underline"
          style={{ color: "#0EA5E9" }}
        >
          {highlight.topPlayer}
        </a>
        <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          {highlight.topStatLine}
        </span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PLAYER LEADERBOARD
// ═══════════════════════════════════════════════════════════

function PlayerLeaderboard() {
  const maxMentions = topPlayers[0]?.mentions || 1;

  return (
    <div className="glass-card p-5">
      <div className="section-label mb-4">MOST COVERED PLAYERS</div>
      <div className="space-y-2">
        {topPlayers.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3">
            <span className="mono-data text-xs w-5 text-right" style={{ color: "rgba(255,255,255,0.3)" }}>
              {i + 1}
            </span>
            <a
              href={`/player/${slugify(p.name)}`}
              className="text-xs font-medium w-36 truncate hover:underline"
              style={{ color: i < 3 ? "#0EA5E9" : "rgba(255,255,255,0.7)" }}
            >
              {p.name}
            </a>
            <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(p.mentions / maxMentions) * 100}%`,
                  background: i < 3
                    ? "linear-gradient(to right, #0EA5E9, #38BDF8)"
                    : "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.25))",
                }}
              />
            </div>
            <span className="mono-data text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
              {p.mentions}
            </span>
            {p.topPerformances > 0 && (
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", fontSize: "0.6rem" }}
              >
                {p.topPerformances}x TOP
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TEAM HEATMAP
// ═══════════════════════════════════════════════════════════

function TeamHeatmap() {
  const maxMentions = teamCoverage[0]?.mentions || 1;

  return (
    <div className="glass-card p-5">
      <div className="section-label mb-4">TEAM COVERAGE MAP</div>
      <div className="flex flex-wrap gap-2">
        {teamCoverage.map((t) => {
          const intensity = t.mentions / maxMentions;
          const teamColor = getTeamColor(t.abbr);
          return (
            <a
              key={t.abbr}
              href={`/team/${t.abbr}`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded transition-all hover:scale-105"
              style={{
                background: `${teamColor}${Math.round(intensity * 40 + 8).toString(16).padStart(2, "0")}`,
                border: `1px solid ${teamColor}${Math.round(intensity * 60 + 15).toString(16).padStart(2, "0")}`,
              }}
            >
              <span className="section-label text-xs" style={{ color: teamColor }}>
                {t.abbr}
              </span>
              <span className="mono-data" style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)" }}>
                {t.mentions}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SEASON SHOWCASE PAGE
// ═══════════════════════════════════════════════════════════

export default function SeasonShowcase() {
  const [highlightFilter, setHighlightFilter] = useState<string>("all");

  const filteredHighlights = highlightFilter === "all"
    ? highlights
    : highlights.filter((h) => h.category === highlightFilter);

  const categories = ["all", ...new Set(highlights.map((h) => h.category))];

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(5,13,26,0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="container flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-xs font-medium hover:underline"
              style={{ color: "#0EA5E9" }}
            >
              &larr; Back
            </a>
            <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div className="display-heading text-white text-sm leading-none">SEASON SHOWCASE</div>
              <div className="section-label" style={{ fontSize: "0.55rem" }}>
                2025-26 NBA SEASON COVERAGE
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="section-label mb-2" style={{ color: "#0EA5E9" }}>
            HOOPS INTEL 2025-26
          </div>
          <h1 className="display-heading text-3xl md:text-4xl text-white mb-3">
            THE SEASON IN NUMBERS
          </h1>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Every score. Every stat line. Every historic moment. Hoops Intel has delivered
            daily NBA intelligence since the All-Star break — here's what we've covered.
          </p>
        </div>

        {/* Big Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard value={stats.totalEditions} label="DAILY EDITIONS" accent="#0EA5E9" />
          <StatCard value={stats.totalGames} label="GAMES COVERED" accent="#10B981" />
          <StatCard value={stats.uniquePlayers} label="PLAYERS TRACKED" accent="#F59E0B" />
          <StatCard value={stats.uniqueTeams} label="TEAMS COVERED" accent="#8B5CF6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <StatCard value={stats.daysOfCoverage} label="DAYS OF COVERAGE" accent="#EC4899" />
          <StatCard value={stats.avgGamesPerEdition} label="AVG GAMES / EDITION" accent="#F97316" />
          <StatCard value={stats.firstEdition.replace(", 2026", "")} label="FIRST EDITION" accent="rgba(255,255,255,0.3)" />
          <StatCard value={stats.latestEdition.replace(", 2026", "")} label="LATEST EDITION" accent="rgba(255,255,255,0.3)" />
        </div>

        {/* Coverage Timeline */}
        <div className="mb-10">
          <CoverageChart />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          {/* Highlights — 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="section-label">SEASON HIGHLIGHTS</div>
              <div className="flex gap-1 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setHighlightFilter(cat)}
                    className="px-2 py-1 rounded text-xs transition-all"
                    style={{
                      background: highlightFilter === cat
                        ? cat === "all" ? "rgba(14,165,233,0.2)" : `${categoryColors[cat]}20`
                        : "rgba(255,255,255,0.04)",
                      color: highlightFilter === cat
                        ? cat === "all" ? "#0EA5E9" : categoryColors[cat]
                        : "rgba(255,255,255,0.4)",
                      border: `1px solid ${highlightFilter === cat
                        ? cat === "all" ? "rgba(14,165,233,0.3)" : `${categoryColors[cat]}40`
                        : "rgba(255,255,255,0.06)"}`,
                    }}
                  >
                    {cat === "all" ? "ALL" : categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {filteredHighlights.length > 0 ? (
                filteredHighlights.map((h, i) => <HighlightCard key={i} highlight={h} />)
              ) : (
                <div className="glass-card p-6 text-center text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  No highlights in this category yet.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <PlayerLeaderboard />
            <TeamHeatmap />
          </div>
        </div>

        {/* Model Credit */}
        <div
          className="glass-card p-6 text-center mb-8"
          style={{ borderColor: "rgba(14,165,233,0.15)" }}
        >
          <div className="section-label mb-2" style={{ color: "#0EA5E9" }}>
            POWERED BY AI
          </div>
          <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            Every edition of Hoops Intel is researched, written, and published by Claude —
            Anthropic's AI assistant. Real scores. Real stats. Real analysis. Every single day.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="mono-data text-lg font-bold" style={{ color: "#10B981" }}>100%</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>AI-Generated</div>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="text-center">
              <div className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>{stats.totalEditions}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Editions Published</div>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="text-center">
              <div className="mono-data text-lg font-bold" style={{ color: "#F59E0B" }}>0</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Human Writers</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 px-4" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <div className="container text-center">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Hoops Intel · Not affiliated with the NBA · Data for entertainment purposes
          </p>
        </div>
      </footer>
    </div>
  );
}
