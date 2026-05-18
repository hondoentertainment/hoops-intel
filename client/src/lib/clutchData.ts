// Auto-generated Clutch Factor Rankings data
// Weekly rankings of the NBA's most clutch performers

export interface ClutchPlayer {
  rank: number;
  player: string;
  team: string;
  clutchRating: number;
  clutchPts: number;
  clutchFgPct: number;
  clutchFtPct: number;
  gameWinners: number;
  clutchPlusMinus: number;
  biggestMoment: string;
  trend: "up" | "down" | "stable";
}

export interface ClutchData {
  generatedDate: string;
  weekLabel: string;
  players: ClutchPlayer[];
  clutchKing: { player: string; team: string; description: string };
  worstInClutch: { player: string; team: string; description: string };
  weeklyHighlight: string;
}

export const clutchData: ClutchData = {
  generatedDate: "May 18, 2026",
  weekLabel: "Week of May 18–24, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 99,
      clutchPts: 9.8,
      clutchFgPct: 54.2,
      clutchFtPct: 93.1,
      gameWinners: 4,
      clutchPlusMinus: 18.4,
      biggestMoment:
        "With OKC trailing by two in the final 38 seconds of Game 5 against Denver, SGA shook free of two defenders with a hesitation crossover at the top of the key, rose over a late close-out, and buried a mid-range pull-up — then drew the foul on the next possession to seal it at the line. Pure will made visible.",
      trend: "stable",
    },
    {
      rank: 2,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 97,
      clutchPts: 8.6,
      clutchFgPct: 51.8,
      clutchFtPct: 89.4,
      gameWinners: 3,
      clutchPlusMinus: 14.9,
      biggestMoment:
        "In a Game 7 where the entire basketball world was waiting for him to flinch, Mitchell scored 11 of Cleveland's final 14 points in regulation — capped by a step-back three over a fully-extended defender with 1:12 left that pushed the lead to eight and broke Boston's back for good.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 96,
      clutchPts: 8.9,
      clutchFgPct: 49.7,
      clutchFtPct: 91.2,
      gameWinners: 3,
      clutchPlusMinus: 13.2,
      biggestMoment:
        "Brunson's fourth-quarter takeover in Game 4 against Indiana — 14 clutch-time points in seven minutes, climaxing with an and-one floater through contact over Myles Turner that the Garden is still talking about — remains the defining closer performance of the second round.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 8.1,
      clutchFgPct: 48.9,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 16.7,
      biggestMoment:
        "Wembanyama's block on Anthony Edwards' potential go-ahead layup with 22 seconds left in Game 6 — a full-extension swat that defied anatomy — didn't just preserve a San Antonio lead, it ended a series. The ball landed near half-court. Edwards stared at the rim for three full seconds.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 93,
      clutchPts: 7.4,
      clutchFgPct: 52.3,
      clutchFtPct: 86.7,
      gameWinners: 2,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "Castle's series-clinching moment against Minnesota — a driving floater through contact with 41 seconds left to push the lead to five, followed by an ice-cold pair of free throws — announced that San Antonio's youngest star is not borrowing his confidence from anyone.",
      trend: "up",
    },
    {
      rank: 6,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 7.1,
      clutchFgPct: 47.6,
      clutchFtPct: 88.9,
      gameWinners: 2,
      clutchPlusMinus: 10.3,
      biggestMoment:
        "Fox's 9-point personal run in the final four minutes of Game 5 against Minnesota — a burst of pure speed that turned a two-possession game into a rout — was executed with such composure that it looked less like a playoff game and more like a man picking up his dry cleaning.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 90,
      clutchPts: 6.8,
      clutchFgPct: 61.4,
      clutchFtPct: 78.3,
      gameWinners: 1,
      clutchPlusMinus: 19.1,
      biggestMoment:
        "Mobley's back-to-the-basket post score with 2:44 left in Game 7 — a drop-step baseline finish over two collapsing defenders — was the kind of play that redefines what a big man can be in a closing situation. He finished the night's clutch window 3-for-4 with a rebound and a block.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 88,
      clutchPts: 7.2,
      clutchFgPct: 50.1,
      clutchFtPct: 85.5,
      gameWinners: 1,
      clutchPlusMinus: 9.6,
      biggestMoment:
        "Towns' back-breaking three-pointer — a catch-and-shoot from the left wing in the final minute of New York's Game 3 closeout against Indiana — silenced Gainbridge Fieldhouse and gave the Knicks a double-digit lead they never relinquished. He pumped his fist once and jogged back like he knew.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "James Harden",
      team: "CLE",
      clutchRating: 86,
      clutchPts: 4.9,
      clutchFgPct: 38.7,
      clutchFtPct: 90.0,
      gameWinners: 1,
      clutchPlusMinus: 14.2,
      biggestMoment:
        "Harden's value in clutch moments lives entirely off the box score: in the final five minutes of Game 7, he drew three fouls without attempting a field goal, set two screens that freed Mitchell for clean looks, and ran a perfect pick-and-roll handoff that led to a Mobley dunk. He was +12 in 4:30.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Mikal Bridges",
      team: "NYK",
      clutchRating: 84,
      clutchPts: 5.6,
      clutchFgPct: 46.2,
      clutchFtPct: 83.3,
      gameWinners: 1,
      clutchPlusMinus: 7.8,
      biggestMoment:
        "Bridges delivered the quietest dagger of the second round: a corner three with 54 seconds left in Game 4 against Indiana, his fourth made three of the night, that snapped a tie game and functionally ended the Pacers' season before the final whistle.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "OG Anunoby",
      team: "NYK",
      clutchRating: 82,
      clutchPts: 5.2,
      clutchFgPct: 44.8,
      clutchFtPct: 80.0,
      gameWinners: 1,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "Anunoby's chase-down block on Pascal Siakam's fast-break layup attempt with New York leading by one in Game 2 was the defensive play of the second round — a full-sprint, two-handed rejection from behind that the crowd at Madison Square Garden greeted like a walk-off home run.",
      trend: "up",
    },
    {
      rank: 12,
      player: "Jaren Jackson Jr.",
      team: "MEM",
      clutchRating: 80,
      clutchPts: 6.4,
      clutchFgPct: 43.1,
      clutchFtPct: 76.9,
      gameWinners: 1,
      clutchPlusMinus: 5.4,
      biggestMoment:
        "Jackson's block-to-bucket sequence in the final two minutes of Memphis' regular-season finale — a rejection on one end immediately converted into a coast-to-coast finish on the other — was a microcosm of everything that makes him uniquely dangerous when the game is on the line.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Anthony Davis",
      team: "LAL",
      clutchRating: 78,
      clutchPts: 7.8,
      clutchFgPct: 50.6,
      clutchFtPct: 68.4,
      gameWinners: 0,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "Davis put up 14 points in the final five minutes of a regular-season overtime thriller against Phoenix, including a turnaround fadeaway over Kevin Durant to force a second OT — but two missed free throws in the closing seconds of regulation kept the moment from becoming legendary.",
      trend: "down",
    },
    {
      rank: 14,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 76,
      clutchPts: 8.3,
      clutchFgPct: 40.5,
      clutchFtPct: 92.3,
      gameWinners: 1,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Young's buzzer-beating floater to end the third quarter of a regular-season game against Chicago — a 28-footer that he launched without hesitation while stumbling off a screen — was so absurd that even the Atlanta bench looked confused for a moment before erupting.",
      trend: "down",
    },
    {
      rank: 15,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 74,
      clutchPts: 6.1,
      clutchFgPct: 41.2,
      clutchFtPct: 87.5,
      gameWinners: 0,
      clutchPlusMinus: -4.8,
      biggestMoment:
        "Haliburton's 12-point clutch-time performance in Game 3 against New York showed flashes of the player Indiana needs him to be — but a turnover with 1:08 left that led directly to a Brunson layup proved that his late-game decision-making remains a work in progress.",
      trend: "down",
    },
    {
      rank: 16,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 73,
      clutchPts: 6.7,
      clutchFgPct: 42.0,
      clutchFtPct: 84.2,
      gameWinners: 1,
      clutchPlusMinus: 1.7,
      biggestMoment:
        "Cunningham's go-ahead layup with 18 seconds left against Milwaukee in a regular-season game — a left-handed scoop that kissed perfectly off the glass through heavy traffic — validated every believer who said Detroit's young core was ready for prime-time moments.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "LaMelo Ball",
      team: "CHA",
      clutchRating: 70,
      clutchPts: 7.4,
      clutchFgPct: 39.8,
      clutchFtPct: 77.8,
      gameWinners: 1,
      clutchPlusMinus: -6.3,
      biggestMoment:
        "Ball's full-court buzzer-beater to end the first half against Toronto — a heave from 65 feet that went in clean — was technically a clutch shot by no one's definition, but it was LaMelo Ball, so here we are. His actual late-game struggles keep him firmly in the bottom third of this list.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 67,
      clutchPts: 4.8,
      clutchFgPct: 36.4,
      clutchFtPct: 82.6,
      gameWinners: 0,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Garland's clutch contributions have been more felt than seen — his off-ball movement in the final minutes creates spacing that benefits Mitchell and Mobley enormously, and his +5.9 clutch plus-minus is quietly the best per-minute figure on this list for a player without a signature closer moment.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Kevin Durant",
      team: "PHX",
      clutchRating: 64,
      clutchPts: 7.9,
      clutchFgPct: 44.3,
      clutchFtPct: 79.2,
      gameWinners: 0,
      clutchPlusMinus: -9.4,
      biggestMoment:
        "Durant's 9-point personal run in the final three minutes against the Clippers was individually brilliant — three consecutive mid-range buckets over three different defenders — but Phoenix lost by six, and his -9.4 clutch plus-minus tells the story of a season where individual excellence and team success have diverged painfully.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Jordan Poole",
      team: "WAS",
      clutchRating: 58,
      clutchPts: 5.5,
      clutchFgPct: 33.1,
      clutchFtPct: 74.4,
      gameWinners: 0,
      clutchPlusMinus: -14.2,
      biggestMoment:
        "Poole's most memorable clutch moment of the season came against Orlando, when he pump-faked an uncontested three, drove baseline for an impossibly contested runner, bricked it off the side of the backboard, then fouled Paolo Banchero on the rebound attempt. Washington lost by two. The sequence lasted six seconds and contained five separate errors.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is no meaningful separation between the player Shai Gilgeous-Alexander is in the first three quarters and the player he becomes when the game is actually on the line — and that is precisely what makes him terrifying. His 54.2% clutch field-goal percentage is not a product of luck or soft coverage; it is the result of a shot-creation toolkit so complete that defenders cannot eliminate options, only choose which nightmare they prefer. Four game-winners, a 93.1% free-throw rate under pressure, and an 18.4 clutch plus-minus collectively describe a player who doesn't just survive high-leverage moments — he engineers them. As the WCF tips off against San Antonio, the only real question is whether Wembanyama's length can introduce doubt into a mind that appears, clinically, to have none.",
  },
  worstInClutch: {
    player: "Jordan Poole",
    team: "WAS",
    description:
      "Jordan Poole is a fascinating case study in how much confidence and competence can diverge. He will catch the ball with 40 seconds left, down two, in front of 20,000 people, and look absolutely certain he is about to do something extraordinary — and statistically speaking, that certainty is the most dangerous thing in the building. His 33.1% clutch field-goal percentage and -14.2 plus-minus suggest that Washington's late-game possession is less a basketball play and more of a controlled demolition. To his credit, he has never once appeared to notice. Points for swagger; points deducted for everything else.",
  },
  weeklyHighlight:
    "The week of May 18 belonged, ultimately, to the closers who had something to prove. Donovan Mitchell walked into a Game 7 carrying the weight of a 6-of-20 collapse and walked out with 26 points, eight assists, zero turnovers, and the quiet satisfaction of a man who knew exactly what the critics were saying and answered every single one of them. His 11-point personal run in the final four minutes wasn't just a performance — it was a statement about what kind of player Cleveland actually has. Meanwhile, Evan Mobley's +19.1 clutch plus-minus remains the most underreported number in the postseason; the man is simply not beatable in the moments that matter most, and the ECF is about to introduce the rest of the country to that fact. On the other coast, the WCF's opening act set up what promises to be the most compelling clutch duel of the playoffs: SGA versus Wembanyama, closer versus shot-blocker, the irresistible force meeting the object that is genuinely, anatomically impossible to shoot over. Stephon Castle's quiet 7.4 clutch points per game sits in the background of that matchup like a loaded weapon no one is talking about — and De'Aaron Fox, operating as the composed hand on San Antonio's throttle, is the player most capable of stealing a game before OKC realizes what happened. The clutch landscape heading into the conference finals is starker than it has been all season: the gap between the elite closers at the top of this list and the Jordan Pooles of the world has never looked wider, and the next two weeks will determine whose nerve holds when the margin for error disappears entirely.",
};