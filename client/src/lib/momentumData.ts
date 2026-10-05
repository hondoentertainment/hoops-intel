// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 5, 2026
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
  generatedDate: "2026-10-05",
  date: "October 5, 2026",
  gameOfTheNight: "GSW-LAC-20261004",
  topClutchPerformer: {
    player: "Kawhi Leonard",
    team: "LAC",
    clutchRating: 84,
    description: "Leonard anchored the Clippers' final-minute defensive stops and converted the go-ahead possession that gave LA the separation it needed to close out Golden State at the Stan Sheriff Center. Vintage read, vintage execution — no wasted motion, all consequence.",
  },
  games: [
    {
      gameId: "UTA-DEN-20261004",
      teams: { home: "DEN", away: "UTA" },
      finalScore: { home: 97, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Utah opened with a disciplined transition attack, converting three consecutive Denver turnovers into a 9-2 run that established pace before the Nuggets' defense could set its rotation structure.",
          runScore: "18-9 UTA",
          momentum: "away",
          keyPlayer: "Utah Jazz",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:48",
          description: "Denver answered with a Jamal Murray-led 11-3 counter run, Murray drilling back-to-back pull-up mid-range jumpers and drawing a critical foul that brought the crowd to its feet and briefly erased Utah's early cushion.",
          runScore: "38-36 DEN",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Utah's offense found a second gear in the third, stringing together a 14-4 run over four minutes of sustained ball movement and Denver defensive breakdowns. The run effectively broke the game open and ended Denver's realistic path to a comeback.",
          runScore: "72-57 UTA",
          momentum: "away",
          keyPlayer: "Utah Jazz",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description: "Denver trimmed the deficit to 11 on a Murray floater with nine minutes remaining, generating the game's final moment of genuine tension before Utah reasserted control with back-to-back scores.",
          runScore: "76-65 UTA",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "2:15",
          description: "Utah closed the game on a 7-2 run to finalize the 12-point margin, substitutions masking the spread slightly but the competitive result never in serious doubt through the final six minutes.",
          runScore: "109-97 UTA",
          momentum: "away",
          keyPlayer: "Utah Jazz",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This game belonged to Utah from the third quarter forward, and the story the Nuggets' organization absorbs this morning is not about preseason stakes — it is about defensive structure, or the absence of it. Denver's rotations looked miscommunicated through three quarters, giving a Jazz team with nothing to lose all the open-floor runway it needed. Murray's return produced the live action Denver needed to see: the pull-up confidence, the foul-drawing instinct, the gravity he generates at the pick-and-roll. But a 12-point preseason loss at home to a rebuilding Utah squad is a competitive signal Denver's coaching staff will flag, not dismiss.",
    },
    {
      gameId: "GSW-LAC-20261004",
      teams: { home: "LAC", away: "GSW" },
      finalScore: { home: 104, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:33",
          description: "Golden State opened with its familiar motion structure and converted four of its first six three-point attempts, building an early eight-point lead and putting immediate pressure on the Clippers' perimeter coverage.",
          runScore: "24-16 GSW",
          momentum: "away",
          keyPlayer: "Golden State Warriors",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:17",
          description: "LA's defense tightened considerably midway through the second, holding Golden State scoreless for a three-minute stretch while Leonard orchestrated a 12-3 Clippers run that flipped the lead before halftime.",
          runScore: "48-43 LAC",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:50",
          description: "Golden State reclaimed the lead early in the third on a Warriors run fueled by second-chance points, Denver's half-court defense momentarily susceptible off offensive glass. The Warriors pushed the margin back to six and held it for the better part of a quarter.",
          runScore: "71-65 GSW",
          momentum: "away",
          keyPlayer: "Golden State Warriors",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:44",
          description: "The Clippers responded with a disciplined 10-2 run to open the fourth quarter, Leonard setting the tone with a mid-post conversion and a deflection that led to a fast-break layup. LA retook the lead and never surrendered it in the final eight minutes.",
          runScore: "90-85 LAC",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "With 2:48 remaining and the Clippers up two, Leonard caught a post entry, pump-faked his defender off the floor, and converted the and-one that pushed the lead to five and effectively required Golden State to score on each of its final three possessions.",
          timeRemaining: "2:48",
          winProbabilityShift: 22,
        },
        {
          player: "Golden State Warriors",
          team: "GSW",
          description: "Warriors converted a corner three with 1:31 remaining to cut the deficit to two, triggering a tense final ninety seconds and keeping the game's outcome legitimately unresolved through LA's subsequent possession.",
          timeRemaining: "1:31",
          winProbabilityShift: -14,
        },
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "Leonard drew a critical charge on Golden State's next possession — an instinctive read that ended a potential go-ahead drive and sealed possession for the Clippers with under a minute to play.",
          timeRemaining: "0:52",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Three points separated these teams at the final buzzer, but the game's true competitive texture was established in the fourth quarter, where Leonard methodically dismantled Golden State's closing strategy one possession at a time. The charge he drew with under a minute remaining was the game's defining moment — not a spectacular play in any visual sense, but the highest-IQ decision on the floor when the result was genuinely undecided. Golden State showed enough fluency in its motion system to raise questions about their West ceiling all over again; the Clippers showed enough defensive identity and late-game composure to confirm that this organization, however quietly, is built for the long game. A three-point final margin in Honolulu in October carries limited predictive weight, but the manner in which LA closed it carries real organizational signal.",
    },
  ],
};