// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 12, 2026
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
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  date: "May 12, 2026",
  gameOfTheNight: "DET-CLE-20260511",
  topClutchPerformer: {
    player: "Donovan Mitchell",
    team: "CLE",
    clutchRating: 97,
    description: "Mitchell tied an NBA playoff record with 39 second-half points, refusing to let Cleveland fall into a 3-1 series hole. He authored five consecutive fourth-quarter buckets when the game hung in the balance — pull-ups, runners, and free-throw line daggers that Detroit simply had no answer for. When it mattered most, he was the only conversation in the building.",
  },
  games: [
    {
      gameId: "DET-CLE-20260511",
      teams: { home: "CLE", away: "DET" },
      finalScore: { home: 112, away: 103 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:42",
          description: "Detroit seized control with a 14-4 run fueled by Cade Cunningham push-its and Tobias Harris mid-range buckets, opening a double-digit lead and silencing Rocket Arena. Cleveland's offense stalled on early shot-clock violations and two Mitchell turnovers.",
          runScore: "14-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "8:31",
          description: "The third quarter became Cleveland's defibrillator. Mitchell finally woke — drilling back-to-back pull-up jumpers — and Evan Mobley punctuated with a chase-down block that ignited a 38-21 surge. The run erased the deficit completely and handed Cleveland a momentum lead they'd never fully relinquish.",
          runScore: "38-21 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:15",
          description: "Detroit opened the fourth with a 9-2 spurt, cutting the Cleveland lead to five and sending a jolt through the Pistons bench. Ausar Thompson scored six straight, and the series' momentum felt like it was tilting back toward the road team.",
          runScore: "9-2 DET",
          momentum: "away",
          keyPlayer: "Ausar Thompson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Mitchell answered Detroit's threat with four consecutive personal points — a stepback two and two free throws — before James Harden threaded a no-look dime to Mobley for an and-one that effectively closed the door. Cleveland ripped off an 11-3 run to ice it.",
          runScore: "11-3 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Contested stepback two-pointer over Jalen Duren with the shot clock expiring, pushing Cleveland's lead back to seven with 4:02 remaining after Detroit's fourth-quarter surge had cut it to five.",
          timeRemaining: "4:02",
          winProbabilityShift: 18,
        },
        {
          player: "James Harden",
          team: "CLE",
          description: "No-look lob to Evan Mobley in traffic for an and-one conversion — Harden's ninth assist of the game — extending the lead to double digits and functionally ending Detroit's comeback bid.",
          timeRemaining: "2:47",
          winProbabilityShift: 22,
        },
        {
          player: "Evan Mobley",
          team: "CLE",
          description: "Swatted Cunningham's driving floater attempt at the rim with 3:31 left when Detroit still trailed by only six, then pushed the fast break the other way for a Harden layup on the same possession.",
          timeRemaining: "3:31",
          winProbabilityShift: 15,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Dribble-drive layup cutting the deficit to five with 4:28 remaining, momentarily reigniting Detroit's fourth-quarter rally and forcing a Cleveland timeout.",
          timeRemaining: "4:28",
          winProbabilityShift: -11,
        },
      ],
      narrative: "This game had two completely different identities stitched together at halftime. Detroit controlled the first half with poise and physicality, building a lead that looked capable of swinging the series to 3-1. Then Donovan Mitchell found another gear entirely — one nobody outside his own locker room seemed to know he possessed — and turned Rocket Arena into a coronation. Evan Mobley's two-way masterpiece provided the backbone, Harden the architecture, but Mitchell was the heartbeat. Cleveland didn't just win a game; they won a statement, and the series is suddenly very much alive heading to Detroit for Game 5.",
    },
    {
      gameId: "LAL-OKC-20260511",
      teams: { home: "LAL", away: "OKC" },
      finalScore: { home: 110, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:55",
          description: "OKC established dominance early with SGA orchestrating a 16-6 opening run, exposing the Lakers' defensive lapses in pick-and-roll coverage. Ajay Mitchell hit two early threes off the bench and the Thunder's depth advantage was immediately apparent.",
          runScore: "16-6 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:20",
          description: "LeBron James personally dragged the Lakers back into contention with 11 straight LA points — a mid-range jumper, two free throws, and a coast-to-coast fastbreak layup — capping a 19-8 Lakers run that gave LA a brief two-point edge. The building shook with one last taste of possibility.",
          runScore: "19-8 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Oklahoma City reasserted control with a methodical 22-10 third-quarter run, SGA picking apart LA's tired defense with mid-range pull-ups while Holmgren's rim protection stifled every Lakers interior attempt. The Thunder's depth — cycling through Ajay Mitchell, Dort, and Williams — wore down a Lakers rotation running on fumes.",
          runScore: "22-10 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:15",
          description: "Reaves hit back-to-back threes to pull the Lakers within three with 1:15 left, setting up a frantic final minute that gave LA fans one final heartbeat. The Holmgren dunk 13 seconds later extinguished the last flicker of hope.",
          runScore: "6-2 LAL",
          momentum: "home",
          keyPlayer: "Austin Reaves",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "0:32",
          description: "Chet Holmgren's thunderous go-ahead putback dunk off an SGA miss with 32.8 seconds remaining sealed the sweep, punctuating Oklahoma City's unblemished 8-0 playoff run with an exclamation point that echoed through crypto.com Arena.",
          runScore: "4-0 OKC",
          momentum: "away",
          keyPlayer: "Chet Holmgren",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Chet Holmgren",
          team: "OKC",
          description: "Go-ahead putback dunk off his own offensive rebound of an SGA miss with 32.8 seconds left, giving OKC a two-possession lead and completing the sweep with authoritative punctuation.",
          timeRemaining: "0:32",
          winProbabilityShift: 31,
        },
        {
          player: "Austin Reaves",
          team: "LAL",
          description: "Back-to-back pull-up threes in the final 90 seconds, cutting a six-point deficit to three and forcing OKC out of its comfort zone one last time before Holmgren answered.",
          timeRemaining: "1:15",
          winProbabilityShift: -14,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Smooth midrange pull-up with 2:08 left to push the lead to six after Reaves had given LA life with a triple — the kind of cold-blooded shot that defines SGA's clutch DNA.",
          timeRemaining: "2:08",
          winProbabilityShift: 19,
        },
      ],
      narrative: "The Lakers gave everything they had, and it still wasn't close to enough. LeBron's 24-and-12 in 40 playoff minutes was magnificent and possibly valedictory — a warrior going down with his boots on against a machine that had no off switch. Oklahoma City was never truly threatened, their depth absorbing every LA punch while SGA methodically dismantled whatever defensive scheme the Lakers threw at him. The Thunder are 8-0 and operating at a level that feels genuinely historic — composed, relentless, and deeper than anyone in the West. What the sweep couldn't answer is the question now hanging over Los Angeles like a storm cloud: was that LeBron's last dance?",
    },
  ],
};