import { describe, expect, it } from "vitest";
import {
  daysUntilIso,
  deskAskChips,
  formatPulseScore,
  hasTonightSlate,
  heroStats,
  injuryChipTone,
  injuryCounts,
  padRank,
  pulseTrendMark,
  shortInjuryLine,
} from "../lib/enhancedDesk";
import { gamePreviews, pulseIndex, westStandings } from "../lib/pulseData";

describe("enhancedDesk", () => {
  it("formats pulse scores and ranks for the homepage module", () => {
    expect(formatPulseScore(99)).toBe("99");
    expect(formatPulseScore(96.5)).toBe("96.5");
    expect(padRank(1)).toBe("01");
    expect(pulseTrendMark("up").mark).toBe("▲");
    expect(pulseTrendMark("stable").mark).toBe("●");
  });

  it("derives hero stats from live edition data, not invented scores", () => {
    const cards = heroStats();
    expect(cards[0]?.kicker).toBe("PULSE LEADER");
    expect(cards[0]?.value).toBe(formatPulseScore(pulseIndex[0]!.indexScore));
    expect(cards.some((c) => c.kicker === "WEST NO. 1" && c.value === `${westStandings[0]!.wins}-${westStandings[0]!.losses}`)).toBe(true);
    expect(hasTonightSlate()).toBe(gamePreviews.length > 0);
  });

  it("counts injury statuses for the full report header", () => {
    const counts = injuryCounts();
    expect(counts.all).toBeGreaterThan(0);
    expect(counts.dtd + counts.probable + counts.out + counts.questionable).toBe(counts.all);
    expect(injuryChipTone("Day-to-Day")).toBe("danger");
    expect(injuryChipTone("Probable")).toBe("success");
    expect(shortInjuryLine("Right knee soreness (chronic management)")).toMatch(/knee/i);
  });

  it("uses closed-slate Ask chips when there are no games", () => {
    const chips = deskAskChips();
    expect(chips).toContain("Who's rising on the Pulse Index?");
    expect(daysUntilIso("2026-10-03", new Date("2026-09-01T12:00:00"))).toBe(32);
  });
});
