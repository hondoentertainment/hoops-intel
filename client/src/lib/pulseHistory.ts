// Pulse Index History — Track player rankings over time
// Uses archive data to reconstruct historical Pulse Index snapshots

import { archiveEditions } from "./archiveData";
import { pulseIndex } from "./pulseData";

export interface PulseSnapshot {
  date: string;
  displayDate: string;
  players: { rank: number; player: string; team: string; score: number }[];
}

export interface PlayerTrend {
  player: string;
  team: string;
  currentRank: number;
  currentScore: number;
  history: { date: string; rank: number | null; score: number | null }[];
  weeklyChange: number; // rank change over last 7 days
}

// Get the current Pulse Index as a snapshot
function getCurrentSnapshot(): PulseSnapshot {
  return {
    date: new Date().toISOString().split("T")[0],
    displayDate: "Today",
    players: pulseIndex.map((p: any) => ({
      rank: p.rank,
      player: p.player,
      team: p.team,
      score: p.indexScore,
    })),
  };
}

// Extract players mentioned across archive editions for trend tracking
export function getPlayerTrends(): PlayerTrend[] {
  const current = getCurrentSnapshot();
  const trends: PlayerTrend[] = [];

  for (const p of current.players) {
    // Look through archive editions for this player's mentions
    const history: { date: string; rank: number | null; score: number | null }[] = [];

    for (const edition of archiveEditions) {
      const playerIdx = edition.players?.indexOf(p.player) ?? -1;
      const isTopPlayer = edition.topPlayer === p.player;
      // Approximate rank from archive position (archive doesn't store full index)
      history.push({
        date: edition.date,
        rank: isTopPlayer ? 1 : playerIdx >= 0 ? playerIdx + 2 : null,
        score: isTopPlayer ? 95 : playerIdx >= 0 ? 85 - playerIdx * 3 : null,
      });
    }

    // Add current day
    history.unshift({
      date: current.date,
      rank: p.rank,
      score: p.score,
    });

    const recentRanks = history.filter((h) => h.rank !== null).slice(0, 7);
    const weeklyChange =
      recentRanks.length >= 2
        ? (recentRanks[recentRanks.length - 1]!.rank ?? 0) - (recentRanks[0]!.rank ?? 0)
        : 0;

    trends.push({
      player: p.player,
      team: p.team,
      currentRank: p.rank,
      currentScore: p.score,
      history: history.slice(0, 14), // Last 14 days
      weeklyChange,
    });
  }

  return trends;
}

// Get biggest movers (rank improvements/drops)
export function getBiggestMovers(): { risers: PlayerTrend[]; fallers: PlayerTrend[] } {
  const trends = getPlayerTrends();
  const withChange = trends.filter((t) => t.weeklyChange !== 0);
  const risers = withChange
    .filter((t) => t.weeklyChange < 0) // lower rank = better
    .sort((a, b) => a.weeklyChange - b.weeklyChange)
    .slice(0, 3);
  const fallers = withChange
    .filter((t) => t.weeklyChange > 0)
    .sort((a, b) => b.weeklyChange - a.weeklyChange)
    .slice(0, 3);
  return { risers, fallers };
}

// Generate sparkline data points for a player
export function getPlayerSparkline(player: string): number[] {
  const trends = getPlayerTrends();
  const match = trends.find((t) => t.player === player);
  if (!match) return [];
  return match.history
    .slice(0, 7)
    .reverse()
    .map((h) => h.score ?? 0)
    .filter((s) => s > 0);
}
