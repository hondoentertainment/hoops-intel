// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 26, 2026
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
  generatedDate: "2026-10-26",
  date: "October 26, 2026",
  gameOfTheNight: "LAC-OKC-20261025",
  topClutchPerformer: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    clutchRating: 94,
    description: "SGA scored 11 of OKC's final 14 points in the fourth quarter, converting three consecutive isolation buckets when the Clippers closed to within four and the Thunder needed a closer. His 3-steal performance removed every late LAC possession of consequence.",
  },
  games: [
    {
      gameId: "DET-PHI-20261025",
      teams: { home: "PHI", away: "DET" },
      finalScore: { home: 93, away: 106 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Detroit opened a 9-2 run off back-to-back Cade Cunningham steals, setting a defensive tone Philadelphia never recovered from. The Sixers' transition offense was neutralized before it could establish itself.",
          runScore: "18-9 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description: "Philadelphia mounted a brief 8-0 run to cut the deficit to six, energizing a restless home crowd. The rally stalled when Cunningham drew a charge and converted the ensuing possession into an and-one.",
          runScore: "61-55 DET",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:03",
          description: "Detroit responded to Philly's run with a crushing 12-2 stretch to open the fourth, ending any realistic comeback scenario. Cunningham orchestrated the sequence with five assists across the run, exposing PHI's defensive fatigue on back-to-back nights.",
          runScore: "95-74 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was less a game than a controlled dismantling. Detroit arrived in Philadelphia with a defensive blueprint and executed it across 48 minutes without deviation — holding the NBA's highest-scoring offense to 93 points on a night Philly desperately needed rest. Cunningham's three-steal, nine-assist orchestration was the most complete two-way performance of the young season, and the Pistons' 3-0 record is no longer a curiosity. It is a statement.",
    },
    {
      gameId: "IND-BRK-20261025",
      teams: { home: "BRK", away: "IND" },
      finalScore: { home: 109, away: 136 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:44",
          description: "Indiana exploded out of the first media timeout with a 14-3 burst, Haliburton threading skip passes to the corners on four consecutive possessions. Brooklyn's defensive rotations collapsed under the pace and the Pacers led by double digits before the first quarter ended.",
          runScore: "32-18 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "3:30",
          description: "Brooklyn clawed back with a 10-2 run behind five points from the bench unit, trimming the lead to eight and briefly slowing Indiana's pace. The respite lasted one Haliburton possession — a crosscourt dime that restored the double-digit margin.",
          runScore: "52-44 IND",
          momentum: "home",
          keyPlayer: "Ben Simmons",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Indiana detonated the game with a 17-4 third-quarter run as six different Pacers scored. The sequence featured Haliburton's 10th and 11th assists without a turnover and removed any remaining narrative tension from the building.",
          runScore: "98-71 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Indiana didn't just beat Brooklyn — they gave the league a structural demonstration of what a fully healthy Haliburton at pace looks like against a defense without the personnel to match it. Thirteen assists, zero turnovers, and a 27-point margin that flatters Brooklyn. The Pacers' depth is the organizational weapon: six double-figure scorers means Haliburton never had to force a single possession.",
    },
    {
      gameId: "LAL-UTA-20261025",
      teams: { home: "UTA", away: "LAL" },
      finalScore: { home: 123, away: 132 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "2:15",
          description: "Utah ignited a 13-4 second-quarter run to pull within three, their transition offense finally finding rhythm against LA's switching coverage. The Jazz's crowd was alive for the first time all night and the Lakers called a timeout they badly needed.",
          runScore: "61-58 UTA",
          momentum: "home",
          keyPlayer: "Jordan Clarkson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:50",
          description: "LeBron took over the third quarter personally — nine straight Lakers points including a pull-up three and a coast-to-coast finish. The sequence ended Utah's momentum and restored a comfortable double-digit cushion before the Jazz could respond.",
          runScore: "98-83 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Utah refused to fold — a 9-2 run brought them within eight with six minutes remaining and the building sensed a historic comeback. LeBron answered with back-to-back buckets on the next two possessions, ending the threat before it fully materialized.",
          runScore: "116-108 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "LeBron converted a step-back mid-range jumper over two Utah defenders to push the lead back to ten with 5:44 remaining, neutralizing Utah's second-half comeback momentum in a single possession.",
          timeRemaining: "5:44",
          winProbabilityShift: 18,
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Coast-to-coast drive and finish through contact — and-one — to make it 121-110 with 3:12 left, formally closing Utah's window. The play drew the foul that placed LeBron at the line and drained the remaining crowd energy from the building.",
          timeRemaining: "3:12",
          winProbabilityShift: 22,
        },
      ],
      narrative: "Utah made this a genuine road test and LeBron treated it like a final exam he had already studied for. His 12-point fourth quarter was composed rather than desperate — every basket landed precisely when the Jazz had manufactured enough momentum to believe. At 3-0, the Lakers have a closer problem that no one else in the West has solved yet.",
    },
    {
      gameId: "TOR-MIN-20261025",
      teams: { home: "MIN", away: "TOR" },
      finalScore: { home: 117, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description: "Anthony Edwards detonated the game's opening sequence with back-to-back pull-up threes, establishing immediate individual dominance over Scottie Barnes and forcing Toronto into conservative defensive coverage that opened driving lanes for the entire Minnesota roster.",
          runScore: "24-11 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:45",
          description: "Minnesota expanded their lead with a suffocating defensive stretch — holding Toronto scoreless for four consecutive possessions while Edwards added seven quick points. The Raptors' offense had no answer for Minnesota's switching scheme and Barnes went cold for a nine-minute stretch.",
          runScore: "88-64 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The individual matchup was over by halftime and the team matchup wasn't much closer. Edwards' four-three-pointer performance was surgical in its damage — each one arrived at a moment when Toronto had momentarily tightened its coverage — and the Timberwolves' defensive collective reduced Scottie Barnes to 14 points in a game that will shape how the league evaluates the East's second tier. Minnesota is 3-0 and legitimately untroubled.",
    },
    {
      gameId: "LAC-OKC-20261025",
      teams: { home: "OKC", away: "LAC" },
      finalScore: { home: 108, away: 101 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "1:08",
          description: "The Clippers closed the first half on a 10-3 run to pull within two at the break, their half-court offense finding clean looks against OKC's scrambling rotations. Los Angeles entered the locker room believing they had cracked the Thunder's defensive code.",
          runScore: "54-52 OKC",
          momentum: "away",
          keyPlayer: "Kawhi Leonard",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:12",
          description: "LA took their first lead of the game on a Kawhi corner three, triggering a tense fourth quarter neither team could decisively control for the next five minutes. Paycom Center grew quiet as the Clippers forced Oklahoma City into uncomfortable half-court possessions.",
          runScore: "88-87 LAC",
          momentum: "away",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:44",
          description: "SGA answered LA's lead with three consecutive isolation buckets — pull-up jumper, rim attack and-one, then a stepback three — a 9-0 personal run that turned a one-point deficit into an eight-point lead Oklahoma City never relinquished.",
          runScore: "104-91 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "Kawhi's corner three off a timeout play gave the Clippers their only lead of the game and silenced Paycom Center for the first time all night. The basket validated LA's second-half gameplan and forced OKC into an emergency timeout.",
          timeRemaining: "8:12",
          winProbabilityShift: -14,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "SGA's stepback three with 3:44 remaining — the third consecutive isolation bucket — pushed OKC's lead to eight and was the decisive shot of the game. The Clippers had no defensive answer and the basket effectively sealed Oklahoma City's third win.",
          timeRemaining: "3:44",
          winProbabilityShift: 31,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "SGA converted a pull-up over Kawhi Leonard's outstretched hand to go up five with 5:01 remaining, beginning his personal 9-0 run that swung the game's decisive momentum shift.",
          timeRemaining: "5:01",
          winProbabilityShift: 19,
        },
      ],
      narrative: "This was the night's most genuinely contested game — Los Angeles took a fourth-quarter lead and had every structural reason to win. What happened next was SGA doing what only elite closers can: manufacturing a 9-0 personal run against a defense featuring Kawhi Leonard. The Thunder are 3-0 because they have a closer. The Clippers are 1-2 because their road execution continues to betray their talent.",
    },
    {
      gameId: "MEM-SAC-20261025",
      teams: { home: "SAC", away: "MEM" },
      finalScore: { home: 112, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:55",
          description: "Ja Morant ignited a 15-4 opening run that punched Sacramento in the face before the home crowd could establish energy. Three Morant drives in four possessions — all converted — gave Memphis separation before the Kings' offense ever found the ball.",
          runScore: "27-12 MEM",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:20",
          description: "Sacramento rallied with a 14-4 third-quarter run powered by the home crowd's desperation energy, cutting the Grizzlies' lead to five and threatening to make this a genuine contest. The Kings' attack was frantic rather than structured, and Memphis recognized it.",
          runScore: "83-78 MEM",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "1:45",
          description: "Memphis responded to Sacramento's run with an immediate 11-2 counter — Morant's triple-threat creation generating open threes that Sacramento's defense couldn't rotate to. The comeback attempt died in the final two minutes of the third, and the fourth was a formality.",
          runScore: "101-85 MEM",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Sacramento had the crowd, the home floor, and the motivation of an 0-2 start — and Memphis used all of it as context for a clinical road performance. Morant's ability to generate early separation before the Kings established rhythm was the game's organizational fact: Sacramento chased this one from the opening possession and never fully caught it. The Kings are 0-3 at home and the organizational anxiety in Sacramento is no longer hypothetical.",
    },
    {
      gameId: "ORL-NYK-20261025",
      teams: { home: "NYK", away: "ORL" },
      finalScore: { home: 102, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:10",
          description: "New York mounted a 10-2 second-quarter run to pull within one, MSG reaching a desperation-fueled crescendo as the Knicks briefly threatened to seize control. The crowd was at maximum volume for a team that had given them nothing to celebrate through seven quarters of basketball.",
          runScore: "47-46 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "Paolo Banchero scored seven consecutive Orlando points to open the fourth quarter, silencing MSG systematically and methodically. Each basket seemed to drain oxygen from the building — the Magic's lead grew from three to nine before New York called a timeout.",
          runScore: "96-86 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:15",
          description: "New York's final rally — a Brunson three-point play that cut the lead to six — represented the Knicks' last legitimate chance to steal the game. Banchero answered on the very next possession with a mid-range pull-up that pushed Orlando back to eight, ending the night.",
          runScore: "107-100 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Banchero's pull-up mid-range jumper over Brunson's closeout — answered directly to NYK's three-point play — extended the lead to eight with 2:01 remaining and was the definitive shot of the Knicks' season-worst 0-3 start.",
          timeRemaining: "2:01",
          winProbabilityShift: 24,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Brunson's three-point play off a drive through two Orlando defenders cut the lead to six with 2:15 left and briefly reopened the game's narrative. The crowd surge lasted one possession before Banchero answered.",
          timeRemaining: "2:15",
          winProbabilityShift: -11,
        },
      ],
      narrative: "Madison Square Garden gave Orlando everything it had and Paolo Banchero took it personally. His 14-point fourth quarter was the most emotionally resonant individual performance of the night — answering every Knicks run, silencing every crowd surge, and delivering the decisive mid-range jumper directly over Brunson when the game's fate still felt uncertain. New York is 0-3 and has not led in the fourth quarter once. That is not a sample-size problem. That is a character question.",
    },
  ],
};