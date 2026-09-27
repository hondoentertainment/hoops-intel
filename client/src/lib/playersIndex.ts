import { injuryUpdates, pulseIndex } from "./pulseData";
import { canonicalizePlayerName, playerSlug } from "./identity";
import { getPlayerRosterStatus, type RosterStatus } from "./playerRosterStatus";
import { getAllPlayers } from "./searchUtils";
import { playerQueryScore } from "./playerQueryRank";

export type PlayerBrowseFilter = "all" | "pulse" | "archive";

export interface BrowsePlayer {
  name: string;
  slug: string;
  teams: string[];
  mentions: number;
  status: RosterStatus;
  label: string;
  pulseRank?: number;
  pulseScore?: number;
  keyStats?: string;
  injuryStatus?: string;
  injuryNote?: string;
}

export function listBrowsePlayers(): BrowsePlayer[] {
  const pulseByName = new Map(
    (pulseIndex as Array<{ player: string; rank: number; indexScore: number; keyStats: string }>).map((row) => [
      canonicalizePlayerName(row.player),
      row,
    ]),
  );

  return getAllPlayers()
    .map((player) => {
      const pulse = pulseByName.get(canonicalizePlayerName(player.name));
      const injury = injuryUpdates.find(
        (row) => canonicalizePlayerName(row.player) === canonicalizePlayerName(player.name),
      );
      const roster = getPlayerRosterStatus(player.name, {
        inPulse: Boolean(pulse),
        hasCurrentTeam: Boolean(pulse || injury),
        mentions: player.mentions,
      });
      return {
        name: player.name,
        slug: playerSlug(player.name),
        teams: player.teams,
        mentions: player.mentions,
        status: roster.status,
        label: roster.label,
        pulseRank: pulse?.rank,
        pulseScore: pulse?.indexScore,
        keyStats: pulse?.keyStats,
        injuryStatus: injury?.status,
        injuryNote: injury?.injury,
        indexable: roster.indexable,
      };
    })
    .filter((player) => player.indexable)
    .map(({ indexable: _indexable, ...player }) => player)
    .sort((a, b) => {
      if (a.pulseRank != null && b.pulseRank != null) return a.pulseRank - b.pulseRank;
      if (a.pulseRank != null) return -1;
      if (b.pulseRank != null) return 1;
      return a.name.localeCompare(b.name);
    });
}

let hrefByCanonical: Map<string, string> | null = null;

function profileHrefMap(): Map<string, string> {
  if (!hrefByCanonical) {
    hrefByCanonical = new Map(
      listBrowsePlayers().map((player) => [canonicalizePlayerName(player.name), `/player/${player.slug}`]),
    );
  }
  return hrefByCanonical;
}

/** `/player/:slug` when the name is an indexable profile; otherwise null. */
export function playerProfileHref(name: string): string | null {
  if (!name?.trim()) return null;
  return profileHrefMap().get(canonicalizePlayerName(name)) ?? null;
}

export function browsePlayerScore(player: BrowsePlayer, query: string): number {
  return playerQueryScore(
    {
      name: player.name,
      teams: player.teams,
      label: player.label,
      keyStats: player.keyStats,
    },
    query,
  );
}

export function filterBrowsePlayers(
  players: BrowsePlayer[],
  query: string,
  filter: PlayerBrowseFilter = "all",
): BrowsePlayer[] {
  const q = query.trim();
  const matched = players.filter((player) => {
    if (filter === "pulse" && player.pulseRank == null) return false;
    if (filter === "archive" && player.pulseRank != null) return false;
    if (!q) return true;
    return browsePlayerScore(player, q) > 0;
  });
  if (!q) return matched;
  return matched.sort((a, b) => {
    const delta = browsePlayerScore(b, q) - browsePlayerScore(a, q);
    if (delta !== 0) return delta;
    if (a.pulseRank != null && b.pulseRank != null) return a.pulseRank - b.pulseRank;
    if (a.pulseRank != null) return -1;
    if (b.pulseRank != null) return 1;
    if (b.mentions !== a.mentions) return b.mentions - a.mentions;
    return a.name.localeCompare(b.name);
  });
}
