import { test, expect, type Page } from "@playwright/test";

// Closes the manual "do the logos actually render?" gap: boots the real build
// and asserts the visual-identity system holds on the actual page, not jsdom.
//
// Robust online and offline: when the ESPN CDN is reachable the logos stay as
// <img>; when it isn't, TeamLogo's onError swaps each to a crest. Either way a
// team mark is present and no broken <img> is left mounted.

const ESPN_LOGO = /https:\/\/a\.espncdn\.com\/i\/teamlogos\/nba\/500\/[a-z]+\.png/;

function collectPageErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  return errors;
}

test("home page renders the desk without uncaught errors", async ({ page }) => {
  const errors = collectPageErrors(page);
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1").first()).toBeVisible();
  await page.waitForTimeout(800);
  expect(errors, `uncaught page errors:\n${errors.join("\n")}`).toHaveLength(0);
});

test("team marks resolve as a real logo or a crest — never a broken image", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  // Standings render team marks regardless of season/slate. A mark is either a
  // loaded logo <img> or its crest fallback (role=img span).
  const marks = page.locator('img[src*="a.espncdn.com/i/teamlogos"], span[role="img"]');
  await expect(marks.first()).toBeVisible({ timeout: 10_000 });

  // Let any failed logo images run their onError → crest swap.
  await page.waitForTimeout(800);

  // No broken team-logo <img> may remain mounted (the swap must have happened).
  const broken = await page
    .locator('img[src*="a.espncdn.com"]')
    .evaluateAll((els) => els.filter((e) => (e as HTMLImageElement).complete && (e as HTMLImageElement).naturalWidth === 0).length);
  expect(broken, "broken team-logo <img> still mounted").toBe(0);

  // Any logo that did stay mounted must carry a well-formed ESPN logo URL.
  const srcs = await page
    .locator('img[src*="a.espncdn.com/i/teamlogos"]')
    .evaluateAll((els) => els.map((e) => (e as HTMLImageElement).src));
  for (const src of srcs) expect(src).toMatch(ESPN_LOGO);
});

test("a lazy tool route loads and shows team marks", async ({ page }) => {
  await page.goto("/trade-value", { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1").first()).toBeVisible({ timeout: 10_000 });
  const marks = page.locator('img[src*="a.espncdn.com"], span[role="img"]');
  await expect(marks.first()).toBeVisible({ timeout: 10_000 });
});
