import { gamePreviews, narrative, pulseEdition, pulseIndex, tickerItems } from "./pulseData";
import { isPlayoffsActive, playoffMovers, playoffSeries } from "./playoffData";
import { nextPlayoffGameAcross } from "./playoffAnalytics";
import { draftData } from "./draftData";
import { activeEditionContext, editionContextDeskLabel, isDraftDesk, isOffseasonDesk } from "./deskMode";

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

  if (isOffseasonDesk() && bullets.length < 5) {
    const ctx = activeEditionContext();
    if (isDraftDesk() || ctx === "summer-league") {
      const top = draftData.bigBoard[0];
      if (top) bullets.push(`#${top.rank} ${top.name} (${top.school}) — ${top.weeklyNote.slice(0, 90)}`);
      const riser = draftData.risers[0];
      if (riser && bullets.length < 5) {
        bullets.push(`Draft stock ↑ ${riser.name} (+${riser.change}) — ${riser.reason.slice(0, 80)}`);
      }
    } else if (ctx === "free-agency") {
      bullets.push("Free agency desk — cap tiers and rotation fit on Trade Value");
    } else if (ctx === "preseason") {
      bullets.push("Preseason desk — rotation battles and minutes caps on Lineups");
    }
  }

  if (isPlayoffsActive() && bullets.length < 5) {
    const pm = playoffMovers[0];
    if (pm) bullets.push(`Playoff pulse: ${pm.player} ${pm.direction === "riser" ? "↑" : "↓"} — ${pm.note.slice(0, 90)}`);
  }

  const nx = nextPlayoffGameAcross(playoffSeries);
  if (nx && bullets.length < 5) {
    bullets.push(`Next tip: ${nx.game.awayTeam} @ ${nx.game.homeTeam} · ${nx.game.time ?? nx.game.date}`);
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
  return editionContextDeskLabel(activeEditionContext());
}
