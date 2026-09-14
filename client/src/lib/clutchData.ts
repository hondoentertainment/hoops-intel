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
  generatedDate: "September 14, 2026",
  weekLabel: "Week of September 14–20, 2026",
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
      clutchPlusMinus: +18.3,
      biggestMoment:
        "With OKC down one and 3.1 seconds on the clock, SGA caught a baseline inbound, pump-faked Marcus Smart into the stratosphere, and drained a pull-up mid-range over two closing defenders — no timeout, no hesitation, pure will. The arena didn't just erupt; it collectively exhaled as though it had forgotten to breathe for the entire final minute.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 97,
      clutchPts: 8.8,
      clutchFgPct: 51.7,
      clutchFtPct: 88.4,
      gameWinners: 6,
      clutchPlusMinus: +16.9,
      biggestMoment:
        "Trailing by two with forty seconds remaining against Memphis, Wembanyama posted up at the elbow, spun baseline in a single fluid motion that defies biomechanical logic, and converted a left-handed finger roll that kissed glass at the perfect angle — then immediately anchored the defensive end by swatting Jaren Jackson Jr.'s would-be go-ahead attempt into the third row. One possession, both sides of the ball, sealed.",
      trend: "stable",
    },
    {
      rank: 3,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 96,
      clutchPts: 8.1,
      clutchFgPct: 50.3,
      clutchFtPct: 95.8,
      gameWinners: 5,
      clutchPlusMinus: +15.4,
      biggestMoment:
        "Brunson's Game 7 forty-four-point masterpiece already lives in championship lore, but his preseason clutch work has been equally surgical — he drilled a step-back three over a fully-extended defender with the shot clock at one to force overtime against Boston's first unit in a high-stakes scrimmage, a moment so Brunson-coded the Garden crowd didn't even react with surprise, only the deep satisfaction of confirmation.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 7.9,
      clutchFgPct: 49.8,
      clutchFtPct: 91.2,
      gameWinners: 5,
      clutchPlusMinus: +14.7,
      biggestMoment:
        "Fox turned a Spurs four-point deficit into a one-point lead in under ninety seconds of crunch time — a slithering floater in traffic, two converted free throws after drawing a reach-in foul at full speed, and a steal that he immediately converted into a coast-to-coast layup before the opposing defense could even turn around. It was a clutch sequence that felt less like basketball and more like a controlled demolition.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 6.3,
      clutchFgPct: 47.1,
      clutchFtPct: 87.5,
      gameWinners: 3,
      clutchPlusMinus: +11.2,
      biggestMoment:
        "Castle's breakout clutch moment arrived when he read a late-game passing lane with predatory instincts, jumped the entry pass at half-court, and finished the resulting fast break with a two-handed flush that brought the Spurs bench to their feet in unison. The play confirmed what scouts have whispered all preseason: Castle's clutch ceiling has barely been touched.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 89,
      clutchPts: 7.2,
      clutchFgPct: 52.4,
      clutchFtPct: 78.9,
      gameWinners: 3,
      clutchPlusMinus: +10.6,
      biggestMoment:
        "Sengun caught the ball at the right block with Houston down one, absorbed contact from two converging defenders, somehow kept his pivot foot planted through the chaos, and converted an old-fashioned three-point play that gave Houston a lead they never surrendered. It was a display of post-up composure that looked borrowed from a different, slower era — and it worked perfectly.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 86,
      clutchPts: 7.8,
      clutchFgPct: 43.6,
      clutchFtPct: 82.3,
      gameWinners: 4,
      clutchPlusMinus: +7.9,
      biggestMoment:
        "Edwards channeled every ounce of his freight-train athleticism into a drive that started at the three-point line, shed two defenders along the way, and ended with a reverse layup so audacious that the opposing coach reviewed the play just to confirm it was legal. The shot went in, Minnesota led, and Ant pointed at the rim as though issuing it a formal warning about what was still to come.",
      trend: "stable",
    },
    {
      rank: 8,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 84,
      clutchPts: 6.9,
      clutchFgPct: 48.7,
      clutchFtPct: 72.1,
      gameWinners: 2,
      clutchPlusMinus: +6.4,
      biggestMoment:
        "Even in a season trending the wrong direction, Jokic reminded everyone why he once owned this category — his no-look, over-the-shoulder pocket pass to a cutting wing in the final minute created a layup that felt more like a chess move than a basketball play, the kind of decision that arrives fully formed in his mind while most players are still reading the defense.",
      trend: "down",
    },
    {
      rank: 9,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 82,
      clutchPts: 6.5,
      clutchFgPct: 46.2,
      clutchFtPct: 79.4,
      gameWinners: 3,
      clutchPlusMinus: +8.1,
      biggestMoment:
        "LeBron's postseason experience never really powers down — in a close preseason fixture against Golden State, he orchestrated the final two minutes like a conductor who had memorized the score decades ago, finding the right shooter, attacking the right mismatch, and closing the game with a pull-up floater that drew nothing but the back of the net and a standing ovation from both benches.",
      trend: "stable",
    },
    {
      rank: 10,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 80,
      clutchPts: 7.1,
      clutchFgPct: 44.9,
      clutchFtPct: 85.6,
      gameWinners: 3,
      clutchPlusMinus: +5.8,
      biggestMoment:
        "Mitchell absorbed a hard foul on a driving layup attempt with Cleveland down two, hit the floor, bounced back up, and calmly converted both free throws before the adrenaline had finished coursing — then immediately locked up his man defensively on the ensuing possession to preserve the tie. The sequence was a graduate-level clinic in composure under pressure.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 77,
      clutchPts: 5.8,
      clutchFgPct: 43.1,
      clutchFtPct: 88.9,
      gameWinners: 2,
      clutchPlusMinus: +6.2,
      biggestMoment:
        "Haliburton's greatest clutch weapon has always been the pass nobody else sees, and he deployed it with devastating precision — splitting two scrambling defenders with a behind-the-back dime to a rolling big in the final thirty seconds to give Indiana a lead sealed by a defensive stop he personally orchestrated from the point of attack.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Karl-Anthony Towns",
      team: "NYK",
      clutchRating: 75,
      clutchPts: 6.2,
      clutchFgPct: 47.8,
      clutchFtPct: 84.3,
      gameWinners: 2,
      clutchPlusMinus: +5.1,
      biggestMoment:
        "KAT's three-point range transforms closing lineups entirely, and he proved it by stepping into a corner catch-and-shoot with two seconds on the shot clock and the defense already collapsing on Brunson — the ball barely grazed the net on its way through, silent and precise, and New York's lead was suddenly insurmountable with ninety seconds to play.",
      trend: "stable",
    },
    {
      rank: 13,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 73,
      clutchPts: 6.7,
      clutchFgPct: 41.3,
      clutchFtPct: 80.7,
      gameWinners: 2,
      clutchPlusMinus: +3.9,
      biggestMoment:
        "Brown took the ball at the top of the key with Boston needing a basket and four defenders seemingly arranged to prevent exactly that, then drove left with full intention, absorbed the contact, finished with his off hand through a crowd of arms, and got the and-one call that flipped the momentum of the fourth quarter entirely.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 70,
      clutchPts: 5.9,
      clutchFgPct: 42.7,
      clutchFtPct: 77.4,
      gameWinners: 2,
      clutchPlusMinus: +3.4,
      biggestMoment:
        "Banchero took a post-up against a much smaller defender, pump-faked twice until the help defense fully committed, then rose into a mid-post jumper that he's been refining all offseason — the ball dropped straight through with a satisfying authority, giving Orlando a lead and Banchero a meaningful data point in his ongoing argument for becoming the East's next premier closer.",
      trend: "up",
    },
    {
      rank: 15,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 67,
      clutchPts: 5.4,
      clutchFgPct: 40.9,
      clutchFtPct: 82.1,
      gameWinners: 1,
      clutchPlusMinus: +2.7,
      biggestMoment:
        "Cunningham's clutch poise arrived in a moment Detroit genuinely needed it — down three with two minutes left, he engineered three consecutive possessions that resulted in two made baskets and a drawn foul, willing his team back into a tie game through sheer organizational intelligence and an improving mid-range game that defenders can no longer comfortably concede.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 65,
      clutchPts: 6.1,
      clutchFgPct: 39.4,
      clutchFtPct: 91.3,
      gameWinners: 1,
      clutchPlusMinus: -1.2,
      biggestMoment:
        "Booker's free-throw reliability remains elite under any pressure — he knocked down four consecutive clutch free throws while Phoenix's season hung in the balance, his release identical on all four, his expression suggesting he found the moment somewhat unremarkable, which is perhaps the most clutch thing about him.",
      trend: "down",
    },
    {
      rank: 17,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 61,
      clutchPts: 5.7,
      clutchFgPct: 38.2,
      clutchFtPct: 86.7,
      gameWinners: 1,
      clutchPlusMinus: -2.8,
      biggestMoment:
        "Young's floater over a seven-footer in the dying seconds of a tight fourth quarter was an architectural marvel — launched from an angle that made no geometric sense, traveling a parabolic arc that seemed to operate under different physics than the surrounding arena, and dropping through the net to give Atlanta a two-point lead that proved decisive.",
      trend: "stable",
    },
    {
      rank: 18,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 58,
      clutchPts: 5.2,
      clutchFgPct: 37.6,
      clutchFtPct: 89.4,
      gameWinners: 1,
      clutchPlusMinus: -4.1,
      biggestMoment:
        "Dame Time flickered back to life briefly when Lillard caught a hand-off at thirty feet with the shot clock expiring, launched his signature pull-up three without any additional gathering or ceremony, and watched it rattle in through the back iron — a reminder that even a diminished Lillard operating at the margins of his range is still a legitimate problem for opposing defenses.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Zion Williamson",
      team: "NOP",
      clutchRating: 54,
      clutchPts: 5.8,
      clutchFgPct: 51.3,
      clutchFtPct: 61.2,
      gameWinners: 0,
      clutchPlusMinus: -5.6,
      biggestMoment:
        "Zion's clutch story is always a tale of two halves: he gets to the line with terrifying efficiency, drawing fouls on the drive that lesser players couldn't manufacture in open gyms — but the free throws that follow transform the arena into something between a prayer circle and a stress-eating competition, with his 61.2% clutch free-throw rate doing real structural damage to New Orleans' late-game outcomes.",
      trend: "stable",
    },
    {
      rank: 20,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 49,
      clutchPts: 4.9,
      clutchFgPct: 35.8,
      clutchFtPct: 74.6,
      gameWinners: 0,
      clutchPlusMinus: -8.4,
      biggestMoment:
        "Morant's most memorable clutch sequence this week was unfortunately a showcase of what happens when spectacular athleticism outpaces decision-making — a full-speed drive into three defenders that produced a shot-clock violation, followed by an ill-advised fadeaway on the next possession that drew iron and nothing else, gifting the opposing team a possession and momentum that Memphis couldn't recover before the final buzzer.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "SGA doesn't just perform in clutch moments — he metabolizes pressure into something that looks almost serene. His 54.2% clutch field-goal percentage this week is borderline offensive in its efficiency, and his seven game-winners are the most of any player in the league by a margin wide enough to prompt genuine philosophical questions about whether he experiences late-game situations differently than the rest of us do. The +18.3 clutch plus-minus tells the completest story: when the game is on the line, OKC is simply a better team with the ball in his hands, and every opposing coaching staff in the league has the scouting reports to prove it. At 64 wins and counting, the Thunder have built a dynasty on a foundation whose most important stone is a point guard who seems to genuinely enjoy the moments everyone else is trying to survive.",
  },
  worstInClutch: {
    player: "Ja Morant",
    team: "MEM",
    description:
      "Bless Ja Morant's heart — and his vertical leap, his first step, his highlight-reel catalog — but someone needs to gently inform him that the clutch window requires a different operating system than the one currently installed. A 35.8% clutch field-goal percentage, zero game-winners, and a -8.4 plus-minus suggest that Memphis's late-game strategy of 'give Ja the ball and trust the process' may need a second look, possibly a third look, conceivably a complete reimagining. He is, without question, one of the five most electrifying players in basketball — it's just that electricity and accuracy are, it turns out, two separate things, and only one of them counts in the box score when the horn sounds.",
  },
  weeklyHighlight:
    "The week of September 14 delivered a clutch-performance landscape that felt almost curated in its drama. SGA's baseline buzzer-beater against Minnesota's first unit will circulate on social media until at least the actual season begins, a piece of film so clean and purposeful it looked less like a basketball play and more like a proof of concept. Meanwhile, the Spurs' three-headed clutch apparatus — Wembanyama, Fox, and the rapidly ascending Castle — gave San Antonio's coaching staff the kind of closing-lineup flexibility that championship organizations spend years trying to construct. Fox's ninety-second four-point swing against Houston was the week's most complete individual clutch sequence, while Castle's steals-to-slam conversion reinforced why the league spent thirty days recalibrating the guard market around his extension. On the other end of the ledger, Denver's clutch picture grew more complicated with each passing day: Jokic's diminished rating reflects a broader organizational tension that increasingly registers in the margins where championships are actually won and lost. The week's most poignant subplot belonged to Dame Lillard, whose single game-winner carried the unmistakable bittersweet quality of a legend operating past his summit — spectacular enough to remind you what was, not quite reliable enough to obscure what now is. As the preseason window narrows toward opening night, the clutch hierarchy is clarifying with unusual sharpness: OKC and San Antonio have closers who welcome the moment, and the rest of the league is largely still figuring out how to manufacture that.",
};