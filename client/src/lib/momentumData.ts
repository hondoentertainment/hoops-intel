// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 10, 2026
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
  generatedDate: "2026-10-10",
  date: "October 10, 2026",
  gameOfTheNight: "MEM-CHI-20261009",
  topClutchPerformer: {
    player: "Ja Morant",
    team: "MEM",
    clutchRating: 87,
    description: "Morant authored the decisive fourth-quarter sequence that separated Memphis from a Bulls team that had every reason to believe it was stealing a home win. Operating on a managed ankle, he found the right moments — a mid-range pull-up, a drive-and-dish into the paint — to push MEM's cushion just past Chicago's reach. For a preseason performance carrying injury-cloud asterisks, this was a clutch résumé entry the desk won't discount.",
  },
  games: [
    {
      gameId: "HOU-DAL-20261009",
      teams: { home: "DAL", away: "HOU" },
      finalScore: { home: 117, away: 135 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "Alperen Sengun establishes immediate interior dominance with back-to-back post scores, forcing Dallas to burn two early timeouts and scramble their defensive rotation. Houston opens a 9-2 run that sets the tone before the game has found its footing.",
          runScore: "HOU 18-9",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:34",
          description: "Dallas strings together a 10-3 answer powered by transition buckets and a pair of Mavericks three-pointers, briefly closing the gap and giving the Venetian Arena crowd something to build on. The Mavericks' perimeter crew looks coherent enough to make this a game for one extended stretch.",
          runScore: "DAL 38-36",
          momentum: "home",
          keyPlayer: "Kyrie Irving",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description: "Houston responds with a devastating 14-4 closing run into halftime. Sengun scores six points in the final two minutes of the half, and HOU's secondary ball-handlers attack a Dallas defense that has no answer for the Rockets' pace when the pick-and-roll is flowing cleanly.",
          runScore: "HOU 66-50",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "Dallas makes a token third-quarter push, trimming the deficit to 11 before Houston's depth suffocates the run. The Mavericks simply lack the frontcourt infrastructure to contain Sengun for 48 minutes, and when the double-team comes, HOU's perimeter shooters punish it.",
          runScore: "HOU 84-73",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:40",
          description: "Houston closes the door emphatically with a 17-5 fourth-quarter opening burst, rotating reserves in without any drop in execution. The 18-point final margin is the preseason window's largest debut-game blowout, validating every organizational signal HOU's camp had been sending.",
          runScore: "HOU 113-90",
          momentum: "away",
          keyPlayer: "Dillon Brooks",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was a statement arrival, not a basketball game. Houston came to Las Vegas with a structured, disciplined operation and proceeded to dismantle Dallas in a way that felt inevitable from the opening tip. Alperen Sengun was the gravitational center of everything the Rockets ran — every double-team spawned an open three, every post touch ended in two points or a hockey assist. Dallas' perimeter talent kept the scoreboard honest through three possessions, but the Mavericks' frontcourt simply isn't built to absorb what Sengun offers for a full game. The 18-point margin is the loudest single-game organizational endorsement the desk has issued this preseason window.",
    },
    {
      gameId: "MEM-CHI-20261009",
      teams: { home: "CHI", away: "MEM" },
      finalScore: { home: 100, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:45",
          description: "Chicago races to an early United Center advantage, riding a 9-2 burst fueled by transition offense and the kind of home-floor energy a Bulls crowd generates when the team gives them reason to. Memphis looks momentarily disorganized in half-court sets, turning it over twice in ninety seconds.",
          runScore: "CHI 18-11",
          momentum: "home",
          keyPlayer: "Zach LaVine",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:10",
          description: "Memphis settles into its rhythm as Morant begins asserting himself against Chicago's defensive scheme. A 12-4 Grizzlies run erases the early deficit and briefly puts MEM up five, swinging the crowd's energy into cautious silence. The Grizzlies' pace regulation is precise — they're not forcing, they're suffocating.",
          runScore: "MEM 38-33",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "Chicago reclaims momentum through sheer attrition — physical, grinding half-court possessions that Memphis struggles to answer. The Bulls claw back to tie it at 74 apiece on a LaVine mid-range jumper, and the United Center is fully alive. MEM's ankle management of Morant becomes visibly conservative in this stretch.",
          runScore: "CHI 74-74",
          momentum: "home",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:30",
          description: "Morant re-engages decisively when it matters. He engineers a critical 8-2 Memphis run in the game's final five minutes, converting a pull-up jumper and setting up teammates on consecutive possessions to push the lead to six — just enough margin that Chicago's final surge falls short.",
          runScore: "MEM 100-94",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Morant splits Chicago's collapsing paint defense on a drive, absorbs contact, and converts the layup while drawing the foul. The and-one sequence — converted — pushes MEM's lead from two to five with 3:48 remaining and deflates the Bulls' comeback bid at its most dangerous moment.",
          timeRemaining: "3:48",
          winProbabilityShift: 22,
        },
        {
          player: "Zach LaVine",
          team: "CHI",
          description: "LaVine drills a contested pull-up three off the dribble to cut the Memphis lead to three with 2:11 remaining, briefly resurrecting Chicago's crowd and the possibility of a home win. The shot is pure creation under pressure — the Bulls' best individual offensive moment of the game.",
          timeRemaining: "2:11",
          winProbabilityShift: -14,
        },
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Morant dribbles out 28 seconds of game clock in the mid-range before hitting a stepback jumper over LaVine's contest, extending the lead to five with 1:03 left. The shot quality — calm, deliberate, off the dribble — is the signature moment that confirms MEM had this game managed when it needed to be.",
          timeRemaining: "1:03",
          winProbabilityShift: 31,
        },
        {
          player: "Nikola Vučević",
          team: "CHI",
          description: "Vučević corrals an offensive rebound and scores to cut the deficit to three with 28 seconds remaining, giving Chicago one final possession to tie. The play is a testament to the Bulls' competitiveness but ultimately insufficient — Memphis ices it at the line.",
          timeRemaining: "0:28",
          winProbabilityShift: -9,
        },
      ],
      narrative: "The United Center gave Memphis everything it had and still came up four points short — which, on reflection, is exactly the kind of road assignment that defines a team's organizational character in October. Memphis arrived with an ankle question mark hanging over its best player, absorbed Chicago's best shot across three quarters of genuine hostility, and then deployed Morant precisely when the game demanded it. LaVine's pull-up three in the final two minutes was the Bulls' best argument, and it simply wasn't enough against a Grizzlies team that has learned how to win the uncomfortable ones. This is the game of the night — not because it was perfect basketball, but because it answered real questions about MEM's resilience and CHI's ceiling in consecutive possessions.",
    },
  ],
};