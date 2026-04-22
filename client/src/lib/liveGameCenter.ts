import type { LiveGame } from "./espnApi";

const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba";
const ESPN_CORE_PBP = "https://cdn.espn.com/core/nba/playbyplay";

export interface PlayByPlayItem {
  id: string;
  text: string;
  clock: string;
  period: number;
  homeScore: number;
  awayScore: number;
  team: string;
}

export interface WinProbabilityPoint {
  id: string;
  label: string;
  homeWinProb: number;
  awayWinProb: number;
}

export interface GameCenterPayload {
  plays: PlayByPlayItem[];
  winProbability: WinProbabilityPoint[];
}

function parseNumber(value: unknown): number {
  const n = typeof value === "number" ? value : parseFloat(String(value ?? "0"));
  return Number.isFinite(n) ? n : 0;
}

function normalizeProb(value: unknown): number {
  const n = parseNumber(value);
  if (n > 1) return Math.max(0, Math.min(100, n));
  return Math.max(0, Math.min(100, n * 100));
}

function mapPlay(raw: any, idx: number): PlayByPlayItem {
  return {
    id: String(raw?.id ?? `${idx}`),
    text: String(raw?.text ?? raw?.description ?? "Live update"),
    clock: String(raw?.clock?.displayValue ?? raw?.clock ?? "0:00"),
    period: parseNumber(raw?.period?.number ?? raw?.period ?? 0),
    homeScore: parseNumber(raw?.homeScore),
    awayScore: parseNumber(raw?.awayScore),
    team: String(raw?.team?.abbreviation ?? raw?.team?.shortDisplayName ?? ""),
  };
}

function parseFromSummary(summary: any): PlayByPlayItem[] {
  const direct = Array.isArray(summary?.plays) ? summary.plays : [];
  if (direct.length > 0) return direct.map(mapPlay);

  const drivePlays = [
    ...(summary?.drives?.previous ?? []).flatMap((d: any) => d?.plays ?? []),
    ...(summary?.drives?.current?.plays ?? []),
  ];
  if (drivePlays.length > 0) return drivePlays.map(mapPlay);
  return [];
}

function parseFromCorePbp(core: any): PlayByPlayItem[] {
  const raw = core?.gamepackageJSON?.plays ?? core?.plays ?? [];
  if (!Array.isArray(raw) || raw.length === 0) return [];
  return raw.map(mapPlay);
}

function parseWinProbability(summary: any, core: any): WinProbabilityPoint[] {
  const raw =
    (Array.isArray(summary?.winprobability) && summary.winprobability.length > 0
      ? summary.winprobability
      : Array.isArray(core?.gamepackageJSON?.winprobability)
      ? core.gamepackageJSON.winprobability
      : []) ?? [];

  const mapped = raw
    .map((p: any, idx: number) => {
      const homeProb = normalizeProb(p?.homeWinPercentage ?? p?.homeWinProbability ?? p?.home);
      const awayProb = Math.max(0, 100 - homeProb);
      const period = parseNumber(p?.period ?? p?.periodNumber ?? 0);
      const clock = String(p?.clock ?? p?.displayClock ?? "0:00");
      const label = period > 0 ? `Q${period} ${clock}` : clock;
      return {
        id: String(p?.sequenceNumber ?? p?.playId ?? idx),
        label,
        homeWinProb: homeProb,
        awayWinProb: awayProb,
      };
    })
    .filter((p: WinProbabilityPoint) => Number.isFinite(p.homeWinProb));

  return mapped.slice(-40);
}

function buildFallbackPlays(game: LiveGame): PlayByPlayItem[] {
  return [
    {
      id: `${game.id}-fallback-1`,
      text: `${game.status === "in" ? "Live" : "Game"} update from ${game.awayTeam} @ ${game.homeTeam}`,
      clock: game.clock || "0:00",
      period: game.period || 0,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
      team: game.homeScore >= game.awayScore ? game.homeTeam : game.awayTeam,
    },
    {
      id: `${game.id}-fallback-2`,
      text: `${game.statusDetail}${game.venue ? ` · ${game.venue}` : ""}`,
      clock: game.clock || "0:00",
      period: game.period || 0,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
      team: "",
    },
  ];
}

function buildFallbackWinProb(game: LiveGame): WinProbabilityPoint[] {
  const diff = game.homeScore - game.awayScore;
  const homeEstimate = Math.max(5, Math.min(95, 50 + diff * 3));
  return [
    { id: `${game.id}-wp-a`, label: "Tip", homeWinProb: 50, awayWinProb: 50 },
    { id: `${game.id}-wp-b`, label: "Now", homeWinProb: homeEstimate, awayWinProb: 100 - homeEstimate },
  ];
}

export function clockToSeconds(clock: string): number {
  const parts = clock.split(":");
  if (parts.length !== 2) return Number.POSITIVE_INFINITY;
  const mins = parseNumber(parts[0]);
  const secs = parseNumber(parts[1]);
  return mins * 60 + secs;
}

export async function fetchGameCenter(game: LiveGame): Promise<GameCenterPayload> {
  const summaryUrl = `${ESPN_BASE}/summary?event=${encodeURIComponent(game.id)}`;
  const coreUrl = `${ESPN_CORE_PBP}?xhr=1&gameId=${encodeURIComponent(game.id)}`;

  const [summaryRes, coreRes] = await Promise.allSettled([fetch(summaryUrl), fetch(coreUrl)]);
  const summaryJson =
    summaryRes.status === "fulfilled" && summaryRes.value.ok
      ? await summaryRes.value.json().catch(() => ({}))
      : {};
  const coreJson =
    coreRes.status === "fulfilled" && coreRes.value.ok
      ? await coreRes.value.json().catch(() => ({}))
      : {};

  const summaryPlays = parseFromSummary(summaryJson);
  const corePlays = parseFromCorePbp(coreJson);
  const plays = (summaryPlays.length > 0 ? summaryPlays : corePlays).slice(-24);
  const winProbability = parseWinProbability(summaryJson, coreJson);

  return {
    plays: plays.length > 0 ? plays : buildFallbackPlays(game),
    winProbability: winProbability.length > 0 ? winProbability : buildFallbackWinProb(game),
  };
}
