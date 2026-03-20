import { useState } from "react";
import { useParams } from "wouter";
import { slugify, getAllPlayers } from "../lib/searchUtils";
import { pulseIndex, statLeaders, pulseEdition } from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";

function findPlayer(slug: string) {
  const all = getAllPlayers();
  return all.find((p) => slugify(p.name) === slug);
}

export default function PlayerCard() {
  const params = useParams<{ player: string }>();
  const slug = params.player || "";
  const player = findPlayer(slug);

  const [shareCopied, setShareCopied] = useState(false);

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#050D1A" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Player Not Found</h1>
          <a href="/" className="text-sky-400 underline">Back to Hoops Intel</a>
        </div>
      </div>
    );
  }

  const currentPulse = pulseIndex.find((p: any) => p.player === player.name);
  const teamColor = player.teams[0] ? getTeamColor(player.teams[0]) : "#0EA5E9";

  // Parse season stats from keyStats string (e.g. "40 PTS · 14-27 FG · 3-5 3PT · 9-11 FT")
  function parseStats(keyStats: string) {
    const pts = keyStats.match(/(\d+(?:\.\d+)?)\s*PTS/);
    const reb = keyStats.match(/(\d+(?:\.\d+)?)\s*REB/);
    const ast = keyStats.match(/(\d+(?:\.\d+)?)\s*AST/);
    const fgMatch = keyStats.match(/(\d+)-(\d+)\s*FG/);
    let fg = null;
    if (fgMatch) {
      const made = parseInt(fgMatch[1]);
      const att = parseInt(fgMatch[2]);
      if (att > 0) fg = ((made / att) * 100).toFixed(1);
    }
    return {
      pts: pts ? pts[1] : null,
      reb: reb ? reb[1] : null,
      ast: ast ? ast[1] : null,
      fg: fg,
    };
  }

  const stats = currentPulse ? parseStats(currentPulse.keyStats) : { pts: null, reb: null, ast: null, fg: null };

  const trendColor =
    currentPulse?.trend === "up"
      ? "#10B981"
      : currentPulse?.trend === "down"
        ? "#F43F5E"
        : "#94A3B8";

  const trendIcon =
    currentPulse?.trend === "up"
      ? "▲"
      : currentPulse?.trend === "down"
        ? "▼"
        : "●";

  const trendLabel =
    currentPulse?.trend === "up"
      ? "Rising"
      : currentPulse?.trend === "down"
        ? "Falling"
        : "Stable";

  const handleShare = async () => {
    const text = `Check out ${player.name}'s Hoops Intel card: hoopsintel.net/card/${slug}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const handleDownload = () => {
    window.print();
  };

  // Build a hex color with low opacity for the gradient stop
  function hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4"
      style={{ background: "#050D1A" }}
    >
      {/* Print stylesheet injected inline */}
      <style>{`
        @media print {
          body > *:not(#player-card-root) { display: none !important; }
          #player-card-root { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
        }
      `}</style>

      {/* Back link — hidden during print */}
      <div className="no-print w-full max-w-sm mb-4">
        <a
          href={`/player/${slug}`}
          className="text-xs font-medium flex items-center gap-1 transition-opacity hover:opacity-80"
          style={{ color: "#0EA5E9" }}
        >
          ← View Full Profile
        </a>
      </div>

      {/* Card */}
      <div
        id="player-card-root"
        className="w-full max-w-sm rounded-2xl overflow-hidden relative"
        style={{
          background: "rgba(11, 23, 40, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `2px solid ${hexToRgba(teamColor, 0.6)}`,
          boxShadow: `0 0 40px ${hexToRgba(teamColor, 0.2)}, 0 20px 60px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Gradient accent bar at top */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${teamColor}, ${hexToRgba(teamColor, 0.3)})`,
          }}
        />

        {/* Card background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${hexToRgba(teamColor, 0.12)} 0%, transparent 60%)`,
          }}
        />

        <div className="relative p-6">
          {/* Top row: team badge + rank badge */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              {player.teams.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full font-bold tracking-wide"
                  style={{
                    background: hexToRgba(teamColor, 0.15),
                    color: teamColor,
                    border: `1px solid ${hexToRgba(teamColor, 0.3)}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {currentPulse && (
              <div
                className="text-xs px-3 py-1.5 rounded-full font-bold whitespace-nowrap"
                style={{
                  background: "rgba(14,165,233,0.15)",
                  color: "#0EA5E9",
                  border: "1px solid rgba(14,165,233,0.3)",
                }}
              >
                #{currentPulse.rank} Pulse Index
              </div>
            )}
          </div>

          {/* Player name */}
          <h1
            className="font-black tracking-tight leading-none mb-1"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
              color: "#FFFFFF",
              fontFamily: "'Inter', system-ui, sans-serif",
              textShadow: `0 0 30px ${hexToRgba(teamColor, 0.4)}`,
            }}
          >
            {player.name}
          </h1>

          {/* Team full names row */}
          <div className="text-xs font-semibold mb-5" style={{ color: hexToRgba(teamColor, 0.9) }}>
            {player.teams.join(" · ")}
          </div>

          {/* Pulse score */}
          {currentPulse && (
            <div className="flex items-end gap-3 mb-5">
              <div>
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: "3.5rem",
                    color: "#0EA5E9",
                    fontVariantNumeric: "tabular-nums",
                    textShadow: "0 0 20px rgba(14,165,233,0.4)",
                  }}
                >
                  {currentPulse.indexScore}
                </div>
                <div className="text-xs font-bold tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  PULSE INDEX
                </div>
              </div>
              {/* Trend */}
              <div
                className="mb-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold"
                style={{
                  background: hexToRgba(trendColor, 0.12),
                  color: trendColor,
                  border: `1px solid ${hexToRgba(trendColor, 0.25)}`,
                }}
              >
                <span>{trendIcon}</span>
                <span>{trendLabel}</span>
              </div>
            </div>
          )}

          {/* Divider */}
          <div
            className="mb-5"
            style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
          />

          {/* Stats grid */}
          {currentPulse && (
            <div className="mb-5">
              <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                LAST GAME — {pulseEdition.date}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "PTS", value: stats.pts },
                  { label: "REB", value: stats.reb },
                  { label: "AST", value: stats.ast },
                  { label: "FG%", value: stats.fg ? `${stats.fg}%` : null },
                ].map(({ label, value }) =>
                  value ? (
                    <div
                      key={label}
                      className="rounded-xl py-3 text-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="font-black leading-none text-xl mb-1"
                        style={{ color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}
                      >
                        {value}
                      </div>
                      <div className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {label}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
              {/* Key stats line */}
              <div
                className="mt-3 text-xs font-semibold leading-relaxed"
                style={{ color: "#10B981" }}
              >
                {currentPulse.keyStats}
              </div>
            </div>
          )}

          {/* Note */}
          {currentPulse?.note && (
            <p
              className="text-xs leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {currentPulse.note}
            </p>
          )}

          {/* Divider */}
          <div
            className="mb-4"
            style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
          />

          {/* Branding watermark */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center font-bold text-white text-xs"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
              >
                HI
              </div>
              <div>
                <div
                  className="font-black text-sm tracking-widest leading-none"
                  style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  HOOPS INTEL
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
                  hoopsintel.net
                </div>
              </div>
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}>
              {pulseEdition.date}
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons — hidden during print */}
      <div className="no-print w-full max-w-sm mt-4 flex gap-3">
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all"
          style={{
            background: shareCopied ? "rgba(16,185,129,0.2)" : "rgba(14,165,233,0.12)",
            color: shareCopied ? "#10B981" : "#0EA5E9",
            border: `1px solid ${shareCopied ? "rgba(16,185,129,0.35)" : "rgba(14,165,233,0.3)"}`,
          }}
          aria-label="Share player card"
        >
          {shareCopied ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </>
          )}
        </button>
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all"
          style={{
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
          }}
          aria-label="Download player card"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}
