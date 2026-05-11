// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 11, 2026
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
  date: "May 11, 2026",
  gameOfTheNight: "SAS-MIN-20260510",
  topClutchPerformer: {
    player: "Anthony Edwards",
    team: "MIN",
    clutchRating: 96,
    description: "With the Wolves' season on the line in a tied series, Edwards was a force of nature in the fourth quarter — 16 points on pure will, turning a 2-point deficit into a 5-point victory after Wembanyama's ejection threatened to give San Antonio an insurmountable psychological edge.",
  },
  games: [
    {
      gameId: "NYK-PHI-20260510",
      teams: { home: "PHI", away: "NYK" },
      finalScore: { home: 114, away: 144 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:21",
          description: "New York opened the floodgates early, drilling 11 three-pointers in the first quarter alone. Deuce McBride hit 4 consecutive triples in a 6-minute stretch that had Philadelphia's bench visibly rattled and Xfinity Mobile Arena eerily silent.",
          runScore: "15-2 NYK run",
          momentum: "away",
          keyPlayer: "Miles McBride",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "8:44",
          description: "Joel Embiid briefly steadied Philadelphia with back-to-back buckets inside to cut the deficit to 14, but Jalen Brunson answered immediately with a pull-up three to push it back to 17. The window closed before it ever truly opened.",
          runScore: "7-2 PHI run answered by 5-0 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Karl-Anthony Towns orchestrated a surgical 12-2 third-quarter run, dishing four assists in under three minutes as New York buried any lingering Philadelphia hope. The lead ballooned past 30 and the game entered garbage time with the Knicks still firing from deep.",
          runScore: "12-2 NYK run",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Paul George, finishing with a -35 plus-minus, exited to a cascade of boos from the home crowd as the Knicks bench celebrated freely. The final quarter was a formality — New York coasted to 144, tying the NBA postseason record for three-pointers in a single game.",
          runScore: "Final margin: 30",
          momentum: "away",
          keyPlayer: "Miles McBride",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a basketball game — it was a coronation. The New York Knicks made history on Philadelphia's floor, tying the all-time postseason record with 25 three-pointers while sweeping a 76ers team that never found an answer for New York's perimeter assault. Deuce McBride, a last-minute replacement for the injured OG Anunoby, delivered the performance of his career at the perfect moment, going 7-of-9 from deep as if the stage meant nothing. Joel Embiid was flawless and irrelevant — a perfect 8-of-8, 24 points, and a 30-point loss — a fitting and cruel encapsulation of this era of Sixers basketball. The Knicks are headed to the Eastern Conference Finals riding the hottest shooting display in playoff history.",
    },
    {
      gameId: "SAS-MIN-20260510",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 114, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:48",
          description: "Victor Wembanyama picked up his second foul just four minutes in, and with his franchise cornerstone on the bench, San Antonio's defensive structure unraveled. Anthony Edwards immediately attacked the paint, scoring 8 quick points to give Minnesota the early edge.",
          runScore: "10-4 MIN run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "2:15",
          description: "Wembanyama was ejected for a flagrant-2 foul with 12 minutes elapsed in the game. The arena erupted and the psychological shift was immediate — the Spurs' entire identity walked to the locker room early. Dylan Harper responded defiantly off the bench, scoring 8 second-quarter points to keep San Antonio within 3 at the half.",
          runScore: "8-3 SAS bench run",
          momentum: "away",
          keyPlayer: "Dylan Harper",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "De'Aaron Fox and Stephon Castle traded buckets with Edwards through a ferocious third quarter that saw six lead changes. The Spurs, playing with relentless pride without Wemby, held a 4-point lead entering the final frame — the moment demanded a closer, and Minnesota had one.",
          runScore: "Tied at 89 entering Q4",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:02",
          description: "Anthony Edwards took the game over completely, scoring 16 fourth-quarter points in a performance he dedicated to his late mother. A ferocious reverse layup through contact with 2:18 remaining gave Minnesota the lead for good, and Edwards sealed it at the free-throw line with ice in his veins.",
          runScore: "34-25 MIN Q4",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Driving reverse layup through contact over Castle — and-one — to give Minnesota its first lead since the third quarter, sending Target Center into pandemonium.",
          timeRemaining: "2:18",
          winProbabilityShift: 34,
        },
        {
          player: "Dylan Harper",
          team: "SAS",
          description: "Fearless pull-up mid-range jumper over Jaden McDaniels to cut the deficit to 2 with under 90 seconds left — a 21-year-old rookie refusing to let the Spurs die.",
          timeRemaining: "1:24",
          winProbabilityShift: -18,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Two clutch free throws after Harper's bucket to restore a 4-point lead and effectively seal the series-evening victory.",
          timeRemaining: "0:58",
          winProbabilityShift: 22,
        },
      ],
      narrative: "This game had everything: an ejection that changed history, a rookie refusing to be awed, and a superstar delivering his best performance when the stakes were highest. When Victor Wembanyama walked off the Target Center floor in the first half, it should have been over — but the San Antonio Spurs, built deep and tough, actually took a fourth-quarter lead and forced Anthony Edwards to prove himself without the luxury of a defining advantage. Edwards answered in the most personal way possible, dedicating each of his 16 fourth-quarter points to his late mother in a sequence that felt bigger than basketball. Dylan Harper's fearlessness in the clutch was the series' best subplot — but tonight belonged entirely to Ant. The series is tied 2-2 and heading back to San Antonio.",
    },
  ],
};