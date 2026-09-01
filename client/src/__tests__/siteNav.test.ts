import { describe, expect, it } from "vitest";
import { headerNavLinks, mobileBottomNavLinks, publicToolsDirectory, TOOLS_DIRECTORY } from "../lib/siteNav";

const ENHANCED_HEADER = ["Desk", "Injuries", "Tonight", "Pick 'Em", "Archive", "Ask"];
const ENHANCED_MOBILE = ["Desk", "Injuries", "Tonight", "Pick 'Em", "Ask"];

describe("siteNav", () => {
  it("uses Enhanced IA in August dead period", () => {
    const august = new Date(Date.UTC(2026, 7, 29));
    const header = headerNavLinks(august).map((l) => l.label);
    const mobile = mobileBottomNavLinks(august).map((l) => l.label);

    expect(header).toEqual(ENHANCED_HEADER);
    expect(mobile).toEqual(ENHANCED_MOBILE);
    expect(header).not.toContain("Scores");
    expect(mobile).not.toContain("Live");
  });

  it("uses the same Enhanced IA in January", () => {
    const january = new Date(Date.UTC(2026, 0, 15));
    const header = headerNavLinks(january).map((l) => l.label);
    const mobile = mobileBottomNavLinks(january).map((l) => l.label);

    expect(header).toEqual(ENHANCED_HEADER);
    expect(mobile).toEqual(ENHANCED_MOBILE);
    expect(header).not.toContain("Scores");
    expect(mobile).not.toContain("Picks");
    expect(mobile).toContain("Pick 'Em");
    expect(headerNavLinks(january).find((l) => l.label === "Tonight")?.href).toBe("/tonight");
  });

  it("hides admin and opt-out routes from the public tools grid", () => {
    const hrefs = publicToolsDirectory().map((t) => t.href);
    expect(hrefs).not.toContain("/creator-queue");
    expect(hrefs).not.toContain("/unsubscribe");
    expect(hrefs).not.toContain("/embed-stats");
    expect(TOOLS_DIRECTORY.some((t) => t.href === "/creator-queue")).toBe(true);
    expect(TOOLS_DIRECTORY.some((t) => t.href === "/tonight")).toBe(true);
  });
});
