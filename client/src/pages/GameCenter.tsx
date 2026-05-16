import { useEffect, useMemo, useState } from "react";
import { useParams } from "wouter";
import SiteHeader from "../components/SiteHeader";
import ShareButton from "../components/ShareButton";
import { getGameCenterById, type GameCenterResponse } from "../lib/gameCenter";
import { getTeamColor } from "../lib/teamColors";
import { slugify } from "../lib/searchUtils";
import { useMetaTags } from "../lib/useMetaTags";

function useGameCenter(gameId: string) {
  const fallback = useMemo(() => getGameCenterById(gameId), [gameId]);
  const [game, setGame] = useState<GameCenterResponse | null>(fallback);
  const [loading, setLoading] = useState(Boolean(gameId));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!gameId) return;
    const controller = new AbortController();
    let active = true;
    setLoading(true);
    setError(false);
    fetch(`/api/game-center?gameId=${encodeURIComponent(gameId)}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`game-center ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (active && !data.error) setGame(data.data ?? data);
      })
      .catch(() => {
        if (active) {
          setGame(fallback);
          setError(true);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
      controller.abort();
    };
  }, [fallback, gameId]);

  return { game, loading, error };
}

function ScoreBlock({ abbr, score, align }: { abbr: string; score: number | null; align?: "right" }) {
  return (
    <a href={`/team/${abbr.toLowerCase()}`} className={align === "right" ? "text-right" : ""}>
      <div className="section-label mb-1" style={{ color: getTeamColor(abbr) }}>{abbr}</div>
      <div className="mono-data text-4xl font-bold text-white">{score ?? "—"}</div>
    </a>
  );
}

function Skeleton() {
  return (
    <div className="container py-10 space-y-4" aria-busy="true" role="status">
      <span className="sr-only">Loading game center</span>
      <div className="h-36 rounded-xl bg-white/5 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 h-64 rounded-xl bg-white/5 animate-pulse" />
        <div className="h-64 rounded-xl bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export default function GameCenter() {
  const params = useParams<{ gameId: string }>();
  const gameId = params.gameId || "";
  const { game, loading, error } = useGameCenter(gameId);

  useMetaTags({
    title: game ? `${game.away.abbr} at ${game.home.abbr} | Game Center | Hoops Intel` : "Game Center | Hoops Intel",
    description: game?.whyItMatters || "Live game intelligence, score context, injuries, refs, and related Hoops Intel links.",
    ogImage: `https://hoopsintel.net/api/og?type=game&gameId=${encodeURIComponent(gameId)}`,
    ogUrl: `https://hoopsintel.net/game/${gameId}`,
    canonicalUrl: `https://hoopsintel.net/game/${gameId}`,
    jsonLd: game
      ? {
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: game.title,
          startDate: game.date,
          eventStatus: game.status === "final" ? "https://schema.org/EventCompleted" : "https://schema.org/EventScheduled",
          homeTeam: { "@type": "SportsTeam", name: game.home.fullName || game.home.abbr },
          awayTeam: { "@type": "SportsTeam", name: game.away.fullName || game.away.abbr },
          description: game.whyItMatters,
          url: `https://hoopsintel.net/game/${gameId}`,
        }
      : undefined,
  });

  if (loading && !game) {
    return (
      <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
        <SiteHeader subtitle="GAME CENTER" />
        <Skeleton />
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
        <SiteHeader subtitle="GAME CENTER" />
        <main className="container py-20 text-center">
          <div className="section-label mb-3">GAME NOT FOUND</div>
          <h1 className="display-heading text-white text-2xl mb-4">No Game Center match for this ID</h1>
          <a href="/#scores" className="text-sky-400 underline">Back to scores</a>
        </main>
      </div>
    );
  }

  const shareUrl = `https://hoopsintel.net/game/${game.gameId}`;
  const shareTweet = `${game.title} | ${game.subtitle} hoopsintel.net/game/${game.gameId}`;

  return (
    <div className="min-h-screen pb-20" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="GAME CENTER" />
      <main className="container py-8">
        {error && (
          <div className="mb-4 rounded-lg border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-xs text-amber-200">
            Live API unavailable. Showing static generated fallback.
          </div>
        )}

        <section className="glass-card rounded-xl p-5 md:p-6 mb-6" style={{ borderTop: `3px solid ${getTeamColor(game.home.abbr)}` }}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="section-label mb-2">{game.source.replace(/-/g, " ")} · {game.status}</div>
              <h1 className="display-heading text-white text-3xl mb-2">{game.title}</h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {game.date}{game.time ? ` · ${game.time}` : ""}{game.tv ? ` · ${game.tv}` : ""}{game.venue ? ` · ${game.venue}` : ""}
              </p>
            </div>
            <ShareButton url={shareUrl} tweetText={shareTweet} size="md" />
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)" }}>
            <ScoreBlock abbr={game.away.abbr} score={game.away.score} />
            <div className="section-label text-center" style={{ color: "rgba(255,255,255,0.35)" }}>AT</div>
            <ScoreBlock abbr={game.home.abbr} score={game.home.score} align="right" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span className="rounded-full bg-white/[0.06] px-3 py-1.5">Source: {game.meta.sourceLabel}</span>
            <span className="rounded-full bg-white/[0.06] px-3 py-1.5">Updated: {game.updatedAt}</span>
            {game.statusDetail && <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-emerald-300">{game.statusDetail}</span>}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-lg p-5">
              <div className="section-label mb-2">WHY IT MATTERS</div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{game.whyItMatters}</p>
            </div>

            {(game.topPerformer || game.topLine || game.recap) && (
              <div className="glass-card rounded-lg p-5">
                <div className="section-label mb-3">TOP PERFORMER</div>
                {game.topPerformer && (
                  <a href={`/player/${slugify(game.topPerformer)}`} className="text-lg font-semibold text-white hover:text-sky-400">
                    {game.topPerformer}
                  </a>
                )}
                {game.topLine && <div className="mono-data text-sm mt-1" style={{ color: "#10B981" }}>{game.topLine}</div>}
                {game.recap && <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.62)" }}>{game.recap}</p>}
              </div>
            )}

            {game.refs?.impact && (
              <div className="glass-card rounded-lg p-5">
                <div className="section-label mb-2">REF CONTEXT</div>
                <div className="text-sm font-semibold text-white mb-2">{game.refs.leadRef} lead crew</div>
                {game.refs.crew && <div className="mono-data text-xs mb-3" style={{ color: "#38BDF8" }}>{game.refs.crew.join(" · ")}</div>}
                <p className="text-xs leading-relaxed line-clamp-6" style={{ color: "rgba(255,255,255,0.62)" }}>{game.refs.impact}</p>
              </div>
            )}

            {(game.betting?.spread || game.betting?.overUnder || game.betting?.angle) && (
              <div className="glass-card rounded-lg p-5">
                <div className="section-label mb-2">MARKET CONTEXT</div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="rounded bg-white/[0.04] p-3">
                    <div className="text-xs text-white/40">Spread</div>
                    <div className="mono-data text-white">{game.betting.spread || "TBD"}</div>
                  </div>
                  <div className="rounded bg-white/[0.04] p-3">
                    <div className="text-xs text-white/40">Total</div>
                    <div className="mono-data text-white">{game.betting.overUnder || "TBD"}</div>
                  </div>
                </div>
                {game.betting.angle && <p className="text-xs leading-relaxed line-clamp-5" style={{ color: "rgba(255,255,255,0.62)" }}>{game.betting.angle}</p>}
              </div>
            )}
          </section>

          <aside className="space-y-4">
            <div className="glass-card rounded-lg p-4 sticky top-4">
              <div className="section-label mb-3">KEY FACTS</div>
              <div className="space-y-2">
                {game.insights.map((insight) => (
                  <div key={insight.label} className="flex justify-between gap-3 text-xs">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{insight.label}</span>
                    <span className="text-right text-white font-semibold">{insight.value}</span>
                  </div>
                ))}
                {game.series && (
                  <a href={`/playoffs#series-card-${game.series.seriesId}`} className="block pt-2 text-xs font-semibold text-sky-300 hover:text-sky-200">
                    Open series board →
                  </a>
                )}
              </div>
            </div>

            {game.injuries.length > 0 && (
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-3">INJURY CONTEXT</div>
                <div className="space-y-3">
                  {game.injuries.map((inj) => (
                    <a key={`${inj.player}-${inj.team}`} href={`/player/${slugify(inj.player)}`} className="block rounded p-2 bg-white/[0.03]">
                      <div className="text-sm font-semibold text-white">{inj.player} <span className="text-xs text-white/40">{inj.team}</span></div>
                      <div className="text-xs text-amber-300">{inj.status} · {inj.injury}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="glass-card rounded-lg p-4">
              <div className="section-label mb-3">RELATED</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {game.relatedTeams.map((team) => (
                  <a key={team} href={`/team/${team.toLowerCase()}`} className="text-xs min-h-[36px] inline-flex items-center px-2 py-1 rounded bg-white/[0.06]" style={{ color: getTeamColor(team) }}>{team}</a>
                ))}
                {game.relatedPlayers.map((player) => (
                  <a key={player} href={`/player/${slugify(player)}`} className="text-xs min-h-[36px] inline-flex items-center px-2 py-1 rounded bg-white/[0.06] text-sky-300">{player}</a>
                ))}
              </div>
              <div className="space-y-2">
                {game.relatedStories.map((story) => (
                  <a key={story.id} href="/archive" className="block text-xs text-white/65 hover:text-sky-300">
                    {story.displayDate} · {story.headline}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
