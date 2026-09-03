import { describe, expect, it } from "vitest";
import {
  compactPulseStats,
  daysUntilIso,
  deskAskChips,
  formatPulseScore,
  hasTonightSlate,
  heroStats,
  injuryChipTone,
  injuryCounts,
  mobileHeroStats,
  padRank,
  pulseTrendMark,
  shortInjuryLine,
} from "../lib/enhancedDesk";
import { gamePreviews, pulseIndex } from "../lib/pulseData";

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
    expect(cards.some((c) => c.kicker === "WEST NO. 1")).toBe(false);
    expect(cards.some((c) => c.kicker === "UNRESOLVED")).toBe(true);
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

  it("compacts Pulse stat lines and hero chips for a 390px desk", () => {
    expect(compactPulseStats("32.8 PPG · 12.1 RPG · 4.2 BPG · Locked 2030-31")).toBe(
      "32.8 · 12.1 · 4.2 · Locked 2030-31",
    );
    const chips = mobileHeroStats();
    expect(chips).toHaveLength(2);
    expect(chips[0]?.kicker).toBe("PULSE");
    expect(chips[1]?.kicker).toBe("CAMP");
    expect(chips[1]?.value).toMatch(/d$|Today|Open|—/);
  });

  it("uses closed-slate Ask chips when there are no games", () => {
    const chips = deskAskChips();
    expect(chips).toContain("Which rotation battles matter before camp?");
    expect(daysUntilIso("2026-10-03", new Date("2026-09-01T12:00:00"))).toBe(32);
  });
});
