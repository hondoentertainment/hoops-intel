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
  generatedDate: "August 10, 2026",
  weekLabel: "Week of August 10–16, 2026",
  players: [
    {
      rank: 1,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 99,
      clutchPts: 9.8,
      clutchFgPct: 54.2,
      clutchFtPct: 96.3,
      gameWinners: 7,
      clutchPlusMinus: 14.2,
      biggestMoment:
        "With 38.4 seconds left in Game 7 of the Finals and the Knicks trailing by one, Brunson received a Fox-Anunoby double-team at the elbow, pump-faked both defenders into the air, and buried a pull-up jumper over Wembanyama's outstretched 8-foot wingspan — the shot that rewrote Madison Square Garden's history forever.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 97,
      clutchPts: 9.1,
      clutchFgPct: 51.7,
      clutchFtPct: 94.8,
      gameWinners: 6,
      clutchPlusMinus: 12.6,
      biggestMoment:
        "In a March elimination-pressure game against Denver, SGA caught a Jalen Williams screen at the top of the key, hesitated just long enough to freeze Nikola Jokic on the switch, then floated a silky mid-range pull-up with 4.1 seconds on the shot clock — his 31st point of the fourth quarter alone.",
      trend: "up",
    },
    {
      rank: 3,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 96,
      clutchPts: 8.7,
      clutchFgPct: 49.3,
      clutchFtPct: 91.2,
      gameWinners: 5,
      clutchPlusMinus: 11.9,
      biggestMoment:
        "Down two with 12 seconds left against Minnesota in the Western Conference semifinals, Fox blew past Mike Conley off a high ball-screen, absorbed contact from Rudy Gobert at the rim, converted the and-one, and calmly split the free throws to give San Antonio a lead they never surrendered.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 94,
      clutchPts: 8.2,
      clutchFgPct: 47.8,
      clutchFtPct: 88.4,
      gameWinners: 4,
      clutchPlusMinus: 13.1,
      biggestMoment:
        "In the Western Conference Finals against OKC, Wembanyama caught a lob at the nail, turned, and launched a step-back three over SGA's contest from 27 feet — a shot no human being his size has any right to make — to give San Antonio a three-point lead with 1:14 remaining in Game 5.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 91,
      clutchPts: 7.9,
      clutchFgPct: 46.1,
      clutchFtPct: 87.9,
      gameWinners: 4,
      clutchPlusMinus: 8.7,
      biggestMoment:
        "In a February showdown at TD Garden, Tatum caught a weak-side skip pass with the Celtics down one, dribbled twice to shake his defender, and drained a corner three over Mikal Bridges' close-out — his sixth clutch three of the season and the one that officially buried Boston's 11-game home winning streak.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 90,
      clutchPts: 7.6,
      clutchFgPct: 50.4,
      clutchFtPct: 83.1,
      gameWinners: 3,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "At 41 years old, LeBron absorbed a Draymond Green forearm in the lane with 22 seconds left against Golden State, converted both free throws, and then drew a charge on the Warriors' ensuing possession — the kind of two-possession sequence that defies not just age but physics.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 89,
      clutchPts: 8.4,
      clutchFgPct: 43.6,
      clutchFtPct: 95.7,
      gameWinners: 4,
      clutchPlusMinus: 7.2,
      biggestMoment:
        "Against Indiana in a January overtime thriller, Lillard caught the inbound with 0.9 seconds left in regulation, took one dribble left, and launched a 34-foot heave that rattled in as the buzzer sounded — his seventh career playoff buzzer-beater equivalent adding one more regular-season chapter to an already mythological portfolio.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 88,
      clutchPts: 7.8,
      clutchFgPct: 45.2,
      clutchFtPct: 90.6,
      gameWinners: 3,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "With Cleveland needing a win to clinch the four-seed, Mitchell took four straight isolation possessions in the final three minutes against Philadelphia, converting three of them including a vicious left-handed layup through Joel Embiid's contest that sent the Rocket Mortgage FieldHouse crowd into a standing frenzy.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 87,
      clutchPts: 8.1,
      clutchFgPct: 44.7,
      clutchFtPct: 85.3,
      gameWinners: 3,
      clutchPlusMinus: 6.8,
      biggestMoment:
        "Edwards put the entire Target Center on his back in a three-minute fourth-quarter stretch against OKC, scoring nine clutch-time points including a poster dunk over Chet Holmgren that broke the rim padding and the Thunder's defensive morale simultaneously.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 86,
      clutchPts: 7.3,
      clutchFgPct: 46.8,
      clutchFtPct: 93.2,
      gameWinners: 3,
      clutchPlusMinus: 7.9,
      biggestMoment:
        "Down three with 48 seconds left against Memphis, Curry received a Draymond dribble-handoff, took two hard dribbles right, stepped back to the logo, and drained a 31-footer that sent Chase Center into its familiar ritualistic delirium — a shot the entire arena knew was good the moment it left his fingertips.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 84,
      clutchPts: 7.1,
      clutchFgPct: 44.3,
      clutchFtPct: 88.7,
      gameWinners: 3,
      clutchPlusMinus: 6.3,
      biggestMoment:
        "In Detroit's biggest win of the season — a 16-point comeback against the Bucks — Cunningham personally scored or assisted on 11 of the Pistons' final 13 points, capping it with a floater in traffic over Brook Lopez that sealed a win cementing Detroit's playoff legitimacy for the first time in years.",
      trend: "up",
    },
    {
      rank: 12,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 82,
      clutchPts: 6.4,
      clutchFgPct: 43.1,
      clutchFtPct: 91.4,
      gameWinners: 2,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "Haliburton orchestrated a 9-0 clutch-time run against Miami almost entirely through playmaking — three consecutive pick-and-roll assists in the final four minutes, each one threading a pass through a smaller window than the last, before capping the sequence himself with a pull-up three to ice the game.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 81,
      clutchPts: 7.2,
      clutchFgPct: 42.8,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Banchero backed down Scottie Barnes in the post with Orlando trailing by two, spun left, absorbed contact, scored through it, and then — after the whistle — pointed calmly at the basket while the Amway Center erupted, completing a three-point play that announced Orlando's arrival as a legitimate Eastern Conference threat.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 80,
      clutchPts: 6.8,
      clutchFgPct: 51.3,
      clutchFtPct: 79.2,
      gameWinners: 2,
      clutchPlusMinus: 6.7,
      biggestMoment:
        "With the Nuggets down one and four seconds remaining, Jokic caught a baseline pass, turned, and hit a turnaround fadeaway over two defenders that was so geometrically improbable the Denver broadcast crew went silent for a full two seconds before the call came — just another Tuesday for the most unusual great player the sport has ever produced.",
      trend: "down",
    },
    {
      rank: 15,
      player: "OG Anunoby",
      team: "NYK",
      clutchRating: 78,
      clutchPts: 4.9,
      clutchFgPct: 48.6,
      clutchFtPct: 82.1,
      gameWinners: 2,
      clutchPlusMinus: 9.8,
      biggestMoment:
        "Anunoby's biggest clutch contribution of the year was entirely defensive: a full-possession Fox lockdown in the final 90 seconds of Game 6 of the Finals — denying the ball on two consecutive possessions, forcing a shot-clock violation, and eliminating San Antonio's most dangerous weapon at the exact moment the season hung in the balance.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 76,
      clutchPts: 7.6,
      clutchFgPct: 38.4,
      clutchFtPct: 93.8,
      gameWinners: 2,
      clutchPlusMinus: 2.1,
      biggestMoment:
        "Young conjured a miracle against Charlotte — a floater from 19 feet while falling out of bounds, off the wrong foot, over two defenders — that somehow went in and gave Atlanta a one-point lead with 31 seconds left, a shot so absurd the Spectrum Center crowd gave him a genuine standing ovation out of sheer disbelief.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Mikal Bridges",
      team: "NYK",
      clutchRating: 74,
      clutchPts: 4.6,
      clutchFgPct: 47.1,
      clutchFtPct: 85.4,
      gameWinners: 1,
      clutchPlusMinus: 7.3,
      biggestMoment:
        "Bridges' most important clutch moment required zero offense: a textbook charge taken on Jaylen Brown's driving attempt with 1:03 left in Game 4 of the Eastern Conference Finals, a play that swung possession, preserved a one-point lead, and demonstrated exactly why New York valued his championship-DNA presence over raw scoring production.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Jaren Jackson Jr.",
      team: "MEM",
      clutchRating: 72,
      clutchPts: 5.1,
      clutchFgPct: 40.7,
      clutchFtPct: 80.3,
      gameWinners: 1,
      clutchPlusMinus: 4.4,
      biggestMoment:
        "Jackson Jr. swatted three shots in the final four minutes of a February win over Houston — each one more theatrical than the last — capped by a full-extension rejection of Alperen Sengun's putback attempt that sent FedExForum into the kind of noise usually reserved for Grizzlies playoff basketball.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 68,
      clutchPts: 5.3,
      clutchFgPct: 37.9,
      clutchFtPct: 86.7,
      gameWinners: 1,
      clutchPlusMinus: 1.8,
      biggestMoment:
        "Garland delivered one genuine signature clutch moment — a step-back three over Kyle Lowry with 14 seconds left against Toronto that broke a tie game and kept Cleveland's playoff seeding intact — but the inconsistency surrounding that one bright flash is precisely why he ranks here and not significantly higher.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Kyle Kuzma",
      team: "WAS",
      clutchRating: 41,
      clutchPts: 3.1,
      clutchFgPct: 28.6,
      clutchFtPct: 64.2,
      gameWinners: 0,
      clutchPlusMinus: -9.7,
      biggestMoment:
        "Kuzma's most memorable clutch sequence — if 'memorable' is the right word — came against Chicago, when he bricked a free throw, tipped the rebound to the wrong team, then immediately fouled the wrong player on the inbound, converting a winnable game into a loss in approximately seven seconds of concentrated chaos.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jalen Brunson",
    team: "NYK",
    description:
      "Jalen Brunson is the undisputed Clutch King of the 2025-26 NBA season, and the numbers aren't even the most compelling argument — it's the consistency of the environment. He doesn't just perform when the stakes are high; he performs better when the stakes are existential, posting a 54.2% clutch field-goal percentage that climbs further in elimination games. His Finals MVP was built entirely on fourth-quarter sequences where the defensive scheme, the crowd noise, and the moment's weight were all maximized, and he converted anyway. Seven game-winners across the regular season and playoffs represent the most of any player in basketball, and not a single one felt lucky — each was a specific, deliberate, designed shot that Brunson had clearly rehearsed in his mind long before the game situation demanded it.",
  },
  worstInClutch: {
    player: "Kyle Kuzma",
    team: "WAS",
    description:
      "Kyle Kuzma has had a complicated relationship with clutch basketball this season, and by 'complicated' we mean the relationship is entirely one-sided — the clutch moments want nothing to do with him. A 28.6% field-goal percentage in close-game situations is the kind of number that makes analytics departments quietly update their late-game rotation protocols, and his -9.7 clutch plus-minus suggests that Washington opponents are practically rooting for the ball to end up in his hands after the four-minute mark. To his credit, Kuzma remains optimistic, recently telling reporters that he 'loves the big moment,' which is adorable, and which the big moment has so far declined to reciprocate.",
  },
  weeklyHighlight:
    "The week of August 10th gave us the full clutch spectrum in one compact viewing window, from the sublime to the genuinely difficult to watch. Brunson's body of work continues to separate itself from the field not just statistically but stylistically — his clutch performances carry a quality of pre-ordained calm that makes 54% feel like an understatement. Shai Gilgeous-Alexander's March Denver masterpiece resurfaced in the film-room conversation this week as context for the OKC-SAS scheduling matchup taking shape, and watching those fourth-quarter possessions again only deepens the puzzle of how any defense is supposed to contain him in a series. Victor Wembanyama's logo three in the Western Conference Finals against OKC remains the most physically implausible clutch shot of the modern era — not the best, not the most important, but the one that makes you genuinely question whether the sport's biomechanical assumptions need updating. The dark-horse clutch story of the week, though, belonged to Cade Cunningham in Detroit: quiet, methodical, and increasingly impossible to dismiss as anything other than a genuine closer being forged in a market that never gives him enough credit. The Pistons' 16-point comeback win felt like a franchise-defining sequence, and Cunningham's 11-point personal closing run was the kind of performance that gets added to a city's memory. At the other end, Kyle Kuzma's seven-second meltdown against Chicago became the week's most-shared clip for all the wrong reasons — a compressed masterclass in how quickly a winnable game can become a teaching tape.",
};