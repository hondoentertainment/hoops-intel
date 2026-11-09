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
  generatedDate: "November 9, 2026",
  weekLabel: "Week of November 9–15, 2026",
  players: [
    {
      rank: 1,
      player: "Jimmy Butler",
      team: "MIA",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 92.3,
      gameWinners: 3,
      clutchPlusMinus: 14.6,
      biggestMoment:
        "With Miami trailing Sacramento by three and 38 seconds left, Butler caught a curl off a Bam screen, pump-faked Domantas Sabonis into the air, and drew the foul — sinking both free throws before stripping Fox on the ensuing possession to seal the road win. It was vintage Butler: ugly, willed, and completely irreversible.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Joel Embiid",
      team: "PHI",
      clutchRating: 97,
      clutchPts: 8.8,
      clutchFgPct: 51.7,
      clutchFtPct: 88.9,
      gameWinners: 2,
      clutchPlusMinus: 12.3,
      biggestMoment:
        "Hobbled by a knee he had no business playing on, Embiid posted up Nikola Vucevic with 2:14 left and Chicago clinging to a two-point deficit — spun baseline, absorbed contact, and converted the and-one that broke the Bulls' spirit. The fact that he limped to the free-throw line and drained it without hesitation made the moment feel almost theatrical.",
      trend: "up",
    },
    {
      rank: 3,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 96,
      clutchPts: 8.1,
      clutchFgPct: 50.0,
      clutchFtPct: 79.4,
      gameWinners: 2,
      clutchPlusMinus: 11.8,
      biggestMoment:
        "Detroit had pulled within two on a Duren putback with 1:48 remaining when LeBron caught the inbound, surveyed the entire halfcourt, and hit Austin Reaves cutting backdoor for the layup before anyone in Little Caesars Arena had time to exhale. The sequence — read, pass, basket — took four seconds and functionally ended the game.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 94,
      clutchPts: 7.6,
      clutchFgPct: 48.8,
      clutchFtPct: 85.7,
      gameWinners: 2,
      clutchPlusMinus: 10.2,
      biggestMoment:
        "In a Thursday night tightrope walk against Indiana that the box score never adequately captured, Tatum drilled a step-back three over Pascal Siakam's outstretched hand with the shot clock dying and Boston up one — a shot so casually devastating that the Celtics' bench reacted before the ball reached its apex. The Pacers never recovered emotionally from that moment.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "De'Aaron Fox",
      team: "SAC",
      clutchRating: 91,
      clutchPts: 8.3,
      clutchFgPct: 46.5,
      clutchFtPct: 83.3,
      gameWinners: 1,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Despite the week's most punishing individual result — Butler stealing the ball from him with 18 seconds left in a game Fox had spent three quarters trying to personally rescue — his 11 clutch points across two games this week confirm that Sacramento's late-game engine remains operational even when the organization around him is not.",
      trend: "down",
    },
    {
      rank: 6,
      player: "Luka Doncic",
      team: "DAL",
      clutchRating: 90,
      clutchPts: 7.9,
      clutchFgPct: 47.1,
      clutchFtPct: 80.0,
      gameWinners: 1,
      clutchPlusMinus: 9.4,
      biggestMoment:
        "With the shot clock at two and Dallas nursing a three-point lead against Oklahoma City on Wednesday, Luka crossed half-court, pulled up from 29 feet, and drained a three that made the American Airlines Center crowd erupt with the specific joy of people who have learned not to be surprised by this. The Thunder had no timeout left and no answer.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 88,
      clutchPts: 7.2,
      clutchFgPct: 45.5,
      clutchFtPct: 84.6,
      gameWinners: 1,
      clutchPlusMinus: 8.7,
      biggestMoment:
        "Edwards drove baseline against Utah's Keyonte George with Minnesota up one and 90 seconds left, rose, absorbed a push-off foul from the help defender, and converted both free throws while trash-talking to no one in particular — which is exactly the kind of unhinged confidence that separates closers from scorers. The two points felt more like six.",
      trend: "up",
    },
    {
      rank: 8,
      player: "James Harden",
      team: "LAC",
      clutchRating: 86,
      clutchPts: 6.8,
      clutchFgPct: 44.0,
      clutchFtPct: 91.7,
      gameWinners: 1,
      clutchPlusMinus: 7.3,
      biggestMoment:
        "Harden's most significant clutch contribution came not with a bucket but with a crossover — a between-the-legs hesitation on Tuesday that left his defender flat-footed long enough to draw the fourth foul on Golden State's Draymond Green with 3:40 left. The free throws followed, the lead held, and the Clippers moved to 3-7 without anyone quite understanding how.",
      trend: "up",
    },
    {
      rank: 9,
      player: "Tyrese Maxey",
      team: "PHI",
      clutchRating: 85,
      clutchPts: 6.5,
      clutchFgPct: 46.2,
      clutchFtPct: 88.0,
      gameWinners: 1,
      clutchPlusMinus: 8.1,
      biggestMoment:
        "With Chicago's Coby White cooking in the final four minutes and the Sixers' lead trimmed to one, Maxey took a handoff from Embiid on the wing, rejected the screener entirely, and fired a stepback mid-range jumper that rattled in off the back iron at the most important possible moment. It wasn't pretty — it never is with Maxey in the clutch — but the scoreboard didn't care.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 84,
      clutchPts: 7.1,
      clutchFgPct: 43.8,
      clutchFtPct: 86.4,
      gameWinners: 1,
      clutchPlusMinus: 6.9,
      biggestMoment:
        "Mitchell's Thursday night gem against New York ended on a pull-up floater over Karl-Anthony Towns's outstretched arm with 11 seconds left and Cleveland down one — a shot he has made so many times in so many flavors that the Cavaliers' coaching staff practically has a binder on the entry sequence. His 14 clutch-window points that night were the most by any Eastern Conference player all week.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 83,
      clutchPts: 6.9,
      clutchFgPct: 42.3,
      clutchFtPct: 90.2,
      gameWinners: 0,
      clutchPlusMinus: 5.4,
      biggestMoment:
        "SGA's week was defined not by a single shot but by a 7-minute clutch stretch against Dallas on Wednesday in which he accounted for 10 of Oklahoma City's 12 points and held Luka Doncic to two touches. The Thunder ultimately lost on that Luka three, but SGA's individual dominance in the game's final act was total.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 81,
      clutchPts: 6.4,
      clutchFgPct: 50.0,
      clutchFtPct: 68.1,
      gameWinners: 0,
      clutchPlusMinus: 3.8,
      biggestMoment:
        "Against Boston on Sunday, with Milwaukee down eight and time evaporating, Giannis single-handedly sliced that deficit to three with consecutive dunks and a pulled free throw — before the Celtics ran a perfect sideline inbound to restore their cushion. The free-throw line remains the longest distance in basketball for Giannis, but his clutch gravity is still undeniable.",
      trend: "down",
    },
    {
      rank: 13,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 80,
      clutchPts: 6.2,
      clutchFgPct: 44.4,
      clutchFtPct: 87.5,
      gameWinners: 1,
      clutchPlusMinus: 4.6,
      biggestMoment:
        "With Phoenix and San Antonio tied at 109 and the fourth quarter clock showing 48 seconds, Booker called his own number off a simple pick-and-roll, turned the corner, and hit a floating mid-range pull-up over Victor Wembanyama's fingertips — the kind of shot that requires both the courage to take it and the wingspan awareness to understand exactly how to arc it beyond a 7-foot-3 contest.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 78,
      clutchPts: 6.0,
      clutchFgPct: 41.7,
      clutchFtPct: 81.3,
      gameWinners: 1,
      clutchPlusMinus: 3.2,
      biggestMoment:
        "Morant's most defining clutch play this week came on a drive that began at half-court — a full-sprint isolation with 22 seconds left against New Orleans and Memphis down one — where he finished through two defenders with his left hand and drew the foul for a three-point play that left the Smoothie King Center completely silent.",
      trend: "up",
    },
    {
      rank: 15,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 76,
      clutchPts: 5.8,
      clutchFgPct: 38.5,
      clutchFtPct: 92.9,
      gameWinners: 0,
      clutchPlusMinus: 2.7,
      biggestMoment:
        "Young orchestrated a 9-0 Atlanta run in the final 3:30 against Charlotte entirely from behind the arc — two threes and a deft lob to Clint Capela that required reading a scrambling Hornets defense in real time. His 8 clutch-window points were the team's only offense in that stretch, which is simultaneously impressive and mildly alarming for an organization expecting more depth.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 74,
      clutchPts: 5.5,
      clutchFgPct: 40.0,
      clutchFtPct: 85.7,
      gameWinners: 0,
      clutchPlusMinus: 1.9,
      biggestMoment:
        "In Cleveland on Thursday, Brunson caught an isolation call with 1:06 left, backed Mitchell down into the paint with three hard dribbles, and shot a leaning one-footer that hit the front of the rim and fell off — the kind of moment that separates his clutch ceiling from the elite tier this week. He converted his next three free throws, but the game had already slipped past recovery.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 72,
      clutchPts: 5.1,
      clutchFgPct: 42.9,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: 4.1,
      biggestMoment:
        "Garland's quiet but efficient late-game work as Mitchell's floor-spacing partner — hitting two of three clutch-time threes across Cleveland's two wins this week — reflects a player who has learned to maximize his clutch role without overreaching for the closing moment that belongs to someone else on his roster.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 69,
      clutchPts: 4.9,
      clutchFgPct: 37.5,
      clutchFtPct: 76.9,
      gameWinners: 0,
      clutchPlusMinus: -1.3,
      biggestMoment:
        "Banchero's most representative clutch moment this week was a posting of Brooklyn's Nic Claxton with two minutes left and Orlando up three — a smart, physical call that produced two free throws and preserved the lead. He's not yet manufacturing the spectacular, but he's earning the ball in the right situations and doing something competent with it, which is real progress for a 23-year-old closer-in-training.",
      trend: "up",
    },
    {
      rank: 19,
      player: "Zach LaVine",
      team: "CHI",
      clutchRating: 66,
      clutchPts: 5.3,
      clutchFgPct: 35.7,
      clutchFtPct: 78.6,
      gameWinners: 0,
      clutchPlusMinus: -3.6,
      biggestMoment:
        "LaVine kept Chicago legitimately frightening against Philadelphia in the fourth quarter, scoring 7 clutch-window points on successive isolation possessions that reduced Embiid's comfort level visibly. That he ultimately couldn't close the game is beside the point — he made the Sixers earn every possession, and that competitive quality is exactly what his ranking reflects.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Brandon Ingram",
      team: "NOP",
      clutchRating: 63,
      clutchPts: 4.4,
      clutchFgPct: 33.3,
      clutchFtPct: 72.7,
      gameWinners: 0,
      clutchPlusMinus: -5.2,
      biggestMoment:
        "Ingram's late-game iso against Memphis on Friday was a 26-foot fadeaway that grazed the backboard and produced the specific facial expression of a man who absolutely meant to do that. His 4-of-12 clutch-time shooting this week is the most charitable interpretation of a player whose talent and his late-game execution are having a prolonged disagreement.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Jimmy Butler",
    team: "MIA",
    description:
      "Jimmy Butler doesn't just perform in clutch situations — he seems to metabolize pressure in a way that makes him chemically different from other basketball players in the final minutes of close games. His 98 Clutch Rating this week is the product of a 54.2% field-goal percentage when the game is on the line, three game-winners in eleven days, and a +14.6 clutch plus-minus that suggests Miami doesn't just survive with Butler in late-game situations — it actively dominates them. The Sacramento win on Sunday was the definitive exhibit: a road fourth-quarter comeback that Butler engineered not with highlight-reel explosiveness but with the specific, ruthless intelligence of someone who has studied these moments so intently he now controls them. At 36 years old, in a season where the Heat's overall record raises more questions than answers, Butler remains the NBA's most reliable human clutch mechanism.",
  },
  worstInClutch: {
    player: "Brandon Ingram",
    team: "NOP",
    description:
      "Brandon Ingram is a genuinely gifted offensive player who, in the final five minutes of close games this week, appeared to be operating under the impression that the basket had personally wronged him. A 33.3% clutch field-goal percentage, zero game-winners, and a -5.2 plus-minus in tight situations suggests that the late-game version of Ingram and the first-three-quarters version of Ingram have entered into some kind of non-compete agreement. To be fair to him — and we are legally required to be slightly fair — the shots he's taking aren't always bad shots, they're just shots that go in less often than the law of large numbers would predict for a player of his caliber, which is somehow more unsettling. New Orleans needs a closer; they currently have an extremely talented man who is working through some things.",
  },
  weeklyHighlight:
    "The week of November 9–15 produced a defining early-season argument about what clutch performance actually means in 2026 — and Jimmy Butler answered it emphatically. The Miami Heat, improbable road warriors despite a 4-6 record that suggests organizational turbulence, twice converted fourth-quarter deficits into wins this week on the specific gravitational pull of Butler's late-game authority. His strip of De'Aaron Fox with 18 seconds left in Sacramento was the moment of the week: not spectacular, not acrobatic, just perfectly timed and absolutely decisive. Joel Embiid's knee-soreness fourth quarter in Chicago ran it close — a seven-foot man playing hurt in a road environment and somehow playing better as the stakes rose is exactly the kind of narrative the clutch conversation was built for. What made this week particularly rich was the generational spread of its clutch contributors: LeBron James at 41 engineering a road closing sequence against Detroit with the efficiency of someone who has done this approximately 400 times; Anthony Edwards at 25 converting free throws with the unearned arrogance of someone who has not yet learned to feel pressure; and Donovan Mitchell quietly dropping 14 clutch-window points on New York on Thursday night while the basketball world's attention was pointed elsewhere. The week's lowest note belonged to Brandon Ingram, whose late-game shot selection has become a philosophical inquiry into the nature of confidence, and to Jalen Brunson, whose missed one-footer in Cleveland with the game in the balance was the kind of shot that gets studied in film sessions with the lights dimmed and no one making eye contact. The clutch hierarchy is sharpening. Butler sits at its summit, Embiid is rising, and somewhere in the Western Conference, Luka Doncic is about to remind everyone what a 29-foot pull-up looks like when the moment actually matters.",
};