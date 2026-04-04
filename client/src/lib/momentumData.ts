// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 4, 2026
// Live at: https://hoopsintel.net/momentum

// ═══════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════

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
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

// ═══════════════════════════════════════════════════════════
// DATA — April 4, 2026
// ═══════════════════════════════════════════════════════════

export const momentumData: MomentumData = {
  date: "April 4, 2026",
  gameOfTheNight: "SAS-MIN-20260403",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 98.2,
    description: "Scored 10 of his 28 points in the fourth quarter with 4 blocks on the night — including two consecutive swats in the final 3 minutes that ended Minnesota's comeback bid. His block on Edwards at the 1:45 mark was the defining play of the game. Finished with 28/12/5/4BLK and extended San Antonio's win streak to 11.",
  },
  games: [
    {
      gameId: "SAS-MIN-20260403",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 114, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:30",
          description: "Edwards attacks early with 11 first-quarter points — a transition dunk, two pull-up threes, and a euro-step finish. Target Center is rocking and Minnesota leads by 9.",
          runScore: "15-6 run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:45",
          description: "Wembanyama takes over the second quarter. Three consecutive possessions — a face-up three, a turnaround hook, and a putback dunk off his own miss. San Antonio goes on a 16-4 run and ties the game at 52.",
          runScore: "16-4 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:20",
          description: "Minnesota responds with a 10-2 run led by Edwards and Gobert — two Gobert lobs and an Edwards step-back three push the Wolves back ahead by 6.",
          runScore: "10-2 run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:15",
          description: "Wembanyama orchestrates the decisive stretch. He blocks Edwards at the rim, starts the fast break, then drills a pull-up three in transition. Three possessions later he swats Gobert's layup attempt. San Antonio goes on a 14-3 run and takes a 7-point lead.",
          runScore: "14-3 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Back-to-back blocks in the final 3 minutes — first a chase-down on Edwards' driving layup, then a poster-denial at the rim that sent Target Center into stunned silence. The finger wag after the second block went viral instantly.",
          timeRemaining: "1:45",
          winProbabilityShift: 34,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Step-back three over Vassell with 3:40 remaining cuts the deficit to 4 and gives Minnesota one last lifeline before Wemby's block sequence",
          timeRemaining: "3:40",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the statement game of the season. Edwards came out blazing with 11 first-quarter points and Minnesota's home crowd was electric. Then Wembanyama flipped a switch. His second-quarter takeover — three consecutive possessions, three different looks, all converted — erased a 9-point deficit and announced that San Antonio was not going away. The game seesawed through three quarters before Wemby authored the defining sequence: a 14-3 fourth-quarter run anchored by his own scoring and two thunderous blocks that silenced Target Center. The chase-down block on Edwards at the 1:45 mark — followed by the finger wag — was the single most electrifying play of the 2025-26 season. San Antonio extends its win streak to 11 and ties OKC at 59-18. The one-seed race is officially on.",
    },
    {
      gameId: "BOS-DET-20260403",
      teams: { home: "BOS", away: "DET" },
      finalScore: { home: 108, away: 102 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:15",
          description: "Cade Cunningham opens with 9 quick points — a pull-up three, a driving and-one, and a mid-range fadeaway. Detroit leads by 6 and the Pistons look locked in early.",
          runScore: "12-6 run",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:30",
          description: "Tatum catches fire in the second quarter — 13 points in a 5-minute stretch including three consecutive mid-range pull-ups. Boston goes on a 17-5 run and takes a 9-point halftime lead.",
          runScore: "17-5 run",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:00",
          description: "Detroit mounts a late push — Cunningham and Ivey combine for 8 points in 90 seconds to cut the lead to 3. TD Garden gets nervous before Tatum answers with a step-back jumper.",
          runScore: "8-0 run",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Step-back mid-range jumper over Cunningham with 2:10 remaining pushes the lead back to 5 and effectively ends Detroit's comeback bid",
          timeRemaining: "2:10",
          winProbabilityShift: 24,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Driving and-one through contact to cut Boston's lead to 3 and give Detroit a pulse in the fourth quarter",
          timeRemaining: "4:15",
          winProbabilityShift: -15,
        },
      ],
      narrative: "Boston had to earn this one. Cade Cunningham came out aggressive and Detroit led by 6 in the first quarter before Tatum took control with a scorching second-quarter stretch. His 13 points in 5 minutes flipped the game and Boston took a comfortable halftime lead. The Pistons made it interesting in the fourth — Cunningham and Ivey combining for a quick 8-0 run to cut it to 3 — but Tatum answered with a clutch step-back jumper that put the game away. Tatum finished with 29/7/5 and the Celtics extended their win streak to 6. The East lead is down to 2 games but Boston keeps handling business.",
    },
    {
      gameId: "LAL-HOU-20260403",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 119, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:50",
          description: "Jalen Green opens hot with two first-quarter threes and Houston takes an early 7-point lead. The Rockets' pace has the Lakers scrambling in transition defense.",
          runScore: "13-6 run",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Luka takes over. A step-back three, a no-look dime for an alley-oop, and a driving floater through three defenders. The Lakers go on an 18-4 run and Crypto.com Arena erupts.",
          runScore: "18-4 run",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description: "Luka orchestrates a 12-2 run to open the second half — two assists for open threes and a pull-up mid-range. The Lakers push the lead to 15 and the game is effectively over.",
          runScore: "12-2 run",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Dončić",
          team: "LAL",
          description: "Back-to-back possessions to open the third quarter — a step-back three and a no-look assist for an open corner three — to push the lead to 15 and break Houston's spirit",
          timeRemaining: "Q3 10:30",
          winProbabilityShift: 27,
        },
        {
          player: "Jalen Green",
          team: "HOU",
          description: "Two consecutive threes in the first quarter to give Houston an early 7-point cushion before Luka heated up",
          timeRemaining: "Q1 5:50",
          winProbabilityShift: -12,
        },
      ],
      narrative: "Luka Dončić reminded everyone why the Lakers traded for him. Houston came out fast behind Jalen Green's early shooting and took a 7-point lead, but Luka's second-quarter eruption — 18-4 run featuring every shot in his arsenal — flipped the game on its head. The third-quarter opener was pure Luka: a step-back three followed by a no-look dish that pushed the lead to 15 and took the fight out of the Rockets entirely. He finished with 32/7/9 and the Lakers improved to 51-26 with their fourth straight win. Los Angeles looks locked in and Luka is operating at a superstar level that makes this team genuinely dangerous.",
    },
    {
      gameId: "PHI-TOR-20260403",
      teams: { home: "PHI", away: "TOR" },
      finalScore: { home: 116, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:45",
          description: "Scottie Barnes goes off for 10 second-quarter points — a transition slam, two face-up jumpers, and a euro-step finish. Toronto takes a 5-point lead into halftime and Philly fans are restless.",
          runScore: "14-5 run",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Maxey ignites the comeback. He scores 14 third-quarter points — three threes and a driving layup through traffic. Philadelphia goes on a 19-7 run and takes the lead back by 4.",
          runScore: "19-7 run",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "Toronto claws back to within 1, but Maxey answers with a pull-up three from 28 feet that pushes the lead to 4 and silences the Raptors' rally.",
          runScore: "7-2 run",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Pull-up three from 28 feet with 2:10 remaining after Toronto had cut the lead to 1 — a dagger that locked the 6-seed for Philadelphia",
          timeRemaining: "2:10",
          winProbabilityShift: 29,
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Driving layup through two defenders to cut the deficit to 1 with 2:45 remaining and give Toronto a real chance at the upset",
          timeRemaining: "2:45",
          winProbabilityShift: -22,
        },
      ],
      narrative: "Philadelphia needed this one and Tyrese Maxey made sure they got it. Toronto's Scottie Barnes was brilliant in the first half — 10 second-quarter points that gave the Raptors a 5-point halftime lead. But Maxey exploded in the third quarter with 14 points including three threes that swung the momentum decisively. When Toronto clawed back to within 1 in the fourth, Maxey pulled up from 28 feet and buried the dagger three that locked the 6-seed. He finished with 33/6 and the Sixers bounced back exactly when they needed to. Barnes' frustration was visible — he's doing everything he can on a team going nowhere.",
    },
    {
      gameId: "IND-MIL-20260403",
      teams: { home: "IND", away: "MIL" },
      finalScore: { home: 126, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:00",
          description: "Giannis Antetokounmpo attacks the rim for 8 early points and Milwaukee takes a 6-point lead. The Bucks look engaged for the first time in weeks.",
          runScore: "12-6 run",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Haliburton goes into orchestration mode. Four assists in 3 minutes — two lobs to Turner, an entry pass to Siakam, and a kick-out three to Nesmith. Indiana goes on a 20-6 run and takes a 12-point halftime lead.",
          runScore: "20-6 run",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Haliburton scores 8 straight Indiana points to open the second half — a pull-up three, a floater, and a driving layup. The lead balloons to 19 and Milwaukee's body language collapses.",
          runScore: "8-0 run",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Personal 8-0 run to open the third quarter — three different looks, all converted — to push the lead to 19 and end any remaining Milwaukee resistance",
          timeRemaining: "Q3 9:00",
          winProbabilityShift: 25,
        },
        {
          player: "Giannis Antetokounmpo",
          team: "MIL",
          description: "Transition dunk and an and-one in the first quarter that briefly gave Milwaukee life and a 6-point lead",
          timeRemaining: "Q1 8:00",
          winProbabilityShift: -10,
        },
      ],
      narrative: "Indiana made a statement. Giannis came out aggressive in the first quarter and Milwaukee led by 6, but once Haliburton shifted into playmaking gear in the second quarter, the game was over. Four assists in 3 minutes — each one more creative than the last — fueled a 20-6 run that gave Indiana a commanding halftime lead. Haliburton then scored 8 straight to open the third and the Bucks mentally checked out. Milwaukee's body language deteriorated rapidly and the final margin of 21 points flattered them. Haliburton finished with 25/10 and ran the Indiana offense like a point guard who belongs in the All-NBA conversation. The Pacers are not to be taken lightly.",
    },
  ],
};
