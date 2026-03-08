// Reactions — localStorage-based reactions on game recaps and stories

export type ReactionType = "fire" | "cold" | "goat" | "cap";

export const REACTION_EMOJIS: Record<ReactionType, string> = {
  fire: "\u{1F525}",
  cold: "\u{1F976}",
  goat: "\u{1F410}",
  cap: "\u{1F9E2}",
};

export const REACTION_LABELS: Record<ReactionType, string> = {
  fire: "Hot Take",
  cold: "Cold Take",
  goat: "GOAT Move",
  cap: "Cap",
};

interface ReactionStore {
  [itemId: string]: {
    counts: Record<ReactionType, number>;
    userReaction: ReactionType | null;
  };
}

const STORAGE_KEY = "hoops-intel-reactions";

function getStore(): ReactionStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveStore(store: ReactionStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getReactions(itemId: string): { counts: Record<ReactionType, number>; userReaction: ReactionType | null } {
  const store = getStore();
  return store[itemId] ?? {
    counts: { fire: 0, cold: 0, goat: 0, cap: 0 },
    userReaction: null,
  };
}

export function toggleReaction(itemId: string, reaction: ReactionType): { counts: Record<ReactionType, number>; userReaction: ReactionType | null } {
  const store = getStore();
  if (!store[itemId]) {
    store[itemId] = { counts: { fire: 0, cold: 0, goat: 0, cap: 0 }, userReaction: null };
  }

  const current = store[itemId]!;

  if (current.userReaction === reaction) {
    // Remove reaction
    current.counts[reaction] = Math.max(0, current.counts[reaction] - 1);
    current.userReaction = null;
  } else {
    // Remove old reaction if exists
    if (current.userReaction) {
      current.counts[current.userReaction] = Math.max(0, current.counts[current.userReaction] - 1);
    }
    // Add new reaction
    current.counts[reaction]++;
    current.userReaction = reaction;
  }

  saveStore(store);
  return current;
}

export function getTotalReactions(itemId: string): number {
  const { counts } = getReactions(itemId);
  return Object.values(counts).reduce((a, b) => a + b, 0);
}
