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
  generatedDate: "August 24, 2026",
  weekLabel: "Week of August 24–30, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 99,
      clutchPts: 9.4,
      clutchFgPct: 54.8,
      clutchFtPct: 96.2,
      gameWinners: 11,
      clutchPlusMinus: 18.7,
      biggestMoment:
        "Down two with 4.3 seconds left in Game 6 against Memphis, SGA caught a half-court inbound, side-stepped a lunging defender, and buried a pull-up mid-range over a closing hand — the ball barely kissing glass before dropping through to send OKC to the Conference Finals. The arena fell silent for a full second before erupting.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 98,
      clutchPts: 8.9,
      clutchFgPct: 51.3,
      clutchFtPct: 88.4,
      gameWinners: 9,
      clutchPlusMinus: 16.2,
      biggestMoment:
        "With the Finals tied at 2-2 and San Antonio clinging to a one-point lead in the dying seconds, Wembanyama read a lob pass at the rim, swatted it off the backboard to himself, and converted the putback to seal the game — a sequence so spatially impossible that the broadcast booth went completely silent for three seconds.",
      trend: "up",
    },
    {
      rank: 3,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 96,
      clutchPts: 8.2,
      clutchFgPct: 49.7,
      clutchFtPct: 91.8,
      gameWinners: 8,
      clutchPlusMinus: 14.9,
      biggestMoment:
        "Trailing by one with 18 seconds on the clock in the Western Conference Semifinals, Fox blew past two defenders in transition, absorbed contact at the rim, finished the and-one, and stared down the opposing bench with a calm that made the crowd feel like spectators at a coronation rather than a basketball game.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 95,
      clutchPts: 9.1,
      clutchFgPct: 48.9,
      clutchFtPct: 94.6,
      gameWinners: 10,
      clutchPlusMinus: 15.4,
      biggestMoment:
        "His 44-point Game 7 performance peaked with a step-back three over a collapsing double-team with 31 seconds remaining — a shot so preposterous in its degree of difficulty that even the Madison Square Garden crowd needed a half-beat to process what they'd witnessed before the building came completely unglued.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 93,
      clutchPts: 8.6,
      clutchFgPct: 46.2,
      clutchFtPct: 87.3,
      gameWinners: 7,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "Minnesota down three with 1:24 remaining, Edwards posted up 25 feet from the basket, shook his defender with a hesitation dribble, and launched a contested three that hit nothing but net — then jogged back on defense pointing at his temple like the shot was always the plan, because it probably was.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 91,
      clutchPts: 7.8,
      clutchFgPct: 52.1,
      clutchFtPct: 83.9,
      gameWinners: 6,
      clutchPlusMinus: 13.1,
      biggestMoment:
        "With Denver down one and the shot clock expiring, Jokic received a post entry, pump-faked two defenders into the air simultaneously, and laid in a floater off the glass that looked like a geometry problem being solved in real time — because for Jokic, it essentially was.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 90,
      clutchPts: 8.3,
      clutchFgPct: 45.8,
      clutchFtPct: 89.1,
      gameWinners: 8,
      clutchPlusMinus: 10.6,
      biggestMoment:
        "Cleveland down two with 9.4 seconds left, Mitchell caught the inbound at halfcourt, attacked the paint, drew the foul, and converted both free throws with a pulse that appeared to be sitting somewhere around resting. He then pointed to the sky and mouthed something to no one in particular — only Mitchell knows what.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 88,
      clutchPts: 7.6,
      clutchFgPct: 43.4,
      clutchFtPct: 86.7,
      gameWinners: 7,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "Tied with two minutes left in the Eastern Conference Semifinals, Tatum isolated on the left wing, crossed over twice, and rose up over a well-positioned defender for a pull-up jumper that hit the back of the rim, rattled around twice, and fell through — a shot the basketball gods seemed to debate before approving.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 87,
      clutchPts: 7.9,
      clutchFgPct: 44.1,
      clutchFtPct: 91.4,
      gameWinners: 9,
      clutchPlusMinus: 8.8,
      biggestMoment:
        "Forty-one years old and still doing it — Curry's logo three with 14 seconds remaining to give Golden State a one-point lead over Phoenix was met with a shimmy so practiced and so deliberate that it felt less like celebration and more like a formal notice to the basketball world that he intends to keep doing this indefinitely.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 85,
      clutchPts: 6.8,
      clutchFgPct: 43.9,
      clutchFtPct: 88.6,
      gameWinners: 6,
      clutchPlusMinus: 10.2,
      biggestMoment:
        "With Indiana clinging to a two-point lead and only 22 seconds left, Haliburton ran a pick-and-roll with surgical patience, absorbed the hedge defender's momentum, and threaded a bounce pass through an impossibly tight window to a cutting Aaron Nesmith for the layup — an assist that sealed the game and left two defenders visibly confused about what had just happened to them.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 84,
      clutchPts: 7.4,
      clutchFgPct: 44.7,
      clutchFtPct: 84.2,
      gameWinners: 5,
      clutchPlusMinus: 7.9,
      biggestMoment:
        "Memphis down one with 34 seconds left, Morant took a handoff at the elbow, went airborne from the dotted line, and extended his body horizontally to lay the ball off the glass above the outstretched arm of a 7-foot-1 center — a play that had every Memphis fan holding their breath until the ball cleared the rim.",
      trend: "up",
    },
    {
      rank: 12,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 83,
      clutchPts: 7.1,
      clutchFgPct: 46.3,
      clutchFtPct: 79.8,
      gameWinners: 7,
      clutchPlusMinus: 9.1,
      biggestMoment:
        "In what might be the defining image of the 2025-26 season, a 41-year-old LeBron James backed down a defender in the final minute, turned, and hit a turnaround fade-over to force overtime against Denver — then jogged to the bench, sat down, and looked less tired than the broadcasters describing the play.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 81,
      clutchPts: 6.4,
      clutchFgPct: 47.6,
      clutchFtPct: 76.3,
      gameWinners: 4,
      clutchPlusMinus: 8.3,
      biggestMoment:
        "Down one with 41 seconds left against Oklahoma City, Sengun caught a post entry, spun baseline with his signature footwork, drew two defenders, and found the open cutter for the go-ahead layup — a play designed for a point guard that Sengun executed with the vision of someone who's been running pick-and-roll clinics since birth.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 79,
      clutchPts: 5.9,
      clutchFgPct: 45.2,
      clutchFtPct: 84.7,
      gameWinners: 4,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "With New York tied in the closing seconds of Game 4, KAT caught a post-up on the right block, pump-faked twice until his defender was entirely airborne, and kissed a short hook off the glass — the kind of shot he's been making since college and one that gave Madison Square Garden a brief, collective cardiac event before the celebration.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 77,
      clutchPts: 6.2,
      clutchFgPct: 42.8,
      clutchFtPct: 85.9,
      gameWinners: 5,
      clutchPlusMinus: 6.4,
      biggestMoment:
        "Detroit's young star silenced a road crowd in Milwaukee with a step-back three from the right corner with 6.8 seconds remaining, giving the Pistons a playoff berth-clinching win — Cunningham's first true signature clutch moment in a career that has been building toward exactly this kind of night.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 75,
      clutchPts: 5.7,
      clutchFgPct: 41.3,
      clutchFtPct: 90.1,
      gameWinners: 4,
      clutchPlusMinus: 5.8,
      biggestMoment:
        "Cleveland up one and the shot clock at two, Garland corralled a loose ball, drew a foul with characteristic floatiness through traffic, and knocked down both free throws — not glamorous, not highlight-reel, but exactly the kind of clutch competency that separates playoff teams from playoff-adjacent ones.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 72,
      clutchPts: 5.4,
      clutchFgPct: 39.8,
      clutchFtPct: 81.4,
      gameWinners: 3,
      clutchPlusMinus: 4.2,
      biggestMoment:
        "With Boston tied and 28 seconds left, Brown attacked the rim off a DHO, absorbed contact at the charge circle, and converted a difficult reverse layup before hitting the free throw — a sequence that reminded the Eastern Conference that even when his efficiency wavers, Brown's willingness to live in the fire never does.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 70,
      clutchPts: 5.6,
      clutchFgPct: 38.4,
      clutchFtPct: 79.6,
      gameWinners: 3,
      clutchPlusMinus: 3.7,
      biggestMoment:
        "Orlando down two with 52 seconds left, Banchero posted up on the left block, used three dribbles to create space, and hit a mid-post jumper that gave Orlando the lead — a play that felt like the first page of what scouts have been promising will be a very long, very impressive closing chapter in his career.",
      trend: "up",
    },
    {
      rank: 19,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 67,
      clutchPts: 4.8,
      clutchFgPct: 44.1,
      clutchFtPct: 72.3,
      gameWinners: 2,
      clutchPlusMinus: 5.1,
      biggestMoment:
        "Mobley's clutch value is primarily defensive — his blocked shot on a driving Jaylen Brown with 1:14 remaining preserved Cleveland's two-point lead and triggered a fast break the other direction, a sequence that encapsulates why his clutch rating remains respectable despite offensive limitations at the free-throw line.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Brandon Ingram",
      team: "NOP",
      clutchRating: 63,
      clutchPts: 5.1,
      clutchFgPct: 37.2,
      clutchFtPct: 74.8,
      gameWinners: 2,
      clutchPlusMinus: -2.4,
      biggestMoment:
        "Ingram's most memorable clutch sequence came against Chicago when he hit a mid-range pull-up to tie the game with 48 seconds left — only for his subsequent turnover on New Orleans's next possession to hand the Bulls the win, a moment that perfectly summarizes the thrilling, maddening rollercoaster of trusting Brandon Ingram in late-game situations.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is simply no player in the NBA right now who makes the final five minutes feel more inevitable than Shai Gilgeous-Alexander. His 9.4 clutch points per game lead the entire league, his 96.2% free-throw rate in pressure situations borders on supernatural, and his 11 game-winners this season represent a command of late-game basketball that feels less like athleticism and more like a philosophical position. What separates SGA from every other elite closer in this era is the complete absence of panic — he doesn't accelerate in clutch moments, he decelerates, slowing the game to a pace only he can fully process. The OKC engine room may hum on collective depth, but when the lights are brightest and the margin is slimmest, this team runs through one address.",
  },
  worstInClutch: {
    player: "Brandon Ingram",
    team: "NOP",
    description:
      "God bless Brandon Ingram, because the man genuinely believes every single time. He'll rise up for a silky mid-range pull-up with 48 seconds left like he's been practicing that exact shot since age seven — and he has been, and it goes in — and then roughly 11 seconds later he'll dribble directly into a trap he saw coming from three possessions away and gift-wrap the ball to the opposing point guard. A -2.4 clutch plus-minus is the basketball equivalent of a car that starts beautifully and then runs a red light. New Orleans fans have developed a very specific emotional vocabulary for Ingram clutch situations: hope, delight, dread, acceptance. In that order. Always in that order.",
  },
  weeklyHighlight:
    "The week of August 24 gave us a masterclass in what separates the closers from the contributors, and the defining sequence belonged to Shai Gilgeous-Alexander, whose improbable half-court inbound conversion in Game 6 against Memphis will be the first clip that plays at his Hall of Fame induction — assuming he doesn't top it somewhere between now and then, which feels increasingly likely. Victor Wembanyama continued to operate in a dimension that doesn't fully share physics with the rest of the league, his Game 6 Finals rejection-and-putback a sequence that television replay somehow made look more impossible rather than less. The Eastern Conference's clutch narrative belonged to Jalen Brunson, whose 44-point Game 7 at Madison Square Garden completed one of the great individual closing performances in franchise history, but the week's most quietly significant development was Donovan Mitchell's continued creep up this chart — seven clutch game-winners now, a free-throw rate north of 89%, and a demeanor in tight moments that grows calmer the louder the arena gets. Down at the bottom of the rankings, Brandon Ingram provided the week's most tragicomic moment, proving once again that clutch performance and clutch intention are two very different statistical categories, and that New Orleans fans have infinite capacity for hope, infinite capacity for heartbreak, and presumably very good blood pressure medication.",
};