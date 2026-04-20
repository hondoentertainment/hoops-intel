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
  generatedDate: "April 20, 2026",
  weekLabel: "Week of April 20–26, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 99,
      clutchPts: 8.4,
      clutchFgPct: 61.2,
      clutchFtPct: 94.7,
      gameWinners: 6,
      clutchPlusMinus: 14.2,
      biggestMoment:
        "With Oklahoma City down two and 11 seconds left against Denver, SGA caught a cross-court skip pass, pump-faked Jamal Murray into the stratosphere, drew the foul, and calmly buried both free throws to force overtime — then scored the first six points of the extra period to put the game away.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 97,
      clutchPts: 7.1,
      clutchFgPct: 57.8,
      clutchFtPct: 88.9,
      gameWinners: 4,
      clutchPlusMinus: 11.6,
      biggestMoment:
        "Trailing Detroit by three with 90 seconds remaining in Wednesday's stunning road upset, Banchero attacked Ausar Thompson off the dribble, converted a twisting and-one layup to cut the deficit to one, then sealed the win with a mid-range pull-up jumper over Cunningham that kissed the backboard and dropped through the net with 18 seconds on the clock.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 96,
      clutchPts: 7.8,
      clutchFgPct: 55.3,
      clutchFtPct: 91.2,
      gameWinners: 5,
      clutchPlusMinus: 12.9,
      biggestMoment:
        "In a tightly contested overtime thriller against Milwaukee two weeks ago, Tatum caught the ball at the top of the arc with Khris Middleton draped all over him, hesitated just long enough to create a sliver of daylight, and launched a step-back three-pointer that rattled in to give Boston a two-point lead with 4.1 seconds remaining — the dagger that sent TD Garden into a frenzy.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 6.9,
      clutchFgPct: 54.1,
      clutchFtPct: 85.3,
      gameWinners: 4,
      clutchPlusMinus: 10.8,
      biggestMoment:
        "Against Golden State with the Spurs clinging to a one-point lead in the final minute, Wembanyama planted himself in the paint, read Stephen Curry's floater perfectly, and swatted the attempt into the third row — then sprinted coast to coast on the ensuing fast break to finish an emphatic two-handed slam that effectively ended the game.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Damian Lillard",
      team: "POR",
      clutchRating: 93,
      clutchPts: 7.6,
      clutchFgPct: 48.9,
      clutchFtPct: 96.1,
      gameWinners: 5,
      clutchPlusMinus: 8.3,
      biggestMoment:
        "In what Portland fans are already calling 'The Logo Game,' Lillard pulled up from 32 feet over two defenders with three seconds remaining against Utah, burying the step-back three-pointer to lift the Trail Blazers to a one-point victory and keep their fragile playoff hopes alive for at least one more night.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Luka Dončić",
      team: "DAL",
      clutchRating: 92,
      clutchPts: 7.2,
      clutchFgPct: 47.6,
      clutchFtPct: 79.4,
      gameWinners: 4,
      clutchPlusMinus: 7.9,
      biggestMoment:
        "With the Mavericks down one against Minnesota in a must-win game, Dončić isolated against Jaden McDaniels, spun through contact on a sweeping right-to-left Euro step, drew the foul, and converted both free throws — then locked up Ant Edwards on the final possession with a textbook hands-up defensive stance that forced a rushed jumper and secured the win.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 91,
      clutchPts: 6.4,
      clutchFgPct: 52.7,
      clutchFtPct: 87.5,
      gameWinners: 3,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "Sensing the Celtics needed a spark against a surging Miami team, Brown received a handoff on the left wing, jab-stepped his defender onto his heels, and detonated into a vicious one-handed dunk over Bam Adebayo that silenced the Kaseya Center crowd and swung the momentum permanently in Boston's favor with 3:40 remaining.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 89,
      clutchPts: 6.8,
      clutchFgPct: 46.2,
      clutchFtPct: 83.1,
      gameWinners: 3,
      clutchPlusMinus: 6.1,
      biggestMoment:
        "Against Chicago in a pivotal home game, Cunningham orchestrated a flawless two-minute possession, probing the defense with five consecutive ball reversals before threading a no-look bounce pass through three defenders to Jalen Duren for a slam — then came back on the next trip to cash a contested floater that put Detroit ahead for good with 1:15 left.",
      trend: "down",
    },
    {
      rank: 9,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 88,
      clutchPts: 6.5,
      clutchFgPct: 49.3,
      clutchFtPct: 91.8,
      gameWinners: 3,
      clutchPlusMinus: 5.7,
      biggestMoment:
        "With Phoenix trailing Sacramento by two and the season hanging by a thread, Booker isolated on the left elbow, jabbed twice to freeze De'Aaron Fox, and then rose up over the outstretched hand of the chasing defender to drain a cold-blooded 19-footer that sent the game to overtime and temporarily revived the Suns' flickering playoff hopes.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 87,
      clutchPts: 6.1,
      clutchFgPct: 44.8,
      clutchFtPct: 78.3,
      gameWinners: 3,
      clutchPlusMinus: 5.2,
      biggestMoment:
        "In Minnesota's wild 112–110 victory over Denver, Edwards received the ball in transition with three seconds left, took two thunder-footed dribbles toward the elbow, and threw down a one-legged pull-up jumper with Nikola Jokić's hand in his face — the kind of shot that shouldn't go in and absolutely did, prompting a full sprint celebration toward the Timberwolves bench.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Nikola Jokić",
      team: "DEN",
      clutchRating: 86,
      clutchPts: 5.9,
      clutchFgPct: 53.6,
      clutchFtPct: 72.4,
      gameWinners: 2,
      clutchPlusMinus: 4.8,
      biggestMoment:
        "Against the Clippers in a back-and-forth Western Conference showdown, Jokić positioned himself at the elbow with two seconds left, caught a lofted entry pass with his back to the basket, spun baseline against two defenders, and banked in a feathery 12-footer that produced an immediate standing ovation even from the grudging Los Angeles crowd.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Franz Wagner",
      team: "ORL",
      clutchRating: 85,
      clutchPts: 5.7,
      clutchFgPct: 51.4,
      clutchFtPct: 86.2,
      gameWinners: 2,
      clutchPlusMinus: 7.3,
      biggestMoment:
        "In the final two minutes against Detroit on Wednesday, Wagner calmly curled off a Banchero screen, caught the ball in rhythm at the top of the arc, and drilled a three-pointer over Cade Cunningham's closing-out hand to extend Orlando's lead to four — a shot that broke Detroit's spirit and all but sealed the most significant road victory of the Magic's season.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 84,
      clutchPts: 5.3,
      clutchFgPct: 46.7,
      clutchFtPct: 89.5,
      gameWinners: 3,
      clutchPlusMinus: 6.4,
      biggestMoment:
        "Facing a Milwaukee team that had just gone on a 9–0 run to take the lead late in the fourth, Haliburton pushed tempo in transition, hit Bennedict Mathurin on the wing for a rhythm three, got the ball back in a dead-sprint full-court scenario, and deposited a silky left-handed finger roll off the glass to re-tie the game with 58 seconds remaining.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Chet Holmgren",
      team: "OKC",
      clutchRating: 82,
      clutchPts: 4.8,
      clutchFgPct: 55.9,
      clutchFtPct: 81.7,
      gameWinners: 1,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "With Oklahoma City protecting a one-point lead against Sacramento in the final 40 seconds, Holmgren read De'Aaron Fox's driving lane before Fox had even committed, slid his feet perfectly, and produced a clean block that ricocheted directly to SGA — who calmly dribbled out the remaining clock to complete the Thunder's statement victory.",
      trend: "up",
    },
    {
      rank: 15,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 81,
      clutchPts: 5.6,
      clutchFgPct: 48.1,
      clutchFtPct: 68.9,
      gameWinners: 2,
      clutchPlusMinus: 3.6,
      biggestMoment:
        "In what may have been the most jaw-dropping moment of his 23rd NBA season, LeBron backed down a stunned Jaren Jackson Jr. in the post with 90 seconds remaining against Memphis, wheeled right, and lofted a high-arcing baby hook over the outstretched arms of the Grizzlies' All-Defensive center — capping it with a full-speed sprint to the opposite end to set up a crucial defensive stop.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 80,
      clutchPts: 5.9,
      clutchFgPct: 43.2,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 2.9,
      biggestMoment:
        "Backed into a corner by a relentless New York Knicks defense in the final 90 seconds, Mitchell dribbled off a screen at the top of the key, split two converging defenders with a lightning-quick between-the-legs dribble, and attacked the paint to draw the foul — converting both free throws to give Cleveland a lead it would not surrender.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 78,
      clutchPts: 5.4,
      clutchFgPct: 40.7,
      clutchFtPct: 90.2,
      gameWinners: 2,
      clutchPlusMinus: 1.4,
      biggestMoment:
        "Against Charlotte in a game Atlanta desperately needed, Young orchestrated a flawless final possession — drawing the defense into a frantic scramble with a series of hesitation dribbles at the three-point line before threading an impossibly tight bounce pass to Jalen Johnson cutting backdoor for the go-ahead layup with six seconds left.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Joel Embiid",
      team: "PHI",
      clutchRating: 74,
      clutchPts: 5.1,
      clutchFgPct: 41.3,
      clutchFtPct: 76.8,
      gameWinners: 1,
      clutchPlusMinus: -2.3,
      biggestMoment:
        "In Philadelphia's narrow home win over Washington — one of the few clutch bright spots in an otherwise turbulent week — Embiid caught a lob in the post with two minutes left, turned baseline over a single defender, and deposited a powerful right-handed dunk that gave the Sixers a three-point cushion they managed to hold on to after two nerve-shredding missed field goals at the other end.",
      trend: "down",
    },
    {
      rank: 19,
      player: "DeMar DeRozan",
      team: "SAC",
      clutchRating: 71,
      clutchPts: 6.2,
      clutchFgPct: 44.1,
      clutchFtPct: 93.3,
      gameWinners: 1,
      clutchPlusMinus: -3.7,
      biggestMoment:
        "In a must-win game for Sacramento against Phoenix, DeRozan channeled his vintage self in the final four minutes — posting up on the left block, shaking his defender with a series of jab steps, and rising into a silky mid-range jumper that trimmed the deficit to one and briefly threatened to rewrite the game's ending before the Suns answered immediately at the other end.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 68,
      clutchPts: 5.8,
      clutchFgPct: 38.4,
      clutchFtPct: 80.1,
      gameWinners: 1,
      clutchPlusMinus: -5.2,
      biggestMoment:
        "Against the Lakers in a heated Western Conference battle, Irving created his one unambiguous clutch highlight of the week — catching a pass on the right wing with the shot clock expiring, spinning away from his defender with that unmistakable fluid grace, and releasing an off-balance fadeaway that somehow found the bottom of the net to cut Dallas's deficit to two with 2:30 remaining.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "There is simply no one in the NBA right now who wants the ball more — or does more with it — when the game is on the line. SGA's 99 Clutch Rating is built on a season-long body of evidence that borders on the supernatural: six game-winners, a 61.2% clutch field goal percentage that defies the pressure of the moment, and a staggering +14.2 clutch plus-minus that tells you Oklahoma City is effectively a different team when he's operating in those final five minutes. The MVP front-runner has turned late-game basketball into something close to a personal art form, reading defenses at full speed with an almost eerie calm that makes his defenders look like they're playing a step behind. The Thunder are the league's best team for many reasons, but Shai's clutch mastery is the heartbeat of every close-game victory they've accumulated on their march toward the league's best record.",
  },
  worstInClutch: {
    player: "Kyrie Irving",
    team: "DAL",
    description:
      "Look, nobody questions whether Kyrie Irving has the talent to be the most unguardable closer in basketball — the man's handle is literally illegal in 11 states, and his fingerroll is a UNESCO World Heritage artifact. The problem is that this season, the basketball gods appear to be testing him, because his -5.2 clutch plus-minus and a 38.4% clutch field goal percentage suggest that something goes sideways the moment the scoreboard shows the final five minutes. Opposing coaches have reportedly started ordering extra coffee when Kyrie is bringing the ball up in crunch time, because the entertainment value of watching him attempt three consecutive contested pull-up threes is apparently excellent for morale. We believe in Kyrie. We believe in the fadeaway. We are just patiently waiting for the rest of the statistics to catch up to the mythology.",
  },
  weeklyHighlight:
    "The week of April 20–26 delivered enough late-game chaos to fill a highlight reel for the ages, and at the center of it all was Paolo Banchero's stunning declaration of arrival in Detroit. With the Magic clinging to a one-point lead and the Pistons' entire playoff seeding on the line, Banchero did not flinch — not once, not even slightly. His mid-range dagger over Cunningham with 18 seconds remaining will be looped on NBA social media for weeks. But the week's broader clutch narrative was about contrast and consequence. SGA continued his quiet, suffocating domination of late-game situations — six game-winners this season, another masterclass against Denver — while Victor Wembanyama announced loudly that blocked shots and fast-break dunks in the closing minute are absolutely part of his closing repertoire, whether anyone asked or not. Damian Lillard's 32-footer against Utah was the kind of shot that makes Portland fans simultaneously grateful and emotionally exhausted, and LeBron's baby hook over Jaren Jackson Jr. at 41 years of age remains something science has yet to fully explain. On the darker end of the ledger, Kyrie Irving's clutch struggles continued to confound everyone who has watched him casually dismantle defenders in practice, and Joel Embiid's Philadelphia experiment in late-game execution remained a work in progress that is best described as 'hopeful with significant room for growth.' The playoff race is tightening, the stakes are rising, and the clutch moments are getting bigger — which means the next seven days promise to be even more spectacular.",
};