import { useEffect, useState } from "react";
import { useParams } from "wouter";
import {
  seriesForTeam, playoffSeriesOpponent, playoffSeriesForMatchup } from "../lib/playoffData";
import { nextPendingGame } from "../lib/playoffAnalytics";
import { getTeamColor } from "../lib/teamColors";
import TeamLogo from "../components/TeamLogo";
import { slugify } from "../lib/searchUtils";
import { useMetaTags } from "../lib/useMetaTags";
import { TEAM_NAMES, canonicalizeTeamCode } from "../lib/identity";
import { EmptyState, EnhancedButton } from "../components/enhanced/EnhancedUi";
import ToolPageLayout from "../components/ToolPageLayout";
import ErrorBlock from "../components/ErrorBlock";
import { TeamPageSkeleton } from "../components/PageSkeletons";
import { getTeamIntelByAbbr, type TeamIntelResponse } from "../lib/teamIntel";

export default function Team() {
  const params = useParams<{ abbr: string }>();
  const abbr = canonicalizeTeamCode(params.abbr || "");
  const fullName = TEAM_NAMES[abbr];
  const [teamIntel, setTeamIntel] = useState<TeamIntelResponse | null>(() => getTeamIntelByAbbr(abbr));
  const [intelLoading, setIntelLoading] = useState(true);
  const [intelUnavailable, setIntelUnavailable] = useState(false);

  useEffect(() => {
    if (!abbr || !fullName) {
      setIntelLoading(false);
      return;
    }
    let active = true;
    setIntelLoading(true);
    fetch(`/api/team-intel?abbr=${encodeURIComponent(abbr.toLowerCase())}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`team-intel ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (active && !data.error) setTeamIntel(data.data ?? data);
      })
      .catch(() => {
        if (active) {
          setTeamIntel(getTeamIntelByAbbr(abbr));
          setIntelUnavailable(true);
        }
      })
      .finally(() => {
        if (active) setIntelLoading(false);
      });
    return () => {
      active = false;
    };
  }, [abbr, fullName]);

  useMetaTags({
    title: fullName ? `${fullName} Team Intel | Hoops Intel` : "Team Not Found | Hoops Intel",
    description: fullName
      ? `${fullName} scores, injuries, playoff context, Pulse Index players, and archive storylines on Hoops Intel.`
      : "This team profile is not available on Hoops Intel.",
    ogImage: fullName ? `https://hoopsintel.net/api/og?type=team&team=${abbr}` : undefined,
    ogUrl: `https://hoopsintel.net/team/${abbr.toLowerCase()}`,
    canonicalUrl: `https://hoopsintel.net/team/${abbr.toLowerCase()}`,
    noindex: !fullName,
    jsonLd: fullName
      ? {
          "@context": "https://schema.org",
          "@type": "SportsTeam",
          name: fullName,
          sport: "Basketball",
          url: `https://hoopsintel.net/team/${abbr.toLowerCase()}`,
        }
      : undefined,
  });

  if (!fullName) {
    return (
      <ToolPageLayout
        subtitle="TEAMS"
        showRelated={false}
        breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Standings", href: "/#standings" }, { label: "Not found" }]}
      >
        <EmptyState
          kicker="Team"
          title="Team not found"
          body="That abbreviation is not on the Hoops Intel desk."
          pill="BACK TO DESK"
          pillTone="accent"
        />
        <div className="flex justify-center">
          <EnhancedButton href="/">Today's desk</EnhancedButton>
        </div>
      </ToolPageLayout>
    );
  }

  if (intelLoading || !teamIntel) {
    return (
      <ToolPageLayout subtitle={`TEAM · ${abbr}`} showRelated={false} showBreadcrumbs={false}>
        <TeamPageSkeleton />
      </ToolPageLayout>
    );
  }

  const teamColor = getTeamColor(abbr);
  const standing = teamIntel.standing;
  const teamGames = teamIntel.recentGames;
  const teamPreviews = teamIntel.previews;
  const teamInjuries = teamIntel.injuries;
  const teamPlayers = teamIntel.pulsePlayers;
  const teamEditions = teamIntel.editions;
  const playoffRow = seriesForTeam(abbr);
  const playoffNext = playoffRow ? nextPendingGame(playoffRow) : undefined;
  const playoffOppAbbr = playoffRow ? playoffSeriesOpponent(playoffRow, abbr) : "";
  const oppStandingsKey =
    playoffOppAbbr === "NY" ? "NYK" : playoffOppAbbr === "SA" ? "SAS" : playoffOppAbbr;
  const playoffOppName = playoffOppAbbr ? TEAM_NAMES[oppStandingsKey] ?? playoffOppAbbr : "";

  return (
    <ToolPageLayout
      subtitle={`TEAM · ${abbr}`}
      showRelated={false}
      breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Standings", href: "/#standings" }, { label: abbr }]}
    >
        {intelUnavailable && (
          <div className="mb-4">
            <ErrorBlock
              message="Live team intelligence unavailable. Showing cached edition data."
              fallbackHref={`/team/${abbr.toLowerCase()}`}
              fallbackLabel="Reload team page"
            />
          </div>
        )}
        {/* Team Header */}
        <div
          className="enhanced-card p-6 mb-6"
          style={{ borderLeft: `4px solid ${teamColor}` }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <TeamLogo team={abbr} size={64} />
              <div>
                <p className="enhanced-kicker mb-1">Team profile</p>
                <h1 className="editorial-heading text-[var(--hi-text,#0a0a0a)] text-3xl mb-1 max-md:text-[1.5rem]">{fullName}</h1>
                <div className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                  {standing?.conf === "east" ? "Eastern" : "Western"} Conference
                </div>
              </div>
            </div>
            {standing && (
              <div className="text-right">
                <div className="mono-data text-3xl font-bold text-white">
                  {standing.wins}-{standing.losses}
                </div>
                <div className="section-label">
                  {standing.conf === "east" ? "EAST" : "WEST"} #{standing.rank}
                </div>
                <div className="flex items-center gap-2 justify-end mt-1">
                  <span
                    className="mono-data text-xs"
                    style={{
                      color: standing.streak.startsWith("W") ? "#10B981" : "#F43F5E",
                    }}
                  >
                    {standing.streak}
                  </span>
                  <span className="mono-data text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    L10: {standing.last10}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {playoffRow && (
          <div
            className="enhanced-card p-4 mb-6"
            style={{
              border: "1px solid rgba(142,200,240,0.2)",
              background: "rgba(142,200,240,0.04)",
            }}
          >
            <div className="section-label mb-2" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
              PLAYOFFS (SYNCED BOARD)
            </div>
            <p className="text-sm text-white font-semibold mb-1">
              vs {playoffOppName} — {playoffRow.summary}
            </p>
            {playoffNext && (
              <p className="text-xs mb-3" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                Next: {playoffNext.awayTeam} @ {playoffNext.homeTeam}
                {playoffNext.time ? ` · ${playoffNext.time}` : ""}
                {playoffNext.tv ? ` · ${playoffNext.tv}` : ""}
              </p>
            )}
            {!playoffNext && playoffRow.status === "complete" && (
              <p className="text-xs mb-3" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                Series complete.
              </p>
            )}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href={`/team/${playoffOppAbbr.toLowerCase()}`}
                className="text-xs font-medium"
                style={{ color: "var(--hi-muted,#5c5c58)" }}
              >
                {playoffOppName} team intel →
              </a>
              <a
                href={`/playoffs#series-card-${playoffRow.seriesId}`}
                className="text-xs font-medium"
                style={{ color: "#38BDF8" }}
              >
                {playoffOppAbbr} series on playoff board →
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Recent Games */}
            {teamGames.length > 0 && (
              <div>
                <div className="section-label mb-3">LAST NIGHT</div>
                {teamGames.map((g: any) => {
                  const won =
                    (g.homeTeam === abbr && g.homeScore > g.awayScore) ||
                    (g.awayTeam === abbr && g.awayScore > g.homeScore);
                  return (
                    <div key={g.gameId} className="enhanced-card p-4 mb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{
                            background: won ? "rgba(16,185,129,0.1)" : "rgba(244,63,94,0.1)",
                            color: won ? "#10B981" : "#F43F5E",
                          }}
                        >
                          {won ? "WIN" : "LOSS"}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {g.awayTeam} {g.awayScore} @ {g.homeTeam} {g.homeScore}
                        </span>
                      </div>
                      <div className="mono-data text-xs mb-2" style={{ color: "#10B981" }}>
                        {g.topPerformer}: {g.topLine}
                      </div>
                      <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                        {g.recap}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tonight */}
            {teamPreviews.length > 0 && (
              <div>
                <div className="section-label mb-3">TONIGHT</div>
                {teamPreviews.map((p: any, i: number) => {
                  const previewSeries = playoffSeriesForMatchup(p.awayTeam, p.homeTeam);
                  return (
                  <div key={i} className="enhanced-card p-4 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">
                        {p.awayTeam} @ {p.homeTeam}
                      </span>
                      <span className="text-sm text-white">{p.time}</span>
                    </div>
                    <div className="mono-data text-xs mb-2" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                      {p.spread} · O/U {p.overUnder} · {p.tv}
                    </div>
                    {previewSeries && previewSeries.status !== "complete" && (
                      <a
                        href={`/playoffs#series-card-${previewSeries.seriesId}`}
                        className="inline-block text-xs font-semibold mb-2"
                        style={{ color: "#F43F5E" }}
                      >
                        Playoff series · {previewSeries.summary} →
                      </a>
                    )}
                    <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                      {p.storyline}
                    </p>
                  </div>
                  );
                })}
              </div>
            )}

            {/* Edition History */}
            <div>
              <div className="section-label mb-3">
                ARCHIVE ({teamEditions.length} edition{teamEditions.length !== 1 ? "s" : ""})
              </div>
              <div className="space-y-3">
                {teamEditions.slice(0, 10).map((ed: any) => (
                  <div key={ed.id} className="enhanced-card p-4">
                    <div className="section-label mb-1">{ed.displayDate}</div>
                    <h3 className="text-sm font-semibold text-white mb-1">{ed.headline}</h3>
                    <p className="text-xs" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                      {ed.subheadline}
                    </p>
                  </div>
                ))}
                {teamEditions.length > 10 && (
                  <p className="text-xs text-center" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    + {teamEditions.length - 10} more editions
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Pulse Index Players */}
            {teamPlayers.length > 0 && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-3">PULSE INDEX</div>
                <div className="space-y-3">
                  {teamPlayers.map((p: any) => (
                    <a
                      key={p.rank}
                      href={`/player/${slugify(p.player)}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-center gap-2">
                        <span className="mono-data text-lg font-bold" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                          #{p.rank}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white">{p.player}</div>
                          <div className="mono-data text-xs" style={{ color: "#10B981" }}>
                            {p.keyStats}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Injuries */}
            {teamInjuries.length > 0 && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-3">INJURY REPORT</div>
                <div className="space-y-3">
                  {teamInjuries.map((inj: any, i: number) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1">
                        <a
                          href={`/player/${slugify(inj.player)}`}
                          className="text-sm font-semibold text-white hover:text-[var(--hi-text)] transition-colors"
                        >
                          {inj.player}
                        </a>
                        <span
                          className="text-xs font-bold px-1.5 py-0.5 rounded uppercase"
                          style={{
                            background:
                              inj.status === "out"
                                ? "rgba(244,63,94,0.1)"
                                : "rgba(245,158,11,0.1)",
                            color: inj.status === "out" ? "#F43F5E" : "#F59E0B",
                          }}
                        >
                          {inj.status}
                        </span>
                      </div>
                      <div className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                        {inj.injury}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standing Details */}
            {standing && (
              <div className="enhanced-card p-4">
                <div className="section-label mb-3">STANDINGS</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Conference</span>
                    <span className="text-white font-semibold">
                      {standing.conf === "east" ? "Eastern" : "Western"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Seed</span>
                    <span className="text-white font-semibold">#{standing.rank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Record</span>
                    <span className="text-white font-semibold">
                      {standing.wins}-{standing.losses} ({standing.pct})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Games Back</span>
                    <span className="text-white font-semibold">{standing.gb}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Streak</span>
                    <span
                      style={{
                        color: standing.streak.startsWith("W") ? "#10B981" : "#F43F5E",
                      }}
                    >
                      {standing.streak}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Last 10</span>
                    <span className="text-white font-semibold">{standing.last10}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Playoff Status</span>
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          standing.rank <= 6
                            ? "#10B981"
                            : standing.rank <= 10
                              ? "#F59E0B"
                              : "#F43F5E",
                      }}
                    >
                      {standing.rank <= 6
                        ? "Playoff Seed"
                        : standing.rank <= 10
                          ? "Play-In"
                          : "Out"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </ToolPageLayout>
  );
}