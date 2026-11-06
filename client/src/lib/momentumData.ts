// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 6, 2026
// Live at: https://hoopsintel.net/momentum

export interface MomentumSwing {
  gameId: string;
  teams: { home: string; away: string };
  finalScore: { home: number; away: number };
  swings: {
    quarter: string;
    timestamp: string;
    description: string;
    runScore: string;
    momentum: "home" | "away";
    keyPlayer: string;
    impact: "game-changing" | "significant" | "notable";
  }[];
  clutchPlays: {
    player: string;
    team: string;
    description: string;
    timeRemaining: string;
    winProbabilityShift: number;
  }[];
  narrative: string;
}

export interface MomentumData {
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-11-06",
  date: "November 6, 2026",
  gameOfTheNight: "ORL-PHX-20261105",
  topClutchPerformer: {
    player: "Devin Booker",
    team: "PHX",
    clutchRating: 84,
    description: "Booker shouldered the full offensive burden without Durant, orchestrating Phoenix's decisive third-quarter surge with 14 points in the period and two back-breaking pull-up jumpers that buried Orlando's last credible comeback window.",
  },
  games: [
    {
      gameId: "MIA-GSW-20261105",
      teams: { home: "GSW", away: "MIA" },
      finalScore: { home: 120, away: 100 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Curry drilled back-to-back threes off DHO actions to ignite a 12-2 Warriors run, exposing Miami's flat-footed close-outs on the second night of a road back-to-back. The Chase Center crowd was fully engaged before the first timeout.",
          runScore: "22-10 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Butler manufactured six straight Heat points on pure will — a mid-range pull-up and a contested floater — temporarily trimming the deficit to eight and threatening Golden State's comfort zone. It was Miami's closest thing to a rally all night.",
          runScore: "34-26 GSW",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "3:51",
          description: "Golden State's defense completely locked in on Butler, holding him scoreless for a 10-minute stretch while Curry and Draymond Green orchestrated a 16-5 run that functionally ended the game. Miami's supporting cast had no answers for the Warriors' switching scheme.",
          runScore: "91-67 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was Golden State at their suffocating best — a master class in defensive identity layered beneath Curry's offensive brilliance. Miami arrived visibly depleted from Wednesday's overtime war, and the Warriors showed zero mercy, turning Butler into a nonfactor 24 hours after his 32-point triumph. The 20-point final margin understated how thoroughly Golden State controlled every phase after the opening six minutes.",
    },
    {
      gameId: "ORL-PHX-20261105",
      teams: { home: "PHX", away: "ORL" },
      finalScore: { home: 117, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:38",
          description: "Orlando raced out on a 9-2 open to punish Phoenix's sluggish defensive rotations, with Banchero scoring five quick points in the paint before the Suns found their footing. The Mortgage Matchup Center went uncomfortably quiet early.",
          runScore: "9-4 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:17",
          description: "Booker flipped the script entirely, erupting for 11 points across a dominant four-minute stretch — a step-back three, two mid-range daggers, and a layup through contact — to give Phoenix its first double-digit lead and reframe the game's entire complexion.",
          runScore: "54-43 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:09",
          description: "Orlando trimmed the gap to seven on consecutive Banchero drives, testing whether Phoenix could hold without Durant's defensive gravity. Booker answered immediately with a pull-up two and a dish to a cutter for an and-one, pushing the lead back to double digits and silencing the Magic's final serious charge.",
          runScore: "84-73 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Devin Booker",
          team: "PHX",
          description: "With Orlando cutting it to nine midway through the third and threatening to make it a genuine fourth-quarter game, Booker hit a contested step-back jumper over Banchero from the elbow — his signature shot — to push Phoenix back to eleven and functionally end Orlando's momentum.",
          timeRemaining: "4:09 Q3",
          winProbabilityShift: 18,
        },
      ],
      narrative: "Without Durant, Phoenix needed Booker to be something more than a scorer — they needed him to be a point guard, a closer, and an anchor simultaneously. He delivered on all three counts, posting 32 points and seven assists in a performance that gave this Suns season its first legitimate reason for optimism. Orlando showed flashes with Banchero's 21 quiet points, but a team still searching for its identity in November had no answer for Booker when it mattered most.",
    },
  ],
};