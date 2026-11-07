import TeamLogo from "./TeamLogo";
import { LiveScoreSkeleton } from "./PageSkeletons";
import { useLiveScores } from "../lib/useLiveScores";
import type { LiveGame } from "../lib/espnApi";
import { gameResults } from "../lib/pulseData";
import { isOffseasonDesk } from "../lib/deskMode";
import { scorebarGamesToShow } from "../lib/scorebarVisibility";
import { liveScoresTrustLabel } from "../lib/dataTrust";
import { makeGameId } from "../lib/gameCenter";

type RailCard = {
  id: string;
  href: string;
  status: string;
  live: boolean;
  meta: string;
  away: string;
  awayScore: string;
  home: string;
  homeScore: string;
  action: string;
};

function scoreText(value: number | null) {
  return value != null && Number.isFinite(value) ? String(value) : "—";
}

function liveCard(game: LiveGame): RailCard {
  const final = game.status === "post";
  const live = game.status === "in";
  const pre = game.status === "pre";
  return {
    id: game.id,
    href: `/game/${makeGameId(game.awayTeam, game.homeTeam)}`,
    status: final ? "FINAL" : live ? game.statusDetail || "LIVE" : "UPCOMING",
    live,
    meta: pre ? game.tv || game.venue || "Scheduled" : game.venue || game.tv || "",
    away: game.awayTeam,
    awayScore: scoreText(game.awayScore),
    home: game.homeTeam,
    homeScore: scoreText(game.homeScore),
    action: pre ? "Preview →" : "Recap →",
  };
}

function editionCard(game: (typeof gameResults)[number]): RailCard {
  return {
    id: game.gameId,
    href: `/game/${game.gameId}`,
    status: "FINAL",
    live: false,
    meta: game.topPerformer?.split(" ").slice(-1)[0] || "Box",
    away: game.awayTeam,
    awayScore: String(game.awayScore),
    home: game.homeTeam,
    homeScore: String(game.homeScore),
    action: "Recap →",
  };
}

function ScoreRow({ team, score }: { team: string; score: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-sm font-semibold text-[var(--hi-text,#14120B)]">
        <TeamLogo team={team} size={22} />
        {team}
      </span>
      <span className="hi-stat text-xl">{score}</span>
    </div>
  );
}

export default function ScoreRail() {
  const { data, error, refresh, loading } = useLiveScores();
  const liveGames = scorebarGamesToShow(data?.games ?? [], isOffseasonDesk());
  const cards = liveGames.length > 0 ? liveGames.map(liveCard) : gameResults.slice(0, 8).map(editionCard);

  if (loading && !data && cards.length === 0) return <LiveScoreSkeleton />;
  if (cards.length === 0 && error) {
    return (
      <div className="hi-desk-pad-x py-3" role="status">
        <p className="text-sm" style={{ color: "var(--hi-danger,#9B2C2C)" }}>
          {/(network|fetch|failed)/i.test(error) ? "Live scores unreachable." : error}
        </p>
        <button type="button" onClick={() => void refresh()} className="hi-pill-primary mt-2 min-h-11 px-4 text-sm">
          Retry
        </button>
      </div>
    );
  }
  if (cards.length === 0) return null;

  return (
    <section className="hi-desk-pad-x pt-4 pb-2" aria-label="Last night and tonight scores">
      <div className="flex items-end justify-between gap-3 mb-3">
        <div>
          <h2 className="enhanced-kicker">Last night & tonight</h2>
          <p className="text-xs mt-1" style={{ color: "var(--hi-muted,#686359)" }}>
            {data?.fetchedAt ? liveScoresTrustLabel(data.fetchedAt) : "Edition scoreboard"}
          </p>
        </div>
        <a href="/tonight" className="hi-arrow-link text-sm min-h-11 inline-flex items-center">
          All scores →
        </a>
      </div>
      <div className="hi-score-rail">
        {cards.map((card) => (
          <a key={card.id} href={card.href} className="hi-score-card">
            <div className="flex items-center justify-between gap-2">
              <span className="enhanced-kicker inline-flex items-center gap-1.5">
                {card.live ? <span className="w-1.5 h-1.5 rounded-full bg-[var(--hi-brand,#C8102E)] motion-safe:animate-pulse" aria-hidden /> : null}
                {card.status}
              </span>
              <span className="text-xs truncate min-w-0 max-w-[7.5rem]" style={{ color: "var(--hi-muted,#686359)" }}>
                {card.meta}
              </span>
            </div>
            <ScoreRow team={card.away} score={card.awayScore} />
            <ScoreRow team={card.home} score={card.homeScore} />
            <span className="hi-arrow-link text-sm mt-auto">{card.action}</span>
          </a>
        ))}
      </div>
      <p className="hi-score-cue">Swipe for more scores</p>
    </section>
  );
}
