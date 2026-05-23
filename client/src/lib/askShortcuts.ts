import { gamePreviews } from "./pulseData";

/** Pre-baked Ask Hoops Intel prompt chips — wired to the floating chat via dispatchAskPrompt. */
export const ASK_PROMPT_CHIPS = [
  "Who wins tonight?",
  "Injury impact on spread?",
  "Explain tonight's featured game",
  "Who's rising on the Pulse Index?",
] as const;

export function contextualAskChips(): string[] {
  const featured = gamePreviews.find((g) => g.featured) || gamePreviews[0];
  const chips = [...ASK_PROMPT_CHIPS];
  if (featured) {
    chips[0] = `Who wins ${featured.awayTeam} @ ${featured.homeTeam}?`;
  }
  return chips.slice(0, 4);
}

export function dispatchAskPrompt(question: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("hoops-intel:ask", { detail: { question } }),
  );
}
