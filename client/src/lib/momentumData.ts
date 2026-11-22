// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 22, 2026
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
  generatedDate: "2026-11-22",
  date: "November 22, 2026",
  gameOfTheNight: "BOS-SAC-20261121",
  topClutchPerformer: {
    player: "Darius Acuff Jr.",
    team: "SAC",
    clutchRating: 94,
    description: "Acuff Jr. engineered Sacramento's final two possessions with poise beyond his years, dribbling out the clock and converting a mid-range jumper with 38 seconds left to give the Kings the lead they'd never surrender. His 8-assist, zero-turnover line in a 1-point upset over the defending-caliber Celtics is the defining clutch statement of the young season.",
  },
  games: [
    {
      gameId: "NOP-SAS-20261121",
      teams: { home: "SAS", away: "NOP" },
      finalScore: { home: 114, away: 91 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "Wembanyama opened the floodgates with back-to-back blocks that ignited a 14-2 Spurs run, pushing San Antonio out to a 28-13 lead and signaling that New Orleans had no answer for his two-way dominance.",
          runScore: "14-2 SAS run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "Wembanyama posted 18 third-quarter points alone, including three consecutive pull-up threes that stretched a manageable 12-point halftime lead into an insurmountable 28-point canyon. Jeremiah Fears' cosmetic scoring spree only underscored how complete the Spurs' stranglehold had become.",
          runScore: "22-8 SAS run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "Stephon Castle put the coda on the rout with two early fourth-quarter threes, bringing his three-point total to five and allowing Gregg Popovich to rest Wembanyama with eight minutes remaining in a game that had long since been decided.",
          runScore: "10-4 SAS run",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a basketball game — it was a one-man taxonomy of everything Victor Wembanyama can do to an overmatched opponent. His +35 differential in a 23-point win understates the margin; the Pelicans were eliminated as a competitive threat before halftime. At 14-3, San Antonio is building something that looks increasingly historic, and Wembanyama's 50-19-5-4 line will be referenced for years as the night a generational talent formally announced his arrival at the sport's summit.",
    },
    {
      gameId: "MIL-PHI-20261121",
      teams: { home: "PHI", away: "MIL" },
      finalScore: { home: 132, away: 129 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:45",
          description: "Tyler Herro erupted for 19 second-quarter points, including five three-pointers, to shock a complacent Philadelphia crowd and swing a game that felt like a formality into genuine doubt. The Bucks trailed by just 4 at halftime after looking dead on arrival in the first.",
          runScore: "22-9 MIL run",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "Joel Embiid responded to Herro's fireworks with an authoritative 11-point personal run — including a ferocious and-one over Lopez — that rebuilt Philadelphia's cushion to 14 and reminded the arena who the alpha was. The 76ers appeared to have reestablished full control.",
          runScore: "16-6 PHI run",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:48",
          description: "Herro and Brayden Burries combined for 10 straight Bucks points to slash a 13-point fourth-quarter deficit all the way to 3, triggering a timeout and a full Sixers crisis-management sequence that the sold-out Xfinity Mobile Arena did not expect to need.",
          runScore: "10-0 MIL run",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Embiid caught a lob entry, drew the foul, and converted both free throws with 1:12 remaining to push the lead back to 5, taking the air out of Milwaukee's furious rally at its most dangerous moment.",
          timeRemaining: "1:12",
          winProbabilityShift: 18,
        },
        {
          player: "Tyler Herro",
          team: "MIL",
          description: "Herro drained a step-back three from the left wing over Simons to cut the deficit to 2 with 28 seconds left, forcing Philadelphia into a four-corner stall and briefly making the unthinkable seem achievable for a 1-16 roster.",
          timeRemaining: "0:28",
          winProbabilityShift: -14,
        },
        {
          player: "Anfernee Simons",
          team: "PHI",
          description: "Simons split a double-team off the inbound, absorbed contact, and hit both free throws to seal the 132-129 final, capping his 18-point night with the two most important points of the evening.",
          timeRemaining: "0:11",
          winProbabilityShift: 22,
        },
      ],
      narrative: "Tyler Herro's 50-point masterpiece will live in highlight reels long after Milwaukee's 1-16 record is forgotten — a virtuoso performance on the wrong side of the ledger in the season's most statistically absurd game. Philadelphia held on, but Joel Embiid's 26-17-9 line was barely the second-most impressive individual effort on the court. This was a game that defied both records and expectations, proof that the NBA's nightly capacity for the extraordinary has no ceiling.",
    },
    {
      gameId: "BOS-SAC-20261121",
      teams: { home: "SAC", away: "BOS" },
      finalScore: { home: 97, away: 96 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:15",
          description: "Boston used a 16-5 second-quarter run fueled by Paul George's shot-making and Mike Conley's three-point barrage to build a 14-point lead, sending much of the Golden 1 Center crowd toward resigned silence as the expected Celtics victory took shape.",
          runScore: "16-5 BOS run",
          momentum: "away",
          keyPlayer: "Paul George",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Darius Acuff Jr. took over the Sacramento offense in the third quarter, threading eight assists in a sequence that generated 24 Sacramento points and completely erased Boston's lead. Domantas Sabonis' physical interior presence punished Boston's rotations on every trip.",
          runScore: "24-10 SAC run",
          momentum: "home",
          keyPlayer: "Darius Acuff Jr.",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "De'Andre Hunter hit a pull-up two to give Sacramento a 2-point lead and the arena found a voice it hadn't used in weeks. Boston and Sacramento then traded baskets in a white-knuckle sequence that came down to a single possession.",
          runScore: "6-4 SAC run",
          momentum: "home",
          keyPlayer: "De'Andre Hunter",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Darius Acuff Jr.",
          team: "SAC",
          description: "Acuff Jr. drove baseline, converted a floater over Boston's collapsing defense, and drew the foul — completing the three-point play that gave Sacramento a 97-94 lead with 1:05 remaining and shifted all pressure to the Celtics.",
          timeRemaining: "1:05",
          winProbabilityShift: 27,
        },
        {
          player: "Paul George",
          team: "BOS",
          description: "George hit a mid-range pull-up with 22 seconds left to trim the deficit to 1, setting the stage for what everyone assumed would be a Boston winner on the final possession. It was the last points either team would score.",
          timeRemaining: "0:22",
          winProbabilityShift: -19,
        },
        {
          player: "Domantas Sabonis",
          team: "SAC",
          description: "Sabonis sealed his man perfectly on Boston's final inbound, eliminating the post catch-and-shoot that the Celtics had scripted, forcing a contested perimeter heave at the buzzer that never had a chance.",
          timeRemaining: "0:00",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Sacramento just handed the Boston Celtics one of the most stinging one-point losses of the season, and they did it the hard way — erasing a double-digit second-quarter deficit against a team with championship pedigree and four times their win total. Darius Acuff Jr.'s 21-point, 8-assist night was an orchestral performance, and the Kings' final-possession defense — capped by Sabonis' textbook seal — denied Boston any semblance of a clean look. This is the win Sacramento frames on the wall; this is the loss Boston's coaching staff watches on loop until they understand exactly what went wrong.",
    },
    {
      gameId: "POR-NYK-20261121",
      teams: { home: "NYK", away: "POR" },
      finalScore: { home: 97, away: 96 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Donovan Clingan went on a one-man paint assault — 10 points in four minutes including two three-pointers that shocked the Madison Square Garden faithful — giving Portland a 7-point lead and genuine belief in a road upset.",
          runScore: "14-6 POR run",
          momentum: "away",
          keyPlayer: "Donovan Clingan",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Jalen Brunson answered with four consecutive three-pointers in a seven-minute stretch that turned a 6-point Knicks deficit into an 8-point lead, whipping MSG into the kind of frenzy that makes it the sport's most intimidating building.",
          runScore: "18-5 NYK run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:00",
          description: "Deni Avdija orchestrated an 8-2 Blazers closing run with 9 of his 20 points in the final three minutes, turning a comfortable Knicks cushion back into a 1-point game and giving Portland's bench the belief that the road win was there for the taking.",
          runScore: "8-2 POR run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Brunson hit his sixth three of the game — a pull-up over Avdija's outstretched hand with 54 seconds left — to push the lead to 4 and give New York a margin that felt decisive but would immediately be tested.",
          timeRemaining: "0:54",
          winProbabilityShift: 21,
        },
        {
          player: "Donovan Clingan",
          team: "POR",
          description: "Clingan turned a missed Knicks free throw into a fastbreak bucket to cut the deficit to 1 with 18 seconds remaining, transforming what looked like a comfortable New York close into a sudden survival situation.",
          timeRemaining: "0:18",
          winProbabilityShift: -16,
        },
        {
          player: "Landry Shamet",
          team: "NYK",
          description: "Shamet made both free throws after being intentionally fouled on the inbound to seal the 97-96 final, capping a 20-point night with the two most pressure-packed makes of his season.",
          timeRemaining: "0:09",
          winProbabilityShift: 24,
        },
      ],
      narrative: "Madison Square Garden earned every decibel it produced on Saturday night, watching Jalen Brunson's six-three-pointer masterclass nearly unravel in the game's final two minutes against a Portland team that refuses to die quietly. The Blazers and Knicks are mirror images at 10-6, sharing a conference boundary but separated by everything that makes winning close games a sustainable skill. Brunson's crunch-time shot-making is an art form; that Portland made him sweat for every point of it is a testament to a Trail Blazers squad that, game after game, has no business being this competitive.",
    },
    {
      gameId: "LAC-DAL-20261121",
      teams: { home: "DAL", away: "LAC" },
      finalScore: { home: 110, away: 100 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description: "Cooper Flagg imposed his will early with a 10-point first quarter that included two assists for Kyrie Irving threes, allowing Dallas to build a 9-point lead before the Clippers had found their offensive rhythm.",
          runScore: "14-5 DAL run",
          momentum: "home",
          keyPlayer: "Cooper Flagg",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:45",
          description: "Brook Lopez's back-to-back hook shots and a Walter Clayton Jr. turnover sparked a brief LA comeback, pulling the Clippers within 4 and briefly making American Airlines Center fidgety, before Kyrie Irving re-asserted control with three consecutive scores.",
          runScore: "10-4 LAC run",
          momentum: "away",
          keyPlayer: "Brook Lopez",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description: "Daniel Gafford registered his fourth offensive rebound of the half and converted the putback to extend Dallas's lead to 12, punctuating a performance that ended at a stunning +22 and effectively ended the Clippers' window for a comeback.",
          runScore: "12-4 DAL run",
          momentum: "home",
          keyPlayer: "Daniel Gafford",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Dallas didn't need to be brilliant to dispatch a Clippers team that has cycled through five different starting lineups and still hasn't found a cohesive identity in 15 games. Kyrie Irving was efficient, Cooper Flagg was assertive, and Daniel Gafford's +22 differential quietly tells the story of a center who controls games with physicality rather than box-score glamour. At 9-7 the Mavericks are quietly assembling the kind of two-way depth that makes them dangerous; at 4-11 the Clippers are assembling questions they don't yet have answers for.",
    },
    {
      gameId: "MEM-MIN-20261121",
      teams: { home: "MIN", away: "MEM" },
      finalScore: { home: 104, away: 95 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Jaden McDaniels ignited a 17-6 Minnesota run with consecutive mid-range jumpers and a defensive sequence that produced two Ayo Dosunmu steals in transition, allowing the Wolves to build a 14-point lead and neutralize Memphis's early energy.",
          runScore: "17-6 MIN run",
          momentum: "home",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "Cedric Coward scored 11 consecutive Grizzlies points to ignite a Memphis rally that cut the deficit to 5, restoring enough tension to make Target Center uncomfortable and forcing Minnesota's coaching staff into their first genuine defensive adjustments of the night.",
          runScore: "13-4 MEM run",
          momentum: "away",
          keyPlayer: "Cedric Coward",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Terrence Shannon Jr. hit back-to-back threes and Rudy Gobert swatted three consecutive Memphis shots to close the door emphatically, stretching the lead back to double digits and confirming that Minnesota's depth was simply too much for a Grizzlies team missing its usual defensive teeth.",
          runScore: "14-5 MIN run",
          momentum: "home",
          keyPlayer: "Terrence Shannon Jr.",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis needed this game — their 12-5 record now carries a blemish they'll want back — but Minnesota's depth overwhelmed them in waves that the Grizzlies never sustainably answered. Jaden McDaniels was the catalyst, Rudy Gobert was the anchor, and Ayo Dosunmu provided the kind of three-and-D efficiency that stretches defenses thin enough for everyone else to feast. Minnesota at 12-5 is an ascending team that just proved it can win when its stars don't go supernova; Memphis at 12-5 is an excellent team that was reminded, bluntly, that defensive intensity is a choice that must be made every single night.",
    },
  ],
};