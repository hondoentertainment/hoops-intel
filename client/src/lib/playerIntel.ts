import { archiveEditions } from "./archiveData.js";
import { gameResults, gamePreviews, injuryUpdates, pulseEdition, pulseIndex, statLeaders } from "./pulseData.js";
import { playoffMovers, playoffSeries } from "./playoffData.js";
import { sentimentData } from "./sentimentData.js";
import { getAllPlayers } from "./searchUtils.js";
import { getAllGameCenterGames, makeGameId } from "./gameCenter.js";
import { canonicalizePlayerName, playerSlug } from "./identity.js";

export interface PlayerIntelResponse {
  slug: string;
  name: string;
  teams: string[];
  mentions: number;
  pulse?: {
    rank: number;
    indexScore: number;
    trend: string;
    keyStats: string;
    note: string;
    rationale?: string;
  };
  injury?: {
    status: string;
    injury: string;
    timeline?: string;
    impact?: string;
  };
  sentiment?: {
    sentiment: string;
    score: number;
    mentions: number;
    topTake: string;
    narrativeArc: string;
  };
  playoff?: {
    mover?: {
      direction: string;
      delta: number;
      line: string;
      note: string;
    };
    series: Array<{
      seriesId: string;
      summary: string;
      opponent: string;
      round: string;
    }>;
  };
  recentGames: Array<{
    gameId: string;
    title: string;
    status: string;
    line?: string;
    link: string;
  }>;
  upcomingGames: Array<{
    gameId: string;
    title: string;
    time?: string;
    tv?: string;
    link: string;
  }>;
  statLeaderCategories: string[];
  archiveTimeline: Array<{
    id: string;
    displayDate: string;
    headline: string;
    topPlayer?: boolean;
    topStatLine?: string;
  }>;
  trust: Array<{ label: string; value: string }>;
  updatedAt: string;
  unavailable?: boolean;
}

export function findPlayerBySlug(slug: string) {
  const canonical = decodeURIComponent(slug || "").toLowerCase();
  return getAllPlayers().find((p) => playerSlug(p.name) === canonical) ?? null;
}

function opponentFor(series: any, team: string) {
  if (series.higherTeam === team) return series.lowerTeam;
  if (series.lowerTeam === team) return series.higherTeam;
  return "";
}

export function getPlayerIntelBySlug(slug: string): PlayerIntelResponse | null {
  const player = findPlayerBySlug(slug);
  if (!player) return null;

  const playerName = canonicalizePlayerName(player.name);
  const matchesPlayer = (name: string) => canonicalizePlayerName(name) === playerName;
  const pulse = pulseIndex.find((p: any) => matchesPlayer(p.player));
  const injury = injuryUpdates.find((i: any) => matchesPlayer(i.player));
  const sentiment = sentimentData.playerSentiments?.find((s) => matchesPlayer(s.player));
  const mover = playoffMovers.find((m) => matchesPlayer(m.player));
  const games = getAllGameCenterGames();
  const statCategories = statLeaders.filter((s: any) => matchesPlayer(s.player)).map((s: any) => s.category);
  const relatedSeries = playoffSeries
    .filter((s) => player.teams.some((t) => s.higherTeam === t || s.lowerTeam === t))
    .map((s) => {
      const team = player.teams.find((t) => s.higherTeam === t || s.lowerTeam === t) || player.teams[0] || "";
      return {
        seriesId: s.seriesId,
        summary: s.summary,
        opponent: opponentFor(s, team),
        round: s.round,
      };
    });
  const archives = archiveEditions
    .filter((ed: any) => matchesPlayer(ed.topPlayer) || (ed.players || []).some((p: string) => matchesPlayer(p)))
    .slice(0, 8)
    .map((ed: any) => ({
      id: ed.id,
      displayDate: ed.displayDate,
      headline: ed.headline,
      topPlayer: matchesPlayer(ed.topPlayer),
      topStatLine: matchesPlayer(ed.topPlayer) ? ed.topStatLine : undefined,
    }));

  const recentGames = [
    ...gameResults
      .filter((g: any) => matchesPlayer(g.topPerformer) || player.teams.includes(g.homeTeam) || player.teams.includes(g.awayTeam))
      .slice(0, 4)
      .map((g: any) => ({
        gameId: g.gameId || "",
        title: `${g.awayTeam} ${g.awayScore} @ ${g.homeTeam} ${g.homeScore}`,
        status: "final",
        line: matchesPlayer(g.topPerformer) ? g.topLine : g.topPerformer,
        link: `/game/${g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date)}`,
      })),
    ...games
      .filter((g) => player.teams.some((t) => g.relatedTeams.includes(t)) || g.relatedPlayers.some((p) => matchesPlayer(p)))
      .slice(0, 4)
      .map((g) => ({
        gameId: g.gameId,
        title: g.title,
        status: g.status,
        line: g.topPerformer && matchesPlayer(g.topPerformer) ? g.topLine : g.subtitle,
        link: `/game/${g.gameId}`,
      })),
  ].filter((g, i, arr) => g.gameId && arr.findIndex((x) => x.gameId === g.gameId) === i).slice(0, 5);

  const upcomingGames = gamePreviews
    .filter((g: any) => player.teams.includes(g.homeTeam) || player.teams.includes(g.awayTeam))
    .map((g: any) => ({
      gameId: g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date),
      title: `${g.awayTeam} @ ${g.homeTeam}`,
      time: g.time,
      tv: g.tv,
      link: `/game/${g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date)}`,
    }));

  return {
    slug: playerSlug(playerName),
    name: playerName,
    teams: player.teams,
    mentions: player.mentions,
    pulse: pulse ? {
      rank: pulse.rank,
      indexScore: pulse.indexScore,
      trend: pulse.trend,
      keyStats: pulse.keyStats,
      note: pulse.note,
      rationale: pulse.rationale,
    } : undefined,
    injury: injury ? {
      status: injury.status,
      injury: injury.injury,
      timeline: injury.timeline,
      impact: injury.impact,
    } : undefined,
    sentiment: sentiment ? {
      sentiment: sentiment.sentiment,
      score: sentiment.score,
      mentions: sentiment.mentions,
      topTake: sentiment.topTake,
      narrativeArc: sentiment.narrativeArc,
    } : undefined,
    playoff: {
      mover: mover ? {
        direction: mover.direction,
        delta: mover.delta,
        line: mover.playoffLine,
        note: mover.note,
      } : undefined,
      series: relatedSeries,
    },
    recentGames,
    upcomingGames,
    statLeaderCategories: statCategories,
    archiveTimeline: archives,
    trust: [
      { label: "Profile", value: "Generated from Pulse Index, injuries, archive, and playoff board" },
      { label: "Updated", value: pulseEdition.date },
      { label: "Fallback", value: "Static profile remains available if live API is unavailable" },
    ],
    updatedAt: pulseEdition.date,
  };
}

export function topPlayerIntelSlugs(limit = 12) {
  return pulseIndex.slice(0, limit).map((p: any) => playerSlug(p.player));
}
