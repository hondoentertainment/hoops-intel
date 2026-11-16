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
  generatedDate: "November 16, 2026",
  weekLabel: "Week of November 16–22, 2026",
  players: [
    {
      rank: 1,
      player: "Luka Doncic",
      team: "LAL",
      clutchRating: 99,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 91.3,
      gameWinners: 4,
      clutchPlusMinus: 18.6,
      biggestMoment:
        "With the Lakers trailing by three in Phoenix with 90 seconds left, Luka crossed over Devin Booker into a step-back three that silenced the Footprint Center and swung the game's momentum irrevocably. He then sealed the win with two ice-cold free throws after drawing a foul on a drive that nobody in the building could stop.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 97,
      clutchPts: 8.7,
      clutchFgPct: 51.8,
      clutchFtPct: 95.1,
      gameWinners: 3,
      clutchPlusMinus: 15.2,
      biggestMoment:
        "In Oklahoma City's road win at Sacramento, SGA orchestrated a 9-0 fourth-quarter run almost entirely by himself — a mid-range fadeaway, a pull-up three, and two earned free throws that he converted without so much as a blink. The Kings never recovered, and SGA walked off the floor looking like a man who had already decided how the night would end.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 95,
      clutchPts: 7.9,
      clutchFgPct: 50.3,
      clutchFtPct: 88.7,
      gameWinners: 3,
      clutchPlusMinus: 14.1,
      biggestMoment:
        "Boston's blowout of Dallas was sealed by a Tatum three-pointer at the shot clock buzzer that pushed the lead to 22 and drew a standing ovation from the TD Garden faithful — a shot so unnecessary yet so emphatic it felt like a signature. His final five-minute stretch included 8 points on three consecutive possessions, turning a close game into a statement.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 93,
      clutchPts: 6.8,
      clutchFgPct: 48.9,
      clutchFtPct: 87.4,
      gameWinners: 2,
      clutchPlusMinus: 16.3,
      biggestMoment:
        "Castle's fourth steal of the night against Utah came with 2:14 remaining and the Spurs clinging to a two-point lead — a read so instinctive and a reaction so electric that the bench erupted before he even finished the transition layup on the other end. For a 20-year-old, he plays the final minutes like a 10-year veteran who has already seen every trick.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 92,
      clutchPts: 6.2,
      clutchFgPct: 47.6,
      clutchFtPct: 82.1,
      gameWinners: 2,
      clutchPlusMinus: 17.8,
      biggestMoment:
        "With San Antonio up one and Utah racing toward the rim for a potential go-ahead layup, Wembanyama materialized from the weak side and swatted the attempt into the third row — a block that was equal parts athleticism and pure intimidation. His presence in the final two minutes is becoming one of the league's most destabilizing defensive weapons.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 90,
      clutchPts: 7.1,
      clutchFgPct: 49.5,
      clutchFtPct: 91.8,
      gameWinners: 2,
      clutchPlusMinus: 11.4,
      biggestMoment:
        "Towns pulled down his 17th rebound of the night — an offensive board in overtime against Toronto that reset a possession the Knicks had no business recovering — and converted the putback through contact to put New York up three with 48 seconds left. Madison Square Garden sounded like a pressure vessel that had finally been allowed to release.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Dylan Harper",
      team: "SAS",
      clutchRating: 89,
      clutchPts: 7.3,
      clutchFgPct: 46.1,
      clutchFtPct: 84.6,
      gameWinners: 2,
      clutchPlusMinus: 13.7,
      biggestMoment:
        "Harper posted 11 of his 31 points in the final five minutes of San Antonio's road win, including a dagger mid-range jumper off a pick-and-roll that left Utah's defense entirely scrambled. His composure in those moments — no hesitation, no second-guessing — is the calling card of a player who has already decided clutch time is his time.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Jaylen Brown",
      team: "PHI",
      clutchRating: 87,
      clutchPts: 6.9,
      clutchFgPct: 48.3,
      clutchFtPct: 86.2,
      gameWinners: 1,
      clutchPlusMinus: 12.5,
      biggestMoment:
        "Brown buried a corner three over Indiana's outstretched defender with 1:37 left to extend Philadelphia's lead to seven, the kind of shot that officially closed a game that had been competitive for three-and-a-half quarters. His back-to-back clutch buckets in the fourth were enough to let the Sixers' bench breathe for the first time all night.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Amen Thompson",
      team: "HOU",
      clutchRating: 85,
      clutchPts: 6.4,
      clutchFgPct: 50.7,
      clutchFtPct: 79.3,
      gameWinners: 1,
      clutchPlusMinus: 14.9,
      biggestMoment:
        "In Houston's demolition of Washington, Thompson punctuated his 26-point night with a thunderous alley-oop dunk in the final three minutes that turned a blowout into an exclamation point and had the Toyota Center crowd reaching for their phones before his feet hit the floor. It was the kind of emphatic moment that reminded the league that Thompson's athleticism operates on a different frequency.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Darius Garland",
      team: "LAC",
      clutchRating: 83,
      clutchPts: 6.1,
      clutchFgPct: 46.8,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: 9.7,
      biggestMoment:
        "Garland threaded a no-look bounce pass through Charlotte's collapsing defense for an open three in the final four minutes that felt like a reminder of exactly why the Clippers traded for him in the first place. He then hit the ensuing free throws with the game still within two possessions and the Clippers still very much in danger.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Tyrese Maxey",
      team: "PHI",
      clutchRating: 81,
      clutchPts: 5.8,
      clutchFgPct: 44.2,
      clutchFtPct: 92.4,
      gameWinners: 1,
      clutchPlusMinus: 10.3,
      biggestMoment:
        "Maxey's hesitation dribble into a floater over Indiana's center with 3:05 remaining pushed Philadelphia's lead to five and effectively ended the Pacers' last credible comeback attempt. The shot — mid-range, off-balance, and entirely voluntary — is the kind only Maxey attempts, and somehow, only Maxey makes look routine.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Kevin Durant",
      team: "HOU",
      clutchRating: 80,
      clutchPts: 5.6,
      clutchFgPct: 52.1,
      clutchFtPct: 90.0,
      gameWinners: 1,
      clutchPlusMinus: 8.4,
      biggestMoment:
        "Durant's turnaround jumper in traffic against Washington's hapless defense was textbook — the slight lean, the perfect release, the net-only result — and it illustrated why even at this stage of his career he remains one of the most unguardable late-game scorers in NBA history. It was his 11th career game-winner, and it looked exactly as effortless as the first.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 78,
      clutchPts: 5.2,
      clutchFgPct: 47.9,
      clutchFtPct: 73.1,
      gameWinners: 1,
      clutchPlusMinus: 7.6,
      biggestMoment:
        "LeBron's chest-pass to a cutting teammate for a wide-open dunk in Phoenix's final two minutes was the kind of play that didn't show up in the box score with appropriate weight — it was the basketball equivalent of a checkmate, and everyone in the building knew it the moment the ball left his hands.",
      trend: "down",
    },
    {
      rank: 14,
      player: "Anthony Davis",
      team: "LAL",
      clutchRating: 76,
      clutchPts: 4.9,
      clutchFgPct: 50.0,
      clutchFtPct: 68.4,
      gameWinners: 0,
      clutchPlusMinus: 9.1,
      biggestMoment:
        "Davis anchored the Lakers' defensive close-out in Phoenix by switching onto Kevin Durant in the final minute and bodying him into a contested, off-balance mid-range that rattled out — a play that preserved the win and reminded everyone that his defensive ceiling is still among the league's absolute best.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Jalen Williams",
      team: "OKC",
      clutchRating: 74,
      clutchPts: 4.7,
      clutchFgPct: 43.6,
      clutchFtPct: 85.7,
      gameWinners: 1,
      clutchPlusMinus: 6.8,
      biggestMoment:
        "Williams delivered a go-ahead three-pointer with 2:41 remaining in Oklahoma City's win at Sacramento that broke a tie and gave the Thunder the breathing room they needed to close things out. It was the kind of secondary-star moment that lets SGA operate freely in the final minute — and the Thunder's depth in clutch situations is quietly becoming a secret weapon.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Donovan Mitchell",
      team: "MIA",
      clutchRating: 71,
      clutchPts: 5.1,
      clutchFgPct: 40.3,
      clutchFtPct: 88.2,
      gameWinners: 0,
      clutchPlusMinus: 4.2,
      biggestMoment:
        "Mitchell pulled Miami within two on the road with a step-back three in the final three minutes of a narrow loss, a moment of individual excellence that temporarily reignited the building before the Heat's late-game execution broke down elsewhere. His shot-making in tight spots remains elite even when the team around him doesn't hold up.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 68,
      clutchPts: 4.4,
      clutchFgPct: 44.8,
      clutchFtPct: 61.3,
      gameWinners: 0,
      clutchPlusMinus: 3.9,
      biggestMoment:
        "Giannis bullied his way to a putback dunk with 90 seconds left to tie a road game Milwaukee would eventually lose in overtime, a play that was unstoppable in every physical sense and yet somehow not enough given what surrounded it. His clutch free-throw numbers remain the one exploitable crack in an otherwise fortress-grade game.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 65,
      clutchPts: 4.8,
      clutchFgPct: 38.9,
      clutchFtPct: 77.8,
      gameWinners: 0,
      clutchPlusMinus: 1.4,
      biggestMoment:
        "Morant's wild floater attempt in the final minute of Memphis's loss to Denver — off two feet, off-angle, and off everything — somehow grazed the rim in a way that felt cruel, the kind of near-miss that defines a week when his clutch efficiency has been trending in the wrong direction. The athleticism is undeniable; the decision-making in those moments is still a work in progress.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 62,
      clutchPts: 4.3,
      clutchFgPct: 37.5,
      clutchFtPct: 80.0,
      gameWinners: 0,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Banchero's fourth-quarter iso against Boston — a smooth, confident drive to the rim that he finished at the line — was textbook execution and bought Orlando another possession in a game they were desperately trying to hold. Unfortunately, the two possessions on either side of it were turnover-ugly, which is the story of his clutch week in a single breath.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Zach LaVine",
      team: "SAC",
      clutchRating: 55,
      clutchPts: 3.9,
      clutchFgPct: 32.1,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: -6.4,
      biggestMoment:
        "LaVine's three-point attempt to cut the deficit to one against Oklahoma City hit the side of the backboard with enough authority that it seemed to surprise even him — a moment that unfortunately crystallized a week in which his pull-up shot selection in the final five minutes has been, to put it charitably, adventurous. The gravity is still there; the execution has been playing hide and seek.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Luka Doncic",
    team: "LAL",
    description:
      "Luka Doncic is simply playing a different game than everyone else when the lights get brightest. His 9.4 clutch points per game lead the entire league, he is shooting 54.2% in those moments — a figure that defies logic given the degree of difficulty on his attempts — and his four game-winners this season already match what most closers produce in a full year. The Phoenix performance this week was the clearest possible evidence: trailing on the road with the game in the balance, Doncic does not adjust, does not panic, and does not negotiate with the moment. He simply takes over, and the basketball world watches.",
  },
  worstInClutch: {
    player: "Zach LaVine",
    team: "SAC",
    description:
      "Zach LaVine is a beautiful basketball player who, through some cosmic misalignment, appears to save his most creative shot selection exclusively for moments when the game is on the line. His 32.1% clutch field goal percentage this week suggests a man who has studied the concept of 'hero ball' as a philosophy rather than a warning, and his -6.4 clutch plus-minus implies that Sacramento is statistically safer when he is simply admiring the play. To his credit, he hits the free throws — so the foundation is there. The rest of the building just needs a little work.",
  },
  weeklyHighlight:
    "The week of November 16–22 delivered some of the most compelling clutch basketball of the young season, anchored by Luka Doncic's masterclass in Phoenix that felt like a coronation more than a road win. With the Lakers tied for the league's best record and Doncic systematically dismantling every late-game defensive scheme Phoenix threw at him, the conversation around the NBA's premier closer is essentially settled — at least for now. But the week's deeper storyline belonged to San Antonio, whose trio of Wembanyama, Castle, and Harper combined to win three consecutive close games with the kind of late-game poise that championship rosters are built on. Castle's four-steal, game-securing performance against Utah was the week's most underrated clutch moment — a 20-year-old playing the fourth quarter like he had already lived it twice. Meanwhile, Karl-Anthony Towns reminded New York that he is capable of being the most important player on the floor when overtime arrives with a bag, and Shai Gilgeous-Alexander quietly posted his third game-winner of the season in Sacramento while the basketball world was still debating whether he belongs in the top tier of closers. The answer, increasingly, is yes. At the other end of the spectrum, Zach LaVine and Giannis Antetokounmpo both had weeks that raised uncomfortable questions — LaVine about shot selection, Giannis about whether the free-throw line will forever be the ceiling on his late-game ceiling. The clutch hierarchy is crystallizing, and the gap between the elite closers and the rest of the field is not narrowing.",
};