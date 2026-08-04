import { useState, useEffect, useMemo } from "react";
import { fetchPlayByPlay, type PlayEvent } from "../lib/playByPlay";
import { getTeamColor } from "../lib/teamColors";
import ShotChart from "./ShotChart";

function periodLabel(period: number): string {
  if (period <= 4) return `Q${period}`;
  return `OT${period - 4 > 1 ? period - 4 : ""}`;
}

function PlayRow({ play, awayTeam, homeTeam }: { play: PlayEvent; awayTeam: string; homeTeam: string }) {
  const color = play.teamAbbr ? getTeamColor(play.teamAbbr) : "rgba(255,255,255,0.3)";
  return (
    <div
      className="flex items-start gap-3 py-2 px-2 rounded"
      style={play.scoringPlay ? { background: "rgba(255,255,255,0.03)" } : undefined}
    >
      <span className="mono-data text-[10px] w-10 shrink-0 pt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
        {play.clock}
      </span>
      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: color }} aria-hidden />
      <span className="text-xs flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
        {play.text}
      </span>
      <span className="mono-data text-[10px] shrink-0 pt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
        {play.awayScore}-{play.homeScore}
      </span>
    </div>
  );
}

export default function PlayByPlayFeed({ espnGameId, awayTeam, homeTeam }: {
  espnGameId: string;
  awayTeam: string;
  homeTeam: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [plays, setPlays] = useState<PlayEvent[] | null>(null);
  const [hasShotData, setHasShotData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showShotChart, setShowShotChart] = useState(false);

  useEffect(() => {
    if (!expanded || plays) return;
    setLoading(true);
    fetchPlayByPlay(espnGameId)
      .then((result) => {
        if (!result) {
          setError(true);
          return;
        }
        setPlays(result.plays);
        setHasShotData(result.hasShotData);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [expanded, espnGameId, plays]);

  const byPeriod = useMemo(() => {
    if (!plays) return [];
    const groups = new Map<number, PlayEvent[]>();
    for (const p of plays) {
      if (!groups.has(p.period)) groups.set(p.period, []);
      groups.get(p.period)!.push(p);
    }
    // Most recent quarter first, most recent play within a quarter first.
    return Array.from(groups.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([period, list]) => ({ period, plays: [...list].reverse() }));
  }, [plays]);

  const { awayShots, homeShots } = useMemo(() => {
    if (!plays) return { awayShots: [], homeShots: [] };
    const away = [];
    const home = [];
    for (const p of plays) {
      if (!p.shot) continue;
      if (p.teamAbbr === awayTeam) away.push(p.shot);
      else if (p.teamAbbr === homeTeam) home.push(p.shot);
    }
    return { awayShots: away, homeShots: home };
  }, [plays, awayTeam, homeTeam]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 rounded"
        style={{ color: "#0EA5E9" }}
        aria-expanded={expanded}
        aria-controls={`play-by-play-${espnGameId}`}
      >
        <span aria-hidden style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block" }}>
          &#9654;
        </span>
        {expanded ? "Hide Play-by-Play" : "View Play-by-Play"}
      </button>

      {expanded && (
        <div id={`play-by-play-${espnGameId}`} className="mt-3 rounded-lg p-4" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {loading && (
            <div role="status" aria-live="polite" className="text-center py-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Loading play-by-play...
            </div>
          )}
          {error && (
            <div role="status" className="text-center py-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Play-by-play not available for this game.
            </div>
          )}
          {plays && (
            <>
              {hasShotData && (
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => setShowShotChart((v) => !v)}
                    className="text-[10px] font-semibold uppercase tracking-wider mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 rounded"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    aria-expanded={showShotChart}
                  >
                    {showShotChart ? "▲ Hide shot chart" : "▼ Show shot chart"}
                  </button>
                  {showShotChart && (
                    <ShotChart awayShots={awayShots} homeShots={homeShots} awayTeam={awayTeam} homeTeam={homeTeam} />
                  )}
                </div>
              )}
              <div className="space-y-4 max-h-[28rem] overflow-y-auto">
                {byPeriod.map(({ period, plays: periodPlays }) => (
                  <div key={period}>
                    <div className="section-label text-[10px] mb-1 sticky top-0 py-1" style={{ color: "rgba(255,255,255,0.4)", background: "#0B1520" }}>
                      {periodLabel(period)}
                    </div>
                    <div>
                      {periodPlays.map((p) => (
                        <PlayRow key={p.id} play={p} awayTeam={awayTeam} homeTeam={homeTeam} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
