import { useState, useEffect } from "react";
import { fetchBoxScore, type BoxScore, type PlayerBoxLine } from "../lib/boxScores";

function StatCell({ val, highlight }: { val: string | number; highlight?: boolean }) {
  return (
    <td
      className="px-1.5 py-1 text-right mono-data text-xs"
      style={{ color: highlight ? "#0EA5E9" : "rgba(255,255,255,0.7)" }}
    >
      {val}
    </td>
  );
}

function PlayerRow({ p, best }: { p: PlayerBoxLine; best: { pts: number; reb: number; ast: number } }) {
  return (
    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <td className="px-2 py-1 text-xs text-white whitespace-nowrap">
        <span className="font-medium">{p.name}</span>
        <span className="ml-1" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem" }}>{p.position}</span>
      </td>
      <StatCell val={p.minutes} />
      <StatCell val={p.points} highlight={p.points === best.pts && p.points > 0} />
      <StatCell val={p.rebounds} highlight={p.rebounds === best.reb && p.rebounds > 0} />
      <StatCell val={p.assists} highlight={p.assists === best.ast && p.assists > 0} />
      <StatCell val={`${p.fgm}-${p.fga}`} />
      <StatCell val={`${p.tpm}-${p.tpa}`} />
      <StatCell val={`${p.ftm}-${p.fta}`} />
      <StatCell val={p.steals} />
      <StatCell val={p.blocks} />
      <StatCell val={p.turnovers} />
      <StatCell val={p.plusMinus} highlight={parseInt(p.plusMinus) > 10} />
    </tr>
  );
}

function TeamTable({ players, team, teamStats }: {
  players: PlayerBoxLine[];
  team: string;
  teamStats: BoxScore["homeTeamStats"];
}) {
  const starters = players.filter((p) => p.starter);
  const bench = players.filter((p) => !p.starter);
  const best = {
    pts: Math.max(...players.map((p) => p.points)),
    reb: Math.max(...players.map((p) => p.rebounds)),
    ast: Math.max(...players.map((p) => p.assists)),
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="section-label text-xs">{team}</span>
        <div className="flex gap-3">
          <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            FG {teamStats.fgPct}
          </span>
          <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            3P {teamStats.tpPct}
          </span>
          <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            FT {teamStats.ftPct}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left" style={{ minWidth: 600 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th className="px-2 py-1 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Player</th>
              {["MIN", "PTS", "REB", "AST", "FG", "3PT", "FT", "STL", "BLK", "TO", "+/-"].map((h) => (
                <th key={h} className="px-1.5 py-1 text-right text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {starters.map((p) => <PlayerRow key={p.name} p={p} best={best} />)}
            {bench.length > 0 && (
              <tr>
                <td colSpan={12} className="px-2 py-1 text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
                  BENCH
                </td>
              </tr>
            )}
            {bench.map((p) => <PlayerRow key={p.name} p={p} best={best} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BoxScoreCard({ espnGameId, homeTeam, awayTeam }: {
  espnGameId: string;
  homeTeam: string;
  awayTeam: string;
}) {
  const [box, setBox] = useState<BoxScore | null>(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!expanded || box) return;
    setLoading(true);
    fetchBoxScore(espnGameId)
      .then((data) => {
        setBox(data);
        if (!data) setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [expanded, espnGameId, box]);

  return (
    <div className="mt-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-xs font-medium transition-colors"
        style={{ color: "#0EA5E9" }}
      >
        <span style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block" }}>
          &#9654;
        </span>
        {expanded ? "Hide Box Score" : "View Box Score"}
      </button>

      {expanded && (
        <div
          className="mt-3 rounded-lg p-4"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {loading && (
            <div className="text-center py-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Loading box score...
            </div>
          )}
          {error && (
            <div className="text-center py-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Box score not available for this game.
            </div>
          )}
          {box && (
            <>
              <TeamTable players={box.awayPlayers} team={awayTeam} teamStats={box.awayTeamStats} />
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="my-3" />
              <TeamTable players={box.homePlayers} team={homeTeam} teamStats={box.homeTeamStats} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
