import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShotChart from "../components/ShotChart";

describe("ShotChart", () => {
  it("renders an accessible summary with make/attempt counts per team", () => {
    render(
      <ShotChart
        awayTeam="LAL"
        homeTeam="BOS"
        awayShots={[
          { x: 10, y: 20, made: true },
          { x: 15, y: 25, made: false },
        ]}
        homeShots={[{ x: 30, y: 40, made: true }]}
      />,
    );
    expect(screen.getByRole("img", { name: /LAL 1 of 2, BOS 1 of 1/ })).toBeInTheDocument();
    expect(screen.getByText("LAL 1/2")).toBeInTheDocument();
    expect(screen.getByText("BOS 1/1")).toBeInTheDocument();
  });

  it("renders one circle per shot across both teams", () => {
    const { container } = render(
      <ShotChart
        awayTeam="LAL"
        homeTeam="BOS"
        awayShots={[{ x: 1, y: 1, made: true }, { x: 2, y: 2, made: false }]}
        homeShots={[{ x: 3, y: 3, made: true }]}
      />,
    );
    // 2 court-marking circles (center circle) + 3 shot dots
    const circles = container.querySelectorAll("circle");
    expect(circles.length).toBe(1 + 3);
  });

  it("handles a single-shot team without dividing by zero", () => {
    const { container } = render(
      <ShotChart awayTeam="LAL" homeTeam="BOS" awayShots={[{ x: 25, y: 40, made: true }]} homeShots={[]} />,
    );
    const dot = container.querySelector("circle[fill-opacity]");
    expect(dot).not.toBeNull();
    expect(Number(dot!.getAttribute("cx"))).not.toBeNaN();
  });
});
