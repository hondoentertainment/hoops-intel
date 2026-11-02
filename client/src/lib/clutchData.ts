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
  generatedDate: "November 2, 2026",
  weekLabel: "Week of November 2–8, 2026",
  players: [
    {
      rank: 1,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 58.3,
      clutchFtPct: 91.7,
      gameWinners: 2,
      clutchPlusMinus: +14.2,
      biggestMoment:
        "With the Lakers trailing Toronto by three and 2:11 on the clock, LeBron caught a Darius Garland drive-and-kick on the left wing, pump-faked Siakam into the air, and converted a three-point play the hard way — finishing through contact and drilling the free throw to flip a nine-point fourth-quarter deficit into a Lakers lead they never relinquished. The sequence lasted eleven seconds and ended the game as a competitive event.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 97,
      clutchPts: 8.8,
      clutchFgPct: 54.5,
      clutchFtPct: 94.1,
      gameWinners: 1,
      clutchPlusMinus: +11.6,
      biggestMoment:
        "Curry received a Draymond Green skip-pass at the top of the arc with 1:43 remaining and the Clippers within two, rose over Klay Thompson's outstretched contest, and buried a corner-to-corner pull-up three that served as both dagger and punctuation on his 36-point night — the shot dropped through the net before the Chase Center crowd had finished inhaling.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 94,
      clutchPts: 7.6,
      clutchFgPct: 51.2,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: +9.8,
      biggestMoment:
        "With Orlando cutting Boston's lead to four in the final three minutes, Tatum caught a curl off a Jaylen Brown flare screen, shook Franz Wagner off a hesitation dribble at the elbow, and buried a mid-range jumper while drawing the foul — a three-point play that sealed the road win and confirmed that Tatum's late-game mid-range has become one of the Eastern Conference's most dependable weapons.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Cam Thomas",
      team: "BRK",
      clutchRating: 91,
      clutchPts: 7.2,
      clutchFgPct: 49.1,
      clutchFtPct: 92.3,
      gameWinners: 1,
      clutchPlusMinus: +8.4,
      biggestMoment:
        "With Brooklyn clinging to a two-point road lead and the shot clock winding to four, Thomas created off the dribble from the right hash — crossing over twice before sinking a contested floater over a closing defender — then followed it immediately with his third steal of the fourth quarter, sprinting the length of the floor and finishing with his left hand to put the Nets up seven with under a minute remaining.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 96,
      clutchPts: 8.1,
      clutchFgPct: 55.6,
      clutchFtPct: 95.2,
      gameWinners: 2,
      clutchPlusMinus: +12.1,
      biggestMoment:
        "SGA's most defining clutch sequence of the week came in Oklahoma City's Thursday road test in Memphis, where he drew five consecutive fouls in the final 3:40, converted nine of ten free throws, and personally outscored the Grizzlies 11-to-4 in the closing stretch — a master class in controlled aggression that left Memphis with no answer and no timeout remaining.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 93,
      clutchPts: 6.9,
      clutchFgPct: 60.0,
      clutchFtPct: 78.6,
      gameWinners: 1,
      clutchPlusMinus: +10.3,
      biggestMoment:
        "Jokic executed the single most aesthetically complete clutch possession of the week in Denver's Wednesday win over Minnesota, receiving a post entry with 1:28 left, reading Anthony Edwards' over-aggressive hedge, firing a no-look skip pass to Michael Porter Jr. in the corner, then — before the net had stopped moving — was already positioned for the defensive rebound that ended the Timberwolves' final possession.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 92,
      clutchPts: 8.3,
      clutchFgPct: 47.8,
      clutchFtPct: 90.5,
      gameWinners: 1,
      clutchPlusMinus: +7.9,
      biggestMoment:
        "Mitchell's Tuesday closing sequence against Indiana was built on sheer will — he scored Cleveland's final nine points of the game, including a pull-up jumper from 22 feet with the shot clock expiring and a Pacers defender draped across him, a shot that so thoroughly broke Indiana's defensive spirit that their final two possessions looked like a team that had already conceded.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Luka Doncic",
      team: "DAL",
      clutchRating: 90,
      clutchPts: 7.8,
      clutchFgPct: 45.5,
      clutchFtPct: 85.7,
      gameWinners: 1,
      clutchPlusMinus: +6.2,
      biggestMoment:
        "In Dallas's overtime thriller against Phoenix on Friday, Doncic isolated Devin Booker at the top of the key with 34 seconds left in OT, drove left into traffic, and converted an and-one through three bodies — rising on the free throw line with the calm of someone taking a practice shot in an empty gym before converting to put the Mavericks ahead for good.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 89,
      clutchPts: 7.5,
      clutchFgPct: 46.2,
      clutchFtPct: 87.5,
      gameWinners: 1,
      clutchPlusMinus: +5.7,
      biggestMoment:
        "Booker's signature moment came in Phoenix's Wednesday win over Sacramento, when he caught a screen from Kevin Durant at the left elbow with 1:52 remaining, pump-faked De'Aaron Fox into a foul, and converted both free throws before sealing the possession with a steal on the ensuing inbound — three clutch actions inside 12 seconds that swung a two-possession game in Phoenix's favor.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Kevin Durant",
      team: "PHX",
      clutchRating: 88,
      clutchPts: 6.4,
      clutchFgPct: 52.9,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: +5.1,
      biggestMoment:
        "Durant's most clutch contribution this week was architectural rather than theatrical — in the final 4:30 of the Sacramento game, he executed four consecutive drop-step post moves that drew fouls, converted seven of eight resulting free throws, and never once required a contested jumper, demonstrating that at this stage of his career his clutch value is measured in points manufactured rather than shots engineered.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 86,
      clutchPts: 7.1,
      clutchFgPct: 43.3,
      clutchFtPct: 80.0,
      gameWinners: 0,
      clutchPlusMinus: +3.4,
      biggestMoment:
        "Edwards' Wednesday fourth quarter against Denver was the most volatile clutch performance of the week — he went 3-for-4 in the first two minutes of clutch time with back-to-back pull-up threes, then went scoreless on four straight possessions before attempting a step-back off-balance three with three seconds on the shot clock that glanced off the back iron, leaving Jokic to end the game on his terms.",
      trend: "down",
    },
    {
      rank: 12,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 85,
      clutchPts: 6.2,
      clutchFgPct: 48.6,
      clutchFtPct: 93.8,
      gameWinners: 1,
      clutchPlusMinus: +4.8,
      biggestMoment:
        "Haliburton authored the week's most efficient clutch assist line in Indiana's Thursday home win over Charlotte, distributing seven clutch-time assists without a single turnover — his most consequential pass was a bounce pass threaded between two defenders to Benedict Mathurin cutting baseline with 58 seconds left that converted into the go-ahead and-one.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 84,
      clutchPts: 7.9,
      clutchFgPct: 41.7,
      clutchFtPct: 88.9,
      gameWinners: 0,
      clutchPlusMinus: +2.6,
      biggestMoment:
        "Lillard's Friday performance against Chicago illustrated both his ceiling and his current limitations — he hit a step-back three from 29 feet with 1:15 remaining to cut Chicago's lead to one, a shot that drew gasps from the United Center crowd, then immediately gave it back by having a second consecutive step-back intercepted by Coby White, who converted the other way to restore the two-possession margin.",
      trend: "down",
    },
    {
      rank: 14,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 83,
      clutchPts: 6.7,
      clutchFgPct: 44.4,
      clutchFtPct: 90.9,
      gameWinners: 0,
      clutchPlusMinus: +3.1,
      biggestMoment:
        "Young's most memorable clutch sequence this week came in Atlanta's Monday overtime win over Washington — he absorbed a hard foul driving left at 1:08 of OT, walked to the line with the crowd already celebrating prematurely, and converted both free throws before directing the defensive scheme that held Washington scoreless on the final two possessions.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 82,
      clutchPts: 5.9,
      clutchFgPct: 47.1,
      clutchFtPct: 91.7,
      gameWinners: 0,
      clutchPlusMinus: +2.8,
      biggestMoment:
        "Brunson quietly authored the week's most efficient clutch four minutes in New York's Tuesday home win over Miami, going 4-for-5 from the field in the closing stretch with all four makes coming on mid-range pull-ups that suggested he's simply dialed into a shot selection that defenses haven't found an answer for — workmanlike, unfussy, and completely effective.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 79,
      clutchPts: 5.4,
      clutchFgPct: 42.9,
      clutchFtPct: 84.6,
      gameWinners: 0,
      clutchPlusMinus: +1.9,
      biggestMoment:
        "Cunningham's defining moment this week wasn't a made shot but a read — with Detroit trailing by one and 1:07 remaining in Wednesday's road game at New Orleans, he drove baseline, drew the double-team, and made the extra pass to Ausar Thompson in the corner for the go-ahead three, then guided a defensive possession that secured the win and pointed toward the kind of orchestral clutch role that will define his prime.",
      trend: "up",
    },
    {
      rank: 17,
      player: "Zion Williamson",
      team: "NOP",
      clutchRating: 75,
      clutchPts: 5.8,
      clutchFgPct: 53.8,
      clutchFtPct: 68.4,
      gameWinners: 0,
      clutchPlusMinus: -1.2,
      biggestMoment:
        "Zion's Wednesday clutch showing was a split-screen study — he converted three consecutive post-up baskets in the opening two minutes of clutch time on 100% efficiency, then went to the line four times in the final 90 seconds and converted just two of four, leaving enough margin for Cunningham's heist to succeed and illustrating why his free-throw percentage remains the most consequential unresolved question in New Orleans.",
      trend: "down",
    },
    {
      rank: 18,
      player: "James Harden",
      team: "LAC",
      clutchRating: 72,
      clutchPts: 4.8,
      clutchFgPct: 38.5,
      clutchFtPct: 87.5,
      gameWinners: 0,
      clutchPlusMinus: -2.7,
      biggestMoment:
        "Harden's most consequential clutch action of the week against Golden State was a 44-second possession in which he drove, retreated, dribbled twice through his legs, drove again, retreated again, and ultimately launched a low-percentage mid-range fallaway with two seconds on the shot clock that missed everything — a sequence that Curry later described in his postgame remarks as 'his chance to close,' which was, it must be said, generous.",
      trend: "down",
    },
    {
      rank: 19,
      player: "Bam Adebayo",
      team: "MIA",
      clutchRating: 69,
      clutchPts: 4.1,
      clutchFgPct: 40.0,
      clutchFtPct: 72.7,
      gameWinners: 0,
      clutchPlusMinus: -3.5,
      biggestMoment:
        "Adebayo's Tuesday trip to Madison Square Garden produced the week's most painful clutch cameo — a tip-in opportunity with 1:24 remaining and Miami down one that he controlled cleanly off the glass, gathered under the basket, and rolled off the back of the rim with no defensive contact, an outcome so cosmically cruel that the MSG crowd momentarily fell silent before exploding in collective relief.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 66,
      clutchPts: 5.2,
      clutchFgPct: 35.7,
      clutchFtPct: 75.0,
      gameWinners: 0,
      clutchPlusMinus: -4.8,
      biggestMoment:
        "Morant's Thursday clutch appearance against OKC featured the week's most athletically impressive miss — a baseline spin that generated genuine separation from his defender, a vertical explosion that cleared the paint, and a finger-roll that kissed the top of the backboard before caroming out of bounds, producing an expression from Morant that communicated, more articulately than any postgame quote could, that the basketball gods are occasionally indifferent to style points.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "LeBron James",
    team: "LAL",
    description:
      "LeBron James is this week's Clutch King for the simplest possible reason: when the game was on the line against Toronto on Sunday night, he didn't just take over — he engineered a reversal. Down nine in the fourth quarter of the most-watched game on the slate, LeBron scored 14 consecutive points across a seven-minute stretch that included a three-point play through contact, a pull-up jumper over a scrambling Siakam, and two composed free throws with 38 seconds remaining. What separates LeBron's clutch profile from every other player on this list is the completeness of his late-game toolkit — he can get to the line, create for others, post up smaller defenders, and hit from distance, which means defenses cannot plan for him, only react to him. At 41 years old, he is still the most contextually intelligent closer in the NBA, and this week was a reminder that narrative arc and individual greatness are not always separate categories.",
  },
  worstInClutch: {
    player: "Ja Morant",
    team: "MEM",
    description:
      "Look, nobody questions Ja Morant's athleticism — the man is capable of plays that defy both physics and reasonable expectation. The problem this week is that the basketball, which is famously indifferent to human feelings, did not cooperate. Morant posted the week's worst clutch plus-minus at -4.8 across three fourth-quarter appearances, going 5-for-14 from the field in clutch situations and converting just three of four free throws in a week when SGA was going 9-for-10 from the line in the same scenarios. His Thursday sequence against Oklahoma City — featuring that geometrically impressive finger-roll that somehow found the one precise angle where it could hit the backboard and exit stage right — was the week's defining image of clutch ambition outpacing clutch execution. Memphis needs Ja to start converting the extraordinary chances his athleticism creates, because right now he's generating first-rate opportunities and third-rate outcomes.",
  },
  weeklyHighlight:
    "The week of November 2–8 established an early-season clutch hierarchy that feels less like a prediction and more like a declaration. LeBron James authored the week's defining closing sequence on Sunday night at Crypto.com Arena, turning a nine-point Toronto lead into a Lakers win through sheer fourth-quarter force of will — the kind of performance that still, two decades into his career, manages to feel both inevitable and astonishing. But the week's most intriguing clutch subplot belonged to Cam Thomas, whose three-steal, 28-point road masterpiece in Brooklyn's upset win confirmed that the Nets have found their late-game identity in the most unexpected corner of their rebuild. Stephen Curry's continuation of his 77-point two-night stretch into composed clutch-time execution against the Clippers — dropping a dagger three over a fully extended Klay Thompson with the game hanging in the balance — was equal parts dominant and elegiac. Meanwhile, the week's most troubling clutch trend lines ran through Memphis and Los Angeles: Ja Morant and James Harden both produced high-possession, low-conversion clutch profiles that their respective teams cannot afford to sustain. Harden's 44-second possession against Golden State that ended in a low-percentage fallaway may become the week's most-discussed late-game sequence for all the wrong reasons — a reminder that shot-clock depletion is not the same thing as shot creation. SGA's Friday dismantling of Memphis through free-throw manufacturing represents the week's most underrated closing performance, and the clutch gap between Oklahoma City and the rest of the Western Conference's mid-tier is growing with every fourth quarter he controls.",
};