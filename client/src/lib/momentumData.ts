// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 16, 2026
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
  date: "May 16, 2026",
  gameOfTheNight: "DET-CLE-20260515",
  topClutchPerformer: {
    player: "Cade Cunningham",
    team: "DET",
    clutchRating: 91,
    description: "Cunningham orchestrated Detroit's closeout with surgeon-like precision — 21 points, 8 assists, and zero late-game panic. When Cleveland made their third-quarter push to cut it to 9, Cunningham answered with back-to-back pull-up jumpers and a dime to Reed that effectively buried the Cavaliers. He ran a hostile road environment like it was a shootaround.",
  },
  games: [
    {
      gameId: "DET-CLE-20260515",
      teams: { home: "CLE", away: "DET" },
      finalScore: { home: 94, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description: "Paul Reed ignites Detroit off the bench with 7 straight points — two mid-range jumpers and a putback slam — erasing an early Cleveland 8-4 lead and flipping the energy inside Rocket Arena.",
          runScore: "DET 13-8",
          momentum: "away",
          keyPlayer: "Paul Reed",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Donovan Mitchell tries to wrestle back control with a personal 7-0 burst including two pull-up threes, trimming Detroit's lead to three and silencing the road crowd momentarily.",
          runScore: "CLE 29-26",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description: "Daniss Jenkins closes the half with a devastating 9-2 Detroit run — a steal-and-finish, a corner three, and a composed floater — sending the Pistons to the locker room with a double-digit cushion they would never relinquish.",
          runScore: "DET 54-38",
          momentum: "away",
          keyPlayer: "Daniss Jenkins",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:22",
          description: "Cleveland's bench mounts a desperation 11-2 run to cut the deficit to 9, briefly stirring the Rocket Arena crowd and forcing a Detroit timeout. For three minutes, a Game 7 narrative felt possible.",
          runScore: "CLE 67-76",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "1:10",
          description: "Cade Cunningham responds to Cleveland's flicker of life with back-to-back pull-up jumpers and a lob to Jalen Duren — a 10-2 Detroit answer that permanently shuts the door. The sellout crowd falls silent. This series is going to Game 7.",
          runScore: "DET 93-72",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cleveland needed a closeout. Detroit delivered a statement. The Pistons walked into Rocket Arena as the road underdog in a must-win scenario and methodically dismantled a 52-win Cavaliers team that looked like it had already started its offseason. Paul Reed's bench explosion was the spark, Cade Cunningham's third-quarter dagger run was the killshot, and Donovan Mitchell's minus-25 night encapsulated everything that has gone wrong for the 1-seed in this series. Now it all comes down to Game 7 at Little Caesars Arena — the 60-win Pistons, at home, winner-take-all.",
    },
    {
      gameId: "SAS-MIN-20260515",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 109, away: 139 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:03",
          description: "Stephon Castle announces himself immediately — 11 first-quarter points on 4-of-5 shooting, including a pair of stepback threes that make Target Center go completely quiet before Minnesota can even settle in.",
          runScore: "SAS 19-9",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q1",
          timestamp: "2:45",
          description: "Anthony Edwards counters with a burst of four straight points and draws a foul, briefly rallying the Wolves crowd and trimming the San Antonio lead to 5. It is Minnesota's last credible foothold of the evening.",
          runScore: "MIN 24-22",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:30",
          description: "De'Aaron Fox dismantles Minnesota's defense on a personal 9-0 sequence — a layup, a floater, two free throws, and a mid-range dagger — extending the Spurs lead to 17 and effectively turning a playoff game into an exhibition.",
          runScore: "SAS 55-38",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:15",
          description: "Julian Champagnie puts the crowd out of its misery with a 12-2 San Antonio run to open the second half — three consecutive threes in five possessions — ballooning the margin to 30 and triggering a wave of early exits from Target Center.",
          runScore: "SAS 96-66",
          momentum: "away",
          keyPlayer: "Julian Champagnie",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a basketball game — it was a generational passing of the torch. Stephon Castle's 32/11/6 on 69% shooting is the kind of line that gets replayed for decades, a singular close-out performance that announced the Spurs not as contenders but as something more terrifying. De'Aaron Fox was scalpel-precise, Wembanyama coasted in 27 minutes like a man conserving energy for Oklahoma City, and Minnesota had absolutely no answer for any of it. Anthony Edwards shot 9-of-26, Julius Randle managed 3 points, and Rudy Gobert was held scoreless — a Timberwolves core that looked like a conference finals team just weeks ago finished in ruins. The San Antonio Spurs are West Finals bound.",
    },
  ],
};