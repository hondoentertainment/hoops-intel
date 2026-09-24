import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { pulseEdition } from "../lib/pulseData";
import { dailyWheelLabel, productDeskDay } from "../lib/eightyTwoZeroSim";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel: string) => readFileSync(join(srcDir, rel), "utf8");

describe("focused UX polish", () => {
  it("keeps /pro free of credential diagnostics and duplicate checkout buttons", () => {
    const pro = read("pages/Pro.tsx");
    expect(pro).toContain("Checkout temporarily unavailable");
    expect(pro).toContain('data-testid="pro-checkout-unavailable"');
    expect(pro).toContain("Create an account");
    expect(pro).toContain("GuestNotice");
    expect(pro).not.toContain("STRIPE_SECRET_KEY");
    expect(pro).not.toContain("CHECKOUT PENDING OPS");
    expect(pro).not.toContain("pending ops");
    expect(pro).not.toContain("price IDs");
  });

  it("keeps a single Ask prompt set above the composer", () => {
    const ask = read("pages/AskAI.tsx");
    expect(ask.split("<AskPromptChips").length - 1).toBe(1);
    expect(ask).toContain("ask-composer-context");
    expect(ask).not.toContain("Quick prompts");
    expect(ask).toContain("showChips={false}");
  });

  it("labels the injury wire as last-known beside the title", () => {
    const injuries = read("pages/InjuryReport.tsx");
    expect(injuries).toContain("Last-known injury report");
    expect(injuries).toContain('data-testid="injuries-stale-note"');
    expect(injuries).toContain("hi-notice-warn");
    expect(injuries).toContain("Not live");
    expect(injuries).not.toContain('title="Full report"');
  });

  it("wraps the watch-guide factor legend into readable rows", () => {
    const watch = read("pages/WatchGuide.tsx");
    expect(watch).toContain('data-testid="watch-factor-legend"');
    expect(watch).toContain("grid-cols-3");
    expect(watch).toContain("sm:grid-cols-5");
    expect(watch).toContain("Entertainment");
    expect(watch).not.toContain("text-[9px]");
  });

  it("uses the product desk date for the Daily Wheel label", () => {
    const day = productDeskDay(pulseEdition.date);
    const short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][day.month - 1];
    expect(dailyWheelLabel()).toBe(`${short} ${day.day}`);
    expect(read("pages/EightyTwoZero.tsx")).toContain("dailyWheelLabel()");
  });
});
