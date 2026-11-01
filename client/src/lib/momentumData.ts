// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 1, 2026
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
  generatedDate: "2026-11-01",
  date: "November 1, 2026",
  gameOfTheNight: "PHI-CHA-20261031",
  topClutchPerformer: {
    player: "Joel Embiid",
    team: "PHI",
    clutchRating: 94,
    description: "With Charlotte trimming a 14-point deficit to two inside the final 90 seconds, Embiid answered with back-to-back post buckets to seal the five-point road win — the kind of clutch sequence that separates franchise cornerstones from everyone else in the East.",
  },
  games: [
    {
      gameId: "SAC-MEM-20261031",
      teams: { home: "MEM", away: "SAC" },
      finalScore: { home: 136, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Morant reeled off 10 consecutive points in a personal burst — two pull-up jumpers, a floater, and a steal converted to a fast-break dunk — erasing a brief Kings lead and setting the tone for the night.",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "2:07",
          description: "Memphis closed the half on an 18-5 run as Morant's three steals turned into a transition feast. The Grizzlies led by 20 at the break and FedExForum was already in celebration mode.",
          runScore: "18-5",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:44",
          description: "Sacramento mustered a 7-0 flurry to briefly cut the deficit to 15, but Memphis responded with a 12-2 counter-run to effectively end the contest before the fourth quarter.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This was a statement performance from a team that looks nothing like a 6-0 fluke. Morant was a relentless force against every coverage Sacramento offered — attacking, converting, and creating — and Memphis's defensive discipline prevented any Sacramento run from gaining real traction. The Grizzlies' perfect record is being built on both ends, which is the most dangerous kind of perfect record in the league.",
    },
    {
      gameId: "CLE-MIL-20261031",
      teams: { home: "MIL", away: "CLE" },
      finalScore: { home: 111, away: 136 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:31",
          description: "Mitchell connected on three consecutive three-pointers over a 90-second stretch to push Cleveland's lead to 14 inside a Fiserv Forum that had gone eerily quiet by the midpoint of the second quarter.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:19",
          description: "Milwaukee mounted its most credible push — a 10-2 run that trimmed the deficit to seven — but Mitchell responded with a mid-range pull-up and a transition layup to restore Cleveland's double-digit cushion immediately.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:04",
          description: "Cleveland's reserves put the game out of reach with a 16-6 fourth-quarter opening run, turning a competitive margin into a 25-point road demolition that left Milwaukee's season in genuine crisis.",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Twenty-five points surrendered at home by a team with championship aspirations is not a data point — it's a diagnosis. Mitchell was surgical from the opening tip, and Cleveland's five three-pointers from their star guard alone were enough to exploit whatever defensive structure Milwaukee attempted. At 1-5, the Bucks' coaching staff is running out of calendar to right this ship before the conversation shifts entirely.",
    },
    {
      gameId: "POR-UTA-20261031",
      teams: { home: "UTA", away: "POR" },
      finalScore: { home: 90, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:44",
          description: "Henderson's four assists in a five-minute stretch orchestrated a 14-4 Portland run that erased an early Utah lead and shifted the game's center of gravity firmly toward the Blazers.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:02",
          description: "Portland's 32-16 third-quarter explosion was the killing blow — Henderson in transition was unguardable, and the Blazers' pace advantage completely overwhelmed a Utah team with no answer at any level of the defense.",
          runScore: "32-16",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Henderson playing through shoulder soreness and still posting a 29-10 road line is the kind of performance that reshapes the league's perception of a franchise overnight. Portland's 4-1 start has now included wins over teams with playoff pedigree and Henderson's playmaking in transition — the tactical engine the Blazers built this roster around — is operating at a level that demands serious Western Conference attention. Utah's 1-5 record, meanwhile, raises questions that won't be answered on the court alone.",
    },
    {
      gameId: "OKC-HOU-20261031",
      teams: { home: "HOU", away: "OKC" },
      finalScore: { home: 119, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:58",
          description: "Sengun established interior dominance early with back-to-back post scores and a block that triggered a fast break — Houston opened a 12-2 run that OKC's frontcourt never had an answer for.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:11",
          description: "Sengun's third block of the night ignited a Houston defensive sequence that produced a 15-4 run, pushing the margin beyond 20 and sending Toyota Center into full celebration mode.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Sengun's 28-13-5 line with three blocks is the kind of statistical footprint that forces opposing coaches into uncomfortable adjustments from opening tip, and OKC's frontcourt simply had no answer. At 6-1, Houston's identity is crystallizing around elite interior play anchored by Sengun — a tactical advantage that becomes more pronounced as the schedule toughens. The Rockets are the West's most credible challenger to Memphis's unbeaten start, and last night reinforced exactly why.",
    },
    {
      gameId: "MIN-SAS-20261031",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 121, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:22",
          description: "Castle opened up a San Antonio burst with consecutive pull-up jumpers and a steal converted to a dunk — an 11-3 run that gave the Spurs a lead they would not relinquish for the remainder of the half.",
          runScore: "11-3",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:47",
          description: "Minnesota opened the fourth quarter with a 9-2 run to pull within four, but Castle responded with the defining sequence of his young career — 11 points in the final 10 minutes, including a step-back three that broke the Timberwolves' last comeback attempt.",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Castle outdueling Edwards on his home floor is the ROY narrative of the early season — composed under pressure, defensively assertive, and absolutely lethal in the closing minutes when the game demanded it most. San Antonio's 4-2 record reflects a team playing well above its projected ceiling, and Castle is the reason every other team in the West has started paying closer attention to the Frost Bank Center. This was the night his campaign went from conversation to conviction.",
    },
    {
      gameId: "PHI-CHA-20261031",
      teams: { home: "CHA", away: "PHI" },
      finalScore: { home: 104, away: 109 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "Embiid imposed himself in the post with five consecutive Philadelphia points to extend the lead to 14 — the kind of mid-game authority that made Spectrum Center feel like a visitors' arena at the most critical juncture.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:28",
          description: "Charlotte erupted for a 12-2 closing run to trim the deficit from 14 to two in under four minutes, creating genuine chaos at Spectrum Center and turning a comfortable Philadelphia lead into a survival situation.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "With Charlotte cutting the lead to two and the crowd at full volume, Embiid caught the ball in the post, pump-faked his defender into the air, and converted a smooth back-to-the-basket turnaround to push the lead to four with 48 seconds remaining.",
          timeRemaining: "0:48",
          winProbabilityShift: 31,
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "After a Charlotte turnover, Embiid posted up again immediately and drew a foul, converting both free throws to seal the five-point Philadelphia road victory and end Charlotte's comeback at its most dangerous moment.",
          timeRemaining: "0:21",
          winProbabilityShift: 22,
        },
        {
          player: "LaMelo Ball",
          team: "CHA",
          description: "Ball orchestrated the entire 12-2 fourth-quarter Charlotte surge, hitting two mid-range pull-ups and distributing three assists in four minutes to drag the Hornets within two and make the closing sequence genuinely terrifying for Philadelphia.",
          timeRemaining: "1:31",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the night's most compelling game precisely because it refused to behave like the lopsided result the standings suggested. Charlotte's furious fourth-quarter charge — 12 points in under four minutes — exposed a Philadelphia team that may cruise to comfort too readily before the elite competition arrives. What saved the Sixers was exactly what has defined their franchise for a decade: Embiid, alone in the post, too big and too skilled for any answer Charlotte could offer. The East's most dependable closing act did it again.",
    },
    {
      gameId: "ATL-NO-20261031",
      teams: { home: "NO", away: "ATL" },
      finalScore: { home: 121, away: 99 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "New Orleans went on a 16-5 second-quarter run to turn a tight game into a comfortable double-digit lead, with Smoothie King Center's crowd energizing a home team that had been searching for consistency through the first five games.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "New Orleans Pelicans",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:33",
          description: "Atlanta trimmed the deficit to eight on back-to-back transition buckets, offering a brief window for the road team — but New Orleans responded immediately with a 10-2 run to push the lead back beyond 15 and close out the competitive portion of the game.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "New Orleans Pelicans",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "New Orleans's 22-point home win over Atlanta is the kind of result that steadies a franchise still searching for its identity through the early weeks of the season. The Pelicans improved to 3-4 by doing what home teams must do — dominate the second quarter and defend the paint — and Atlanta's 3-4 record reveals a team with offensive firepower but persistent defensive vulnerabilities. Neither team announced itself as a playoff lock on Friday, but the Pelicans at least walked away with the credibility a home floor demands.",
    },
  ],
};