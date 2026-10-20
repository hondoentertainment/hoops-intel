import { archiveEditions } from "./archiveData";
import {
  eastStandings,
  westStandings,
  gameResults,
  gamePreviews,
  injuryUpdates,
  pulseEdition,
  pulseIndex,
} from "./pulseData";
import { lineupData } from "./lineupData";
import { seriesForTeam, playoffSeriesOpponent } from "./playoffData";
import { nextPendingGame } from "./playoffAnalytics";
import { TEAM_NAMES, canonicalizeTeamCode } from "./identity";
import { displayDateToIso } from "./dataTrust";

type GameTeamMatchup = { homeTeam: string; awayTeam: string };

function bumpIso(map: Map<string, string>, code: string, iso: string | null) {
  if (!code || !iso) return;
  const prev = map.get(code);
  if (!prev || iso > prev) map.set(code, iso);
}

function collectTeamFields(value: unknown, into: Set<string>) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    for (const item of value) collectTeamFields(item, into);
    return;
  }
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (key === "team" && typeof child === "string") {
      const code = canonicalizeTeamCode(child);
      if (code) into.add(code);
    } else if (child && typeof child === "object") {
      collectTeamFields(child, into);
    }
  }
}

/**
 * Latest day this franchise's desk data actually moved: archive listing,
 * today's Pulse / injury / slate, or the lineup file. Not the page-load clock,
 * and not today's edition for a team that is absent from it.
 */
export function teamDeskUpdatedIso(rawAbbr: string): string | null {
  const abbr = canonicalizeTeamCode(rawAbbr);
  if (!abbr) return null;
  return teamUpdatedMap().get(abbr) ?? null;
}

let teamUpdatedCache: Map<string, string> | null = null;

function teamUpdatedMap(): Map<string, string> {
  if (teamUpdatedCache) return teamUpdatedCache;
  const map = new Map<string, string>();
  const editionIso = displayDateToIso(pulseEdition.date);
  for (const edition of archiveEditions) {
    const id = /^\d{4}-\d{2}-\d{2}$/.test(edition.id) ? edition.id : null;
    if (!id) continue;
    const fullNames = new Map<string, string>();
    for (const code of Object.keys(TEAM_NAMES)) fullNames.set(code, TEAM_NAMES[code] ?? "");
    const blob = JSON.stringify(edition);
    for (const code of Object.keys(TEAM_NAMES)) {
      const full = fullNames.get(code) ?? "";
      const listed = (edition.teams ?? []).includes(code) || (full && (edition.teams ?? []).includes(full));
      if (listed || (full && blob.includes(full)) || new RegExp(`\\b${code}\\b`).test(blob)) {
        bumpIso(map, code, id);
      }
    }
  }
  if (editionIso) {
    const deskCodes = new Set<string>();
    for (const row of injuryUpdates) {
      const code = canonicalizeTeamCode(row.team);
      if (code) deskCodes.add(code);
    }
    for (const row of pulseIndex) {
      const code = canonicalizeTeamCode(row.team);
      if (code) deskCodes.add(code);
    }
    for (const game of [...gameResults, ...gamePreviews] as GameTeamMatchup[]) {
      for (const side of [game.homeTeam, game.awayTeam]) {
        const code = canonicalizeTeamCode(side);
        if (code) deskCodes.add(code);
      }
    }
    for (const code of deskCodes) bumpIso(map, code, editionIso);
  }
  const lineupIso = displayDateToIso(lineupData.generatedDate);
  if (lineupIso) {
    const codes = new Set<string>();
    collectTeamFields(lineupData, codes);
    for (const code of codes) bumpIso(map, code, lineupIso);
  }
  teamUpdatedCache = map;
  return map;
}

export interface TeamIntelResponse {
  abbr: string;
  fullName: string;
  standing?: (typeof eastStandings)[0];
  recentGames: GameTeamMatchup[];
  previews: GameTeamMatchup[];
  injuries: typeof injuryUpdates;
  pulsePlayers: typeof pulseIndex;
  editions: typeof archiveEditions;
  playoffSummary?: string;
  updatedAt: string;
}

export function getTeamIntelByAbbr(rawAbbr: string): TeamIntelResponse | null {
  const abbr = canonicalizeTeamCode(rawAbbr);
  const fullName = TEAM_NAMES[abbr];
  if (!fullName) return null;

  const standing = [...eastStandings, ...westStandings].find((s) => s.team === abbr);
  const playoffRow = seriesForTeam(abbr);
  const playoffNext = playoffRow ? nextPendingGame(playoffRow) : undefined;
  const playoffOppAbbr = playoffRow ? playoffSeriesOpponent(playoffRow, abbr) : "";
  const oppKey = playoffOppAbbr === "NY" ? "NYK" : playoffOppAbbr === "SA" ? "SAS" : playoffOppAbbr;
  const playoffOppName = playoffOppAbbr ? TEAM_NAMES[oppKey] ?? playoffOppAbbr : "";

  let playoffSummary: string | undefined;
  if (playoffRow) {
    playoffSummary = `${playoffRow.summary}${playoffNext ? ` · Next: Game ${playoffNext.gameNumber}` : ""}${playoffOppName ? ` vs ${playoffOppName}` : ""}`;
  }

  return {
    abbr,
    fullName,
    standing,
    recentGames: (gameResults as GameTeamMatchup[]).filter((g) => g.homeTeam === abbr || g.awayTeam === abbr),
    previews: (gamePreviews as GameTeamMatchup[]).filter((g) => g.homeTeam === abbr || g.awayTeam === abbr),
    injuries: injuryUpdates.filter((inj) => inj.team === abbr),
    pulsePlayers: pulseIndex.filter((p) => p.team === abbr),
    editions: archiveEditions.filter((ed: any) => (ed.teams || []).includes(abbr)),
    playoffSummary,
    updatedAt: teamDeskUpdatedIso(abbr) ?? "",
  };
}
