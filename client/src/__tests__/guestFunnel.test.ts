import { describe, expect, it } from "vitest";
import { guestFunnelCopy, signedInNextCopy, FUNNEL_PRICING, FUNNEL_STEPS } from "../lib/guestAuth";

describe("guest → account → Pro funnel", () => {
  it("keeps a three-step path with pricing on every guest surface", () => {
    expect(FUNNEL_STEPS.map((s) => s.id)).toEqual(["guest", "account", "pro"]);
    expect(FUNNEL_PRICING).toBe("$5/month or $40/year");
    for (const page of ["account", "pro", "badges", "pick-em", "my-pulse"] as const) {
      const guest = guestFunnelCopy(page);
      expect(guest.body).toContain(FUNNEL_PRICING);
      expect(guest.body.toLowerCase()).toMatch(/sign in|account/);
      expect(guest.body.toLowerCase()).not.toMatch(/blank and broken|locked out$/);
      const next = signedInNextCopy(page);
      expect(next.title.toLowerCase()).toMatch(/pro|plan/);
      expect(next.body).toContain(FUNNEL_PRICING);
    }
  });
});
