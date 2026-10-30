// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 30, 2026
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
  generatedDate: "2026-10-30",
  date: "October 30, 2026",
  gameOfTheNight: "CLE-ATL-20261029",
  topClutchPerformer: {
    player: "Trae Young",
    team: "ATL",
    clutchRating: 94,
    description: "Young authored nine of Atlanta's final 12 points in a must-hold fourth quarter, capping the performance with a cold-blooded step-back three over the outstretched hand of Cleveland's closeout defender with 38 seconds on the clock. His floater package and pace manipulation left the Cavaliers' road defense with no viable scheme adjustment.",
  },
  games: [
    {
      gameId: "CLE-ATL-20261029",
      teams: { home: "ATL", away: "CLE" },
      finalScore: { home: 114, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:14",
          description: "Cleveland opened a 9-2 run to take their first double-digit lead, capitalizing on three consecutive Atlanta turnovers and converting in transition. State Farm Arena grew quiet as the Cavaliers' ball movement overwhelmed Atlanta's scrambled half-court defense.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:28",
          description: "Trae Young ignited a 14-4 Atlanta run spanning the third-quarter break, draining back-to-back floaters and threading a behind-the-back assist for a corner three. The crowd re-engaged entirely and Cleveland's defensive rotations began to show visible fatigue.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:52",
          description: "Cleveland knotted the score at 108 on a mid-range pull-up, silencing the arena and setting the stage for a final two-minute possession war that would define both teams' early-season identities.",
          runScore: "5-0",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back three-pointer over the closeout defender from the right wing — Young's signature hesitation dribble created a full step of separation and the shot barely grazed the backboard before rattling through, giving Atlanta a 5-point lead they would not surrender.",
          timeRemaining: "0:38",
          winProbabilityShift: 41,
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Pull-up floater in the paint off the pick-and-roll, splitting two Cleveland bigs to extend the lead to three with just over a minute left and effectively neutralize Cleveland's last timeout leverage.",
          timeRemaining: "1:09",
          winProbabilityShift: 22,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Attacking mid-range jumper off the dribble handoff that tied the game at 108 — Mitchell's sheer creation ability kept Cleveland alive in a fourth quarter where the Cavaliers' offense had otherwise stalled in the half court.",
          timeRemaining: "1:52",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was a game that neither team truly controlled until one man decided to take it. Trae Young's fourth-quarter performance was less a basketball display than a masterclass in psychological ownership — every Cleveland defensive adjustment arrived one possession too late. The Cavaliers will study film, find the possessions they conceded, and know the answer is simply that Young was better in the moments that counted. Atlanta's 3-3 record flatters neither their potential nor their ceiling.",
    },
    {
      gameId: "MEM-POR-20261029",
      teams: { home: "POR", away: "MEM" },
      finalScore: { home: 103, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:02",
          description: "Memphis opened with a suffocating 16-4 run to close the first quarter, with Ja Morant orchestrating the transition offense and the Grizzlies' perimeter defense trapping Scoot Henderson into two consecutive shot-clock violations. Portland's home crowd sensed the threat early.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "8:31",
          description: "Portland clawed back with a 10-2 spurt on the strength of Anfernee Simons's mid-range shooting and a pair of Memphis miscommunications on the defensive glass, trimming the deficit to single digits and briefly restoring crowd energy at Moda Center.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Anfernee Simons",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:17",
          description: "Memphis answered with a 17-6 third-quarter run that settled the contest for good. The Grizzlies' bench unit — outworking Portland's reserves in physicality and pace — buried any realistic Portland comeback scenario and the Moda Center crowd began filtering toward the exits.",
          runScore: "17-6",
          momentum: "away",
          keyPlayer: "Jaren Jackson Jr.",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis did not win this game so much as enforce it. From the moment Morant pushed pace on the opening possession, the Grizzlies operated at a tempo Portland's roster was structurally unequipped to match — Scoot Henderson's 5-of-17 night was not a failure of talent but of circumstance. The perfect record is a statement; the manner of its construction is the real warning to the rest of the West. Memphis does not need a close game to tell you who they are.",
    },
    {
      gameId: "SAC-NOP-20261029",
      teams: { home: "NOP", away: "SAC" },
      finalScore: { home: 132, away: 120 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:44",
          description: "CJ McCollum detonated for three consecutive three-pointers inside the final three minutes of the first quarter, turning a two-point New Orleans lead into a 14-point advantage and immediately exposing the structural gaps in Sacramento's perimeter coverage. The Smoothie King Center crowd found its footing for the first time all season.",
          runScore: "14-3",
          momentum: "home",
          keyPlayer: "CJ McCollum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:12",
          description: "Sacramento mounted a credible 13-4 third-quarter push, tightening the deficit to eight and briefly threatening to reframe the entire narrative of the night. De'Aaron Fox's isolation scoring gave the Kings a pulse and had New Orleans calling a rare mid-run timeout.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:05",
          description: "New Orleans immediately countered with a 12-3 run to open the fourth, McCollum adding two more threes and the Pelicans' defense tightening on Sacramento's pick-and-roll coverages. The Kings visibly deflated and never threatened the lead again.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "CJ McCollum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "For New Orleans, this was an exhale — four losses of accumulating organizational pressure released in a single emphatic home performance. McCollum's six-three, 34-point demolition of Sacramento's defense gave the Pelicans a blueprint they can believe in, even if the sample is one game deep. For Sacramento, the 0-5 start has moved beyond a slump into a structural conversation: the Kings do not yet have an answer for teams that can shoot and space at this volume. The questions arriving in November will be uncomfortable ones.",
    },
  ],
};