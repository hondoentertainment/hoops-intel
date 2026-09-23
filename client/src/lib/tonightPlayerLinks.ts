import { canonicalizePlayerName, canonicalizeTeamCode } from "./identity";
import { lineupData } from "./lineupData";
import { playerProfileHref, listBrowsePlayers } from "./playersIndex";
import { injuryUpdates, pulseIndex, statLeaders } from "./pulseData";

export interface TonightPlayerLink {
  name: string;
  href: string;
  team: string;
}

export interface TonightSlateGame {
  awayTeam: string;
  homeTeam: string;
  keyMatchup?: string;
  storyline?: string;
}

const LINK_CAP = 5;

function mentionsName(blob: string, name: string): boolean {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^A-Za-z])${escaped}(?=$|[^A-Za-z])`, "i").test(blob);
}

/**
 * 3–5 real profile links for a slate game.
 * Order: names already in the preview copy, then Pulse, injury wire, lineup, stat leaders.
 * Returns fewer than 3 when the desk simply does not know that many players — never pads.
 */
export function tonightPlayerLinks(game: TonightSlateGame, limit = LINK_CAP): TonightPlayerLink[] {
  const cap = Math.min(Math.max(limit, 0), LINK_CAP);
  const teams = new Set(
    [game.awayTeam, game.homeTeam].map((team) => canonicalizeTeamCode(team)).filter(Boolean),
  );
  const teamByName = new Map<string, string>();
  const remember = (name: string, team: string) => {
    const key = canonicalizePlayerName(name);
    if (!teamByName.has(key)) teamByName.set(key, canonicalizeTeamCode(team));
  };

  for (const row of pulseIndex as Array<{ player: string; team: string; rank: number }>) {
    remember(row.player, row.team);
  }
  for (const row of injuryUpdates as Array<{ player: string; team: string }>) {
    remember(row.player, row.team);
  }
  for (const row of statLeaders as Array<{ player: string; team: string }>) {
    remember(row.player, row.team);
  }
  for (const team of lineupData.teams) {
    for (const name of team.bestUnit?.players ?? []) remember(name, team.team);
  }

  const ordered: string[] = [];
  const seen = new Set<string>();
  const push = (name: string) => {
    const href = playerProfileHref(name);
    if (!href) return;
    const key = canonicalizePlayerName(name);
    if (seen.has(key)) return;
    seen.add(key);
    ordered.push(name);
  };

  const blob = `${game.keyMatchup ?? ""} ${game.storyline ?? ""}`.trim();
  if (blob) {
    const names = listBrowsePlayers()
      .map((player) => player.name)
      .sort((a, b) => b.length - a.length);
    for (const name of names) {
      if (mentionsName(blob, name)) push(name);
    }
  }

  const onSlate = (name: string) => teams.has(teamByName.get(canonicalizePlayerName(name)) ?? "");

  const pulse = [...(pulseIndex as Array<{ player: string; team: string; rank: number }>)].sort(
    (a, b) => a.rank - b.rank,
  );
  for (const row of pulse) {
    if (onSlate(row.player)) push(row.player);
  }
  for (const row of injuryUpdates as Array<{ player: string; team: string }>) {
    if (teams.has(canonicalizeTeamCode(row.team))) push(row.player);
  }
  for (const team of lineupData.teams) {
    if (!teams.has(canonicalizeTeamCode(team.team))) continue;
    for (const name of team.bestUnit?.players ?? []) push(name);
  }
  for (const row of statLeaders as Array<{ player: string; team: string }>) {
    if (teams.has(canonicalizeTeamCode(row.team))) push(row.player);
  }

  return ordered.slice(0, cap).map((name) => ({
    name,
    href: playerProfileHref(name) as string,
    team: teamByName.get(canonicalizePlayerName(name)) ?? "",
  }));
}
