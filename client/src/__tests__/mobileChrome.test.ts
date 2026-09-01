import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("mobile chrome", () => {
  it("does not clip header popovers on the shared 56px row", () => {
    const header = readFileSync(join(srcDir, "components/SiteHeader.tsx"), "utf8");
    expect(header).toMatch(/h-14 min-h-\[56px\]"/);
    expect(header).not.toMatch(/h-14 min-h-\[56px\] overflow-hidden/);
  });

  it("keeps Ask input and page padding on the shared tab-bar clearance", () => {
    const ask = readFileSync(join(srcDir, "pages/AskAI.tsx"), "utf8");
    const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
    expect(css).toContain("--hi-tabbar-clearance");
    expect(css).toMatch(/\.has-mobile-tabbar[\s\S]{0,80}var\(--hi-tabbar-clearance\)/);
    expect(ask).toContain("var(--hi-tabbar-clearance)");
  });
});
