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
  generatedDate: "November 23, 2026",
  weekLabel: "Week of November 23–29, 2026",
  players: [
    {
      rank: 1,
      player: "Jamal Murray",
      team: "DEN",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 92.3,
      gameWinners: 3,
      clutchPlusMinus: 14.6,
      biggestMoment:
        "With Denver trailing by two and 38 seconds left in overtime at Chicago, Murray rose over Alex Caruso on the left wing, buried a step-back three that silenced the United Center crowd, and then sealed the win at the charity stripe with two ice-cold free throws — his fifth clutch bucket of the fourth quarter alone.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 96,
      clutchPts: 8.1,
      clutchFgPct: 58.7,
      clutchFtPct: 88.1,
      gameWinners: 2,
      clutchPlusMinus: 12.3,
      biggestMoment:
        "With 90 seconds remaining in overtime and Denver clinging to a one-point lead, Jokic caught a lob entry, absorbed contact from two Chicago defenders, finished the and-one layup, and then on the ensuing possession stripped Giddey in the post and pushed the ball coast-to-coast himself — a 60-foot sequence that encapsulated why he remains the most clutch big man alive.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Cooper Flagg",
      team: "DAL",
      clutchRating: 94,
      clutchPts: 8.7,
      clutchFgPct: 51.9,
      clutchFtPct: 90.0,
      gameWinners: 2,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "Down one with 14 seconds left at Utah and Mykhailiuk's ten-three masterpiece threatening to become the upset of the year, Flagg took the inbound on the left side, drove baseline, drew the foul on a scrambling Jazz defender, and calmly converted both free throws to put Dallas ahead for good — a 19-year-old delivering in a moment most veterans would want no part of.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Bam Adebayo",
      team: "MIA",
      clutchRating: 93,
      clutchPts: 7.2,
      clutchFgPct: 60.0,
      clutchFtPct: 85.7,
      gameWinners: 1,
      clutchPlusMinus: 10.9,
      biggestMoment:
        "With Oklahoma City cutting Miami's lead to three with two minutes left, Adebayo caught a high-low feed in the paint, pump-faked Chet Holmgren into the air, absorbed the foul, made both free throws, and on the defensive end immediately rejected Shai Gilgeous-Alexander's drive at the rim — a 90-second stretch that ended the Thunder's last real threat and sent Kaseya Center into a frenzy.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 89,
      clutchPts: 7.8,
      clutchFgPct: 44.1,
      clutchFtPct: 83.3,
      gameWinners: 1,
      clutchPlusMinus: 6.2,
      biggestMoment:
        "Tatum kept Boston alive in a brutal final three minutes in San Francisco by draining a turnaround mid-range jumper over Andrew Wiggins with 90 seconds left to tie the game, then retrieving his own offensive rebound on the next possession and drawing a foul — only for the script to turn cruel when his pull-up three with four seconds remaining clanged off the back iron and Golden State escaped.",
      trend: "down",
    },
    {
      rank: 6,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 87,
      clutchPts: 7.5,
      clutchFgPct: 52.4,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "With Indiana closing within four at Madison Square Garden in the fourth quarter, Towns caught a pick-and-pop at the elbow, squared his shoulders with the precision of a point guard, and splashed a three over Myles Turner to push the lead back to seven — then immediately switched onto Bennedict Mathurin on the defensive end and forced a turnover that buried the Pacers for good.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Dyson Daniels",
      team: "ATL",
      clutchRating: 85,
      clutchPts: 3.1,
      clutchFgPct: 38.5,
      clutchFtPct: 78.6,
      gameWinners: 0,
      clutchPlusMinus: 13.2,
      biggestMoment:
        "With Detroit threatening a comeback and down five with 90 seconds left, Daniels read a crosscourt skip pass in the lane, picked off Killian Hayes's delivery like a safety jumping a route, and raced the other way for a breakaway layup that crushed the Pistons' momentum — his fifth steal of the night and the defensive backbreaker that made Atlanta's lead insurmountable.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 92,
      clutchPts: 8.9,
      clutchFgPct: 48.3,
      clutchFtPct: 95.0,
      gameWinners: 2,
      clutchPlusMinus: 8.7,
      biggestMoment:
        "With Boston pressing and the game tied at 109 with 22 seconds on the clock at Chase Center, Curry used a Draymond Green screen to get a sliver of daylight at the top of the arc, caught, shot, and released in one fluid motion before Tatum could recover — the three dropped through the net with 11 seconds left and Golden State's bench erupted before the ball even hit the floor.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Luka Doncic",
      team: "LAL",
      clutchRating: 91,
      clutchPts: 9.2,
      clutchFgPct: 46.7,
      clutchFtPct: 79.4,
      gameWinners: 2,
      clutchPlusMinus: 7.1,
      biggestMoment:
        "Trailing Sacramento by three with 40 seconds left in Los Angeles, Doncic size-matched onto Domantas Sabonis in the post, reached in for a strip, corralled the loose ball, pushed up court, and hit a retreating step-back three from 27 feet that tied the game — the kind of play that only exists in highlight reels and Doncic's repertoire.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 90,
      clutchPts: 8.3,
      clutchFgPct: 47.1,
      clutchFtPct: 91.7,
      gameWinners: 1,
      clutchPlusMinus: 5.8,
      biggestMoment:
        "On a back-to-back with Oklahoma City's season series against Miami on the line, SGA took over the final three minutes in a losing effort — scoring seven of the Thunder's last nine points including a silky floater over Adebayo with 45 seconds left that cut the deficit to one — before Bam made sure the script ended differently.",
      trend: "down",
    },
    {
      rank: 11,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 88,
      clutchPts: 7.9,
      clutchFgPct: 50.0,
      clutchFtPct: 86.4,
      gameWinners: 1,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "Mitchell turned Cleveland's overtime scare against Toronto into a footnote by isolating on Immanuel Quickley with the game tied in overtime, attacking the left side, drawing two defenders before kicking to Evan Mobley for the go-ahead dunk — the kind of clutch pass-out that reminded everyone Mitchell has become as dangerous as a playmaker as he is as a scorer.",
      trend: "up",
    },
    {
      rank: 12,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 86,
      clutchPts: 8.6,
      clutchFgPct: 43.8,
      clutchFtPct: 80.0,
      gameWinners: 1,
      clutchPlusMinus: 4.3,
      biggestMoment:
        "With Memphis closing fast in the fourth quarter at Target Center, Edwards caught an isolation on the right wing, drove baseline with that freight-train first step, rose over the help defense, and threw down a one-handed dunk over a 7-footer that pushed Minnesota's lead to five and visibly broke the Grizzlies' spirit with 90 seconds to play.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 84,
      clutchPts: 7.3,
      clutchFgPct: 55.6,
      clutchFtPct: 68.2,
      gameWinners: 1,
      clutchPlusMinus: 6.5,
      biggestMoment:
        "Giannis bulldozed through two Philadelphia defenders in the closing minute at Fiserv Forum, converted the and-one layup with his left hand while absorbing a Joel Embiid elbow, and stared down the Wells Fargo crowd with the nonchalance of a man who has simply decided the other team will not win — Milwaukee held on by one.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Josh Giddey",
      team: "CHI",
      clutchRating: 82,
      clutchPts: 5.4,
      clutchFgPct: 40.0,
      clutchFtPct: 72.7,
      gameWinners: 0,
      clutchPlusMinus: -3.1,
      biggestMoment:
        "Despite the heartbreaking overtime loss to Denver, Giddey engineered the Bulls' entire fourth-quarter comeback from nine down with a 22-assist night — his best clutch sequence came when he found Buddy Hield on a no-look lob out of a broken play with 2:14 left to tie the game, a pass so disguised that even Hield looked surprised the ball arrived.",
      trend: "up",
    },
    {
      rank: 15,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 81,
      clutchPts: 5.8,
      clutchFgPct: 57.1,
      clutchFtPct: 75.0,
      gameWinners: 1,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "The go-ahead dunk off Mitchell's kick-out pass in overtime against Toronto was the defining image of Cleveland's week — Mobley caught the ball in stride at the elbows, took one power dribble, and finished with authority over RJ Barrett, the kind of moment that signals a young big man crossing the threshold from promising to genuinely dangerous in big spots.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Buddy Hield",
      team: "CHI",
      clutchRating: 79,
      clutchPts: 6.9,
      clutchFgPct: 46.2,
      clutchFtPct: 82.4,
      gameWinners: 0,
      clutchPlusMinus: -1.8,
      biggestMoment:
        "Hield's seventh three-pointer — a catch-and-release from the right corner off Giddey's impossible no-look lob with 2:14 left in the fourth — tied Denver at 118 and briefly made the United Center feel like a playoff building, the kind of shot Hield has been making in clutch moments for a decade and still somehow looks effortless.",
      trend: "up",
    },
    {
      rank: 17,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 83,
      clutchPts: 6.1,
      clutchFgPct: 48.0,
      clutchFtPct: 73.3,
      gameWinners: 1,
      clutchPlusMinus: 5.4,
      biggestMoment:
        "At 41 years old and still doing this — LeBron sealed a one-point Lakers win over Sacramento by stripping De'Aaron Fox on a drive with six seconds left, then walking to the free throw line with the building shaking and draining both like he was shooting in an empty practice gym.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "De'Aaron Fox",
      team: "SAC",
      clutchRating: 76,
      clutchPts: 7.4,
      clutchFgPct: 42.9,
      clutchFtPct: 77.8,
      gameWinners: 0,
      clutchPlusMinus: -4.7,
      biggestMoment:
        "Fox nearly willed Sacramento to a road win in Los Angeles — his pull-up jumper from 18 feet with 30 seconds left put the Kings ahead by one before Doncic's tying three turned the building, and Fox's subsequent drive with the game on the line ended in the LeBron strip that remains the week's most agonizing near-miss.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 74,
      clutchPts: 5.9,
      clutchFgPct: 38.5,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: -6.2,
      biggestMoment:
        "Haliburton orchestrated Indiana's fourth-quarter push at Madison Square Garden with three consecutive clutch assists — the last a behind-the-back feed to Pascal Siakam that cut the deficit to two with 90 seconds remaining — but Towns's immediate response three erased every inch of the Pacers' momentum and ended the comeback attempt before it could fully form.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Desmond Bane",
      team: "MEM",
      clutchRating: 71,
      clutchPts: 5.2,
      clutchFgPct: 36.4,
      clutchFtPct: 80.0,
      gameWinners: 0,
      clutchPlusMinus: -5.9,
      biggestMoment:
        "Bane had Memphis within two of Minnesota in the final minute and his corner three attempt — wide open, feet set, the exact shot he was born to make — rattled hard off the back of the rim and into Edwards's waiting hands, triggering the fast break that ended the game and left Bane standing at halfcourt staring at the ball like it owed him an apology.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jamal Murray",
    team: "DEN",
    description:
      "Jamal Murray has quietly become the most reliable closer in the NBA not named Steph Curry, and this week he made the argument louder than ever. His overtime performance at Chicago — 45 points, six threes, and the two free throws that sealed Denver's escape — was the clearest demonstration yet that Murray does not merely survive pressure, he processes it differently than everyone else on the floor. When the United Center was at its loudest and the Bulls had all the momentum of a 22-assist performance behind them, Murray simply took the ball, made the shot, and walked back on defense like he'd been expecting that exact moment all along. At 3-for-3 in game-winning opportunities this season and leading all players with a clutch plus-minus of +14.6, he is the unambiguous Clutch King of November.",
  },
  worstInClutch: {
    player: "Desmond Bane",
    team: "MEM",
    description:
      "Desmond Bane is, by every reasonable measure, one of the best three-point shooters on earth — which makes his clutch shooting line of 36.4% and a -5.9 plus-minus this week feel like a glitch in the simulation rather than a data point. The man drills threes in warmups from distances that would concern a golf cart, and yet somehow the basketball gods have decided that the moment matters most, Desmond's ball will find every millimeter of rim except the inside of the net. The Memphis bench has taken to watching his late-game attempts through slightly parted fingers, the way you watch a horror movie you've seen before — you know what's coming, you're just hoping this time the ending is different. It is not. It has not been. But hey — 36.4% is still better than most of us shooting in a driveway with no defense, so let's keep some perspective here.",
  },
  weeklyHighlight:
    "If the week of November 23rd had a theme, it was this: the clutch doesn't care about your regular-season stats, your salary, or your narrative arc — it only asks what you do when the building is loud and the margin is thin. Jamal Murray answered that question in the most emphatic terms possible in Chicago, turning a United Center crowd that had been electrified by Josh Giddey's historic 22-assist performance into 20,000 silent witnesses to Denver's resilience. The Bulls had everything going for them — home court, an overtime environment, Buddy Hield firing from everywhere — and Murray still found a way to reach into that chaos and pull out a step-back three that felt less like a basketball play and more like a personal decision. Meanwhile, 1,700 miles away in Salt Lake City, Cooper Flagg was writing his own chapter: a teenager at the free throw line, two seconds left, Dallas up one, and Svi Mykhailiuk's impossible ten-three barrage still hanging over the building like a threat. Flagg made both. Bam Adebayo was suffocating Oklahoma City in Miami with the kind of clutch defensive performance that never shows up in a highlights package but wins games just the same. Stephen Curry, perhaps feeling overlooked, waited until Jayson Tatum had given Boston everything he had, then dropped a game-winning three with 11 seconds left that sent Chase Center into the kind of delirium only Curry can manufacture. It was a week that reminded us why the final five minutes exist as a separate universe from the other 43 — the same players, the same court, and yet an entirely different sport.",
};