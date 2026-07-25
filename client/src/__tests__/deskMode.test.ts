import { describe, expect, it } from "vitest";
import {
  activeEditionContext,
  clientSeasonMode,
  editionContextDeskLabel,
  isOffseasonDesk,
  seasonModeToEditionContext,
  type ClientSeasonMode,
} from "../lib/deskMode";

const OFFSEASON_MODES: ClientSeasonMode[] = [
  "draft",
  "free-agency",
  "summer-league",
  "preseason",
  "dead-period",
];

describe("deskMode season windows", () => {
  it("maps late July and August to the dead period", () => {
    expect(clientSeasonMode(new Date(Date.UTC(2026, 6, 25)))).toBe("dead-period");
    expect(clientSeasonMode(new Date(Date.UTC(2026, 7, 10)))).toBe("dead-period");
  });

  it("keeps every offseason window out of the regular-season desk", () => {
    for (const mode of OFFSEASON_MODES) {
      const ctx = seasonModeToEditionContext(mode);
      expect(ctx).toBe(mode);
      expect(editionContextDeskLabel(ctx)).not.toBe("Regular season desk");
    }
  });

  it("labels the dead period as the offseason desk", () => {
    expect(editionContextDeskLabel("dead-period")).toBe("Offseason desk");
  });

  it("still collapses the regular season to the regular desk", () => {
    expect(seasonModeToEditionContext("regular-season")).toBe("regular");
    expect(editionContextDeskLabel("regular")).toBe("Regular season desk");
  });
});

describe("committed edition context", () => {
  it("is a recognised context, so desk labelling never silently falls back", () => {
    const ctx = activeEditionContext();
    expect([
      "regular",
      "playoffs",
      "finals",
      "draft",
      "free-agency",
      "summer-league",
      "preseason",
      "dead-period",
    ]).toContain(ctx);
  });

  it("exposes offseason state as a boolean", () => {
    expect(typeof isOffseasonDesk()).toBe("boolean");
  });
});
