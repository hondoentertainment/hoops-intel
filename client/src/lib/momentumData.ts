// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 27, 2026
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
  date: "April 27, 2026",
  gameOfTheNight: "CLE-TOR-20260426",
  topClutchPerformer: { 
    player: "Pascal Siakam", 
    team: "TOR", 
    clutchRating: 94, 
    description: "Scored 8 points in the final 3 minutes to seal Toronto's shocking upset victory over Cleveland"
  },
  games: [
    {
      gameId: "CLE-TOR-20260426",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 93, away: 89 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:42",
          description: "Cleveland opens with authority as Mitchell drills three straight threes",
          runScore: "11-4 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "3:15",
          description: "Siakam awakens with back-to-back dunks, igniting Scotiabank Arena",
          runScore: "13-6 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "6:28",
          description: "Cavs surge with 9-0 run as Garland finds his rhythm from deep",
          runScore: "9-0 CLE",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "4:47",
          description: "Raptors explode with crushing 12-2 run to stun the heavily favored Cavaliers",
          runScore: "12-2 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Step-back jumper over Evan Mobley to break 85-85 tie",
          timeRemaining: "2:47",
          winProbabilityShift: 18.5
        },
        {
          player: "OG Anunoby",
          team: "TOR",
          description: "Steal and fast-break slam extends lead to 5",
          timeRemaining: "1:23",
          winProbabilityShift: 22.3
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Contested three-pointer cuts deficit to 2 with 41 seconds left",
          timeRemaining: "0:41",
          winProbabilityShift: -15.7
        }
      ],
      narrative: "Pascal Siakam turned back the clock in stunning fashion, delivering a vintage playoff performance that sent shockwaves through the postseason landscape. The veteran forward completely dominated the fourth quarter, scoring 11 of his 28 points in the final frame to orchestrate one of the most surprising upsets in recent playoff memory. Toronto's physicality and home court energy overwhelmed a Cleveland team that entered as heavy favorites, immediately transforming this series from a potential sweep into a legitimate upset threat. The Raptors proved they still have championship DNA coursing through their veins."
    },
    {
      gameId: "SAS-POR-20260426",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 93, away: 114 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:14",
          description: "Lillard comes out blazing with 12 first-quarter points to energize Portland",
          runScore: "16-8 POR",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "Wembanyama takes over with 13 points in 6 minutes, showcasing his elite scoring",
          runScore: "18-7 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "7:22",
          description: "Spurs break the game open with devastating 15-3 run behind Wemby's dominance",
          runScore: "15-3 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "8:15",
          description: "San Antonio cruises with bench unit extending lead to 25 points",
          runScore: "12-4 SAS",
          momentum: "away",
          keyPlayer: "Keldon Johnson",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama announced his arrival on the playoff stage with a masterclass performance that left the basketball world in awe. The French phenom completely controlled both ends of the floor, using his unique combination of size, skill, and basketball IQ to dismantle Portland's veteran-laden roster. His third-quarter explosion effectively ended the series, as the Trail Blazers had no answer for his devastating two-way impact. Wembanyama's playoff debut served as a frightening preview of San Antonio's championship potential with their generational talent leading the charge."
    },
    {
      gameId: "BOS-PHI-20260426",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 96, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:47",
          description: "Embiid starts strong with 8 early points as Philly matches Boston's intensity",
          runScore: "12-8 PHI",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "4:12",
          description: "Tatum catches fire with 15 second-quarter points, turning a close game into a rout",
          runScore: "21-9 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "8:33",
          description: "Celtics bury Philadelphia with 11 threes in the quarter, extending lead to 28",
          runScore: "35-19 BOS",
          momentum: "away",
          keyPlayer: "Derrick White",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "Boston coasts with reserves as the game becomes a 32-point blowout",
          runScore: "15-8 BOS",
          momentum: "away",
          keyPlayer: "Sam Hauser",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Jayson Tatum delivered a championship-caliber statement performance that left Philadelphia's title hopes in tatters. The Celtics superstar was absolutely unstoppable from the opening tip, methodically dismantling the Sixers' defense with a combination of elite shot-making and playoff poise that few players possess. Boston's three-point barrage in the third quarter completely demoralized a Philadelphia team that entered with high expectations but looked overwhelmed by the Celtics' championship experience. This dominant road victory shifted the entire series momentum and established Boston as the clear favorite to advance."
    },
    {
      gameId: "LAL-HOU-20260426",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 115, away: 96 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:25",
          description: "LeBron opens with vintage aggression, scoring 10 first-quarter points",
          runScore: "14-8 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "6:18",
          description: "Şengün dominates the paint with 12 points and 4 assists in the quarter",
          runScore: "16-9 HOU",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:44",
          description: "Rockets seize control with 14-4 run as Şengün outplays Anthony Davis",
          runScore: "14-4 HOU",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:12",
          description: "Houston pulls away with balanced scoring as Lakers show their age",
          runScore: "18-11 HOU",
          momentum: "home",
          keyPlayer: "Jalen Green",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Alperen Şengün announced himself as a legitimate playoff star with a dominant two-way performance that exposed the Lakers' championship window closing rapidly. The Turkish center completely outclassed Anthony Davis in the paint battle, using his superior conditioning and basketball IQ to control the game's tempo and pace. Houston's youthful energy overwhelmed an aging Lakers core that struggled to match the Rockets' intensity for 48 minutes. This statement victory gave the Rockets crucial home court advantage while raising serious questions about whether LeBron and company have another championship run left in the tank."
    }
  ],
};