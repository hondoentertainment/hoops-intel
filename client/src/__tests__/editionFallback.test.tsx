import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import EditionFallbackBanner from "../components/EditionFallbackBanner";
import { editionFallbackState, expectedEditionIso } from "../lib/editionFallback";

const AFTER_PUBLISH = new Date("2026-11-07T20:00:00.000Z");
const NEXT_DAY_AFTER_PUBLISH = new Date("2026-11-08T18:00:00.000Z");
const BEFORE_PUBLISH = new Date("2026-11-08T12:00:00.000Z");

describe("edition fallback", () => {
  it("expects yesterday's edition before the Pacific morning publish", () => {
    expect(expectedEditionIso(BEFORE_PUBLISH)).toBe("2026-11-07");
    expect(expectedEditionIso(AFTER_PUBLISH)).toBe("2026-11-07");
    expect(expectedEditionIso(NEXT_DAY_AFTER_PUBLISH)).toBe("2026-11-08");
  });

  it("stays quiet when the committed edition is the one readers should have", () => {
    const state = editionFallbackState({
      editionDate: "November 7, 2026",
      now: AFTER_PUBLISH,
    });
    expect(state.fallback).toBe(false);
    expect(state.banner).toBeNull();

    const stillCurrent = editionFallbackState({
      editionDate: "November 7, 2026",
      now: BEFORE_PUBLISH,
    });
    expect(stillCurrent.fallback).toBe(false);
  });

  it("keeps the latest edition and names its date when today's file is missing", () => {
    const state = editionFallbackState({
      editionDate: "November 7, 2026",
      now: NEXT_DAY_AFTER_PUBLISH,
    });
    expect(state.fallback).toBe(true);
    expect(state.reason).toBe("missing");
    expect(state.showingDate).toBe("November 7, 2026");
    expect(state.banner).toBe("Today's edition is updating, showing November 7, 2026");
  });

  it("names the edition on screen when generation failed, even if the date matches", () => {
    const state = editionFallbackState({
      editionDate: "November 7, 2026",
      now: AFTER_PUBLISH,
      generation: "failed",
    });
    expect(state.reason).toBe("failed");
    expect(state.banner).toBe("Today's edition is updating, showing November 7, 2026");
  });

  it("treats an explicit missing flag and an unreadable date as a fallback", () => {
    expect(
      editionFallbackState({
        editionDate: "November 7, 2026",
        now: AFTER_PUBLISH,
        generation: "missing",
      }).banner,
    ).toBe("Today's edition is updating, showing November 7, 2026");

    const blank = editionFallbackState({ editionDate: "   ", now: AFTER_PUBLISH });
    expect(blank.fallback).toBe(true);
    expect(blank.banner).toBe("Today's edition is updating, showing the latest saved edition");
  });

  it("renders an accessible status banner and hides it when the edition is current", () => {
    const { unmount } = render(
      <EditionFallbackBanner editionDate="November 7, 2026" now={NEXT_DAY_AFTER_PUBLISH} />,
    );
    const banner = screen.getByTestId("edition-fallback-banner");
    expect(banner).toHaveAttribute("role", "status");
    expect(banner).toHaveTextContent("Today's edition is updating, showing November 7, 2026");
    unmount();

    render(<EditionFallbackBanner editionDate="November 7, 2026" now={AFTER_PUBLISH} />);
    expect(screen.queryByTestId("edition-fallback-banner")).toBeNull();
  });
});
