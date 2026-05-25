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
  generatedDate: "May 25, 2026",
  weekLabel: "Week of May 25–31, 2026",
  players: [
    {
      rank: 1,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 99,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 95.8,
      gameWinners: 4,
      clutchPlusMinus: 18.7,
      biggestMoment:
        "With the Knicks trailing Cleveland by two and 38 seconds left in ECF Game 2, Brunson curled off a Towns screen at the elbow, rejected the mid-range, drove baseline, and finished through contact with his left hand — then stared into the Rocket Mortgage crowd and hit the and-one to take the lead. Zero turnovers in 14 clutch minutes across three ECF games. Zero.",
      trend: "stable",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 98,
      clutchPts: 8.1,
      clutchFgPct: 51.7,
      clutchFtPct: 88.9,
      gameWinners: 2,
      clutchPlusMinus: 22.4,
      biggestMoment:
        "WCF Game 4, final five minutes, Spurs up four: Wembanyama blocked Shai Gilgeous-Alexander's pull-up attempt at the rim — his third block of the fourth quarter — then loped the length of the floor and finished an ambidextrous finger-roll over three defenders to push the lead to six and seal the series-evening win. The building fell silent in a way that only one player in this sport can manufacture.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Mikal Bridges",
      team: "NYK",
      clutchRating: 96,
      clutchPts: 7.8,
      clutchFgPct: 61.5,
      clutchFtPct: 91.3,
      gameWinners: 3,
      clutchPlusMinus: 16.2,
      biggestMoment:
        "ECF Game 3's defining possession: Bridges caught a skip pass in the right corner with Evan Mobley closing hard, pump-faked to freeze him mid-air, and drained the triple over the outstretched hand — his fourth clutch-time make of the night — to give New York a double-digit lead they would never relinquish. That single sequence ended Cleveland's last realistic hope of a comeback.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 94,
      clutchPts: 8.6,
      clutchFgPct: 46.8,
      clutchFtPct: 90.2,
      gameWinners: 3,
      clutchPlusMinus: 9.3,
      biggestMoment:
        "WCF Game 2 closing stretch: SGA isolated De'Aaron Fox on the left wing, crossed him twice at the top of the key until Fox's ankle buckled slightly on the second cut, then stepped back into a 27-footer that barely grazed the net going in — Oklahoma City's dagger that made it a two-possession game with 90 seconds left. His clutch body of work over the full season keeps him here even as Game 4 dims his week.",
      trend: "down",
    },
    {
      rank: 5,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 6.2,
      clutchFgPct: 50.0,
      clutchFtPct: 86.7,
      gameWinners: 1,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "After back-to-back shooting disasters in Games 2 and 3, Castle opened WCF Game 4's clutch window by attacking Jared McCain's closeout off a Fox handoff, drawing the foul, and converting both free throws to push the Spurs' lead to seven with 3:40 remaining. It was the play of a young guard who had looked in the mirror between games and decided he was done flinching.",
      trend: "up",
    },
    {
      rank: 6,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 89,
      clutchPts: 7.1,
      clutchFgPct: 48.3,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "WCF Game 1 overtime, San Antonio down one: Fox received the ball at half-court with seven seconds left, blew past Isaiah Joe off the dribble, avoided Holmgren's late rotate, and banked in a floater off the glass that sent Frost Bank Center into full earthquake mode and gave the Spurs a lead they held for the final 1.3 seconds. The bank was definitely called.",
      trend: "up",
    },
    {
      rank: 7,
      player: "OG Anunoby",
      team: "NYK",
      clutchRating: 88,
      clutchPts: 5.9,
      clutchFgPct: 57.1,
      clutchFtPct: 79.2,
      gameWinners: 1,
      clutchPlusMinus: 14.1,
      biggestMoment:
        "ECF Game 3, final four minutes: with Donovan Mitchell isolating on the left block in what felt like a momentum-shifting moment for Cleveland, Anunoby reached from behind, stripped the ball cleanly without fouling, pushed ahead in transition, and dunked on the trailing defense — a sequence that earned a 30-second standing ovation from MSG East and effectively ended Cleveland's season-saving rally before it began.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 86,
      clutchPts: 5.3,
      clutchFgPct: 52.6,
      clutchFtPct: 88.0,
      gameWinners: 1,
      clutchPlusMinus: 17.3,
      biggestMoment:
        "ECF Game 1, clutch window, Knicks up three: Towns received a post entry on the left block, pump-faked Jarrett Allen off his feet, drew the foul, and hit both free throws while the Cavaliers burned their final timeout — a sequence so methodical and devastating that Cleveland never got within four points again. The game-high plus-23 in Game 3 only reinforces that the big man becomes more valuable, not less, when the margin tightens.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Jared McCain",
      team: "OKC",
      clutchRating: 83,
      clutchPts: 5.8,
      clutchFgPct: 47.4,
      clutchFtPct: 80.0,
      gameWinners: 1,
      clutchPlusMinus: 6.2,
      biggestMoment:
        "WCF Game 3, the moment everyone saw his ceiling: McCain received a SGA kick-out on the right wing with Wembanyama flying at him, held his ground, and buried a step-back three over the seven-foot-three arm that seemed to cover half the arc — a 24-point breakout night that had Oklahoma City believing a new closer was being born. San Antonio answered the bell in Game 4 and turned him into a spectator, but that Game 3 triple lives rent-free.",
      trend: "down",
    },
    {
      rank: 10,
      player: "Alperen Şengün",
      team: "HOU",
      clutchRating: 82,
      clutchPts: 6.7,
      clutchFgPct: 53.8,
      clutchFtPct: 76.9,
      gameWinners: 2,
      clutchPlusMinus: 5.4,
      biggestMoment:
        "In Houston's second-round series against Denver, Şengün posted up Michael Porter Jr. on back-to-back possessions in the final 90 seconds of Game 5 — first a drop-step hook left that tied the game, then a turnaround jumper from the short corner that gave the Rockets the lead for good. Two possessions, two points, one series. The Turkish big man is becoming one of the league's most reliable late-game post scorers.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 80,
      clutchPts: 4.8,
      clutchFgPct: 50.0,
      clutchFtPct: 71.4,
      gameWinners: 1,
      clutchPlusMinus: 2.1,
      biggestMoment:
        "ECF Game 1, trailing by one with two minutes left: Mobley caught a lob from Mitchell at the dunker spot, absorbed contact from Towns, and powered the put-back through the iron to give Cleveland a one-point lead — briefly. It was the one clutch sequence in the ECF where Cleveland's defense-first big looked like the difference-maker they drafted him to be.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Chet Holmgren",
      team: "OKC",
      clutchRating: 78,
      clutchPts: 4.2,
      clutchFgPct: 44.4,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: 3.8,
      biggestMoment:
        "WCF Game 1, final three minutes: Holmgren rotated from the weak side to swat De'Aaron Fox's driving layup attempt into the third row — a block so emphatic it generated a 10-second crowd silence before the roar — then hit a corner three off the SGA kick-out on the ensuing possession to give OKC a four-point cushion. Clutch defense translates to winning, and Holmgren understands that better than most.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Jarrett Allen",
      team: "CLE",
      clutchRating: 76,
      clutchPts: 3.9,
      clutchFgPct: 58.3,
      clutchFtPct: 63.6,
      gameWinners: 0,
      clutchPlusMinus: -4.2,
      biggestMoment:
        "ECF Game 2, Cleveland down three with 90 seconds left: Allen bodied up Towns on the left block, caught the entry, and powered a short hook over the outstretched hands to cut the deficit to one and silence the Garden for a single, electric moment. The free throw that followed rimmed out, and Cleveland never recovered — but that make was the one brief flash of life in a series the Cavaliers have otherwise sleepwalked through.",
      trend: "down",
    },
    {
      rank: 14,
      player: "Isaiah Joe",
      team: "OKC",
      clutchRating: 74,
      clutchPts: 3.6,
      clutchFgPct: 46.7,
      clutchFtPct: 100.0,
      gameWinners: 1,
      clutchPlusMinus: 4.5,
      biggestMoment:
        "WCF Game 3, Oklahoma City down by one with 44 seconds left: Joe came off a double screen at the top of the key, caught the SGA pass in rhythm, and fired a dead-straight three-pointer that never touched the rim going through — a shot so clean it drew a standing ovation from Thunder faithful who still can't quite believe the sharpshooting reserve has become one of their most trusted late-game options.",
      trend: "up",
    },
    {
      rank: 15,
      player: "Max Strus",
      team: "CLE",
      clutchRating: 72,
      clutchPts: 4.4,
      clutchFgPct: 43.8,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: -1.3,
      biggestMoment:
        "ECF Game 1, Cleveland trailing by two in the final minute: Strus caught a Mitchell kick-out from the right corner, didn't hesitate, and launched a contested three that banked in off the backboard to give the Cavaliers a one-point lead — a shot so improbable that even the Cleveland bench stood frozen for a half-second before erupting. The lead lasted 19 seconds, but the make itself was pure clutch nerve.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Josh Giddey",
      team: "CHI",
      clutchRating: 70,
      clutchPts: 4.1,
      clutchFgPct: 45.5,
      clutchFtPct: 78.6,
      gameWinners: 1,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "First-round Game 6 against Milwaukee, Chicago's season on the line: Giddey penetrated baseline with 28 seconds left and the Bulls down one, drew two defenders, and fired a no-look dump-off to a cutting Patrick Williams who finished the and-one — a passing read so advanced it forced an immediate rewatch. The Bulls survived into the second round on that single assist, and Giddey looked like a point guard who had quietly grown up.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 68,
      clutchPts: 5.2,
      clutchFgPct: 40.7,
      clutchFtPct: 72.2,
      gameWinners: 1,
      clutchPlusMinus: -2.8,
      biggestMoment:
        "First-round Game 4 against Boston, Orlando down three entering the final five: Banchero caught a post-up on the left elbow, spun baseline past Jayson Tatum, and threw down a two-handed slam that cut the deficit to one and forced a Boston timeout — a play that showed every ounce of his physical tools in a single violent motion. The Magic lost anyway, but Banchero's refusal to concede was the series' most memorable individual sequence.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 65,
      clutchPts: 4.7,
      clutchFgPct: 38.5,
      clutchFtPct: 84.6,
      gameWinners: 0,
      clutchPlusMinus: -5.1,
      biggestMoment:
        "First-round Game 3 against Miami, Indiana needing a stop and a score: Haliburton hit a pull-up mid-range jumper from the free-throw line with the shot clock expiring and the Pacers down two — not a great shot, not a comfortable shot, but one he made anyway — then immediately fouled Bam Adebayo on the other end and gave back the momentum in the span of eight seconds. The highs and lows of Haliburton in clutch time, compressed into one possession.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 63,
      clutchPts: 5.9,
      clutchFgPct: 35.3,
      clutchFtPct: 68.4,
      gameWinners: 1,
      clutchPlusMinus: -7.6,
      biggestMoment:
        "First-round Game 5 against Dallas, Minnesota's last stand: Edwards isolated Luka Dončić on the left wing and carved him open with a vicious in-and-out crossover, then elevated into a pull-up three that rattled in-and-out with 12 seconds left — a moment that felt like the Timberwolves' season dying on the rim in real time. The game-winner from Game 2 still counts, but the misses in close games have been too frequent and too costly this postseason.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 59,
      clutchPts: 7.3,
      clutchFgPct: 36.8,
      clutchFtPct: 82.4,
      gameWinners: 0,
      clutchPlusMinus: -14.9,
      biggestMoment:
        "ECF Game 3, Cleveland down six with four minutes left, the crowd begging for a reason to believe: Mitchell isolated Anunoby at the top of the key, shook him with a side-step, and released a 24-footer that sailed through cleanly to cut the deficit to three. It was the one clutch-window make in three ECF games that actually felt like momentum — and it was followed 27 seconds later by a Bridges three and a turnover that ended any realistic hope of a comeback.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jalen Brunson",
    team: "NYK",
    description:
      "Jalen Brunson doesn't do anything with flair. He doesn't dunk on people, doesn't bark at the crowd, doesn't need a signature celebration. What he does is something rarer and more valuable: he plays better when the game gets smaller. His 9.4 clutch points per game in this postseason lead all active players, his 54.2% clutch field-goal percentage is absurd for a primary ball-handler, and his zero turnovers across 14 clutch minutes in the ECF is the kind of number that statisticians will be citing in ten years. Three consecutive ECF games of 29-plus points with the game on the line, and in none of them did New York ever feel like they were going to lose. That is not coincidence. That is a closer.",
  },
  worstInClutch: {
    player: "Donovan Mitchell",
    team: "CLE",
    description:
      "Donovan Mitchell is having a fascinating postseason if you are a fan of basketball irony. He is scoring — 78 points in three ECF games is not nothing — and yet Cleveland is down 0-3 and Mitchell's cumulative plus/minus is minus-53, a number so catastrophic it reads like a data entry error. The cruel paradox of his clutch profile right now is that he keeps making the shot that should matter and then immediately doing something that makes it not matter. The basket goes in. The turnover follows. The timeout is burned. Mitchell is the very expensive, very talented engine of a car that keeps stalling on the highway. The highlights look great. The destination never arrives.",
  },
  weeklyHighlight:
    "The week of May 25 will be remembered as the week Victor Wembanyama reminded the basketball world that playoff series are not decided by statistics — they are decided by singular beings doing things other humans cannot do. His 31-point, 18-rebound, 5-block masterpiece in WCF Game 4 was the kind of performance that rearranges the hierarchy of a sport in real time; Oklahoma City, which entered the week holding a 2-1 series lead and seemingly cruising toward the Finals, left Sunday night staring at a 2-2 series and a road Game 5 in a building that has not lost in eight home playoff games. But Wembanyama wasn't the only story reshaping the clutch landscape this week. In the East, Jalen Brunson continued his quiet assault on the record books, playing 14 clutch minutes across three ECF games without a single turnover — a number so alien it feels like it belongs to a different sport. Mikal Bridges, meanwhile, has become the most underrated closer in the conference, his 61.5% clutch field-goal percentage this postseason making him arguably the most efficient shot-maker in either conference series. And somewhere in all of this, Donovan Mitchell is putting up 26 points per night and losing by 22, a contradiction so perfect it almost deserves its own documentary. The clutch window giveth, and for Cleveland, it mostly taketh away.",
};