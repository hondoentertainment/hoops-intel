import { getTeamColor } from "../../lib/teamColors";
import type { PlayoffSeriesGame } from "../../lib/playoffData";
import { completedFinalGames, winnerAbbr } from "./dashboardDerive";

interface GameScoreboardStripProps {
  games: PlayoffSeriesGame[];
  higherTeam: string;
  lowerTeam: string;
}

export function GameScoreboardStrip({ games, higherTeam, lowerTeam }: GameScoreboardStripProps) {
  const finals = completedFinalGames(games);
  if (finals.length === 0) return null;

  return (
    <div
      className="playoff-scoreboard-strip mt-2.5"
      aria-label="Completed game scores"
      data-testid="game-scoreboard-strip"
    >
      {finals.map((g) => {
        const win = winnerAbbr(g)!;
        const lose = win === g.homeTeam ? g.awayTeam : g.homeTeam;
        const winColor = getTeamColor(win);
        const isHigherWin = win === higherTeam;

        return (
          <div
            key={g.gameNumber}
            className="playoff-score-pill"
            title={`Game ${g.gameNumber}: ${g.awayTeam} ${g.awayScore} @ ${g.homeTeam} ${g.homeScore}`}
          >
            <span className="playoff-score-pill__g mono-data">G{g.gameNumber}</span>
            <span className="playoff-score-pill__line mono-data">
              <span style={{ color: win === g.awayTeam ? winColor : "rgba(255,255,255,0.45)" }}>{g.awayTeam}</span>
              <span className="text-white/25 px-0.5">@</span>
              <span style={{ color: win === g.homeTeam ? winColor : "rgba(255,255,255,0.45)" }}>{g.homeTeam}</span>
            </span>
            <span className="playoff-score-pill__score mono-data font-bold text-white/95">
              {g.awayScore}–{g.homeScore}
            </span>
            <span
              className="playoff-score-pill__winner text-[9px] font-bold uppercase tracking-wide"
              style={{ color: winColor }}
            >
              {win}
              <span className="sr-only"> beat {lose}</span>
            </span>
            {isHigherWin ? (
              <span className="sr-only"> — higher seed won</span>
            ) : (
              <span className="sr-only"> — lower seed won</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
