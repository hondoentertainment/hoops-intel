import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { slugify, getAllPlayers } from "../lib/searchUtils";
import { archiveEditions } from "../lib/archiveData";
import { pulseIndex, gameResults, pulseEdition } from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";
import PlayerAvatar from "../components/PlayerAvatar";
import TeamLogo from "../components/TeamLogo";
import { useMetaTags } from "../lib/useMetaTags";
import {
  findPlayerInjury,
  getPlayerIntelBySlug,
  playerHasLiveDeskCoverage,
  type PlayerIntelResponse,
} from "../lib/playerIntel";
import { getPlayerRosterStatus, playerCoverageEmptyState } from "../lib/playerRosterStatus";
import { lastUpdatedStamp } from "../lib/dataTrust";
import { EmptyState, EnhancedButton, InjuryChip } from "../components/enhanced/EnhancedUi";
import { PlayerToolLinks } from "../components/PlayerToolLinks";
import ToolPageLayout from "../components/ToolPageLayout";
import ErrorBlock from "../components/ErrorBlock";
import { PlayerPageSkeleton } from "../components/PageSkeletons";
import ShareButton from "../components/ShareButton";

function findPlayer(slug: string) {
  const all = getAllPlayers();
  return all.find((p) => slugify(p.name) === slug);
}

function getPlayerEditions(playerName: string) {
  return archiveEditions.filter(
    (ed: any) =>
      ed.topPlayer === playerName ||
      (ed.players || []).includes(playerName)
  );
}

export default function Player() {
  const params = useParams<{ slug: string }>();
  const requestedSlug = params.slug || "";
  const player = findPlayer(requestedSlug);
  const [intel, setIntel] = useState<PlayerIntelResponse | null>(() => getPlayerIntelBySlug(requestedSlug));
  const [intelLoading, setIntelLoading] = useState(true);
  const [intelUnavailable, setIntelUnavailable] = useState(false);

  useEffect(() => {
    if (!requestedSlug) {
      setIntelLoading(false);
      return;
    }
    let active = true;
    setIntelLoading(true);
    setIntelUnavailable(false);
    fetch(`/api/player-intel?slug=${encodeURIComponent(requestedSlug)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`player-intel ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (active && !data.error) setIntel(data.data ?? data);
      })
      .catch(() => {
        if (active) {
          setIntel(getPlayerIntelBySlug(requestedSlug));
          setIntelUnavailable(true);
        }
      })
      .finally(() => {
        if (active) setIntelLoading(false);
      });
    return () => {
      active = false;
    };
  }, [requestedSlug]);

  const slug = params.slug || "";
  const currentPulse = player ? pulseIndex.find((p: any) => p.player === player.name) : undefined;
  const roster = player
    ? getPlayerRosterStatus(player.name, {
        inPulse: Boolean(currentPulse),
        hasCurrentTeam: player.teams.length > 0,
        mentions: player.mentions,
      })
    : null;

  useMetaTags({
    enabled: Boolean(slug),
    title: !player
      ? "Player Not Found | Hoops Intel"
      : currentPulse
        ? `${player.name} — Pulse Index #${currentPulse.rank} | Hoops Intel`
        : `${player.name} | Hoops Intel`,
    description: !player
      ? "This player profile is not available on Hoops Intel."
      : currentPulse
        ? `${currentPulse.keyStats} — ${currentPulse.note}`
        : roster && roster.status !== "active"
          ? `${player.name} — ${roster.label}. ${roster.detail}`
          : `Archive and desk coverage for ${player.name} on Hoops Intel.`,
    ogImage: player ? `https://hoopsintel.net/api/og?player=${slug}` : undefined,
    ogUrl: `https://hoopsintel.net/player/${slug}`,
    canonicalUrl: `https://hoopsintel.net/player/${slug}`,
    noindex: !player || !roster?.indexable,
    jsonLd: player
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: player.name,
          description:
            currentPulse?.note ||
            (roster && roster.status !== "active"
              ? `${player.name} — ${roster.label}. ${roster.detail}`
              : `Hoops Intel desk coverage for ${player.name}.`),
          url: `https://hoopsintel.net/player/${slug}`,
          affiliation: player.teams.map((team) => ({ "@type": "SportsTeam", name: team })),
          dateModified: pulseEdition.date,
        }
      : undefined,
  });

  if (!player) {
    return (
      <ToolPageLayout
        subtitle="PLAYER"
        showRelated={false}
        breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Players", href: "/players" }, { label: "Not found" }]}
      >
        <EmptyState
          kicker="Player"
          title="Player not found"
          body="That profile is not in the Pulse Index or archive coverage."
          pill="BROWSE INDEX"
          pillTone="accent"
        />
        <div className="flex justify-center">
          <EnhancedButton href="/players">Browse players</EnhancedButton>
        </div>
      </ToolPageLayout>
    );
  }

  if (intelLoading) {
    return (
      <ToolPageLayout
        subtitle="PLAYER"
        showRelated={false}
        breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Players", href: "/players" }, { label: "Loading" }]}
      >
        <PlayerPageSkeleton />
      </ToolPageLayout>
    );
  }

  const currentInjury = findPlayerInjury(player.name);
  const coverageEmpty = playerCoverageEmptyState(player.name, roster ?? {
    status: "inactive",
    label: "Limited coverage",
    detail: "Thin archive mention only — not a current NBA roster card.",
    indexable: false,
  });
  const currentGame = gameResults.find((g: any) => g.topPerformer === player.name);
  const editions = getPlayerEditions(player.name);
  const teamColor = player.teams[0] ? getTeamColor(player.teams[0]) : "var(--hi-accent,#8ec8f0)";

  const shareUrl = `https://hoopsintel.net/player/${slug}`;
  const shareTweet = currentPulse
    ? `${currentPulse.player} — Pulse Rank #${currentPulse.rank} | ${currentPulse.keyStats} hoopsintel.net/player/${slug}`
    : `${player.name} on Hoops Intel hoopsintel.net/player/${slug}`;

  return (
    <ToolPageLayout
      subtitle="PLAYER"
      showRelated={false}
      breadcrumbs={[
        { label: "Today's desk", href: "/" },
        { label: "Players", href: "/players" },
        { label: player.name },
      ]}
    >
        {roster && roster.status !== "active" && (
          <div
            className="enhanced-card p-4 mb-4"
            data-testid="player-roster-banner"
            role="status"
            style={{
              borderLeft: `3px solid ${roster.status === "retired" ? "#F59E0B" : "rgba(255,255,255,0.25)"}`,
            }}
          >
            <div className="section-label mb-2">ROSTER STATUS</div>
            <div className="text-sm font-semibold text-white mb-1">{roster.label}</div>
            <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
              {roster.detail}
            </p>
          </div>
        )}
        {intelUnavailable && (
          <div className="mb-4">
            <ErrorBlock
              message="Live player intelligence unavailable. Showing static generated fallback."
              fallbackHref={`/player/${slug}`}
              fallbackLabel="Reload profile"
            />
          </div>
        )}
        {/* Player Header */}
        <div
          className="enhanced-card p-6 mb-6 relative"
          style={{ borderLeft: `4px solid ${teamColor}` }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <PlayerAvatar name={player.name} team={player.teams[0]} size={72} />
              <div>
              <p className="enhanced-kicker mb-1">
                {roster && roster.status !== "active" ? roster.label : "Player profile"}
              </p>
              <h1 className="editorial-heading text-[var(--hi-text,#0a0a0a)] text-3xl mb-2 max-md:text-[1.5rem]">{player.name}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                {player.teams.map((t) => (
                  <a
                    key={t}
                    href={`/team/${t.toLowerCase()}`}
                    className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded font-semibold"
                    style={{ background: "var(--hi-surface-2,#f3f3f0)", color: getTeamColor(t) }}
                  >
                    <TeamLogo team={t} size={16} />
                    {t}
                  </a>
                ))}
                {currentInjury && (
                  <span data-testid="player-injury-badge">
                    <InjuryChip status={currentInjury.status} />
                  </span>
                )}
                {roster && roster.status !== "active" && (
                  <span
                    data-testid="player-roster-badge"
                    className="text-xs px-2 py-1 rounded font-semibold uppercase tracking-wide"
                    style={{
                      background: roster.status === "retired" ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.06)",
                      color: roster.status === "retired" ? "#F59E0B" : "var(--hi-muted,#5c5c58)",
                    }}
                  >
                    {roster.label}
                  </span>
                )}
                <span className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                  {player.mentions} mention{player.mentions !== 1 ? "s" : ""} in archive
                </span>
                <span
                  className="text-xs"
                  data-testid="player-last-updated"
                  style={{ color: "var(--hi-text-secondary,#5c5c58)" }}
                >
                  {lastUpdatedStamp()}
                </span>
              </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              {currentPulse && (
                <div className="text-right">
                  <div className="mono-data text-3xl font-bold" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                    {currentPulse.indexScore}
                  </div>
                  <div className="section-label">PULSE INDEX</div>
                  <div className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    Rank #{currentPulse.rank}
                  </div>
                </div>
              )}
              {/* Share Card link */}
              <a
                href={`/card/${slug}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "var(--hi-muted,#5c5c58)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(142,200,240,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--hi-accent,#8ec8f0)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(142,200,240,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
                aria-label="View shareable card"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                Share Card
              </a>
              {/* Share button */}
              <ShareButton
                url={shareUrl}
                tweetText={shareTweet}
                size="md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-4">
            {!playerHasLiveDeskCoverage(intel) && (
              <>
                <EmptyState
                  kicker={coverageEmpty.kicker}
                  title={coverageEmpty.title}
                  body={coverageEmpty.body}
                  pill={coverageEmpty.pill}
                  footnote={`${player.mentions} archive mention${player.mentions !== 1 ? "s" : ""}`}
                />
                <div className="flex flex-wrap gap-2">
                  <EnhancedButton href="/players">Player index</EnhancedButton>
                </div>
              </>
            )}
            {/* Current Stats */}
            {currentPulse && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-2">CURRENT FORM — {pulseEdition.date}</div>
                <div className="mono-data text-sm mb-2" style={{ color: "#10B981" }}>
                  {currentPulse.keyStats}
                </div>
                <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                  {currentPulse.note}
                </p>
              </div>
            )}

            {intel?.sentiment && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-2">SENTIMENT PROFILE</div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white capitalize">{intel.sentiment.sentiment}</span>
                  <span className="mono-data text-lg" style={{ color: "var(--hi-accent-text,#146a8c)" }}>{intel.sentiment.score}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: "var(--hi-muted,#5c5c58)" }}>{intel.sentiment.topTake}</p>
                <p className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>{intel.sentiment.narrativeArc}</p>
              </div>
            )}

            {intel?.recentGames && intel.recentGames.length > 0 && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-3">RELATED GAMES</div>
                <div className="space-y-2">
                  {intel.recentGames.map((g) => (
                    <a key={g.gameId} href={g.link} className="block rounded p-2 bg-white/[0.03] hover:bg-white/[0.06]">
                      <div className="text-sm font-semibold text-white">{g.title}</div>
                      <div className="text-xs" style={{ color: "var(--hi-muted,#5c5c58)" }}>{g.line || g.status}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Current Game */}
            {currentGame && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-2">LAST GAME</div>
                <div className="text-sm font-semibold text-white mb-1">
                  {currentGame.awayTeam} {currentGame.awayScore} @ {currentGame.homeTeam} {currentGame.homeScore}
                </div>
                <div className="mono-data text-xs mb-2" style={{ color: "#10B981" }}>
                  {currentGame.topLine}
                </div>
                <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                  {currentGame.recap}
                </p>
              </div>
            )}

            {/* Timeline */}
            <div>
              <div className="section-label mb-3">EDITION HISTORY</div>
              <div className="space-y-3">
                {editions.length === 0 && (
                  <p className="text-sm" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    No archive appearances yet.
                  </p>
                )}
                {editions.map((ed: any) => (
                  <div key={ed.id} className="enhanced-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="section-label">{ed.displayDate}</span>
                      {ed.topPlayer === player.name && (
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ background: "rgba(142,200,240,0.15)", color: "var(--hi-accent-text,#146a8c)" }}
                        >
                          TOP PLAYER
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{ed.headline}</h3>
                    {ed.topPlayer === player.name && (
                      <div className="mono-data text-xs" style={{ color: "#10B981" }}>
                        {ed.topStatLine}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Injury Status */}
            {currentInjury && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-2">INJURY STATUS</div>
                <div className="flex items-center gap-2 mb-2">
                  <InjuryChip status={currentInjury.status} />
                </div>
                <div className="text-sm text-white mb-1">{currentInjury.injury}</div>
                <p className="text-xs" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                  {currentInjury.timeline}
                </p>
              </div>
            )}

            {intel?.playoff && (intel.playoff.mover || intel.playoff.series.length > 0) && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-3">PLAYOFF CONTEXT</div>
                {intel.playoff.mover && (
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-white capitalize">{intel.playoff.mover.direction} {intel.playoff.mover.delta > 0 ? "+" : ""}{intel.playoff.mover.delta}</div>
                    <div className="mono-data text-xs mb-1" style={{ color: "#10B981" }}>{intel.playoff.mover.line}</div>
                    <p className="text-xs" style={{ color: "var(--hi-muted,#5c5c58)" }}>{intel.playoff.mover.note}</p>
                  </div>
                )}
                {intel.playoff.series.map((s) => (
                  <a key={s.seriesId} href={`/playoffs#series-card-${s.seriesId}`} className="block text-xs text-[var(--hi-text)] hover:text-[var(--hi-muted)]">
                    vs {s.opponent} · {s.summary}
                  </a>
                ))}
              </div>
            )}

            {/* Quick Stats */}
            <div className="enhanced-card p-4">
              <div className="section-label mb-3">QUICK FACTS</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Roster status</span>
                  <span className="text-white font-semibold">{roster?.label ?? "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Team</span>
                  <span className="text-white font-semibold">{player.teams.join(", ") || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Archive Mentions</span>
                  <span className="text-white font-semibold">{player.mentions}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Last updated</span>
                  <span className="text-white font-semibold">{pulseEdition.date}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Top Player Awards</span>
                  <span className="text-white font-semibold">
                    {editions.filter((e: any) => e.topPlayer === player.name).length}
                  </span>
                </div>
                {currentPulse && (
                  <>
                    <div className="flex justify-between">
                      <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Pulse Rank</span>
                      <span className="text-white font-semibold">#{currentPulse.rank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Trend</span>
                      <span
                        className={
                          currentPulse.trend === "up"
                            ? "text-emerald-400"
                            : currentPulse.trend === "down"
                              ? "text-rose-400"
                              : "text-slate-400"
                        }
                      >
                        {currentPulse.trend === "up" ? "▲ Rising" : currentPulse.trend === "down" ? "▼ Falling" : "● Stable"}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <PlayerToolLinks
              name={player.name}
              team={player.teams[0]}
              live={roster?.status === "active"}
            />
          </div>
        </div>
    </ToolPageLayout>
  );
}
