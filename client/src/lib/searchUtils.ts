// Global search utility — searches across current edition + archive
import {
  pulseIndex,
  gameResults,
  injuryUpdates,
  gamePreviews,
  pulseEdition,
  narrative,
} from "./pulseData";
import { archiveEditions } from "./archiveData";
import { makeGameId } from "./gameCenter";
import { canonicalizePlayerName, canonicalizeTeamCode, playerSlug, slugifyName, teamName } from "./identity";
import { playoffSeries } from "./playoffData";

export interface SearchResult {
  type: "player" | "team" | "game" | "story" | "injury";
  title: string;
  subtitle: string;
  link?: string;
  date?: string;
}

export function globalSearch(query: string, limit = 20): SearchResult[] {
  if (!query.trim() || query.length < 2) return [];
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search current edition players (Pulse Index)
  for (const p of pulseIndex as any[]) {
    if (p.player.toLowerCase().includes(q) || p.team.toLowerCase().includes(q)) {
      results.push({
        type: "player",
        title: p.player,
        subtitle: `${p.team} · ${p.keyStats}`,
        link: `/player/${playerSlug(p.player)}`,
        date: pulseEdition.date,
      });
    }
  }

  // Search current game results
  for (const g of gameResults as any[]) {
    const haystack = `${g.homeTeam} ${g.awayTeam} ${g.topPerformer} ${g.recap}`.toLowerCase();
    if (haystack.includes(q)) {
      results.push({
        type: "game",
        title: `${g.awayTeam} ${g.awayScore} @ ${g.homeTeam} ${g.homeScore}`,
        subtitle: `${g.topPerformer}: ${g.topLine}`,
        link: `/game/${g.gameId || makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date)}`,
        date: pulseEdition.date,
      });
    }
  }

  // Search injuries
  for (const inj of injuryUpdates as any[]) {
    if (
      inj.player.toLowerCase().includes(q) ||
      inj.team.toLowerCase().includes(q)
    ) {
      results.push({
        type: "injury",
        title: `${inj.player} (${inj.team})`,
        subtitle: `${inj.status.toUpperCase()} — ${inj.injury}`,
        link: `/player/${slugify(inj.player)}`,
        date: pulseEdition.date,
      });
    }
  }

  // Search tonight's previews
  for (const gp of gamePreviews as any[]) {
    const haystack = `${gp.homeTeam} ${gp.awayTeam} ${gp.storyline} ${gp.keyMatchup}`.toLowerCase();
    if (haystack.includes(q)) {
      results.push({
        type: "game",
        title: `${gp.awayTeam} @ ${gp.homeTeam} — ${gp.time}`,
        subtitle: gp.keyMatchup,
        link: `/game/${gp.gameId || makeGameId(gp.awayTeam, gp.homeTeam, pulseEdition.date)}`,
        date: "Tonight",
      });
    }
  }

  // Search synced playoff games
  for (const series of playoffSeries) {
    for (const game of series.games) {
      const haystack = `${game.homeTeam} ${game.awayTeam} ${game.topPerformer || ""} ${series.summary}`.toLowerCase();
      if (haystack.includes(q)) {
        results.push({
          type: "game",
          title: `${game.awayTeam} @ ${game.homeTeam} — ${series.summary}`,
          subtitle: game.topLine || `${series.round.replace(/-/g, " ")} · Game ${game.gameNumber}`,
          link: `/game/${makeGameId(game.awayTeam, game.homeTeam, game.date)}`,
          date: game.date,
        });
      }
    }
  }

  // Search narrative
  if (narrative.headline.toLowerCase().includes(q) ||
      narrative.body.some((p: string) => p.toLowerCase().includes(q))) {
    results.push({
      type: "story",
      title: narrative.headline,
      subtitle: pulseEdition.edition,
      date: pulseEdition.date,
    });
  }

  // Search archive
  for (const ed of archiveEditions) {
    const haystack = [
      ed.headline,
      ed.subheadline,
      ed.topStory,
      ed.topPlayer,
      ...(ed.tags || []),
      ...(ed.players || []),
      ...(ed.teams || []),
    ]
      .join(" ")
      .toLowerCase();
    if (haystack.includes(q)) {
      results.push({
        type: "story",
        title: ed.headline || "Archive story",
        subtitle: `${ed.displayDate} · ${ed.gamesCount} games`,
        date: ed.displayDate,
      });
    }
  }

  // Deduplicate by title
  const seen = new Set<string>();
  return results.filter((r) => {
    const key = r.title + r.type;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}

export function slugify(name: string): string {
  return playerSlug(name);
}

// Collect all unique players and teams from archive + current edition
export function getAllPlayers(): { name: string; teams: string[]; mentions: number }[] {
  const playerMap = new Map<string, { teams: Set<string>; mentions: number }>();

  const addPlayer = (name: string, team?: string) => {
    const canonical = canonicalizePlayerName(name);
    const entry = playerMap.get(canonical) || { teams: new Set<string>(), mentions: 0 };
    if (team) entry.teams.add(canonicalizeTeamCode(team));
    entry.mentions++;
    playerMap.set(canonical, entry);
  };

  // Current edition
  for (const p of pulseIndex as any[]) addPlayer(p.player, p.team);
  for (const g of gameResults as any[]) addPlayer(g.topPerformer);
  for (const inj of injuryUpdates as any[]) addPlayer(inj.player, inj.team);

  // Archive
  for (const ed of archiveEditions) {
    if (ed.topPlayer) addPlayer(ed.topPlayer);
    for (const p of (ed.players || [])) addPlayer(p);
  }

  return Array.from(playerMap.entries())
    .map(([name, data]) => ({
      name,
      teams: Array.from(data.teams),
      mentions: data.mentions,
    }))
    .sort((a, b) => b.mentions - a.mentions);
}

export function getAllTeams(): { abbr: string; fullName: string; mentions: number }[] {
  const teamMap = new Map<string, { fullName: string; mentions: number }>();

  for (const ed of archiveEditions) {
    const teams = ed.teams || [];
    for (let i = 0; i < teams.length; i += 2) {
      const abbr = canonicalizeTeamCode(teams[i]);
      if (abbr && abbr.length === 3) {
        const entry = teamMap.get(abbr) || { fullName: teamName(abbr), mentions: 0 };
        entry.mentions++;
        teamMap.set(abbr, entry);
      }
    }
  }

  return Array.from(teamMap.entries())
    .map(([abbr, data]) => ({ abbr, fullName: data.fullName, mentions: data.mentions }))
    .sort((a, b) => b.mentions - a.mentions);
}

export { canonicalizePlayerName, canonicalizeTeamCode, playerSlug, slugifyName };
