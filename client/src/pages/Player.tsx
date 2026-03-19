import { useState, useRef, useEffect } from "react";
import { useParams } from "wouter";
import { slugify, getAllPlayers } from "../lib/searchUtils";
import { archiveEditions } from "../lib/archiveData";
import { pulseIndex, gameResults, injuryUpdates, pulseEdition } from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";

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
      <div className="min-h-screen" style={{ background: "#050D1A" }}>
        <PageHeader />
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

  // Share button state
  const [shareOpen, setShareOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!shareOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [shareOpen]);

  const slug = params.slug || "";

  const handleCopyLink = async () => {
    const pageUrl = `${window.location.origin}/player/${slug}`;
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement("textarea");
      el.value = pageUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setShareOpen(false);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const handleTweetShare = () => {
    if (!currentPulse) return;
    const tweetText = `${currentPulse.player} — Pulse Rank #${currentPulse.rank} 🏀 ${currentPulse.keyStats} hoopsintel.net/player/${slug}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "_blank", "noopener,noreferrer");
    setShareOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <PageHeader />
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
              {/* Share button */}
              <div ref={shareRef} className="relative">
                <button
                  onClick={() => setShareOpen((v) => !v)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold transition-colors"
                  style={{
                    background: shareOpen ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.06)",
                    color: shareOpen ? "#0EA5E9" : "rgba(255,255,255,0.65)",
                    border: "1px solid",
                    borderColor: shareOpen ? "rgba(14,165,233,0.4)" : "rgba(255,255,255,0.1)",
                  }}
                  aria-label="Share player"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                  Share
                </button>
                {shareOpen && (
                  <div
                    className="absolute right-0 mt-1 rounded-lg overflow-hidden z-10"
                    style={{
                      background: "#0B1728",
                      border: "1px solid rgba(255,255,255,0.1)",
                      minWidth: "160px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-2 px-4 py-3 text-xs text-left transition-colors"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      Copy link
                    </button>
                    {currentPulse && (
                      <button
                        onClick={handleTweetShare}
                        className="w-full flex items-center gap-2 px-4 py-3 text-xs text-left transition-colors"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        Post on X
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Toast notification */}
          {toastVisible && (
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded text-xs font-semibold z-20"
              style={{
                background: "#10B981",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
              }}
            >
              Link copied!
            </div>
          )}
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

function PageHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(5, 13, 26, 0.95)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
            >
              HI
            </div>
            <div>
              <div className="display-heading text-white text-lg leading-none">HOOPS INTEL</div>
              <div className="section-label" style={{ fontSize: "0.6rem" }}>PLAYER</div>
            </div>
          </a>
          <a href="/" className="text-xs font-medium" style={{ color: "#0EA5E9" }}>
            ← Back to Today
          </a>
        </div>
      </div>
    </header>
  );
}
