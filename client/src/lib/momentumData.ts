// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 14, 2026
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
  generatedDate: "2026-11-14",
  date: "November 14, 2026",
  gameOfTheNight: "OKC-LAC-20261113",
  topClutchPerformer: {
    player: "Brook Lopez",
    team: "LAC",
    clutchRating: 94,
    description:
      "Lopez was the architect of one of the season's biggest upsets, delivering 26 points and three triples against OKC's vaunted defense. His back-to-back buckets in the final 90 seconds flipped the win-probability needle from red to green and left SGA's 40-point masterpiece stranded on the wrong side of the final score.",
  },
  games: [
    {
      gameId: "UTA-HOU-20261113",
      teams: { home: "HOU", away: "UTA" },
      finalScore: { home: 125, away: 118 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description:
            "Utah rallied on the back of Darryn Peterson's back-to-back threes to cut Houston's lead to two, silencing the Toyota Center crowd and threatening to flip the game's complexion entirely.",
          runScore: "10-2 UTA run",
          momentum: "away",
          keyPlayer: "Darryn Peterson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:41",
          description:
            "Alperen Sengun responded to Utah's second-quarter surge with a thunderous three-possession stretch — back-to-back post buckets and a lob finish — that ballooned Houston's lead back to 14 and effectively ended the competitive portion of the game.",
          runScore: "12-3 HOU run",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:02",
          description:
            "Keyonte George kept the Jazz within single digits with a crafty pull-up jumper and a pair of free throws, briefly stoking hope of a Utah comeback before Sengun slammed the door with consecutive put-backs.",
          runScore: "8-3 UTA run",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This game had the bones of a competitive Western Conference bout through one and a half quarters, but Alperen Sengun simply refused to let Utah breathe. Every time the Jazz cobbled together a run, Sengun answered with something unreasonable — a turnaround over two defenders, a catch-and-pop three, another offensive rebound converted. Houston's 10-3 record is not an accident; they have a franchise cornerstone who already plays like a seasoned veteran.",
    },
    {
      gameId: "GSW-SAS-20261113",
      teams: { home: "SAS", away: "GSW" },
      finalScore: { home: 123, away: 85 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Stephon Castle detonated for three first-quarter threes in a four-minute window, staking San Antonio to an early 18-point lead that Golden State's shell-shocked defense had no mechanism to close.",
          runScore: "18-4 SAS run",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "9:05",
          description:
            "Victor Wembanyama orchestrated a clinic at both ends to open the second half, posting three blocks and a pair of assists in the first four minutes of the third as San Antonio's lead swelled past 30.",
          runScore: "14-3 SAS run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "There was no drama here — only a dissection. San Antonio is playing a brand of basketball that looks two evolutionary steps ahead of the rest of the league, with Castle's shot-making and Wembanyama's two-way dominance operating in frightening synchrony. Golden State couldn't string together a single meaningful run from tipoff to buzzer; the 38-point margin flatters the Warriors. At 11-2, the Spurs are starting to look like the class of the entire NBA.",
    },
    {
      gameId: "MIL-ORL-20261113",
      teams: { home: "ORL", away: "MIL" },
      finalScore: { home: 107, away: 99 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:33",
          description:
            "Franz Wagner orchestrated a 12-2 Orlando run that erased Milwaukee's early lead, capping the stretch with a pull-up three and an alley-oop feed to Bitadze that swung the crowd and the scoreboard simultaneously.",
          runScore: "12-2 ORL run",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:48",
          description:
            "Jaime Jaquez Jr. mounted a one-man Milwaukee effort with consecutive threes that trimmed the Magic's lead to five, but Desmond Bane answered immediately from the corner to stabilize Orlando's advantage.",
          runScore: "8-3 MIL run",
          momentum: "away",
          keyPlayer: "Jaime Jaquez Jr.",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "Franz Wagner's stat line reads like a video-game cheat code, but what made his performance remarkable was the intelligence woven through every decision — the extra pass that found Bane for an open three, the drive-and-kick that unlocked Bitadze in the short roll, the timely pull-up when Milwaukee sagged. Orlando is finding its footing as a cohesive unit around Wagner's expanding playmaking. Milwaukee, at 1-12, is running out of ways to explain what has gone wrong.",
    },
    {
      gameId: "CLE-MIA-20261113",
      teams: { home: "MIA", away: "CLE" },
      finalScore: { home: 133, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:10",
          description:
            "Davion Mitchell ignited Miami early, dishing five assists in the final three minutes of the first quarter as the Heat's twin-tower lineup overwhelmed Cleveland's interior defense for a 14-point lead after one.",
          runScore: "16-6 MIA run",
          momentum: "home",
          keyPlayer: "Davion Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:14",
          description:
            "Donovan Mitchell and Harden collaborated on a 10-0 Cleveland burst to cut the Miami lead to eight, but Bam Adebayo immediately answered with consecutive mid-range jumpers over smaller Cleveland defenders to restore comfortable separation.",
          runScore: "10-2 CLE run",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:30",
          description:
            "Giannis and Adebayo took turns punishing Cleveland's scrambled rotations down the stretch, combining for 14 of Miami's first 16 fourth-quarter points to put the game beyond reach.",
          runScore: "16-6 MIA run",
          momentum: "home",
          keyPlayer: "Bam Adebayo",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Miami deployed a frontcourt combination that Cleveland had no structural answer for — Adebayo posting and passing, Giannis running the floor in transition, and Mitchell threading the needle between them with 17 assists. The Heat were never truly threatened; Cleveland's bursts were met with immediate counterpunches. This was a showcase performance for a Miami team quietly building a legitimate Eastern Conference threat at 7-6.",
    },
    {
      gameId: "ATL-CHI-20261113",
      teams: { home: "CHI", away: "ATL" },
      finalScore: { home: 125, away: 117 },
      swings: [
        {
          quarter: "Q4",
          timestamp: "1:22",
          description:
            "Jalen Johnson converted a driving layup and drew a foul to give Atlanta a three-point lead with under two minutes in regulation, sending the United Center into tense silence and pushing the game toward the wire.",
          runScore: "7-2 ATL run",
          momentum: "away",
          keyPlayer: "Jalen Johnson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "0:08",
          description:
            "Norman Powell buried a contested mid-range jumper over Atlanta's outstretched defender to tie the game at the buzzer and force overtime, electrifying a United Center crowd that had largely braced for defeat.",
          runScore: "4-0 CHI run",
          momentum: "home",
          keyPlayer: "Norman Powell",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:05",
          description:
            "Josh Giddey ran Chicago's overtime offense masterfully, distributing three assists in the final three minutes of the extra period — including the go-ahead feed to Powell — to seal the Bulls' escape.",
          runScore: "10-3 CHI run",
          momentum: "home",
          keyPlayer: "Josh Giddey",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Norman Powell",
          team: "CHI",
          description:
            "Buried a contested mid-range two-pointer over Atlanta's closeout to tie the game at the regulation buzzer, single-handedly preventing what would have been a crushing Bulls loss.",
          timeRemaining: "0:08 Q4",
          winProbabilityShift: 38,
        },
        {
          player: "Jalen Johnson",
          team: "ATL",
          description:
            "Converted a and-one layup in the final 90 seconds of regulation to give Atlanta a three-point lead, nearly delivering the Hawks a road victory before Powell's heroics intervened.",
          timeRemaining: "1:22 Q4",
          winProbabilityShift: -27,
        },
        {
          player: "Josh Giddey",
          team: "CHI",
          description:
            "Orchestrated Chicago's overtime victory with three decisive assists in the final three minutes, keeping the Bulls' composure when Atlanta threatened to retake the lead.",
          timeRemaining: "2:05 OT",
          winProbabilityShift: 31,
        },
      ],
      narrative:
        "This was the kind of game that reveals character. Chicago — a team drowning at 3-9 — refused to fold against a Hawks squad that had won three of their last four, and Powell's buzzer-beater to force overtime was one of the most cathartic moments at the United Center this season. Jalen Johnson's 27-11-10 masterpiece deserved a win, and in a vacuum it probably should have gotten one. Instead, Giddey's overtime command and Powell's cold-blooded execution handed Atlanta a gut-punch defeat.",
    },
    {
      gameId: "MEM-NOP-20261113",
      teams: { home: "NOP", away: "MEM" },
      finalScore: { home: 111, away: 142 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description:
            "Memphis used GG Jackson's relentless energy and three consecutive Grizzlies possessions converted into transition buckets to open a 15-point first-quarter lead that New Orleans never seriously threatened.",
          runScore: "17-4 MEM run",
          momentum: "away",
          keyPlayer: "GG Jackson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description:
            "Saddiq Bey briefly gave New Orleans something to build on with seven straight Pelicans points, but Taylor Hendricks and Jerami Grant immediately responded to push Memphis's advantage back past 25.",
          runScore: "11-3 MEM run",
          momentum: "away",
          keyPlayer: "Jerami Grant",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Memphis showed up to Smoothie King Center with a road-game mentality that looked more like a home-court assault. The Grizzlies' depth and collective effort — evidenced by Jackson's plus-30 and Hendricks's plus-25 — made this a 48-minute statement about the balance of power in the West's middle tier. New Orleans is a depleted roster playing uphill, and Saddiq Bey's heroic 30-10 performance in a 31-point loss captures the Pelicans' season in a single painful image.",
    },
    {
      gameId: "NYK-IND-20261113",
      teams: { home: "IND", away: "NYK" },
      finalScore: { home: 106, away: 104 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:17",
          description:
            "T.J. McConnell sparked an Indiana bench unit that outscored New York 18-6 over a seven-minute third-quarter stretch, his relentless pick-and-roll pressure forcing three Knicks turnovers and creating a double-digit cushion.",
          runScore: "18-6 IND run",
          momentum: "home",
          keyPlayer: "T.J. McConnell",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:44",
          description:
            "Jalen Brunson willed New York back into it with seven straight points — including two threes — to cut Indiana's lead to two with under three minutes to play, raising the decibel level inside Gainbridge Fieldhouse.",
          runScore: "9-2 NYK run",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:31",
          description:
            "Quenton Jackson converted a mid-range jumper off an Indiana set play to push the lead back to three with 31 seconds remaining, giving Indiana just enough cushion to survive Brunson's final desperation heave.",
          runScore: "4-1 IND run",
          momentum: "home",
          keyPlayer: "Quenton Jackson",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Engineered a stunning 9-2 Knicks run in the final three minutes, single-handedly dragging New York back from a double-digit deficit to within one possession.",
          timeRemaining: "2:44 Q4",
          winProbabilityShift: -29,
        },
        {
          player: "Quenton Jackson",
          team: "IND",
          description:
            "Hit the dagger mid-range jumper with 31 seconds left to give Indiana a three-point lead, countering Brunson's heroics with an unlikely clutch bucket that proved decisive.",
          timeRemaining: "0:31 Q4",
          winProbabilityShift: 34,
        },
        {
          player: "T.J. McConnell",
          team: "IND",
          description:
            "Turned a tied game into a Pacers advantage with his relentless third-quarter pressure, forcing turnovers and generating easy baskets at the most critical juncture of the game.",
          timeRemaining: "4:17 Q3",
          winProbabilityShift: 22,
        },
      ],
      narrative:
        "Jalen Brunson played like the best player on the floor for 47 of 48 minutes, and New York still lost — that's how good Indiana's bench depth was. McConnell's third-quarter takeover was the defining sequence of the game, turning a toss-up into a double-digit Indiana lead before Brunson's heroics made it uncomfortable. Quenton Jackson's dagger with 31 seconds left was the kind of moment that organizational confidence is built on. The Knicks at 6-6 have a Brunson problem in the best possible sense: he's doing everything right, and it still isn't quite enough.",
    },
    {
      gameId: "POR-SAC-20261113",
      teams: { home: "SAC", away: "POR" },
      finalScore: { home: 107, away: 120 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:50",
          description:
            "Deni Avdija scorched Sacramento's defense for three consecutive pull-up threes in the opening minutes of the second quarter, turning a tied game into a 14-point Portland advantage that the Kings never recovered from.",
          runScore: "14-3 POR run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:22",
          description:
            "De'Andre Hunter and Domantas Sabonis combined for 11 straight Sacramento points to trim the deficit to seven and briefly inject life into a Golden 1 Center crowd that had gone quiet through much of the second quarter.",
          runScore: "11-2 SAC run",
          momentum: "home",
          keyPlayer: "De'Andre Hunter",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "9:10",
          description:
            "Damian Lillard responded to Sacramento's fleeting rally with back-to-back three-pointers from the logo to push the lead back past 15 and confirm Portland's fourth straight victory.",
          runScore: "10-2 POR run",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Portland's 9-3 record looks better every night, and this road win at Sacramento showed why — they have multiple players capable of putting a game away on any given possession. Avdija's second-quarter eruption was the story, but Lillard's fourth-quarter threes underscored the Trail Blazers' embarrassment of offensive riches. Sacramento at 1-11 is the league's most troubling roster, and no individual performance from Sabonis or Hunter can paper over structural deficiencies that run from the bench to the front office.",
    },
    {
      gameId: "OKC-LAC-20261113",
      teams: { home: "LAC", away: "OKC" },
      finalScore: { home: 113, away: 112 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:55",
          description:
            "Shai Gilgeous-Alexander took over the third quarter with 14 consecutive Oklahoma City points, blitzing Clippers defenders off the dribble and extending OKC's lead to 13 — the kind of one-man run that typically ends conversations.",
          runScore: "14-3 OKC run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:10",
          description:
            "Brook Lopez engineered the comeback, drilling back-to-back threes and feeding Darius Garland in transition to orchestrate a 15-4 Clippers run that evaporated OKC's double-digit lead and swung the Intuit Dome into a frenzy.",
          runScore: "15-4 LAC run",
          momentum: "home",
          keyPlayer: "Brook Lopez",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:12",
          description:
            "SGA converted a mid-range pull-up to give OKC a one-point lead with 72 seconds remaining, setting up a frantic final sequence that would ultimately break Oklahoma City's way — until it didn't.",
          runScore: "4-2 OKC run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Brook Lopez",
          team: "LAC",
          description:
            "Drilled consecutive threes during the decisive fourth-quarter comeback run, providing the offensive foundation for the Clippers' stunning 15-4 surge that erased a 13-point OKC lead.",
          timeRemaining: "5:10 Q4",
          winProbabilityShift: 41,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description:
            "Converted a pull-up jumper to reclaim the lead for OKC with 72 seconds left, refusing to yield despite Clippers' momentum — but couldn't complete the rescue in the game's final possession.",
          timeRemaining: "1:12 Q4",
          winProbabilityShift: -18,
        },
        {
          player: "Darius Garland",
          team: "LAC",
          description:
            "Drained the go-ahead jumper with 14 seconds remaining to put the Clippers up one and force OKC into a difficult final possession that couldn't be converted.",
          timeRemaining: "0:14 Q4",
          winProbabilityShift: 47,
        },
      ],
      narrative:
        "Shai Gilgeous-Alexander scored 40 points and his team still lost — that is the brutal math of the NBA's most stunning result from last night's slate. OKC led by 13 with under six minutes to play and watched Brook Lopez — Brook Lopez — dismantle their defense with pull-up threes and timely feeds, as Darius Garland's go-ahead bucket with 14 seconds left proved to be the dagger the Clippers needed. Oklahoma City's late-game execution failures are becoming a statistical pattern, and at 8-6 they face hard questions about whether talent alone is enough to win when it matters most.",
    },
  ],
};