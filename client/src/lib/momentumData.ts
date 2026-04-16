// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 16, 2026
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
  date: "April 16, 2026",
  gameOfTheNight: "GSW-LAC-20260415",
  topClutchPerformer: { 
    player: "Stephen Curry", 
    team: "GSW", 
    clutchRating: 94, 
    description: "Two clutch threes in final 3 minutes to seal Warriors' season-saving victory" 
  },
  games: [
    {
      gameId: "ORL-PHI-20260415",
      teams: { home: "PHI", away: "ORL" },
      finalScore: { home: 109, away: 97 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:42",
          description: "Orlando opens with aggressive pace, Banchero scores 8 early points to stun Philadelphia crowd",
          runScore: "14-6 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Maxey takes over with 11 points in 3 minutes, Sixers flip script with suffocating defense",
          runScore: "18-4 PHI",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "6:20",
          description: "VJ Edgecombe's fearless rookie energy sparks 12-2 run, Philly pulls away decisively",
          runScore: "12-2 PHI",
          momentum: "home",
          keyPlayer: "VJ Edgecombe",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "9:45",
          description: "Banchero's shooting woes continue as Kelly Oubre Jr. buries back-to-back threes to seal it",
          runScore: "10-2 PHI",
          momentum: "home",
          keyPlayer: "Kelly Oubre Jr.",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Philadelphia's playoff experience showed in crunch time as Tyrese Maxey commanded the biggest stage with surgical precision. The breakout performance of rookie VJ Edgecombe provided the X-factor Philadelphia needed, while Paolo Banchero's shooting nightmare became Orlando's season-ending catastrophe. The Sixers advance to face Boston knowing they have multiple weapons capable of rising to playoff moments."
    },
    {
      gameId: "GSW-LAC-20260415",
      teams: { home: "LAC", away: "GSW" },
      finalScore: { home: 121, away: 126 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:15",
          description: "Curry shows no rust with 3 early threes, Warriors jump out fast in elimination game",
          runScore: "15-4 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Kawhi Leonard battles through injury with 12 second-quarter points, Clippers claw back",
          runScore: "16-8 LAC",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "2:45",
          description: "Mathurin catches fire from three-point land, hits 4 triples to give Clippers their biggest lead",
          runScore: "20-9 LAC",
          momentum: "home",
          keyPlayer: "Bennedict Mathurin",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:12",
          description: "Gui Santos emerges as unlikely hero with clutch baskets, Warriors regain control",
          runScore: "11-3 GSW",
          momentum: "away",
          keyPlayer: "Gui Santos",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GSW",
          description: "Step-back three over Leonard with 2:47 remaining",
          timeRemaining: "2:47",
          winProbabilityShift: 15
        },
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "Fadeaway jumper through contact to keep Clippers within 3",
          timeRemaining: "1:55",
          winProbabilityShift: -8
        },
        {
          player: "Stephen Curry",
          team: "GSW",
          description: "Pull-up three in transition to extend lead to 6",
          timeRemaining: "1:12",
          winProbabilityShift: 18
        }
      ],
      narrative: "Stephen Curry turned back time in the most crucial elimination game of his twilight years, showing zero mercy at Intuit Dome with vintage championship composure. The 38-year-old maestro's vintage performance overshadowed Kawhi Leonard's gutsy effort through injury, while unlikely heroes like Gui Santos provided the depth that championship teams require. Golden State's season lives another day, but the Warriors know they'll need this same magic against Phoenix to keep their playoff dreams breathing."
    }
  ]
};