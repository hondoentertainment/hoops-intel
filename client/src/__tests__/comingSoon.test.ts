import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { comingSoonCopy, isRawConfigError, publicFeatureError } from "../lib/comingSoon";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("coming soon feature gates", () => {
  it("replaces key diagnostics and leaves real failures alone", () => {
    expect(isRawConfigError("API key not configured")).toBe(true);
    expect(isRawConfigError("Stripe checkout is not configured for this deployment.")).toBe(true);
    expect(isRawConfigError("Web push is not configured (missing VITE_VAPID_PUBLIC_KEY).")).toBe(true);
    expect(isRawConfigError("Server misconfiguration")).toBe(true);
    expect(isRawConfigError("Required env: STRIPE_SECRET_KEY.")).toBe(true);
    expect(isRawConfigError("Enter a valid email address.")).toBe(false);
    expect(isRawConfigError("Server error — try again in a minute.")).toBe(false);

    expect(publicFeatureError("ask", "API key not configured")).toBe(comingSoonCopy("ask"));
    expect(publicFeatureError("pro", "Stripe checkout is not configured for this deployment.")).toBe(
      comingSoonCopy("pro"),
    );
    expect(publicFeatureError("push", "Web push is not configured (missing VITE_VAPID_PUBLIC_KEY).")).toBe(
      comingSoonCopy("push"),
    );
    expect(publicFeatureError("email", "Server misconfiguration")).toBe(comingSoonCopy("email"));
    expect(publicFeatureError("email", "Enter a valid email address.")).toBe("Enter a valid email address.");
  });

  it("keeps Ask, Pro, push, and email pages free of raw key errors", () => {
    const ask = read("client/src/components/AskHoopsIntel.tsx");
    const pro = read("client/src/pages/Pro.tsx");
    const account = read("client/src/pages/Account.tsx");
    const digest = read("client/src/lib/subscribeDigest.ts");
    for (const src of [ask, pro, account, digest]) {
      expect(src).not.toContain("API key not configured");
      expect(src).not.toContain("STRIPE_SECRET_KEY");
      expect(src).not.toContain("VITE_VAPID_PUBLIC_KEY");
    }
    expect(pro).toContain("Hoops Intel Pro is coming soon");
    expect(account).toContain("Browser alerts are coming soon");
    expect(ask).toContain("ask-coming-soon");
  });
});
