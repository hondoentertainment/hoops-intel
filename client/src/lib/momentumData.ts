// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 21, 2026
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
  generatedDate: "2026-11-21",
  date: "November 21, 2026",
  gameOfTheNight: "SAC-LAL-20261120",
  topClutchPerformer: {
    player: "Franz Wagner",
    team: "ORL",
    clutchRating: 94,
    description: "Wagner authored two go-ahead buckets in the final three minutes at Barclays Center, absorbing Brooklyn's desperate defensive pressure and converting both trips to the line to seal a two-point Orlando road win.",
  },
  games: [
    {
      gameId: "IND-CLE-20261120",
      teams: { home: "CLE", away: "IND" },
      finalScore: { home: 128, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description: "James Harden drilled back-to-back threes to open Cleveland's first significant run, pushing a tied game to a 10-point Cavaliers lead and establishing the offensive rhythm that Indiana never recovered from.",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:14",
          description: "Indiana pieced together a 9-2 run fueled by transition opportunities, trimming the deficit to single digits and briefly threatening to turn the game into a contest.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:02",
          description: "Harden answered Indiana's flicker of hope with a step-back three and a mid-range pull-up on consecutive possessions, restoring a 15-point cushion and effectively closing the door.",
          runScore: "8-1",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This game had the outline of a potential Indiana comeback but never the substance. Harden's first-quarter barrage set a tone that Mario Hezonja's plus-24 night reinforced at every turn — Cleveland was never genuinely threatened, only occasionally forced to remind Indiana why. The 51-point masterpiece will generate headlines, but the real story is how efficiently Cleveland suffocated Indiana's pace-and-space attack when it mattered.",
    },
    {
      gameId: "NOP-OKC-20261120",
      teams: { home: "OKC", away: "NOP" },
      finalScore: { home: 126, away: 120 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:45",
          description: "New Orleans rode a Zion Williamson and Jeremiah Fears combination to a surprising 8-2 run that briefly gave the Pelicans a lead at Paycom Center, silencing a crowd accustomed to Thunder dominance.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "SGA took over with four consecutive Oklahoma City possessions — two pull-up jumpers and two free-throw conversions — puncturing whatever belief New Orleans had carried out of the third quarter.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "New Orleans deserves credit for making this competitive through three quarters, with Zion and Fears combining for 44 points and forcing OKC into genuine problem-solving. But SGA's fourth-quarter authority was surgical — this is a Thunder team that knows how to feel a game slipping and lock it back down. Aday Mara's 16-rebound night quietly controlled every possession New Orleans needed to manufacture a lead.",
    },
    {
      gameId: "HOU-DEN-20261120",
      teams: { home: "DEN", away: "HOU" },
      finalScore: { home: 133, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:12",
          description: "Alperen Sengun orchestrated a Houston counter-run with a triple-double in progress, keeping the Rockets within two at halftime and establishing the game's historic big-man subplot.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:48",
          description: "Christian Braun ignited Denver's decisive stretch — two steals converted into fast-break points and a corner three within ninety seconds blew the game open and exposed Houston's road defensive vulnerabilities.",
          runScore: "13-3",
          momentum: "home",
          keyPlayer: "Christian Braun",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Houston trimmed the lead to eight on a Sengun post move and Cameron Johnson turnover but Jokic's immediate response — a dime to Braun for three — ended any realistic comeback conversation.",
          runScore: "5-10",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The Jokic-Sengun duel will live in box-score lore — two centers each producing a 20-10-10 caliber line in the same game is genuinely rare — but the margins came from Denver's wings. Braun's four steals and Cameron Johnson's secondary playmaking gave the Nuggets a two-way edge that Sengun's brilliance couldn't fully offset. Houston's depth on the road is a real concern as the schedule toughens.",
    },
    {
      gameId: "SAC-LAL-20261120",
      teams: { home: "LAL", away: "SAC" },
      finalScore: { home: 106, away: 104 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:20",
          description: "Sacramento strung together an 11-3 run behind De'Andre Hunter's three consecutive buckets, turning a double-digit Lakers lead into a one-possession game and electrifying the crypto.com Arena crowd that had anticipated an easy night.",
          runScore: "11-3",
          momentum: "away",
          keyPlayer: "De'Andre Hunter",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:44",
          description: "Darius Acuff Jr.'s no-look pass found a cutter for a Sacramento go-ahead layup, putting the Kings ahead by one and triggering a timeout as the Lakers processed what was suddenly a live upset threat.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Darius Acuff Jr.",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "0:38",
          description: "Luka Doncic absorbed contact on a drive and converted both free throws to restore a one-point Lakers lead, shifting the burden of a final possession back onto a Sacramento team with limited shot-creation options.",
          runScore: "2-0",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Doncic",
          team: "LAL",
          description: "Drew a foul on a left-side drive with 38 seconds remaining and converted both free throws to give the Lakers a 106-104 lead they would not relinquish.",
          timeRemaining: "0:38",
          winProbabilityShift: 34,
        },
        {
          player: "De'Andre Hunter",
          team: "SAC",
          description: "Knocked down a corner three to cut the deficit to one with 1:12 remaining, forcing the Lakers into a critical late-game possession sequence.",
          timeRemaining: "1:12",
          winProbabilityShift: -22,
        },
        {
          player: "Walker Kessler",
          team: "LAL",
          description: "Contested Sacramento's final inbound play and forced a rushed off-balance look that clanged off the back of the rim as time expired.",
          timeRemaining: "0:03",
          winProbabilityShift: 28,
        },
        {
          player: "Darius Acuff Jr.",
          team: "SAC",
          description: "Threaded a no-look bounce pass through two defenders to put Sacramento ahead with 2:44 left — the Kings' lone lead of the fourth quarter.",
          timeRemaining: "2:44",
          winProbabilityShift: -18,
        },
      ],
      narrative: "The NBA's most lopsided record differential produced the night's best game — a 1-14 Sacramento team nearly taking down the 14-3 Lakers on their own floor in front of a crowd that briefly forgot how to breathe. Hunter's 30-point explosion and Acuff's 12-assist orchestration made this real, not cosmetic. Luka's cold-blooded trip to the line saved the win, but the Lakers' coaches will study this film carefully.",
    },
    {
      gameId: "CHA-ATL-20261120",
      teams: { home: "ATL", away: "CHA" },
      finalScore: { home: 111, away: 97 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:10",
          description: "Dyson Daniels recorded two first-quarter steals converted into fast-break points within three minutes, setting Atlanta's defensive tone and visibly disrupting Charlotte's offensive rhythm before the game had a chance to develop.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Dyson Daniels",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Jalen Johnson took over the third quarter personally — 10 consecutive Atlanta points on a mix of pull-up jumpers and transition finishes put the game to rest and ended Charlotte's faint hopes of a comeback.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Jalen Johnson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Atlanta was the more complete team from tip to final buzzer, with Johnson and Daniels providing the kind of two-way versatility that makes the Hawks genuinely difficult to gameplan against. Moussa Diabate's 21-15 was a promising line for Charlotte, but it arrived in a game that was already decided. The Hornets' 4-11 record reflects a roster still searching for its identity.",
    },
    {
      gameId: "ORL-BRK-20261120",
      teams: { home: "BRK", away: "ORL" },
      finalScore: { home: 111, away: 113 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "3:30",
          description: "Julius Randle posted back-to-back and-one conversions to give Brooklyn a six-point third-quarter lead, temporarily reversing Orlando's momentum and making the Barclays Center crowd believe an upset of the upset was brewing.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:15",
          description: "Franz Wagner responded to Brooklyn's late push with a step-back mid-range jumper and an immediate assist on a Desmond Bane three — five points in forty seconds that reclaimed Orlando's lead for good.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Franz Wagner",
          team: "ORL",
          description: "Hit a contested 17-foot pull-up jumper to give Orlando a two-point lead with 2:48 remaining, then immediately assisted on Bane's corner three to push the advantage to five.",
          timeRemaining: "2:48",
          winProbabilityShift: 31,
        },
        {
          player: "Julius Randle",
          team: "BRK",
          description: "Drew a foul in the paint and converted two free throws to cut Orlando's lead to two with 1:05 left, setting up a tense final minute at Barclays Center.",
          timeRemaining: "1:05",
          winProbabilityShift: -16,
        },
        {
          player: "Danny Wolf",
          team: "BRK",
          description: "Knocked down a corner three to make it a one-possession game with 22 seconds remaining, forcing Orlando to execute a critical inbound and free-throw sequence.",
          timeRemaining: "0:22",
          winProbabilityShift: -19,
        },
      ],
      narrative: "Brooklyn made this genuinely uncomfortable in the final ninety seconds, and Danny Wolf's late three had Barclays Center daring to dream. But Wagner's fourth-quarter command was the story — he created his own shot against every defensive look Brooklyn threw at him and found Bane when they doubled. Orlando's 7-8 record understates how dangerous this team can be when Wagner is in this mode.",
    },
    {
      gameId: "TOR-DET-20261120",
      teams: { home: "DET", away: "TOR" },
      finalScore: { home: 102, away: 105 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Allen Graves entered off the Toronto bench and immediately changed the game's physical dynamic, scoring seven straight Raptors points and giving Detroit's frontcourt a matchup problem it never adequately solved.",
          runScore: "9-3",
          momentum: "away",
          keyPlayer: "Allen Graves",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Cade Cunningham orchestrated a 7-2 Detroit run to pull within two, re-energizing Little Caesars Arena and setting up what felt like an inevitable home-team close.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:30",
          description: "Scottie Barnes converted a driving layup through contact and hit the free throw to push Toronto's lead back to five — a three-point swing that proved to be the game's decisive sequence.",
          runScore: "3-0",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Drove baseline through two Detroit defenders and drew the foul with 1:28 remaining, converting the and-one to push the Raptors' lead to five and exhaust Detroit's remaining margin for error.",
          timeRemaining: "1:28",
          winProbabilityShift: 29,
        },
        {
          player: "Immanuel Quickley",
          team: "TOR",
          description: "Split a full-court trap and hit Barnes in stride for the and-one opportunity — a composed decision-making moment that was equally as important as the bucket itself.",
          timeRemaining: "1:31",
          winProbabilityShift: 15,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Pulled up from the elbow for a mid-range jumper to cut the deficit to three with 48 seconds remaining, keeping Detroit's faint comeback hopes technically alive.",
          timeRemaining: "0:48",
          winProbabilityShift: -12,
        },
      ],
      narrative: "Detroit's 10-5 record carried the expectation of a comfortable home win, and for three quarters they had the game well in hand. But Barnes is developing into exactly the kind of creation player who makes road wins feel routine — when his driving game opens in the fourth quarter, there is no easy defensive answer. The Raptors' bench depth, highlighted by Graves's 20-10, made Toronto's win feel increasingly inevitable after halftime.",
    },
    {
      gameId: "WAS-CHI-20261120",
      teams: { home: "CHI", away: "WAS" },
      finalScore: { home: 94, away: 98 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:20",
          description: "Anthony Davis registered three consecutive baskets inside — two post-ups and a lob finish — giving Washington a lead it held for the remainder of the half and establishing the interior dominance that Chicago's guards had no answer for.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:45",
          description: "AJ Dybantsa's steal and fast-break dunk put Washington up seven with five minutes remaining, draining the energy from United Center and effectively ending Chicago's comeback window.",
          runScore: "5-0",
          momentum: "away",
          keyPlayer: "AJ Dybantsa",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Chicago put together enough offensive bright spots — Powell's 16, Hield's shooting efficiency — to keep the scoreline close, but Davis's interior presence was categorically different from anything the Bulls had to counter. Dybantsa's 20-10-6 at his age is a legitimately startling development line, and pairing him with Davis and Trae Young's floor-spacing IQ gives Washington a roster construction that is quietly more dangerous than their 6-11 record reflects.",
    },
    {
      gameId: "PHX-UTA-20261120",
      teams: { home: "UTA", away: "PHX" },
      finalScore: { home: 101, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:00",
          description: "Darryn Peterson's 10-point second quarter gave Utah a brief five-point lead and offered a genuine preview of what this young Jazz team can look like when their star prospect is operating downhill with space.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Darryn Peterson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "Dillon Brooks and Miles Bridges combined for nine straight Phoenix points to open the fourth quarter — a physical, defensive-intensity-fueled run that exposed Utah's lack of interior depth without Markkanen and effectively decided the game.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Dillon Brooks",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Utah's Peterson-Peterson era is showing real promise — a 20-10-8 from a player this young is exactly the kind of line that justifies long-term optimism in Salt Lake City. But the fourth quarter exposed the roster's current ceiling: without Markkanen anchoring the interior, Phoenix's physicality simply overwhelmed the Jazz's depth chart. Booker's 23 were efficient and unspectacular, which is somehow the most concerning thing for Utah's opponents on the schedule.",
    },
  ],
};