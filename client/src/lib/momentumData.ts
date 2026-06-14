// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 14, 2026
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
  date: "June 14, 2026",
  gameOfTheNight: "NYK-SAS-20260613",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "New York Knicks",
    clutchRating: 97,
    description:
      "Brunson was simply unstoppable when the stakes were highest. He scored 17 of his 41 points in the fourth quarter alone, converting two critical and-one opportunities and draining a pull-up mid-range jumper over Wembanyama with 1:42 remaining to push the Knicks' lead to four. His ability to weaponize Thibodeau's staggered-screen reads against the Castle-Wembanyama coverage scheme turned San Antonio's most carefully constructed defensive blueprint into rubble.",
  },
  games: [
    {
      gameId: "NYK-SAS-20260613",
      teams: { home: "San Antonio Spurs", away: "New York Knicks" },
      finalScore: { home: 90, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:22",
          description:
            "Wembanyama ignited Frost Bank Center with back-to-back blocks followed by a coast-to-coast layup, capping an 11-2 Spurs run that gave San Antonio early command and had the crowd sensing a series-tying statement game.",
          runScore: "11-2 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:47",
          description:
            "Brunson began dismantling the Castle-Wembanyama coverage with a series of right-side staggered-screen actions, engineering a 14-4 New York run that erased the deficit and flipped the emotional energy in the building. Three consecutive Brunson baskets — a floater, a step-back three, and an and-one drive — were the sequence that rewired the game.",
          runScore: "14-4 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description:
            "San Antonio's De'Aaron Fox found a second gear in the third, rattling off 9 quick points on mid-range pull-ups and free throws to spark a 13-5 Spurs surge that reclaimed the lead and briefly restored belief inside Frost Bank Center.",
          runScore: "13-5 SAS",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:31",
          description:
            "New York's switching scheme suffocated San Antonio's half-court sets to open the fourth quarter, forcing three consecutive shot-clock violations and turnovers. The Knicks converted the chaos into a 10-2 run, seizing a lead they would never relinquish and holding the Spurs to a staggering 19 second-half points total.",
          runScore: "10-2 NYK",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:05",
          description:
            "Wembanyama hit a desperation three-pointer to trim the deficit to two and gave San Antonio fans one final heartbeat, but it proved too little too late as the Knicks calmly executed at the free-throw line to close it out.",
          runScore: "3-0 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Pull-up mid-range jumper over a closing Wembanyama from the right elbow — the signature shot of Thibodeau's staggered-screen package — with 1:42 remaining to push New York's advantage to four and functionally ice the road victory.",
          timeRemaining: "1:42",
          winProbabilityShift: 28,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Absorbed contact driving baseline through Castle's coverage, converted the layup, and sank the free throw to complete a three-point play that extended the lead to five with 3:08 left and silenced the Frost Bank Center crowd.",
          timeRemaining: "3:08",
          winProbabilityShift: 19,
        },
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "Step-back three-pointer from the left wing over a scrambling Josh Hart to cut the deficit to two and reignite the crowd with 58 seconds remaining, momentarily threatening to force a Knicks timeout.",
          timeRemaining: "0:58",
          winProbabilityShift: -14,
        },
        {
          player: "OG Anunoby",
          team: "New York Knicks",
          description:
            "Stripped De'Aaron Fox on a live-ball drive with 2:21 remaining, pushing the pace for a Brunson-led fast break that resulted in two free throws and pushed the lead back to five at a critical juncture.",
          timeRemaining: "2:21",
          winProbabilityShift: 17,
        },
      ],
      narrative:
        "This was the night Jalen Brunson etched his name into Knicks lore, delivering a 41-point masterclass on the road in a must-win NBA Finals game with the precision of someone who had already seen every defensive wrinkle San Antonio could draw up. Thibodeau's staggered-screen adjustments were the tactical masterstroke, systematically dismantling the Castle-Wembanyama coverage scheme that had bottled Brunson up in Games 2 and 3 and leaving Spurs head coach Gregg Popovich Jr. with no clean answers. Wembanyama was magnificent — 29 points, 11 rebounds, three blocks — but the Spurs' offensive infrastructure crumbled when New York's switching scheme denied Fox clean looks and forced San Antonio into isolation basketball in the second half. Holding a Finals-caliber opponent to 19 second-half points on their home floor, in a Game 5 with the series on the line, is the kind of defensive performance that defines championships. The Knicks head back to Madison Square Garden on the edge of ending a 53-year drought, and the city is already shaking.",
    },
  ],
};