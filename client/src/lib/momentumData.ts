// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 19, 2026
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
  date: "April 19, 2026",
  gameOfTheNight: "DEN-MIN-20260418",
  topClutchPerformer: { 
    player: "Nikola Jokić", 
    team: "DEN", 
    clutchRating: 92, 
    description: "Orchestrated a flawless 13th straight win with surgical precision, shooting 10-of-15 while conducting Denver's symphony offense" 
  },
  games: [
    {
      gameId: "TOR-CLE-20260418",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 126, away: 113 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:24",
          description: "Evan Mobley announces his arrival with back-to-back dunks and a thunderous block on Scottie Barnes",
          runScore: "12-4 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:17",
          description: "RJ Barrett catches fire from three, hitting three consecutive triples to pull Toronto within striking distance",
          runScore: "9-2 TOR",
          momentum: "away",
          keyPlayer: "RJ Barrett",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:32",
          description: "Mobley and Garland combine for 14 points in a devastating 18-6 run that breaks the game wide open",
          runScore: "18-6 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley's career night was a coming-out party for the ages, as he dominated the Raptors with relentless interior assault. The fourth-year big man was virtually unstoppable around the rim, converting contested shots with surgical precision while protecting the paint like a fortress. Cleveland's balanced attack and Mobley's two-way brilliance turned what started as a competitive affair into a statement victory. The Cavaliers' offensive efficiency was a thing of beauty, with crisp ball movement and elite shot selection leading to a dominant wire-to-wire performance."
    },
    {
      gameId: "MIN-DEN-20260418",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 116, away: 105 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:45",
          description: "Anthony Edwards explodes for 11 early points, including two highlight-reel drives that energize the visiting crowd",
          runScore: "13-7 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "9:12",
          description: "Jokić begins his masterclass with five assists in three minutes, finding Aaron Gordon for back-to-back alley-oops",
          runScore: "14-4 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "5:28",
          description: "Denver's championship pedigree shows as they execute a suffocating defensive stretch while Jokić orchestrates perfection",
          runScore: "19-8 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:47",
          description: "The Nuggets' depth takes over as KCP and Gordon combine for 12 points to salt away the 13th straight victory",
          runScore: "16-9 DEN",
          momentum: "home",
          keyPlayer: "Kentavious Caldwell-Pope",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Nikola Jokić's basketball artistry was on full display as Denver extended their incredible winning streak to 13 games. The two-time MVP played like a chess master, seeing moves three steps ahead while his teammates executed with championship-level precision. Minnesota's early energy couldn't match Denver's relentless execution and suffocating defensive adjustments. This was a clinic in how championship teams impose their will, with the Nuggets methodically breaking down a quality opponent through superior basketball IQ and depth."
    },
    {
      gameId: "ATL-NY-20260418",
      teams: { home: "NY", away: "ATL" },
      finalScore: { home: 113, away: 102 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:33",
          description: "Trae Young dazzles Madison Square Garden with three deep threes and two no-look assists",
          runScore: "13-6 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "8:19",
          description: "Jalen Brunson takes over with 12 points in five minutes, including a step-back three that silences the Atlanta bench",
          runScore: "17-8 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:15",
          description: "Julius Randle and OG Anunoby combine for 14 points as New York's size advantage becomes overwhelming",
          runScore: "16-7 NY",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Garden was electric as Jalen Brunson put on a point guard clinic against his former team's division rival. After Trae Young's early fireworks threatened to steal the show, Brunson responded with the poise and precision that has made him a Knicks legend. New York's superior size and depth gradually wore down Atlanta's perimeter-heavy attack. The Knicks' balanced scoring and defensive intensity showcased why they've been one of the East's most consistent teams, methodically pulling away from a dangerous Hawks squad."
    },
    {
      gameId: "HOU-LAL-20260418",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 107, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:11",
          description: "Alperen Şengün showcases his skill set with 8 early points and 3 assists, giving Houston early confidence",
          runScore: "12-6 HOU",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "7:24",
          description: "Anthony Davis awakens with three consecutive blocks and two thunderous dunks that electrify crypto.com Arena",
          runScore: "10-2 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "5:43",
          description: "D'Angelo Russell catches fire from deep, hitting four threes in six minutes to blow the game open",
          runScore: "18-8 LAL",
          momentum: "home",
          keyPlayer: "D'Angelo Russell",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:15",
          description: "Davis dominates both ends with 7 points and 2 blocks to seal the Lakers' fourth straight victory",
          runScore: "11-4 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Davis reminded everyone why he's still one of the league's most dominant two-way forces, completely taking over this game in the second half. After Houston's early energy and Şengün's crafty play-making, the Lakers' veteran savvy and playoff experience began to show. Davis was a defensive anchor and offensive catalyst, while D'Angelo Russell's hot shooting provided the perfect complement. The Lakers' four-game winning streak has them peaking at the perfect time, with Davis looking like his championship-winning self from 2020."
    }
  ]
};