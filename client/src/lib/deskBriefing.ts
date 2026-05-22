import { gamePreviews, narrative, pulseEdition, pulseIndex, tickerItems } from "./pulseData";
import { isPlayoffsActive, playoffMovers } from "./playoffData";
import { nextPlayoffGameAcross } from "./playoffAnalytics";

/** 60-second read bullets for the morning desk hero. */
export function buildSixtySecondBullets(): string[] {
  const fromSubtitle = pulseEdition.subtitle
    ? pulseEdition.subtitle
        .split("·")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const bullets: string[] = [...fromSubtitle];

  if (bullets.length < 3 && narrative.subhead) {
    bullets.push(narrative.subhead.trim());
  }

  const topMover = pulseIndex[0];
  if (topMover && bullets.length < 5) {
    bullets.push(`${topMover.player} (${topMover.team}) — ${topMover.rationale?.slice(0, 100) ?? "Pulse Index leader today"}`);
  }

  if (isPlayoffsActive() && bullets.length < 5) {
    const pm = playoffMovers[0];
    if (pm) bullets.push(`Playoff pulse: ${pm.player} ${pm.direction === "riser" ? "↑" : "↓"} — ${pm.note.slice(0, 90)}`);
  }

  const nx = nextPlayoffGameAcross();
  if (nx && bullets.length < 5) {
    bullets.push(`Next tip: ${nx.awayTeam} @ ${nx.homeTeam} · ${nx.time ?? nx.date}`);
  }

  if (gamePreviews.length > 0 && bullets.length < 5) {
    bullets.push(`${gamePreviews.length} game${gamePreviews.length === 1 ? "" : "s"} on tonight's slate`);
  }

  const wire = tickerItems[0];
  if (wire && bullets.length < 5) {
    bullets.push(wire.text.slice(0, 120));
  }

  return bullets.slice(0, 5);
}

export function editionContextLabel(): string {
  const ctx = pulseEdition.editionContext ?? "regular";
  if (ctx === "finals") return "NBA Finals desk";
  if (ctx === "playoffs") return "Playoffs desk";
  return "Regular season desk";
}
