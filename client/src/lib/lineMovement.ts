import { lineMovementRows } from "./lineMovementData";

function matchupKey(away: string, home: string): string {
  return [away, home].sort().join("-");
}

export function lineMovementForMatchup(awayTeam: string, homeTeam: string) {
  const key = matchupKey(awayTeam, homeTeam);
  return lineMovementRows.find((r) => matchupKey(r.awayTeam, r.homeTeam) === key);
}

export function spreadMoved(opening: string, closing: string): boolean {
  return opening.replace(/\s+/g, " ").trim() !== closing.replace(/\s+/g, " ").trim();
}
