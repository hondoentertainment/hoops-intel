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
  gameOfTheNight: "CLE-TOR-20260501",
  topClutchPerformer: { 
    player: "Pascal Siakam", 
    team: "TOR", 
    clutchRating: 94, 
    description: "Overtime masterclass with 8 points in the extra frame, including the game-sealing three-pointer with 47 seconds remaining"
  },
  games: [
    {
      gameId: "LAL-HOU-20260501",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 78, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "LeBron James orchestrates 12-0 Lakers run with two three-pointers and a thunderous dunk",
          runScore: "12-0 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:15",
          description: "Alperen Sengun sparks brief Rockets rally with back-to-back buckets and assist to Green",
          runScore: "8-2 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "8:30",
          description: "Anthony Davis dominates the paint with 3 consecutive stops and putback slam",
          runScore: "10-2 LAL",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:45",
          description: "Lakers' suffocating defense forces 4 straight Houston turnovers to seal the blowout",
          runScore: "14-4 LAL",
          momentum: "away",
          keyPlayer: "Austin Reaves",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Lakers' championship pedigree was on full display as they systematically dismantled Houston's upset hopes with relentless defensive pressure and vintage LeBron brilliance. After falling behind in Game 1, Los Angeles responded with the kind of road playoff dominance that separates contenders from pretenders. The 20-point margin doesn't capture how thoroughly the Lakers controlled every aspect of this elimination response, turning Toyota Center into their personal playground. This was playoff basketball at its most ruthless—veteran savvy overwhelming youthful exuberance when the stakes demanded perfection."
    },
    {
      gameId: "CLE-TOR-20260501",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 112, away: 110 },
      swings: [
        {
          quarter: "1st",
          timestamp: "4:20",
          description: "Donovan Mitchell explodes for 11 quick points to give Cavaliers early double-digit lead",
          runScore: "15-4 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "7:15",
          description: "Pascal Siakam takes over with 9 straight Raptors points, silencing Scotiabank Arena",
          runScore: "9-0 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "2:30",
          description: "Mitchell's step-back three ties the game and forces overtime in dramatic fashion",
          runScore: "7-2 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        },
        {
          quarter: "OT",
          timestamp: "2:15",
          description: "Siakam's clutch three-pointer caps 6-0 Raptors run in overtime to steal victory",
          runScore: "6-0 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three-pointer over Barnes to tie game at 103-103",
          timeRemaining: "0:42",
          winProbabilityShift: -15
        },
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Contested three-pointer from the wing to put Raptors up 108-105",
          timeRemaining: "0:47 OT",
          winProbabilityShift: 22
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Crucial defensive stop and steal leading to game-sealing free throws",
          timeRemaining: "0:18 OT",
          winProbabilityShift: 18
        }
      ],
      narrative: "This was playoff basketball poetry in motion—two elite talents trading haymakers in a heavyweight bout that lived up to every ounce of postseason hype. Mitchell and Siakam engaged in a masterful duel that showcased why these April and May battles define legacies, with each clutch shot answered by an even more impossible response. The overtime period was pure basketball theater, with Scotiabank Arena reaching decibel levels that haven't been heard since the championship days. When the smoke cleared, Toronto had stolen home-court advantage and potentially the entire series with one of the most dramatic victories in franchise playoff history."
    },
    {
      gameId: "DET-ORL-20260501",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 79, away: 93 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:15",
          description: "Paolo Banchero scores 8 early points to give Magic initial momentum on home court",
          runScore: "10-2 ORL",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:30",
          description: "Cade Cunningham takes control with 12 points in final 6 minutes of first half",
          runScore: "16-6 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:45",
          description: "Detroit's suffocating defense forces 6 Magic turnovers in devastating 18-4 run",
          runScore: "18-4 DET",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:20",
          description: "Pistons' championship experience shows as they cruise to elimination game victory",
          runScore: "12-5 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "The basketball gods have a sense of humor, and Detroit's championship DNA proved too much for Orlando's Cinderella story to overcome in this crucial Game 5. Just when the Magic appeared ready to complete one of the most shocking upsets in playoff history, the Pistons reminded everyone why experience matters most in elimination games. Cunningham played like the franchise cornerstone he was drafted to be, methodically picking apart Orlando's defense with surgical precision while his supporting cast suffocated Paolo Banchero and the young Magic core. The series heads back to Detroit for Game 6, where the Pistons will look to complete their championship defense and Orlando will attempt to recapture their magical upset momentum."
    }
  ]
};