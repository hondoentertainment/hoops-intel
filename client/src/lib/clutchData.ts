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
  generatedDate: "September 28, 2026",
  weekLabel: "Week of September 28–4, 2026",
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
        "With 11 seconds left and OKC trailing Dallas by one, SGA crossed over Luka Doncic at the top of the key, absorbed contact at the rim, and converted the and-one free throw without so much as blinking — his expression unchanged, as though the math had always been settled.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 97,
      clutchPts: 9.1,
      clutchFgPct: 51.8,
      clutchFtPct: 94.7,
      gameWinners: 6,
      clutchPlusMinus: 12.9,
      biggestMoment:
        "In Game 7 of the Finals, Brunson caught a screen at the elbow with 4.2 seconds on the clock, pump-faked a closing defender into the air, and drilled a pull-up mid-range jumper that gave New York its first championship in four decades — the ball kissing glass so softly it barely disturbed the net.",
      trend: "stable",
    },
    {
      rank: 3,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 96,
      clutchPts: 8.4,
      clutchFgPct: 49.6,
      clutchFtPct: 88.3,
      gameWinners: 5,
      clutchPlusMinus: 13.7,
      biggestMoment:
        "Trailing Memphis by three with 38 seconds remaining, Wembanyama caught a post entry, spun baseline, and launched a turnaround fadeaway over a doubled coverage — then swatted Ja Morant's layup attempt on the ensuing possession to seal a one-point San Antonio victory that made the arena go silent before it erupted.",
      trend: "up",
    },
    {
      rank: 4,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 8.7,
      clutchFgPct: 50.3,
      clutchFtPct: 91.2,
      gameWinners: 5,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "Fox received a full-court pass with two seconds left against Golden State, took one dribble at half-court, and released a pull-up from 28 feet that banked in off the glass — a shot so audacious and accurate that even the Warriors' bench stood and applauded before the disbelief set in.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 94,
      clutchPts: 8.9,
      clutchFgPct: 52.1,
      clutchFtPct: 90.5,
      gameWinners: 4,
      clutchPlusMinus: 10.4,
      biggestMoment:
        "Kyrie isolated on the left wing in overtime against Boston, executed a between-the-legs hesitation that froze Jaylen Brown completely, and buried a step-back three-pointer with 6.7 seconds remaining — then turned upcourt without watching it fall, because he already knew.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 92,
      clutchPts: 8.2,
      clutchFgPct: 47.9,
      clutchFtPct: 86.4,
      gameWinners: 4,
      clutchPlusMinus: 9.6,
      biggestMoment:
        "Edwards caught a baseline lob with Minnesota down two, power-dunked through two defenders to tie the game, and then on the next defensive possession ripped a steal from Kevin Durant and converted the layup the other way — a 16-second, four-point performance that Minnesota fans will describe for years.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 91,
      clutchPts: 8.6,
      clutchFgPct: 46.8,
      clutchFtPct: 93.2,
      gameWinners: 4,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "With 14 seconds remaining in a tied Western Conference play-in game, Curry received a handoff near the logo, dribbled once left, and launched a 31-foot pull-up three over an outstretched contest — his 47th career game-winner, dropping with the nonchalance of a man who has never once doubted the trajectory of a basketball.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 90,
      clutchPts: 8.0,
      clutchFgPct: 48.5,
      clutchFtPct: 89.7,
      gameWinners: 3,
      clutchPlusMinus: 9.1,
      biggestMoment:
        "Mitchell took a Mitchell-designed isolation against Philadelphia's zone in the final minute, drove left, reversed the ball behind his back mid-air, and finished with his off hand for the go-ahead layup — a play so instinctive that Cleveland's coaches reviewed the film three times before concluding it was simply improvisation executed to perfection.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 88,
      clutchPts: 7.6,
      clutchFgPct: 44.3,
      clutchFtPct: 87.1,
      gameWinners: 3,
      clutchPlusMinus: 7.8,
      biggestMoment:
        "Tatum posted up on the right block in the dying seconds against Miami, used a shoulder fake to create separation, and elevated over Jimmy Butler for a mid-post jumper that tied the game and sent it to overtime — the kind of quiet, workmanlike clutch execution that rarely makes highlight reels but consistently makes postgame box scores.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 87,
      clutchPts: 6.9,
      clutchFgPct: 46.2,
      clutchFtPct: 92.4,
      gameWinners: 3,
      clutchPlusMinus: 8.3,
      biggestMoment:
        "Haliburton orchestrated a flawless two-minute possession against Milwaukee in the Eastern Conference semifinals, finding four different teammates before rejecting every option and threading a no-look bounce pass to Pascal Siakam cutting baseline — an assist so spatially precise that it drew a standing ovation from both benches.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 86,
      clutchPts: 8.1,
      clutchFgPct: 43.7,
      clutchFtPct: 91.8,
      gameWinners: 3,
      clutchPlusMinus: 6.4,
      biggestMoment:
        "Lillard buried a pull-up three from the logo — 29 feet, contested, with 2.1 seconds on the shot clock — to give Milwaukee a two-point lead against Indiana that held through the final buzzer, reigniting conversations about whether Dame's clutch gene is actually hardwired differently than everyone else's.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 85,
      clutchPts: 7.3,
      clutchFgPct: 47.1,
      clutchFtPct: 78.9,
      gameWinners: 2,
      clutchPlusMinus: 7.2,
      biggestMoment:
        "At 41 years old, LeBron posted up Kawhi Leonard in the final 90 seconds, drop-stepped into the paint, and drew a four-point play that completed a seven-point Laker comeback — after which he jogged back on defense, pointed at the crowd, and looked, somehow, like he had energy left in reserve.",
      trend: "down",
    },
    {
      rank: 13,
      player: "Kawhi Leonard",
      team: "LAC",
      clutchRating: 84,
      clutchPts: 7.8,
      clutchFgPct: 49.0,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 6.8,
      biggestMoment:
        "Kawhi, returned to form following load management, dropped 11 of his 14 clutch-time points in a single fourth quarter against Phoenix — including a double-clutch mid-range banker at the shot clock buzzer that audibly confounded the Suns' entire bench and coaching staff simultaneously.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Jimmy Butler",
      team: "MIA",
      clutchRating: 83,
      clutchPts: 7.5,
      clutchFgPct: 45.5,
      clutchFtPct: 95.3,
      gameWinners: 2,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Butler absorbed a brutal double-team in the post with 18 seconds left against Atlanta, kept his dribble alive through contact, spun into an and-one finish, and stepped to the free throw line with a 97.3% career clutch FT rate — converting without ceremony while the Hawks' head coach shook his head slowly and mouthed words no microphone captured.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 81,
      clutchPts: 6.4,
      clutchFgPct: 50.8,
      clutchFtPct: 79.2,
      gameWinners: 2,
      clutchPlusMinus: 5.3,
      biggestMoment:
        "Sengun sealed the game against Memphis in a clutch-time post battle that produced a remarkable sequence: back-to-back turnaround hooks from each side of the lane, followed by a defensive rebound and outlet pass that launched Houston's fast break seal on a seven-point night in the final five minutes.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 78,
      clutchPts: 6.8,
      clutchFgPct: 43.1,
      clutchFtPct: 82.4,
      gameWinners: 2,
      clutchPlusMinus: 4.7,
      biggestMoment:
        "Banchero isolated on the wing against Toronto's rookie closer, pump-faked him off his feet twice in the same possession before driving baseline for a left-handed reverse that gave Orlando a lead they never relinquished — a play that crystallized his emergence as a genuine late-game threat rather than merely a statistical accumulator.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 76,
      clutchPts: 5.9,
      clutchFgPct: 48.3,
      clutchFtPct: 80.1,
      gameWinners: 1,
      clutchPlusMinus: 4.2,
      biggestMoment:
        "Towns dropped a three-pointer from the corner with 44 seconds left against Cleveland in the Eastern Conference semifinals — his first postseason game-winning contribution from distance — then immediately sprinted back into a defensive stance, a detail that teammates later called the moment they knew KAT had fully absorbed the championship culture.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 72,
      clutchPts: 7.2,
      clutchFgPct: 38.4,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Young orchestrated a brilliant four-pass sequence in a tie game against Charlotte, found De'Andre Hunter cutting baseline for an open dunk, then immediately — on the next possession — turned the ball over off a telegraphed lob that Hornets forward Miles Bridges intercepted and converted for a fast-break layup at the other end, encapsulating the Trae Young clutch experience in 14 seconds.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 69,
      clutchPts: 6.1,
      clutchFgPct: 41.2,
      clutchFtPct: 76.4,
      gameWinners: 1,
      clutchPlusMinus: -3.8,
      biggestMoment:
        "Jokic produced one of the season's most statistically complete clutch-time performances against Utah — seven points, two assists, one rebound in the final five minutes — while somehow losing the game by six, a result that defied conventional basketball arithmetic and required two separate league offices to verify the final box score.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Zach LaVine",
      team: "SAC",
      clutchRating: 61,
      clutchPts: 5.4,
      clutchFgPct: 34.6,
      clutchFtPct: 81.2,
      gameWinners: 0,
      clutchPlusMinus: -6.4,
      biggestMoment:
        "LaVine's most memorable clutch sequence this week came against Portland, where he drained back-to-back mid-range jumpers to pull Sacramento within two — and then, with 22 seconds left and the ball in his hands, attempted a crossover dribble into a double-team, lost the handle entirely, and watched the Blazers' Scoot Henderson casually dribble out the clock in the opposite direction.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is no more reliable closer in professional basketball right now than Shai Gilgeous-Alexander, and the numbers from this week make that case with uncomfortable authority. A 54.2% clutch field goal percentage, a near-perfect 96.1% from the free throw line, and seven game-winners across a season that has consistently placed OKC in positions where the final possession means everything — SGA has not merely performed in these moments, he has curated them. What separates him from every other name on this list is the manner of his execution: unhurried, asymmetric, and entirely devoid of the adrenaline-induced decision-making that costs other stars in identical situations. Oklahoma City does not draw up plays for the final four seconds so much as it clears the floor and lets the league's most dangerous finisher operate inside his own private geometry.",
  },
  worstInClutch: {
    player: "Zach LaVine",
    team: "SAC",
    description:
      "Look, nobody wants to be the guy who statistically makes the game interesting in the fourth quarter only to personally return the favor to the opposing team with interest, but here we are with Zach LaVine holding a -6.4 clutch plus-minus and zero game-winners in what is, generously, an athletic marvel of a body attached to some of the most expensive late-game decision-making in the Western Conference. LaVine can score in the clutch — that 5.4 points per game is real — the problem is that the basketball gods appear to be charging a premium for every bucket, collecting the debt in the form of turnovers, contested pull-ups at the worst possible moments, and one genuinely spectacular dribble-off-the-foot that Sacramento's training staff has mercifully declined to comment on publicly. Sacramento fans adore the man, and they should — it is simply that adoration does not always translate to comfort when the shot clock reads seven and Zach has the ball near the logo with a defender in his vicinity.",
  },
  weeklyHighlight:
    "If this week in clutch basketball had a thesis, it was this: the separation between the league's elite closers and everyone else is not measured in talent anymore — it is measured in temperature. Shai Gilgeous-Alexander and Jalen Brunson exist in a climate that the remaining 28 teams cannot seem to replicate, their late-game possessions operating under different atmospheric conditions than the rest of the sport. Brunson's championship-validated composure — forged in the crucible of a Game 7 that will appear in documentary footage for the next three decades — produced yet another fourth-quarter dissection this week, this time against Milwaukee's switch-heavy defense, where he manufactured six points in the final 90 seconds through sheer positional intelligence and the most boring, effective footwork in the Eastern Conference. Meanwhile, Victor Wembanyama's week introduced a new wrinkle to the clutch conversation entirely: he is now defending his way into victories as often as he is scoring them, a two-way clutch architecture that no 7-foot-3 human being has ever previously constructed. His block on Ja Morant with 12 seconds remaining against Memphis may have been the defensive play of the season, and it arrived in a moment when the arena was so loud that Morant later admitted he couldn't hear the play call from the bench. The week's most polarizing narrative belonged to Nikola Jokic, whose Denver Nuggets continue processing what the framework has gently described as a new permanent organizational architecture — a reality that is showing up in clutch-time decision-making, where Jokic's normally encyclopedic read of defensive positioning appears fractionally slower, his team's rhythm fractionally off. One missed free throw. One ill-timed post touch. The margins are razor-thin, but in clutch situations, razor-thin is everything. The week ended with LaVine's dribble-out-of-bounds against Portland lodging itself into the collective memory of Sacramento's fanbase — not as a condemnation of a player, but as a reminder that clutch performance is as much about the moment choosing you as it is about you choosing the moment.",
};