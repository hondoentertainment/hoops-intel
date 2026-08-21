import { canonicalizePlayerName, playerSlug } from "./identity";

export type RosterStatus = "active" | "inactive" | "retired" | "historical";

export interface RosterStatusInfo {
  status: RosterStatus;
  label: string;
  detail: string;
  indexable: boolean;
}

/** Hall-of-fame / comparison names that leak into archive `players[]` arrays. */
export const HISTORICAL_PLAYER_NAMES = [
  "Allan Houston",
  "Avery Johnson",
  "Charles Smith",
  "Clyde Drexler",
  "David Robinson",
  "Dikembe Mutombo",
  "Hakeem Olajuwon",
  "Jason Kidd",
  "John Starks",
  "Kevin Garnett",
  "Kevin McHale",
  "Kobe Bryant",
  "Larry Bird",
  "Latrell Sprewell",
  "Manu Ginobili",
  "Michael Jordan",
  "Patrick Ewing",
  "Pau Gasol",
  "Richard Jefferson",
  "Robert Horry",
  "Robert Parish",
  "Scottie Pippen",
  "Shaquille O'Neal",
  "Tim Duncan",
  "Tony Parker",
] as const;

/** Retired or inactive players that still have current-era archive coverage. */
export const RETIRED_PLAYER_NAMES = ["Chris Paul"] as const;

/** Coaches / media voices that sometimes appear in archive player lists. */
export const NON_PLAYER_NAMES = [
  "Charles Barkley",
  "Gregg Popovich",
  "Tom Thibodeau",
] as const;

const HISTORICAL = new Set(HISTORICAL_PLAYER_NAMES.map((n) => canonicalizePlayerName(n)));
const RETIRED = new Set(RETIRED_PLAYER_NAMES.map((n) => canonicalizePlayerName(n)));
const NON_PLAYER = new Set(NON_PLAYER_NAMES.map((n) => canonicalizePlayerName(n)));

export function isHistoricalPlayerName(name: string): boolean {
  return HISTORICAL.has(canonicalizePlayerName(name));
}

export function isRetiredPlayerName(name: string): boolean {
  return RETIRED.has(canonicalizePlayerName(name));
}

export function isNonPlayerName(name: string): boolean {
  return NON_PLAYER.has(canonicalizePlayerName(name));
}

export function getPlayerRosterStatus(
  name: string,
  context: { inPulse?: boolean; hasCurrentTeam?: boolean; mentions?: number } = {},
): RosterStatusInfo {
  const canonical = canonicalizePlayerName(name);
  const mentions = context.mentions ?? 0;

  if (NON_PLAYER.has(canonical)) {
    return {
      status: "historical",
      label: "Not a player profile",
      detail: "This name appears in Hoops Intel coverage as a coach or media voice, not as a current roster player.",
      indexable: false,
    };
  }

  if (HISTORICAL.has(canonical)) {
    return {
      status: "historical",
      label: "Historical",
      detail: "Hall of Fame / historical figure used as context. Not on a current NBA roster.",
      indexable: false,
    };
  }

  if (RETIRED.has(canonical)) {
    return {
      status: "retired",
      label: "Retired",
      detail: "Not on an active NBA roster. Archive coverage below is historical, not live Pulse intel.",
      indexable: mentions > 0,
    };
  }

  if (context.inPulse || context.hasCurrentTeam) {
    return {
      status: "active",
      label: "Active",
      detail: "Appears on the current Hoops Intel desk (Pulse Index, injury wire, or today's edition).",
      indexable: true,
    };
  }

  if (mentions >= 2) {
    return {
      status: "inactive",
      label: "Inactive / off desk",
      detail: "Not on today's Pulse Index. Profile is built from archive editions only.",
      indexable: true,
    };
  }

  return {
    status: "inactive",
    label: "Limited coverage",
    detail: "Thin archive mention only — not enough live intel for a populated player page.",
    indexable: false,
  };
}

/** Sitemap-quality gate: populated current-era pages, plus retired players with real archive. */
export function isIndexablePlayerProfile(
  name: string,
  context: { inPulse?: boolean; hasCurrentTeam?: boolean; mentions?: number } = {},
): boolean {
  return getPlayerRosterStatus(name, context).indexable;
}

export function indexablePlayerSlug(name: string): string {
  return playerSlug(name);
}
