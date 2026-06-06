import { useEffect, useMemo, useState } from "react";
import { useParams } from "wouter";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import ErrorBlock from "../components/ErrorBlock";
import ShareButton from "../components/ShareButton";
import { getGameCenterById, gameCenterLineMovement, gameCenterShareMeta, mergeLiveIntoGameCenter, matchLiveScoreboardGame, type GameCenterResponse } from "../lib/gameCenter";
import { playoffSeriesForMatchup, resolveSeriesIntel } from "../lib/playoffData";
import { nextPendingGame } from "../lib/playoffAnalytics";
import { getTeamColor } from "../lib/teamColors";
import { slugify } from "../lib/searchUtils";
import { useMetaTags } from "../lib/useMetaTags";
import { useLiveScores } from "../lib/useLiveScores";
import { liveScoresTrustLabel } from "../lib/dataTrust";

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
  const { game: baseGame, loading, error } = useGameCenter(gameId);
  const { data: liveData } = useLiveScores();

  const game = useMemo(() => {
    if (!baseGame) return null;
    const live = matchLiveScoreboardGame(baseGame.away.abbr, baseGame.home.abbr, liveData?.games);
    return mergeLiveIntoGameCenter(baseGame, live);
  }, [baseGame, liveData?.games]);

  const share = game ? gameCenterShareMeta(game) : null;
  const lineMove = game ? gameCenterLineMovement(game.away.abbr, game.home.abbr, game.betting) : null;
  const isLiveOverlay = game?.status === "live";

  useMetaTags({
    title: game ? `${game.away.abbr} at ${game.home.abbr} | Game Center | Hoops Intel` : "Game Center | Hoops Intel",
    description: game?.whyItMatters || "Live game intelligence, score context, injuries, refs, and related Hoops Intel links.",
    ogImage: share?.ogImage ?? `https://hoopsintel.net/api/og?type=game&gameId=${encodeURIComponent(gameId)}`,
    ogUrl: share?.url ?? `https://hoopsintel.net/game/${gameId}`,
    canonicalUrl: share?.url ?? `https://hoopsintel.net/game/${gameId}`,
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
        <main id="main-content" tabIndex={-1} className="container py-20 text-center outline-none">
          <div className="section-label mb-3">GAME NOT FOUND</div>
          <h1 className="display-heading text-white text-2xl mb-4">No Game Center match for this ID</h1>
          <a href="/#scores" className="text-sky-400 underline">Back to scores</a>
        </main>
      </div>
    );
  }

  const shareUrl = share?.url ?? `https://hoopsintel.net/game/${game.gameId}`;
  const shareTweet = share?.tweetText ?? `${game.title} | ${game.subtitle} hoopsintel.net/game/${game.gameId}`;
  const previewPlayoffSeries =
    (game.status === "preview" || game.status === "scheduled")
      ? playoffSeriesForMatchup(game.away.abbr, game.home.abbr)
      : undefined;
  const activePlayoffSeries =
    previewPlayoffSeries && previewPlayoffSeries.status !== "complete"
      ? previewPlayoffSeries
      : undefined;
  const playoffIntel = activePlayoffSeries ? resolveSeriesIntel(activePlayoffSeries) : undefined;
  const playoffNext = activePlayoffSeries ? nextPendingGame(activePlayoffSeries) : undefined;

  return (
    <div className="min-h-screen pb-20" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="GAME CENTER" />
      <main id="main-content" tabIndex={-1} className="container py-8">
        <Breadcrumbs
          items={[
            { label: "Today's desk", href: "/" },
            { label: "Scores", href: "/#scores" },
            { label: game ? `${game.away.abbr} at ${game.home.abbr}` : "Game" },
          ]}
        />
        {error && (
          <div className="mb-4">
            <ErrorBlock
              message="Live Game Center API unavailable. Showing cached edition data."
              fallbackHref="/#scores"
              fallbackLabel="Back to scores"
            />
          </div>
        )}

        <section className="glass-card rounded-xl p-5 md:p-6 mb-6" style={{ borderTop: `3px solid ${getTeamColor(game.home.abbr)}` }}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="section-label">{game.source.replace(/-/g, " ")} · {game.status}</div>
                {isLiveOverlay && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden />
                    Live ESPN
                  </span>
                )}
              </div>
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
            {liveData?.fetchedAt && isLiveOverlay ? (
              <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-emerald-300">
                {liveScoresTrustLabel(liveData.fetchedAt)}
              </span>
            ) : null}
            {game.statusDetail && <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-emerald-300">{game.statusDetail}</span>}
            {game.period && game.clock ? (
              <span className="rounded-full bg-white/[0.06] px-3 py-1.5 mono-data">
                Q{game.period} · {game.clock}
              </span>
            ) : null}
          </div>
        </section>

        {activePlayoffSeries && playoffIntel && (
          <section
            className="glass-card rounded-lg p-4 md:p-5 mb-6"
            style={{
              border: "1px solid rgba(244,63,94,0.22)",
              background: "rgba(244,63,94,0.04)",
            }}
          >
            <div className="section-label mb-2" style={{ color: "#F43F5E" }}>
              PLAYOFF INTEL
            </div>
            <p className="text-sm font-semibold text-white mb-2">{activePlayoffSeries.summary}</p>
            {playoffNext && (
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                Next: {playoffNext.awayTeam} @ {playoffNext.homeTeam}
                {playoffNext.time ? ` · ${playoffNext.time}` : ""}
                {playoffNext.tv ? ` · ${playoffNext.tv}` : ""}
              </p>
            )}
            <p className="text-xs leading-relaxed mb-3 line-clamp-3" style={{ color: "rgba(255,255,255,0.65)" }}>
              {playoffIntel.keyMatchup}
            </p>
            <a
              href={`/playoffs/series/${activePlayoffSeries.seriesId}`}
              className="text-xs font-semibold text-sky-300 hover:text-sky-200"
            >
              Full series timeline →
            </a>
          </section>
        )}

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

            {(game.betting?.spread || game.betting?.overUnder || game.betting?.angle || lineMove?.moveBadge) && (
              <div className="glass-card rounded-lg p-5">
                <div className="section-label mb-2">MARKET CONTEXT</div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="rounded bg-white/[0.04] p-3">
                    <div className="text-xs text-white/40">Spread</div>
                    <div className="mono-data text-white">{lineMove?.closingSpread || game.betting?.spread || "TBD"}</div>
                    {lineMove?.openingSpread ? (
                      <div className="text-[10px] mono-data text-emerald-300/80 mt-1">
                        Opener {lineMove.openingSpread}
                      </div>
                    ) : null}
                    {lineMove?.moveBadge ? (
                      <div className="text-[10px] font-semibold text-amber-300/95 mt-1">{lineMove.moveBadge}</div>
                    ) : lineMove?.moved && lineMove.openingSpread && lineMove.closingSpread ? (
                      <div className="text-[10px] mono-data text-emerald-300/90 mt-1">
                        {lineMove.openingSpread} → {lineMove.closingSpread}
                      </div>
                    ) : null}
                  </div>
                  <div className="rounded bg-white/[0.04] p-3">
                    <div className="text-xs text-white/40">Total</div>
                    <div className="mono-data text-white">{game.betting.overUnder || "TBD"}</div>
                  </div>
                </div>
                {(lineMove?.education ?? game.betting?.lineMovement ?? []).map((line, i) => (
                  <p key={i} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {line}
                  </p>
                ))}
                {game.betting?.angle && <p className="text-xs leading-relaxed line-clamp-5" style={{ color: "rgba(255,255,255,0.62)" }}>{game.betting.angle}</p>}
              </div>
            )}
          </section>

          <aside className="space-y-4">
            <div className="glass-card rounded-lg p-4 sticky top-4">
              <div className="section-label mb-3">KEY FACTS</div>
              <div className="flex flex-wrap gap-2 mb-3">
                <a href="/pick-em" className="text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 rounded bg-emerald-500/15 text-emerald-300">
                  Pick &apos;Em
                </a>
                <a href="/betting-intel" className="text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 rounded bg-white/[0.06] text-white/55">
                  Lines
                </a>
              </div>
              <div className="space-y-2">
                {game.insights.map((insight) => (
                  <div key={insight.label} className="flex justify-between gap-3 text-xs">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{insight.label}</span>
                    <span className="text-right text-white font-semibold">{insight.value}</span>
                  </div>
                ))}
                {game.series && (
                  <a href={`/playoffs/series/${game.series.seriesId}`} className="block pt-2 text-xs font-semibold text-sky-300 hover:text-sky-200">
                    Open series timeline →
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
