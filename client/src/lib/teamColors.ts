// NBA Team Colors + identity metadata
// Primary brand colors, full names, and ESPN logo slugs for all 30 NBA teams.

export const teamColors: Record<string, string> = {ATL:"#E03A3E",BOS:"#007A33",BRK:"#FFFFFF",CHA:"#1D1160",CHI:"#CE1141",CLE:"#860038",DAL:"#00538C",DEN:"#0E2240",DET:"#C8102E",GSW:"#1D428A",HOU:"#CE1141",IND:"#002D62",LAC:"#C8102E",LAL:"#552583",MEM:"#5D76A9",MIA:"#98002E",MIL:"#00471B",MIN:"#0C2340",NOP:"#0C2340",NYK:"#006BB6",OKC:"#007AC1",ORL:"#0077C0",PHI:"#006BB6",PHX:"#1D1160",POR:"#E03A3E",SAC:"#5A2D81",SAS:"#C4CED4",TOR:"#CE1141",UTA:"#002B5C",WAS:"#002B5C"};

// ESPN and other feeds use a few different abbreviations than our NBA-standard set.
// Normalize them so logo + color lookups never miss.
const TEAM_ALIASES: Record<string, string> = {
  BKN: "BRK", BK: "BRK",
  GS: "GSW",
  NO: "NOP", NOLA: "NOP",
  NY: "NYK",
  SA: "SAS",
  UTAH: "UTA",
  WSH: "WAS",
  PHO: "PHX",
  CHO: "CHA",
};

export function normalizeTeam(team: string): string {
  const up = (team || "").trim().toUpperCase();
  return TEAM_ALIASES[up] ?? up;
}

export function getTeamColor(team: string): string {
  return teamColors[normalizeTeam(team)] || "#0EA5E9";
}

// ESPN logo CDN slugs (differ from our abbreviations for several teams).
const ESPN_LOGO_SLUGS: Record<string, string> = {
  ATL: "atl", BOS: "bos", BRK: "bkn", CHA: "cha", CHI: "chi", CLE: "cle",
  DAL: "dal", DEN: "den", DET: "det", GSW: "gs", HOU: "hou", IND: "ind",
  LAC: "lac", LAL: "lal", MEM: "mem", MIA: "mia", MIL: "mil", MIN: "min",
  NOP: "no", NYK: "ny", OKC: "okc", ORL: "orl", PHI: "phi", PHX: "phx",
  POR: "por", SAC: "sac", SAS: "sa", TOR: "tor", UTA: "utah", WAS: "wsh",
};

export function teamLogoUrl(team: string): string | null {
  const slug = ESPN_LOGO_SLUGS[normalizeTeam(team)];
  return slug ? `https://a.espncdn.com/i/teamlogos/nba/500/${slug}.png` : null;
}

const TEAM_NAMES: Record<string, string> = {
  ATL: "Atlanta Hawks", BOS: "Boston Celtics", BRK: "Brooklyn Nets",
  CHA: "Charlotte Hornets", CHI: "Chicago Bulls", CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks", DEN: "Denver Nuggets", DET: "Detroit Pistons",
  GSW: "Golden State Warriors", HOU: "Houston Rockets", IND: "Indiana Pacers",
  LAC: "LA Clippers", LAL: "Los Angeles Lakers", MEM: "Memphis Grizzlies",
  MIA: "Miami Heat", MIL: "Milwaukee Bucks", MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans", NYK: "New York Knicks", OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic", PHI: "Philadelphia 76ers", PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers", SAC: "Sacramento Kings", SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors", UTA: "Utah Jazz", WAS: "Washington Wizards",
};

export function getTeamName(team: string): string {
  return TEAM_NAMES[normalizeTeam(team)] ?? team;
}

// Pick black or white text for legible contrast on a given team color.
export function readableTextOn(hex: string): string {
  const c = hex.replace("#", "");
  if (c.length !== 6) return "#FFFFFF";
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#0A1628" : "#FFFFFF";
}
