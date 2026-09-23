import { findPlayerInjury } from "./playerIntel";
import { pulseEdition } from "./pulseData";

/** Copy when the morning injury wire exists and this desk player is absent from it. */
export const CLEAR_AVAILABILITY_LABEL = "Healthy / no injury listed";

export interface PlayerAvailability {
  kind: "listed" | "clear";
  /** Injury-wire status, or the clear-desk label. Never invented. */
  label: string;
  injury?: string;
  timeline?: string;
  /** Edition date the injury wire shipped with. */
  asOf: string;
}

/**
 * Availability from today's injury wire only.
 * A live desk player missing from that wire is "no injury listed".
 * Archive, retired, and prospect profiles stay unlabeled — the wire does not cover them.
 */
export function playerAvailability(name: string, onLiveDesk: boolean): PlayerAvailability | null {
  const row = findPlayerInjury(name);
  const asOf = pulseEdition.date;
  if (row) {
    return {
      kind: "listed",
      label: String(row.status || ""),
      injury: row.injury,
      timeline: row.timeline,
      asOf,
    };
  }
  if (!onLiveDesk) return null;
  return { kind: "clear", label: CLEAR_AVAILABILITY_LABEL, asOf };
}
