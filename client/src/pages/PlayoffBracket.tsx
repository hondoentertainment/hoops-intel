import { eastStandings, westStandings } from "../lib/pulseData";

// ═══════════════════════════════════════════════════════════
// PLAYOFF BRACKET — Projected playoff matchups based on standings
// ═══════════════════════════════════════════════════════════

interface BracketTeam {
  seed: number;
  team: string;
  record: string;
  pct: number;
}

function getSeededTeams(standings: any[]): BracketTeam[] {
  return standings
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

function MatchupCard({ higher, lower, round }: { higher: BracketTeam; lower: BracketTeam; round: string }) {
  return (
    <div
      className="glass-card rounded-lg p-3 mb-2"
      style={{ minWidth: 200 }}
    >
      <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>{round}</div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
              style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}
            >
              {higher.seed}
            </span>
            <a href={`/team/${higher.team}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
              {higher.team}
            </a>
          </div>
          <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{higher.record}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
            >
              {lower.seed}
            </span>
            <a href={`/team/${lower.team}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
              {lower.team}
            </a>
          </div>
          <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{lower.record}</span>
        </div>
      </div>
    </div>
  );
}

function PlayInCard({ teams }: { teams: BracketTeam[] }) {
  const [t7, t8, t9, t10] = teams;
  if (!t7 || !t8 || !t9 || !t10) return null;

  return (
    <div className="glass-card rounded-lg p-4" style={{ borderLeft: "3px solid rgba(251,191,36,0.5)" }}>
      <div className="section-label text-amber-400 text-xs mb-3">PLAY-IN TOURNAMENT</div>
      <div className="space-y-2">
        <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>7/8 Game (Winner = 7 seed)</div>
        <div className="flex items-center justify-between px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="text-xs text-white">(7) {t7.team} <span className="mono-data" style={{ color: "rgba(255,255,255,0.4)" }}>{t7.record}</span></span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>vs</span>
          <span className="text-xs text-white">(8) {t8.team} <span className="mono-data" style={{ color: "rgba(255,255,255,0.4)" }}>{t8.record}</span></span>
        </div>
        <div className="text-xs mb-1 mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>9/10 Game (Loser eliminated)</div>
        <div className="flex items-center justify-between px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="text-xs text-white">(9) {t9.team} <span className="mono-data" style={{ color: "rgba(255,255,255,0.4)" }}>{t9.record}</span></span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>vs</span>
          <span className="text-xs text-white">(10) {t10.team} <span className="mono-data" style={{ color: "rgba(255,255,255,0.4)" }}>{t10.record}</span></span>
        </div>
      </div>
    </div>
  );
}

function ConferenceBracket({ title, standings }: { title: string; standings: any[] }) {
  const teams = getSeededTeams(standings);
  const top6 = teams.slice(0, 6);
  const playIn = teams.slice(6, 10);

  // First round projected matchups: 1v8, 2v7, 3v6, 4v5
  const matchups = [
    { higher: teams[0], lower: teams[7] ?? teams[0], round: "First Round" },
    { higher: teams[1], lower: teams[6] ?? teams[1], round: "First Round" },
    { higher: teams[2], lower: teams[5] ?? teams[2], round: "First Round" },
    { higher: teams[3], lower: teams[4] ?? teams[3], round: "First Round" },
  ];

  return (
    <div>
      <div className="section-label mb-3" style={{ color: "#0EA5E9" }}>{title}</div>

      {/* Seeding */}
      <div className="mb-4">
        <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>CURRENT SEEDING</div>
        <div className="grid grid-cols-2 gap-1">
          {top6.map((t) => (
            <div key={t.team} className="flex items-center gap-2 px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9", width: 16 }}>{t.seed}</span>
              <a href={`/team/${t.team}`} className="text-xs text-white hover:text-sky-400">{t.team}</a>
              <span className="mono-data text-xs ml-auto" style={{ color: "rgba(255,255,255,0.4)" }}>{t.record}</span>
              <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>.{(t.pct * 1000).toFixed(0).padStart(3, "0")}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Play-In */}
      <div className="mb-4">
        <PlayInCard teams={playIn} />
      </div>

      {/* Projected Bracket */}
      <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>PROJECTED FIRST ROUND</div>
      {matchups.map((m, i) => (
        <MatchupCard key={i} higher={m.higher} lower={m.lower} round={`(${m.higher.seed}) vs (${m.lower.seed})`} />
      ))}
    </div>
  );
}

export default function PlayoffBracket() {
  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
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
                <div className="section-label" style={{ fontSize: "0.6rem" }}>PLAYOFF BRACKET</div>
              </div>
            </a>
            <a href="/" className="text-xs font-medium" style={{ color: "#0EA5E9" }}>&larr; Back to Today</a>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="section-label mb-2">2025-26 NBA PLAYOFFS</div>
        <h1 className="display-heading text-white text-3xl mb-2">Projected Playoff Bracket</h1>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          Based on current standings. Seeds 7-10 enter the Play-In Tournament. Updated daily.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConferenceBracket title="EASTERN CONFERENCE" standings={eastStandings} />
          <ConferenceBracket title="WESTERN CONFERENCE" standings={westStandings} />
        </div>

        {/* Finals projection */}
        <div className="mt-8">
          <div
            className="glass-card rounded-xl p-6 text-center"
            style={{ borderTop: "3px solid #0EA5E9" }}
          >
            <div className="section-label mb-2">PROJECTED NBA FINALS</div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <a href={`/team/${getSeededTeams(eastStandings)[0]?.team}`} className="display-heading text-white text-2xl hover:text-sky-400 transition-colors">
                  {getSeededTeams(eastStandings)[0]?.team}
                </a>
                <div className="mono-data text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  East #1 · {getSeededTeams(eastStandings)[0]?.record}
                </div>
              </div>
              <div className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.2)" }}>vs</div>
              <div>
                <a href={`/team/${getSeededTeams(westStandings)[0]?.team}`} className="display-heading text-white text-2xl hover:text-sky-400 transition-colors">
                  {getSeededTeams(westStandings)[0]?.team}
                </a>
                <div className="mono-data text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  West #1 · {getSeededTeams(westStandings)[0]?.record}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
