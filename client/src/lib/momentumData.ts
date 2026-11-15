// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 15, 2026
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
  generatedDate: "2026-11-15",
  date: "November 15, 2026",
  gameOfTheNight: "DAL-CLE-20261114",
  topClutchPerformer: {
    player: "Kyrie Irving",
    team: "DAL",
    clutchRating: 88,
    description: "Kyrie Irving poured in 34 points with seven threes and kept Dallas competitive deep into the fourth quarter, single-handedly preventing what could have been a blowout with back-to-back daggers from the logo. His clutch shot-making forced Cleveland to adjust their entire defensive scheme down the stretch.",
  },
  games: [
    {
      gameId: "DET-MIA-20261114",
      teams: { home: "MIA", away: "DET" },
      finalScore: { home: 137, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:42",
          description: "Klay Thompson buried back-to-back threes to cap a 14-2 Miami opening surge, stunning Detroit before they could settle into their defensive sets.",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Klay Thompson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:15",
          description: "Cade Cunningham orchestrated a 12-3 Detroit run to trim the deficit to single digits, using mid-range pull-ups and two assists to get the Pistons' role players involved.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:28",
          description: "Giannis Antetokounmpo erupted with 10 consecutive Miami points — two thunderous dunks, a mid-post hook, and a free throw sequence — to blow the game open for good, extending the lead to 22.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This one was decided in the third quarter when Giannis simply willed the game away from Detroit. The Pistons showed fight in the second period — Cade Cunningham's mid-range wizardry gave them a brief lifeline — but Miami's star-studded roster was simply too deep and too dominant. Klay's six threes set the tone early and Giannis slammed the door shut.",
    },
    {
      gameId: "DAL-CLE-20261114",
      teams: { home: "CLE", away: "DAL" },
      finalScore: { home: 127, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:11",
          description: "Kyrie Irving hit three consecutive threes to ignite a 13-2 Dallas run, turning a nine-point deficit into a four-point lead and silencing the Rocket Arena crowd.",
          runScore: "13-2",
          momentum: "away",
          keyPlayer: "Kyrie Irving",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:33",
          description: "Tyrese Proctor engineered a methodical 16-5 Cleveland response, distributing the ball with poise and converting two crafty finishes at the rim to restore a double-digit lead.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Tyrese Proctor",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:50",
          description: "Meleek Thomas buried a corner three off a Proctor feed to push Cleveland's lead to 14 and effectively ice the game, answering a Kyrie pull-up jumper that had momentarily trimmed the margin.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Meleek Thomas",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Kyrie Irving",
          team: "DAL",
          description: "Step-back three from 27 feet over Proctor to cut Cleveland's lead to 8 with 4:22 remaining, briefly reviving Dallas's hopes of a comeback.",
          timeRemaining: "4:22",
          winProbabilityShift: -14,
        },
        {
          player: "Tyrese Proctor",
          team: "CLE",
          description: "Back-door lob finish off a no-look feed from Thomas Bryant, pushing the lead back to 12 and deflating the Mavericks' momentum at a critical juncture.",
          timeRemaining: "3:55",
          winProbabilityShift: 18,
        },
      ],
      narrative: "Kyrie Irving gave Cleveland everything they could handle, lighting up the fourth quarter with ice-water threes that made this feel like a genuine upset in the making. But Tyrese Proctor's triple-double was the hidden engine of Cleveland's victory — his third-quarter command shifted the game's center of gravity decisively. Dallas will look back at the third period as the moment they let this one slip.",
    },
    {
      gameId: "BRK-MEM-20261114",
      teams: { home: "MEM", away: "BRK" },
      finalScore: { home: 129, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:20",
          description: "Cedric Coward opened the game with a monster 11-point quarter — three-pointer, two dunks, and a putback — to establish Memphis's tone and put Brooklyn on immediate notice.",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Cedric Coward",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:44",
          description: "Julius Randle powered through the Memphis paint for eight straight Brooklyn points to briefly close the gap to seven, forcing the Grizzlies to burn a timeout and regroup.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:17",
          description: "Taylor Hendricks answered Randle's surge with a pair of threes in 90 seconds, restoring Memphis's comfortable cushion and puncturing any Brooklyn comeback aspirations for good.",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Taylor Hendricks",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis was relentless from the opening tip, with Cedric Coward's two-way brilliance setting a tone Brooklyn simply could never match. The Nets showed admirable resilience when Randle flexed in the third, but Hendricks' back-breaking threes exposed the ceiling of this Brooklyn squad. The Grizzlies' depth — four players in double figures — is becoming the most formidable weapon in the West.",
    },
    {
      gameId: "CHI-MIN-20261114",
      teams: { home: "MIN", away: "CHI" },
      finalScore: { home: 106, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:03",
          description: "Norman Powell rattled off seven quick points during a 15-4 Chicago run to close the first half, turning a six-point Minnesota lead into a three-point Bulls advantage at the break.",
          runScore: "15-4",
          momentum: "away",
          keyPlayer: "Norman Powell",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "LaMelo Ball erupted for 11 third-quarter points — including a half-court buzzer-beater attempt that barely missed — to drag Minnesota back within two, electrifying Target Center.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "Buddy Hield buried back-to-back threes on consecutive possessions to extend Chicago's lead to 11, draining the life from Minnesota's comeback effort and sealing a stunning road victory.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Buddy Hield",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LaMelo Ball",
          team: "MIN",
          description: "Crossover pull-up three from the wing to cut Chicago's lead to 4 with 6:08 remaining, threatening to ignite a full Minnesota rally at a raucous Target Center.",
          timeRemaining: "6:08",
          winProbabilityShift: -16,
        },
        {
          player: "Buddy Hield",
          team: "CHI",
          description: "Corner three off a Norman Powell drive-and-kick to push Chicago's lead back to 9 with 5:14 remaining, answering LaMelo's challenge and snapping Minnesota's momentum cold.",
          timeRemaining: "5:14",
          winProbabilityShift: 22,
        },
      ],
      narrative: "Chicago engineered one of the more surprising road wins of the young season, dismantling a Minnesota team that entered as heavy favorites at Target Center. Norman Powell's second-quarter takeover was the defining moment — his ability to get downhill and create for others exposed Rudy Gobert's offensive limitations catastrophically. Buddy Hield's fourth-quarter shooting then slammed every door LaMelo tried to open.",
    },
    {
      gameId: "DEN-NOP-20261114",
      teams: { home: "NOP", away: "DEN" },
      finalScore: { home: 108, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:48",
          description: "Nikola Jokic orchestrated a 14-3 Denver run with four assists and two baskets, dismantling New Orleans's zone defense with surgical precision and opening up the floor for his teammates.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:22",
          description: "Zion Williamson bullied his way to eight straight New Orleans points to bring the Pelicans within four, showcasing the kind of physicality that makes him nearly impossible to contain in short bursts.",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Jamal Murray splashed a step-back three and fed Jokic for a pick-and-roll finish on back-to-back possessions to push Denver's lead back to ten and neutralize New Orleans's third-quarter momentum.",
          runScore: "9-3",
          momentum: "away",
          keyPlayer: "Jamal Murray",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Power drive through contact, converted the and-one to cut Denver's lead to 5 with 5:33 remaining, threatening to turn Smoothie King Center into a madhouse.",
          timeRemaining: "5:33",
          winProbabilityShift: -13,
        },
        {
          player: "Jamal Murray",
          team: "DEN",
          description: "Step-back three from the top of the key over Jeremiah Fears to restore a nine-point Denver lead with 4:45 remaining, effectively ending New Orleans's window for a comeback.",
          timeRemaining: "4:45",
          winProbabilityShift: 21,
        },
      ],
      narrative: "Jokic was the maestro New Orleans had no answer for, threading dimes through impossible windows and scoring efficiently whenever the Pelicans dared to double. Zion's third-quarter surge made this feel briefly competitive, and Jeremiah Fears showed genuine poise for a rookie under pressure — but Murray's fourth-quarter step-back three was the kill shot that ended any drama. Denver's two-man advantage over every roster in the league remains absurd.",
    },
  ],
};