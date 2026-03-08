import { useParams } from "wouter";
import { archiveEditions } from "../lib/archiveData";
import {
  eastStandings,
  westStandings,
  gameResults,
  gamePreviews,
  injuryUpdates,
  pulseIndex,
  pulseEdition,
} from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";
import { getAllTeams, slugify } from "../lib/searchUtils";

const TEAM_NAMES: Record<string, string> = {
  ATL: "Atlanta Hawks", BOS: "Boston Celtics", BRK: "Brooklyn Nets",
  CHA: "Charlotte Hornets", CHI: "Chicago Bulls", CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks", DEN: "Denver Nuggets", DET: "Detroit Pistons",
  GSW: "Golden State Warriors", HOU: "Houston Rockets", IND: "Indiana Pacers",
  LAC: "Los Angeles Clippers", LAL: "Los Angeles Lakers", MEM: "Memphis Grizzlies",
  MIA: "Miami Heat", MIL: "Milwaukee Bucks", MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans", NYK: "New York Knicks", OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic", PHI: "Philadelphia 76ers", PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers", SAC: "Sacramento Kings", SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors", UTA: "Utah Jazz", WAS: "Washington Wizards",
};

export default function Team() {
  const params = useParams<{ abbr: string }>();
  const abbr = (params.abbr || "").toUpperCase();
  const fullName = TEAM_NAMES[abbr];

  if (!fullName) {
    return (
      <div className="min-h-screen" style={{ background: "#050D1A" }}>
        <PageHeader abbr="" />
        <div className="container py-20 text-center">
          <h1 className="display-heading text-white text-2xl mb-4">Team Not Found</h1>
          <a href="/" className="text-sky-400 underline">Back to Hoops Intel</a>
        </div>
      </div>
    );
  }

  const teamColor = getTeamColor(abbr);
  const standing = [...eastStandings, ...westStandings].find((s: any) => s.team === abbr);
  const teamGames = gameResults.filter(
    (g: any) => g.homeTeam === abbr || g.awayTeam === abbr
  );
  const teamPreviews = gamePreviews.filter(
    (g: any) => g.homeTeam === abbr || g.awayTeam === abbr
  );
  const teamInjuries = injuryUpdates.filter((inj: any) => inj.team === abbr);
  const teamPlayers = pulseIndex.filter((p: any) => p.team === abbr);
  const teamEditions = archiveEditions.filter(
    (ed: any) => (ed.teams || []).includes(abbr)
  );

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <PageHeader abbr={abbr} />
      <div className="container py-8">
        {/* Team Header */}
        <div
          className="glass-card rounded-lg p-6 mb-6"
          style={{ borderLeft: `4px solid ${teamColor}` }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="section-label mb-1">TEAM PROFILE</div>
              <h1 className="display-heading text-white text-3xl mb-1">{fullName}</h1>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {standing?.conf === "east" ? "Eastern" : "Western"} Conference
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
                  <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    L10: {standing.last10}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

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
                    <div key={g.gameId} className="glass-card rounded-lg p-4 mb-3">
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
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
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
                {teamPreviews.map((p: any, i: number) => (
                  <div key={i} className="glass-card rounded-lg p-4 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">
                        {p.awayTeam} @ {p.homeTeam}
                      </span>
                      <span className="text-sm text-white">{p.time}</span>
                    </div>
                    <div className="mono-data text-xs mb-2" style={{ color: "#0EA5E9" }}>
                      {p.spread} · O/U {p.overUnder} · {p.tv}
                    </div>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {p.storyline}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Edition History */}
            <div>
              <div className="section-label mb-3">
                ARCHIVE ({teamEditions.length} edition{teamEditions.length !== 1 ? "s" : ""})
              </div>
              <div className="space-y-3">
                {teamEditions.slice(0, 10).map((ed: any) => (
                  <div key={ed.id} className="glass-card rounded-lg p-4">
                    <div className="section-label mb-1">{ed.displayDate}</div>
                    <h3 className="text-sm font-semibold text-white mb-1">{ed.headline}</h3>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {ed.subheadline}
                    </p>
                  </div>
                ))}
                {teamEditions.length > 10 && (
                  <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
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
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-3">PULSE INDEX</div>
                <div className="space-y-3">
                  {teamPlayers.map((p: any) => (
                    <a
                      key={p.rank}
                      href={`/player/${slugify(p.player)}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-center gap-2">
                        <span className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>
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
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-3">INJURY REPORT</div>
                <div className="space-y-3">
                  {teamInjuries.map((inj: any, i: number) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1">
                        <a
                          href={`/player/${slugify(inj.player)}`}
                          className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
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
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {inj.injury}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standing Details */}
            {standing && (
              <div className="glass-card rounded-lg p-4">
                <div className="section-label mb-3">STANDINGS</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Conference</span>
                    <span className="text-white font-semibold">
                      {standing.conf === "east" ? "Eastern" : "Western"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Seed</span>
                    <span className="text-white font-semibold">#{standing.rank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Record</span>
                    <span className="text-white font-semibold">
                      {standing.wins}-{standing.losses} ({standing.pct})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Games Back</span>
                    <span className="text-white font-semibold">{standing.gb}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Streak</span>
                    <span
                      style={{
                        color: standing.streak.startsWith("W") ? "#10B981" : "#F43F5E",
                      }}
                    >
                      {standing.streak}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Last 10</span>
                    <span className="text-white font-semibold">{standing.last10}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Playoff Status</span>
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
      </div>
    </div>
  );
}

function PageHeader({ abbr }: { abbr: string }) {
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
              <div className="section-label" style={{ fontSize: "0.6rem" }}>
                {abbr ? TEAM_NAMES[abbr] || "TEAM" : "TEAM"}
              </div>
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

// Need to re-export for PageHeader
const TEAM_NAMES_EXPORT = {
  ATL: "Atlanta Hawks", BOS: "Boston Celtics", BRK: "Brooklyn Nets",
  CHA: "Charlotte Hornets", CHI: "Chicago Bulls", CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks", DEN: "Denver Nuggets", DET: "Detroit Pistons",
  GSW: "Golden State Warriors", HOU: "Houston Rockets", IND: "Indiana Pacers",
  LAC: "Los Angeles Clippers", LAL: "Los Angeles Lakers", MEM: "Memphis Grizzlies",
  MIA: "Miami Heat", MIL: "Milwaukee Bucks", MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans", NYK: "New York Knicks", OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic", PHI: "Philadelphia 76ers", PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers", SAC: "Sacramento Kings", SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors", UTA: "Utah Jazz", WAS: "Washington Wizards",
};
