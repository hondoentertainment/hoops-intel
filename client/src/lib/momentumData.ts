// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 2, 2026
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
  date: "May 2, 2026",
  gameOfTheNight: "CLE-TOR-20260502",
  topClutchPerformer: {
    player: "Pascal Siakam",
    team: "TOR",
    clutchRating: 94,
    description: "Delivered ice-cold daggers in overtime with 8 clutch points, including the game-sealing three-pointer with 47 seconds remaining to give Toronto a commanding 2-1 series lead."
  },
  games: [
    {
      gameId: "LAL-HOU-20260502",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 78, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:42",
          description: "LeBron James ignites early Lakers surge with back-to-back threes",
          runScore: "12-2 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Rockets respond with Alperen Sengun-led inside assault",
          runScore: "8-0 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "Anthony Davis defensive showcase triggers 16-4 Lakers avalanche",
          runScore: "16-4 LAL",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "9:12",
          description: "Lakers bench mob extends lead with suffocating defense",
          runScore: "10-2 LAL",
          momentum: "away",
          keyPlayer: "Rui Hachimura",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "LeBron James turned back the clock with vintage elimination-game brilliance, orchestrating a masterclass road victory that silenced the Toyota Center crowd and proved the Lakers' championship DNA remains intact. The 20-point blowout was a statement performance after their shocking Game 1 defeat, with Davis providing the defensive anchor and James the offensive maestro in perfect playoff harmony. Houston's young core crumbled under the pressure of Lakers playoff pedigree, shooting just 36% as their home-court advantage evaporated. The series returns to Los Angeles knotted at 1-1, but the psychological momentum has completely shifted to the purple and gold."
    },
    {
      gameId: "CLE-TOR-20260502",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 112, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:22",
          description: "Donovan Mitchell eruption gives Cavaliers commanding lead",
          runScore: "14-4 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "5:15",
          description: "Pascal Siakam takeover sparks Raptors comeback surge",
          runScore: "18-6 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "2:45",
          description: "Mitchell clutch three forces overtime drama",
          runScore: "7-2 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "OT",
          timestamp: "3:12",
          description: "Siakam overtime mastery seals series momentum shift",
          runScore: "8-4 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three with defender draped over him",
          timeRemaining: "2:45",
          winProbabilityShift: -15
        },
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Fadeaway jumper over double team in overtime",
          timeRemaining: "1:23",
          winProbabilityShift: 12
        },
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Dagger three-pointer to seal overtime victory",
          timeRemaining: "0:47",
          winProbabilityShift: 18
        }
      ],
      narrative: "Scotiabank Arena witnessed pure playoff poetry as Pascal Siakam and Donovan Mitchell engaged in an otherworldly scoring duel that required overtime to settle. Mitchell's 33-point explosion nearly single-handedly carried Cleveland, but Siakam's championship experience shone brightest when the lights were hottest. The Raptors' veteran savvy overwhelmed Cleveland's talent in the extra session, turning a potential road steal into a crushing defeat that puts the Cavaliers on the brink. Toronto now holds home-court advantage and series momentum heading into what promises to be an epic Game 4 showdown."
    },
    {
      gameId: "DET-ORL-20260502",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 79, away: 93 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:18",
          description: "Cade Cunningham early statement with perfect shooting start",
          runScore: "10-2 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "9:45",
          description: "Paolo Banchero answers back with aggressive drives",
          runScore: "8-0 ORL",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "4:33",
          description: "Pistons championship experience takes control with defensive surge",
          runScore: "14-2 DET",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:21",
          description: "Cunningham elimination-game brilliance seals survival",
          runScore: "12-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Cade Cunningham played with the poise of a playoff veteran far beyond his years, delivering an elimination-game masterpiece that saved Detroit from one of the most shocking upsets in NBA history. The young star shot with clinical precision while orchestrating a suffocating defensive performance that exposed Orlando's playoff inexperience on their home court. Detroit's championship DNA finally surfaced when facing elimination, turning the Kia Center into a house of horrors for the Magic's Cinderella run. The series heads back to Detroit for Game 6, where the Pistons will look to complete their escape act and the Magic must prove their magical season isn't over yet."
    }
  ]
};