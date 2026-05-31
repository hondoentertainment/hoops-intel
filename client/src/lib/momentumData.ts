// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 31, 2026
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
  date: "May 31, 2026",
  gameOfTheNight: "SAS-OKC-20260530",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 94,
    description: "Wembanyama was an immovable force in the fourth quarter, posting 9 points and 2 blocks in the final period alone while OKC desperately clawed for any foothold. His combination of rim protection and offensive creation in high-leverage moments made him unguardable and unbypassable — a two-way anchor who personally suffocated OKC's last three possessions of consequence.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260530",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 103, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:42",
          description: "OKC opened with an 11-2 run fueled by SGA isolation buckets and an early Wembanyama foul situation, seizing home-court energy and forcing a San Antonio timeout.",
          runScore: "11-2 OKC run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description: "De'Aaron Fox returned from the bench after shaking off foul trouble and orchestrated a 14-4 Spurs burst, attacking the paint relentlessly and drawing four fouls on OKC's second unit to swing the halftime margin.",
          runScore: "14-4 SAS run",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Stephon Castle buried three consecutive three-pointers in a two-minute stretch — the first off a Wembanyama dump-off, the second off a Fox drive-and-kick, the third off a pure catch-and-shoot — igniting a 17-6 San Antonio run that broke OKC's defensive resolve and turned a two-point game into a double-digit crisis.",
          runScore: "17-6 SAS run",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:01",
          description: "OKC refused to go quietly, using an SGA-led 9-2 run to cut the deficit back to seven and stir Paycom Center back to life, with a hobbled Jalen Williams hitting a mid-range jumper that briefly made the margin feel surmountable.",
          runScore: "9-2 OKC run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "3:10",
          description: "Wembanyama answered OKC's charge with back-to-back buckets — a drop step over two defenders and a face-up mid-range pull-up — while swatting an SGA floater attempt on the other end, effectively sealing the game and clinching the series lead for San Antonio.",
          runScore: "8-2 SAS run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Drop-step power move over Isaiah Hartenstein and Chet Holmgren in the paint to push the lead back to 11 with OKC showing signs of life — the single play that closed the door on any OKC comeback narrative.",
          timeRemaining: "3:10",
          winProbabilityShift: 18,
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Rejected an SGA floater at the rim on OKC's answer possession, killing the Thunder's rhythm and forcing a desperation reset with the shot clock winding down.",
          timeRemaining: "2:55",
          winProbabilityShift: 12,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Pulled up for a step-back three over Fox to trim the deficit to seven and signal OKC was not folding, momentarily restoring tension in a building that had gone quiet.",
          timeRemaining: "4:28",
          winProbabilityShift: -9,
        },
        {
          player: "De'Aaron Fox",
          team: "SAS",
          description: "Split a double-team in transition and finished through contact with 4:05 left, converting the and-one to push San Antonio's lead back to double digits and exhaust the last of OKC's emotional reserves.",
          timeRemaining: "4:05",
          winProbabilityShift: 14,
        },
      ],
      narrative: "This was the night San Antonio served notice that the league's most electric young core is ready to own the moment, not just occupy it. Oklahoma City, playing with the desperation of a team staring at elimination, had the crowd, the home floor, and a healthy dose of early momentum — but the Spurs methodically dismantled every foothold OKC tried to establish. Stephon Castle's third-quarter eruption was the turning point that broke the game's spine, and Wembanyama's fourth-quarter dominance was the signature on the verdict. Jalen Williams's visible limitations in the fourth were the subplot that may define this series: a Thunder team built on depth and health ran out of both at precisely the wrong moment, and San Antonio punished every crack with the clinical efficiency of a team that knows exactly what it is.",
    },
  ],
};