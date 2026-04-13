// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 13, 2026
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
  date: "April 13, 2026",
  gameOfTheNight: "GS-LAC-20260412",
  topClutchPerformer: { 
    player: "Stephen Curry", 
    team: "GSW", 
    clutchRating: 94, 
    description: "Returned from 73-day absence to score 10 fourth-quarter points with three clutch threes, nearly stealing victory on the road" 
  },
  games: [
    {
      gameId: "ORL-BOS-20260412",
      teams: { home: "BOS", away: "ORL" },
      finalScore: { home: 113, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:42",
          description: "Paolo Banchero's personal 9-0 run gives Magic first double-digit lead",
          runScore: "9-0 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Jayson Tatum explodes for 15 third-quarter points to flip the script",
          runScore: "18-6 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "1:28",
          description: "Franz Wagner's contested three cuts deficit to one possession",
          runScore: "7-2 ORL",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Step-back three over Wagner with shot clock winding down",
          timeRemaining: "2:14",
          winProbabilityShift: 18.5
        },
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "And-one driving layup through contact to keep Magic alive",
          timeRemaining: "0:47",
          winProbabilityShift: -12.3
        }
      ],
      narrative: "The Celtics survived a desperate Orlando push in what felt like a playoff preview. Tatum's third-quarter explosion (15 points) was the difference-maker, but the Magic refused to fold as Banchero and Wagner combined for 11 fourth-quarter points. Boston's home-court advantage proved decisive in the final minutes, with Tatum delivering the dagger three that sent the Garden into a frenzy."
    },
    {
      gameId: "GS-LAC-20260412",
      teams: { home: "LAC", away: "GS" },
      finalScore: { home: 115, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:21",
          description: "Curry's first three in 73 days ignites Warriors and brings crowd to its feet",
          runScore: "10-2 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "game-changing"
        },
        {
          quarter: "Q2",
          timestamp: "4:33",
          description: "Bennedict Mathurin's 12-point quarter swing flips momentum to Clippers",
          runScore: "16-4 LAC",
          momentum: "home",
          keyPlayer: "Bennedict Mathurin",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "7:15",
          description: "Curry's vintage flurry of three straight threes gives Warriors late hope",
          runScore: "11-2 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "1:42",
          description: "Kawhi Leonard's clutch steal and dunk seals Clippers victory",
          runScore: "6-0 LAC",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GS",
          description: "Deep three from the logo to cut lead to three points",
          timeRemaining: "3:47",
          winProbabilityShift: -24.1
        },
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "Steal on Curry's pass attempt leads to thunderous dunk",
          timeRemaining: "1:42",
          winProbabilityShift: 28.7
        },
        {
          player: "Stephen Curry",
          team: "GS",
          description: "Pull-up three over Leonard keeps Warriors within striking distance",
          timeRemaining: "0:58",
          winProbabilityShift: -15.2
        }
      ],
      narrative: "Stephen Curry's miraculous return turned this play-in game into instant theater. The 38-year-old magician showed no rust from his 73-day absence, scoring 24 points and nearly willing Golden State to an impossible victory. His fourth-quarter barrage of three straight threes had the Intuit Dome holding its breath, but Kawhi Leonard's clutch defensive play ultimately preserved the Clippers' season. Wednesday's rematch just became the most anticipated play-in game in years."
    },
    {
      gameId: "DEN-SA-20260412",
      teams: { home: "SA", away: "DEN" },
      finalScore: { home: 118, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:11",
          description: "Jokic's perfect start (12 points, 5 assists) puts Nuggets in early control",
          runScore: "14-4 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "9:22",
          description: "De'Aaron Fox's explosive 15-point quarter brings Spurs back to within one",
          runScore: "17-8 SA",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "6:45",
          description: "Julian Strawther's 14 third-quarter points extends Denver's 12-game win streak",
          runScore: "20-7 DEN",
          momentum: "away",
          keyPlayer: "Julian Strawther",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Denver's championship-caliber depth was on full display as they completed their longest winning streak of the Jokic era. With the Serbian superstar dominating early before coasting (23 points in just 18 minutes), Julian Strawther stepped up with a career-defining 25-point performance. The Nuggets' 12-game streak has them peaking at the perfect time, while San Antonio's decision to rest Wembanyama ultimately cost them a chance at a statement win."
    },
    {
      gameId: "DET-IND-20260412",
      teams: { home: "IND", away: "DET" },
      finalScore: { home: 121, away: 133 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:18",
          description: "Paul Reed's perfect shooting display (7-7 FG) puts Pistons in command",
          runScore: "18-6 DET",
          momentum: "away",
          keyPlayer: "Paul Reed",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:51",
          description: "Cade Cunningham's 8 assists in 12 minutes orchestrates flawless offense",
          runScore: "15-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "8:33",
          description: "Indiana's desperate rally behind Tyrese Haliburton cuts lead to single digits",
          runScore: "12-4 IND",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Paul Reed authored basketball perfection with the season's only flawless 11-for-11 shooting performance, capping Detroit's remarkable rise to the East's top seed. Reed's aesthetic masterpiece was complemented by Cade Cunningham's return to elite form, dishing 14 assists in limited minutes while continuing his comeback from a collapsed lung. The Pistons' 60-22 record represents their best season since 2005-06, with home-court advantage throughout the playoffs now secured."
    },
    {
      gameId: "BKN-TOR-20260412",
      teams: { home: "TOR", away: "BKN" },
      finalScore: { home: 136, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:45",
          description: "Scottie Barnes' early triple-double watch begins with 8 points, 4 rebounds, 5 assists",
          runScore: "15-3 TOR",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "2:17",
          description: "RJ Barrett's 16-point explosion extends Raptors' commanding lead",
          runScore: "22-6 TOR",
          momentum: "home",
          keyPlayer: "RJ Barrett",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "9:08",
          description: "Brandon Ingram's efficient scoring puts game completely out of reach",
          runScore: "18-4 TOR",
          momentum: "home",
          keyPlayer: "Brandon Ingram",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Scottie Barnes orchestrated a 35-point demolition of Brooklyn with a masterful 18-12-12 triple-double that showcased his evolved playmaking. The Raptors' Big Three of Barnes, Barrett (26 points), and Ingram (25 points) operated with championship-level chemistry, systematically dismantling the Nets from the opening tip. Toronto's sixth seed sets up a tantalizing first-round matchup with New York, with Barnes playing at an All-NBA level that makes them a legitimate dark horse."
    },
    {
      gameId: "ATL-MIA-20260412",
      teams: { home: "MIA", away: "ATL" },
      finalScore: { home: 143, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:14",
          description: "Jaime Jaquez Jr.'s hot start (11 points) ignites Heat's offensive explosion",
          runScore: "14-2 MIA",
          momentum: "home",
          keyPlayer: "Jaime Jaquez Jr.",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:22",
          description: "Bam Adebayo's dominant paint presence extends Miami's season-high scoring pace",
          runScore: "18-5 MIA",
          momentum: "home",
          keyPlayer: "Bam Adebayo",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:41",
          description: "Heat reserves continue the onslaught as starters rest for play-in game",
          runScore: "16-4 MIA",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Miami erupted for a season-high 143 points in a confidence-building rout that couldn't have come at a better time. With Atlanta resting their stars, Jaime Jaquez Jr. (26 points) and Bam Adebayo (25 points, 10 rebounds) feasted on inferior competition while finding their playoff rhythm. The offensive explosion provides crucial momentum heading into Wednesday's do-or-die elimination game against Charlotte, with the Heat's championship DNA finally awakening at the perfect moment."
    },
    {
      gameId: "CHA-NY-20260412",
      teams: { home: "NY", away: "CHA" },
      finalScore: { home: 96, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:33",
          description: "LaMelo Ball's 14-point quarter gives Hornets surprising road lead",
          runScore: "16-4 CHA",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:18",
          description: "Jalen Brunson's personal 10-0 run brings Madison Square Garden to life",
          runScore: "10-0 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "Brandon Miller's clutch three-point barrage seals stunning upset victory",
          runScore: "12-2 CHA",
          momentum: "away",
          keyPlayer: "Brandon Miller",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Brandon Miller",
          team: "CHA",
          description: "Step-back three over OG Anunoby silences Garden crowd",
          timeRemaining: "4:47",
          winProbabilityShift: -19.4
        },
        {
          player: "Jalen Brunson",
          team: "NY",
          description: "Driving floater keeps Knicks within striking distance",
          timeRemaining: "2:33",
          winProbabilityShift: 8.7
        }
      ],
      narrative: "Charlotte delivered the upset of the night, stunning New York at Madison Square Garden in a result that reshuffles the Eastern Conference playoff picture. LaMelo Ball's explosive second quarter set the tone, but Brandon Miller's fourth-quarter heroics sealed the deal with three clutch three-pointers that silenced the Garden. The Hornets' shocking road victory positions them perfectly for Wednesday's play-in elimination game against Miami, while the Knicks must regroup after their worst performance in weeks."
    },
    {
      gameId: "PHX-OKC-20260412",
      teams: { home: "OKC", away: "PHX" },
      finalScore: { home: 103, away: 135 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:12",
          description: "Jamaree Bouyea's surprise emergence gives Suns early control against Thunder reserves",
          runScore: "12-0 PHX",
          momentum: "away",
          keyPlayer: "Jamaree Bouyea",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "6:44",
          description: "Khaman Maluach's dominant paint presence extends Phoenix's shocking lead",
          runScore: "16-4 PHX",
          momentum: "away",
          keyPlayer: "Khaman Maluach",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Suns' continued onslaught turns game into complete embarrassment for OKC",
          runScore: "20-6 PHX",
          momentum: "away",
          keyPlayer: "Jamaree Bouyea",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The night's most shocking result saw Phoenix absolutely demolish Oklahoma City's reserves in a 32-point rout that defied all logic. With the Thunder resting their entire rotation and the top seed secured, Jamaree Bouyea (27 points, 9 assists, +37) delivered a star-making performance that announced his playoff readiness. The margin was still jarring even considering the circumstances, giving Phoenix tremendous momentum heading into Tuesday's play-in opener at Portland while leaving questions about OKC's depth."
    }
  ]
};