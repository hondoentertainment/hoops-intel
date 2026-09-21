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
  generatedDate: "September 21, 2026",
  weekLabel: "Week of September 21–27, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.1,
      gameWinners: 7,
      clutchPlusMinus: 14.8,
      biggestMoment:
        "With 11.3 seconds left and OKC trailing Dallas by two in Game 6 of the Western Semis, SGA caught a screen at the elbow, hesitated just long enough to freeze Luka Dončić's closeout, and buried a pull-up jumper — then stole the inbound pass to seal it, all in one breath-stealing sequence.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 97,
      clutchPts: 8.9,
      clutchFgPct: 51.8,
      clutchFtPct: 88.4,
      gameWinners: 6,
      clutchPlusMinus: 13.2,
      biggestMoment:
        "Game 7 of the NBA Finals, four seconds on the clock, San Antonio down one: Wembanyama caught a lob at the rim, extended his impossibly long left arm above two defenders, and finger-rolled the ball through the net so softly the crowd barely registered it before erupting — the quietest, most thunderous shot in franchise history.",
      trend: "up",
    },
    {
      rank: 3,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 8.1,
      clutchFgPct: 49.6,
      clutchFtPct: 93.7,
      gameWinners: 5,
      clutchPlusMinus: 11.9,
      biggestMoment:
        "In the Western Conference Finals against Minnesota, Fox turned a routine inbound play into a nightmare for the Wolves — he baited Jaden McDaniels into a reach foul with 3.2 seconds left, calmly converted both free throws, then jogged back on defense with the practiced nonchalance of a man who expected nothing less of himself.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 94,
      clutchPts: 8.6,
      clutchFgPct: 48.3,
      clutchFtPct: 95.2,
      gameWinners: 5,
      clutchPlusMinus: 10.7,
      biggestMoment:
        "Game 7 of the Eastern Conference Finals, Madison Square Garden shaking on its foundations: Brunson dribbled the shot clock down to two, pump-faked Jaylen Brown into the air, absorbed the contact, and converted the and-one — 44 points, all of MSG on its feet, championship locked.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 92,
      clutchPts: 7.8,
      clutchFgPct: 47.1,
      clutchFtPct: 91.3,
      gameWinners: 5,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "Down three with 28 seconds left against Boston in a January elimination-seeding game, Mitchell hit a step-back three off the dribble to tie it, then — after Cleveland forced a turnover — drilled the pull-up mid-range winner as time expired, sending Rocket Mortgage into a frenzy and sending Cleveland's playoff seeding in an entirely different direction.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 90,
      clutchPts: 7.3,
      clutchFgPct: 45.9,
      clutchFtPct: 89.8,
      gameWinners: 4,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "Against Milwaukee in a February back-to-back, Tatum posted up Brook Lopez in the final minute, spun baseline, and kissed a fadeaway off the glass from 14 feet — the kind of shot that looks improvised but lives in ten thousand hours of private gym work — to give Boston the lead they would not relinquish.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 88,
      clutchPts: 7.6,
      clutchFgPct: 44.7,
      clutchFtPct: 85.6,
      gameWinners: 4,
      clutchPlusMinus: 6.9,
      biggestMoment:
        "In a must-win regular-season finale against New Orleans, Edwards received a handoff at the wing with 8 seconds left, gathered himself with the unhurried confidence of someone who simply does not believe in losing, and detonated a step-back three over Herbert Jones — arms spread wide before the ball even cleared the net.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 87,
      clutchPts: 7.9,
      clutchFgPct: 46.2,
      clutchFtPct: 93.1,
      gameWinners: 4,
      clutchPlusMinus: 7.3,
      biggestMoment:
        "Still doing this at 38 years old: Curry caught a dribble handoff 30 feet from the basket against Phoenix, pump-faked — nobody bit — calmly dribbled into a pull-up three, and drained it over two outstretched arms to erase a four-point deficit with 47 seconds left, because apparently physics and age still haven't gotten the memo.",
      trend: "up",
    },
    {
      rank: 9,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 86,
      clutchPts: 6.8,
      clutchFgPct: 47.5,
      clutchFtPct: 78.2,
      gameWinners: 3,
      clutchPlusMinus: 8.6,
      biggestMoment:
        "In a nationally televised duel with the Clippers, LeBron — 41 years old, operating on what everyone keeps insisting is borrowed time — drove baseline, absorbed a Derrick Jones Jr. body blow, finished with his left hand off the glass, and calmly pointed at the scorer's table as if filing a routine document.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 85,
      clutchPts: 6.4,
      clutchFgPct: 50.1,
      clutchFtPct: 72.3,
      gameWinners: 3,
      clutchPlusMinus: 5.8,
      biggestMoment:
        "With Denver clinging to a one-point lead against Utah, Jokic caught a post-entry with 14 seconds left, held the ball with his characteristic bovine patience as two Jazz defenders decided what to do, then threaded a no-look bounce pass through an impossible crease to an open Kentavious Caldwell-Pope for the clinching dunk — the assist more impressive than any bucket.",
      trend: "down",
    },
    {
      rank: 11,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 83,
      clutchPts: 7.1,
      clutchFgPct: 46.8,
      clutchFtPct: 84.7,
      gameWinners: 3,
      clutchPlusMinus: 4.2,
      biggestMoment:
        "Against the Clippers in February, Kyrie went behind the back off a screen, created two feet of daylight, and floated a teardrop over a fully extended Ivica Zubac — the kind of shot that looks physically impossible in slow motion and somehow more impossible at full speed.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 82,
      clutchPts: 6.9,
      clutchFgPct: 44.3,
      clutchFtPct: 91.8,
      gameWinners: 3,
      clutchPlusMinus: 3.7,
      biggestMoment:
        "In Phoenix's biggest regular-season win against the Clippers, Booker ran a two-man game with Kevin Durant in the final minute, drew the double-team, kicked it back to an impossible angle, got it returned, and buried a step-back three with the pull-back release that is entirely, exclusively his — the Suns bench mobbing him before he landed.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 80,
      clutchPts: 5.9,
      clutchFgPct: 43.1,
      clutchFtPct: 88.9,
      gameWinners: 3,
      clutchPlusMinus: 6.1,
      biggestMoment:
        "Against Miami in a March play-in positioning game, Haliburton pushed the pace with four seconds left, split two defenders at the three-point line, and laid it in off the glass at full speed — the play drawn up for a spot-up shooter, Haliburton having decided mid-dribble that he had a better idea, which he did.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 78,
      clutchPts: 5.4,
      clutchFgPct: 48.7,
      clutchFtPct: 76.4,
      gameWinners: 2,
      clutchPlusMinus: 5.3,
      biggestMoment:
        "In a January road win at Golden State, Sengun received a post entry with the game tied and 19 seconds left, executed an unhurried drop-step that sent Draymond Green sliding two feet left, and finished with a gentle right-hand hook over the outstretched arm of someone a full foot taller than should have been a reasonable contest.",
      trend: "up",
    },
    {
      rank: 15,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 76,
      clutchPts: 6.2,
      clutchFgPct: 42.8,
      clutchFtPct: 80.1,
      gameWinners: 2,
      clutchPlusMinus: 3.1,
      biggestMoment:
        "In a tight February win over Philadelphia, Brown caught an iso on the left wing, drove baseline with a full head of steam, and threw down a two-handed power dunk over two 76ers defenders — not the highest-percentage play, not the draw-contact play, just the most Brown play imaginable, and it worked.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Kawhi Leonard",
      team: "LAC",
      clutchRating: 74,
      clutchPts: 5.7,
      clutchFgPct: 46.4,
      clutchFtPct: 83.6,
      gameWinners: 2,
      clutchPlusMinus: 2.8,
      biggestMoment:
        "In a rare full-health appearance against Dallas, Leonard received a handoff at the top of the key with 12 seconds left, set his feet with mechanical precision, and drained a mid-range jumper so textbook it looked computer-generated — no celebration, no expression, just a slow jog back on defense, which is somehow more intimidating than anything else he could have done.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 71,
      clutchPts: 5.1,
      clutchFgPct: 41.2,
      clutchFtPct: 87.3,
      gameWinners: 2,
      clutchPlusMinus: 1.9,
      biggestMoment:
        "Paired alongside Mitchell in a double-overtime war against Indiana, Garland found daylight in the second OT on a curl off a double drag screen, hit the floater over Pascal Siakam's outstretched fingertips, and then — crucially — made both free throws on the next possession to actually close the game out, which is its own kind of clutch.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Scottie Barnes",
      team: "TOR",
      clutchRating: 67,
      clutchPts: 4.8,
      clutchFgPct: 43.9,
      clutchFtPct: 74.2,
      gameWinners: 1,
      clutchPlusMinus: 0.4,
      biggestMoment:
        "In Toronto's biggest upset of the season against Milwaukee, Barnes took a handoff in transition, had a pull-up three available, pump-faked Damian Lillard into the air instead, drew the foul, and converted both free throws — the kind of veteran-brained read from a 25-year-old that makes you realize this team will be very good in about three years.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 62,
      clutchPts: 5.3,
      clutchFgPct: 38.4,
      clutchFtPct: 90.2,
      gameWinners: 1,
      clutchPlusMinus: -2.6,
      biggestMoment:
        "Against Chicago in a mid-February game Milwaukee absolutely needed, Lillard called his own number on a step-back three from 32 feet — a shot that has won him five previous games in his career — hit nothing but air, drew the rebound, and then hit the putback free throws after a foul on the reset possession, which counts but does not feel the same.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 57,
      clutchPts: 4.4,
      clutchFgPct: 37.1,
      clutchFtPct: 68.3,
      gameWinners: 1,
      clutchPlusMinus: -4.8,
      biggestMoment:
        "Against Atlanta in a game Orlando genuinely needed, Banchero caught a post-up with 22 seconds left and the score tied, turned, rose up for a mid-range jumper he has every right to make — it rattled out, he grabbed his own miss, and the game-winning tip somehow found the bottom of the net anyway, a clutch moment that arrived more as a refund than a statement.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is a specific kind of cruelty in the way SGA operates in clutch situations — he moves slower than the moment seems to demand, sees angles that haven't opened yet, and converts at a 54.2% clip when every possession costs a franchise a night's sleep. His 9.4 clutch points per game lead all players by a meaningful margin this week, and his 96.1% free-throw rate in those moments means that even when defenses concede the drive, they are simply choosing which version of the bad outcome they prefer. Seven game-winners this season, a plus-14.8 clutch differential, and the collected demeanor of someone who finds close games mildly interesting rather than existentially threatening — SGA is the runaway Clutch King of Week 21, and it isn't particularly close.",
  },
  worstInClutch: {
    player: "Paolo Banchero",
    team: "ORL",
    description:
      "Paolo Banchero is a genuinely excellent basketball player for 43 of every 48 minutes, and then the final five arrive and the basketball gods apparently get bored and start rearranging his neurons. A 37.1% clutch field-goal percentage would be forgivable if the free-throw line offered refuge — it does not, at 68.3% — and his minus-4.8 clutch plus-minus suggests that Orlando's best outcomes in close games have occasionally involved him watching from the bench. To his enormous credit, he did manufacture one game-winner entirely through sheer rebounding persistence this week, which the framework counts the same as a Curry step-back, even if it emphatically does not feel the same. The ceiling is real, the clutch circuitry is still buffering, and there is every reason to believe the 22-year-old figures it out — but this week, the numbers are the numbers.",
  },
  weeklyHighlight:
    "The week of September 21–27 delivered the kind of clutch theater that makes the regular season matter. The defining sequence came on Thursday night in Oklahoma City, where Shai Gilgeous-Alexander authored what may be the single most efficient two-possession closing stretch of the 2026 season — a pull-up jumper over Dončić's futile closeout followed immediately by a pick-pocket steal on the ensuing inbound, an 11-second window that essentially ended a playoff series in the abstract and sent the Paycom Center crowd into a sustained, rolling roar that lasted through the final buzzer and well into the parking lot. Meanwhile, in Cleveland, the Mitchell-Garland closing partnership continued to mature into something genuinely formidable: their double-overtime dismantling of Indiana featured four separate lead changes in the final two minutes of regulation and two more in OT, with both guards hitting every pressure shot when it mattered and — critically — making their free throws, which remains the unheralded separator between teams that close and teams that collapse. In San Antonio, the Wembanyama-Fox axis was quietly ruthless as ever, producing a combined plus-25.1 in clutch minutes against what remains the league's stingiest perimeter defense. The week's low note belonged to Milwaukee, where Lillard's late-game step-back miss against Chicago extended a worrying five-game clutch slump that the coaching staff would very much like to resolve before the calendar flips. The architecture of this season's clutch hierarchy is becoming clear: OKC and San Antonio are building something at the top of the mountain, and everyone else is either climbing toward them or, in a few uncomfortable cases, still looking for the trailhead.",
};