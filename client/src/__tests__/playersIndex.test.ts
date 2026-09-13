import { describe, expect, it } from "vitest";
import { playerHasLiveDeskCoverage, getPlayerIntelBySlug } from "../lib/playerIntel";
import { lastUpdatedStamp } from "../lib/dataTrust";
import { pulseEdition, pulseIndex } from "../lib/pulseData";
import { filterBrowsePlayers, listBrowsePlayers } from "../lib/playersIndex";
import { slugify } from "../lib/searchUtils";

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
  });

  it("filters by query and Pulse vs archive", () => {
    const rows = listBrowsePlayers();
    const pulseOnly = filterBrowsePlayers(rows, "", "pulse");
    expect(pulseOnly.every((p) => p.pulseRank != null)).toBe(true);
    expect(pulseOnly.length).toBe(pulseIndex.length);

    const queried = filterBrowsePlayers(rows, "brunson", "all");
    expect(queried.some((p) => /brunson/i.test(p.name))).toBe(true);
    expect(filterBrowsePlayers(rows, "zzzz-not-a-player", "all")).toEqual([]);
  });
});

describe("player empty-state coverage", () => {
  it("treats Pulse leaders as live coverage and archive-only names as empty", () => {
    const leaderSlug = slugify(pulseIndex[0]!.player);
    expect(playerHasLiveDeskCoverage(getPlayerIntelBySlug(leaderSlug))).toBe(true);

    const thin = getPlayerIntelBySlug("vj-edgecombe") ?? getPlayerIntelBySlug("amen-thompson");
    if (thin) {
      expect(playerHasLiveDeskCoverage(thin)).toBe(false);
      expect(thin.mentions).toBeGreaterThan(0);
    }
  });
});

describe("freshness stamp", () => {
  it("uses the edition date, not a live clock", () => {
    expect(lastUpdatedStamp()).toBe(`Last updated: ${pulseEdition.date}`);
  });
});
