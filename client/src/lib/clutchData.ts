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
  generatedDate: "October 19, 2026",
  weekLabel: "Week of October 19–25, 2026",
  players: [
    {
      rank: 1,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.0,
      gameWinners: 2,
      clutchPlusMinus: 14.2,
      biggestMoment:
        "With Boston clinging to a one-point lead in overtime at Philadelphia, Tatum caught a switch on Maxey 28 feet from the basket, pump-faked him airborne, and buried a pull-up midrange over the outstretched hand to push the margin to three with 34 seconds left. The Sixers never recovered, and that singular possession sealed the only unbeaten preseason record in the league.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 96,
      clutchPts: 8.8,
      clutchFgPct: 51.7,
      clutchFtPct: 94.4,
      gameWinners: 2,
      clutchPlusMinus: 12.6,
      biggestMoment:
        "Trailing Portland by two with 1:08 on the clock at Chase Center, Curry dribbled off a Draymond Green screen at the logo, hesitated just long enough to freeze the trailing defender, and unloaded a signature no-look-into-catch-and-shoot triple that splashed through the net to give Golden State a lead it never surrendered. The sequence broke Portland's unbeaten streak and re-announced the Warriors as the West's most dangerous veteran outfit.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 95,
      clutchPts: 8.1,
      clutchFgPct: 48.9,
      clutchFtPct: 91.7,
      gameWinners: 1,
      clutchPlusMinus: 11.3,
      biggestMoment:
        "Dallas was scrapping to cut a double-digit Atlanta lead to single digits in the fourth quarter when Young simply ended the conversation — two consecutive floaters over Kyle Hendricks threading the exact same angle, followed by a step-back three from the corner of the charge circle that ballooned the margin back to 17. The methodical cruelty of those three possessions transformed a competitive game into a 24-point statement.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 93,
      clutchPts: 7.9,
      clutchFgPct: 57.1,
      clutchFtPct: 88.2,
      gameWinners: 1,
      clutchPlusMinus: 10.8,
      biggestMoment:
        "With Denver up one at the Crypto.com Arena and the Lakers running their best last-gasp set for Anthony Davis in the post, Jokic read the entry pass before it was even thrown, stepped into the passing lane for the steal, and then walked it up the court in no hurry before dropping a no-look dime to Aaron Gordon for the dagger dunk. The entire sequence — steal to layup in 4.1 seconds — was the week's single most efficient clutch possession.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 91,
      clutchPts: 8.6,
      clutchFgPct: 52.3,
      clutchFtPct: 79.4,
      gameWinners: 1,
      clutchPlusMinus: 9.7,
      biggestMoment:
        "Indiana had the ball, the lead, and the momentum at Gainbridge Fieldhouse in overtime when Giannis strip-blocked Tyrese Haliburton's driving layup attempt so emphatically that the ball ricocheted directly to Damian Lillard in transition, who pushed ahead and found Giannis filling at full sprint for the thunderous put-back that flipped the scoreboard. Milwaukee walked out of Indianapolis with a survival win that redefined their entire preseason narrative.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 90,
      clutchPts: 8.3,
      clutchFgPct: 49.6,
      clutchFtPct: 92.9,
      gameWinners: 1,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "Cleveland down two, 19.4 seconds remaining, Mitchell isolated at the elbow with the game on his shoulders — he drove baseline, absorbed the contact from a late closeout, and converted both free throws before the echo of the whistle cleared the arena. Then, just to make it emphatic, he picked off the inbound pass on the other end to seal the Cavaliers' first road win of the week.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 89,
      clutchPts: 7.7,
      clutchFgPct: 50.0,
      clutchFtPct: 95.5,
      gameWinners: 1,
      clutchPlusMinus: 7.4,
      biggestMoment:
        "Phoenix was staring at a defining road loss in Sacramento when Booker called his own number on back-to-back possessions in the final 90 seconds — a pull-up jumper off the dribble from 18 feet, then a step-back three from the wing that silenced the Golden 1 Center crowd like a power outage. His 8 clutch-minute points were the entire margin of the Suns' victory.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 88,
      clutchPts: 7.2,
      clutchFgPct: 47.8,
      clutchFtPct: 93.3,
      gameWinners: 1,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "Trailing by one with 11 seconds left in regulation at Indiana, Lillard received the inbound at half-court, needed only two dribbles to reach his preferred spot 30 feet from the arc, and launched the kind of contested pull-up three that has ended careers of late-game defenders for over a decade — it connected, forcing overtime and giving Giannis the stage he needed to close it out.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 86,
      clutchPts: 6.9,
      clutchFgPct: 58.3,
      clutchFtPct: 82.6,
      gameWinners: 0,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "Oklahoma City's final fifth-quarter push saw them cut Houston's lead to three before Sengun posted up deep on the right block, executed a drop-step that left his defender stumbling, and finished with his left hand through contact for the and-one that effectively buried OKC's comeback. His clutch-minute plus-minus of +9.4 is the week's best among players without a game-winner, a testament to his suffocating interior presence in tight games.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 85,
      clutchPts: 7.4,
      clutchFgPct: 46.2,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: 6.2,
      biggestMoment:
        "Down three at home against a scrappy Phoenix squad, James received the ball on the wing at 41 years old, drove baseline with the same first step that has haunted defenders since the Obama administration, drew two bodies into the paint, and whipped a no-look pass to Austin Reaves cutting backdoor for the layup before drawing a foul on the other end to complete the 3-point swing in 22 seconds. Age is apparently still just a number.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 83,
      clutchPts: 7.1,
      clutchFgPct: 45.5,
      clutchFtPct: 87.5,
      gameWinners: 1,
      clutchPlusMinus: 5.8,
      biggestMoment:
        "Orlando trailed Toronto by two with 38 seconds to play when Banchero caught the ball in the post, made one hard dribble to establish his angle, and rose up for a turnaround fadeaway from eight feet that traced a perfect arc through the net to tie the game. He then iced it with two free throws after forcing a foul on the defensive end, delivering the Magic their cleanest closing sequence of the young season.",
      trend: "up",
    },
    {
      rank: 12,
      player: "De'Aaron Fox",
      team: "SAC",
      clutchRating: 81,
      clutchPts: 6.8,
      clutchFgPct: 44.4,
      clutchFtPct: 90.0,
      gameWinners: 0,
      clutchPlusMinus: 5.1,
      biggestMoment:
        "Fox turned in the week's fastest individual clutch sequence when he generated three consecutive transition layups in the final 4:30 against Phoenix — each one a product of his obscene first step off a defensive stop — converting five of six points at the line in a 90-second stretch that nearly erased a nine-point deficit. Sacramento's luck ran out on the final possession, but Fox's engine never stopped running.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 79,
      clutchPts: 5.9,
      clutchFgPct: 43.8,
      clutchFtPct: 76.9,
      gameWinners: 0,
      clutchPlusMinus: 4.3,
      biggestMoment:
        "Facing a must-stop situation with San Antonio clinging to a one-point lead, Wembanyama rotated from the weak-side block to contest what appeared to be a wide-open corner three — his wingspan arrived before the shooter's eyes registered the closeout — and the resulting block-into-transition ignited a Spurs fastbreak that sealed the game. The defensive read was the play of the week that no box score will ever fully explain.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 78,
      clutchPts: 6.5,
      clutchFgPct: 46.7,
      clutchFtPct: 91.3,
      gameWinners: 0,
      clutchPlusMinus: 3.9,
      biggestMoment:
        "With Madison Square Garden holding its collective breath and the Knicks trailing Brooklyn by one with 1:15 remaining, Brunson ran a pick-and-roll, rejected the roll man option, retreated one dribble, and hit a pocket-sized pull-up floater from 13 feet that kissed the glass with a touch so soft it barely rustled the net. He followed it with a textbook ICE coverage stop that held Brooklyn scoreless the rest of the way.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 76,
      clutchPts: 6.2,
      clutchFgPct: 42.9,
      clutchFtPct: 85.7,
      gameWinners: 0,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "Detroit's most encouraging sign of the week came entirely from Cunningham's clutch-minute resolve against Chicago — he kept the Pistons in a game they had no business winning by scoring seven straight points in the final 2:40, culminating in a contested mid-range pull-up over Patrick Williams that tied the game before a defensive breakdown cost Detroit the overtime possession. The performance was a portrait of a young leader learning to will a franchise forward.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Scoot Henderson",
      team: "POR",
      clutchRating: 74,
      clutchPts: 5.6,
      clutchFgPct: 41.2,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: 2.6,
      biggestMoment:
        "Henderson's best clutch moment of the week was simultaneously his most bittersweet — he knifed through Golden State's defense for a left-handed reverse layup that cut the Chase Center deficit to one with 48 seconds remaining, only for Curry to answer on the very next possession with the dagger triple that ended Portland's unbeaten streak. The sequence confirmed Henderson can rise to the moment; it also confirmed that Curry's moment is a taller mountain.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 72,
      clutchPts: 6.0,
      clutchFgPct: 39.5,
      clutchFtPct: 80.0,
      gameWinners: 0,
      clutchPlusMinus: 1.8,
      biggestMoment:
        "Edwards delivered the week's loudest individual moment that ultimately didn't matter — a ferocious two-handed slam off a baseline drive against Utah with 2:10 left that brought the Target Center crowd to its feet and cut the lead to two — before two missed free throws 40 seconds later allowed the Jazz to escape with a stunning road win. The dunk was pure Ant; the free throw misses were a reminder that elite clutch status requires finishing every chapter.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 68,
      clutchPts: 5.1,
      clutchFgPct: 36.8,
      clutchFtPct: 84.6,
      gameWinners: 0,
      clutchPlusMinus: -3.4,
      biggestMoment:
        "SGA's lone bright clutch moment in a rough week came against Memphis — a step-back three from the right wing with 2:55 remaining that briefly gave OKC a lead and drew the loudest crowd reaction of their home stand. But the Thunder still lost that game, and with the Houston national-TV blowout serving as the week's loudest organizational alarm, even SGA's individual flashes feel like isolated data points against a troubling team-level backdrop.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Luka Doncic",
      team: "DAL",
      clutchRating: 64,
      clutchPts: 4.8,
      clutchFgPct: 33.3,
      clutchFtPct: 81.8,
      gameWinners: 0,
      clutchPlusMinus: -5.1,
      biggestMoment:
        "Doncic's clutch résumé this week is best described as a series of almost-moments that underline a deeper problem — his most notable late-game sequence, a crossover-into-stepback three attempt against Atlanta with Dallas down 19, was off the back iron and served primarily to confirm that the Mavericks were being outclassed on their own floor rather than staging a comeback. His -5.1 clutch plus-minus is the week's second-worst among rotation players.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Jordan Poole",
      team: "WAS",
      clutchRating: 51,
      clutchPts: 3.9,
      clutchFgPct: 24.1,
      clutchFtPct: 77.8,
      gameWinners: 0,
      clutchPlusMinus: -8.7,
      biggestMoment:
        "Poole's most memorable clutch moment this week came against Charlotte when, with Washington down four and 90 seconds left, he received a perfectly designed play-call that freed him for an open corner three — the kind of look coaches draw up at 3 a.m. in whiteboard dreams — and clanked it off the side of the backboard so severely that it nearly hit the shot-clock support. Defenses remain aware of where Jordan Poole prefers to operate. Jordan Poole's shot, apparently, does not.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jayson Tatum",
    team: "BOS",
    description:
      "Jayson Tatum is this week's undisputed Clutch King, and it isn't particularly close. His overtime performance in Philadelphia was the week's defining individual closing act — a pull-up midrange over Tyrese Maxey with the game on the line, in a hostile road building, with an unbeaten record at stake. That kind of moment doesn't just reflect clutch ability; it reveals a player who has so thoroughly internalized the weight of big situations that pressure has become indistinguishable from routine for him. Boston's 4-0 record is constructed almost entirely on the back of Tatum refusing to let games get away in the final minutes, and his 98 clutch rating, 54.2 percent clutch field-goal percentage, and perfect-week free-throw mark of 96.0 percent make the throne his by unanimous editorial consent.",
  },
  worstInClutch: {
    player: "Jordan Poole",
    team: "WAS",
    description:
      "Jordan Poole is a man who loves the clutch moment with his whole heart and whose shooting mechanics, this week at least, did not love it back. A 24.1 percent clutch field-goal percentage is the kind of number that requires a calculator and a moment of quiet reflection. His minus-8.7 clutch plus-minus means Washington was statistically better off in close games when he was on the bench, which is information the Wizards coaching staff has presumably now received and laminated. To Poole's credit, he keeps shooting — the confidence is genuinely admirable — and somewhere inside that 24.1 percent is a player who knows exactly how good he's supposed to be in these moments. We just need the basketball to get that memo.",
  },
  weeklyHighlight:
    "The opening week of the 2026–27 NBA season delivered everything a clutch-drama almanac could ask for: a record-sealing overtime survival in Philadelphia, a veteran assassin burying an unbeaten team's perfect record in San Francisco, and a 24-point demolition in Dallas that read less like a basketball game and more like a hostile takeover. Tatum's midrange over Maxey in overtime was the week's single defining individual moment — the kind of possession that gets filed away in the specific cabinet of plays that define careers — but Curry's Chase Center dagger against Portland ran it close for pure narrative weight, killing Scoot Henderson's ascending unbeaten story in the most historically appropriate building imaginable. Giannis and Lillard's combined overtime rescue act in Indianapolis was the week's most compelling team-level clutch narrative: Lillard forcing OT with a prayer from 30 feet, then Giannis ending it with a fast-break putback that felt like a punctuation mark on Milwaukee's entire corrective arc. On the other end of the emotional spectrum, Luka's back-iron three in a 19-point hole against Atlanta and SGA's compounding late-game inefficiency against Houston painted two of the West's marquee stars with the week's most urgent questions. The clutch leaderboard entering Week 2 is, above all else, a story about Boston's unshakeable top — and a West landscape where the next closer hasn't fully announced themselves yet.",
};