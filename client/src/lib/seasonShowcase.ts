// Season Showcase — Computed stats from archive data
// Showcases the model's coverage of the 2025-26 NBA season

import { archiveEditions } from "./archiveData";

export interface SeasonHighlight {
  date: string;
  displayDate: string;
  headline: string;
  topPlayer: string;
  topStatLine: string;
  category: "historic" | "milestone" | "performance" | "streak" | "comeback" | "debut";
}

export interface SeasonStats {
  totalEditions: number;
  totalGames: number;
  firstEdition: string;
  latestEdition: string;
  uniquePlayers: number;
  uniqueTeams: number;
  avgGamesPerEdition: number;
  daysOfCoverage: number;
}

export interface PlayerMentions {
  name: string;
  mentions: number;
  topPerformances: number;
}

export interface TeamCoverage {
  abbr: string;
  mentions: number;
}

export function getSeasonStats(): SeasonStats {
  const editions = archiveEditions;
  const totalGames = editions.reduce((sum, e) => sum + e.gamesCount, 0);
  const allPlayers = new Set<string>();
  const allTeams = new Set<string>();

  editions.forEach((e) => {
    e.players.forEach((p) => allPlayers.add(p));
    e.teams.forEach((t) => {
      if (t.length <= 3) allTeams.add(t);
    });
  });

  const first = editions[editions.length - 1];
  const latest = editions[0];
  const firstDate = new Date(first.date);
  const latestDate = new Date(latest.date);
  const daysOfCoverage = Math.floor((latestDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return {
    totalEditions: editions.length,
    totalGames,
    firstEdition: first.displayDate,
    latestEdition: latest.displayDate,
    uniquePlayers: allPlayers.size,
    uniqueTeams: allTeams.size,
    avgGamesPerEdition: Math.round((totalGames / editions.length) * 10) / 10,
    daysOfCoverage,
  };
}

export function getTopMentionedPlayers(limit = 15): PlayerMentions[] {
  const playerMap = new Map<string, { mentions: number; topPerformances: number }>();

  archiveEditions.forEach((e) => {
    e.players.forEach((p) => {
      const current = playerMap.get(p) || { mentions: 0, topPerformances: 0 };
      current.mentions++;
      if (e.topPlayer === p) current.topPerformances++;
      playerMap.set(p, current);
    });
  });

  return Array.from(playerMap.entries())
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.mentions - a.mentions)
    .slice(0, limit);
}

export function getTeamCoverage(): TeamCoverage[] {
  const teamMap = new Map<string, number>();

  archiveEditions.forEach((e) => {
    e.teams.forEach((t) => {
      if (t.length <= 3) {
        teamMap.set(t, (teamMap.get(t) || 0) + 1);
      }
    });
  });

  return Array.from(teamMap.entries())
    .map(([abbr, mentions]) => ({ abbr, mentions }))
    .sort((a, b) => b.mentions - a.mentions);
}

export function getSeasonHighlights(): SeasonHighlight[] {
  const highlights: SeasonHighlight[] = [];

  archiveEditions.forEach((e) => {
    const h = e.headline.toLowerCase();
    const s = e.topStory.toLowerCase();

    // Historic records
    if (h.includes("record") || h.includes("wilt") || h.includes("history") || h.includes("all-time") || h.includes("passes")) {
      highlights.push({
        date: e.date,
        displayDate: e.displayDate,
        headline: e.headline.split("·")[0].trim(),
        topPlayer: e.topPlayer,
        topStatLine: e.topStatLine,
        category: "historic",
      });
    }
    // 50+ point games or extreme performances
    else if (/\b[5-9]\d\b/.test(e.topStatLine) || h.includes("83") || h.includes("51") || h.includes("50") || h.includes("45") || h.includes("44") || h.includes("42") || h.includes("41")) {
      highlights.push({
        date: e.date,
        displayDate: e.displayDate,
        headline: e.headline.split("·")[0].trim(),
        topPlayer: e.topPlayer,
        topStatLine: e.topStatLine,
        category: "performance",
      });
    }
    // Streaks
    else if (h.includes("streak") || h.includes("straight") || h.includes("consecutive")) {
      highlights.push({
        date: e.date,
        displayDate: e.displayDate,
        headline: e.headline.split("·")[0].trim(),
        topPlayer: e.topPlayer,
        topStatLine: e.topStatLine,
        category: "streak",
      });
    }
    // Returns/debuts
    else if (h.includes("return") || h.includes("debut") || h.includes("back")) {
      highlights.push({
        date: e.date,
        displayDate: e.displayDate,
        headline: e.headline.split("·")[0].trim(),
        topPlayer: e.topPlayer,
        topStatLine: e.topStatLine,
        category: "debut",
      });
    }
    // Comebacks
    else if (h.includes("comeback") || h.includes("rally") || s.includes("comeback") || s.includes("rallied")) {
      highlights.push({
        date: e.date,
        displayDate: e.displayDate,
        headline: e.headline.split("·")[0].trim(),
        topPlayer: e.topPlayer,
        topStatLine: e.topStatLine,
        category: "comeback",
      });
    }
  });

  return highlights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCoverageTimeline(): { date: string; games: number; label: string }[] {
  return [...archiveEditions]
    .reverse()
    .map((e) => ({
      date: e.date,
      games: e.gamesCount,
      label: e.displayDate.replace(", 2026", "").replace("February", "Feb").replace("March", "Mar"),
    }));
}
