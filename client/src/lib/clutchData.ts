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
  generatedDate: "July 20, 2026",
  weekLabel: "Week of July 20–26, 2026",
  players: [
    {
      rank: 1,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.8,
      gameWinners: 7,
      clutchPlusMinus: 12.3,
      biggestMoment:
        "With the Knicks down two and 11.4 seconds left in Game 7 of the Finals, Brunson caught a DHO at the elbow, pump-faked Chris Paul into the air, absorbed the contact, and converted the and-one with a composure so absolute that the Sphere's noise briefly dropped to stunned silence before erupting. The free throw sealed a championship and permanently answered every question anyone had ever asked about his ceiling.",
      trend: "stable",
    },
    {
      rank: 2,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 97,
      clutchPts: 8.9,
      clutchFgPct: 52.7,
      clutchFtPct: 94.1,
      gameWinners: 6,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "In Game 5 of the Western Conference Finals against Minnesota, SGA isolated Rudy Gobert on the left block with 4.2 seconds remaining, executed a step-back pull-up from 19 feet that kissed the backboard glass on its way through, and walked back up the court without so much as raising a fist — the most terrifyingly calm game-winner of the entire postseason.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 96,
      clutchPts: 8.1,
      clutchFgPct: 49.8,
      clutchFtPct: 88.3,
      gameWinners: 5,
      clutchPlusMinus: 10.9,
      biggestMoment:
        "Down three with 38 seconds left in Game 6 of the Finals, Wembanyama caught a lob at the rim, absorbed Towns's verticaled contest, and converted while drawing the foul — then, after the make, immediately deflected Brunson's ensuing inbound pass to force a scramble that nearly produced a miracle. The sequence reminded everyone that even in defeat, the alien operates on a different frequency.",
      trend: "up",
    },
    {
      rank: 4,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 7.8,
      clutchFgPct: 48.6,
      clutchFtPct: 91.4,
      gameWinners: 5,
      clutchPlusMinus: 10.2,
      biggestMoment:
        "Fox's Game 4 Finals performance was a masterclass in controlled aggression — he scored 11 of San Antonio's final 13 points in regulation, including a 28-foot pull-up three with the shot clock expiring at the 1:02 mark that silenced the Garden completely and forced overtime. It was the single loudest individual shot in Spurs postseason history.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Luka Dončić",
      team: "DAL",
      clutchRating: 94,
      clutchPts: 8.6,
      clutchFgPct: 46.3,
      clutchFtPct: 78.9,
      gameWinners: 4,
      clutchPlusMinus: 8.7,
      biggestMoment:
        "In a March elimination-stakes game against Memphis, Dončić posted up Jaren Jackson Jr. in the final minute, spun baseline, and released a running floater over two defenders from eight feet that banked softly off the glass — a shot that existed nowhere in the Dallas playbook and everywhere in Luka's imagination. He finished that clutch period with 14 points on 6-of-7 shooting.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 92,
      clutchPts: 7.3,
      clutchFgPct: 44.8,
      clutchFtPct: 85.6,
      gameWinners: 4,
      clutchPlusMinus: 7.4,
      biggestMoment:
        "With Boston's season hanging by a thread in Game 6 of the Eastern Conference Semifinals, Tatum caught a Jaylen Brown handoff at the three-point line, rejected the screen, drove baseline through two Milwaukee defenders, and finished a reverse layup with his left hand with 3.7 seconds left — a play so improvisational and precise that even Doc Rivers nodded from across the court.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 91,
      clutchPts: 8.2,
      clutchFgPct: 43.1,
      clutchFtPct: 92.7,
      gameWinners: 4,
      clutchPlusMinus: 6.9,
      biggestMoment:
        "Dame's logo three against Cleveland in late February — a 32-footer with Darius Garland draped across him, released with 0.4 seconds on the shot clock and no arc that any physics teacher would endorse — dropped through the net so cleanly that the Milwaukee bench stood in unison before the ball even landed. It was the longest game-winner of the 2025–26 regular season by nine feet.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 91,
      clutchPts: 7.6,
      clutchFgPct: 47.9,
      clutchFtPct: 93.2,
      gameWinners: 3,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "In a Western Conference play-in thriller against Sacramento, Curry caught a transition pass at the three-point line with two seconds left, planted, and released a 26-footer before the defense could close — the ball going in before the horn sounded, before the crowd registered what had happened, before De'Aaron Fox's future had officially complicated itself. Curry simply turned and walked to the bench like he'd made a layup.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Kawhi Leonard",
      team: "LAC",
      clutchRating: 90,
      clutchPts: 6.8,
      clutchFgPct: 51.4,
      clutchFtPct: 87.3,
      gameWinners: 3,
      clutchPlusMinus: 9.2,
      biggestMoment:
        "Kawhi's midrange isolation over Paolo Banchero in the final 90 seconds of a January tiebreaker against Orlando was textbook Leonard — two dribbles left, one right, a shoulder fake that sent Paolo back-pedaling, and a 17-foot fadeaway that barely disturbed the net. The efficiency of violence has never looked quieter or more complete.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 89,
      clutchPts: 7.1,
      clutchFgPct: 45.6,
      clutchFtPct: 88.9,
      gameWinners: 3,
      clutchPlusMinus: 6.3,
      biggestMoment:
        "Mitchell's back-to-back clutch threes in the final 90 seconds against Boston in the conference semis — both contested, both from the left wing, both absolutely pure — turned a five-point deficit into a one-point lead that Cleveland nearly held. The Cavs lost by one in double overtime, but Mitchell's individual clutch sequence was the sequence of the Eastern playoffs.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 88,
      clutchPts: 7.4,
      clutchFgPct: 43.7,
      clutchFtPct: 84.2,
      gameWinners: 3,
      clutchPlusMinus: 5.8,
      biggestMoment:
        "Ant's pull-up jumper over SGA in Game 4 of the Western Conference Finals — a mid-range laser from 18 feet with Gilgeous-Alexander's hand in his face — gave Minnesota a brief, thrilling lead with under two minutes left. The building shook. The lead lasted 34 seconds. But the shot itself was a declaration that Ant belongs in every closing conversation.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 86,
      clutchPts: 6.4,
      clutchFgPct: 44.2,
      clutchFtPct: 80.6,
      gameWinners: 2,
      clutchPlusMinus: 5.1,
      biggestMoment:
        "Brown's dunk over Brook Lopez with 1:14 remaining in Game 5 of the conference semis was the most ferocious individual play of Boston's postseason — a dead-sprint catch at the rim off a Tatum skip pass, Brown absorbing full-body contact from Lopez and finishing with both hands, the dunk rattling the rim long after the whistle confirmed the and-one.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 85,
      clutchPts: 5.9,
      clutchFgPct: 42.8,
      clutchFtPct: 91.7,
      gameWinners: 2,
      clutchPlusMinus: 5.6,
      biggestMoment:
        "Haliburton's no-look, left-handed bounce pass to Myles Turner for a backdoor dunk against Miami with 58 seconds left in regulation was the most creative clutch assist of the regular season — a pass that traveled through a gap that existed for approximately 0.3 seconds and arrived exactly on time. Indiana won by one. The pass was the margin.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 83,
      clutchPts: 6.2,
      clutchFgPct: 41.9,
      clutchFtPct: 82.4,
      gameWinners: 2,
      clutchPlusMinus: 4.3,
      biggestMoment:
        "Banchero's turnaround fadeaway over Bam Adebayo in the final minute of Orlando's play-in victory was the most important shot in Magic history since the franchise returned to relevance — a power-forward isolation at the elbow, one bounce, a pivot right, and a clean 16-footer over a perfectly positioned Bam. Orlando's entire playoff future balanced on that one release point.",
      trend: "up",
    },
    {
      rank: 15,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 82,
      clutchPts: 5.7,
      clutchFgPct: 46.1,
      clutchFtPct: 76.3,
      gameWinners: 2,
      clutchPlusMinus: 4.8,
      biggestMoment:
        "In what may have been the final clutch sequence of his career, LeBron drove baseline against Phoenix in March, drew two defenders, and lofted a soft left-handed layup over Devin Booker's outstretched arm with 22 seconds left — a 41-year-old body doing something that 22-year-old bodies miss. The basket gave LA a lead they never surrendered. The Building gave him a standing ovation before the next possession.",
      trend: "down",
    },
    {
      rank: 16,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 81,
      clutchPts: 6.6,
      clutchFgPct: 40.3,
      clutchFtPct: 89.1,
      gameWinners: 2,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "Booker's step-back three against Dallas from the right corner with 1:41 left — Luka trying to switch onto him, trailing by half a step — was vintage Suns crunch time, a shot Devin has taken ten thousand times in practice and converted here when the season's balance depended on it. Phoenix lost the series in six, but Booker's individual clutch numbers were the story no one told loudly enough.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 79,
      clutchPts: 6.9,
      clutchFgPct: 38.7,
      clutchFtPct: 93.4,
      gameWinners: 1,
      clutchPlusMinus: 1.7,
      biggestMoment:
        "Trae's 34-foot floater over Tyrese Haliburton with 4.8 seconds left in double overtime against Indiana in February was the longest make of his regular season — a high-arcing, off-the-backboard teardrop from an altitude that suggested Trae was simply refusing to acknowledge the structural reality of NBA shot-making. Atlanta won in three overtimes. Trae scored the last nine.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Desmond Bane",
      team: "MEM",
      clutchRating: 77,
      clutchPts: 5.4,
      clutchFgPct: 43.6,
      clutchFtPct: 86.2,
      gameWinners: 1,
      clutchPlusMinus: 2.9,
      biggestMoment:
        "Bane's straight-away three over Darius Garland in the final minute of Memphis's regular-season finale — a shot that secured the Grizzlies' playoff seeding — was the quietest game-defining moment of the year, delivered by a player whose clutch competence remains one of the league's most consistent and underreported assets. He caught, set, fired, and made it look like a training camp drill.",
      trend: "up",
    },
    {
      rank: 19,
      player: "Zach LaVine",
      team: "SAC",
      clutchRating: 74,
      clutchPts: 6.1,
      clutchFgPct: 37.4,
      clutchFtPct: 81.9,
      gameWinners: 1,
      clutchPlusMinus: -1.4,
      biggestMoment:
        "LaVine's and-one conversion against Portland with 48 seconds left in March kept Sacramento's play-in hopes technically alive — a slashing drive through the paint that absorbed a Jerami Grant body blow and still found the glass. It was Zach at his most athletically undeniable, in a game that ultimately mattered marginally. The Kings lost three of their next four and missed the play-in by one game.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Jordan Poole",
      team: "WAS",
      clutchRating: 61,
      clutchPts: 4.8,
      clutchFgPct: 29.3,
      clutchFtPct: 78.4,
      gameWinners: 0,
      clutchPlusMinus: -6.8,
      biggestMoment:
        "Poole's most memorable clutch sequence of the season came against Charlotte in February — he drove hard left, drew a foul, went to the line with Washington down one, made the first, and watched the second rattle in and out with 1.1 seconds remaining. The Hornets' bench celebrated with the energy of a Game 7 winner. Jordan stood at the line staring at the rim like it had personally wronged him across multiple lifetimes.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jalen Brunson",
    team: "NYK",
    description:
      "Jalen Brunson does not simply perform in the clutch — he expands into it. The bigger the moment, the more deliberate his footwork, the more precise his decision-making, the higher his field goal percentage climbs. His 54.2% clutch field goal percentage this season is not a small sample anomaly; it is the product of a player who has methodically engineered his game to peak at the exact moment every other player's hands begin to shake. Seven game-winners, a 96.8% clutch free throw rate, and a Finals-closing and-one that will be shown on Madison Square Garden's archives for the next forty years: Brunson is the undisputed Clutch King of the 2025–26 season, and it isn't particularly close.",
  },
  worstInClutch: {
    player: "Jordan Poole",
    team: "WAS",
    description:
      "There is a specific and very human kind of suffering that comes from watching Jordan Poole in the final five minutes of a close game, and it deserves to be acknowledged with both honesty and tenderness. Poole shoots 29.3% in clutch situations this season, which means that for every three late-game attempts, two of them are giving the rim a polite visit before bouncing back to the defense. The Charlotte free throw miss was the season's defining moment of clutch misfortune — made worse only by the fact that Jordan clearly, genuinely wanted it to go in. He's not indifferent to the suffering. He just seems cursed by it. Washington fans have developed a coping mechanism: they simply expect the miss now, which means they're occasionally, beautifully surprised. That's something.",
  },
  weeklyHighlight:
    "The 2025–26 NBA season produced a clutch landscape more stratified and dramatic than any in recent memory, and the final accounting confirms what most of us felt in real time: this was the Year of Brunson, with SGA and Wembanyama trading blows for the title of Most Terrifying Young Closer on the planet. The Finals itself was a referendum on clutch execution — San Antonio's Wembanyama and Fox kept the Spurs alive through five games with individual closing performances that would have defined lesser postseasons, but Brunson's Game 7 sequence, starting with a mid-range two with 1:47 left and ending with the and-one that clinched it all, was the single most compressed display of clutch excellence in one game since Kawhi's 2019 bounce. Meanwhile, the week's most intriguing subplot involves Dame Lillard's logo three against Cleveland, which is aging into legend faster than most shots do — the distance, the context, the absolute absence of hesitation. Below the championship tier, Anthony Edwards is making the argument with his feet that the next era of clutch kings is already here, and that the conversation in two years will look very different from the one we're having now. And somewhere in Washington, Jordan Poole is watching all of this, still thinking about that free throw, already planning to make the next one.",
};