export const TEAM_NAMES: Record<string, string> = {
  ATL: "Atlanta Hawks",
  BOS: "Boston Celtics",
  BRK: "Brooklyn Nets",
  CHA: "Charlotte Hornets",
  CHI: "Chicago Bulls",
  CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks",
  DEN: "Denver Nuggets",
  DET: "Detroit Pistons",
  GSW: "Golden State Warriors",
  HOU: "Houston Rockets",
  IND: "Indiana Pacers",
  LAC: "LA Clippers",
  LAL: "Los Angeles Lakers",
  MEM: "Memphis Grizzlies",
  MIA: "Miami Heat",
  MIL: "Milwaukee Bucks",
  MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans",
  NYK: "New York Knicks",
  OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic",
  PHI: "Philadelphia 76ers",
  PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers",
  SAC: "Sacramento Kings",
  SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors",
  UTA: "Utah Jazz",
  WAS: "Washington Wizards",
};

const TEAM_ALIASES: Record<string, string> = {
  BKN: "BRK",
  BK: "BRK",
  GS: "GSW",
  GSW: "GSW",
  LA: "LAL",
  NO: "NOP",
  NY: "NYK",
  SA: "SAS",
  WSH: "WAS",
};

const PLAYER_ALIASES: Record<string, string> = {
  "alperen-eng-n": "Alperen Sengun",
  "alperen-sengun": "Alperen Sengun",
  "brandon-podziemski": "Brandin Podziemski",
  "brandin-podziemski": "Brandin Podziemski",
  "cam-thomas": "Cam Thomas",
  "cameron-thomas": "Cam Thomas",
  "luka-doncic": "Luka Doncic",
  "luka-doncic-": "Luka Doncic",
  "nikola-jokic": "Nikola Jokic",
  "nikola-jokic-": "Nikola Jokic",
  "o-g-anunoby": "OG Anunoby",
  "og-anunoby": "OG Anunoby",
};

export function slugifyName(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function canonicalizePlayerName(name: string): string {
  const slug = slugifyName(name);
  return PLAYER_ALIASES[slug] ?? name;
}

export function playerSlug(name: string): string {
  return slugifyName(canonicalizePlayerName(name));
}

export function canonicalizeTeamCode(value: string): string {
  const raw = String(value || "").trim();
  const upper = raw.toUpperCase();
  if (TEAM_NAMES[upper]) return upper;
  if (TEAM_ALIASES[upper]) return TEAM_ALIASES[upper];
  const byName = Object.entries(TEAM_NAMES).find(([, fullName]) => fullName.toUpperCase() === upper);
  return byName?.[0] ?? upper;
}

export function isCanonicalTeamCode(value: string): boolean {
  return Boolean(TEAM_NAMES[canonicalizeTeamCode(value)]);
}

export function teamSlug(value: string): string {
  return canonicalizeTeamCode(value).toLowerCase();
}

export function teamName(value: string): string {
  const code = canonicalizeTeamCode(value);
  return TEAM_NAMES[code] ?? code;
}
