// 82-0 Challenge — lineup grading + season simulation
// Deterministic: the season is seeded from the lineup itself, so a given five
// always produces the same record. That keeps shared results honest.

import { ERA_LABELS, LEGENDARY_OPPONENTS, type EraKey, type EraPlayer, type TeamEraPool, TEAM_ERA_POOLS } from "./eightyTwoZeroData";

export interface LineupSlot {
  player: EraPlayer;
  team: string;
  era: EraKey;
}

export interface RatingBreakdown {
  base: number;
  rimProtectionPenalty: number;
  playmakingPenalty: number;
  reboundPenalty: number;
  usageTax: number;
  total: number;
}

export interface SeasonLoss {
  gameNumber: number;
  opponent: string;
}

export interface SeasonResult {
  wins: number;
  losses: number;
  rating: RatingBreakdown;
  lossGames: SeasonLoss[];
  verdict: string;
}

const GAMES = 82;
/** Opponent strength band the lineup rating is measured against each night. */
const OPP_FLOOR = 120;
const OPP_CEILING = 175;

export function playerScore(pl: EraPlayer): number {
  return pl.pts + pl.reb + pl.ast + pl.stl + pl.blk;
}

export function strengthRating(lineup: EraPlayer[]): RatingBreakdown {
  const base = lineup.reduce((sum, pl) => sum + playerScore(pl), 0);

  const hasCenter = lineup.some((pl) => pl.pos === "C");
  const hasGuard = lineup.some((pl) => pl.pos === "G");
  const totalAst = lineup.reduce((s, pl) => s + pl.ast, 0);
  const totalReb = lineup.reduce((s, pl) => s + pl.reb, 0);

  const rimProtectionPenalty = hasCenter ? 0 : 12;
  const playmakingPenalty = (hasGuard ? 0 : 8) + (totalAst < 15 ? 6 : 0);
  const reboundPenalty = totalReb < 35 ? 6 : 0;

  // One ball: every 25+ PPG scorer past the second gets diminishing returns.
  const bigScorers = lineup.filter((pl) => pl.pts >= 25);
  const usageTax = bigScorers
    .slice(2)
    .reduce((s, pl) => s + (pl.pts - 20) * 0.4, 0);

  const total = Math.max(0, base - rimProtectionPenalty - playmakingPenalty - reboundPenalty - usageTax);
  return { base, rimProtectionPenalty, playmakingPenalty, reboundPenalty, usageTax, total };
}

/** Regular-season month buckets; game counts sum to 82. */
export const SEASON_MONTHS: { label: string; games: number }[] = [
  { label: "OCT", games: 8 },
  { label: "NOV", games: 15 },
  { label: "DEC", games: 14 },
  { label: "JAN", games: 15 },
  { label: "FEB", games: 11 },
  { label: "MAR", games: 15 },
  { label: "APR", games: 4 },
];

export interface MonthSplit {
  label: string;
  wins: number;
  losses: number;
}

export function monthlySplits(lossGames: SeasonLoss[]): MonthSplit[] {
  const lossNumbers = new Set(lossGames.map((l) => l.gameNumber));
  const splits: MonthSplit[] = [];
  let game = 0;
  for (const month of SEASON_MONTHS) {
    let losses = 0;
    for (let i = 0; i < month.games; i++) {
      game++;
      if (lossNumbers.has(game)) losses++;
    }
    splits.push({ label: month.label, wins: month.games - losses, losses });
  }
  return splits;
}

/** Win/loss for each of the 82 games in order — drives the season-reveal strip. */
export function gameStrip(result: SeasonResult): boolean[] {
  const lossNumbers = new Set(result.lossGames.map((l) => l.gameNumber));
  return Array.from({ length: GAMES }, (_, i) => !lossNumbers.has(i + 1));
}

function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function logistic(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

export function simulateSeason(lineup: EraPlayer[]): SeasonResult {
  const rating = strengthRating(lineup);
  const seed = fnv1a(lineup.map((pl) => pl.name).sort().join("|"));
  const rand = mulberry32(seed);

  let wins = 0;
  const lossGames: SeasonLoss[] = [];
  for (let game = 1; game <= GAMES; game++) {
    const oppStrength = OPP_FLOOR + rand() * (OPP_CEILING - OPP_FLOOR);
    const margin = rating.total - oppStrength;
    const winProb = Math.min(0.995, Math.max(0.02, logistic(margin / 16)));
    if (rand() < winProb) {
      wins++;
    } else {
      const opponent = LEGENDARY_OPPONENTS[Math.floor(rand() * LEGENDARY_OPPONENTS.length)];
      lossGames.push({ gameNumber: game, opponent });
    }
  }

  return { wins, losses: GAMES - wins, rating, lossGames, verdict: verdictFor(wins) };
}

export function verdictFor(wins: number): string {
  if (wins === GAMES) return "82-0. PERFECT SEASON. Print the shirts.";
  if (wins >= 78) return "Historic. The '96 Bulls are looking over their shoulder — but perfection slipped away.";
  if (wins >= 73) return "A record-book season. Also: not 82-0.";
  if (wins >= 65) return "A one seed and home court everywhere. The group chat still calls it a failure.";
  if (wins >= 50) return "A solid playoff team. You were asked for a perfect one.";
  if (wins >= 35) return "Play-in territory. Someone drafted for vibes.";
  return "The lottery balls thank you for your service.";
}

// ── Draft-time coverage hints ───────────────────────────────

export interface DraftCoverage {
  rawStrength: number;
  hasCenter: boolean;
  hasGuard: boolean;
  onPaceAssists: boolean;
  onPaceRebounds: boolean;
}

/** Coverage checks scale to how many slots are filled so hints stay honest mid-draft. */
export function draftCoverage(picked: EraPlayer[]): DraftCoverage {
  const filled = Math.max(1, picked.length);
  const totalAst = picked.reduce((s, pl) => s + pl.ast, 0);
  const totalReb = picked.reduce((s, pl) => s + pl.reb, 0);
  return {
    rawStrength: picked.reduce((s, pl) => s + playerScore(pl), 0),
    hasCenter: picked.some((pl) => pl.pos === "C"),
    hasGuard: picked.some((pl) => pl.pos === "G"),
    onPaceAssists: totalAst >= (15 * filled) / 5,
    onPaceRebounds: totalReb >= (35 * filled) / 5,
  };
}

// ── Seeded spinning (Daily Wheel) ───────────────────────────

/** Deterministic RNG stream; the Daily Wheel gives every visitor the same spins. */
export function createRng(seedString: string): () => number {
  return mulberry32(fnv1a(seedString));
}

export function dailyWheelSeed(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `82-0-daily-${y}-${m}-${d}`;
}

export function dailyWheelLabel(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ── Spin helpers ────────────────────────────────────────────

export function poolLabel(pool: TeamEraPool): string {
  return `${pool.team} · ${ERA_LABELS[pool.era]}`;
}

export function randomPool(random: () => number = Math.random): TeamEraPool {
  return TEAM_ERA_POOLS[Math.floor(random() * TEAM_ERA_POOLS.length)];
}

/** New team, same era when possible (falls back to any other team's pool). */
export function respinTeam(current: TeamEraPool, random: () => number = Math.random): TeamEraPool {
  const sameEra = TEAM_ERA_POOLS.filter((c) => c.era === current.era && c.team !== current.team);
  const options = sameEra.length > 0 ? sameEra : TEAM_ERA_POOLS.filter((c) => c.team !== current.team);
  return options[Math.floor(random() * options.length)];
}

/** Same team, different era. Every franchise in the data has at least two eras. */
export function respinEra(current: TeamEraPool, random: () => number = Math.random): TeamEraPool {
  const options = TEAM_ERA_POOLS.filter((c) => c.team === current.team && c.era !== current.era);
  if (options.length === 0) return current;
  return options[Math.floor(random() * options.length)];
}

export function availablePlayers(pool: TeamEraPool, taken: LineupSlot[]): EraPlayer[] {
  const takenNames = new Set(taken.map((s) => s.player.name));
  return pool.players.filter((pl) => !takenNames.has(pl.name));
}
