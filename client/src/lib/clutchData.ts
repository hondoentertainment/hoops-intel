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
  generatedDate: "October 12, 2026",
  weekLabel: "Week of October 12–18, 2026",
  players: [
    {
      rank: 1,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 98,
      clutchPts: 9.2,
      clutchFgPct: 58.3,
      clutchFtPct: 91.7,
      gameWinners: 2,
      clutchPlusMinus: +12.4,
      biggestMoment:
        "With Denver trailing Chicago by three and 1:47 remaining at Ball Arena, Jokic caught a high-post entry, pump-faked Nikola Vucevic into the air, and converted a silky mid-range fadeaway before drawing the foul — a three-point swing that rewrote the game's final chapter and sent the building into a standing ovation.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Luka Doncic",
      team: "DAL",
      clutchRating: 96,
      clutchPts: 8.7,
      clutchFgPct: 54.1,
      clutchFtPct: 88.9,
      gameWinners: 2,
      clutchPlusMinus: +10.8,
      biggestMoment:
        "Houston trimmed Dallas's lead to six with 3:20 left at the Venetian Arena before Doncic isolated on the left wing, crossed his defender into oblivion with a between-the-legs hesitation, and buried a stepback three that pushed the margin to nine and effectively murdered the Rockets' comeback oxygen supply.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 95,
      clutchPts: 8.4,
      clutchFgPct: 51.7,
      clutchFtPct: 94.4,
      gameWinners: 1,
      clutchPlusMinus: +9.1,
      biggestMoment:
        "In Oklahoma City's lone clutch test of the window — a second-half simulation scenario against Atlanta's starters — SGA dissected the Hawks' switching defense with three consecutive late-clock pull-up jumpers from 18 feet, each one cleaner than the last, demonstrating the kind of shot-creation autonomy that made OKC's 64-win season possible.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Jimmy Butler",
      team: "MIA",
      clutchRating: 94,
      clutchPts: 8.1,
      clutchFgPct: 50.0,
      clutchFtPct: 95.8,
      gameWinners: 1,
      clutchPlusMinus: +8.6,
      biggestMoment:
        "Miami's one-point home loss to Minnesota was defined by a single possession Butler nearly stole back — driving baseline with four seconds left, drawing contact from Anthony Edwards at the rim, and sinking both free throws to cut the deficit to one before Edwards sealed it at the other end.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 93,
      clutchPts: 7.9,
      clutchFgPct: 49.2,
      clutchFtPct: 87.5,
      gameWinners: 1,
      clutchPlusMinus: +7.8,
      biggestMoment:
        "With Butler threatening to steal the game at the Kaseya Center, Edwards answered the two late Butler free throws with a thunderous two-handed seal dunk off a Minnesota inbound set — a play drawn up in the final timeout that the coaching staff has reportedly been saving since training camp.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 7.6,
      clutchFgPct: 47.8,
      clutchFtPct: 82.4,
      gameWinners: 1,
      clutchPlusMinus: +5.9,
      biggestMoment:
        "San Antonio's preseason evaluation at Utah became the week's most compelling individual showcase when Wembanyama, operating at the elbow with 2:10 remaining, rejected a Collin Sexton floater attempt clean as a whistle and then — in the same possession after a long rebound — pushed the ball himself in transition for a coast-to-coast dunk.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 89,
      clutchPts: 7.3,
      clutchFgPct: 46.5,
      clutchFtPct: 90.0,
      gameWinners: 1,
      clutchPlusMinus: +5.2,
      biggestMoment:
        "Fox's most electric moment of the Utah evaluation came on a secondary break where he split two Jazz defenders in the lane at full speed, laid the ball up off the glass with his left hand, and drew the foul — a three-point play that gave San Antonio a four-point cushion with under two minutes left.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 85,
      clutchPts: 6.8,
      clutchFgPct: 44.0,
      clutchFtPct: 78.6,
      gameWinners: 0,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Even in a 17-point home loss to Dallas, Sengun provided the week's most technically impressive post sequence — catching a deep seal entry against Lively, executing a quick drop step to the baseline, and converting a left-handed hook over an outstretched defender in a moment that demonstrated his offensive toolkit is absolutely real, even if the box score told a different story.",
      trend: "down",
    },
    {
      rank: 9,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 84,
      clutchPts: 6.5,
      clutchFgPct: 45.5,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: +3.7,
      biggestMoment:
        "Castle's most defining clutch sequence at Utah was a read-and-react steal off a Jazz guard's telegraphed crossover at halfcourt with 90 seconds remaining, which he converted into a fast-break layup — the kind of instinctive two-way play that makes the extension-anchor classification feel completely warranted.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 82,
      clutchPts: 6.2,
      clutchFgPct: 41.2,
      clutchFtPct: 68.4,
      gameWinners: 0,
      clutchPlusMinus: -5.3,
      biggestMoment:
        "Milwaukee's fourth-quarter collapse at Charlotte was crystallized by a Giannis drive at the 4:30 mark — he split the paint, reached the rim, and missed both free throws after the foul call, leaving five points on the table in a game the Bucks would eventually lose by 15 and confirming that Charlotte's defensive scheme had crawled inside his head by the second half.",
      trend: "down",
    },
    {
      rank: 11,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 88,
      clutchPts: 7.1,
      clutchFgPct: 48.8,
      clutchFtPct: 89.5,
      gameWinners: 1,
      clutchPlusMinus: +6.4,
      biggestMoment:
        "Mitchell drilled a pull-up three from the top of the key over a closing defender with 38 seconds left against Indiana to give Cleveland a lead they would not relinquish — the shot was so pure that Pacers head coach Rick Carlisle's mid-timeout diagram reportedly just read 'stop him' underlined three times.",
      trend: "up",
    },
    {
      rank: 12,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 87,
      clutchPts: 7.0,
      clutchFgPct: 47.1,
      clutchFtPct: 86.2,
      gameWinners: 1,
      clutchPlusMinus: +5.8,
      biggestMoment:
        "Tatum isolated on the right wing against Toronto's Scottie Barnes in the game's final minute, rocked him with a jab step, and buried a mid-range pull-up to seal a two-possession lead — textbook Tatum late-game execution, the kind that has become so routine in Boston that the Garden crowd exhaled before the ball left his hands.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Kevin Durant",
      team: "PHX",
      clutchRating: 86,
      clutchPts: 6.9,
      clutchFgPct: 50.0,
      clutchFtPct: 91.3,
      gameWinners: 1,
      clutchPlusMinus: +4.9,
      biggestMoment:
        "Durant's signature moment of the week was a textbook unguardable baseline fade against the Clippers — a seven-footer with a nine-foot wingspan releasing a jumper over a defender who had done absolutely everything right, which is essentially the purest summary of what makes Durant a permanent fixture on any clutch ranking.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 83,
      clutchPts: 5.8,
      clutchFgPct: 43.5,
      clutchFtPct: 92.0,
      gameWinners: 0,
      clutchPlusMinus: +4.2,
      biggestMoment:
        "Haliburton orchestrated a 9-2 Indiana run in the final three minutes against Cleveland entirely through passing — a skip pass to the corner, a no-look drop-off to Myles Turner, and a lob in transition — before the Pacers ultimately fell short, reminding the league that his clutch value lives as much in his decision-making as in his scoring.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 83,
      clutchPts: 5.9,
      clutchFgPct: 46.2,
      clutchFtPct: 79.2,
      gameWinners: 1,
      clutchPlusMinus: +3.1,
      biggestMoment:
        "LeBron's game-winner against Sacramento was vintage — posting up in the final 12 seconds, feeling the double team arrive, spinning baseline away from it, and dropping in a left-handed scoop that kissed the glass and fell through to the sound of a Crypto.com Arena that briefly forgot how complicated the last few seasons have been.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 81,
      clutchPts: 6.1,
      clutchFgPct: 44.8,
      clutchFtPct: 93.8,
      gameWinners: 0,
      clutchPlusMinus: +2.6,
      biggestMoment:
        "Booker was at his ice-cold best against the Clippers' closing unit, making four of five free throws in the final 90 seconds without a trace of hesitation and drawing fouls on two consecutive possessions through sheer positional aggression — not glamorous, but the kind of late-game reliability that wins games in November.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 79,
      clutchPts: 5.4,
      clutchFgPct: 38.9,
      clutchFtPct: 87.5,
      gameWinners: 0,
      clutchPlusMinus: -3.8,
      biggestMoment:
        "Lillard's deep three attempt at Charlotte — a contested 31-footer from the Damian Lillard zip code with Milwaukee down three in the final minute — ricocheted off the back iron and into the hands of a grateful Hornets defense, a play that encapsulated Milwaukee's entire week: ambitious, technically sound in theory, and ultimately heartbreaking.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 78,
      clutchPts: 5.2,
      clutchFgPct: 40.0,
      clutchFtPct: 84.6,
      gameWinners: 0,
      clutchPlusMinus: +1.4,
      biggestMoment:
        "Cunningham posted Detroit's most clutch-period efficiency of the week against Chicago's second unit, going 3-for-5 from the field in the final four minutes of a competitive preseason finish and showing the decisive burst off the dribble that scouts have quietly labeled as the most improved element of his game entering 2026.",
      trend: "up",
    },
    {
      rank: 19,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 76,
      clutchPts: 5.0,
      clutchFgPct: 37.5,
      clutchFtPct: 88.9,
      gameWinners: 0,
      clutchPlusMinus: -1.9,
      biggestMoment:
        "Young conjured a beautiful late-game sequence against OKC — a snap three off the dribble from the left wing that appeared to be going in until it rattled in and out, followed immediately by a precise lob to the rolling big for an and-one — a microcosm of a week where Atlanta's clutch execution was occasionally stunning and occasionally infuriating.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 74,
      clutchPts: 4.8,
      clutchFgPct: 36.4,
      clutchFtPct: 75.0,
      gameWinners: 0,
      clutchPlusMinus: -4.7,
      biggestMoment:
        "Banchero's week in the clutch window was defined by a single fourth-quarter possession against Brooklyn where he caught the ball on the wing, froze his defender with a hesitation, drove into the lane — and then inexplicably picked up his dribble six feet from the basket and was stripped clean, a moment that arrived with all the correct ingredients and produced absolutely none of the desired results.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Nikola Jokic",
    team: "DEN",
    description:
      "Nikola Jokic does not experience clutch situations the way other players do — he experiences them the way a chess grandmaster experiences a ticking clock, which is to say with a kind of preternatural calm that borders on unsettling. His Ball Arena performance against Chicago this week was the definitive clutch statement of the window: a 9.2 clutch-points-per-game average backed by 58.3% shooting and a +12.4 clutch plus-minus that wasn't just the week's best number, it wasn't even close to the week's second-best number. When Denver needed the weight-bearing walls to hold in the fourth quarter, Jokic was every single one of them.",
  },
  worstInClutch: {
    player: "Paolo Banchero",
    team: "ORL",
    description:
      "Paolo Banchero is, by every available measurement, a genuinely talented basketball player — which makes his 36.4% clutch field-goal percentage and -4.7 plus-minus this week all the more bewildering to witness. The man arrives to late-game situations with the correct footwork, the correct read, and the correct intentions, and then something in the final computation goes sideways. The dribble-pickup play against Brooklyn was the week's most complete crystallization of his clutch-window struggles: a symphony that assembled every instrument correctly and then forgot to hire a conductor.",
  },
  weeklyHighlight:
    "The week of October 12–18 announced itself with a clear philosophical argument: clutch performance in 2026 still belongs, first and foremost, to the players who operate slowest when the game speeds up most. Jokic was the week's undisputed thesis statement — his fourth-quarter dissection of Chicago's defense at Ball Arena, culminating in a pump-fake mid-range conversion that swung three points and the momentum in a single possession, was the kind of play that gets discussed in coaching clinics before the season is three weeks old. Doncic, meanwhile, executed his own brand of clutch authority in Houston, burying the Rockets' comeback ambitions with a stepback three that felt less like a shot selection and more like a verdict. On the chaotic end of the ledger, Milwaukee's fourth quarter in Charlotte stood as the week's most instructive cautionary tale — Giannis missing two critical free throws, Lillard launching from Damian Lillard Distance and finding only the back iron, an entire franchise's clutch identity visibly searching for a coherent answer. The emerging subplot worth watching: Anthony Edwards and Jimmy Butler sharing a late-game stage in Miami produced the window's most competitive clutch theater, a two-minute sequence that swung three times before Edwards slammed the door — and suggested that, if the playoff brackets cooperate, those two will define several late-game conversations before the spring.",
};