import { describe, it, expect } from "vitest";
import { ERA_LABELS, TEAM_ERA_POOLS, type EraPlayer } from "../lib/eightyTwoZeroData";
import {
  availablePlayers,
  playerScore,
  respinEra,
  respinTeam,
  simulateSeason,
  strengthRating,
  verdictFor,
} from "../lib/eightyTwoZeroSim";

const pl = (name: string, pos: "G" | "F" | "C", pts: number, reb: number, ast: number, stl = 1, blk = 0.5): EraPlayer => ({ name, pos, pts, reb, ast, stl, blk });

const godSquad: EraPlayer[] = [
  pl("Michael Jordan", "G", 30.4, 6.3, 5.4, 2.5, 0.9),
  pl("Magic Johnson", "G", 19.5, 7.2, 11.2, 1.9, 0.4),
  pl("Larry Bird", "F", 24.3, 10, 6.3, 1.7, 0.8),
  pl("Kareem Abdul-Jabbar", "C", 30.4, 15.3, 4.3, 1.1, 3.5),
  pl("Bill Russell", "C", 15.1, 22.5, 4.3, 1, 3.5),
];

const roleSquad: EraPlayer[] = [
  pl("Muggsy Bogues", "G", 8.8, 2.7, 8.8),
  pl("Eric Snow", "G", 9.8, 2.5, 6.6),
  pl("Robert Horry", "F", 10, 5.5, 3),
  pl("Buck Williams", "F", 10, 8.5, 1.2),
  pl("Tree Rollins", "C", 8.4, 7.2, 0.8),
];

describe("82-0 data integrity", () => {
  it("every pool has a valid era label and at least 3 players", () => {
    for (const pool of TEAM_ERA_POOLS) {
      expect(ERA_LABELS[pool.era]).toBeTruthy();
      expect(pool.players.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("every franchise has at least two eras so era re-spins always work", () => {
    const erasByTeam = new Map<string, Set<string>>();
    for (const pool of TEAM_ERA_POOLS) {
      const set = erasByTeam.get(pool.team) ?? new Set();
      set.add(pool.era);
      erasByTeam.set(pool.team, set);
    }
    for (const [team, eras] of erasByTeam) {
      expect(eras.size, `${team} needs 2+ eras`).toBeGreaterThanOrEqual(2);
    }
  });

  it("covers all 30 NBA franchises", () => {
    expect(new Set(TEAM_ERA_POOLS.map((c) => c.team)).size).toBe(30);
  });
});

describe("strengthRating", () => {
  it("sums the five box-score categories as the base", () => {
    const rating = strengthRating(godSquad);
    const expected = godSquad.reduce((s, p) => s + playerScore(p), 0);
    expect(rating.base).toBeCloseTo(expected);
  });

  it("penalizes a lineup with no center", () => {
    const noCenter = godSquad.map((p) => ({ ...p, pos: "F" as const }));
    expect(strengthRating(noCenter).total).toBeLessThan(strengthRating(godSquad).total);
    expect(strengthRating(noCenter).rimProtectionPenalty).toBeGreaterThan(0);
  });

  it("taxes a third 25+ PPG scorer", () => {
    const twoStars = [...godSquad.slice(0, 4), pl("Willis Reed", "C", 18.7, 12.9, 1.8)];
    const threeStars = [...godSquad.slice(0, 4), pl("Wilt Chamberlain", "C", 30.1, 22.9, 4.4)];
    expect(strengthRating(twoStars).usageTax).toBe(0);
    expect(strengthRating(threeStars).usageTax).toBeGreaterThan(0);
  });

  it("never returns a negative total", () => {
    const zeros = roleSquad.map((p) => ({ ...p, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 }));
    expect(strengthRating(zeros).total).toBe(0);
  });
});

describe("simulateSeason", () => {
  it("always plays exactly 82 games", () => {
    for (const lineup of [godSquad, roleSquad]) {
      const result = simulateSeason(lineup);
      expect(result.wins + result.losses).toBe(82);
      expect(result.lossGames.length).toBe(result.losses);
    }
  });

  it("is deterministic for the same lineup regardless of order", () => {
    const a = simulateSeason(godSquad);
    const b = simulateSeason([...godSquad].reverse());
    expect(a.wins).toBe(b.wins);
    expect(a.lossGames).toEqual(b.lossGames);
  });

  it("a god squad beats a role-player squad", () => {
    expect(simulateSeason(godSquad).wins).toBeGreaterThan(simulateSeason(roleSquad).wins);
  });

  it("a god squad still wins at a historic clip", () => {
    expect(simulateSeason(godSquad).wins).toBeGreaterThanOrEqual(70);
  });

  it("loss games carry opponents and ascending game numbers", () => {
    const { lossGames } = simulateSeason(roleSquad);
    expect(lossGames.length).toBeGreaterThan(0);
    for (let i = 1; i < lossGames.length; i++) {
      expect(lossGames[i].gameNumber).toBeGreaterThan(lossGames[i - 1].gameNumber);
    }
    for (const loss of lossGames) {
      expect(loss.opponent).toBeTruthy();
    }
  });
});

describe("spin helpers", () => {
  it("respinTeam changes the team", () => {
    for (const pool of TEAM_ERA_POOLS) {
      expect(respinTeam(pool, () => 0.5).team).not.toBe(pool.team);
    }
  });

  it("respinEra keeps the team and changes the era", () => {
    for (const pool of TEAM_ERA_POOLS) {
      const next = respinEra(pool, () => 0.5);
      expect(next.team).toBe(pool.team);
      expect(next.era).not.toBe(pool.era);
    }
  });

  it("availablePlayers excludes already-drafted names", () => {
    const pool = TEAM_ERA_POOLS[0];
    const taken = [{ player: pool.players[0], team: pool.team, era: pool.era }];
    const names = availablePlayers(pool, taken).map((p) => p.name);
    expect(names).not.toContain(pool.players[0].name);
    expect(names.length).toBe(pool.players.length - 1);
  });
});

describe("verdictFor", () => {
  it("only a perfect season gets the perfect verdict", () => {
    expect(verdictFor(82)).toContain("PERFECT");
    expect(verdictFor(81)).not.toContain("PERFECT");
  });
});
