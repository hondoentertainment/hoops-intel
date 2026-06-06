// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 6, 2026
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
  date: "June 6, 2026",
  gameOfTheNight: "NY-SA-20260606",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "New York Knicks",
    clutchRating: 94,
    description:
      "Brunson was ice-cold assassin in the fourth quarter, orchestrating the Knicks' late-game survival with a go-ahead mid-range jumper and two clutch free throws in the final 90 seconds to seal a one-point road win in San Antonio.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260530",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 103, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Wembanyama opened the scoring with back-to-back rim-rattling dunks and a mid-range floater, establishing immediate physical dominance that forced OKC into an early timeout.",
          runScore: "11-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:05",
          description:
            "SGA ignited a Thunder rally with three straight pull-up jumpers, dragging OKC back from a double-digit deficit and silencing the Paycom Center crowd momentarily.",
          runScore: "14-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:48",
          description:
            "Stephon Castle detonated a third-quarter sequence with three consecutive threes in under two minutes, blowing the game open just as OKC had pulled within three and the crowd was alive again. It was the killing blow.",
          runScore: "15-3 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:10",
          description:
            "With Jalen Williams visibly limited by his hamstring, De'Aaron Fox pushed pace relentlessly in transition, converting three consecutive and-one opportunities that extinguished any remaining OKC hope.",
          runScore: "12-4 SAS",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was a methodical execution, not a nail-biter — San Antonio came to Oklahoma City with a blueprint and Wembanyama made sure nobody could deviate from it. The third quarter was the obituary: Castle's three-point eruption came precisely when OKC's crowd was loudest and most hopeful, and it silenced Paycom Center like a thunderclap. Jalen Williams' limited mobility in the fourth quarter removed any realistic comeback vehicle for the Thunder, and the Spurs bench pouring in a +14 advantage was the final indignity. San Antonio now stands one win from the NBA Finals in just their second year of the Wembanyama era.",
    },
    {
      gameId: "NY-SA-20260606",
      teams: { home: "SA", away: "NY" },
      finalScore: { home: 104, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:31",
          description:
            "The Knicks jumped out hot behind OG Anunoby's three consecutive mid-range baskets, establishing a physical tone that rattled the Spurs' second unit and forced an early lineup change.",
          runScore: "12-4 NY",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "9:14",
          description:
            "San Antonio stormed back with a suffocating defensive run, holding New York scoreless for three minutes while Chris Paul Jr. — the Spurs' second-year guard — threaded four consecutive assists to swing the lead.",
          runScore: "16-5 SA",
          momentum: "home",
          keyPlayer: "Chris Paul Jr.",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description:
            "The Knicks reclaimed command with a bruising interior push, Karl-Anthony Towns bullying the Spurs' front line for six straight points and drawing two quick fouls that sidelined San Antonio's starting center.",
          runScore: "11-3 NY",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:02",
          description:
            "San Antonio erased a seven-point deficit in under two minutes on a 9-0 blitz fueled by back-to-back turnovers from New York and a stunning transition slam that sent the Frost Bank Center crowd into a frenzy.",
          runScore: "9-0 SA",
          momentum: "home",
          keyPlayer: "Chris Paul Jr.",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:54",
          description:
            "Jalen Brunson recaptured control with a cold-blooded pull-up jumper over a closing defender to put New York back ahead by one, a shot he had no business making and every intention of taking.",
          runScore: "4-2 NY",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Brunson isolated on the left elbow with the shot clock winding down, pump-faked his defender off his feet, and buried a 17-foot mid-range jumper to put New York up 103-102 with 54 seconds remaining.",
          timeRemaining: "0:54",
          winProbabilityShift: 28,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "After San Antonio tied it at 103 with a putback, Brunson drew a shooting foul driving baseline and converted both free throws with 19 seconds left to restore the one-point lead.",
          timeRemaining: "0:19",
          winProbabilityShift: 34,
        },
        {
          player: "Chris Paul Jr.",
          team: "San Antonio Spurs",
          description:
            "With 8 seconds on the clock and the Spurs trailing by one, Chris Paul Jr. found a sliver of space off a screen and pulled up for a mid-range look — the shot rimmed out, sending the Knicks to a 105-104 road victory.",
          timeRemaining: "0:03",
          winProbabilityShift: -41,
        },
        {
          player: "Karl-Anthony Towns",
          team: "New York Knicks",
          description:
            "Towns bodied up for a critical offensive rebound and put-back layup with 1:47 remaining when New York needed a possession desperately, extending the lead to four and momentarily easing the tension.",
          timeRemaining: "1:47",
          winProbabilityShift: 19,
        },
      ],
      narrative:
        "Frost Bank Center got every penny's worth on a Saturday night that twisted through five different momentum shifts before settling on a single point as its verdict. The Spurs' fourth-quarter 9-0 run was the kind of sequence that wins playoff games — all grit, all crowd energy, all chaos — but Jalen Brunson refused to be the protagonist of someone else's story. His back-to-back clutch buckets in the final minute were the actions of a player who has lived in these moments so long he treats pressure as oxygen. Chris Paul Jr.'s final look was clean, it was open, it simply didn't fall — and in a one-point game, that's the entire story. New York walks away with a regular-season road win that nonetheless carries the fingerprints of a postseason classic.",
    },
  ],
};