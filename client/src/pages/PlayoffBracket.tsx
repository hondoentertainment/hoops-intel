import { useState } from "react";
import { eastStandings, westStandings } from "../lib/pulseData";
import { playoffSeries, type PlayoffSeries } from "../lib/playoffData";

// ═══════════════════════════════════════════════════════════
// PLAYOFF BRACKET
// When `playoffSeries` is non-empty the bracket renders live series
// state (score, elimination marker, next game). Otherwise it falls
// back to projected matchups generated from current standings.
// ═══════════════════════════════════════════════════════════

interface BracketTeam {
  seed: number;
  team: string;
  record: string;
  pct: number;
}

function getSeededTeams(standings: any[]): BracketTeam[] {
  return [...standings]
    .sort((a: any, b: any) => {
      const pctA = a.wins / (a.wins + a.losses);
      const pctB = b.wins / (b.wins + b.losses);
      return pctB - pctA;
    })
    .map((t: any, i: number) => ({
      seed: i + 1,
      team: t.team,
      record: `${t.wins}-${t.losses}`,
      pct: t.wins / (t.wins + t.losses),
    }));
}

// ── Live series card ─────────────────────────────────────────

function SeriesCard({ series }: { series: PlayoffSeries }) {
  const elimination = series.higherWins === 3 || series.lowerWins === 3;
  const complete = series.status === "complete";
  const leaderWins = Math.max(series.higherWins, series.lowerWins);
  const leader = series.higherWins > series.lowerWins ? series.higherTeam : series.lowerTeam;
  const nextGame = series.games.find((g) => g.status === "scheduled");

  const accentColor = complete
    ? "rgba(16,185,129,0.6)"
    : elimination
    ? "rgba(244,63,94,0.6)"
    : "rgba(14,165,233,0.4)";

  return (
    <div
      className="glass-card rounded-lg p-3"
      style={{ borderLeft: `3px solid ${accentColor}`, minWidth: 220 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
          {series.conference === "east" ? "East" : series.conference === "west" ? "West" : "Finals"} ·
          {" "}({series.higherSeed}) vs ({series.lowerSeed})
        </div>
        {elimination && !complete && (
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{ background: "rgba(244,63,94,0.15)", color: "#F43F5E" }}
          >
            Elimination
          </span>
        )}
        {complete && (
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}
          >
            Advances
          </span>
        )}
      </div>
      <div className="space-y-1.5">
        <TeamRow
          team={series.higherTeam}
          seed={series.higherSeed}
          wins={series.higherWins}
          highlighted={complete ? series.winner === series.higherTeam : series.higherWins >= series.lowerWins}
          eliminated={complete && series.winner !== series.higherTeam}
        />
        <TeamRow
          team={series.lowerTeam}
          seed={series.lowerSeed}
          wins={series.lowerWins}
          highlighted={complete ? series.winner === series.lowerTeam : series.lowerWins > series.higherWins}
          eliminated={complete && series.winner !== series.lowerTeam}
        />
      </div>
      <div className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
        {complete
          ? `${leader} wins ${leaderWins}-${leaderWins === series.higherWins ? series.lowerWins : series.higherWins}`
          : series.summary}
      </div>
      {nextGame && !complete && (
        <div className="mt-1 text-[11px] mono-data" style={{ color: "rgba(255,255,255,0.35)" }}>
          Game {nextGame.gameNumber} · {nextGame.time ?? nextGame.date} {nextGame.tv ? `· ${nextGame.tv}` : ""}
        </div>
      )}
    </div>
  );
}

function TeamRow({
  team,
  seed,
  wins,
  highlighted,
  eliminated,
}: {
  team: string;
  seed: number;
  wins: number;
  highlighted: boolean;
  eliminated: boolean;
}) {
  return (
    <div className="flex items-center justify-between" style={{ opacity: eliminated ? 0.35 : 1 }}>
      <div className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
          style={{
            background: highlighted ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.05)",
            color: highlighted ? "#0EA5E9" : "rgba(255,255,255,0.5)",
          }}
        >
          {seed}
        </span>
        <a
          href={`/team/${team.toLowerCase()}`}
          className={`text-sm font-semibold ${eliminated ? "line-through" : ""} text-white hover:text-sky-400 transition-colors`}
        >
          {team}
        </a>
      </div>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: i < wins ? (highlighted ? "#0EA5E9" : "#10B981") : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
        <span className="mono-data text-xs ml-2 font-bold" style={{ color: highlighted ? "#0EA5E9" : "rgba(255,255,255,0.5)" }}>
          {wins}
        </span>
      </div>
    </div>
  );
}

// ── Projected bracket (fallback) ─────────────────────────────

function MatchupCard({ higher, lower, round }: { higher: BracketTeam; lower: BracketTeam; round: string }) {
  return (
    <div className="glass-card rounded-lg p-3 mb-2" style={{ minWidth: 200 }}>
      <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>{round}</div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold" style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}>
              {higher.seed}
            </span>
            <a href={`/team/${higher.team.toLowerCase()}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
              {higher.team}
import { getTeamColor } from "../lib/teamColors";
import {
  playInGames,
  firstRoundSeries,
  playoffPerformers,
  mvpCandidates,
  eliminationWatch,
  bracketMeta,
  eliminatedTeams,
  type PlayInGame,
  type PlayoffSeries,
  type PlayoffPerformer,
  type MvpCandidate,
  type EliminationWatch,
} from "../lib/playoffBracketData";

// ═══════════════════════════════════════════════════════════
// PLAYOFF BRACKET — Full Playoff Experience
// ═══════════════════════════════════════════════════════════

type TabId = "bracket" | "performers" | "mvp" | "tracker";

// --- Helpers ---

function getStatusColor(urgency: EliminationWatch["urgency"]): string {
  switch (urgency) {
    case "eliminated": return "#F43F5E";
    case "elimination": return "#F59E0B";
    case "trailing": return "#F97316";
    case "leading": return "#10B981";
    case "tied": return "#0EA5E9";
    case "advancing": return "#10B981";
    default: return "rgba(255,255,255,0.5)";
  }
}

function getStatusLabel(urgency: EliminationWatch["urgency"]): string {
  switch (urgency) {
    case "eliminated": return "ELIMINATED";
    case "elimination": return "WIN OR GO HOME";
    case "trailing": return "TRAILING";
    case "leading": return "LEADING";
    case "tied": return "TIED";
    case "advancing": return "ADVANCING";
    default: return "";
  }
}

function getTrendIcon(trend: "up" | "down" | "steady"): string {
  switch (trend) {
    case "up": return "▲";
    case "down": return "▼";
    case "steady": return "—";
  }
}

function getTrendColor(trend: "up" | "down" | "steady"): string {
  switch (trend) {
    case "up": return "#10B981";
    case "down": return "#F43F5E";
    case "steady": return "rgba(255,255,255,0.4)";
  }
}

// --- Header ---

function PlayoffHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "rgba(5,13,26,0.95)", borderColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>HI</div>
            <div>
              <div className="display-heading text-white text-lg leading-none">HOOPS INTEL</div>
              <div className="section-label" style={{ fontSize: "0.6rem", color: "#F59E0B" }}>PLAYOFF MODE</div>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F59E0B" }} />
              <span className="text-xs font-medium" style={{ color: "#F59E0B" }}>{bracketMeta.currentRound}</span>
            </div>
            <a href="/" className="text-xs font-medium" style={{ color: "#0EA5E9" }}>&larr; Back to Today</a>
          </div>
        </div>
      </div>
    </header>
  );
}

// --- Playoff Status Bar ---

function StatusBar() {
  const stats = [
    { label: "Teams Remaining", value: bracketMeta.teamsRemaining.toString(), color: "#10B981" },
    { label: "Eliminated", value: bracketMeta.teamsEliminated.toString(), color: "#F43F5E" },
    { label: "Games Played", value: bracketMeta.gamesPlayed.toString(), color: "#0EA5E9" },
    { label: "Next", value: bracketMeta.nextMilestone, color: "#F59E0B" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card rounded-lg p-3 text-center">
          <div className="mono-data text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// --- Tab Navigation ---

function TabNav({ active, onChange }: { active: TabId; onChange: (t: TabId) => void }) {
  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: "bracket", label: "Bracket", icon: "🏆" },
    { id: "performers", label: "Performers", icon: "🔥" },
    { id: "mvp", label: "MVP Race", icon: "👑" },
    { id: "tracker", label: "Tracker", icon: "📊" },
  ];

  return (
    <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
          style={{
            background: active === tab.id ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.03)",
            color: active === tab.id ? "#0EA5E9" : "rgba(255,255,255,0.5)",
            border: active === tab.id ? "1px solid rgba(14,165,233,0.3)" : "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

// --- Play-In Card ---

function PlayInGameCard({ game }: { game: PlayInGame }) {
  const isLive = game.status === "live";
  const isFinal = game.status === "final";
  const isScheduled = game.status === "scheduled";

  const awayWon = isFinal && game.winner === game.awayTeam;
  const homeWon = isFinal && game.winner === game.homeTeam;

  return (
    <div
      className="glass-card rounded-xl overflow-hidden transition-all"
      style={{
        borderLeft: isLive ? "3px solid #10B981" : isFinal ? "3px solid rgba(255,255,255,0.1)" : "3px solid #F59E0B",
      }}
    >
      {/* Game Header */}
      <div className="flex items-center justify-between px-4 py-2" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center gap-2">
          <span className="section-label text-xs" style={{ color: isLive ? "#10B981" : isFinal ? "rgba(255,255,255,0.4)" : "#F59E0B" }}>
            {game.label}
          </span>
          {game.overtime && (
            <span className="px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: "rgba(244,63,94,0.15)", color: "#F43F5E" }}>
              {game.overtime}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isLive && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            {isFinal ? "FINAL" : isLive ? "LIVE" : game.time} · {game.tv}
          </span>
        </div>
      </div>

      {/* Scores */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{
                background: eliminatedTeams.includes(game.awayTeam) ? "rgba(244,63,94,0.1)" : `${getTeamColor(game.awayTeam)}20`,
                color: eliminatedTeams.includes(game.awayTeam) ? "rgba(255,255,255,0.3)" : getTeamColor(game.awayTeam),
                textDecoration: eliminatedTeams.includes(game.awayTeam) ? "line-through" : "none",
              }}
            >
              {game.awaySeed}
            </div>
            <a
              href={`/team/${game.awayTeam.toLowerCase()}`}
              className="text-sm font-semibold transition-colors"
              style={{
                color: awayWon ? "#fff" : eliminatedTeams.includes(game.awayTeam) ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)",
                textDecoration: eliminatedTeams.includes(game.awayTeam) ? "line-through" : "none",
              }}
            >
              {game.awayTeam}
            </a>
          </div>
          <span className="mono-data text-lg font-bold" style={{ color: awayWon ? "#fff" : "rgba(255,255,255,0.4)" }}>
            {game.awayScore ?? "—"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
              {lower.seed}
            </span>
            <a href={`/team/${lower.team.toLowerCase()}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
              {lower.team}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{
                background: eliminatedTeams.includes(game.homeTeam) ? "rgba(244,63,94,0.1)" : `${getTeamColor(game.homeTeam)}20`,
                color: eliminatedTeams.includes(game.homeTeam) ? "rgba(255,255,255,0.3)" : getTeamColor(game.homeTeam),
                textDecoration: eliminatedTeams.includes(game.homeTeam) ? "line-through" : "none",
              }}
            >
              {game.homeSeed}
            </div>
            <a
              href={`/team/${game.homeTeam.toLowerCase()}`}
              className="text-sm font-semibold transition-colors"
              style={{
                color: homeWon ? "#fff" : eliminatedTeams.includes(game.homeTeam) ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)",
                textDecoration: eliminatedTeams.includes(game.homeTeam) ? "line-through" : "none",
              }}
            >
              {game.homeTeam}
            </a>
          </div>
          <span className="mono-data text-lg font-bold" style={{ color: homeWon ? "#fff" : "rgba(255,255,255,0.4)" }}>
            {game.homeScore ?? "—"}
          </span>
        </div>
      </div>

      {/* Bottom Bar — headline + top performer */}
      <div className="px-4 py-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
        <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{game.headline}</div>
        {game.topPerformer && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs" style={{ color: "#F59E0B" }}>★</span>
            <a href={`/player/${game.topPerformer.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`} className="text-xs font-semibold text-white hover:text-sky-400 transition-colors">
              {game.topPerformer}
            </a>
            <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{game.topPerformerLine}</span>
          </div>
        )}
        {game.eliminated && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-xs">❌</span>
            <span className="text-xs font-semibold" style={{ color: "#F43F5E" }}>{game.eliminated} eliminated</span>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Play-In Tournament Section ---

function PlayInSection() {
  const nights = [1, 2, 3];
  const nightLabels = ["Night 1 — Mon April 14", "Night 2 — Wed April 15", "Night 3 — Fri April 17"];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="section-label" style={{ color: "#F59E0B" }}>PLAY-IN TOURNAMENT</div>
        {!bracketMeta.playInComplete && (
          <span className="px-2 py-0.5 rounded-full text-xs font-bold animate-pulse" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
            LIVE TONIGHT
          </span>
        )}
      </div>
      <div className="space-y-6">
        {nights.map((night, ni) => {
          const games = playInGames.filter((g) => g.night === night);
          if (games.length === 0) return null;
          const isTonight = games.some((g) => g.status === "scheduled" || g.status === "live");
          return (
            <div key={night}>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold" style={{ color: isTonight ? "#F59E0B" : "rgba(255,255,255,0.5)" }}>
                  {nightLabels[ni]}
                </h3>
                {isTonight && (
                  <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
                    TONIGHT
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {games.map((game) => (
                  <PlayInGameCard key={game.gameId} game={game} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectedConferenceBracket({ title, standings }: { title: string; standings: any[] }) {
  const teams = getSeededTeams(standings);
  const top6 = teams.slice(0, 6);
  const playIn = teams.slice(6, 10);
  const matchups = [
    { higher: teams[0], lower: teams[7] ?? teams[0], round: "First Round" },
    { higher: teams[1], lower: teams[6] ?? teams[1], round: "First Round" },
    { higher: teams[2], lower: teams[5] ?? teams[2], round: "First Round" },
    { higher: teams[3], lower: teams[4] ?? teams[3], round: "First Round" },
  ];
  return (
    <div>
      <div className="section-label mb-3" style={{ color: "#0EA5E9" }}>{title}</div>
      <div className="mb-4">
        <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>CURRENT SEEDING</div>
        <div className="grid grid-cols-2 gap-1">
          {top6.map((t) => (
            <div key={t.team} className="flex items-center gap-2 px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9", width: 16 }}>{t.seed}</span>
              <a href={`/team/${t.team.toLowerCase()}`} className="text-xs text-white hover:text-sky-400">{t.team}</a>
              <span className="mono-data text-xs ml-auto" style={{ color: "rgba(255,255,255,0.4)" }}>{t.record}</span>
              <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>.{(t.pct * 1000).toFixed(0).padStart(3, "0")}</span>
// --- Series Card ---

function SeriesCard({ series }: { series: PlayoffSeries }) {
  const [expanded, setExpanded] = useState(false);
  const isTBD = series.lowerTeam === "TBD" || series.higherTeam === "TBD";
  const isActive = series.status === "active";
  const totalGames = series.higherWins + series.lowerWins;

  return (
    <div
      className="glass-card rounded-xl overflow-hidden cursor-pointer transition-all"
      onClick={() => !isTBD && setExpanded(!expanded)}
      style={{
        borderLeft: isActive ? "3px solid #10B981" : "3px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Series header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <span className="section-label text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            ({series.higherSeed}) vs ({series.lowerSeed})
          </span>
          <div className="flex items-center gap-2">
            {series.seriesOdds && (
              <span className="mono-data text-xs px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}>
                {series.seriesOdds}
              </span>
            )}
            {!isTBD && (
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{expanded ? "▲" : "▼"}</span>
            )}
          </div>
        </div>

        {/* Teams and series score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: `${getTeamColor(series.higherTeam)}20`, color: getTeamColor(series.higherTeam) }}
              >
                {series.higherSeed}
              </div>
              <a href={`/team/${series.higherTeam.toLowerCase()}`} className="text-base font-bold text-white hover:text-sky-400 transition-colors">
                {series.higherTeam}
              </a>
            </div>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-sm flex items-center justify-center"
                  style={{
                    background: i < series.higherWins ? getTeamColor(series.higherTeam) : "rgba(255,255,255,0.06)",
                  }}
                >
                  {i < series.higherWins && (
                    <span className="text-white text-xs font-bold">W</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: isTBD ? "rgba(255,255,255,0.05)" : `${getTeamColor(series.lowerTeam)}20`,
                  color: isTBD ? "rgba(255,255,255,0.3)" : getTeamColor(series.lowerTeam),
                }}
              >
                {series.lowerSeed}
              </div>
              {isTBD ? (
                <span className="text-base font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>TBD (Tonight)</span>
              ) : (
                <a href={`/team/${series.lowerTeam.toLowerCase()}`} className="text-base font-bold text-white hover:text-sky-400 transition-colors">
                  {series.lowerTeam}
                </a>
              )}
            </div>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-sm flex items-center justify-center"
                  style={{
                    background: i < series.lowerWins ? (isTBD ? "rgba(255,255,255,0.1)" : getTeamColor(series.lowerTeam)) : "rgba(255,255,255,0.06)",
                  }}
                >
                  {i < series.lowerWins && (
                    <span className="text-white text-xs font-bold">W</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <PlayInCard teams={playIn} />
      </div>
      <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>PROJECTED FIRST ROUND</div>
      {matchups.map((m, i) => (
        <MatchupCard key={i} higher={m.higher} lower={m.lower} round={`(${m.higher.seed}) vs (${m.lower.seed})`} />
      ))}

        {/* Series status */}
        {totalGames > 0 && (
          <div className="mt-2 text-center">
            <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9" }}>
              {series.higherWins === 4
                ? `${series.higherTeam} wins ${series.higherWins}-${series.lowerWins}`
                : series.lowerWins === 4
                ? `${series.lowerTeam} wins ${series.lowerWins}-${series.higherWins}`
                : series.higherWins === series.lowerWins
                ? `Series tied ${series.higherWins}-${series.lowerWins}`
                : series.higherWins > series.lowerWins
                ? `${series.higherTeam} leads ${series.higherWins}-${series.lowerWins}`
                : `${series.lowerTeam} leads ${series.lowerWins}-${series.higherWins}`}
            </span>
          </div>
        )}
      </div>

      {/* Key matchup */}
      {series.keyMatchup && (
        <div className="px-4 py-2 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          <div className="flex items-center gap-2">
            <span className="text-xs">⚔️</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{series.keyMatchup}</span>
          </div>
        </div>
      )}

      {/* Expanded: narrative + games */}
      {expanded && (
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {series.narrative && (
            <div className="px-4 py-3">
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{series.narrative}</p>
            </div>
          )}
          {series.games.length > 0 && (
            <div className="px-4 pb-3">
              <div className="section-label text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>SCHEDULE</div>
              <div className="space-y-1">
                {series.games.map((game) => (
                  <div
                    key={game.gameNumber}
                    className="flex items-center justify-between px-3 py-2 rounded"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9" }}>G{game.gameNumber}</span>
                      <span className="text-xs text-white">{game.awayTeam} @ {game.homeTeam}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {game.status === "final" ? (
                        <span className="mono-data text-xs font-bold text-white">
                          {game.awayScore} - {game.homeScore}
                        </span>
                      ) : (
                        <>
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{game.date}</span>
                          {game.time && <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{game.time}</span>}
                          {game.tv && <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}>{game.tv}</span>}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Live conference bracket ──────────────────────────────────

function LiveConferenceBracket({ title, conference }: { title: string; conference: "east" | "west" }) {
  const series = playoffSeries
    .filter((s) => s.conference === conference)
    .sort((a, b) => a.higherSeed - b.higherSeed);

  return (
    <div>
      <div className="section-label mb-3" style={{ color: "#0EA5E9" }}>{title}</div>
      <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
        {series.filter((s) => s.round === "first-round").length > 0
          ? "FIRST ROUND"
          : "PLAYOFF SERIES"}
      </div>
      <div className="space-y-2">
        {series.map((s) => (
          <SeriesCard key={s.seriesId} series={s} />
        ))}
      </div>
    </div>
  );
}

export default function PlayoffBracket() {
  const live = playoffSeries.length > 0;

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <header className="sticky top-0 z-50 border-b" style={{ background: "rgba(5,13,26,0.95)", borderColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}>
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>HI</div>
              <div>
                <div className="display-heading text-white text-lg leading-none">HOOPS INTEL</div>
                <div className="section-label" style={{ fontSize: "0.6rem" }}>PLAYOFF BRACKET</div>
// --- First Round Section ---

function FirstRoundSection() {
  const eastSeries = firstRoundSeries.filter((s) => s.conference === "east");
  const westSeries = firstRoundSeries.filter((s) => s.conference === "west");

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="section-label" style={{ color: "#0EA5E9" }}>FIRST ROUND</div>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          Starts {bracketMeta.firstRoundStarts} · Best of 7
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* East */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full" style={{ background: "#0EA5E9" }} />
            <h3 className="text-sm font-bold text-white">EASTERN CONFERENCE</h3>
          </div>
          <div className="space-y-3">
            {eastSeries.map((series) => (
              <SeriesCard key={series.seriesId} series={series} />
            ))}
          </div>
        </div>

        {/* West */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full" style={{ background: "#F59E0B" }} />
            <h3 className="text-sm font-bold text-white">WESTERN CONFERENCE</h3>
          </div>
          <div className="space-y-3">
            {westSeries.map((series) => (
              <SeriesCard key={series.seriesId} series={series} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Visual Bracket ---

function VisualBracket() {
  const eastSeries = firstRoundSeries.filter((s) => s.conference === "east");
  const westSeries = firstRoundSeries.filter((s) => s.conference === "west");

  function BracketSlot({ team, seed, wins, isWinner, isTBD }: { team: string; seed: number; wins: number; isWinner: boolean; isTBD: boolean }) {
    return (
      <div
        className="flex items-center justify-between px-3 py-2 rounded transition-all"
        style={{
          background: isWinner ? "rgba(16,185,129,0.1)" : isTBD ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
          border: isWinner ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(255,255,255,0.06)",
          minWidth: 160,
        }}
      >
        <div className="flex items-center gap-2">
          <span className="mono-data text-xs font-bold" style={{ color: isTBD ? "rgba(255,255,255,0.2)" : getTeamColor(team), width: 16 }}>{seed}</span>
          {isTBD ? (
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>TBD</span>
          ) : (
            <a href={`/team/${team.toLowerCase()}`} className="text-xs font-bold text-white hover:text-sky-400 transition-colors">{team}</a>
          )}
        </div>
        <span className="mono-data text-xs font-bold" style={{ color: isWinner ? "#10B981" : "rgba(255,255,255,0.3)" }}>{wins}</span>
      </div>
    );
  }

  function BracketMatchup({ series }: { series: PlayoffSeries }) {
    const higherWins = series.higherWins === 4;
    const lowerWins = series.lowerWins === 4;
    const isTBDLower = series.lowerTeam === "TBD";

    return (
      <div className="mb-4">
        <BracketSlot team={series.higherTeam} seed={series.higherSeed} wins={series.higherWins} isWinner={higherWins} isTBD={false} />
        <div className="w-px h-1 ml-4" style={{ background: "rgba(255,255,255,0.1)" }} />
        <BracketSlot team={series.lowerTeam} seed={series.lowerSeed} wins={series.lowerWins} isWinner={lowerWins} isTBD={isTBDLower} />
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="section-label mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>BRACKET VIEW</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* East */}
        <div>
          <div className="text-sm font-bold text-center mb-4" style={{ color: "#0EA5E9" }}>EAST</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div>
              <div className="text-xs text-center mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>First Round</div>
              {eastSeries.map((s) => (
                <BracketMatchup key={s.seriesId} series={s} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Conf Semis</div>
              <div className="glass-card rounded-lg p-4 text-center w-full" style={{ borderStyle: "dashed" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>Winners advance →</span>
              </div>
              <div className="h-8" />
              <div className="glass-card rounded-lg p-4 text-center w-full" style={{ borderStyle: "dashed" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>Winners advance →</span>
              </div>
            </div>
          </div>
        </div>

      <div className="container py-8">
        <div className="section-label mb-2">2025-26 NBA PLAYOFFS</div>
        <h1 className="display-heading text-white text-3xl mb-2">
          {live ? "Live Playoff Bracket" : "Projected Playoff Bracket"}
        </h1>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          {live
            ? "Series state updates with each game. Red accents mark elimination games; green marks series clinchers."
            : "Based on current standings. Seeds 7-10 enter the Play-In Tournament. Updated daily."}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {live ? (
            <>
              <LiveConferenceBracket title="EASTERN CONFERENCE" conference="east" />
              <LiveConferenceBracket title="WESTERN CONFERENCE" conference="west" />
            </>
          ) : (
            <>
              <ProjectedConferenceBracket title="EASTERN CONFERENCE" standings={eastStandings} />
              <ProjectedConferenceBracket title="WESTERN CONFERENCE" standings={westStandings} />
            </>
          )}
        {/* West */}
        <div>
          <div className="text-sm font-bold text-center mb-4" style={{ color: "#F59E0B" }}>WEST</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div>
              <div className="text-xs text-center mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>First Round</div>
              {westSeries.map((s) => (
                <BracketMatchup key={s.seriesId} series={s} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Conf Semis</div>
              <div className="glass-card rounded-lg p-4 text-center w-full" style={{ borderStyle: "dashed" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>Winners advance →</span>
              </div>
              <div className="h-8" />
              <div className="glass-card rounded-lg p-4 text-center w-full" style={{ borderStyle: "dashed" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>Winners advance →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NBA Finals */}
      <div className="mt-6">
        <div
          className="glass-card rounded-xl p-5 text-center playoff-finals-glow"
          style={{ borderTop: "3px solid #F59E0B" }}
        >
          <div className="section-label mb-1" style={{ color: "#F59E0B" }}>🏆 NBA FINALS</div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            East Champion vs West Champion · June 2026
          </div>
          <div className="flex items-center justify-center gap-8 mt-3">
            <div className="text-center">
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>East</div>
              <div className="display-heading text-white text-lg">TBD</div>
            </div>
            <div className="text-xl font-bold" style={{ color: "rgba(255,255,255,0.15)" }}>vs</div>
            <div className="text-center">
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>West</div>
              <div className="display-heading text-white text-lg">TBD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

        {!live && (
          <div className="mt-8">
            <div className="glass-card rounded-xl p-6 text-center" style={{ borderTop: "3px solid #0EA5E9" }}>
              <div className="section-label mb-2">PROJECTED NBA FINALS</div>
              <div className="flex items-center justify-center gap-6">
                <div>
                  <a href={`/team/${getSeededTeams(eastStandings)[0]?.team.toLowerCase()}`} className="display-heading text-white text-2xl hover:text-sky-400 transition-colors">
                    {getSeededTeams(eastStandings)[0]?.team}
                  </a>
                  <div className="mono-data text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    East #1 · {getSeededTeams(eastStandings)[0]?.record}
                  </div>
                </div>
                <div className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.2)" }}>vs</div>
                <div>
                  <a href={`/team/${getSeededTeams(westStandings)[0]?.team.toLowerCase()}`} className="display-heading text-white text-2xl hover:text-sky-400 transition-colors">
                    {getSeededTeams(westStandings)[0]?.team}
                  </a>
                  <div className="mono-data text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    West #1 · {getSeededTeams(westStandings)[0]?.record}
                  </div>
// --- Bracket Tab ---

function BracketTab() {
  return (
    <div>
      <PlayInSection />
      <FirstRoundSection />
      <VisualBracket />
    </div>
  );
}

// --- Performers Tab ---

function PerformersTab() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="section-label" style={{ color: "#F43F5E" }}>PLAYOFF PERFORMERS</div>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Ranked by postseason impact</span>
      </div>
      <div className="space-y-3">
        {playoffPerformers.map((p) => (
          <div key={p.rank} className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-start gap-4 p-4">
              {/* Rank */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: p.rank <= 3 ? "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(244,63,94,0.2))" : "rgba(255,255,255,0.04)",
                  border: p.rank <= 3 ? "1px solid rgba(245,158,11,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="mono-data text-sm font-bold" style={{ color: p.rank <= 3 ? "#F59E0B" : "rgba(255,255,255,0.5)" }}>
                  {p.rank}
                </span>
              </div>

              {/* Player info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <a href={`/player/${p.player.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`} className="text-sm font-bold text-white hover:text-sky-400 transition-colors">
                    {p.player}
                  </a>
                  <a href={`/team/${p.team.toLowerCase()}`} className="text-xs px-1.5 py-0.5 rounded" style={{ background: `${getTeamColor(p.team)}15`, color: getTeamColor(p.team) }}>
                    {p.team}
                  </a>
                  <span className="text-xs" style={{ color: getTrendColor(p.trend) }}>{getTrendIcon(p.trend)}</span>
                </div>
                <div className="mono-data text-xs mb-1.5" style={{ color: "#0EA5E9" }}>{p.statLine}</div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{p.highlight}</p>
              </div>

              {/* Stats sidebar */}
              <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{p.ppg} PPG</div>
                <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{p.rpg} RPG</div>
                <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{p.apg} APG</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MVP Race Tab ---

function MvpTab() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div className="section-label" style={{ color: "#F59E0B" }}>PLAYOFF MVP RACE</div>
      </div>
      <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        Pre-playoff odds — rankings will update as the postseason unfolds
      </p>
      <div className="space-y-3">
        {mvpCandidates.map((c) => (
          <div key={c.rank} className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-start gap-4 p-4">
              {/* Crown for #1 */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: c.rank === 1 ? "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))" : "rgba(255,255,255,0.03)",
                  border: c.rank === 1 ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-lg">{c.rank === 1 ? "👑" : c.rank === 2 ? "🥈" : c.rank === 3 ? "🥉" : `#${c.rank}`}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <a href={`/player/${c.player.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`} className="text-base font-bold text-white hover:text-sky-400 transition-colors">
                    {c.player}
                  </a>
                  <a href={`/team/${c.team.toLowerCase()}`} className="text-xs px-1.5 py-0.5 rounded" style={{ background: `${getTeamColor(c.team)}15`, color: getTeamColor(c.team) }}>
                    {c.team}
                  </a>
                  <span className="text-xs" style={{ color: getTrendColor(c.trend) }}>{getTrendIcon(c.trend)}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <span className="mono-data text-sm font-bold" style={{ color: "#10B981" }}>{c.odds}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c.record}</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{c.signatureMoment}</p>
              </div>
            </div>
          </div>
        )}
        ))}
      </div>
    </div>
  );
}

// --- Elimination Tracker Tab ---

function TrackerTab() {
  const eliminated = eliminationWatch.filter((e) => e.urgency === "eliminated");
  const atRisk = eliminationWatch.filter((e) => e.urgency === "elimination");
  const others = eliminationWatch.filter((e) => e.urgency !== "eliminated" && e.urgency !== "elimination");

  function TrackerCard({ item }: { item: EliminationWatch }) {
    const color = getStatusColor(item.urgency);
    const label = getStatusLabel(item.urgency);
    const isEliminated = item.urgency === "eliminated";

    return (
      <div
        className="glass-card rounded-lg p-3 transition-all"
        style={{
          borderLeft: `3px solid ${color}`,
          opacity: isEliminated ? 0.6 : 1,
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <a
              href={`/team/${item.team.toLowerCase()}`}
              className="text-sm font-bold hover:text-sky-400 transition-colors"
              style={{ color: isEliminated ? "rgba(255,255,255,0.4)" : "#fff", textDecoration: isEliminated ? "line-through" : "none" }}
            >
              {item.team}
            </a>
            <span className="text-xs px-1.5 py-0.5 rounded font-bold" style={{ background: `${color}15`, color }}>
              {label}
            </span>
          </div>
        </div>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.situation}</div>
        <div className="mono-data text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{item.gameInfo}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="section-label mb-4" style={{ color: "#F43F5E" }}>ELIMINATION TRACKER</div>

      {/* Tonight's elimination games */}
      {atRisk.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F59E0B" }} />
            <h3 className="text-sm font-bold" style={{ color: "#F59E0B" }}>Tonight's Elimination Games</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {atRisk.map((item) => (
              <TrackerCard key={`${item.team}-${item.opponent}`} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Already eliminated */}
      {eliminated.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-3" style={{ color: "#F43F5E" }}>Eliminated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {eliminated.map((item) => (
              <TrackerCard key={`${item.team}-${item.opponent}`} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Series status */}
      {others.length > 0 && (
        <div>
          <h3 className="text-sm font-bold mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>Series Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {others.map((item) => (
              <TrackerCard key={`${item.team}-${item.opponent}`} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Quick reference - all first round matchups */}
      <div className="mt-8">
        <div className="section-label mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>FIRST ROUND SCHEDULE</div>
        <div className="glass-card rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                <th className="text-left px-4 py-2 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>Series</th>
                <th className="text-center px-4 py-2 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>Score</th>
                <th className="text-right px-4 py-2 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>Game 1</th>
              </tr>
            </thead>
            <tbody>
              {firstRoundSeries.map((s) => (
                <tr key={s.seriesId} className="border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  <td className="px-4 py-2">
                    <span className="text-xs font-semibold text-white">
                      ({s.higherSeed}) {s.higherTeam} vs ({s.lowerSeed}) {s.lowerTeam}
                    </span>
                    <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {s.conference === "east" ? "East" : "West"}
                    </span>
                  </td>
                  <td className="text-center px-4 py-2">
                    <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9" }}>
                      {s.higherWins}-{s.lowerWins}
                    </span>
                  </td>
                  <td className="text-right px-4 py-2">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {s.games[0]?.date ?? "TBD"}{s.games[0]?.tv ? ` · ${s.games[0].tv}` : ""}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════

export default function PlayoffBracket() {
  const [activeTab, setActiveTab] = useState<TabId>("bracket");

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <PlayoffHeader />

      <div className="container py-6">
        {/* Page title */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏆</span>
            <div>
              <h1 className="display-heading text-white text-2xl sm:text-3xl">2026 NBA PLAYOFFS</h1>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                Updated {bracketMeta.lastUpdated} · {bracketMeta.currentRound}
              </p>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <StatusBar />

        {/* Tabs */}
        <TabNav active={activeTab} onChange={setActiveTab} />

        {/* Tab content */}
        {activeTab === "bracket" && <BracketTab />}
        {activeTab === "performers" && <PerformersTab />}
        {activeTab === "mvp" && <MvpTab />}
        {activeTab === "tracker" && <TrackerTab />}
      </div>

      {/* Footer */}
      <footer className="border-t py-6 mt-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container flex items-center justify-between">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Hoops Intel · Playoff Mode · {bracketMeta.lastUpdated}
          </span>
          <a href="/" className="text-xs font-medium" style={{ color: "#0EA5E9" }}>
            &larr; Back to Today's Edition
          </a>
        </div>
      </footer>
    </div>
  );
}
