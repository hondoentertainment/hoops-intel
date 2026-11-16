// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 16, 2026
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
  generatedDate: "2026-11-16",
  date: "November 16, 2026",
  gameOfTheNight: "NYK-TOR-20261115",
  topClutchPerformer: {
    player: "Karl-Anthony Towns",
    team: "NYK",
    clutchRating: 94,
    description: "Towns seized overtime with an emphatic put-back slam and a mid-range dagger that buried Toronto's last hope, finishing with 28 points and 17 rebounds in the most dramatic game of the night.",
  },
  games: [
    {
      gameId: "LAL-PHX-20261115",
      teams: { home: "PHX", away: "LAL" },
      finalScore: { home: 123, away: 131 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Phoenix opened a 12-2 run fueled by Collin Gillespie off the bench, pushing the Suns to their largest lead of the night and silencing the Lakers' early rhythm.",
          runScore: "12-2 PHX",
          momentum: "home",
          keyPlayer: "Collin Gillespie",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:28",
          description: "Luka Doncic seized the third quarter with back-to-back step-back threes and a pull-up floater, igniting a 14-3 Lakers counter-run that erased the Suns lead entirely.",
          runScore: "14-3 LAL",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:02",
          description: "Doncic put the game away with a clinical fourth-quarter takeover — 15 of his 43 points came in the final frame — as the Lakers outscored Phoenix 36-22 to close the game.",
          runScore: "36-22 LAL",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was Luka Doncic at his most inevitable. Phoenix threw everything at him — zone looks, switching schemes, Thybulle's relentless pressure — and none of it mattered once the fourth quarter arrived. The Lakers now sit at 12-2, and Doncic's fourth-quarter mastery is quickly becoming the defining story of their early season dominance.",
    },
    {
      gameId: "DAL-BOS-20261115",
      teams: { home: "BOS", away: "DAL" },
      finalScore: { home: 131, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:33",
          description: "Jayson Tatum drained three consecutive threes in a blistering opening stretch, setting the tone as Boston established a 16-point first-quarter advantage that Dallas never recovered from.",
          runScore: "18-4 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:11",
          description: "Paul George's relentless activity on both ends — four deflections and two buckets in the third — extended the lead past 35 and effectively ended the contest as a competitive game.",
          runScore: "22-9 BOS",
          momentum: "home",
          keyPlayer: "Paul George",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "TD Garden was a house of horrors for Dallas from the opening tip. Tatum was locked into something rare, and Boston's supporting cast suffocated Cooper Flagg with a physical welcome-to-the-league message that produced a brutal minus-30. Boston's last two wins have come by a combined 74 points — this team is sending a message to the entire league.",
    },
    {
      gameId: "SAS-UTA-20261115",
      teams: { home: "UTA", away: "SAS" },
      finalScore: { home: 102, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:44",
          description: "Dylan Harper erupted for 11 consecutive Spurs points inside a three-minute stretch, turning a two-point Jazz lead into a 13-point San Antonio advantage heading into halftime.",
          runScore: "15-4 SAS",
          momentum: "away",
          keyPlayer: "Dylan Harper",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:19",
          description: "Mo Bamba caught fire from deep for Utah — four of his six threes coming in the third quarter — cutting the Spurs' lead to four and threatening a full Jazz comeback.",
          runScore: "17-7 UTA",
          momentum: "home",
          keyPlayer: "Mo Bamba",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:55",
          description: "Victor Wembanyama emphatically closed the door with two thunderous blocks and a four-point play, restoring San Antonio's double-digit cushion and ending Utah's rally.",
          runScore: "12-4 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Utah gave the Spurs a genuine scare in the third quarter when Bamba turned into a flame-thrower from deep, but Wembanyama's fourth-quarter authority was something else entirely. Five blocks, four threes, and a game-closing four-point play — this was Wemby reminding the basketball world why San Antonio is a legitimate title contender at 12-2.",
    },
    {
      gameId: "HOU-WAS-20261115",
      teams: { home: "WAS", away: "HOU" },
      finalScore: { home: 119, away: 147 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:51",
          description: "Amen Thompson orchestrated a punishing 19-5 opening run that set the tone immediately, with Houston's five-man unit sharing the ball at a dizzying pace that Washington had no answer for.",
          runScore: "19-5 HOU",
          momentum: "away",
          keyPlayer: "Amen Thompson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:03",
          description: "Tari Eason entered the game and detonated — 17 points in under six minutes off the bench — pushing Houston's lead past 30 and officially turning this into a historic blowout.",
          runScore: "26-9 HOU",
          momentum: "away",
          keyPlayer: "Tari Eason",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Washington never stood a chance. Houston's offensive depth is genuinely suffocating — when four different players score 19 or more points in the same game, there is simply no defensive scheme that keeps you afloat. Alex Sarr's 25-point effort was admirable resistance, but the Rockets are playing a different brand of basketball than most teams in this league right now.",
    },
    {
      gameId: "IND-PHI-20261115",
      teams: { home: "PHI", away: "IND" },
      finalScore: { home: 131, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:22",
          description: "Jaylen Brown and Tyrese Maxey combined for 19 straight Sixers points to open the second quarter, turning a one-possession game into a commanding double-digit Philadelphia lead.",
          runScore: "19-5 PHI",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:48",
          description: "Pascal Siakam led a furious Indiana rally — a 15-4 Pacers run pulled them within three with under five minutes remaining and suddenly put Philadelphia on the ropes.",
          runScore: "15-4 IND",
          momentum: "away",
          keyPlayer: "Pascal Siakam",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "PHI",
          description: "LeBron James stepped into a critical pull-up jumper to push the lead to five, then immediately delivered a no-look dime on the next possession to extend Philadelphia's cushion to seven with 2:41 remaining.",
          timeRemaining: "2:41",
          winProbabilityShift: 22,
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Maxey drained a step-back three off the shot clock to effectively ice the game after Indiana had trimmed it to four, finishing his clutch-time scoring at 11 points in the final five minutes.",
          timeRemaining: "1:08",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Indiana's fourth-quarter rally was real and threatening — Siakam was absolutely brilliant in the closing stretch — but Philadelphia has LeBron James running their offense, and that is a cheat code when games tighten up. Brown and Maxey as the scoring engines flanked by LeBron's playmaking IQ is a formula that holds up under pressure, as the Sixers improve to 11-3.",
    },
    {
      gameId: "NYK-TOR-20261115",
      teams: { home: "TOR", away: "NYK" },
      finalScore: { home: 108, away: 112 },
      swings: [
        {
          quarter: "Q4",
          timestamp: "3:14",
          description: "Scottie Barnes erupted for seven unanswered points to give Toronto a six-point lead late in the fourth, sending Scotiabank Arena into a frenzy and seemingly securing the Raptors win.",
          runScore: "10-3 TOR",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "0:38",
          description: "Jalen Brunson engineered a clutch 6-0 New York micro-run in the final minute, capping it with a midrange pull-up that forced overtime and ripped the momentum completely away from Toronto.",
          runScore: "6-0 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:11",
          description: "Karl-Anthony Towns took over overtime entirely — a put-back slam, a mid-range dagger, and a critical offensive rebound sealed New York's victory and left Toronto in stunned silence.",
          runScore: "10-4 NYK",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Brunson pulled up from the elbow with 14 seconds left in regulation to tie the game at 108, a shot he had no business making off a broken play that sent the game to overtime.",
          timeRemaining: "0:14",
          winProbabilityShift: 38,
        },
        {
          player: "Karl-Anthony Towns",
          team: "NYK",
          description: "Towns threw down an emphatic put-back slam off a Brunson miss to open overtime scoring, then sealed the game with a cold-blooded mid-range jumper with 47 seconds remaining in OT.",
          timeRemaining: "0:47",
          winProbabilityShift: 44,
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Barnes converted a tough and-one in the final minute of overtime to cut it to two, forcing New York to execute down the stretch — his 30-point effort deserved a better fate.",
          timeRemaining: "0:51",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the kind of game that reminds you why basketball is the most dramatic sport alive. Toronto had it won — Scotiabank Arena was shaking with 90 seconds left in regulation — until Brunson willed New York to the line with one of the gutsiest individual plays of the season. Then overtime belonged entirely to Towns, who turned in a 28-point, 17-rebound masterpiece that Toronto will be replaying in their nightmares for weeks.",
    },
    {
      gameId: "CHA-LAC-20261115",
      teams: { home: "LAC", away: "CHA" },
      finalScore: { home: 113, away: 105 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:03",
          description: "Darius Garland took command of the second quarter with 11 consecutive points — a mix of floaters, pull-ups, and one mid-range banker — pushing the Clippers from down three to up eight.",
          runScore: "14-3 LAC",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:17",
          description: "Coby White led a Charlotte charge to cut the deficit to four, but Isaiah Jackson's back-to-back rejections on consecutive possessions — both leading to Clippers fast-break points — ended the comeback before it truly started.",
          runScore: "8-3 LAC",
          momentum: "home",
          keyPlayer: "Isaiah Jackson",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The Clippers are finding their footing with consecutive wins, and Garland's floor generalship at Intuit Dome looked genuinely elite on this night. Charlotte showed enough fight to keep it interesting through three quarters, but Jackson's rim protection proved to be the decisive factor when the Hornets needed buckets most.",
    },
    {
      gameId: "OKC-SAC-20261115",
      teams: { home: "SAC", away: "OKC" },
      finalScore: { home: 103, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:07",
          description: "Shai Gilgeous-Alexander opened the game on an absolute tear, scoring 16 of Oklahoma City's first 20 points and building an early double-digit advantage that Sacramento's depleted roster could never recover from.",
          runScore: "20-7 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description: "Alex Caruso's four-steal night reached its peak in the third quarter, as he forced three turnovers in under four minutes that converted directly into 11 OKC transition points and finished Sacramento's competitive hopes.",
          runScore: "16-6 OKC",
          momentum: "away",
          keyPlayer: "Alex Caruso",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "SGA came to Sacramento with something to prove and delivered a cold-blooded reminder of his MVP-caliber ceiling. The Kings at 1-12 are one of the most troubling rebuilds in recent memory, and there is no quick fix in sight — but Oklahoma City at 9-5 is quietly assembling a team that could make a deep run if SGA keeps performing at this level.",
    },
    {
      gameId: "ATL-MIL-20261115",
      teams: { home: "MIL", away: "ATL" },
      finalScore: { home: 106, away: 113 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:11",
          description: "Kasparas Jakucionis ignited Atlanta with three steals in a four-minute second-quarter stretch — each one converting into an easy bucket on the other end — turning a tied game into a ten-point Hawks advantage.",
          runScore: "16-5 ATL",
          momentum: "away",
          keyPlayer: "Kasparas Jakucionis",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:29",
          description: "Gary Trent Jr. rallied Milwaukee with a personal 9-2 fourth-quarter run, cutting Atlanta's lead to four and briefly threatening a Bucks home win that would have ended one of the league's worst losing streaks.",
          runScore: "9-2 MIL",
          momentum: "home",
          keyPlayer: "Gary Trent Jr.",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "2:44",
          description: "CJ McCollum and Nickeil Alexander-Walker combined for seven fourth-quarter points to put Atlanta back in control, with McCollum's fourth steal of the night sealing the road win with 90 seconds remaining.",
          runScore: "10-4 ATL",
          momentum: "away",
          keyPlayer: "CJ McCollum",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Milwaukee is in full crisis at 1-13, and even a home game against a middling Atlanta squad couldn't reverse the tide. Jakucionis was a force of pure energy — his three-steal, four-three performance was the kind of breakout night that could define a young career. The Bucks faithful were briefly energized by Trent's late run, but Atlanta's veteran depth ultimately proved too much to overcome.",
    },
  ],
};