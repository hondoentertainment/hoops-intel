// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 9, 2026
// Live at: https://hoopsintel.net/momentum

export interface MomentumSwing {
  gameId: string;
  teams: { home: string; away: string };
  finalScore: { home: number; away: number };
  swings: {
    quarter: string;
    timestamp: string;
    description: string;
    runScore: string;
    momentum: "home" | "away";
    keyPlayer: string;
    impact: "game-changing" | "significant" | "notable";
  }[];
  clutchPlays: {
    player: string;
    team: string;
    description: string;
    timeRemaining: string;
    winProbabilityShift: number;
  }[];
  narrative: string;
}

export interface MomentumData {
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-11-09",
  date: "November 9, 2026",
  gameOfTheNight: "LAL-DET-20261108",
  topClutchPerformer: {
    player: "LeBron James",
    team: "LAL",
    clutchRating: 94,
    description: "LeBron authored the night's defining clutch sequence — back-to-back buckets with Detroit cutting the lead to four in the final 2:30, capping a 31-9-7 performance that never flinched under Little Caesars Arena pressure.",
  },
  games: [
    {
      gameId: "LAL-DET-20261108",
      teams: { home: "DET", away: "LAL" },
      finalScore: { home: 116, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Detroit ripped off a 12-3 run to seize their largest lead of the half, forcing Rob Pelinka's bench unit into a timeout as the crowd ignited.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:41",
          description: "LeBron answered with five consecutive points — a pull-up mid-range and a coast-to-coast finish — reclaiming the Laker lead at 88-85 and quieting Little Caesars Arena.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:28",
          description: "Detroit trimmed the deficit to four on a Cunningham floater and an Isaiah Stewart putback, sending the building into a frenzy and setting up the game's decisive 90 seconds.",
          runScore: "6-2",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Post-entry seal into a and-one finish over Stewart with 2:19 remaining; extended the lead to seven and crushed Detroit's last credible rally.",
          timeRemaining: "2:19",
          winProbabilityShift: 22,
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Crosscourt skip pass to Austin Reaves for a corner three that pushed the margin to ten with 58 seconds left, sealing the road win.",
          timeRemaining: "0:58",
          winProbabilityShift: 18,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Step-back three to cut it to four with 2:35 left — Detroit's last legitimate response before LeBron's closing sequence extinguished the comeback.",
          timeRemaining: "2:35",
          winProbabilityShift: -11,
        },
      ],
      narrative: "This was the night's most emotionally complete game — a legitimately dangerous Detroit team pushing the West's best road squad to the brink through three quarters before LeBron James reminded Little Caesars Arena why 9-2 is not an accident. Detroit's young defensive core created real structural problems, but the Lakers' fourth-quarter authority is a different gear that few teams in either conference can match. The five-point final margin flatters no one; this game lived in single digits from the first possession to the last two minutes.",
    },
    {
      gameId: "PHI-CHI-20261108",
      teams: { home: "CHI", away: "PHI" },
      finalScore: { home: 121, away: 127 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "6:02",
          description: "Chicago erupted for a 15-4 run behind Coby White's three-consecutive-possession scoring to claim a six-point lead and silence the visiting Sixers' bench.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Coby White",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:47",
          description: "Embiid entered the post with Chicago still up two and immediately scored on back-to-back deep seal-and-catch operations — the momentum never returned to the Bulls.",
          runScore: "9-3",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:11",
          description: "Chicago's Patrick Williams hit a mid-range two to briefly cut it to four, but Embiid answered immediately on the next possession to restore a six-point cushion.",
          runScore: "2-5",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Back-to-the-basket power move over Nikola Vucevic at the 3:22 mark put Philly up four after Chicago had led entering the fourth — the definitive turning point of the game.",
          timeRemaining: "3:22",
          winProbabilityShift: 24,
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Drew his fourth foul call on Vucevic at the 1:08 mark, hit both free throws, and pushed the lead to six — an Embiid special that turned a game into a result.",
          timeRemaining: "1:08",
          winProbabilityShift: 19,
        },
        {
          player: "Coby White",
          team: "CHI",
          description: "Three-pointer at the 4:51 mark gave Chicago a brief two-point lead entering crunch time, the Bulls' last moment of genuine belief before Embiid's post-up clinic dismantled it.",
          timeRemaining: "4:51",
          winProbabilityShift: -13,
        },
      ],
      narrative: "Chicago played 42 minutes of inspiring basketball and earned exactly nothing for it, which is the defining frustration of the Bulls' 1-8 start distilled into a single game. Embiid's knee soreness was invisible when it mattered — the final three minutes belonged entirely to him, a cold and methodical dismantling of a home team that had done everything right. Philadelphia's ability to win ugly road games against scrappy opponents without touching their ceiling is what separates 9-2 teams from the rest of the East.",
    },
    {
      gameId: "BOS-MIL-20261108",
      teams: { home: "MIL", away: "BOS" },
      finalScore: { home: 97, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:18",
          description: "Boston opened on a 14-4 burst to close the quarter — Tatum hit two threes inside 90 seconds and the Celtics' defensive rotation completely neutralized Milwaukee's initial sets.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:44",
          description: "Milwaukee briefly trimmed the deficit to 11 on a Dame Lillard pull-up three, offering a flicker of crowd energy before Boston immediately went on a 9-2 counter-run.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a game — it was an audit. Boston's 20-point victory over Milwaukee is a clinical document of organizational distance: the Celtics' depth, defensive cohesion, and Tatum's surgical efficiency against a compromised perimeter defense combined into the East's most dominant road performance of the season's first month. Milwaukee's 1-9 record is no longer surprising; it is a diagnosis. Fiserv Forum, once the most intimidating building in the conference, offered no resistance.",
    },
    {
      gameId: "BRK-DAL-20261108",
      teams: { home: "DAL", away: "BRK" },
      finalScore: { home: 130, away: 93 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:33",
          description: "Luka detonated a personal 10-0 run across two minutes — three pointer, drive-and-finish, and a pinpoint lob to Daniel Gafford — that turned a seven-point game into the night's most decisive separation.",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:22",
          description: "Dallas's reserves maintained the 30-point advantage with crisp ball movement, confirming this game was over before the second-half tip — the Mavs' bench shot 7-of-12 from three in the second half.",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Josh Green",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Brooklyn on the second night of a back-to-back had no logical path to competing in this environment, and Luka's second-quarter evisceration removed any residual suspense before halftime. The 37-point final margin tells one story; the more interesting one is how Dallas's supporting cast — unleashed by Doncic's pace manipulation and 12 assists — shot the building into a frenzy well before the fourth quarter began. American Airlines Center is a problem for anyone on the schedule.",
    },
    {
      gameId: "UTA-MIN-20261108",
      teams: { home: "MIN", away: "UTA" },
      finalScore: { home: 115, away: 100 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:50",
          description: "Edwards buried back-to-back threes off Minnesota's first two possessions of the second unit run, pushing what was a one-possession game to double digits and deflating Utah's early composure.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:11",
          description: "Utah's Walker Kessler altered three consecutive Wolves attempts and John Collins converted two free throws to trim it to 10 — Minnesota's most uncomfortable stretch of the night.",
          runScore: "7-2",
          momentum: "away",
          keyPlayer: "Walker Kessler",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Minnesota controlled this game's temperature from the opening tip, and the 15-point final margin represented the Timberwolves operating well within their comfortable ceiling against a Jazz team that cannot defend at the NBA level yet. Edwards's four third-quarter threes were the punctuation mark on a performance that was always more about dominance than drama. Target Center remains the West's most unwelcoming building for rebuilding programs.",
    },
    {
      gameId: "NOP-LAC-20261108",
      teams: { home: "LAC", away: "NOP" },
      finalScore: { home: 139, away: 123 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:29",
          description: "Harden exploded for 14 straight Clipper points across a four-minute stretch — four field goals including two threes — turning a two-point game into a commanding 16-point advantage that redefined the evening.",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:55",
          description: "New Orleans mounted a credible 12-4 response behind Brandon Ingram drives and Zion Williamson free throws, trimming the deficit to eight and briefly raising the question of a Pelicans comeback.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Brandon Ingram",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:01",
          description: "Harden drilled his fifth three of the night from the left corner to push the lead back to 17, ending any realistic New Orleans threat and completing the Clippers' most unexpected offensive night of the season.",
          runScore: "8-3",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Nobody projected the Clippers for 139 points without Kawhi Leonard, and Harden's 38-point, five-three masterclass at Intuit Dome is the most disorienting individual performance the desk has logged this November. New Orleans showed enough in the third quarter to suggest this could have been a game, but Harden's left-corner three in the fourth was the moment that converted competitive into comfortable. The Clippers' offensive ceiling with Harden in this mode is a genuinely unsettling variable for the West.",
    },
    {
      gameId: "MIA-SAC-20261108",
      teams: { home: "SAC", away: "MIA" },
      finalScore: { home: 108, away: 114 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "2:17",
          description: "Sacramento closed the third on an 11-4 run with De'Aaron Fox scoring eight consecutive Kings points to claim a four-point lead entering the final period — Miami's most precarious position of the night.",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:44",
          description: "Butler responded to Sacramento's lead with seven straight Heat points — a mid-post two, a steal-and-layup, and two free throws — reclaiming the advantage and visibly changing the game's psychological tenor.",
          runScore: "7-1",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jimmy Butler",
          team: "MIA",
          description: "Isolation post-up on Domantas Sabonis at the 3:08 mark with Sacramento within two — Butler drew the foul, hit both free throws, pushed the lead to four, and never looked at the scoreboard.",
          timeRemaining: "3:08",
          winProbabilityShift: 21,
        },
        {
          player: "De'Aaron Fox",
          team: "SAC",
          description: "Floater in the lane with 1:47 remaining cut Miami's lead to two and forced a Heat timeout — the Kings' last legitimate chance to steal a win evaporated on the ensuing Butler possession.",
          timeRemaining: "1:47",
          winProbabilityShift: -14,
        },
      ],
      narrative: "Sacramento built a real fourth-quarter lead and squandered it in the most predictable way possible — by being on the wrong side of Jimmy Butler in a close game. Butler's late-game authority is not a narrative; it is a physical law of late-season and late-game NBA basketball, and the Kings at 1-9 lack the clutch infrastructure to override it. Miami's 4-6 record obscures how competent this team is in games that reach the final three minutes; they win those games.",
    },
  ],
};