import { describe, expect, it } from "vitest";
import { editionHourLabel, editionPublishLabel, formatPacificTime } from "../lib/pacificTime";
import { formatContentDate } from "../lib/contentDate";

describe("pacificTime", () => {
  it("labels the 13:03 UTC edition window as 5:03 AM PT in PST", () => {
    expect(editionPublishLabel(new Date("2026-01-15T13:03:00Z"))).toBe("5:03 AM PT");
    expect(editionHourLabel(new Date("2026-01-15T13:00:00Z"))).toBe("5 AM PT");
  });

  it("labels the 13:03 UTC edition window as 6:03 AM PT in PDT", () => {
    expect(editionPublishLabel(new Date("2026-09-02T13:03:00Z"))).toBe("6:03 AM PT");
    expect(editionHourLabel(new Date("2026-09-02T13:00:00Z"))).toBe("6 AM PT");
  });

  it("never emits a hardcoded PST or PDT suffix", () => {
    expect(formatPacificTime(new Date("2026-09-02T13:03:00Z"))).toMatch(/ PT$/);
    expect(formatPacificTime(new Date("2026-09-02T13:03:00Z"))).not.toMatch(/PST|PDT/);
  });
});

describe("formatContentDate", () => {
  it("pretty-prints ISO generatedDate and leaves display strings alone", () => {
    expect(formatContentDate("2026-09-02")).toBe("September 2, 2026");
    expect(formatContentDate("June 9, 2026")).toBe("June 9, 2026");
  });
});
