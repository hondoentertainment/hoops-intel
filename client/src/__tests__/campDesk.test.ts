import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  campIntelCards,
  campRosterBattles,
  campScheduleStatus,
  campStorylines,
  campUnresolved,
  isCampDesk,
} from "../lib/campDesk";
import { campScheduleGames, campScheduleMeta } from "../lib/campScheduleData";
import { gamePreviews, pulseIndex } from "../lib/pulseData";
import { lineupData } from "../lib/lineupData";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("campDesk", () => {
  it("treats September as a camp desk when the ESPN tonight slate is empty", () => {
    expect(isCampDesk(new Date(Date.UTC(2026, 8, 2)))).toBe(true);
    expect(gamePreviews).toEqual([]);
  });

  it("grounds storylines and battles in edition / lineup data, not invented matchups", () => {
    const stories = campStorylines();
    const battles = campRosterBattles();
    expect(stories.length).toBeGreaterThan(0);
    expect(battles.length).toBeGreaterThan(0);
    expect(stories.some((c) => /no nba games tonight/i.test(`${c.title} ${c.body}`))).toBe(false);
    expect(battles[0]?.team).toBe(lineupData.biggestSurprise.team);
    expect(battles[0]?.href).toBe("/lineups");
  });

  it("lists unresolved Pulse names that already exist on the board", () => {
    const unresolved = campUnresolved();
    const down = pulseIndex.filter((row) => row.trend === "down").map((row) => row.player);
    expect(unresolved.length).toBeGreaterThan(0);
    expect(unresolved.some((card) => down.some((name) => card.title.includes(name)))).toBe(true);
  });

  it("uses the ESPN camp-week snapshot when tonight is empty — never as tonight", () => {
    const status = campScheduleStatus();
    expect(status.kind).toBe("espn-upcoming");
    expect(status.headline).toMatch(/camp-week/i);
    expect(status.sub).toMatch(/not tonight/i);
    expect(status.games[0]).toMatchObject({ away: "MIA", home: "TOR" });
    expect(campScheduleMeta.label).toMatch(/not tonight/i);
    expect(campScheduleGames.some((g) => g.away === "NYK" && g.home === "BOS" && g.dateIso === "2026-10-03")).toBe(
      false,
    );
  });

  it("keeps a mixed intel stack for the Enhanced desk", () => {
    const cards = campIntelCards(3);
    expect(cards).toHaveLength(3);
    expect(new Set(cards.map((c) => c.kicker)).size).toBeGreaterThan(1);
  });
});

describe("Tonight empty slate", () => {
  it("does not render invented camp-opener GamePreview cards", () => {
    const tonight = readFileSync(join(srcDir, "pages/Tonight.tsx"), "utf8");
    expect(tonight).not.toContain("CAMP_OPENER");
    expect(tonight).toContain("Open camp intel");
    expect(tonight).toContain("No games tonight");
    expect(tonight).not.toMatch(/away:\s*"NYK"[\s\S]*home:\s*"BOS"/);
  });
});
