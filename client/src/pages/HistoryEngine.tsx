// Historical Context Engine — Past Meets Present

import SiteHeader from "../components/SiteHeader";
import { historyData } from "../lib/historyData";
import type { HistoricalComparison, MilestoneWatch as MilestoneWatchType } from "../lib/historyData";

// ═══════════════════════════════════════════════════════════
// VERDICT BADGE
// ═══════════════════════════════════════════════════════════

function VerdictBadge({ verdict }: { verdict: string }) {
  const styles: Record<string, { color: string; bg: string; border: string }> = {
    "On pace to surpass": { color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)" },
    "Falling short": { color: "#F43F5E", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.3)" },
    "Matching stride": { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" },
  };
  const s = styles[verdict] || styles["Matching stride"];
  return (
    <span
      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {verdict.toUpperCase()}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// COMPARISON CARD
// ═══════════════════════════════════════════════════════════

function ComparisonCard({ comp }: { comp: HistoricalComparison }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-sm font-bold text-white leading-snug flex-1">
            {comp.currentEvent}
          </h3>
          <VerdictBadge verdict={comp.verdict} />
        </div>

        {/* Split comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* Current */}
          <div
            className="rounded-lg p-3"
            style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#0EA5E9" }}>
              NOW
            </div>
            <div className="text-sm font-bold text-white mb-0.5">{comp.player}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{comp.team}</div>
          </div>

          {/* Historical */}
          <div
            className="rounded-lg p-3"
            style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)" }}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#F59E0B" }}>
              THEN
            </div>
            <div className="text-sm font-bold text-white mb-0.5">{comp.historicalParallel.player}</div>
            <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              {comp.historicalParallel.season}
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              {comp.historicalParallel.stat}
            </div>
          </div>
        </div>

        {/* Context */}
        <div className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
          {comp.historicalParallel.context}
        </div>

        {/* Comparison narrative */}
        <div
          className="rounded-lg p-3"
          style={{ background: "rgba(255,255,255,0.02)", borderLeft: "2px solid rgba(14,165,233,0.3)" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {comp.comparison}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MILESTONE CARD
// ═══════════════════════════════════════════════════════════

function MilestoneCard({ milestone }: { milestone: MilestoneWatchType }) {
  // Parse for progress bar
  const currentNum = parseFloat(milestone.current.replace(/[^\d.]/g, ""));
  const neededNum = parseFloat(milestone.needed.replace(/[^\d.]/g, ""));
  const total = currentNum + neededNum;
  const pct = total > 0 ? (currentNum / total) * 100 : 0;

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="text-sm font-bold text-white">{milestone.player}</div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{milestone.team}</div>
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded"
          style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}
        >
          {milestone.projectedDate}
        </span>
      </div>

      <div className="text-xs font-semibold text-white mb-2">{milestone.milestone}</div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {milestone.current}
          </span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {milestone.needed} needed
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(pct, 100)}%`,
              background: "linear-gradient(90deg, #0EA5E9, #10B981)",
              boxShadow: "0 0 8px rgba(14,165,233,0.4)",
            }}
          />
        </div>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
        {milestone.significance}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HISTORY ENGINE PAGE
// ═══════════════════════════════════════════════════════════

export default function HistoryEngine() {
  const data = historyData;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="HISTORICAL CONTEXT ENGINE" />

      <div className="container py-8">
        {/* Page header */}
        <div className="mb-8">
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            HISTORICAL CONTEXT ENGINE
          </div>
          <h1
            className="display-heading text-white mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Past Meets Present
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {data.generatedDate} — Connecting today's performances to NBA history
          </p>
        </div>

        {/* Narrative banner */}
        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(245,158,11,0.06))",
            border: "1px solid rgba(14,165,233,0.15)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            {data.narrative}
          </p>
        </div>

        {/* Active comparisons */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Active Comparisons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data.comparisons.map((comp, i) => (
              <ComparisonCard key={i} comp={comp} />
            ))}
          </div>
        </div>

        {/* Milestone Watch */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
            Milestone Watch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.milestoneWatch.map((m, i) => (
              <MilestoneCard key={i} milestone={m} />
            ))}
          </div>
        </div>

        {/* Streak Watch */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Streak Watch
          </h2>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Player", "Team", "Active Streak", "Record", "Games Away"].map((h) => (
                      <th
                        key={h}
                        className="text-left text-[10px] font-bold uppercase tracking-wider px-4 py-3"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.streakWatch.map((s, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: i < data.streakWatch.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                    >
                      <td className="px-4 py-3 text-sm font-semibold text-white">{s.player}</td>
                      <td className="px-4 py-3">
                        <span
                          className="text-xs px-1.5 py-0.5 rounded"
                          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                        >
                          {s.team}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {s.streak}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {s.record}
                      </td>
                      <td className="px-4 py-3">
                        {s.gamesAway === 0 ? (
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}
                          >
                            RECORD HOLDER
                          </span>
                        ) : (
                          <span
                            className="text-xs font-bold"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              color: s.gamesAway <= 3 ? "#F59E0B" : "rgba(255,255,255,0.5)",
                            }}
                          >
                            {s.gamesAway}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* This Week in NBA History */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            This Week in NBA History
          </h2>
          <div className="flex flex-col gap-3">
            {data.thisWeekInHistory.map((event, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: "#8B5CF6", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {event.year}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {event.event}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {event.players.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(139,92,246,0.1)", color: "rgba(139,92,246,0.7)" }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
