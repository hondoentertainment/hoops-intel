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
  generatedDate: "October 26, 2026",
  weekLabel: "Week of October 26–1, 2026",
  players: [
    {
      rank: 1,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 99,
      clutchPts: 14.2,
      clutchFgPct: 62.5,
      clutchFtPct: 91.7,
      gameWinners: 1,
      clutchPlusMinus: 18.4,
      biggestMoment:
        "With Denver trailing by two and 38 seconds left in overtime, Jokic caught a lob entry at the elbow, pump-faked a double-team into the air, and converted a soft runner off the glass while drawing the foul — finishing the and-one to put DEN up for good. It was the single most decisive individual sequence of the young season.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Joel Embiid",
      team: "PHI",
      clutchRating: 97,
      clutchPts: 11.8,
      clutchFgPct: 58.3,
      clutchFtPct: 89.5,
      gameWinners: 1,
      clutchPlusMinus: 14.9,
      biggestMoment:
        "Embiid swatted Giannis's would-be go-ahead layup attempt off the backboard with 2:14 remaining — his fourth block of the night — then came back down and posted up Bobby Portis for a go-ahead turnaround jumper that effectively ended Milwaukee's last credible comeback window.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Kevin Durant",
      team: "PHX",
      clutchRating: 96,
      clutchPts: 12.6,
      clutchFgPct: 60.0,
      clutchFtPct: 93.3,
      gameWinners: 1,
      clutchPlusMinus: 13.1,
      biggestMoment:
        "Durant received a cross-court skip pass from Devin Booker with Golden State pressing in the final 90 seconds and buried a mid-post pull-up jumper over Kevon Looney with the precision of a man who has been doing this for 20 years. The bucket pushed Phoenix's lead to seven and closed out the Suns' must-win home opener.",
      trend: "up",
    },
    {
      rank: 4,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 94,
      clutchPts: 10.9,
      clutchFgPct: 54.2,
      clutchFtPct: 88.9,
      gameWinners: 1,
      clutchPlusMinus: 11.7,
      biggestMoment:
        "Mitchell picked off a lazy inbound pass with 1:47 on the clock and converted a coast-to-coast left-handed layup before Brooklyn could set their defense — the steal-and-score sequence that flipped a one-point Cleveland deficit into a one-point lead they never relinquished, punctuated by three raised fingers as he backpedaled to half-court.",
      trend: "up",
    },
    {
      rank: 5,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 93,
      clutchPts: 9.4,
      clutchFgPct: 55.6,
      clutchFtPct: 85.7,
      gameWinners: 0,
      clutchPlusMinus: 12.3,
      biggestMoment:
        "With Dallas cutting the lead to three in the final four minutes, Wembanyama stepped into Luka Doncic's drive path on the strong side and erased what looked like a certain layup with a one-handed rejection that redirected the ball to Devin Vassell for a breakaway dunk — the defensive play that snapped Dallas's last viable comeback sequence on their own floor.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 91,
      clutchPts: 10.2,
      clutchFgPct: 57.1,
      clutchFtPct: 87.5,
      gameWinners: 0,
      clutchPlusMinus: 10.8,
      biggestMoment:
        "Sengun backed down Clint Capela in the final three minutes at State Farm Arena, pivoted baseline, and hit a turnaround hook shot that pushed Houston's lead to five — the clutch bucket that definitively broke Atlanta's interior resistance and validated Houston's road trip as a genuine organizational statement.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Jordan Poole",
      team: "WAS",
      clutchRating: 88,
      clutchPts: 9.8,
      clutchFgPct: 50.0,
      clutchFtPct: 91.7,
      gameWinners: 1,
      clutchPlusMinus: 9.2,
      biggestMoment:
        "Poole dribble-drove the left side with Washington clinging to a one-point lead at United Center, pulled up at the free-throw line extended, and buried a step-back three over Zach LaVine with 44 seconds left — a shot he had no business taking and every right to celebrate, giving Washington the breathing room they needed to close out the road upset.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 86,
      clutchPts: 8.7,
      clutchFgPct: 45.5,
      clutchFtPct: 94.1,
      gameWinners: 0,
      clutchPlusMinus: -4.2,
      biggestMoment:
        "Curry hit back-to-back threes in the final three minutes at Phoenix to drag Golden State within two points, each one more contested than the last — the second coming off an off-screen curl that he released before his feet had fully set. The Suns answered both, but the sequence was a reminder that Curry's clutch ceiling remains untouched even on a winless team.",
      trend: "down",
    },
    {
      rank: 9,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 85,
      clutchPts: 10.5,
      clutchFgPct: 48.0,
      clutchFtPct: 90.0,
      gameWinners: 0,
      clutchPlusMinus: -3.8,
      biggestMoment:
        "Young orchestrated a stunning 9-0 Atlanta run in the final five minutes against Houston, capping the sequence with a floating push shot from the lane over Sengun that briefly tied the game at 110 — only for Houston to answer with a Sengun hook and hold on, leaving Young's dazzling late-game burst as the week's most aesthetically brilliant losing effort.",
      trend: "down",
    },
    {
      rank: 10,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      clutchRating: 83,
      clutchPts: 11.3,
      clutchFgPct: 52.9,
      clutchFtPct: 72.2,
      gameWinners: 0,
      clutchPlusMinus: -6.1,
      biggestMoment:
        "Giannis attacked the paint with 90 seconds left against Philadelphia, drew three Sixers into the paint, and found Bobby Portis for a corner three that cut the deficit to one — the kind of unselfish, high-IQ late-game play that underscores just how devastating it is that Milwaukee's roster cannot finish what Giannis starts.",
      trend: "down",
    },
    {
      rank: 11,
      player: "Luka Doncic",
      team: "DAL",
      clutchRating: 82,
      clutchPts: 9.1,
      clutchFgPct: 46.7,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: -8.4,
      biggestMoment:
        "Luka hit a tough pull-up three from the right wing with 3:30 remaining to cut the San Antonio lead to six, then immediately signaled his teammates for a timeout and drew up a play that got Kyrie Irving a clean look — the kind of floor-general leadership that kept Dallas in a game they had no business competing in by that point.",
      trend: "down",
    },
    {
      rank: 12,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 87,
      clutchPts: 9.6,
      clutchFgPct: 53.3,
      clutchFtPct: 90.9,
      gameWinners: 0,
      clutchPlusMinus: 8.7,
      biggestMoment:
        "Booker was ruthlessly efficient in the clutch against Golden State, converting four of five shots in the final five minutes including a cold-blooded mid-range off the glass with the shot clock expiring — the kind of mid-range mastery that makes him one of the most quietly reliable closers in the Western Conference when KD draws the double-team.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 84,
      clutchPts: 8.3,
      clutchFgPct: 50.0,
      clutchFtPct: 88.2,
      gameWinners: 0,
      clutchPlusMinus: -5.3,
      biggestMoment:
        "Irving drained a logo three with 2:08 left in Dallas's loss to San Antonio — a shot nobody else on the roster would attempt and probably nobody else in the building could make — cutting the Spurs' lead to nine and briefly reawakening the home crowd before Wembanyama's interior presence suffocated whatever momentum remained.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 86,
      clutchPts: 10.1,
      clutchFgPct: 51.4,
      clutchFtPct: 87.5,
      gameWinners: 1,
      clutchPlusMinus: 7.9,
      biggestMoment:
        "Tatum caught Jaylen Brown's swing pass in the left corner with Boston up one and the shot clock winding, stepped into a pull-up three over a closing defender, and drained it to put the Celtics up four with 58 seconds left — a shot dripping in the kind of casual confidence that makes Boston the East's most seasoned late-game execution team.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 85,
      clutchPts: 9.7,
      clutchFgPct: 48.1,
      clutchFtPct: 85.0,
      gameWinners: 0,
      clutchPlusMinus: 6.4,
      biggestMoment:
        "Edwards isolated on the right wing in Minnesota's clutch window against Sacramento, crossed his defender into the lane, elevated over a closing Domantas Sabonis, and finished a floating two-hand runner that swung the momentum irreversibly — the kind of shot creation that announces him as the Western Conference's most frightening young closer not named Wembanyama.",
      trend: "up",
    },
    {
      rank: 16,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 90,
      clutchPts: 11.0,
      clutchFgPct: 56.3,
      clutchFtPct: 92.9,
      gameWinners: 1,
      clutchPlusMinus: 10.2,
      biggestMoment:
        "SGA attacked the baseline off a pick-and-roll with 1:22 remaining in OKC's home game against Memphis, drew the foul on a Jaren Jackson Jr. reach attempt, and converted both free throws with the crowd noise at peak volume — the kind of ice-water moment that has become so routine for him that the Oklahoma City crowd barely exhaled between shots.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 80,
      clutchPts: 7.9,
      clutchFgPct: 42.9,
      clutchFtPct: 88.0,
      gameWinners: 0,
      clutchPlusMinus: -7.3,
      biggestMoment:
        "Lillard bombed in a 30-foot three with 2:48 left to cut Philadelphia's lead to two at Fiserv Forum — a pure, uncontested Lillard logo pull-up that electrified the building and briefly made Milwaukee's deficit feel surmountable. The fact that Embiid responded with a post bucket 18 seconds later to kill the run is a storyline Milwaukee cannot afford to keep living.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Jaren Jackson Jr.",
      team: "MEM",
      clutchRating: 78,
      clutchPts: 7.2,
      clutchFgPct: 47.1,
      clutchFtPct: 81.3,
      gameWinners: 0,
      clutchPlusMinus: -4.9,
      biggestMoment:
        "Jackson delivered a critical swing-block on a Jalen Williams drive late in Memphis's tight road game against OKC, tipping the ball to Ja Morant for a fast-break opportunity — a two-way sequence that encapsulates exactly why Memphis keeps building around his defensive versatility even when his clutch offensive numbers remain frustratingly inconsistent.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 76,
      clutchPts: 8.4,
      clutchFgPct: 44.4,
      clutchFtPct: 83.3,
      gameWinners: 0,
      clutchPlusMinus: -2.1,
      biggestMoment:
        "Cunningham orchestrated a composed 8-2 Detroit closing run against Indiana, directing traffic at the top of the key with the poise of a veteran point guard and capping the sequence with a driving floater over Myles Turner — the kind of controlled late-game floor leadership that keeps Detroit's rebuilding narrative moving in the right direction even without a signature win yet.",
      trend: "up",
    },
    {
      rank: 20,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 81,
      clutchPts: 8.9,
      clutchFgPct: 50.0,
      clutchFtPct: 78.6,
      gameWinners: 0,
      clutchPlusMinus: 5.2,
      biggestMoment:
        "LeBron split a double-team at the elbow with 1:55 remaining in LA's home game against Sacramento, found a cutting Austin Reaves for a dunk that pushed the Lakers' lead to four, then immediately got back in passing lanes to force a turnover — a 12-second window of late-game IQ that no coach can diagram and no defense reliably stops, even from a 41-year-old.",
      trend: "stable",
    },
  ],
  clutchKing: {
    player: "Nikola Jokic",
    team: "DEN",
    description:
      "Nikola Jokic does not simply perform in the clutch — he renders the clutch trivial by turning it into an extension of his ordinary genius. His overtime sequence against an opponent that matched Denver possession-for-possession for 48 minutes was a masterclass in understanding exactly what a defense is trying to take away and exploiting the precise opposite: a pump fake to clear the double-team, a runner off the glass when the lane collapsed, and two free throws with the composure of a man who has been here hundreds of times. His clutch plus-minus of plus-18.4 is the week's most emphatic team-context validation of individual closing ability, and the game-winner in overtime cements him as the Clutch King of the season's opening week with a case that borders on unanswerable.",
  },
  worstInClutch: {
    player: "Jaren Jackson Jr.",
    team: "MEM",
    description:
      "Jaren Jackson Jr. enters the Clutch Factor Rankings at rank 18 with the kind of statistical line that suggests he is very aware something has gone wrong and would prefer not to discuss it. A 47.1% clutch field-goal percentage sounds respectable until you account for the fact that he is primarily taking mid-range jumpers in these situations because he has committed enough late-game fouls this week that his coach gently suggested he consider not touching the basketball near the paint after the four-minute mark. His clutch plus-minus of -4.9 is the kind of number that Memphis's front office has framed as a 'growth opportunity,' which is front-office for 'please just catch the ball and throw it to Ja.' The good news is that his blocks remain elite even in the clutch. The bad news is that you cannot post a block when the opponent wisely takes the foul.",
  },
  weeklyHighlight:
    "The opening week of the 2026–27 NBA season delivered a clutch-performance landscape that reads less like a standings report and more like a personality test for every franchise in the league. Nikola Jokic authored the definitive sequence — that overtime pump-fake-and-foul in Denver's tightest game of the young season — and in doing so reminded the entire conference that the Nuggets' closing mechanism is not a system or a play call but a single human being who processes basketball like the rest of us process breathing. Joel Embiid's four-block masterpiece against Milwaukee's desperate 0-2 team wasn't just clutch performance — it was a declaration, the kind you etch into a city's basketball memory. Meanwhile, Kevin Durant's mid-post pull-up in Phoenix's must-win opener felt like the universe confirming something we already knew: that some players just do not age in high-leverage situations, they simply accumulate more examples. The week's most emotionally complicated clutch story belongs to Giannis Antetokounmpo, who posted 11.3 clutch points per game and a plus-minus of minus-six — a mathematical paradox that perfectly encapsulates Milwaukee's existential crisis three games in. Donovan Mitchell's steal-and-finish to flip Cleveland's deficit, Jordan Poole's logo pull-up at United Center with nobody asking him to be that fearless, and Victor Wembanyama's rejection of Luka Doncic's drive in a 16-point road upset all contributed to a week that established the clutch hierarchy early, clearly, and with remarkable drama for the calendar barely having turned to November.",
};