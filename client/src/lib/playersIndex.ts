import { injuryUpdates, pulseIndex } from "./pulseData";
import { canonicalizePlayerName, playerSlug } from "./identity";
import { getPlayerRosterStatus, type RosterStatus } from "./playerRosterStatus";
import { getAllPlayers } from "./searchUtils";

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

export function filterBrowsePlayers(
  players: BrowsePlayer[],
  query: string,
  filter: PlayerBrowseFilter = "all",
): BrowsePlayer[] {
  const q = query.trim().toLowerCase();
  return players.filter((player) => {
    if (filter === "pulse" && player.pulseRank == null) return false;
    if (filter === "archive" && player.pulseRank != null) return false;
    if (!q) return true;
    const hay = [player.name, player.label, ...player.teams, player.keyStats ?? ""].join(" ").toLowerCase();
    return hay.includes(q);
  });
}
