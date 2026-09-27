import { teamName } from "./identity";

export interface PlayerQueryFields {
  name: string;
  teams?: string[];
  label?: string;
  keyStats?: string;
}

/**
 * Name matches outrank team tags, which outrank stat-line text.
 * Thin archive profiles have no counting line, so a last-name or initials
 * hit has to beat a Pulse card that merely contains the letters in keyStats.
 */
const SCORE = {
  exactName: 1000,
  lastName: 860,
  initials: 840,
  token: 780,
  lastPrefix: 760,
  initialsPrefix: 700,
  allTokens: 640,
  nameIncludes: 500,
  teamAbbr: 420,
  teamName: 450,
  weakText: 120,
} as const;

export function foldPlayerQuery(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’.]/g, "");
}

export function playerQueryTokens(value: string): string[] {
  return foldPlayerQuery(value)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

export function playerInitials(name: string): string {
  return playerQueryTokens(name)
    .map((token) => token[0] ?? "")
    .join("");
}

export function playerQueryScore(player: PlayerQueryFields, query: string): number {
  const q = foldPlayerQuery(query.trim());
  if (!q) return 0;

  const name = foldPlayerQuery(player.name);
  const tokens = playerQueryTokens(player.name);
  const qTokens = playerQueryTokens(query);
  const last = tokens[tokens.length - 1] ?? "";
  const initials = playerInitials(player.name);
  let score = 0;

  if (name === q) score = Math.max(score, SCORE.exactName);
  if (qTokens.length === 1 && last === qTokens[0]) score = Math.max(score, SCORE.lastName);
  if (initials.length >= 2 && initials === q) score = Math.max(score, SCORE.initials);
  if (qTokens.length === 1 && tokens.includes(qTokens[0])) score = Math.max(score, SCORE.token);
  if (qTokens.length === 1 && qTokens[0].length >= 3 && last.startsWith(qTokens[0]) && last !== qTokens[0]) {
    score = Math.max(score, SCORE.lastPrefix);
  }
  if (initials.length >= 3 && q.length >= 2 && q.length < initials.length && initials.startsWith(q)) {
    score = Math.max(score, SCORE.initialsPrefix);
  }
  if (
    qTokens.length > 1 &&
    qTokens.every((qt) => tokens.some((token) => token === qt || (qt.length >= 2 && token.startsWith(qt))))
  ) {
    score = Math.max(score, SCORE.allTokens);
  }
  if (name.includes(q)) score = Math.max(score, SCORE.nameIncludes);

  const teams = player.teams ?? [];
  if (teams.some((team) => foldPlayerQuery(team) === q)) score = Math.max(score, SCORE.teamAbbr);
  const teamBlob = teams.map((team) => `${foldPlayerQuery(team)} ${foldPlayerQuery(teamName(team))}`).join(" ");
  if (
    qTokens.length > 0 &&
    qTokens.every((qt) => qt.length >= 3 && teamBlob.includes(qt)) &&
    !teams.some((team) => foldPlayerQuery(team) === q)
  ) {
    score = Math.max(score, SCORE.teamName);
  }

  const weak = foldPlayerQuery(`${player.label ?? ""} ${player.keyStats ?? ""}`);
  if (q.length >= 3 && weak.includes(q)) score = Math.max(score, SCORE.weakText);

  return score;
}
