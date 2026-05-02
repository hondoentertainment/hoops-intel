import { getTeamColor } from "../../lib/teamColors";
import type { PlayoffSeriesGame } from "../../lib/playoffData";
import { lastFinalGameFromGames } from "./dashboardDerive";

interface SeriesTrackerProps {
  games: PlayoffSeriesGame[];
  higherTeam: string;
  lowerTeam: string;
  highlightedGame?: number;
  onHighlight?: (gameNumber: number) => void;
}

export function SeriesTracker({ games, higherTeam, lowerTeam, highlightedGame, onHighlight }: SeriesTrackerProps) {
  const lastFinal = lastFinalGameFromGames(games);
  const highlightN = highlightedGame ?? lastFinal?.gameNumber;

  return (
    <div className="flex gap-1 w-full" role="list" aria-label="Games 1 through 7">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => {
        const g = games.find((x) => x.gameNumber === n);
        const isLive = g?.status === "live";
        const isFinal = g?.status === "final" && g.homeScore != null && g.awayScore != null && g.homeScore !== g.awayScore;
        const win =
          isFinal && g
            ? g.homeScore! > g.awayScore!
              ? g.homeTeam
              : g.awayTeam
            : null;
        const isHi = win === higherTeam;
        const isLo = win === lowerTeam;
        const muted = !g || g.status === "scheduled";

        return (
          <button
            key={n}
            type="button"
            role="listitem"
            onClick={(e) => {
              e.stopPropagation();
              if (g && (isFinal || isLive)) onHighlight?.(n);
            }}
            className={[
              "flex-1 min-w-0 rounded px-0.5 py-2 text-[10px] sm:text-xs font-bold transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60",
              muted ? "bg-white/[0.04] text-white/30" : "",
              isFinal && isHi ? "ring-1 shadow-sm" : "",
              isFinal && isLo ? "ring-1 shadow-sm" : "",
              highlightN === n && (isFinal || isLive) ? "ring-2 ring-amber-400/90 scale-[1.02] z-[1]" : "",
              isLive ? "animate-pulse" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              borderColor: muted ? "transparent" : "rgba(255,255,255,0.06)",
              background:
                isFinal && win ? (isHi ? `${getTeamColor(higherTeam)}35` : `${getTeamColor(lowerTeam)}35`) : muted ? undefined : "rgba(14,165,233,0.12)",
              color:
                isFinal && win ? "#fff" : isLive ? "#34d399" : undefined,
              boxShadow: highlightN === n && (isFinal || isLive) ? "0 0 0 1px rgba(245,158,11,0.4)" : undefined,
            }}
          >
            <div className="mono-data block text-center uppercase tracking-wide">G{n}</div>
            {isFinal && g ? (
              <div className="text-[9px] sm:text-[10px] font-semibold truncate text-center">{g.awayScore}-{g.homeScore}</div>
            ) : isLive ? (
              <div className="text-[9px] text-center live-dot">●</div>
            ) : (
              <div className="text-[9px] text-center opacity-40">–</div>
            )}
          </button>
        );
      })}
    </div>
  );
}
