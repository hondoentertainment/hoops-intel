import { useParams } from "wouter";
import { slugify, getAllPlayers } from "../lib/searchUtils";
import { archiveEditions } from "../lib/archiveData";
import { pulseIndex, gameResults, injuryUpdates, pulseEdition } from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";
import { useMetaTags } from "../lib/useMetaTags";
import SiteHeader from "../components/SiteHeader";
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
  const player = findPlayer(params.slug || "");

  if (!player) {
    return (
      <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
        <SiteHeader subtitle="PLAYER" />
        <div className="container py-20 text-center">
          <h1 className="display-heading text-white text-2xl mb-4">Player Not Found</h1>
          <a href="/" className="text-sky-400 underline">Back to Hoops Intel</a>
        </div>
      </div>
    );
  }

  const currentPulse = pulseIndex.find((p: any) => p.player === player.name);
  const currentInjury = injuryUpdates.find((inj: any) => inj.player === player.name);
  const currentGame = gameResults.find((g: any) => g.topPerformer === player.name);
  const editions = getPlayerEditions(player.name);
  const teamColor = player.teams[0] ? getTeamColor(player.teams[0]) : "#0EA5E9";

  const slug = params.slug || "";

  // Dynamic OG meta tags for this player page
  useMetaTags({
    title: currentPulse
      ? `${player.name} — Pulse Index #${currentPulse.rank} | Hoops Intel`
      : `${player.name} | Hoops Intel`,
    description: currentPulse
      ? `${currentPulse.keyStats} — ${currentPulse.note}`
      : `Player profile for ${player.name} on Hoops Intel.`,
    ogImage: `https://hoopsintel.net/api/og?player=${slug}`,
    ogUrl: `https://hoopsintel.net/player/${slug}`,
  });

  const shareUrl = `https://hoopsintel.net/player/${slug}`;
  const shareTweet = currentPulse
    ? `${currentPulse.player} — Pulse Rank #${currentPulse.rank} | ${currentPulse.keyStats} hoopsintel.net/player/${slug}`
    : `${player.name} on Hoops Intel hoopsintel.net/player/${slug}`;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PLAYER" />
      <div className="container py-8">
        {/* Player Header */}
        <div
          className="glass-card rounded-lg p-6 mb-6 relative"
          style={{ borderLeft: `4px solid ${teamColor}` }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="section-label mb-1">PLAYER PROFILE</div>
              <h1 className="display-heading text-white text-3xl mb-2">{player.name}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                {player.teams.map((t) => (
                  <a
                    key={t}
                    href={`/team/${t.toLowerCase()}`}
                    className="text-xs px-2 py-1 rounded font-semibold"
                    style={{ background: "rgba(255,255,255,0.06)", color: getTeamColor(t) }}
                  >
                    {t}
                  </a>
                ))}
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {player.mentions} mention{player.mentions !== 1 ? "s" : ""} in archive
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              {currentPulse && (
                <div className="text-right">
                  <div className="mono-data text-3xl font-bold" style={{ color: "#0EA5E9" }}>
                    {currentPulse.indexScore}
                  </div>
                  <div className="section-label">PULSE INDEX</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
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
                  color: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0EA5E9";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(14,165,233,0.3)";
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
            {/* Current Stats */}
            {currentPulse && (
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-2">CURRENT FORM — {pulseEdition.date}</div>
                <div className="mono-data text-sm mb-2" style={{ color: "#10B981" }}>
                  {currentPulse.keyStats}
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {currentPulse.note}
                </p>
              </div>
            )}

            {/* Current Game */}
            {currentGame && (
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-2">LAST GAME</div>
                <div className="text-sm font-semibold text-white mb-1">
                  {currentGame.awayTeam} {currentGame.awayScore} @ {currentGame.homeTeam} {currentGame.homeScore}
                </div>
                <div className="mono-data text-xs mb-2" style={{ color: "#10B981" }}>
                  {currentGame.topLine}
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {currentGame.recap}
                </p>
              </div>
            )}

            {/* Timeline */}
            <div>
              <div className="section-label mb-3">EDITION HISTORY</div>
              <div className="space-y-3">
                {editions.length === 0 && (
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                    No archive appearances yet.
                  </p>
                )}
                {editions.map((ed: any) => (
                  <div key={ed.id} className="glass-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="section-label">{ed.displayDate}</span>
                      {ed.topPlayer === player.name && (
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}
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
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-2">INJURY STATUS</div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded uppercase"
                    style={{
                      background:
                        currentInjury.status === "out"
                          ? "rgba(244,63,94,0.1)"
                          : currentInjury.status === "returning"
                            ? "rgba(16,185,129,0.1)"
                            : "rgba(245,158,11,0.1)",
                      color:
                        currentInjury.status === "out"
                          ? "#F43F5E"
                          : currentInjury.status === "returning"
                            ? "#10B981"
                            : "#F59E0B",
                    }}
                  >
                    {currentInjury.status}
                  </span>
                </div>
                <div className="text-sm text-white mb-1">{currentInjury.injury}</div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {currentInjury.timeline}
                </p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="glass-card rounded-lg p-4">
              <div className="section-label mb-3">QUICK FACTS</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Team</span>
                  <span className="text-white font-semibold">{player.teams.join(", ") || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Archive Mentions</span>
                  <span className="text-white font-semibold">{player.mentions}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Top Player Awards</span>
                  <span className="text-white font-semibold">
                    {editions.filter((e: any) => e.topPlayer === player.name).length}
                  </span>
                </div>
                {currentPulse && (
                  <>
                    <div className="flex justify-between">
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>Pulse Rank</span>
                      <span className="text-white font-semibold">#{currentPulse.rank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>Trend</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
