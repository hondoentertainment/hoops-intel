// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 23, 2026
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
  generatedDate: "2026-10-23",
  date: "October 23, 2026",
  gameOfTheNight: "CLE-PHI-20261022",
  topClutchPerformer: {
    player: "Tyrese Maxey",
    team: "PHI",
    clutchRating: 88,
    description: "Maxey controlled the fourth quarter with surgical precision — back-to-back pull-up jumpers in the final six minutes erased Cleveland's last serious threat and turned a one-possession game into a professional closing statement. His ability to manufacture clean looks under pressure against a disciplined Cavaliers defense was the difference between a tight finish and a comfortable margin.",
  },
  games: [
    {
      gameId: "CLE-PHI-20261022",
      teams: { home: "PHI", away: "CLE" },
      finalScore: { home: 114, away: 106 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:42",
          description: "Cleveland strung together an 11-2 run to take a five-point lead, with Donovan Mitchell converting two straight mid-range jumpers and drawing a foul on a third possession to swing momentum decisively away from the home crowd.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:18",
          description: "Philadelphia answered with a 14-4 third-quarter surge, Maxey orchestrating from the pick-and-roll and Philadelphia's bench wings converting open corner threes to flip the lead back to the Sixers and silence Cleveland's momentum entirely.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:05",
          description: "Cleveland trimmed the deficit to four on back-to-back possessions, tightening the arena and threatening a full comeback before Philadelphia's closing unit reasserted structural control.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Maxey hit a step-back pull-up jumper over Mitchell with 5:48 remaining to push the lead to eight — a shot that functionally ended Cleveland's realistic path to a comeback and validated Philadelphia's fourth-quarter identity.",
          timeRemaining: "5:48",
          winProbabilityShift: 19,
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "A secondary Maxey bucket off a broken play — improvised off the dribble, no help available — extended the lead to ten with 3:55 left and removed any remaining drama from Xfinity Mobile Arena.",
          timeRemaining: "3:55",
          winProbabilityShift: 14,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Mitchell converted a contested floater in the lane to trim the deficit to four with 6:12 left, briefly reanimating Cleveland's bench and forcing a Philadelphia timeout that interrupted the Sixers' rhythm.",
          timeRemaining: "6:12",
          winProbabilityShift: -9,
        },
      ],
      narrative: "Philadelphia and Cleveland gave the Xfinity Mobile Arena a genuine fourth-quarter thriller before Maxey's closing sequence ended it on his terms. The Cavaliers were never quite broken — Mitchell kept them alive through three quarters with relentless mid-range production — but PHI's depth advantage compounded across forty minutes in ways Cleveland's rotation simply could not absorb. This was a game that looked tight and played tight until the final six minutes, when Philadelphia's organizational identity — guard-led, pace-controlled, calm under pressure — took over completely.",
    },
    {
      gameId: "DEN-OKC-20261022",
      teams: { home: "OKC", away: "DEN" },
      finalScore: { home: 96, away: 84 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:54",
          description: "Oklahoma City closed the first quarter on a 9-2 run built entirely on defensive conversion — two Shai steals leading to fast-break layins and a third possession ending in a Jokic forced turnover that the Thunder turned into a corner three. The tone was set before Denver's offense could establish any rhythm.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:11",
          description: "Denver briefly found life through Jokic in the high post, pulling within five on a three-possession stretch that suggested the Nuggets had located OKC's switching seams — but the Thunder tightened their scheme and Denver's role players went cold, ending the run before it became a genuine swing.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "OKC's third-quarter defensive stand produced the game's defining sequence — six consecutive Denver empty possessions while SGA engineered a 12-2 run on the other end, extending the lead to seventeen and effectively closing Denver's competitive window for the night.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was never a close game once Oklahoma City's defensive structure fully engaged in the second half — it was a controlled dismantling, the kind that reveals organizational depth more than individual brilliance. SGA was characteristically efficient, but the real story was the Thunder's collective refusal to let Jokic operate in any comfortable register, crowding his passing lanes and forcing Denver into isolation sets that OKC's length was built to neutralize. The Nuggets looked genuinely disjointed, and the twelve-point final margin undersells how complete OKC's command was across the final twenty-four minutes.",
    },
  ],
};