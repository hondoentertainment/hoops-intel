// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 27, 2026
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
  date: "May 27, 2026",
  gameOfTheNight: "NYK-CLE-20260525",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 96,
    description: "Brunson was suffocating all night, finishing with 38 points and 9 assists while posting a +29 in a 37-point blowout clincher. He operated as architect and executioner — dismantling Cleveland's defense with pull-up jumpers in transition, then punishing double-teams with pinpoint kick-outs. His series-long performance cemented his status as the most important player in New York basketball since Patrick Ewing.",
  },
  games: [
    {
      gameId: "NYK-CLE-20260525",
      teams: { home: "CLE", away: "NYK" },
      finalScore: { home: 93, away: 130 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Brunson opened the game with back-to-back pull-up mid-rangers to stake New York to an early 14-6 lead, forcing Cleveland's first timeout and signaling immediately that the Cavs had no answers prepared.",
          runScore: "14-6 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:38",
          description: "Cleveland strung together a 12-3 run powered by Donovan Mitchell attacking the paint, briefly trimming the deficit to single digits and momentarily quieting the New York bench. The Cavs had a pulse — and then Mikal Bridges extinguished it.",
          runScore: "27-29 CLE within 2",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "2:11",
          description: "Bridges answered with five straight points — a mid-post turnaround and a trail three off Brunson's drive-and-kick — capping a decisive 18-4 New York run that sent the Cavs into halftime down 22. The arena went silent and Cleveland's body language collapsed visibly.",
          runScore: "64-42 NYK",
          momentum: "away",
          keyPlayer: "Mikal Bridges",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description: "OG Anunoby, who had been a shadow on Mitchell all series, ripped a lazy crossover and converted a breakaway dunk on the other end — a sequence that crystallized every structural problem Cleveland had in this matchup and prompted a second Cleveland timeout inside three minutes.",
          runScore: "87-58 NYK",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description: "New York's bench unit kept the foot on the gas with a 10-2 run to open the fourth, extending the lead past 35 and signaling the series was fully, irreversibly over. The starters never returned.",
          runScore: "120-81 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This was not an upset — it was a coronation. New York arrived in Cleveland for Game 4 already in control of every meaningful basketball conversation, and what unfolded in Rocket Mortgage FieldHouse was less a basketball game than a formal announcement. Brunson was everywhere, Bridges was ruthlessly efficient, and Anunoby made Donovan Mitchell — a player who scored 101 points in four games — feel completely irrelevant. Cleveland's 26.8% three-point shooting for the series tells one story; Mitchell's cumulative -75 plus/minus tells an uglier one underneath it. The Knicks are going to the NBA Finals for the first time since 1999, and after watching this series, it is difficult to imagine who in the Western Conference is equipped to stop them.",
    },
    {
      gameId: "SA-OKC-20260527",
      teams: { home: "OKC", away: "SA" },
      finalScore: { home: 127, away: 114 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:14",
          description: "San Antonio came out with stunning aggression, racing to a 22-11 lead on a barrage of transition buckets and corner threes. The Spurs looked every bit like a 62-win team unbothered by the road environment, and Paycom Center shifted uneasily in its seats.",
          runScore: "22-11 SA",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:45",
          description: "Oklahoma City responded with a ferocious 19-4 swing built on defensive intensity and transition offense — the kind of run that has defined this Thunder team all season. Shai Gilgeous-Alexander was unstoppable in pick-and-roll, scoring 11 of those 19 points personally and erasing San Antonio's lead entirely.",
          runScore: "40-38 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "1:30",
          description: "Wembanyama swatted a Gilgeous-Alexander floater with his left hand and immediately initiated a fast break, finishing with a two-handed flush on the other end to give San Antonio a 2-point edge heading into the half. The block sent a jolt through the building — a reminder of exactly why the Spurs were seeded second.",
          runScore: "51-49 SA",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:22",
          description: "Oklahoma City opened the third quarter on a 16-5 run, with Gilgeous-Alexander and Chet Holmgren combining for 14 of those points in a dazzling display of two-way complementary basketball. The Thunder finally looked like the team that won 64 regular season games — locked in, physical, and deeply comfortable operating in high-stakes possessions.",
          runScore: "82-63 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:15",
          description: "The Spurs mounted one final charge — a 10-2 run capped by a Wembanyama three from the logo that trimmed the OKC lead to 12 and briefly forced a Thunder timeout. The run had the look of a real threat until Gilgeous-Alexander drained a step-back three on the very next possession to effectively seal the outcome.",
          runScore: "106-94 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio came to Paycom Center ready to fight and nearly stole the narrative in the opening quarter, but Oklahoma City's third quarter was the kind of basketball that reminds you why this franchise has been the best team in the West all season. Shai Gilgeous-Alexander finished with a performance that will not fit cleanly into a box score — equal parts scorer, creator, and closer — and Chet Holmgren's interior presence neutralized Wembanyama's most dangerous dimensions. The Spurs' 62 wins are no mirage, and Wembanyama's block-and-slam in the second quarter was the kind of play that belongs in a highlight package regardless of outcome. But OKC's depth, defensive rotation, and Gilgeous-Alexander's fourth-quarter composure were simply one tier above everything San Antonio could manufacture on the road.",
    },
  ],
};