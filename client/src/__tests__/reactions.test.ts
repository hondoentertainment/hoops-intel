import { describe, it, expect, beforeEach } from "vitest";
import {
  getReactions,
  toggleReaction,
  getTotalReactions,
  REACTION_EMOJIS,
  REACTION_LABELS,
  type ReactionType,
} from "../lib/reactions";

describe("reactions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("REACTION_EMOJIS", () => {
    it("has all four reaction types", () => {
      expect(Object.keys(REACTION_EMOJIS)).toEqual(["fire", "cold", "goat", "cap"]);
    });

    it("maps to emoji strings", () => {
      expect(REACTION_EMOJIS.fire).toBeDefined();
      expect(REACTION_EMOJIS.cold).toBeDefined();
      expect(REACTION_EMOJIS.goat).toBeDefined();
      expect(REACTION_EMOJIS.cap).toBeDefined();
    });
  });

  describe("REACTION_LABELS", () => {
    it("maps reaction types to labels", () => {
      expect(REACTION_LABELS.fire).toBe("Hot Take");
      expect(REACTION_LABELS.cold).toBe("Cold Take");
      expect(REACTION_LABELS.goat).toBe("GOAT Move");
      expect(REACTION_LABELS.cap).toBe("Cap");
    });
  });

  describe("getReactions", () => {
    it("returns default state for unknown item", () => {
      const result = getReactions("unknown-item");
      expect(result.counts).toEqual({ fire: 0, cold: 0, goat: 0, cap: 0 });
      expect(result.userReaction).toBeNull();
    });

    it("returns stored reactions for known item", () => {
      toggleReaction("item-1", "fire");
      const result = getReactions("item-1");
      expect(result.counts.fire).toBe(1);
      expect(result.userReaction).toBe("fire");
    });

    it("handles corrupt localStorage gracefully", () => {
      localStorage.setItem("hoops-intel-reactions", "not-json");
      const result = getReactions("any-item");
      expect(result.counts).toEqual({ fire: 0, cold: 0, goat: 0, cap: 0 });
      expect(result.userReaction).toBeNull();
    });
  });

  describe("toggleReaction", () => {
    it("adds a reaction when none exists", () => {
      const result = toggleReaction("item-1", "fire");
      expect(result.counts.fire).toBe(1);
      expect(result.userReaction).toBe("fire");
    });

    it("removes a reaction when toggling the same one", () => {
      toggleReaction("item-1", "fire");
      const result = toggleReaction("item-1", "fire");
      expect(result.counts.fire).toBe(0);
      expect(result.userReaction).toBeNull();
    });

    it("switches reaction when toggling a different one", () => {
      toggleReaction("item-1", "fire");
      const result = toggleReaction("item-1", "cold");
      expect(result.counts.fire).toBe(0);
      expect(result.counts.cold).toBe(1);
      expect(result.userReaction).toBe("cold");
    });

    it("persists state to localStorage", () => {
      toggleReaction("item-1", "goat");
      const raw = localStorage.getItem("hoops-intel-reactions");
      expect(raw).not.toBeNull();
      const store = JSON.parse(raw!);
      expect(store["item-1"].counts.goat).toBe(1);
      expect(store["item-1"].userReaction).toBe("goat");
    });

    it("handles multiple items independently", () => {
      toggleReaction("item-1", "fire");
      toggleReaction("item-2", "cold");
      expect(getReactions("item-1").userReaction).toBe("fire");
      expect(getReactions("item-2").userReaction).toBe("cold");
    });

    it("does not let counts go below zero", () => {
      // Simulate corrupted state with negative-ish scenario
      toggleReaction("item-1", "fire"); // count = 1
      toggleReaction("item-1", "fire"); // count = 0, user = null
      toggleReaction("item-1", "fire"); // count = 1
      toggleReaction("item-1", "fire"); // count = 0
      const result = getReactions("item-1");
      expect(result.counts.fire).toBe(0);
    });

    it("cycles through all reaction types correctly", () => {
      const types: ReactionType[] = ["fire", "cold", "goat", "cap"];
      for (const type of types) {
        toggleReaction("cycle-item", type);
        const result = getReactions("cycle-item");
        expect(result.userReaction).toBe(type);
        expect(result.counts[type]).toBe(1);
      }
      // After cycling through all, only cap should be active
      const final = getReactions("cycle-item");
      expect(final.userReaction).toBe("cap");
      expect(final.counts.cap).toBe(1);
      expect(final.counts.fire).toBe(0);
    });
  });

  describe("getTotalReactions", () => {
    it("returns 0 for item with no reactions", () => {
      expect(getTotalReactions("empty-item")).toBe(0);
    });

    it("returns correct total after adding a reaction", () => {
      toggleReaction("item-1", "fire");
      expect(getTotalReactions("item-1")).toBe(1);
    });

    it("returns 0 after adding and removing a reaction", () => {
      toggleReaction("item-1", "fire");
      toggleReaction("item-1", "fire");
      expect(getTotalReactions("item-1")).toBe(0);
    });
  });
});
