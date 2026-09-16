import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

const CHROMELESS_PAGES = new Set([
  "Home.tsx",
  "Embed.tsx",
  "PrintEdition.tsx",
  "PlayoffBracket.tsx",
]);

describe("editorial UX primitives", () => {
  it("keeps the shared light Grok canvas, pills, and soft-radius cards", () => {
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(css).toContain("--hi-bg-page: #f7f7f5");
    expect(css).toContain("--hi-accent: #8ec8f0");
    expect(css).toContain("--hi-chip: #ff7a17");
    expect(css).toContain("--hi-cta: #0a0a0a");
    expect(css).toContain("--hi-pill-radius: 9999px");
    expect(css).toContain("--hi-card-radius: 20px");
    expect(css).toMatch(/\.enhanced-card[\s\S]{0,200}var\(--hi-card-radius/);
    expect(css).toMatch(/\.glass-card[\s\S]{0,200}var\(--hi-card-radius/);
    expect(css).toContain(".desk-hairline");
    expect(css).toContain(".desk-page-main");
    expect(css).toContain("--hi-desk-pad-x: 1.25rem");
    expect(css).toContain("--hi-desk-pad-x-md: 2rem");
    expect(css).toContain(".glass-card.rounded-lg");
    expect(css).toMatch(/\.glass-card\.rounded-lg[\s\S]{0,180}var\(--hi-card-radius/);
    expect(css).toContain(".hi-pill-primary");
    expect(css).toContain(".ask-inflow-cta");
    expect(css).not.toContain("#1ec8f5");
    expect(css).not.toContain("#050D1A");
  });

  it("exposes PageHero and EmptyState on the shared primitive module", () => {
    const ui = readFileSync(join(srcDir, "components/enhanced/EnhancedUi.tsx"), "utf8");
    expect(ui).toContain("export function PageHero");
    expect(ui).toContain("export function EmptyState");
    expect(ui).toContain("export function DeskFilterChip");
    expect(ui).toContain("export function DeskLinkCard");
    expect(ui).toContain("export function DeskSearchField");
    expect(ui).toContain("subtitle");
  });

  it("aligns the tools directory and catalog filters to homepage chrome", () => {
    const tools = readFileSync(join(srcDir, "pages/Tools.tsx"), "utf8");
    const players = readFileSync(join(srcDir, "pages/Players.tsx"), "utf8");
    const archive = readFileSync(join(srcDir, "pages/Archive.tsx"), "utf8");
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(tools).toContain("DeskFilterChip");
    expect(tools).toContain("DeskLinkCard");
    expect(tools).toContain("DeskSearchField");
    expect(tools).toContain("EmptyState");
    expect(tools).toContain("Every Hoops Intel tool");
    expect(players).toContain("DeskFilterChip");
    expect(players).toContain("DeskSearchField");
    expect(players).toContain("var(--hi-accent-text,#146a8c)");
    expect(archive).toContain("DeskFilterChip");
    expect(archive).toContain("desk-field");
    expect(css).toContain(".desk-section-pill");
    expect(css).toContain("min-height: 2.75rem");
    expect(css).toContain(".desk-field:focus-visible");

    const gameCenter = readFileSync(join(srcDir, "pages/GameCenter.tsx"), "utf8");
    expect(gameCenter).toContain('title="Loading matchup"');
    expect(gameCenter).toContain('title="No Game Center match for this ID"');
  });

  it("routes tool pages and the desk through the shared footer", () => {
    const shell = readFileSync(join(srcDir, "components/DeskAppShell.tsx"), "utf8");
    const layout = readFileSync(join(srcDir, "components/ToolPageLayout.tsx"), "utf8");
    const home = readFileSync(join(srcDir, "pages/Home.tsx"), "utf8");
    const tonight = readFileSync(join(srcDir, "pages/Tonight.tsx"), "utf8");
    expect(shell).toContain("SiteFooter");
    expect(shell).toContain("has-mobile-tabbar");
    expect(layout).toContain("DeskAppShell");
    expect(layout).toContain("PageHero");
    expect(shell).toContain("desk-page-main");
    expect(home).toContain("SiteFooter");
    expect(tonight).toContain("EmptyState");
    expect(tonight).toContain("Waiting on");
    expect(tonight).toContain("empty slate until real tip-offs");
    expect(tonight).toContain("DataTrustBadge");
    expect(tonight).toContain("lastUpdatedStamp");
    expect(tonight).toContain("deskStaleNote");
    const injuries = readFileSync(join(srcDir, "pages/InjuryReport.tsx"), "utf8");
    expect(injuries).toContain("lastUpdatedStamp");
    expect(injuries).toContain("deskStaleNote");
    const player = readFileSync(join(srcDir, "pages/Player.tsx"), "utf8");
    expect(player).toContain("lastUpdatedStamp");
    expect(player).toContain("player-roster-banner");
    expect(player).toContain("player-last-updated");
    const players = readFileSync(join(srcDir, "pages/Players.tsx"), "utf8");
    expect(players).toContain("lastUpdatedStamp");
    const draft = readFileSync(join(srcDir, "pages/DraftTracker.tsx"), "utf8");
    expect(draft).toContain("draft-frozen-banner");
    expect(draft).toContain("lastUpdatedStamp");
    const header = readFileSync(join(srcDir, "components/SiteHeader.tsx"), "utf8");
    expect(header).toContain("Daily NBA Intelligence");
    const watch = readFileSync(join(srcDir, "pages/WatchGuide.tsx"), "utf8");
    const podcast = readFileSync(join(srcDir, "pages/PodcastCompanion.tsx"), "utf8");
    expect(watch).toContain("DeskLoopLinks");
    expect(watch).toContain("No games on the board");
    expect(podcast).toContain("DeskLoopLinks");
  });

  it("keeps Ask in-flow in the main column and never as a fixed overlay", () => {
    const ask = readFileSync(join(srcDir, "components/AskHoopsIntel.tsx"), "utf8");
    const desk = readFileSync(join(srcDir, "components/enhanced/EnhancedDesk.tsx"), "utf8");
    const appShell = readFileSync(join(srcDir, "components/DeskAppShell.tsx"), "utf8");
    const editorial = readFileSync(join(srcDir, "components/EditorialShell.tsx"), "utf8");
    const layout = readFileSync(join(srcDir, "components/ToolPageLayout.tsx"), "utf8");
    expect(ask).toContain("export function AskInFlowCta");
    expect(ask).toContain("data-ask-inflow-cta");
    expect(ask).not.toMatch(/data-ask-ai-fab/);
    expect(ask).not.toMatch(/hidden md:flex fixed/);
    expect(desk).toContain("AskInFlowCta");
    expect(appShell).toContain("AskInFlowCta");
    expect(editorial).toContain("DeskAppShell");
    expect(layout).toContain("AskInFlowCta");
    expect(layout).toContain("askInFlow={false}");
  });

  it("puts main-shell pages on EditorialShell or ToolPageLayout", () => {
    const pages = readdirSync(join(srcDir, "pages")).filter((name) => name.endsWith(".tsx"));
    const missing = pages.filter((name) => {
      if (CHROMELESS_PAGES.has(name)) return false;
      const src = readFileSync(join(srcDir, "pages", name), "utf8");
      return !src.includes("EditorialShell") && !src.includes("ToolPageLayout");
    });
    expect(missing).toEqual([]);

    const playoffs = readFileSync(join(srcDir, "components/playoffs/PlayoffsPage.tsx"), "utf8");
    expect(playoffs).toContain("EditorialShell");
    expect(playoffs).toContain("desk-page-main");
    expect(playoffs).toContain("DeskFilterChip");
    expect(playoffs).toContain("PageHero");
    expect(playoffs).toContain("EmptyState");

    const embed = readFileSync(join(srcDir, "pages/Embed.tsx"), "utf8");
    expect(embed).not.toContain("EditorialShell");
    expect(embed).not.toContain("ToolPageLayout");
    expect(embed).not.toContain("AskInFlowCta");
    expect(embed).not.toContain("has-mobile-tabbar");

    const printEdition = readFileSync(join(srcDir, "pages/PrintEdition.tsx"), "utf8");
    expect(printEdition).toContain("print-edition-shell");
    expect(printEdition).toContain("has-mobile-tabbar");
    expect(printEdition).not.toContain("ToolPageLayout");
    expect(printEdition).not.toContain("AskInFlowCta");

    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(css).toMatch(/\.has-mobile-tabbar[\s\S]{0,120}var\(--hi-tabbar-clearance\)/);
    expect(css).not.toMatch(/\.desk-page-main[\s\S]{0,80}--hi-tabbar-clearance/);

    const app = readFileSync(join(srcDir, "App.tsx"), "utf8");
    expect(app).toContain('lazy(() => import("./pages/NotFound"))');
    expect(app).toContain("hi-app-shell--chromeless");
    expect(app).toMatch(/const chromeless = location\.startsWith\("\/embed\/"\)/);
  });

  it("lifts leftover tool pages onto PageHero via ToolPageLayout title", () => {
    const leftoverHeroPages = [
      "Momentum.tsx",
      "LineupIntel.tsx",
      "SeasonPerformance.tsx",
      "TradeValue.tsx",
      "CommunityPulse.tsx",
      "Pro.tsx",
      "PickEm.tsx",
      "TradeSimulator.tsx",
      "ClutchFactor.tsx",
      "DraftTracker.tsx",
      "CoachCorner.tsx",
      "Projections.tsx",
      "Rivals.tsx",
      "RefReports.tsx",
      "HistoryEngine.tsx",
      "Account.tsx",
      "Widgets.tsx",
      "PodcastCompanion.tsx",
      "GuestPulse.tsx",
      "EightyTwoZero.tsx",
      "Badges.tsx",
      "SentimentPulse.tsx",
      "BettingIntel.tsx",
      "WidgetAnalytics.tsx",
      "EmbedPublisherStats.tsx",
      "CreatorQueue.tsx",
    ];

    for (const name of leftoverHeroPages) {
      const src = readFileSync(join(srcDir, "pages", name), "utf8");
      expect(src, name).toContain("ToolPageLayout");
      expect(src, name).toMatch(/title="/);
      expect(src, name).not.toMatch(/<h1[\s\S]{0,160}display-heading/);
      expect(src, name).not.toMatch(/<h1[\s\S]{0,160}editorial-heading/);
    }

    const performance = readFileSync(join(srcDir, "pages/SeasonPerformance.tsx"), "utf8");
    const badges = readFileSync(join(srcDir, "pages/Badges.tsx"), "utf8");
    const embeds = readFileSync(join(srcDir, "pages/EmbedPublisherStats.tsx"), "utf8");
    expect(performance).toContain("DeskFilterChip");
    expect(badges).toContain("DeskFilterChip");
    expect(badges).toContain("EmptyState");
    expect(embeds).toContain("DeskFilterChip");

    const siteHeaderPages = readdirSync(join(srcDir, "pages"))
      .filter((name) => name.endsWith(".tsx"))
      .filter((name) => readFileSync(join(srcDir, "pages", name), "utf8").includes('from "../components/SiteHeader"'));
    expect(siteHeaderPages.sort()).toEqual(["Home.tsx", "PrintEdition.tsx"]);
  });
});
