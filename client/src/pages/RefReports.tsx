// Referee Tendency Reports — Know the Whistle

import { useState } from "react";
import { refData } from "../lib/refData";
import type { RefereeProfile, TonightRefAssignment } from "../lib/refData";

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

type SortKey = "name" | "gamesThisSeason" | "foulsPerGame" | "homeWinPct" | "avgPace" | "technicalFrequency";

const techOrder: Record<string, number> = { High: 3, Average: 2, Low: 1 };

function sortProfiles(profiles: RefereeProfile[], key: SortKey, asc: boolean): RefereeProfile[] {
  return [...profiles].sort((a, b) => {
    let va: number | string, vb: number | string;
    switch (key) {
      case "name": va = a.name; vb = b.name; break;
      case "gamesThisSeason": va = a.gamesThisSeason; vb = b.gamesThisSeason; break;
      case "foulsPerGame": va = a.tendencies.foulsPerGame; vb = b.tendencies.foulsPerGame; break;
      case "homeWinPct": va = a.tendencies.homeWinPct; vb = b.tendencies.homeWinPct; break;
      case "avgPace": va = a.tendencies.avgPace; vb = b.tendencies.avgPace; break;
      case "technicalFrequency": va = techOrder[a.tendencies.technicalFrequency] || 0; vb = techOrder[b.tendencies.technicalFrequency] || 0; break;
      default: va = 0; vb = 0;
    }
    if (typeof va === "string" && typeof vb === "string") {
      return asc ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    return asc ? (va as number) - (vb as number) : (vb as number) - (va as number);
  });
}

const paceColor = (pace: number) => {
  if (pace > 1) return "#10B981";
  if (pace < -0.5) return "#F43F5E";
  return "rgba(255,255,255,0.6)";
};

const techColor = (tech: string) => {
  if (tech === "High") return "#F43F5E";
  if (tech === "Low") return "#10B981";
  return "#F59E0B";
};

// ═══════════════════════════════════════════════════════════
// TONIGHT'S ASSIGNMENT CARD
// ═══════════════════════════════════════════════════════════

function AssignmentCard({ assignment }: { assignment: TonightRefAssignment }) {
  const leadProfile = refData.refProfiles.find((r) => r.name === assignment.leadRef);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-5">
        {/* Game matchup */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">{assignment.game}</h3>
          <div className="flex gap-1">
            {assignment.crew.map((ref) => (
              <span
                key={ref}
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: ref === assignment.leadRef ? "rgba(14,165,233,0.12)" : "rgba(255,255,255,0.06)",
                  color: ref === assignment.leadRef ? "#0EA5E9" : "rgba(255,255,255,0.4)",
                }}
              >
                {ref}
              </span>
            ))}
          </div>
        </div>

        {/* Lead ref mini-card */}
        {leadProfile && (
          <div
            className="rounded-lg p-3 mb-4"
            style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(14,165,233,0.7)" }}>
                  Lead Official
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {leadProfile.name} #{leadProfile.number}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{leadProfile.experience}</div>
                <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {leadProfile.gamesThisSeason} games
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Fouls/G</div>
                <div className="text-sm font-bold" style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {leadProfile.tendencies.foulsPerGame}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Home W%</div>
                <div className="text-sm font-bold" style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {leadProfile.tendencies.homeWinPct}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Pace</div>
                <div className="text-sm font-bold" style={{ color: paceColor(leadProfile.tendencies.avgPace), fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {leadProfile.tendencies.avgPace > 0 ? "+" : ""}{leadProfile.tendencies.avgPace}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact prediction */}
        <div className="mb-3">
          <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Impact Prediction
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {assignment.impact}
          </p>
        </div>

        {/* Betting angle */}
        <div
          className="rounded-lg p-3 mb-3"
          style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)" }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#F59E0B" }}>
            Betting Angle
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {assignment.bettingAngle}
          </p>
        </div>

        {/* Historical */}
        <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
          {assignment.historical}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// REFEREE REPORTS PAGE
// ═══════════════════════════════════════════════════════════

export default function RefReports() {
  const data = refData;
  const [sortKey, setSortKey] = useState<SortKey>("foulsPerGame");
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedRef, setExpandedRef] = useState<string | null>(null);

  const sorted = sortProfiles(data.refProfiles, sortKey, sortAsc);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  const SortHeader = ({ label, colKey }: { label: string; colKey: SortKey }) => (
    <th
      className="text-left text-[10px] font-bold uppercase tracking-wider px-4 py-3 cursor-pointer select-none hover:text-sky-400 transition-colors"
      style={{ color: sortKey === colKey ? "#0EA5E9" : "rgba(255,255,255,0.3)" }}
      onClick={() => handleSort(colKey)}
    >
      <span className="flex items-center gap-1">
        {label}
        {sortKey === colKey && (
          <span className="text-[8px]">{sortAsc ? "\u25B2" : "\u25BC"}</span>
        )}
      </span>
    </th>
  );

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Breadcrumb */}
      <div
        className="border-b"
        style={{ background: "rgba(5,13,26,0.95)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container py-4 flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-xs font-medium transition-colors hover:text-sky-400"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Home
          </a>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>&rsaquo;</span>
          <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
            Referee Reports
          </span>
        </div>
      </div>

      <div className="container py-8">
        {/* Page header */}
        <div className="mb-8">
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            REFEREE TENDENCY REPORTS
          </div>
          <h1
            className="display-heading text-white mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Know the Whistle
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {data.generatedDate} — Tonight's officiating crews and their tendencies
          </p>
        </div>

        {/* Weekly trend banner */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            background: "rgba(245,158,11,0.06)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#F59E0B" }}>
              Weekly Trend
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {data.weeklyTrend}
          </p>
        </div>

        {/* Tonight's assignments */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Tonight's Assignments
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data.tonightAssignments.map((a, i) => (
              <AssignmentCard key={i} assignment={a} />
            ))}
          </div>
        </div>

        {/* Referee profiles table */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            Referee Profiles
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
                    <SortHeader label="Name" colKey="name" />
                    <SortHeader label="Games" colKey="gamesThisSeason" />
                    <SortHeader label="Fouls/Game" colKey="foulsPerGame" />
                    <SortHeader label="Home Win%" colKey="homeWinPct" />
                    <SortHeader label="Pace Impact" colKey="avgPace" />
                    <SortHeader label="Tech Freq" colKey="technicalFrequency" />
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((ref) => (
                    <>
                      <tr
                        key={ref.name}
                        className="cursor-pointer transition-colors"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          background: expandedRef === ref.name ? "rgba(14,165,233,0.04)" : "transparent",
                        }}
                        onClick={() => setExpandedRef(expandedRef === ref.name ? null : ref.name)}
                      >
                        <td className="px-4 py-3">
                          <div className="text-sm font-semibold text-white">{ref.name}</div>
                          <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                            #{ref.number} · {ref.experience}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {ref.gamesThisSeason}
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold" style={{ color: ref.tendencies.foulsPerGame > 43 ? "#F43F5E" : ref.tendencies.foulsPerGame < 41 ? "#10B981" : "rgba(255,255,255,0.6)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {ref.tendencies.foulsPerGame}
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold" style={{ color: ref.tendencies.homeWinPct > 55 ? "#F59E0B" : "rgba(255,255,255,0.6)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {ref.tendencies.homeWinPct}%
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold" style={{ color: paceColor(ref.tendencies.avgPace), fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {ref.tendencies.avgPace > 0 ? "+" : ""}{ref.tendencies.avgPace}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: `${techColor(ref.tendencies.technicalFrequency)}20`,
                              color: techColor(ref.tendencies.technicalFrequency),
                            }}
                          >
                            {ref.tendencies.technicalFrequency.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              transform: expandedRef === ref.name ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </td>
                      </tr>
                      {expandedRef === ref.name && (
                        <tr key={`${ref.name}-expanded`}>
                          <td colSpan={7} className="px-4 pb-4">
                            <div
                              className="rounded-lg p-4 mt-1"
                              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#10B981" }}>
                                    Best For
                                  </div>
                                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                                    {ref.bestFor}
                                  </p>
                                </div>
                                <div>
                                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#F43F5E" }}>
                                    Worst For
                                  </div>
                                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                                    {ref.worstFor}
                                  </p>
                                </div>
                                <div>
                                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#F59E0B" }}>
                                    Notable
                                  </div>
                                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                                    {ref.notableGame}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center gap-4 text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                                <span>OT Games: {ref.tendencies.overtimeGames}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
