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
  generatedDate: "August 3, 2026",
  weekLabel: "Week of August 3–9, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 99,
      clutchPts: 9.8,
      clutchFgPct: 54.2,
      clutchFtPct: 96.1,
      gameWinners: 7,
      clutchPlusMinus: 14.3,
      biggestMoment:
        "With 11 seconds left and OKC trailing by one in Game 5 of the Western Conference Finals, SGA pump-faked Kawhi Leonard into the stratosphere, drew the foul, and calmly sank both free throws before sealing the win with a steal on the ensuing possession. The Thunder bench erupted before the ball even hit net on the second shot.",
      trend: "up",
    },
    {
      rank: 2,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 97,
      clutchPts: 8.9,
      clutchFgPct: 51.7,
      clutchFtPct: 93.4,
      gameWinners: 6,
      clutchPlusMinus: 12.1,
      biggestMoment:
        "Fox detonated a 38-foot pull-up three at the fourth-quarter buzzer against Denver that erased a two-point deficit and sent the AT&T Center into a full structural crisis. It was the highest-leverage shot of the Spurs' season — launched off one foot, no hesitation, pure chaos energy.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 96,
      clutchPts: 9.1,
      clutchFgPct: 49.8,
      clutchFtPct: 94.7,
      gameWinners: 5,
      clutchPlusMinus: 11.6,
      biggestMoment:
        "Brunson's Game 7 Finals performance will be studied for a decade — he scored 11 of New York's final 14 points, including a double-clutch floater over two defenders with 38 seconds left that put the Knicks ahead for good. Madison Square Garden's noise level was measured at 117 decibels. The walls genuinely shook.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 94,
      clutchPts: 7.4,
      clutchFgPct: 48.3,
      clutchFtPct: 88.9,
      gameWinners: 4,
      clutchPlusMinus: 10.8,
      biggestMoment:
        "Wembanyama's block on Nikola Jokić's go-ahead hook attempt with 4.2 seconds remaining in a one-possession Western semifinal game defied every law of geometry — he came from the weak side, covered 14 feet in two strides, and pinned the ball against the backboard. San Antonio scored on the other end before the crowd finished screaming.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "Luka Dončić",
      team: "DAL",
      clutchRating: 93,
      clutchPts: 8.6,
      clutchFgPct: 46.9,
      clutchFtPct: 79.2,
      gameWinners: 5,
      clutchPlusMinus: 8.4,
      biggestMoment:
        "Luka posted a 14-point clutch quarter in a must-win regular season finale against Memphis, capping it with a step-back three over Jaren Jackson Jr. from the logo — a shot so audacious that even the Dallas bench looked briefly concerned before it splashed home. The free-throw percentage continues to be the only asterisk on an otherwise spotless clutch résumé.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 92,
      clutchPts: 8.2,
      clutchFgPct: 47.5,
      clutchFtPct: 91.3,
      gameWinners: 4,
      clutchPlusMinus: 9.7,
      biggestMoment:
        "Mitchell drove baseline, absorbed contact from two Indiana defenders simultaneously, and converted the and-one layup with 1:12 remaining in overtime to give Cleveland a lead they would never relinquish. He celebrated before landing, which felt about right for a player who has been manufacturing those moments since his Utah days.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 91,
      clutchPts: 7.9,
      clutchFgPct: 45.1,
      clutchFtPct: 95.8,
      gameWinners: 3,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "At 38 years old, Curry dribbled off a screen, caught air on a hesitation crossover that left his defender two zip codes behind, and drained a 31-footer to force overtime against Phoenix in late February. The arena responded the way it has responded to that shot for fifteen years — immediate, total, reverent disbelief.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 89,
      clutchPts: 6.8,
      clutchFgPct: 44.7,
      clutchFtPct: 90.1,
      gameWinners: 4,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "Haliburton's behind-the-back pass to a cutting Myles Turner for the go-ahead dunk with 58 seconds left against Milwaukee was the kind of play that gets screenshotted and framed — a no-look, wrong-hand delivery through traffic that arrived exactly where Turner needed it, exactly when Indiana needed it most.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 88,
      clutchPts: 8.4,
      clutchFgPct: 43.2,
      clutchFtPct: 85.6,
      gameWinners: 3,
      clutchPlusMinus: 6.1,
      biggestMoment:
        "Edwards iso'd against his defender in the final 90 seconds of a tightly contested game against Denver, talked his way through two jab steps, and detonated a pull-up mid-range jumper that he hit while already turning away to sprint back on defense. The confidence is a separate entity from the man at this point.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 86,
      clutchPts: 7.1,
      clutchFgPct: 41.8,
      clutchFtPct: 87.4,
      gameWinners: 3,
      clutchPlusMinus: 5.3,
      biggestMoment:
        "Tatum hit back-to-back clutch threes against Miami in a March elimination-stakes game, the second of which bounced twice on the rim before dropping — a reminder that clutch greatness sometimes needs a little cooperation from the basketball gods. He finished with 11 clutch-time points in the fourth quarter alone.",
      trend: "down",
    },
    {
      rank: 11,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 84,
      clutchPts: 6.3,
      clutchFgPct: 46.2,
      clutchFtPct: 83.7,
      gameWinners: 2,
      clutchPlusMinus: 6.8,
      biggestMoment:
        "Towns posted up on the block with 1:44 left in a tied Game 3, spun baseline, and kissed a 14-footer off the glass so softly it barely disturbed the net. The basketball IQ in those moments is genuinely startling for a player his size — he found a gap that wasn't there, manufactured contact that wasn't necessary, and scored anyway.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 83,
      clutchPts: 6.7,
      clutchFgPct: 43.9,
      clutchFtPct: 91.6,
      gameWinners: 2,
      clutchPlusMinus: 7.2,
      biggestMoment:
        "Garland drilled a step-back three with the shot clock expiring and Cleveland down two against Boston in a nationally televised January game that swung the Eastern Conference standings narrative for three weeks. The shot came off a possession that had completely broken down — pure creation, pure pressure, perfectly executed.",
      trend: "up",
    },
    {
      rank: 13,
      player: "OG Anunoby",
      team: "NYK",
      clutchRating: 81,
      clutchPts: 4.2,
      clutchFgPct: 48.7,
      clutchFtPct: 78.3,
      gameWinners: 1,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "Anunoby's clutch-time value rarely shows up in the box score and showed up everywhere else — in Game 6 he held De'Aaron Fox to 1-of-7 shooting in the final five minutes, forcing two turnovers that directly produced four New York points. The best clutch defenders never need the ball to change a game.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 80,
      clutchPts: 7.3,
      clutchFgPct: 40.1,
      clutchFtPct: 92.4,
      gameWinners: 2,
      clutchPlusMinus: 3.1,
      biggestMoment:
        "Booker dropped 12 clutch-time points in a meaningless-to-the-standings but everything-to-him February game against the Lakers, hitting a long two over LeBron James with 22 seconds left that felt like it had been loaded in the chamber since 2021. Some shots are about more than the scoreboard.",
      trend: "down",
    },
    {
      rank: 15,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 78,
      clutchPts: 5.1,
      clutchFgPct: 44.3,
      clutchFtPct: 82.9,
      gameWinners: 2,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Castle's read of a scrambled possession with 1:08 left — recognizing the double-team collapsing before it fully formed, spinning into open space, and finishing a lefty layup through contact — was the kind of sophomore breakthrough moment that makes opposing coaches put his name on their scouting boards in red ink.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 75,
      clutchPts: 6.1,
      clutchFgPct: 39.7,
      clutchFtPct: 80.2,
      gameWinners: 1,
      clutchPlusMinus: 2.4,
      biggestMoment:
        "Banchero posted a 9-point clutch quarter against Miami in a February overtime game that showcased every tool in his arsenal — mid-range pull-up, a drive-and-dish that found the corner shooter, and two ice-cold free throws with 14 seconds left. The ceiling is still being constructed and nights like this are the scaffolding.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Mikal Bridges",
      team: "NYK",
      clutchRating: 72,
      clutchPts: 4.8,
      clutchFgPct: 41.4,
      clutchFtPct: 85.7,
      gameWinners: 1,
      clutchPlusMinus: 4.7,
      biggestMoment:
        "Bridges hit the corner three that functionally ended a Game 4 comeback attempt by the Spurs — it wasn't a game-winner, it was something quieter and more devastating: a shot that took the air completely out of an entire building and made the result feel inevitable three minutes before it was official.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 69,
      clutchPts: 3.9,
      clutchFgPct: 47.1,
      clutchFtPct: 71.4,
      gameWinners: 1,
      clutchPlusMinus: 6.3,
      biggestMoment:
        "Mobley's clutch-time block on a Giannis left-handed drive in overtime — a play that required him to rotate from the weakside, time a jump against one of the strongest players alive, and not foul — preserved a Cleveland lead that Mitchell finished off at the free-throw line. The defensive IQ at 24 is genuinely frightening.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 64,
      clutchPts: 6.9,
      clutchFgPct: 35.8,
      clutchFtPct: 88.3,
      gameWinners: 1,
      clutchPlusMinus: -3.7,
      biggestMoment:
        "Young's 14-point clutch performance against Chicago in March was the most Trae Young thing imaginable — absurdly creative, undeniably spectacular, and ultimately attached to a loss by two because the three he created in the final 20 seconds rattled out. The range is real. The efficiency in those moments remains a work in progress.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Zach LaVine",
      team: "SAC",
      clutchRating: 58,
      clutchPts: 5.4,
      clutchFgPct: 33.1,
      clutchFtPct: 76.8,
      gameWinners: 0,
      clutchPlusMinus: -6.2,
      biggestMoment:
        "LaVine's most memorable clutch moment this season was a thunderous self-alley-oop off the glass in the final minute against Utah — a play of breathtaking athleticism that gave Sacramento a one-point lead they surrendered on the next possession when he picked up a reach-in foul trying to compensate for a defensive miscommunication. The athleticism is forever. The moments have been complicated.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is a version of clutch performance that looks like heroism and a version that looks like inevitability. Shai Gilgeous-Alexander has crossed fully into the second category. His 99 clutch rating this season is built on a foundation of ruthless efficiency — 54.2% from the field in crunch time, 96.1% from the stripe, and a +14.3 clutch plus-minus that doesn't just suggest he makes his team better in the final five minutes, it proves it in the most absolute statistical terms available. Seven game-winners. Every single one of them looking like a training-facility rep that happened to have 18,000 people watching. The Thunder don't just trust SGA in clutch moments. They expect him to solve them.",
  },
  worstInClutch: {
    player: "Zach LaVine",
    team: "SAC",
    description:
      "Zach LaVine is, by every measurable athletic standard, a man built specifically for clutch basketball — the explosiveness, the shooting form, the mid-range touch that looks custom-manufactured for late-game isolation situations. And yet here we are, staring at a 33.1% clutch field-goal percentage and zero game-winners, wondering what cruel cosmic joke the basketball universe is telling. LaVine has the highlight. He always has the highlight. The problem is that the highlight is frequently followed by a foul, a turnover, or — as Sacramento fans have now witnessed multiple times this season — a possession-ending reach that erases the previous 30 seconds of brilliance. He is, bless his heart, the most athletically gifted player in the league who somehow turns into a pumpkin the moment the clock reads 4:59.",
  },
  weeklyHighlight:
    "The week of August 3rd offered the kind of clutch-performance retrospective that makes the regular season feel like it happened yesterday. Shai Gilgeous-Alexander's season-long dominance in crunch time crystallized into a clean statistical argument this week — no player in basketball has been more reliable, more efficient, or more ice-blooded over the final five minutes than the Thunder's franchise anchor, and the integration of Oklahoma City's supporting cast only amplifies what he already was. In San Antonio, the De'Aaron Fox era moved one signature away from official launch, and the clutch data tells you exactly why the Spurs pursued him with such singular focus: Fox's 97 clutch rating and six game-winners in a single season represent a closing gear that championship organizations require. Meanwhile, Jalen Brunson's Finals MVP performance looms over every clutch conversation in the Eastern Conference like a permanent benchmark — his Game 7 numbers were not a career peak, they were a confirmation. The most quietly compelling storyline belongs to Stephon Castle, whose clutch rating has climbed six points in three weeks as San Antonio's coaching staff has begun trusting him with the ball in scrambled late-game possessions. He is 20 years old and he is not flinching. And somewhere in Atlanta, Trae Young is doing exactly what Trae Young does: lighting up a stat sheet in a losing effort with the kind of creative genius that makes you genuinely sad it doesn't come with a better clutch field-goal percentage attached. The week's biggest unanswered question isn't about the top — it's about the middle tier, where the gap between players ranked 8 through 14 has compressed to almost nothing. Four of those players have identical game-winner counts. Any one of them is one big shot away from forcing a real editorial conversation about who belongs in the league's elite clutch tier.",
};