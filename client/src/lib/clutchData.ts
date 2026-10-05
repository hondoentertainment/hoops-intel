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
  generatedDate: "October 5, 2026",
  weekLabel: "Week of October 5–11, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.1,
      gameWinners: 3,
      clutchPlusMinus: 12.8,
      biggestMoment:
        "With 3.1 seconds left and OKC trailing by one, SGA caught an inbound pass near the arc, took one dribble left, and floated a mid-range pull-up over two closing defenders that kissed the backboard and fell through — the kind of shot that only makes sense after the fact because he was the one taking it.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 96,
      clutchPts: 8.9,
      clutchFgPct: 51.7,
      clutchFtPct: 95.5,
      gameWinners: 2,
      clutchPlusMinus: 10.3,
      biggestMoment:
        "In a preseason tuneup at Philadelphia that carried all the tension of a playoff audition, Brunson orchestrated a nine-second, two-possession possession in the final minute — drawing a foul on the first, burying both free throws, then immediately picking Maxey's pocket on the other end to seal a four-point swing that nobody in the building saw coming.",
      trend: "stable",
    },
    {
      rank: 3,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 7.8,
      clutchFgPct: 49.3,
      clutchFtPct: 88.4,
      gameWinners: 2,
      clutchPlusMinus: 11.5,
      biggestMoment:
        "Trailing by two with forty seconds left in camp's first live scrimmage, Wembanyama rose from the elbow, pump-faked a lunging defender into orbit, and drained a seventeen-footer with a hand draped across his chin — then turned around and blocked the next possession's shot so cleanly the ball landed in his own hands.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Jimmy Butler",
      team: "MIA",
      clutchRating: 94,
      clutchPts: 8.2,
      clutchFgPct: 48.9,
      clutchFtPct: 94.7,
      gameWinners: 2,
      clutchPlusMinus: 9.6,
      biggestMoment:
        "In the final three minutes of Miami's blowout opener against Toronto, Butler — up twenty-two and needing nothing — still attacked the rim twice, drew fouls both times, and converted all four free throws as if the scoreboard read zero and Game Seven was on the line. That is simply his factory setting.",
      trend: "up",
    },
    {
      rank: 5,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 93,
      clutchPts: 7.6,
      clutchFgPct: 47.8,
      clutchFtPct: 91.2,
      gameWinners: 2,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "Fox turned a dead-ball inbound set into a four-second sprint to the rim that left two defenders frozen at half-court — he caught, gathered, and finished left-handed over a rotating big before the defense could form a single coherent thought, giving SAS a lead they never surrendered.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 91,
      clutchPts: 7.1,
      clutchFgPct: 46.4,
      clutchFtPct: 89.3,
      gameWinners: 1,
      clutchPlusMinus: 7.4,
      biggestMoment:
        "Against Milwaukee in Minnesota's first preseason action, Edwards isolated on the wing with ninety seconds left, crossed Khris Middleton into a stumble, and rose for a step-back three that rattled in with authority — then cupped his hand to his ear at the Milwaukee crowd before the ball had even cleared the net.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 89,
      clutchPts: 6.8,
      clutchFgPct: 52.1,
      clutchFtPct: 78.6,
      gameWinners: 1,
      clutchPlusMinus: 6.2,
      biggestMoment:
        "Sengun's post-up in the final two minutes was textbook brutality — three shoulder fakes that sent the defender's center of gravity somewhere near the concession stand, then a short hook with his off hand that banked in softly and put Houston up by three for good.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 87,
      clutchPts: 6.4,
      clutchFgPct: 44.8,
      clutchFtPct: 93.1,
      gameWinners: 1,
      clutchPlusMinus: 7.8,
      biggestMoment:
        "Haliburton engineered a perfect dribble-handoff misdirection in the closing minute that got the entire defense to rotate left, then fired a skip pass back right to a wide-open Nesmith for a corner three — the assist was the bucket, and Indiana's bench erupted like it was May.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 86,
      clutchPts: 7.2,
      clutchFgPct: 45.5,
      clutchFtPct: 90.8,
      gameWinners: 1,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Mitchell's pull-up jumper off a DHO with the shot clock dying and a two-point lead on the line was the kind of impossible-geometry shot that only makes a roster's film session because it went in — straight-line angle, contested release, complete conviction, perfect result.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 84,
      clutchPts: 6.9,
      clutchFgPct: 43.7,
      clutchFtPct: 87.2,
      gameWinners: 1,
      clutchPlusMinus: 4.7,
      biggestMoment:
        "Tatum posted up on the block with twenty-eight seconds left, spun baseline against a single defender, and dropped in a floater that required so much body control mid-air that three Celtics assistants on the bench visibly winced before it went through — it was that kind of shot.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 82,
      clutchPts: 6.1,
      clutchFgPct: 46.2,
      clutchFtPct: 76.4,
      gameWinners: 1,
      clutchPlusMinus: 5.1,
      biggestMoment:
        "In a preseason setting that LeBron clearly treated as a live laboratory, he switched onto a guard forty feet from the basket, read the crossover before it started, poked the ball loose, and pushed the pace himself for an and-one finish that ended the sequence and effectively ended the game.",
      trend: "down",
    },
    {
      rank: 12,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 81,
      clutchPts: 7.4,
      clutchFgPct: 49.1,
      clutchFtPct: 84.6,
      gameWinners: 0,
      clutchPlusMinus: 3.3,
      biggestMoment:
        "Kyrie's between-the-legs crossover into a spinning layup with four seconds on the shot clock looked like a move invented in a fever dream and executed in a boardroom — unhurried, precise, and somehow both over-complicated and exactly correct at the same time.",
      trend: "down",
    },
    {
      rank: 13,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 80,
      clutchPts: 6.7,
      clutchFgPct: 44.1,
      clutchFtPct: 91.5,
      gameWinners: 1,
      clutchPlusMinus: 2.8,
      biggestMoment:
        "Booker's corner three with 1.4 seconds on the clock — off a cross-court skip pass he'd been telegraphing all half before finally hitting it when the defense finally cheated off — was a reminder that patience is its own form of deception, and Booker has been patient for years.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 79,
      clutchPts: 6.3,
      clutchFgPct: 41.8,
      clutchFtPct: 94.2,
      gameWinners: 0,
      clutchPlusMinus: 2.1,
      biggestMoment:
        "Curry drilled a thirty-one-footer off a transition flare screen with two seconds left on the shot clock — his defender had barely cleared the screen when the ball left his hands, and by the time the shot landed, the arena had already decided it was going in.",
      trend: "down",
    },
    {
      rank: 15,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 77,
      clutchPts: 5.8,
      clutchFgPct: 48.6,
      clutchFtPct: 72.3,
      gameWinners: 0,
      clutchPlusMinus: -1.4,
      biggestMoment:
        "Jokic's passing in Denver's final-minute possessions against Utah remained at its customary orchestral level — a no-look dump-off to a cutter that split two defenders and produced the game's prettiest basket — but the team-level result around him crumbled anyway, which is becoming Denver's signature contradiction.",
      trend: "down",
    },
    {
      rank: 16,
      player: "Scottie Barnes",
      team: "TOR",
      clutchRating: 74,
      clutchPts: 5.4,
      clutchFgPct: 40.2,
      clutchFtPct: 79.8,
      gameWinners: 0,
      clutchPlusMinus: -2.7,
      biggestMoment:
        "Barnes converted a tough and-one finish in the fourth quarter against Miami that temporarily tightened the game — attacking the baseline, absorbing contact from Butler himself, and converting the free throw — before the blowout resumed its scheduled programming around him.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 72,
      clutchPts: 5.9,
      clutchFgPct: 39.4,
      clutchFtPct: 77.1,
      gameWinners: 0,
      clutchPlusMinus: -1.9,
      biggestMoment:
        "Banchero's post-up sequence in the final minute showed genuine power-forward savagery — seal, catch, spin, finish — but a subsequent turnover on Orlando's next possession turned the moment from highlight to footnote before the broadcast could fully celebrate it.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Jaren Jackson Jr.",
      team: "MEM",
      clutchRating: 69,
      clutchPts: 4.8,
      clutchFgPct: 38.7,
      clutchFtPct: 81.4,
      gameWinners: 0,
      clutchPlusMinus: -3.1,
      biggestMoment:
        "JJJ's shot-block in the final minute — a full-extension swat on a drive that looked completely unreachable until the exact moment it was not — was the kind of defensive intervention that wins championships in theory; Memphis then missed the next two shots and lost by one, which is a different theory entirely.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 63,
      clutchPts: 5.1,
      clutchFgPct: 34.6,
      clutchFtPct: 88.9,
      gameWinners: 0,
      clutchPlusMinus: -4.8,
      biggestMoment:
        "Young drew a foul on a deep three-point attempt with fifty seconds left — a signature move that referees have been conditioned to reward — converted all three free throws, and then watched Atlanta's defense allow an immediate seven-point swing that swallowed the moment whole.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Russell Westbrook",
      team: "LAC",
      clutchRating: 54,
      clutchPts: 3.6,
      clutchFgPct: 29.8,
      clutchFtPct: 71.2,
      gameWinners: 0,
      clutchPlusMinus: -7.3,
      biggestMoment:
        "Westbrook's clutch-time isolation dribble lasted a breathtaking fourteen seconds — a series of crossovers, hesitations, and reconsiderations that culminated in a mid-range pull-up that clanged off the back iron so hard it bounced to half-court, giving the opponent excellent field position and LA's bench a collective, slow-blink moment of silence.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is a version of clutch performance that looks athletic — explosive, violent, spectacular — and then there is SGA's version, which looks inevitable. In the final five minutes of close games this week, Gilgeous-Alexander posted a 54.2% field goal percentage, drew fouls at will, and converted three game-winners with the emotional register of someone completing a crossword puzzle. The difference between SGA and every other player on this list is that he never appears to be trying harder in big moments; he simply appears to be operating at the same precise frequency while everyone else's frequency degrades. His 96.1% clutch free throw rate is not an accident — it is an argument, and he makes it calmly, every single time.",
  },
  worstInClutch: {
    player: "Russell Westbrook",
    team: "LAC",
    description:
      "Look, you have to respect the confidence. Most human beings, after going 3-for-14 in clutch situations over the course of a week, would at some point consider passing the basketball. Russell Westbrook is not most human beings. His 29.8% clutch field goal percentage and -7.3 plus-minus represent not a slump but a philosophy — a deeply held, aesthetically committed philosophy that the right shot is always the next one, and the next one is always his. The Clippers' late-game possessions this week had the structural integrity of a folding chair at a county fair, and somewhere in the middle of all of it, Westbrook was dribbling for fourteen seconds and emerging optimistic. We salute the optimism even as we mourn the outcomes.",
  },
  weeklyHighlight:
    "The opening week of the 2026–27 season's preseason slate delivered clutch drama that felt several months premature, and the basketball was better for it. SGA set the immediate standard on Sunday night with a backboard-kissing pull-up that will live on highlight timelines for the rest of the month — the kind of shot that resets the conversation about who owns Oklahoma City's fourth-quarter real estate, which is a conversation that has had only one answer for three years running. Jimmy Butler, playing Miami's 24-point blowout opener against Toronto as if the margin were two instead of twenty-two, reminded everyone that he is physically incapable of distinguishing between a preseason game and a playoff elimination — a condition that is equal parts exhausting and indispensable. Jalen Brunson's nine-second, two-possession closing sequence in Philadelphia was the week's most cerebral clutch moment, a reminder that clutch performance is as much about sequencing and attention as it is about individual shot-making. And hovering over all of it was Nikola Jokic — brilliant as always in the closing minutes, passing at orchestral frequencies, and somehow still on the wrong end of the scoreboard against Utah, which is Denver's particular tragedy and the week's most persistent narrative thread. The clutch-time leaderboard has reset; the competition to occupy its summit has, very clearly, not.",
};