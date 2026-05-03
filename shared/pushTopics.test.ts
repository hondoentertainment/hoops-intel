import { describe, expect, it } from "vitest";
import { filterRowsForTopic, rivalPairMatches, type PushPrefsRow } from "./pushTopics";

describe("pushTopics filtering", () => {
  const base: PushPrefsRow = {
    endpoint: "https://example.com/ep",
    p256dh: "x",
    auth_key: "y",
    notify_topics: ["fantasy", "injury"],
  };

  it("drops rows missing topic entitlement", () => {
    expect(filterRowsForTopic([base], { topic: "rival", rivalAway: "LAL", rivalHome: "BOS" })).toHaveLength(0);
  });

  it("targets rivals when abbrev pairs match either order", () => {
    const row: PushPrefsRow = {
      ...base,
      notify_topics: ["rival"],
      rival_abbr_a: "LAL",
      rival_abbr_b: "BOS",
    };
    expect(rivalPairMatches(row, "BOS", "LAL")).toBe(true);
    expect(filterRowsForTopic([row], { topic: "rival", rivalAway: "LAL", rivalHome: "BOS" })).toHaveLength(1);
  });
});
