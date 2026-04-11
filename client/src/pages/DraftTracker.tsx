import { useState } from "react";
import { draftData } from "../lib/draftData";

function TrendArrow({ trend }: { trend: "rising" | "falling" | "stable" }) {
  if (trend === "rising") return <span style={{ color: "#10B981" }}>{"\u25B2"}</span>;
  if (trend === "falling") return <span style={{ color: "#F43F5E" }}>{"\u25BC"}</span>;
  return <span style={{ color: "rgba(255,255,255,0.3)" }}>{"\u2014"}</span>;
}

function RankChange({ current, prev }: { current: number; prev: number }) {
  const diff = prev - current;
  if (diff > 0) return <span className="text-xs font-mono" style={{ color: "#10B981" }}>{"\u25B2"}{diff}</span>;
  if (diff < 0) return <span className="text-xs font-mono" style={{ color: "#F43F5E" }}>{"\u25BC"}{Math.abs(diff)}</span>;
  return <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>&mdash;</span>;
}

function GradeBar({ value, max = 100 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color = pct >= 90 ? "#10B981" : pct >= 80 ? "#0EA5E9" : pct >= 70 ? "#F59E0B" : "#F43F5E";
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-xs font-mono" style={{ color }}>{value}</span>
    </div>
  );
}

export default function DraftTracker() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [showTankWatch, setShowTankWatch] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs tracking-widest mb-1" style={{ color: "#0EA5E9" }}>HOOPS INTEL</div>
          <h1 className="text-3xl font-bold text-white">DRAFT STOCK TRACKER</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            {draftData.classYear} NBA Draft &middot; {draftData.weekLabel}
          </p>
        </div>

        {/* Weekly Scout Report */}
        <div className="rounded-lg border p-5 mb-8" style={{ background: "rgba(14,165,233,0.05)", borderColor: "rgba(14,165,233,0.2)" }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: "#0EA5E9" }}>WEEKLY SCOUT REPORT</div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{draftData.weeklyScoutReport}</p>
        </div>

        {/* Risers & Fallers */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-lg border p-4" style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.15)" }}>
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#10B981" }}>{"\u25B2"} RISERS</div>
            {draftData.risers.map(r => (
              <div key={r.name} className="mb-2 last:mb-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{r.name}</span>
                  <span className="text-xs font-mono" style={{ color: "#10B981" }}>+{r.change}</span>
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{r.reason}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-4" style={{ background: "rgba(244,63,94,0.05)", borderColor: "rgba(244,63,94,0.15)" }}>
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#F43F5E" }}>{"\u25BC"} FALLERS</div>
            {draftData.fallers.map(f => (
              <div key={f.name} className="mb-2 last:mb-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{f.name}</span>
                  <span className="text-xs font-mono" style={{ color: "#F43F5E" }}>-{f.change}</span>
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{f.reason}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Big Board */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4">BIG BOARD — TOP 30</h2>
          <div className="rounded-lg border overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {draftData.bigBoard.map((p, i) => (
              <div key={p.rank}>
                <div
                  className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)" }}
                  onClick={() => setExpandedRow(expandedRow === p.rank ? null : p.rank)}
                >
                  <div className="w-8 text-center">
                    <div className="text-lg font-bold" style={{ color: p.rank <= 3 ? "#FFD700" : p.rank <= 10 ? "#0EA5E9" : "rgba(255,255,255,0.6)" }}>
                      {p.rank}
                    </div>
                    <RankChange current={p.rank} prev={p.prevRank} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{p.name}</span>
                      <TrendArrow trend={p.trend} />
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {p.school} &middot; {p.position} &middot; {p.height} &middot; {p.age}yo
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <GradeBar value={p.scoutingGrade} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      background: p.projection.includes("No. 1") ? "rgba(255,215,0,0.15)" :
                        p.projection.includes("Top") ? "rgba(14,165,233,0.15)" :
                        p.projection.includes("Lottery") ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)",
                      color: p.projection.includes("No. 1") ? "#FFD700" :
                        p.projection.includes("Top") ? "#0EA5E9" :
                        p.projection.includes("Lottery") ? "#10B981" : "rgba(255,255,255,0.5)"
                    }}>
                      {p.projection}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {expandedRow === p.rank ? "\u25B2" : "\u25BC"}
                  </div>
                </div>
                {expandedRow === p.rank && (
                  <div className="px-4 pb-4 pt-1" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-xs font-bold mb-1" style={{ color: "#10B981" }}>STRENGTHS</div>
                        {p.strengths.map(s => <div key={s} className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>+ {s}</div>)}
                      </div>
                      <div>
                        <div className="text-xs font-bold mb-1" style={{ color: "#F43F5E" }}>WEAKNESSES</div>
                        {p.weaknesses.map(w => <div key={w} className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>- {w}</div>)}
                      </div>
                      <div>
                        <div className="text-xs font-bold mb-1" style={{ color: "#F59E0B" }}>NBA COMPARISON</div>
                        <div className="text-sm text-white">{p.comparison}</div>
                        <div className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                          BEST FIT: {p.bestFit.join(", ")}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs font-mono mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span>{p.stats.ppg} PPG</span>
                      <span>{p.stats.rpg} RPG</span>
                      <span>{p.stats.apg} APG</span>
                      <span>{p.stats.fgPct}% FG</span>
                      <span>{p.stats.threePct}% 3PT</span>
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{p.weeklyNote}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tank Watch */}
        <div className="mb-8">
          <button onClick={() => setShowTankWatch(!showTankWatch)} className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            TANK WATCH <span className="text-xs" style={{ color: "#0EA5E9" }}>{showTankWatch ? "\u25B2" : "\u25BC"}</span>
          </button>
          {showTankWatch && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {draftData.tankWatch.map(t => (
                <div key={t.team} className="rounded-lg border p-4" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white">{t.team}</span>
                    <span className="text-xs font-mono" style={{ color: "#F43F5E" }}>{t.record}</span>
                  </div>
                  <div className="flex gap-3 text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span>Lottery: {t.lotteryOdds}</span>
                    <span>Need: {t.primaryNeed}</span>
                  </div>
                  <div className="text-xs mb-1" style={{ color: "#0EA5E9" }}>Best Fit: {t.bestProspectFit}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{t.note}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-xs" style={{ color: "#0EA5E9" }}>&larr; Back to Hoops Intel</a>
        </div>
      </div>
    </div>
  );
}
