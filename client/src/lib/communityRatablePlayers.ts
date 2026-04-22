// Top 20 ratable players for the Community Pulse voting section.
//
// This list intentionally lives in its own file (separate from
// `communityPulseData.ts`) because `communityPulseData.ts` is rewritten
// end-to-end every week by `generate-community-pulse.mjs`. Keeping the
// ratable-player list here means a prompt regression on the weekly
// generator can no longer drop the export and break CommunityPulse.tsx
// at build time (which is what happened on 2026-04-20).
//
// To update the roster, edit this file directly — it's not generated.

export interface RatablePlayer {
  player: string;
  team: string;
}

export const ratablePlayers: RatablePlayer[] = [
  { player: "Shai Gilgeous-Alexander", team: "OKC" },
  { player: "Luka Doncic", team: "LAL" },
  { player: "Victor Wembanyama", team: "SAS" },
  { player: "Jayson Tatum", team: "BOS" },
  { player: "Nikola Jokic", team: "DEN" },
  { player: "Jalen Johnson", team: "ATL" },
  { player: "Cade Cunningham", team: "DET" },
  { player: "Julius Randle", team: "MIN" },
  { player: "LaMelo Ball", team: "CHA" },
  { player: "Brandon Ingram", team: "TOR" },
  { player: "Anthony Edwards", team: "MIN" },
  { player: "Devin Booker", team: "PHX" },
  { player: "Kevin Durant", team: "HOU" },
  { player: "Jalen Brunson", team: "NYK" },
  { player: "Evan Mobley", team: "CLE" },
  { player: "Trae Young", team: "ATL" },
  { player: "Kawhi Leonard", team: "LAC" },
  { player: "Cooper Flagg", team: "DAL" },
  { player: "Anthony Davis", team: "LAL" },
  { player: "Jamal Murray", team: "DEN" },
];
