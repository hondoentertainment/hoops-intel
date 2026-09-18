import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("mobile chrome", () => {
  it("sizes the tab bar to the shared height token", () => {
    const nav = readFileSync(join(srcDir, "components/MobileBottomNav.tsx"), "utf8");
    expect(nav).toContain("var(--hi-tabbar-height)");
    expect(nav).toContain("h-16");
    expect(nav).not.toMatch(/pt-2\.5 pb-4/);
  });

  it("does not clip header popovers on the shared 56px row", () => {
    const header = readFileSync(join(srcDir, "components/SiteHeader.tsx"), "utf8");
    expect(header).toMatch(/h-14 min-h-\[56px\]/);
    expect(header).not.toMatch(/h-14 min-h-\[56px\] overflow-hidden/);
  });

  it("keeps a compact account control visible on the 390px header", () => {
    const header = readFileSync(join(srcDir, "components/SiteHeader.tsx"), "utf8");
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(header).toContain('data-testid="header-account-control"');
    expect(header).toContain("header-account-control md:hidden");
    expect(header).toContain("hidden sm:contents");
    expect(css).toContain(".hi-pill:not(.hidden)");
    expect(css).toContain(".hi-pill-primary:not(.hidden)");
    expect(css).not.toMatch(/\.hi-pill,\s*\n\.hi-pill-primary,\s*\n\.ask-inflow-cta \{\s*\n\s*display: inline-flex/);
  });

  it("keeps Ask input and page padding on the shared tab-bar clearance", () => {
    const ask = readFileSync(join(srcDir, "pages/AskAI.tsx"), "utf8");
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    const app = readFileSync(join(srcDir, "App.tsx"), "utf8");
    expect(css).toContain("--hi-tabbar-clearance");
    expect(css).toContain("--hi-tabbar-height");
    expect(css).toContain("--hi-header-offset");
    expect(css).toMatch(/html\s*\{[\s\S]{0,80}overflow-y:\s*auto/);
    expect(css).not.toMatch(/html,\s*body\s*\{[\s\S]{0,80}overflow-y:\s*auto/);
    expect(css).toMatch(/\.has-mobile-tabbar[\s\S]{0,120}var\(--hi-tabbar-clearance\)/);
    expect(css).toMatch(/\.hi-app-shell:not\(\.hi-app-shell--chromeless\)[\s\S]{0,80}var\(--hi-tabbar-clearance\)/);
    expect(app).toContain("hi-app-shell");
    expect(app).toContain("hi-app-scroll");
    expect(css).toContain(".hi-app-scroll");
    expect(css).toMatch(/\.hi-app-scroll[\s\S]{0,120}overflow-y:\s*auto/);
    expect(ask).toContain("ask-page-composer");
    expect(css).toContain(".ask-page-composer");
    expect(css).toContain(".desk-page-main");
    expect(css).not.toMatch(/\.desk-page-main[\s\S]{0,80}--hi-tabbar-clearance/);
    const layout = readFileSync(join(srcDir, "components/ToolPageLayout.tsx"), "utf8");
    const appShell = readFileSync(join(srcDir, "components/DeskAppShell.tsx"), "utf8");
    expect(layout).toContain("DeskAppShell");
    expect(appShell).toContain("has-mobile-tabbar");
  });

  it("cannot ship a main-shell page without the shared bottom inset carrier", () => {
    const pagesDir = join(srcDir, "pages");
    const pages = readdirSync(pagesDir).filter((name) => name.endsWith(".tsx"));
    const appShell = readFileSync(join(srcDir, "components/DeskAppShell.tsx"), "utf8");
    const playoffs = readFileSync(join(srcDir, "components/playoffs/PlayoffsPage.tsx"), "utf8");
    expect(appShell).toContain("has-mobile-tabbar");
    expect(playoffs).toContain("EditorialShell");
    expect(playoffs).toContain("var(--hi-header-offset)");

    const missing = pages.filter((name) => {
      if (name === "Embed.tsx") return false;
      const src = readFileSync(join(pagesDir, name), "utf8");
      if (src.includes("has-mobile-tabbar")) return false;
      if (src.includes("EditorialShell") || src.includes("ToolPageLayout")) return false;
      if (src.includes("PlayoffsPage")) return false;
      return true;
    });
    expect(missing).toEqual([]);

    const embed = readFileSync(join(pagesDir, "Embed.tsx"), "utf8");
    expect(embed).not.toContain("has-mobile-tabbar");
    expect(embed).not.toContain("AskInFlowCta");
    expect(embed).not.toContain("EditorialShell");
    expect(embed).not.toContain("ToolPageLayout");

    const print = readFileSync(join(pagesDir, "PrintEdition.tsx"), "utf8");
    expect(print).toContain("has-mobile-tabbar");
    expect(print).toContain("print-edition-shell");

    const home = readFileSync(join(pagesDir, "Home.tsx"), "utf8");
    expect(home).toContain("has-mobile-tabbar");

    const app = readFileSync(join(srcDir, "App.tsx"), "utf8");
    expect(app).toContain("hi-app-shell--chromeless");
    expect(app).toContain("hi-app-scroll");
    expect(app).toContain('location.startsWith("/embed/")');
  });
});
