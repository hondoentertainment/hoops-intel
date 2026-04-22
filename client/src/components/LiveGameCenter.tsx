import type { LiveGame } from "../lib/espnApi";
import type { PlayByPlayItem, WinProbabilityPoint } from "../lib/liveGameCenter";
import { useLiveGameCenter } from "../lib/useLiveGameCenter";
import DiscussionThread from "./discussion/DiscussionThread";

function WinProbabilityChart({
  points,
  homeLabel,
  awayLabel,
}: {
  points: WinProbabilityPoint[];
  homeLabel: string;
  awayLabel: string;
}) {
  const width = 320;
  const height = 72;
  const maxIndex = Math.max(1, points.length - 1);
  const coords = points
    .map((p, i) => {
      const x = (i / maxIndex) * width;
      const y = height - (p.homeWinProb / 100) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const last = points[points.length - 1] ?? { homeWinProb: 50, awayWinProb: 50 };

  return (
    <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex items-center justify-between mb-2">
        <span className="section-label">WIN PROBABILITY</span>
        <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          {homeLabel} {last.homeWinProb.toFixed(0)}% · {awayLabel} {last.awayWinProb.toFixed(0)}%
        </span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[72px]" preserveAspectRatio="none">
        <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
        <polyline fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" points={coords} />
      </svg>
    </div>
  );
}

function PlayByPlayList({ plays }: { plays: PlayByPlayItem[] }) {
  return (
    <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-label mb-2">PLAY-BY-PLAY</div>
      <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
        {[...plays].reverse().slice(0, 8).map((p) => (
          <div key={p.id} className="text-xs leading-relaxed p-2 rounded" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="flex items-center justify-between mb-1">
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Q{p.period} · {p.clock}</span>
              <span className="mono-data" style={{ color: "#0EA5E9" }}>{p.awayScore}-{p.homeScore}</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)" }}>{p.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveGameCenter({
  liveGames,
  favoriteTeams,
  clutchAlertsEnabled,
}: {
  liveGames: LiveGame[];
  favoriteTeams: string[];
  clutchAlertsEnabled: boolean;
}) {
  const { payloadByGameId, clutchGames } = useLiveGameCenter(liveGames, clutchAlertsEnabled);

  if (liveGames.length === 0) return null;

  return (
    <section className="py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="section-label mb-1">LIVE GAME CENTER</div>
            <h2 className="display-heading text-white text-2xl">Possession Pulse</h2>
          </div>
          {clutchGames.length > 0 && (
            <div className="px-3 py-1 rounded text-xs font-semibold" style={{ background: "rgba(244,63,94,0.15)", color: "#F43F5E", border: "1px solid rgba(244,63,94,0.25)" }}>
              {clutchGames.length} CLUTCH GAME{clutchGames.length > 1 ? "S" : ""} LIVE
            </div>
          )}
        </div>

        {clutchGames.length > 0 && (
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            {clutchGames.map((c) => (
              <div
                key={c.gameId}
                className="px-3 py-2 rounded text-xs"
                style={{ background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.2)", color: "rgba(255,255,255,0.75)" }}
              >
                <span style={{ color: "#F43F5E", fontWeight: 700 }}>CLUTCH ALERT</span> · {c.label}
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {liveGames.map((game) => {
            const details = payloadByGameId[game.id];
            const teamIsFavorite =
              favoriteTeams.includes(game.homeTeam.toUpperCase()) ||
              favoriteTeams.includes(game.awayTeam.toUpperCase());

            return (
              <div
                key={game.id}
                className="glass-card rounded-lg p-4"
                style={{
                  borderColor: teamIsFavorite ? "rgba(14,165,233,0.35)" : "rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="section-label text-emerald-400">LIVE</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {game.statusDetail}
                    </span>
                    {teamIsFavorite && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}>
                        FAVORITE TEAM
                      </span>
                    )}
                  </div>
                  <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{game.tv}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-white">{game.awayTeam}</div>
                  <div className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>{game.awayScore}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>@</div>
                  <div className="text-sm font-semibold text-white">{game.homeTeam}</div>
                  <div className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>{game.homeScore}</div>
                  <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Q{game.period} {game.clock}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <WinProbabilityChart
                    points={details?.winProbability ?? []}
                    homeLabel={game.homeTeam}
                    awayLabel={game.awayTeam}
                  />
                  <PlayByPlayList plays={details?.plays ?? []} />
                </div>
                <DiscussionThread
                  scopeType="game"
                  scopeKey={game.id}
                  title={`${game.awayTeam} @ ${game.homeTeam} Live Thread`}
                  targetPath="/#live-game-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
