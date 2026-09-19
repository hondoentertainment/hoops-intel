import { describe, expect, it } from "vitest";
import { findPlayerInjury, playerHasLiveDeskCoverage, getPlayerIntelBySlug } from "../lib/playerIntel";
import { deskStaleNote, isDeskEditionStale, lastUpdatedStamp } from "../lib/dataTrust";
import { injuryUpdates, pulseEdition, pulseIndex } from "../lib/pulseData";
import { filterBrowsePlayers, listBrowsePlayers, playerProfileHref } from "../lib/playersIndex";
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

  it("returns a profile href only for indexable names", () => {
    const leader = pulseIndex[0]!.player;
    expect(playerProfileHref(leader)).toBe(`/player/${slugify(leader)}`);
    expect(playerProfileHref("Chris Paul")).toBe("/player/chris-paul");
    expect(playerProfileHref("Michael Jordan")).toBeNull();
    expect(playerProfileHref("")).toBeNull();
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
      expect(thin.pulse).toBeUndefined();
      expect(thin.injury).toBeUndefined();
    }
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

    expect(findPlayerInjury("Chris Paul")).toBeNull();
    expect(findPlayerInjury("Kawhi Leonard")).toBeNull();
    expect(findPlayerInjury(wired!.player)?.status).toBe(wired!.status);

    const chris = rows.find((p) => p.name === "Chris Paul");
    expect(chris?.injuryStatus).toBeUndefined();
    expect(chris?.status).toBe("retired");
    expect(chris?.label).toBe("Retired");

    const kawhi = rows.find((p) => p.name === "Kawhi Leonard" || p.slug === "kawhi-leonard");
    if (kawhi) {
      expect(kawhi.injuryStatus).toBeUndefined();
      expect(kawhi.status).not.toBe("active");
      expect(kawhi.label.toLowerCase()).toMatch(/archive|limited/);
    }

    const vj = rows.find((p) => p.slug === "vj-edgecombe" || p.name === "VJ Edgecombe");
    if (vj) {
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
  });

  it("treats a same-day Pacific edition as fresh and yesterday as stale", () => {
    expect(isDeskEditionStale(new Date("2026-09-15T18:00:00-07:00"), "September 15, 2026")).toBe(false);
    expect(isDeskEditionStale(new Date("2026-09-16T12:00:00-07:00"), "September 15, 2026")).toBe(true);
    expect(deskStaleNote(new Date("2026-09-15T18:00:00-07:00"), "September 15, 2026")).toBeNull();
    expect(deskStaleNote(new Date("2026-09-16T12:00:00-07:00"), "September 15, 2026")).toMatch(/last-known/);
  });
});
