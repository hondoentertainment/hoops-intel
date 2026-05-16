import { archiveEditions } from "./archiveData.js";
import { playoffSeries, type PlayoffSeries, type PlayoffSeriesGame } from "./playoffData.js";
import { gamePreviews, gameResults, injuryUpdates, mediaReactions, narrative, pulseEdition, statLeaders, tickerItems } from "./pulseData.js";
import { refData } from "./refData.js";
import { watchGuideData } from "./watchGuideData.js";
import { canonicalizeTeamCode } from "./identity.js";

export type GameCenterStatus = "final" | "live" | "scheduled" | "preview";

export interface GameCenterTeam {
  abbr: string;
  fullName?: string;
  record?: string;
  score: number | null;
  seed?: number;
}

export interface GameCenterInsight {
  label: string;
  value: string;
  tone?: "good" | "bad" | "neutral" | "hot";
}

export interface GameCenterResponse {
  gameId: string;
  espnGameId?: string;
  source: "playoff-sync" | "pulse-result" | "preview";
  status: GameCenterStatus;
  statusDetail?: string;
  period?: number;
  clock?: string;
  date: string;
  time?: string;
  tv?: string;
  venue?: string;
  home: GameCenterTeam;
  away: GameCenterTeam;
  title: string;
  subtitle: string;
  whyItMatters: string;
  topPerformer?: string;
  topLine?: string;
  recap?: string;
  series?: {
    seriesId: string;
    summary: string;
    round: string;
    conference: string;
    eliminationGame?: boolean;
  };
  betting?: {
    spread?: string;
    overUnder?: string;
    angle?: string;
  };
  refs?: {
    crew?: string[];
    leadRef?: string;
    impact?: string;
  };
  injuries: Array<{
    player: string;
    team: string;
    status: string;
    injury: string;
    impact?: string;
  }>;
  relatedPlayers: string[];
  relatedTeams: string[];
  relatedStories: Array<{
    id: string;
    displayDate: string;
    headline: string;
  }>;
  insights: GameCenterInsight[];
  updatedAt: string;
  meta: {
    contractVersion: 1;
    generatedAt: string;
    sourceFetchedAt?: string;
    fallbackUsed: boolean;
    stale: boolean;
    sourceLabel: string;
  };
  unavailable?: boolean;
}

export function makeGameId(awayTeam: string, homeTeam: string, date?: string) {
  const raw = date ?? pulseEdition.date ?? "today";
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  const slash = raw.match(/(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/);
  const monthName = raw.match(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{1,2}),\s+(\d{4})/i);
  let stamp = "";
  if (iso) {
    stamp = `${iso[1]}${iso[2]}${iso[3]}`;
  } else if (slash) {
    const year = slash[3] ? (slash[3].length === 2 ? `20${slash[3]}` : slash[3]) : new Date().getFullYear().toString();
    stamp = `${year}${slash[1].padStart(2, "0")}${slash[2].padStart(2, "0")}`;
  } else if (monthName) {
    const d = new Date(raw);
    stamp = Number.isNaN(d.getTime())
      ? ""
      : `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  }
  if (!stamp) {
    const d = new Date(pulseEdition.date);
    stamp = Number.isNaN(d.getTime())
      ? new Date().toISOString().slice(0, 10).replace(/-/g, "")
      : `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  }
  return `${canonicalizeTeamCode(awayTeam)}-${canonicalizeTeamCode(homeTeam)}-${stamp}`;
}

function normalizeGameId(id: string) {
  return decodeURIComponent(id || "").toUpperCase();
}

function titleFor(away: string, home: string, status: GameCenterStatus) {
  if (status === "final") return `${away} at ${home} — Final`;
  if (status === "scheduled" || status === "preview") return `${away} at ${home}`;
  return `${away} at ${home} — Live`;
}

function matchRefAssignment(awayTeam: string, homeTeam: string) {
  const needleA = awayTeam.toUpperCase();
  const needleH = homeTeam.toUpperCase();
  return refData.tonightAssignments?.find((a) => {
    const game = a.game.toUpperCase();
    return game.includes(needleA) && game.includes(needleH);
  });
}

function relatedStoriesFor(teams: string[], players: string[]) {
  return archiveEditions
    .filter((ed: any) => {
      const edTeams = ed.teams || [];
      const edPlayers = ed.players || [];
      return teams.some((t) => edTeams.includes(t)) || players.some((p) => edPlayers.includes(p) || ed.topPlayer === p);
    })
    .slice(0, 4)
    .map((ed: any) => ({
      id: ed.id,
      displayDate: ed.displayDate,
      headline: ed.headline,
    }));
}

function gameInjuries(teams: string[]) {
  return injuryUpdates
    .filter((inj: any) => teams.includes(inj.team))
    .map((inj: any) => ({
      player: inj.player,
      team: inj.team,
      status: inj.status,
      injury: inj.injury,
      impact: inj.impact,
    }));
}

function playoffResponse(series: PlayoffSeries, game: PlayoffSeriesGame): GameCenterResponse {
  const ref = matchRefAssignment(game.awayTeam, game.homeTeam);
  const teams = [game.awayTeam, game.homeTeam];
  const players = [game.topPerformer].filter(Boolean) as string[];
  const highSeed = series.higherTeam === game.homeTeam ? series.higherSeed : series.lowerSeed;
  const awaySeed = series.higherTeam === game.awayTeam ? series.higherSeed : series.lowerSeed;

  return {
    gameId: makeGameId(game.awayTeam, game.homeTeam, game.date),
    source: "playoff-sync",
    status: game.status,
    date: game.date,
    time: game.time,
    tv: game.tv,
    home: { abbr: game.homeTeam, score: game.homeScore, seed: highSeed },
    away: { abbr: game.awayTeam, score: game.awayScore, seed: awaySeed },
    title: titleFor(game.awayTeam, game.homeTeam, game.status),
    subtitle: series.summary,
    whyItMatters: series.eliminationGame
      ? `${series.summary}. This is flagged as an elimination setting on the synced playoff board.`
      : `${series.summary}. Every game in this series changes the path to the next round.`,
    topPerformer: game.topPerformer,
    topLine: game.topLine,
    series: {
      seriesId: series.seriesId,
      summary: series.summary,
      round: series.round,
      conference: series.conference,
      eliminationGame: series.eliminationGame,
    },
    refs: ref ? { crew: ref.crew, leadRef: ref.leadRef, impact: ref.impact } : undefined,
    injuries: gameInjuries(teams),
    relatedPlayers: players,
    relatedTeams: teams,
    relatedStories: relatedStoriesFor(teams, players),
    insights: [
      { label: "Series", value: series.summary, tone: "hot" },
      { label: "Round", value: series.round.replace(/-/g, " "), tone: "neutral" },
      ...(series.eliminationGame ? [{ label: "Stakes", value: "Elimination game", tone: "bad" as const }] : []),
    ],
    updatedAt: pulseEdition.date,
    meta: {
      contractVersion: 1,
      generatedAt: pulseEdition.date,
      fallbackUsed: true,
      stale: false,
      sourceLabel: "ESPN playoff sync + Hoops Intel generated fallback",
    },
  };
}

function pulseResultResponse(g: any): GameCenterResponse {
  const teams = [g.awayTeam, g.homeTeam];
  const players = [g.topPerformer].filter(Boolean);
  return {
    gameId: g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date),
    source: "pulse-result",
    status: "final",
    date: pulseEdition.date,
    home: { abbr: g.homeTeam, score: g.homeScore },
    away: { abbr: g.awayTeam, score: g.awayScore },
    title: titleFor(g.awayTeam, g.homeTeam, "final"),
    subtitle: g.topPerformer ? `${g.topPerformer}: ${g.topLine}` : "Final score",
    whyItMatters: g.recap || narrative.subhead || narrative.headline,
    topPerformer: g.topPerformer,
    topLine: g.topLine,
    recap: g.recap,
    injuries: gameInjuries(teams),
    relatedPlayers: players,
    relatedTeams: teams,
    relatedStories: relatedStoriesFor(teams, players),
    insights: [
      { label: "Result", value: `${g.awayTeam} ${g.awayScore} @ ${g.homeTeam} ${g.homeScore}`, tone: "neutral" },
      ...(g.topLine ? [{ label: "Top line", value: g.topLine, tone: "good" as const }] : []),
    ],
    updatedAt: pulseEdition.date,
    meta: {
      contractVersion: 1,
      generatedAt: pulseEdition.date,
      fallbackUsed: true,
      stale: false,
      sourceLabel: "Generated daily edition",
    },
  };
}

function previewResponse(g: any): GameCenterResponse {
  const teams = [g.awayTeam, g.homeTeam];
  const ref = matchRefAssignment(g.awayTeam, g.homeTeam);
  const watch = watchGuideData.games?.find((wg) => wg.awayTeam === g.awayTeam && wg.homeTeam === g.homeTeam);
  return {
    gameId: g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date),
    source: "preview",
    status: "preview",
    date: pulseEdition.date,
    time: g.time,
    tv: g.tv,
    venue: watch?.venue,
    home: { abbr: g.homeTeam, record: g.homeRecord, score: null },
    away: { abbr: g.awayTeam, record: g.awayRecord, score: null },
    title: titleFor(g.awayTeam, g.homeTeam, "preview"),
    subtitle: g.keyMatchup || g.storyline,
    whyItMatters: g.storyline || g.prediction || narrative.subhead,
    betting: { spread: g.spread, overUnder: g.overUnder, angle: ref?.bettingAngle },
    refs: ref ? { crew: ref.crew, leadRef: ref.leadRef, impact: ref.impact } : undefined,
    injuries: gameInjuries(teams),
    relatedPlayers: statLeaders.filter((s: any) => teams.includes(s.team)).map((s: any) => s.player).slice(0, 6),
    relatedTeams: teams,
    relatedStories: relatedStoriesFor(teams, []),
    insights: [
      { label: "Spread", value: g.spread || "TBD", tone: "neutral" },
      { label: "Total", value: g.overUnder || "TBD", tone: "neutral" },
      ...(watch ? [{ label: "Watch score", value: String(watch.watchScore), tone: "hot" as const }] : []),
    ],
    updatedAt: pulseEdition.date,
    meta: {
      contractVersion: 1,
      generatedAt: pulseEdition.date,
      fallbackUsed: true,
      stale: false,
      sourceLabel: "Generated preview + estimated market context",
    },
  };
}

export function getAllGameCenterGames(): GameCenterResponse[] {
  const playoffGames = playoffSeries.flatMap((series) => series.games.map((game) => playoffResponse(series, game)));
  const resultGames = gameResults.map(pulseResultResponse);
  const previewGames = gamePreviews.map(previewResponse);
  const seen = new Set<string>();
  return [...playoffGames, ...resultGames, ...previewGames].filter((g) => {
    const key = normalizeGameId(g.gameId);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getGameCenterById(gameId: string) {
  const wanted = normalizeGameId(gameId);
  return getAllGameCenterGames().find((g) => normalizeGameId(g.gameId) === wanted) ?? null;
}

export function topDeskGames(limit = 4) {
  return getAllGameCenterGames()
    .sort((a, b) => {
      const aHot = a.series?.eliminationGame ? 1 : 0;
      const bHot = b.series?.eliminationGame ? 1 : 0;
      return bHot - aHot;
    })
    .slice(0, limit);
}

export function gameCenterTrustSignals() {
  return [
    { label: "Edition", value: pulseEdition.date },
    { label: "Scores", value: "ESPN synced + generated fallback" },
    { label: "Analysis", value: "Hoops Intel editorial model" },
    { label: "Validation", value: "CI checks game IDs, slugs, and generated TS" },
  ];
}
