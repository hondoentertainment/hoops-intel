// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 12, 2026
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
  date: "May 12, 2026",
  gameOfTheNight: "DET-CLE-20260511",
  topClutchPerformer: {
    player: "Donovan Mitchell",
    team: "CLE",
    clutchRating: 98,
    description:
      "39 second-half points — tying an NBA playoff record — including five consecutive buckets during the decisive third-quarter run that snapped Detroit's spine. Mitchell was ice in crunch time: pull-up daggers, mid-range runners off the shot clock, and 13-of-15 from the stripe. Cleveland doesn't win this game, or possibly this series, without his singular eruption.",
  },
  games: [
    {
      gameId: "DET-CLE-20260511",
      teams: { home: "CLE", away: "DET" },
      finalScore: { home: 112, away: 103 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41",
          description:
            "Detroit opened on a 14-4 tear, forcing Cleveland into early timeouts. Cade Cunningham orchestrated pick-and-roll after pick-and-roll, and the Pistons' defensive intensity smothered Mitchell into a scoreless first quarter.",
          runScore: "14-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:22",
          description:
            "James Harden steadied Cleveland with a 9-for-9 free-throw clinic and slick playmaking, trimming the deficit to six at halftime. Harden's composure kept the Cavs' season alive long enough for Mitchell to wake up.",
          runScore: "18-10 CLE",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:08",
          description:
            "The Donovan Mitchell detonation. Cleveland erupted 38-21 in the third — a 17-0 run within that stretch punctuated by five straight Mitchell buckets: pull-up triple, floater, step-back two, and-one, pull-up two. The arena lifted off the floor. Detroit never recovered its footing.",
          runScore: "38-21 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:15",
          description:
            "Detroit mounted a brief 9-3 answer to open the fourth, cutting the lead to 11 and quieting Rocket Arena momentarily. Cunningham found his pull-up and Evan Mobley picked up his fourth foul — Cleveland's margin of error narrowed.",
          runScore: "9-3 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description:
            "Evan Mobley answered Detroit's surge with back-to-back blocks — swatting a Monté Morris floater into the third row and rejecting a Cunningham drive — then converted the other end. The Mobley sequence killed any remaining Detroit hope and sealed Cleveland's series-tying victory.",
          runScore: "8-2 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description:
            "Step-back pull-up two over Cunningham's outstretched hand with the shot clock at 2 seconds — extending the lead to 16 with 4:12 remaining and slamming the door on any Detroit comeback.",
          timeRemaining: "4:12",
          winProbabilityShift: 22,
        },
        {
          player: "Evan Mobley",
          team: "CLE",
          description:
            "Chase-down block on Cunningham's drive, tipping the ball to Harden who pushed in transition for an and-one layup — a 5-point swing that extinguished Detroit's final rally.",
          timeRemaining: "2:28",
          winProbabilityShift: 18,
        },
        {
          player: "James Harden",
          team: "CLE",
          description:
            "Split a trap in the corner, found Mobley cutting baseline for a dunk off the glass — his 11th assist of the night — pushing the lead back to 14 after Detroit had trimmed it to nine.",
          timeRemaining: "3:44",
          winProbabilityShift: 14,
        },
      ],
      narrative:
        "This game had two completely different identities separated by a locker room halftime speech nobody will ever hear. For twenty-four minutes, Cleveland looked like a team staring down elimination — passive, deferential, and overmatched by a 60-win Detroit squad that smelled blood. Then Donovan Mitchell walked back out of the tunnel and rewrote the script entirely. His 39 second-half points weren't just a stat line; they were a statement of refusal, a one-man siege that reduced Detroit's defense to rubble and turned Rocket Arena into a pressure cooker. With Mobley posting a supernatural two-way performance and Harden running the offense like a Swiss watch, Cleveland didn't just survive — they seized the series' emotional momentum heading into Game 5 on Detroit's floor.",
    },
    {
      gameId: "LAL-OKC-20260511",
      teams: { home: "LAL", away: "OKC" },
      finalScore: { home: 110, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:55",
          description:
            "SGA opened the game with three consecutive isolation buckets and two dimes in transition, pushing OKC to a 16-7 lead before Los Angeles steadied. The Thunder's pace and switching defense had the Lakers scrambling from the opening tip.",
          runScore: "16-7 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:10",
          description:
            "LeBron James took over the second quarter with a masterclass in veteran shot-creation — posting, driving, and orchestrating the break — to close a 13-point gap. The Lakers went on a 22-9 run, taking their only lead of the game at 44-42 behind LeBron's 14-point quarter.",
          runScore: "22-9 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:33",
          description:
            "Ajay Mitchell exploded off the OKC bench with 14 third-quarter points — four steals turned into transition buckets — single-handedly swinging the quarter 33-22 Thunder. The Lakers had no answer for his length and read-passing ability, and eight Austin Reaves turnovers compounded the damage.",
          runScore: "33-22 OKC",
          momentum: "away",
          keyPlayer: "Ajay Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:15",
          description:
            "Reaves (27 points) and Hachimura (25) kept the Lakers breathing with a late 12-6 push, trimming the deficit to five with under three minutes left. The crowd at Crypto.com dared to dream — but OKC's composure never cracked.",
          runScore: "12-6 LAL",
          momentum: "home",
          keyPlayer: "Austin Reaves",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Chet Holmgren",
          team: "OKC",
          description:
            "Caught a lob from SGA on the left side of the rim and flushed a go-ahead dunk with 32.8 seconds remaining, putting OKC up five and effectively ending any Lakers comeback hope.",
          timeRemaining: "0:32.8",
          winProbabilityShift: 31,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description:
            "Drew a double-team in the corner, pump-faked LeBron into the air, and converted two free throws to push the lead to seven — his 12th and 13th free throws of the night — with 1:14 left.",
          timeRemaining: "1:14",
          winProbabilityShift: 19,
        },
      ],
      narrative:
        "The Thunder didn't win this game — they collected it, the way a seasoned closer collects the ball in the ninth. OKC is 8-0 in these playoffs and it hasn't been luck; it's been the systematic suffocation of opponents by a roster with no gaps and no wasted possessions. LeBron James gave everything he had — 24 points, 12 rebounds, 40 exhausting minutes — but it wasn't enough, and the manner of this loss, a clean five-point defeat to a team that was never truly threatened, may be the hardest part to process. Ajay Mitchell's eruption off the bench was the killshot, and Holmgren's dunk with 32 seconds left was just punctuation. The question hanging over Crypto.com Arena after the final buzzer wasn't about this series — it was about whether anyone is built to stop Oklahoma City before a title is theirs.",
    },
  ],
};