import { describe, expect, it } from "vitest";
import { headerNavLinks, mobileBottomNavLinks, publicToolsDirectory, TOOLS_DIRECTORY } from "../lib/siteNav";

describe("siteNav", () => {
  it("uses offseason chrome in August dead period", () => {
    const august = new Date(Date.UTC(2026, 7, 29));
    const header = headerNavLinks(august).map((l) => l.label);
    const mobile = mobileBottomNavLinks(august).map((l) => l.label);

    expect(header).toEqual(["Pulse", "Briefing", "Injuries", "Projections", "Tools"]);
    expect(mobile).toEqual(["Today", "Pulse", "Projections", "My Pulse", "Ask"]);
    expect(header).not.toContain("Playoffs");
    expect(mobile).not.toContain("Live");
  });

  it("uses in-season chrome in January", () => {
    const january = new Date(Date.UTC(2026, 0, 15));
    const header = headerNavLinks(january).map((l) => l.label);
    const mobile = mobileBottomNavLinks(january).map((l) => l.label);

    expect(header).toContain("Scores");
    expect(header).toContain("Tonight");
    expect(mobile).toContain("Scores");
    expect(mobile).not.toContain("Live");
    expect(mobile).toContain("Picks");
  });

  it("hides admin and opt-out routes from the public tools grid", () => {
    const hrefs = publicToolsDirectory().map((t) => t.href);
    expect(hrefs).not.toContain("/creator-queue");
    expect(hrefs).not.toContain("/unsubscribe");
    expect(hrefs).not.toContain("/embed-stats");
    expect(TOOLS_DIRECTORY.some((t) => t.href === "/creator-queue")).toBe(true);
  });
});
