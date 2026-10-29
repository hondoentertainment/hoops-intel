import { describe, expect, it } from "vitest";
import { findPlayerInjury, playerHasLiveDeskCoverage, getPlayerIntelBySlug } from "../lib/playerIntel";
import { deskStaleNote, displayDateToIso, isDeskEditionStale, isoToDisplayDate, lastUpdatedStamp } from "../lib/dataTrust";
import { injuryUpdates, pulseEdition, pulseIndex } from "../lib/pulseData";
import { filterBrowsePlayers, listBrowsePlayers, playerProfileHref, type BrowsePlayer } from "../lib/playersIndex";
import { slugify } from "../lib/searchUtils";
import { profileSeoIndexable } from "../lib/playerRosterStatus";

describe("playersIndex", () => {
  it("lists Pulse players first and keeps emerging archive names searchable", () => {
    const rows = listBrowsePlayers();
    expect(rows.length).toBeGreaterThan(20);
    const leader = pulseIndex[0];
    expect(rows[0]?.name).toBe(leader?.player);
    expect(rows[0]?.pulseRank).toBe(1);

    const amen = rows.find((p) => p.slug === "amen-thompson" || p.name === "Amen Thompson");
    const vj = rows.find((p) => p.slug === "vj-edgecombe" || p.name === "VJ Edgecombe");
    expect(amen || vj).toBeTruthy();
    expect(rows.some((p) => p.slug === "michael-jordan")).toBe(false);
    expect(rows.some((p) => p.name === "David Stern" || p.slug === "david-stern")).toBe(false);
    expect(rows.some((p) => p.name === "Billy Hunter" || p.slug === "billy-hunter")).toBe(false);
  });

  it("filters by query and Pulse vs archive", () => {
    const rows = listBrowsePlayers();
    const pulseOnly = filterBrowsePlayers(rows, "", "pulse");
    expect(pulseOnly.every((p) => p.pulseRank != null)).toBe(true);
    expect(pulseOnly.length).toBe(pulseIndex.length);

    const leaderName = pulseIndex[0]?.player ?? "";
    const lastName = leaderName.split(" ").at(-1) ?? "";
    const queried = filterBrowsePlayers(rows, lastName, "all");
    expect(queried.some((p) => p.name === leaderName)).toBe(true);
    expect(filterBrowsePlayers(rows, "zzzz-not-a-player", "all")).toEqual([]);
  });

  it("ranks a name hit above stat-line noise and breaks ties without the edition order", () => {
    const fixture: BrowsePlayer[] = [
      browse({ name: "Blake Carter", slug: "blake-carter", mentions: 5 }),
      browse({ name: "Alex Carter", slug: "alex-carter", mentions: 5 }),
      browse({
        name: "Dana Carter",
        slug: "dana-carter",
        mentions: 1,
        status: "active",
        label: "Active",
        pulseRank: 3,
        pulseScore: 80,
        keyStats: "20 PPG",
      }),
      browse({
        name: "Casey North",
        slug: "casey-north",
        mentions: 9,
        keyStats: "mentions carter in the blurb",
      }),
    ];
    expect(filterBrowsePlayers(fixture, "carter").map((player) => player.name)).toEqual([
      "Dana Carter",
      "Alex Carter",
      "Blake Carter",
      "Casey North",
    ]);

    const rows = listBrowsePlayers();
    expectNameBeatsStatNoise(rows, "edgecombe", "vj-edgecombe");
    expectNameBeatsStatNoise(rows, "vj", "vj-edgecombe");
    expectNameBeatsStatNoise(rows, "amen", "amen-thompson");
    expect(filterBrowsePlayers(rows, "sga").some((player) => /Gilgeous-Alexander/.test(player.name))).toBe(true);
    expect(filterBrowsePlayers(rows, "de'aaron").some((player) => /Fox/.test(player.name))).toBe(true);
    expect(rows.some((player) => player.slug === "dylan-harper")).toBe(true);
    for (const row of rows) {
      if (row.pulseRank == null) {
        expect(row.keyStats).toBeUndefined();
      } else {
        expect(pulseIndex.some((card) => card.player === row.name && card.rank === row.pulseRank)).toBe(true);
      }
    }
    expect(profileSeoIndexable("Dylan Harper", { mentions: 4 })).toBe(false);
    expect(profileSeoIndexable("VJ Edgecombe", { mentions: 4 })).toBe(false);
    expect(profileSeoIndexable("Dylan Harper", { mentions: 1, substantive: true })).toBe(true);

    expect(filterBrowsePlayers(rows, "", "all")[0]?.pulseRank).toBe(1);
    for (const row of rows) {
      expect(row.name).not.toMatch(/role players|placeholder|lorem ipsum|coming soon|\bTBD\b/i);
      expect(row.label).not.toMatch(/placeholder|lorem|coming soon|\bTBD\b/i);
    }

    const slugs = rows.map((player) => player.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(rows.filter((player) => player.slug === "kristaps-porzingis")).toHaveLength(1);
  });

  it("returns a profile href only for indexable names", () => {
    const leader = pulseIndex[0]!.player;
    expect(playerProfileHref(leader)).toBe(`/player/${slugify(leader)}`);
    expect(playerProfileHref("Chris Paul")).toBe("/player/chris-paul");
    expect(playerProfileHref("Michael Jordan")).toBeNull();
    expect(playerProfileHref("")).toBeNull();
  });
});

function browse(partial: Partial<BrowsePlayer> & Pick<BrowsePlayer, "name" | "slug">): BrowsePlayer {
  return {
    teams: [],
    mentions: 1,
    status: "inactive",
    label: "Archive only",
    ...partial,
  };
}

function expectNameBeatsStatNoise(rows: BrowsePlayer[], query: string, slug: string) {
  const ranked = filterBrowsePlayers(rows, query);
  const nameIdx = ranked.findIndex((player) => player.slug === slug);
  expect(nameIdx).toBeGreaterThanOrEqual(0);
  const needle = query.toLowerCase();
  for (const row of ranked.slice(0, nameIdx)) {
    expect(row.name.toLowerCase()).toContain(needle);
  }
}

describe("player empty-state coverage", () => {
  it("treats Pulse leaders as live coverage and off-desk archive names as empty", () => {
    const leaderSlug = slugify(pulseIndex[0]!.player);
    const leader = getPlayerIntelBySlug(leaderSlug);
    expect(playerHasLiveDeskCoverage(leader)).toBe(true);
    expect(leader?.pulse).toBeTruthy();

    const found = ["vj-edgecombe", "amen-thompson", "dylan-harper", "kawhi-leonard"]
      .map((slug) => getPlayerIntelBySlug(slug))
      .filter((intel): intel is NonNullable<typeof intel> => Boolean(intel));
    expect(found.length).toBeGreaterThan(0);
    for (const intel of found) {
      expect(playerHasLiveDeskCoverage(intel)).toBe(Boolean(intel.pulse || intel.injury));
      if (!intel.pulse && !intel.injury) {
        expect(intel.mentions).toBeGreaterThan(0);
      }
    }
    expect(
      playerHasLiveDeskCoverage({ ...found[0]!, pulse: undefined, injury: undefined }),
    ).toBe(false);
  });
});

describe("player availability badges", () => {
  it("surfaces injury-wire status on browse cards without inventing rows", () => {
    const rows = listBrowsePlayers();
    const wired = injuryUpdates[0];
    expect(wired).toBeTruthy();
    const card = rows.find((p) => p.name === wired!.player);
    expect(card?.injuryStatus).toBe(wired!.status);
    expect(card?.injuryNote).toBe(wired!.injury);

    expect(findPlayerInjury("Not On The Injury Wire")).toBeNull();
    expect(findPlayerInjury(wired!.player)?.status).toBe(wired!.status);
    const paulWire = injuryUpdates.find((row) => row.player === "Chris Paul");
    expect(findPlayerInjury("Chris Paul")).toBe(paulWire ?? null);

    const chris = rows.find((p) => p.name === "Chris Paul");
    expect(chris?.injuryStatus).toBe(paulWire?.status);
    expect(chris?.status).toBe("retired");
    expect(chris?.label).toBe("Retired");

    const offWire = rows.find(
      (row) =>
        (row.status === "retired" || row.status === "prospect" || row.status === "inactive") &&
        !injuryUpdates.some((injury) => injury.player === row.name),
    );
    expect(offWire).toBeTruthy();
    expect(offWire?.injuryStatus).toBeUndefined();
    expect(offWire?.status).not.toBe("active");

    const vjOnDesk =
      injuryUpdates.some((row) => row.player === "VJ Edgecombe") ||
      pulseIndex.some((row) => row.player === "VJ Edgecombe");
    const vj = rows.find((p) => p.slug === "vj-edgecombe" || p.name === "VJ Edgecombe");
    if (vj && !vjOnDesk) {
      expect(vj.status).toBe("prospect");
      expect(vj.label).toBe("Prospect archive");
      expect(vj.injuryStatus).toBeUndefined();
      expect(vj.pulseRank).toBeUndefined();
      expect(vj.teams).toEqual([]);
    }
  });
});

describe("freshness stamp", () => {
  it("uses the edition date, not a live clock", () => {
    expect(lastUpdatedStamp()).toBe(`Last updated: ${pulseEdition.date}`);
    expect(displayDateToIso("October 20, 2026")).toBe("2026-10-20");
    expect(isoToDisplayDate("2026-10-17")).toBe("October 17, 2026");
    expect(isoToDisplayDate("not-a-date")).toBeNull();
  });

  it("treats a same-day Pacific edition as fresh and yesterday as stale", () => {
    expect(isDeskEditionStale(new Date("2026-09-15T18:00:00-07:00"), "September 15, 2026")).toBe(false);
    expect(isDeskEditionStale(new Date("2026-09-16T12:00:00-07:00"), "September 15, 2026")).toBe(true);
    expect(deskStaleNote(new Date("2026-09-15T18:00:00-07:00"), "September 15, 2026")).toBeNull();
    expect(deskStaleNote(new Date("2026-09-16T12:00:00-07:00"), "September 15, 2026")).toMatch(/last-known/);
  });
});
