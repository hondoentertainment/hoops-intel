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
  generatedDate: "June 8, 2026",
  weekLabel: "Week of June 8–14, 2026",
  players: [
    {
      rank: 1,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 99,
      clutchPts: 9.4,
      clutchFgPct: 61.5,
      clutchFtPct: 95.2,
      gameWinners: 7,
      clutchPlusMinus: 14.2,
      biggestMoment:
        "With 14 seconds left in Finals Game 1 and Madison Square Garden holding its breath 1,100 miles away, Brunson rose over a closing De'Aaron Fox and buried a pull-up jumper to put New York up two — the single most consequential made basket of the 2026 postseason. He caught the inbound, dribbled twice, and let it go like he was shooting around alone at 7 a.m.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 97,
      clutchPts: 8.7,
      clutchFgPct: 55.8,
      clutchFtPct: 88.6,
      gameWinners: 5,
      clutchPlusMinus: 8.9,
      biggestMoment:
        "Down 12 with four minutes left in Finals Game 1, Wembanyama went on a personal 11-2 run — back-to-back pull-up threes, a chasedown block on Josh Hart, and a turnaround over KAT — that made the AT&T Center believe the unthinkable was happening in real time. His desperation half-court heave ricocheted off the backboard at the buzzer and left the entire basketball world wondering what could have been.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 93,
      clutchPts: 6.8,
      clutchFgPct: 52.3,
      clutchFtPct: 84.1,
      gameWinners: 4,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "With 22 seconds left and New York clinging to a three-point lead, Castle read Brunson's pick-and-roll trigger, darted into the passing lane, and ripped the ball cleanly from OG Anunoby's hands before it reached Brunson — igniting a possession that nearly cost New York the game and announced Castle as a legitimate Finals-caliber defender. At 21 years old, he made the defensive play veterans spend entire careers dreaming about.",
      trend: "up",
    },
    {
      rank: 4,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 7.9,
      clutchFgPct: 50.7,
      clutchFtPct: 91.3,
      gameWinners: 5,
      clutchPlusMinus: 5.4,
      biggestMoment:
        "Fox converted a slithering left-handed layup through contact with 22 seconds remaining in Finals Game 1 to cut New York's lead to one, then sprinted back on defense to contest Brunson's answering pull-up — giving the Spurs their last, best chance to steal the game on the road. It was the kind of high-wire mid-game takeover that has defined Fox's postseason identity for three straight years.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Mikal Bridges",
      team: "NYK",
      clutchRating: 88,
      clutchPts: 5.6,
      clutchFgPct: 54.1,
      clutchFtPct: 89.7,
      gameWinners: 3,
      clutchPlusMinus: 11.3,
      biggestMoment:
        "In the final two minutes of Finals Game 1, Bridges picked Castle's pocket on back-to-back possessions — tipping one pass out of bounds and converting the second steal into an and-one layup that forced San Antonio to burn its final timeout. His three steals on the night were the defensive performance that quietly locked the game before Brunson had to be heroic.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 86,
      clutchPts: 6.2,
      clutchFgPct: 57.9,
      clutchFtPct: 85.4,
      gameWinners: 2,
      clutchPlusMinus: 12.7,
      biggestMoment:
        "With the Spurs mounting their fourth-quarter comeback, Towns caught a high-low entry pass at the elbow, pump-faked Wembanyama into the air, and drew two free throws that re-extended New York's lead to five — stopping the bleeding at exactly the moment San Antonio's crowd was loudest. His ability to be a calm, efficient presence when defenses tighten is what separates his clutch game from his regular-season reputation.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 84,
      clutchPts: 8.1,
      clutchFgPct: 49.3,
      clutchFtPct: 93.8,
      gameWinners: 6,
      clutchPlusMinus: 6.1,
      biggestMoment:
        "In WCF Game 6, SGA scored eight of OKC's final nine points — including a step-back three over Fox with 38 seconds left that gave the Thunder a lead they'd ultimately surrender — before his free throws with 1.2 seconds remaining sent the series to a decisive Game 7 in San Antonio. His season-long clutch body of work remains the most prolific of any player who did not reach the Finals.",
      trend: "down",
    },
    {
      rank: 8,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 82,
      clutchPts: 7.4,
      clutchFgPct: 46.8,
      clutchFtPct: 88.2,
      gameWinners: 5,
      clutchPlusMinus: 3.8,
      biggestMoment:
        "Tatum's game-winning floater over Bam Adebayo in ECF Game 5 — a reverse scoop off the wrong foot that banked in off the glass with 0.6 seconds on the clock — was the most improbable shot of the Eastern Conference playoffs and the reason Boston forced a Game 6. His postseason clutch efficiency has been quietly elite despite Boston's first-round exit narrative looming every season.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Luka Dončić",
      team: "DAL",
      clutchRating: 80,
      clutchPts: 8.9,
      clutchFgPct: 44.2,
      clutchFtPct: 79.6,
      gameWinners: 4,
      clutchPlusMinus: 1.2,
      biggestMoment:
        "In a late-season must-win against Memphis, Dončić orchestrated a 12-0 clutch-time run entirely by himself — three consecutive isolation baskets, two of them step-back threes over double teams — to erase a nine-point deficit and keep Dallas in playoff position. His raw clutch volume is still elite; his efficiency dips in the biggest moments are the only thing keeping him out of the top five.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 79,
      clutchPts: 7.2,
      clutchFgPct: 47.6,
      clutchFtPct: 90.1,
      gameWinners: 5,
      clutchPlusMinus: 4.7,
      biggestMoment:
        "Mitchell's pull-up mid-range with 8 seconds left against Indiana in Game 4 of the second round — caught in transition, stopped on a dime, and buried over a closing Tyrese Haliburton — gave Cleveland a 3-1 series lead and was the quietest, most efficient game-winner of anyone in this entire ranking. Spida in the clutch remains the most underrated closer in the Eastern Conference.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 77,
      clutchPts: 7.6,
      clutchFgPct: 43.9,
      clutchFtPct: 82.4,
      gameWinners: 4,
      clutchPlusMinus: 2.3,
      biggestMoment:
        "Edwards took over the final three minutes of Minnesota's playoff elimination game against Golden State, scoring seven points on four attempts and nearly willing the Wolves back from eight down — including a thunderous two-handed slam over Draymond Green that had Target Center in a complete frenzy. He couldn't finish the comeback, but the audacity of the attempt is exactly why he'll be a clutch-time cornerstone for the next decade.",
      trend: "down",
    },
    {
      rank: 12,
      player: "Nikola Jokić",
      team: "DEN",
      clutchRating: 76,
      clutchPts: 5.9,
      clutchFgPct: 58.3,
      clutchFtPct: 76.2,
      gameWinners: 3,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Jokić's no-look, behind-the-back pass to an open Aaron Gordon in the corner — delivered under full-court pressure with Denver down one and six seconds left against the Lakers — resulted in Gordon's layup and a Denver win that extended their season three more games. It was the most Jokić clutch moment imaginable: he didn't score, he orchestrated, and it was more impressive than a game-winner.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 74,
      clutchPts: 5.3,
      clutchFgPct: 45.1,
      clutchFtPct: 91.7,
      gameWinners: 3,
      clutchPlusMinus: 3.4,
      biggestMoment:
        "In a third-round Game 3 against Cleveland, Haliburton dribbled past Mitchell off a simple drag screen, absorbed contact from Evan Mobley, and finished the and-one with his left hand to tie the game at 108 with 11 seconds left — then grabbed the rebound of his own missed free throw and found Myles Turner for the put-back. It was the kind of chaotic, brilliant clutch sequence that only Haliburton seems to stumble into on purpose.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 72,
      clutchPts: 6.8,
      clutchFgPct: 41.7,
      clutchFtPct: 94.4,
      gameWinners: 4,
      clutchPlusMinus: -1.8,
      biggestMoment:
        "Lillard's 37-foot go-ahead three over Caleb Martin in the final regular-season game that clinched Milwaukee's playoff seeding was the most Dame Time moment of the entire year — left hand draped in Martin's face, off the dribble, well behind the arc, completely unfazed. The free-throw line remains his most reliable late-game weapon, but when he goes deep range in the clutch, there is still nobody more terrifying.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 70,
      clutchPts: 5.4,
      clutchFgPct: 46.3,
      clutchFtPct: 80.9,
      gameWinners: 2,
      clutchPlusMinus: 2.1,
      biggestMoment:
        "Brown's two consecutive clutch-time jumpers in ECF Game 3 — both off the dribble, both contested, both with the shot clock under three — were the only thing that kept Boston within striking distance of Miami in a game they eventually lost by four. His willingness to take the hard shot in tight moments is admirable; his inconsistency in converting them is the one thing keeping him from being a true closer.",
      trend: "down",
    },
    {
      rank: 16,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 68,
      clutchPts: 5.7,
      clutchFgPct: 44.8,
      clutchFtPct: 78.3,
      gameWinners: 3,
      clutchPlusMinus: 0.6,
      biggestMoment:
        "Banchero's post-up game-winner over Bam Adebayo in their first-round series — a left-shoulder fade that kissed the backboard glass and dropped as the buzzer sounded — was Orlando's signature moment of the 2026 playoffs and the shot that convinced everyone this franchise is for real. He's learning how to be a closer in real time, and the progress from October to June has been dramatic.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Chet Holmgren",
      team: "OKC",
      clutchRating: 66,
      clutchPts: 4.9,
      clutchFgPct: 48.6,
      clutchFtPct: 86.1,
      gameWinners: 2,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "In WCF Game 7, Holmgren blocked De'Aaron Fox's driving layup attempt in the final minute — a signature read-and-recover play where he materialized from the weak side like a 7-foot-1 apparition — then converted two free throws on the other end to give OKC a brief lead they couldn't protect. His defensive clutch impact is genuinely elite; his offensive clutch ceiling is still being written.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Zach LaVine",
      team: "SAC",
      clutchRating: 63,
      clutchPts: 6.1,
      clutchFgPct: 40.2,
      clutchFtPct: 88.5,
      gameWinners: 3,
      clutchPlusMinus: -3.1,
      biggestMoment:
        "LaVine hit a buzzer-beater mid-range jumper off a broken play against the Clippers in early March that saved Sacramento from a three-game losing streak — a moment so aesthetically smooth that even the opposing bench applauded. His clutch box score numbers look better than his actual impact on game outcomes, which is the central tension of his entire basketball identity.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 61,
      clutchPts: 5.8,
      clutchFgPct: 38.4,
      clutchFtPct: 92.3,
      gameWinners: 2,
      clutchPlusMinus: -4.7,
      biggestMoment:
        "Young's spinning floater over Rudy Gobert in a late-season overtime game against Minnesota was the most difficult shot anyone in the league attempted all week — a pirouetting, off-balance, left-handed scoop that somehow went in — and demonstrated why Atlanta refuses to trade him despite the inconsistency. He gets to the line in clutch moments better than almost anyone; the problem is everything that happens before the free-throw line.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Kevin Durant",
      team: "PHX",
      clutchRating: 58,
      clutchPts: 5.2,
      clutchFgPct: 42.1,
      clutchFtPct: 85.7,
      gameWinners: 1,
      clutchPlusMinus: -6.2,
      biggestMoment:
        "Durant's lone game-winner came in late January against Washington — a corner three with 2.8 seconds left that was, objectively, the least dramatic game-winner in NBA history given the opponent — but his clutch-time production has cratered as Phoenix's roster construction has made late-game execution nearly impossible. When Durant goes one-on-one in the clutch, he is still one of the most aesthetically perfect scorers alive; the results just no longer follow.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jalen Brunson",
    team: "NYK",
    description:
      "Jalen Brunson doesn't just perform in the clutch — he seems to actively prefer it, like the pressure is a comfort rather than a burden. His pull-up jumper with 14 seconds left in Finals Game 1 was the defining image of a season full of defining Brunson images: calm hands, two dribbles, perfect release over a closing defender in an atmosphere that would have liquefied most human beings. His season-long clutch rating leads the league in points per clutch possession and he has now hit a go-ahead or game-tying shot in seven playoff games this postseason alone. This is no longer a conversation about whether Brunson belongs in the top tier of NBA closers — he is the top tier, and the Finals have arrived right on schedule to prove it.",
  },
  worstInClutch: {
    player: "Kevin Durant",
    team: "PHX",
    description:
      "Somewhere between 'greatest scorer of his generation' and 'please do not give him the ball with two minutes left,' Kevin Durant has found a very uncomfortable middle ground this season. His clutch plus-minus of -6.2 is the kind of number that requires a second look, a third look, and then a long, sad stare out the window. To be fair to KD, Phoenix's late-game playbook appears to have been designed by someone who has never watched basketball, and his lone game-winner came against Washington in January — a game that, statistically, was less stressful than a Tuesday trip to the grocery store. He still looks absolutely magnificent hitting those shots; they just don't always go in when it matters, which is, unfortunately, the entire point.",
  },
  weeklyHighlight:
    "The 2026 NBA Finals opened in San Antonio on Thursday night and delivered exactly the kind of clutch theater that makes the sport impossible to look away from. Jalen Brunson and Victor Wembanyama took turns carrying their respective franchises through a fourth quarter that swung six times in the final three minutes, and when the dust settled it was Brunson's pull-up with 14 seconds left that stood as the last word — a shot so composed it felt almost cruel given the noise surrounding it. Wembanyama's four-minute, 11-point comeback run in the fourth quarter was the kind of performance that would have won a different game against a different closer; against Brunson in 2026, it wasn't quite enough. Stephon Castle's strip of Anunoby with 22 seconds left was the moment that briefly made the entire basketball world believe San Antonio was going to steal Game 1 on pure defensive instinct alone, and De'Aaron Fox's gutting left-hand layup through contact set the stage for Brunson's answer. Away from the Finals floor, Shai Gilgeous-Alexander's WCF exit is still resonating — six game-winners in a postseason run that ended one game short of glory will define how the clutch conversation frames itself heading into next season. The week belonged to Brunson, but the series is very much alive, and if Wembanyama finds two more clutch-time shots in Game 2, the rankings will look very different by Sunday night.",
};