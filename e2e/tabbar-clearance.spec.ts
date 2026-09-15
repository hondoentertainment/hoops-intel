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
    const scroller = document.querySelector(".hi-app-scroll");
    const footer = document.querySelector("footer");
    const ask = document.querySelector("[data-ask-inflow-cta]");
    const lastCard = [...document.querySelectorAll(".enhanced-card")].at(-1) ?? null;
    const packetEnd = document.querySelector(".print-edition-shell article > :last-child");
    const askInput = document.querySelector(".ask-page-composer input, .ask-page-composer textarea, .ask-page-composer button");
    const navTop = nav?.getBoundingClientRect().top ?? null;

    const pick = (el: Element | null) => {
      if (!el) return null;
      const box = el.getBoundingClientRect();
      return { top: box.top, bottom: box.bottom };
    };

    const scrollportBottom = scroller?.getBoundingClientRect().bottom ?? navTop;
    const visibleFloor = navTop == null ? scrollportBottom : Math.min(navTop, scrollportBottom ?? navTop);
    const clipped = [...document.querySelectorAll("main h1, main .enhanced-card, main [data-ask-inflow-cta], main button")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8) return false;
        if (visibleFloor == null) return false;
        const visibleBottom = Math.min(r.bottom, scrollportBottom ?? r.bottom);
        return r.top < visibleFloor - 1 && visibleBottom > visibleFloor + 2;
      })
      .map((el) => (el.textContent || el.tagName).trim().slice(0, 48));

    return {
      navTop,
      scrollportBottom: scroller?.getBoundingClientRect().bottom ?? null,
      scrollerOverflow: scroller ? getComputedStyle(scroller).overflowY : null,
      footer: pick(footer),
      ask: pick(ask),
      lastCard: pick(lastCard),
      packet: pick(packetEnd),
      composer: pick(askInput),
      clipped,
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
      expect(m.scrollerOverflow, `${path} missing safe-stack scroller`).toMatch(/auto|scroll/);

      const bottoms = [m.footer?.bottom, m.ask?.bottom, m.packet?.bottom].filter(
        (n): n is number => typeof n === "number" && n > 0,
      );
      expect(bottoms.length, `${path} had no measurable last content`).toBeGreaterThan(0);
      const lastBottom = Math.max(...bottoms);
      const gap = path === "/print-edition" ? 24 : 1;
      expect(lastBottom, `${path} last content under tab bar (bottom ${lastBottom} vs nav ${m.navTop})`).toBeLessThanOrEqual(
        (m.navTop as number) - gap + 1,
      );
    });
  }

  for (const path of ["/injuries", "/pro"]) {
    test(`${path} first paint does not clip cards or CTAs under the tab bar`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await settle(page);
      const m = await chromeMetrics(page);
      expect(m.navTop, `${path} missing tab bar`).toBeTruthy();
      expect(m.scrollportBottom, `${path} missing scrollport`).toBeTruthy();
      expect(
        m.scrollportBottom as number,
        `${path} scrollport under tab bar (${m.scrollportBottom} vs nav ${m.navTop})`,
      ).toBeLessThanOrEqual((m.navTop as number) + 1);
      expect(m.clipped, `${path} first-paint overlap: ${m.clipped.join(" | ")}`).toEqual([]);
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
