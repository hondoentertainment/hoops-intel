import { describe, expect, it } from "vitest";
import { distributionTools, TOOLS_DIRECTORY } from "../lib/siteNav";
import {
  getPlayerRosterStatus,
  isIndexablePlayerProfile,
} from "../lib/playerRosterStatus";

describe("playerRosterStatus", () => {
  it("marks Hall of Fame comparison names as historical and not indexable", () => {
    const status = getPlayerRosterStatus("Michael Jordan", { mentions: 8 });
    expect(status.status).toBe("historical");
    expect(status.indexable).toBe(false);
    expect(isIndexablePlayerProfile("Hakeem Olajuwon", { mentions: 4 })).toBe(false);
  });

  it("keeps Chris Paul indexable with a retired roster label", () => {
    const status = getPlayerRosterStatus("Chris Paul", { mentions: 3 });
    expect(status.status).toBe("retired");
    expect(status.label).toBe("Retired");
    expect(status.indexable).toBe(true);
    expect(status.detail.toLowerCase()).toContain("not on an active");
  });

  it("treats Pulse Index players as active and indexable", () => {
    const status = getPlayerRosterStatus("Victor Wembanyama", {
      inPulse: true,
      hasCurrentTeam: true,
      mentions: 20,
    });
    expect(status.status).toBe("active");
    expect(status.indexable).toBe(true);
  });

  it("noindexes thin one-mention placeholders", () => {
    expect(isIndexablePlayerProfile("One-Off Mention", { mentions: 1 })).toBe(false);
  });
});

describe("distribution tools", () => {
  it("lists embed analytics on the tools directory", () => {
    const hrefs = TOOLS_DIRECTORY.map((t) => t.href);
    expect(hrefs).toContain("/embed-stats");
    expect(hrefs).toContain("/widgets/analytics");
    expect(hrefs).toContain("/widgets");
  });

  it("exposes the same three publisher surfaces for /pro", () => {
    expect(distributionTools().map((t) => t.href)).toEqual([
      "/widgets",
      "/embed-stats",
      "/widgets/analytics",
    ]);
  });
});
