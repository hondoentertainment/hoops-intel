import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactionBar from "../components/ReactionBar";

describe("ReactionBar", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(
    "renders all four reaction buttons",
    () => {
      render(<ReactionBar itemId="test-item" />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(4);
    },
    15_000,
  );

  it("buttons have correct titles", () => {
    render(<ReactionBar itemId="test-item" />);
    expect(screen.getByTitle("Hot Take")).toBeInTheDocument();
    expect(screen.getByTitle("Cold Take")).toBeInTheDocument();
    expect(screen.getByTitle("GOAT Move")).toBeInTheDocument();
    expect(screen.getByTitle("Cap")).toBeInTheDocument();
  });

  it("clicking a reaction button increases count", () => {
    render(<ReactionBar itemId="test-item" />);
    const fireBtn = screen.getByTitle("Hot Take");
    fireEvent.click(fireBtn);
    // After clicking, count should show "1"
    expect(fireBtn.textContent).toContain("1");
  });

  it("clicking same reaction twice removes it", () => {
    render(<ReactionBar itemId="test-item" />);
    const fireBtn = screen.getByTitle("Hot Take");
    fireEvent.click(fireBtn);
    expect(fireBtn.textContent).toContain("1");
    fireEvent.click(fireBtn);
    // Count should no longer show
    expect(fireBtn.textContent).not.toContain("1");
  });

  it("switching reactions updates correctly", () => {
    render(<ReactionBar itemId="test-item" />);
    const fireBtn = screen.getByTitle("Hot Take");
    const coldBtn = screen.getByTitle("Cold Take");

    fireEvent.click(fireBtn);
    expect(fireBtn.textContent).toContain("1");

    fireEvent.click(coldBtn);
    expect(coldBtn.textContent).toContain("1");
    // Fire count should be gone
    expect(fireBtn.textContent).not.toContain("1");
  });

  it("different itemIds are independent", () => {
    const { unmount } = render(<ReactionBar itemId="item-1" />);
    const btn1 = screen.getByTitle("Hot Take");
    fireEvent.click(btn1);
    unmount();

    render(<ReactionBar itemId="item-2" />);
    const btn2 = screen.getByTitle("Hot Take");
    // item-2 should not have the reaction from item-1
    expect(btn2.textContent).not.toContain("1");
  });
});
