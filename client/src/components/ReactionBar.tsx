import { useState } from "react";
import { REACTION_EMOJIS, REACTION_LABELS, getReactions, toggleReaction, type ReactionType } from "../lib/reactions";
import { useToast } from "../contexts/ToastContext";
import { hapticTap } from "../lib/haptic";

export default function ReactionBar({ itemId }: { itemId: string }) {
  const [state, setState] = useState(() => getReactions(itemId));
  const { toast } = useToast();

  const handleClick = (reaction: ReactionType) => {
    const updated = toggleReaction(itemId, reaction);
    setState({ ...updated });
    hapticTap();
    if (updated.userReaction === reaction) {
      toast(`Reacted ${REACTION_LABELS[reaction]}`);
    }
  };

  const reactions: ReactionType[] = ["fire", "cold", "goat", "cap"];

  return (
    <div className="flex items-center gap-1.5 mt-2">
      {reactions.map((r) => {
        const isActive = state.userReaction === r;
        const count = state.counts[r];
        return (
          <button
            key={r}
            type="button"
            onClick={() => handleClick(r)}
            title={REACTION_LABELS[r]}
            aria-label={REACTION_LABELS[r]}
            aria-pressed={isActive}
            className="flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-all min-h-[44px] sm:min-h-0 active:scale-[0.97]"
            style={{
              background: isActive ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${isActive ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
            }}
          >
            <span style={{ fontSize: "0.85rem" }} aria-hidden>{REACTION_EMOJIS[r]}</span>
            {count > 0 && (
              <span className="mono-data" style={{ color: isActive ? "#0EA5E9" : "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
