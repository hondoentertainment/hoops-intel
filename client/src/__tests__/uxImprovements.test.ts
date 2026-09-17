import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { campAskChips } from "../lib/campDesk";
import { toolUpdatedLabel } from "../lib/dataTrust";
import { contextualAskChips } from "../lib/askShortcuts";
import { gamePreviews } from "../lib/pulseData";
import { buildPlayerToolLinks, matchesPlayerQuery } from "../lib/playerToolLinks";
import { deskRailTools } from "../lib/siteNav";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

function src(rel: string) {
  return readFileSync(join(srcDir, rel), "utf8");
}

describe("discovery / IA", () => {
  it("features camp-live tools on the homepage rail and /tools hub", () => {
    const hrefs = deskRailTools().map((t) => t.href);
    expect(hrefs).toEqual(["/82-0", "/clutch", "/draft", "/pick-em", "/badges", "/trade-simulator"]);
    expect(src("components/enhanced/EnhancedDesk.tsx")).toContain('id="desk-rail"');
    expect(src("components/enhanced/EnhancedDesk.tsx")).toContain("DeskLinkCard");
    expect(src("pages/Tools.tsx")).toContain("FEATURED_TOOLS");
    expect(src("pages/Tools.tsx")).toContain("TOOL_CATEGORY_LABELS");
    expect(src("lib/siteNav.ts")).toContain('play: "Play & compete"');
  });
});

describe("player tool cross-links", () => {
  it("prefills compare, trade value, projections, and injuries", () => {
    const links = buildPlayerToolLinks("Victor Wembanyama", "SAS");
    expect(links.map((l) => l.href)).toEqual([
      "/compare-players?a=Victor%20Wembanyama",
      "/trade-value?player=Victor%20Wembanyama",
      "/projections?team=SAS",
      "/injuries?player=Victor%20Wembanyama",
    ]);
    expect(matchesPlayerQuery("victor-wembanyama", "Victor Wembanyama")).toBe(true);
    expect(src("pages/Player.tsx")).toContain("PlayerToolLinks");
    expect(src("pages/PlayerCompare.tsx")).toContain("readQueryParam");
    expect(src("pages/TradeValue.tsx")).toContain("tvi-");
    expect(src("pages/Projections.tsx")).toContain("proj-");
    expect(src("pages/InjuryReport.tsx")).toContain("playerQuery");
  });
});

describe("guest honesty", () => {
  it("uses GuestNotice on badges, pick-em, pro, and my-pulse", () => {
    for (const page of ["pages/Badges.tsx", "pages/PickEm.tsx", "pages/Pro.tsx", "pages/MyPulse.tsx"]) {
      expect(src(page), page).toContain("GuestNotice");
      expect(src(page), page).toContain("hasLocalAuthToken");
    }
    expect(src("components/GuestNotice.tsx")).toContain("data-testid=\"guest-notice\"");
    expect(src("components/GuestNotice.tsx")).toContain("Sign in");
  });
});

describe("camp desk empty pattern", () => {
  it("shares CampDeskEmpty on Tonight, Injuries, Watch Guide, and Pick 'Em", () => {
    expect(src("components/enhanced/EnhancedUi.tsx")).toContain("export function CampDeskEmpty");
    expect(src("pages/Tonight.tsx")).toContain("CampDeskEmpty");
    expect(src("pages/InjuryReport.tsx")).toContain("CampDeskEmpty");
    expect(src("pages/WatchGuide.tsx")).toContain("CampDeskEmpty");
    expect(src("pages/PickEm.tsx")).toContain("CampDeskEmpty");
    expect(src("pages/Tonight.tsx")).not.toContain("CAMP_OPENER");
  });
});

describe("freshness signals", () => {
  it("stamps watch-guide, podcast, and major labs with real dates", () => {
    expect(toolUpdatedLabel("September 16, 2026")).toBe("Updated September 16, 2026");
    expect(toolUpdatedLabel("")).toMatch(/^Last updated:/);
    expect(src("pages/WatchGuide.tsx")).toContain("toolUpdatedLabel");
    expect(src("pages/PodcastCompanion.tsx")).toContain("toolUpdatedLabel");
    expect(src("pages/TradeValue.tsx")).toContain("heroMeta");
    expect(src("pages/Projections.tsx")).toContain("heroMeta");
    expect(src("pages/ClutchFactor.tsx")).toContain("heroMeta");
    expect(src("pages/DraftTracker.tsx")).toContain("heroMeta");
    expect(src("pages/TradeSimulator.tsx")).toContain("heroMeta");
  });
});

describe("light-theme a11y", () => {
  it("keeps skip link, focus rings, and table header contrast tokens", () => {
    const css = src("styles/index.css");
    expect(css).toContain(".skip-to-content:focus-visible");
    expect(css).toContain(".desk-section-pill:focus-visible");
    expect(css).toContain(".hi-th");
    expect(css).toContain("--hi-text-secondary: #5c5c5a");
    expect(css).not.toContain("#050D1A");
    expect(src("App.tsx")).toContain("SkipToContent");
    expect(src("pages/Projections.tsx")).toContain("hi-th");
    expect(src("pages/PickEm.tsx")).toContain("hi-th");
  });
});

describe("Ask depth", () => {
  it("uses camp chips when the slate is empty and readable light bubbles", () => {
    expect(gamePreviews).toEqual([]);
    expect(contextualAskChips()).toEqual(campAskChips().slice(0, 4));
    const ask = src("components/AskHoopsIntel.tsx");
    expect(ask).toContain("DeskFilterChip");
    expect(ask).toContain("ask-msg-user");
    expect(ask).not.toContain('className="text-white font-semibold');
    expect(src("pages/AskAI.tsx")).toContain("ask-composer-context");
    expect(src("pages/AskAI.tsx")).toContain("AskPromptChips");
    expect(src("styles/index.css")).toContain(".ask-msg-user");
    expect(src("styles/index.css")).toContain(".ask-composer-context");
  });
});
