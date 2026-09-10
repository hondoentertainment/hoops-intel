import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("editorial UX primitives", () => {
  it("keeps the shared card language at 16px with the caliber accent", () => {
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(css).toContain("--hi-accent: #1ec8f5");
    expect(css).toContain("--hi-card-radius: 16px");
    expect(css).toMatch(/\.enhanced-card[\s\S]{0,200}var\(--hi-card-radius/);
    expect(css).toMatch(/\.glass-card[\s\S]{0,200}var\(--hi-card-radius/);
    expect(css).toContain(".desk-hairline");
  });

  it("exposes PageHero and EmptyState on the shared primitive module", () => {
    const ui = readFileSync(join(srcDir, "components/enhanced/EnhancedUi.tsx"), "utf8");
    expect(ui).toContain("export function PageHero");
    expect(ui).toContain("export function EmptyState");
    expect(ui).toContain("subtitle");
  });

  it("routes tool pages and the desk through the shared footer", () => {
    const layout = readFileSync(join(srcDir, "components/ToolPageLayout.tsx"), "utf8");
    const home = readFileSync(join(srcDir, "pages/Home.tsx"), "utf8");
    const tonight = readFileSync(join(srcDir, "pages/Tonight.tsx"), "utf8");
    expect(layout).toContain("SiteFooter");
    expect(layout).toContain("PageHero");
    expect(home).toContain("SiteFooter");
    expect(tonight).toContain("EmptyState");
    expect(tonight).toContain("Waiting on");
    expect(tonight).toContain("empty slate until real tip-offs");
    const header = readFileSync(join(srcDir, "components/SiteHeader.tsx"), "utf8");
    expect(header).toContain("Daily NBA Intelligence");
  });
});
