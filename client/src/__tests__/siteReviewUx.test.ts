import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { assessContentFreshness, DESK_CONTENT_SLA_DAYS, freshnessHeroMeta } from "../lib/dataTrust";
import { CLEAR_AVAILABILITY_LABEL, playerAvailability } from "../lib/playerAvailability";
import { injuryUpdates, pulseEdition, pulseIndex } from "../lib/pulseData";
import { isPageLevelSeoRoute, playerProfileCanonicalUrl, resolveRouteSeo, toMetaTags } from "../lib/seoConfig";
import { FOR_FUN_PATHS, FOOTER_QUICK_LINKS, isForFunRoute, mainNavLinks } from "../lib/siteNav";
import { tonightPlayerLinks } from "../lib/tonightPlayerLinks";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

function src(rel: string) {
  return readFileSync(join(srcDir, rel), "utf8");
}

const NOW = new Date("2026-09-23T18:00:00-07:00");

describe("player availability", () => {
  it("uses the injury wire when a row exists and does not invent one otherwise", () => {
    const wired = injuryUpdates[0]!;
    const listed = playerAvailability(wired.player, true);
    expect(listed?.kind).toBe("listed");
    expect(listed?.label).toBe(wired.status);
    expect(listed?.injury).toBe(wired.injury);
    expect(listed?.asOf).toBe(pulseEdition.date);

    const murray = playerAvailability("Jamal Murray", true);
    expect(murray?.kind).toBe("listed");
    expect(murray?.label).toBe("Day-to-Day");

    const wemby = playerAvailability("Victor Wembanyama", true);
    expect(wemby?.kind).toBe("listed");
    expect(wemby?.label).toBe("Probable");

    const clearName = pulseIndex.find(
      (row) => !injuryUpdates.some((injury) => injury.player === row.player),
    )?.player;
    expect(clearName).toBeTruthy();
    const clear = playerAvailability(clearName!, true);
    expect(clear).toEqual({
      kind: "clear",
      label: CLEAR_AVAILABILITY_LABEL,
      asOf: pulseEdition.date,
    });

    expect(playerAvailability("Kawhi Leonard", false)).toBeNull();
    expect(playerAvailability("Chris Paul", false)).toBeNull();
  });

  it("renders the badge, as-of stamp, and a self canonical on the profile", () => {
    const player = src("pages/Player.tsx");
    expect(player).toContain("playerAvailability");
    expect(player).toContain("player-injury-badge");
    expect(player).toContain("player-availability-clear");
    expect(player).toContain("player-availability-as-of");
    expect(player).toContain("playerProfileCanonicalUrl");
    expect(player).toContain("canonicalUrl: profileCanonical");
    expect(player).toContain("ogUrl: profileCanonical");
  });
});

describe("player canonicals", () => {
  it("keeps hubs and profiles on different URLs", () => {
    const players = toMetaTags(resolveRouteSeo("/players")!);
    const compare = toMetaTags(resolveRouteSeo("/compare-players")!);
    const profile = playerProfileCanonicalUrl("kawhi-leonard");
    expect(players.canonicalUrl).toBe("https://hoopsintel.net/players");
    expect(compare.canonicalUrl).toBe("https://hoopsintel.net/compare-players");
    expect(profile).toBe("https://hoopsintel.net/player/kawhi-leonard");
    expect(new Set([players.canonicalUrl, compare.canonicalUrl, profile]).size).toBe(3);
    expect(playerProfileCanonicalUrl("Kawhi-Leonard")).toBe(profile);
    expect(isPageLevelSeoRoute("/player/jamal-murray")).toBe(true);
    expect(resolveRouteSeo("/player/jamal-murray")).toBeNull();
  });

  it("sets the profile canonical in the static shell before React", () => {
    const html = readFileSync(join(repoRoot, "client/index.html"), "utf8");
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('meta[property="og:url"]');
    expect(html).toContain("/player/");
  });
});

describe("for fun routes", () => {
  it("labels novelty pages with the shared chip", () => {
    expect(FOR_FUN_PATHS).toEqual(["/82-0", "/pick-em", "/badges", "/trivia", "/trade-simulator"]);
    expect(isForFunRoute("/pick-em?board=1")).toBe(true);
    expect(isForFunRoute("/injuries")).toBe(false);
    expect(src("components/enhanced/EnhancedUi.tsx")).toContain("export function ForFunChip");
    expect(src("components/enhanced/EnhancedUi.tsx")).toContain('data-testid="for-fun-chip"');
    expect(src("components/ToolPageLayout.tsx")).toContain("ForFunChip");
    expect(src("components/ToolPageLayout.tsx")).toContain("isForFunRoute");
    expect(src("pages/PickEm.tsx")).toContain("ForFunChip");
  });
});

describe("tonight player links", () => {
  it("links real profiles for a slate game and skips unknown teams", () => {
    const links = tonightPlayerLinks({
      awayTeam: "SAS",
      homeTeam: "DEN",
      keyMatchup: "Victor Wembanyama vs Nikola Jokic",
      storyline: "Jamal Murray's knee is the variable for Denver.",
    });
    expect(links.length).toBeGreaterThanOrEqual(3);
    expect(links.length).toBeLessThanOrEqual(5);
    expect(links.map((link) => link.name).slice(0, 2)).toEqual(["Victor Wembanyama", "Nikola Jokic"]);
    expect(links.some((link) => link.name === "Jamal Murray")).toBe(true);
    expect(new Set(links.map((link) => link.href)).size).toBe(links.length);
    for (const link of links) {
      expect(link.href.startsWith("/player/")).toBe(true);
    }
    expect(tonightPlayerLinks({ awayTeam: "ZZZ", homeTeam: "YYY" })).toEqual([]);
    expect(src("pages/Tonight.tsx")).toContain("tonight-player-links");
    expect(src("pages/Tonight.tsx")).toContain("TonightPlayerLinks");
  });
});

describe("site-review leftover discoverability", () => {
  it("deep-links a compare CTA from the player profile", () => {
    const player = src("pages/Player.tsx");
    expect(player).toContain('data-testid="player-compare-cta"');
    expect(player).toContain("/compare-players?a=");
    expect(player).toContain("encodeURIComponent(player.name)");
  });

  it("surfaces Pick 'Em and Badges from My Pulse, the More menu, and the footer", () => {
    const pulse = src("pages/MyPulse.tsx");
    expect(pulse).toContain('data-testid="my-pulse-play-links"');
    expect(pulse).toContain('href="/pick-em"');
    expect(pulse).toContain('href="/badges"');
    expect(mainNavLinks().map((link) => link.href)).toEqual(expect.arrayContaining(["/pick-em", "/badges"]));
    expect(FOOTER_QUICK_LINKS.map((link) => link.href)).toEqual(expect.arrayContaining(["/pick-em", "/badges"]));
  });

  it("frames publisher snapshots without operations diagnostics", () => {
    const frame = src("components/PublisherSnapshotFrame.tsx");
    expect(frame).toContain('data-testid="publisher-snapshot-frame"');
    expect(frame).toContain('href="/widgets"');
    expect(frame).toContain('href="/pro"');
    expect(frame).toContain('href="/guest-pulse"');
    for (const page of ["pages/EmbedPublisherStats.tsx", "pages/WidgetAnalytics.tsx"]) {
      const text = src(page);
      expect(text).toContain("PublisherSnapshotFrame");
      expect(text).not.toMatch(/SUPABASE_URL|service key|embed_agg_|RPC summary|RPCs are migrated/);
    }
  });
});

describe("companion freshness SLA", () => {
  it(`treats content older than ${DESK_CONTENT_SLA_DAYS} days as outdated`, () => {
    expect(assessContentFreshness("2026-09-23", NOW).state).toBe("current");
    expect(assessContentFreshness("2026-09-16", NOW).state).toBe("current");
    expect(assessContentFreshness("2026-09-15", NOW).state).toBe("stale");
    expect(assessContentFreshness("2026-08-25", NOW).ageDays).toBe(29);
    expect(assessContentFreshness("", NOW).state).toBe("unknown");
    expect(assessContentFreshness("not-a-date", NOW).state).toBe("unknown");

    expect(freshnessHeroMeta("2026-09-23", "September 23, 2026", NOW)).toBe("Last updated: September 23, 2026");
    expect(freshnessHeroMeta("2026-08-25", "June 9, 2026", NOW)).toBe("May be outdated");
    expect(freshnessHeroMeta("not-a-date", "June 9, 2026", NOW)).toBeNull();

    expect(src("pages/WatchGuide.tsx")).toContain("freshnessHeroMeta");
    expect(src("pages/WatchGuide.tsx")).toContain("content-may-be-outdated");
    expect(src("pages/PodcastCompanion.tsx")).toContain("freshnessHeroMeta");
    expect(src("pages/PodcastCompanion.tsx")).toContain("content-may-be-outdated");
    expect(src("pages/PodcastCompanion.tsx")).not.toContain("toolUpdatedLabel");
    expect(src("pages/WatchGuide.tsx")).not.toContain("toolUpdatedLabel");
  });
});
