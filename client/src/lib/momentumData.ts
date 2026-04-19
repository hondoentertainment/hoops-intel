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
    description: "Orchestrated a masterful 13th straight win with surgical precision, extending the NBA's longest active winning streak with his two-way excellence" 
  },
  games: [
    {
      gameId: "TOR-CLE-20260418",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 126, away: 113 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:23",
          description: "Evan Mobley announces his presence with authority, scoring 11 straight points in the paint to ignite Rocket Arena",
          runScore: "15-4 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:17",
          description: "RJ Barrett responds with back-to-back threes, cutting Cleveland's lead to single digits as Toronto finds its rhythm",
          runScore: "8-2 TOR",
          momentum: "away",
          keyPlayer: "RJ Barrett",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "6:45",
          description: "Mobley and Garland take over with a devastating 12-0 run, showcasing the Cavs' interior-perimeter balance",
          runScore: "12-0 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:21",
          description: "Cleveland's defense clamps down with three consecutive stops while Mobley dominates the glass",
          runScore: "9-2 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley's career night turned Rocket Arena into his personal showcase, as the fourth-year big man carved up Toronto with a perfect blend of power and finesse. The Cavaliers' interior dominance was so complete that the Raptors looked helpless in the paint, watching Mobley shoot an absurd 68% from the field. Cleveland's balanced attack and suffocating defense never allowed Toronto to mount a serious comeback, turning what could have been a competitive Eastern Conference battle into a statement win."
    },
    {
      gameId: "MIN-DEN-20260418",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 116, away: 105 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:14",
          description: "Anthony Edwards starts hot with 8 quick points, giving Minnesota an early edge at Ball Arena",
          runScore: "8-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:33",
          description: "Jokić begins to flex his playmaking muscles, threading impossible passes for three consecutive Denver buckets",
          runScore: "7-0 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "8:47",
          description: "The MVP candidate takes over completely, scoring and assisting on a devastating 14-2 run that breaks Minnesota's spirit",
          runScore: "14-2 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "4:12",
          description: "Aaron Gordon and KCP provide the dagger shots as Denver's depth overwhelms a tired Timberwolves squad",
          runScore: "10-3 DEN",
          momentum: "home",
          keyPlayer: "Aaron Gordon",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Threading a no-look pass through triple coverage to find Caldwell-Pope for a corner three",
          timeRemaining: "3:47",
          winProbabilityShift: 12.3
        }
      ],
      narrative: "Nikola Jokić conducted another symphony of basketball brilliance, extending Denver's historic winning streak to 13 games with a performance that reminded everyone why he's a two-time MVP. The Serbian maestro made the difficult look effortless, picking apart Minnesota's defense with surgical precision while Anthony Edwards struggled to find his usual explosive rhythm. This wasn't just another regular season win—it was a statement that Denver is peaking at the perfect time, looking every bit like a championship contender."
    },
    {
      gameId: "ATL-NY-20260418",
      teams: { home: "NY", away: "ATL" },
      finalScore: { home: 113, away: 102 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:45",
          description: "Trae Young dazzles early with three deep threes, silencing the Madison Square Garden crowd",
          runScore: "11-4 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "9:18",
          description: "Jalen Brunson answers back with his own scoring flurry, igniting the Garden faithful as the Knicks take control",
          runScore: "13-2 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "6:22",
          description: "Randle and Anunoby combine for a powerful 10-0 run, showcasing New York's improved two-way balance",
          runScore: "10-0 NY",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "5:47",
          description: "The Knicks' defense suffocates Atlanta's offense with three straight steals leading to transition buckets",
          runScore: "8-2 NY",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Madison Square Garden witnessed vintage playoff-atmosphere basketball as Jalen Brunson outdueled Trae Young in a clash of elite point guards. While Young provided early fireworks, Brunson's steady excellence and the Knicks' superior depth gradually wore down Atlanta's resistance. New York's transformation into a legitimate Eastern Conference contender was on full display, with their suffocating defense and balanced offense proving too much for a Hawks team still searching for consistency."
    },
    {
      gameId: "HOU-LAL-20260418",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 107, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:56",
          description: "Alperen Şengün dominates early in the post, giving Houston a surprising early advantage at Crypto.com Arena",
          runScore: "9-2 HOU",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "6:33",
          description: "Anthony Davis awakens with a thunderous block leading to a transition dunk, sparking an 8-0 Lakers run",
          runScore: "8-0 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "7:41",
          description: "D'Angelo Russell catches fire from deep, hitting three consecutive threes to blow the game open",
          runScore: "11-2 LAL",
          momentum: "home",
          keyPlayer: "D'Angelo Russell",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:14",
          description: "Davis seals the victory with dominant paint presence, scoring 8 straight points to crush Houston's comeback hopes",
          runScore: "8-0 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Davis reminded everyone why he's still one of the league's most dominant two-way forces, methodically dismantling Houston's interior defense while anchoring a Lakers unit firing on all cylinders. The big man's efficient 25-point performance was the perfect complement to D'Angelo Russell's perimeter explosion, creating a balanced attack that Houston simply couldn't match. This fourth consecutive victory has the Lakers looking dangerous as the playoffs approach, with Davis playing at an All-NBA level when it matters most."
    }
  ]
};