import { describe, expect, it } from "vitest";
import {
  activeEditionContext,
  clientSeasonMode,
  editionContextDeskLabel,
  isOffseasonDesk,
  offseasonPrimaryHref,
  priorSeasonStandingsCopy,
  pulseProFeatureBody,
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

describe("calendar chrome", () => {
  it("treats August as dead-period offseason even when edition metadata says regular", () => {
    const august = new Date(Date.UTC(2026, 7, 29));
    expect(clientSeasonMode(august)).toBe("dead-period");
    expect(activeEditionContext(august)).toBe("dead-period");
    expect(isOffseasonDesk(august)).toBe(true);
    expect(offseasonPrimaryHref(august)).toBe("/projections");
  });

  it("keeps January as regular season", () => {
    const january = new Date(Date.UTC(2026, 0, 15));
    expect(isOffseasonDesk(january)).toBe(false);
    expect(activeEditionContext(january)).toBe("regular");
  });

  it("stays in preseason until opening night, then switches to the regular desk", () => {
    const oct4 = new Date(Date.UTC(2026, 9, 4));
    const oct19 = new Date(Date.UTC(2026, 9, 19));
    const oct20 = new Date(Date.UTC(2026, 9, 20));
    expect(clientSeasonMode(oct4)).toBe("preseason");
    expect(activeEditionContext(oct4)).toBe("preseason");
    expect(editionContextDeskLabel(activeEditionContext(oct4))).toBe("Preseason desk");
    expect(clientSeasonMode(oct19)).toBe("preseason");
    expect(clientSeasonMode(oct20)).toBe("regular-season");
    expect(activeEditionContext(oct20)).toBe("regular");
    expect(editionContextDeskLabel("regular")).toBe("Regular season desk");
  });

  it("labels October standings as the prior season without inventing a record", () => {
    const copy = priorSeasonStandingsCopy(new Date(Date.UTC(2026, 9, 4)));
    expect(copy?.kicker).toBe("2025–26 final");
    expect(copy?.note).toMatch(/Prior-season records/);
    expect(copy?.note).toMatch(/2026–27/);
    expect(priorSeasonStandingsCopy(new Date(Date.UTC(2026, 9, 20)))).toBeNull();
  });
});

describe("Pro seasonal copy", () => {
  it("uses preseason desk language outside playoffs", () => {
    expect(pulseProFeatureBody("preseason")).toMatch(/preseason desk context/);
    expect(pulseProFeatureBody("preseason")).not.toMatch(/playoff context/);
    expect(pulseProFeatureBody("playoffs")).toMatch(/playoff context/);
    expect(pulseProFeatureBody("dead-period")).toMatch(/offseason desk context/);
    expect(pulseProFeatureBody("regular")).toMatch(/regular-season context/);
  });
});
