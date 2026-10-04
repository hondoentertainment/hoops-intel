import { describe, expect, it } from "vitest";
import { distributionTools, TOOLS_DIRECTORY } from "../lib/siteNav";
import {
  getPlayerRosterStatus,
  isCurrentNbaRosterCard,
  isIndexablePlayerProfile,
  isProspectPlayerName,
  playerCoverageEmptyState,
  playerHasSubstantiveDeskCard,
  playerLiveEmptyState,
  playerProfileFrame,
  profileSeoIndexable,
} from "../lib/playerRosterStatus";

describe("playerRosterStatus", () => {
  it("drops executives and media voices from the archive index", () => {
    for (const name of ["David Stern", "Billy Hunter", "Charles Barkley"]) {
      const status = getPlayerRosterStatus(name, { mentions: 10 });
      expect(status.indexable).toBe(false);
      expect(profileSeoIndexable(name, { mentions: 10, substantive: true })).toBe(false);
    }
  });

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

  it("frames archive-only names as not current NBA roster cards", () => {
    const status = getPlayerRosterStatus("Amen Thompson", { mentions: 4 });
    expect(status.status).toBe("inactive");
    expect(status.label).toBe("Archive only");
    expect(status.indexable).toBe(true);
    expect(status.detail.toLowerCase()).toContain("not a current nba roster");
    expect(isCurrentNbaRosterCard({ inPulse: false, hasCurrentTeam: false })).toBe(false);
  });

  it("frames known prospects separately from active NBA cards", () => {
    expect(isProspectPlayerName("VJ Edgecombe")).toBe(true);
    const status = getPlayerRosterStatus("VJ Edgecombe", { mentions: 4 });
    expect(status.status).toBe("prospect");
    expect(status.label).toBe("Prospect archive");
    expect(status.indexable).toBe(true);
    expect(status.detail.toLowerCase()).toContain("not a current nba roster card");
    expect(isCurrentNbaRosterCard({ inPulse: false, hasCurrentTeam: false })).toBe(false);

    const desk = getPlayerRosterStatus("VJ Edgecombe", { inPulse: true, hasCurrentTeam: true, mentions: 4 });
    expect(desk.status).toBe("active");
  });

  it("uses an availability empty state when a live desk player has no Pulse line", () => {
    const injured = playerLiveEmptyState("Kawhi Leonard", {
      status: "Out",
      injury: "Right knee",
    });
    expect(injured.kicker).toBe("Availability");
    expect(injured.pill).toBe("OUT");
    expect(injured.title).toMatch(/no Pulse counting line/i);
    expect(injured.body.toLowerCase()).toContain("not inventing counting stats");

    const deskOnly = playerLiveEmptyState("Joel Embiid");
    expect(deskOnly.pill).toBe("NO PULSE LINE");
    expect(deskOnly.title).toMatch(/Joel Embiid/);
  });

  it("uses honest empty-state copy for prospects and retired names", () => {
    const vj = playerCoverageEmptyState(
      "VJ Edgecombe",
      getPlayerRosterStatus("VJ Edgecombe", { mentions: 4 }),
    );
    expect(vj.title).toMatch(/not a current NBA roster card/);
    expect(vj.pill).toBe("PROSPECT");
    expect(vj.body.toLowerCase()).toContain("not assigning a current team");

    const cp = playerCoverageEmptyState(
      "Chris Paul",
      getPlayerRosterStatus("Chris Paul", { mentions: 3 }),
    );
    expect(cp.pill).toBe("RETIRED");
    expect(cp.title.toLowerCase()).toContain("not on an active nba roster");
  });

  it("keeps thin archive names browsable but off the SEO bar until a pulse card exists", () => {
    expect(
      playerHasSubstantiveDeskCard({
        keyStats: "32.8 PPG · 12.1 RPG",
        note: "Forty-two compound mornings.",
        indexScore: 99,
      }),
    ).toBe(true);
    expect(playerHasSubstantiveDeskCard({ keyStats: "", note: "Context", indexScore: 10 })).toBe(false);
    expect(playerHasSubstantiveDeskCard(null)).toBe(false);

    expect(profileSeoIndexable("Amen Thompson", { mentions: 4 })).toBe(false);
    expect(profileSeoIndexable("VJ Edgecombe", { mentions: 4 })).toBe(false);
    expect(profileSeoIndexable("Keyonte George", { mentions: 3, substantive: false })).toBe(false);
    expect(profileSeoIndexable("Chris Paul", { mentions: 3 })).toBe(true);
    expect(
      profileSeoIndexable("Victor Wembanyama", { inPulse: true, hasCurrentTeam: true, mentions: 20, substantive: true }),
    ).toBe(true);
    expect(getPlayerRosterStatus("Amen Thompson", { mentions: 4 }).indexable).toBe(true);
  });

  it("hides current-team chrome on prospect and archive frames", () => {
    const prospect = playerProfileFrame(
      getPlayerRosterStatus("VJ Edgecombe", { mentions: 4 }),
      ["PHI"],
    );
    expect(prospect.live).toBe(false);
    expect(prospect.showTeamLinks).toBe(false);
    expect(prospect.jsonLdAffiliation).toBe(false);
    expect(prospect.shareAsLiveCard).toBe(false);
    expect(prospect.teamValue).toBe("Not on a current NBA roster");

    const active = playerProfileFrame(
      getPlayerRosterStatus("Victor Wembanyama", { inPulse: true, hasCurrentTeam: true }),
      ["SAS"],
    );
    expect(active.live).toBe(true);
    expect(active.showTeamLinks).toBe(true);
    expect(active.teamValue).toBe("SAS");
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
