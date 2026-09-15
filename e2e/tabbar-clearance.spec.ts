import { test, expect, type Page } from "@playwright/test";

const PHONE = { width: 390, height: 844 };

async function settle(page: Page) {
  await page.waitForLoadState("domcontentloaded");
  await expect(page.locator(".has-mobile-tabbar, .hi-app-shell--chromeless").first()).toBeAttached({
    timeout: 10_000,
  });
  await expect(page.locator("h1").first()).toBeAttached({ timeout: 10_000 });
}

async function scrollDocumentEnd(page: Page) {
  const end = page.locator("footer, .print-edition-shell article > :last-child, [data-ask-inflow-cta]").last();
  await expect(end).toBeAttached({ timeout: 10_000 });
  await end.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
}

async function chromeMetrics(page: Page) {
  return page.evaluate(() => {
    const nav = document.querySelector(".mobile-bottom-nav");
    const carrier = document.querySelector(".has-mobile-tabbar");
    const footer = document.querySelector("footer");
    const ask = document.querySelector("[data-ask-inflow-cta]");
    const lastCard = [...document.querySelectorAll(".enhanced-card")].at(-1) ?? null;
    const packetEnd = document.querySelector(".print-edition-shell article > :last-child");
    const askInput = document.querySelector(".ask-page-composer input, .ask-page-composer textarea, .ask-page-composer button");

    const pick = (el: Element | null) => {
      if (!el) return null;
      const box = el.getBoundingClientRect();
      return { top: box.top, bottom: box.bottom };
    };

    return {
      navTop: nav?.getBoundingClientRect().top ?? null,
      carrierPad: carrier ? getComputedStyle(carrier).paddingBottom : null,
      footer: pick(footer),
      ask: pick(ask),
      lastCard: pick(lastCard),
      packet: pick(packetEnd),
      composer: pick(askInput),
      chromeless: Boolean(document.querySelector(".hi-app-shell--chromeless")),
    };
  });
}

test.describe("tab-bar clearance @ 390px", () => {
  test.use({ viewport: PHONE });

  for (const path of ["/", "/injuries", "/pro", "/print-edition"]) {
    test(`${path} last content stays above the tab bar`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await settle(page);
      await scrollDocumentEnd(page);
      const m = await chromeMetrics(page);

      expect(m.navTop, `${path} missing tab bar`).toBeTruthy();
      expect(m.carrierPad, `${path} missing inset carrier`).toMatch(/px$/);
      expect(parseFloat(m.carrierPad ?? "0"), `${path} inset collapsed`).toBeGreaterThan(80);

      const bottoms = [m.footer?.bottom, m.ask?.bottom, m.packet?.bottom].filter(
        (n): n is number => typeof n === "number" && n > 0,
      );
      expect(bottoms.length, `${path} had no measurable last content`).toBeGreaterThan(0);
      const lastBottom = Math.max(...bottoms);
      expect(lastBottom, `${path} last content under tab bar (bottom ${lastBottom} vs nav ${m.navTop})`).toBeLessThanOrEqual(
        (m.navTop as number) + 1,
      );
    });
  }

  test("/ask composer sits above the tab bar", async ({ page }) => {
    await page.goto("/ask", { waitUntil: "domcontentloaded" });
    await settle(page);
    const m = await chromeMetrics(page);
    expect(m.navTop).toBeTruthy();
    expect(m.composer?.bottom, "ask composer missing").toBeTruthy();
    expect(m.composer!.bottom).toBeLessThanOrEqual((m.navTop as number) + 1);
  });

  test("/embed/pulse stays chromeless", async ({ page }) => {
    await page.goto("/embed/pulse", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".mobile-bottom-nav")).toHaveCount(0);
    await expect(page.locator("[data-ask-inflow-cta]")).toHaveCount(0);
    await expect(page.locator(".hi-app-shell--chromeless")).toHaveCount(1);
  });
});
