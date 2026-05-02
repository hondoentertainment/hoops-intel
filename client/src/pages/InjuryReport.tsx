import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { injuryUpdates, fantasyAlerts, pulseEdition, pulseIndex } from "../lib/pulseData";
import { slugify } from "../lib/searchUtils";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type FilterType = "all" | "out" | "questionable" | "high-impact";

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const statusLabel = (status: string): string => {
  switch (status.toLowerCase()) {
    case "out": return "OUT";
    case "questionable": return "QUESTIONABLE";
    case "day-to-day": return "DAY-TO-DAY";
    case "probable": return "PROBABLE";
    default: return status.toUpperCase();
  }
};

const statusStyles = (status: string): { color: string; bg: string; border: string } => {
  switch (status.toLowerCase()) {
    case "out":
      return { color: "#F43F5E", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.3)" };
    case "questionable":
      return { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" };
    case "day-to-day":
      return { color: "#EAB308", bg: "rgba(234,179,8,0.12)", border: "rgba(234,179,8,0.3)" };
    default:
      return { color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)" };
  }
};

// Impact rating derived from the injury data's impact field
const impactRating = (impact: string): number => {
  switch (impact?.toLowerCase()) {
    case "high": return 9;
    case "medium": return 5;
    case "low": return 2;
    default: return 5;
  }
};

const impactBarColor = (rating: number): string => {
  if (rating >= 8) return "#F43F5E";
  if (rating >= 5) return "#F59E0B";
  return "#10B981";
};

const impactBarBg = (rating: number): string => {
  if (rating >= 8) return "rgba(244,63,94,0.15)";
  if (rating >= 5) return "rgba(245,158,11,0.15)";
  return "rgba(16,185,129,0.15)";
};

// Fantasy action mapped from fantasyAlerts data
const fantasyActionForPlayer = (playerName: string): { action: string; color: string; bg: string } | null => {
  const alert = fantasyAlerts.find(
    (a) => a.player.toLowerCase() === playerName.toLowerCase()
  );
  if (!alert) return null;
  const actionMap: Record<string, { color: string; bg: string }> = {
    add: { color: "#10B981", bg: "rgba(16,185,129,0.12)" },
    stream: { color: "#10B981", bg: "rgba(16,185,129,0.12)" },
    hold: { color: "#9CA3AF", bg: "rgba(156,163,175,0.12)" },
    drop: { color: "#F43F5E", bg: "rgba(244,63,94,0.12)" },
    monitor: { color: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
  };
  const key = alert.action.toLowerCase();
  const style = actionMap[key] || actionMap.hold;
  return { action: alert.action.toUpperCase(), ...style };
};

// Who steps up — look for matching player in pulseIndex or fantasyAlerts
const replacementInfo = (injury: (typeof injuryUpdates)[0]): { name: string; role: string } | null => {
  // Check fantasyAlerts for replacement players on the same team
  const teamAlert = fantasyAlerts.find(
    (a) =>
      a.team.toUpperCase() === injury.team.toUpperCase() &&
      a.player.toLowerCase() !== injury.player.toLowerCase() &&
      (a.action === "add" || a.action === "stream")
  );
  if (teamAlert) {
    return {
      name: teamAlert.player,
      role: teamAlert.reason.split(".")[0],
    };
  }

  // Fallback: check pulseIndex for same team
  const pulsePlayer = pulseIndex.find(
    (p) =>
      p.team.toUpperCase() === injury.team.toUpperCase() &&
      p.player.toLowerCase() !== injury.player.toLowerCase()
  );
  if (pulsePlayer) {
    return {
      name: pulsePlayer.player,
      role: `Steps into expanded role for ${injury.team}`,
    };
  }

  return null;
};

// ═══════════════════════════════════════════════════════════
// INJURY CARD
// ═══════════════════════════════════════════════════════════

function InjuryCard({ injury }: { injury: (typeof injuryUpdates)[0] }) {
  const ss = statusStyles(injury.status);
  const rating = impactRating(injury.impact);
  const barColor = impactBarColor(rating);
  const barBg = impactBarBg(rating);
  const fantasyAction = fantasyActionForPlayer(injury.player);
  const replacement = replacementInfo(injury);

  // Determine the fantasy badge — if not in fantasyAlerts, derive from status
  const badge = fantasyAction || (() => {
    if (injury.status.toLowerCase() === "out") {
      return { action: "MONITOR", color: "#F59E0B", bg: "rgba(245,158,11,0.12)" };
    }
    return { action: "HOLD", color: "#9CA3AF", bg: "rgba(156,163,175,0.12)" };
  })();

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeft: `3px solid ${ss.color}`,
      }}
    >
      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <a
              href={`/player/${slugify(injury.player)}`}
              className="text-base font-bold text-white hover:text-sky-400 transition-colors block leading-tight"
            >
              {injury.player}
            </a>
            <div className="flex items-center gap-2 mt-1">
              <a
                href={`/team/${injury.team.toLowerCase()}`}
                className="text-xs px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
              >
                {injury.team}
              </a>
            </div>
          </div>
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
            style={{ background: ss.bg, color: ss.color, border: `1px solid ${ss.border}` }}
          >
            {statusLabel(injury.status)}
          </span>
        </div>

        {/* Injury description */}
        <div className="mb-1 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
          {injury.injury}
        </div>
        <div className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
          {injury.timeline}
        </div>

        {/* Impact rating bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
              Team Impact
            </span>
            <span className="text-xs font-bold mono-data" style={{ color: barColor }}>
              {rating}/10
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(rating / 10) * 100}%`,
                background: barColor,
                boxShadow: `0 0 6px ${barColor}`,
              }}
            />
          </div>
        </div>

        {/* Who steps up */}
        {replacement && (
          <div
            className="rounded-lg p-3 mb-3"
            style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
          >
            <div className="text-xs font-semibold mb-1" style={{ color: "rgba(14,165,233,0.7)" }}>
              WHO STEPS UP
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#0EA5E9" }} />
              <div>
                <a
                  href={`/player/${slugify(replacement.name)}`}
                  className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                >
                  {replacement.name}
                </a>
                <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {replacement.role}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fantasy action badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
            Fantasy
          </span>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: badge.bg, color: badge.color }}
          >
            {badge.action}
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// FILTER BUTTON
// ═══════════════════════════════════════════════════════════

function FilterButton({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
      style={
        active
          ? { background: "#0EA5E9", color: "#fff" }
          : {
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }
      }
    >
      {label}
      <span
        className="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
        style={
          active
            ? { background: "rgba(255,255,255,0.2)", color: "#fff" }
            : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }
        }
      >
        {count}
      </span>
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// INJURY REPORT PAGE
// ═══════════════════════════════════════════════════════════

export default function InjuryReport() {
  const [filter, setFilter] = useState<FilterType>("all");

  // Sort by impact (highest first)
  const sorted = [...injuryUpdates].sort((a, b) => {
    return impactRating(b.impact) - impactRating(a.impact);
  });

  const filtered = sorted.filter((injury) => {
    if (filter === "all") return true;
    if (filter === "out") return injury.status.toLowerCase() === "out";
    if (filter === "questionable")
      return injury.status.toLowerCase() === "questionable";
    if (filter === "high-impact") return impactRating(injury.impact) >= 8;
    return true;
  });

  const counts = {
    all: sorted.length,
    out: sorted.filter((i) => i.status.toLowerCase() === "out").length,
    questionable: sorted.filter((i) => i.status.toLowerCase() === "questionable").length,
    "high-impact": sorted.filter((i) => impactRating(i.impact) >= 8).length,
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="INJURY REPORT" />

      <div className="container py-8">
        {/* ── Section label + title ── */}
        <div className="mb-2">
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            INJURY WIRE
          </div>
          <div className="flex flex-wrap items-end gap-4 justify-between">
            <div>
              <h1
                className="display-heading text-white mb-1"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Injury Report
              </h1>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                {pulseEdition.date} · {counts.all} players tracked
              </div>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-4 flex-wrap">
              {[
                { label: "High Impact (8–10)", color: "#F43F5E" },
                { label: "Mid Impact (5–7)", color: "#F59E0B" },
                { label: "Low Impact (1–4)", color: "#10B981" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter buttons ── */}
        <div className="flex flex-wrap gap-2 mt-6 mb-8">
          <FilterButton
            label="All"
            active={filter === "all"}
            onClick={() => setFilter("all")}
            count={counts.all}
          />
          <FilterButton
            label="OUT"
            active={filter === "out"}
            onClick={() => setFilter("out")}
            count={counts.out}
          />
          <FilterButton
            label="Questionable"
            active={filter === "questionable"}
            onClick={() => setFilter("questionable")}
            count={counts.questionable}
          />
          <FilterButton
            label="High Impact"
            active={filter === "high-impact"}
            onClick={() => setFilter("high-impact")}
            count={counts["high-impact"]}
          />
        </div>

        {/* ── Impact grid ── */}
        {filtered.length === 0 ? (
          <div
            className="text-center py-20 text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            No injuries match this filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((injury, i) => (
              <InjuryCard key={i} injury={injury} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
