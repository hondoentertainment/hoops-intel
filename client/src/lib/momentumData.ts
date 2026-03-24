// Momentum Engine — Real-time narrative momentum shifts
// Last updated: March 23, 2026
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
// DATA — March 23, 2026
// ═══════════════════════════════════════════════════════════

export const momentumData: MomentumData = {
  date: "March 23, 2026",
  gameOfTheNight: "LAL-HOU-20260322",
  topClutchPerformer: {
    player: "Luka Dončić",
    team: "LAL",
    clutchRating: 98.4,
    description: "Scored 14 of his 38 points in the fourth quarter, including the step-back three with 47 seconds left that sealed the Lakers' seventh straight win. Shot 5-of-6 in the final period with two assists.",
  },
  games: [
    {
      gameId: "LAL-HOU-20260322",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 115, away: 118 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:34",
          description: "Kevin Durant hits three consecutive jumpers as Houston opens on a 12-3 run. Toyota Center erupts. Lakers look flat early.",
          runScore: "12-3 run",
          momentum: "home",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:12",
          description: "Anthony Davis takes over inside — scores 8 straight points with two dunks and a mid-range fadeaway. Lakers tie it at 48.",
          runScore: "13-4 run",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "Alperen Sengun orchestrates a devastating pick-and-roll sequence. Houston pushes the lead to 11 with a 16-5 run spanning the half.",
          runScore: "16-5 run",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:22",
          description: "Luka Dončić goes supernova. Scores 9 straight points — a pull-up three, a driving layup through contact, and a stepback midrange — to cut the deficit to 2.",
          runScore: "14-2 run",
          momentum: "away",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:47",
          description: "Luka step-back three over Dillon Brooks. Nothing but net. Lakers lead 116-113. Toyota Center goes silent.",
          runScore: "5-0 run",
          momentum: "away",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Dončić",
          team: "LAL",
          description: "Step-back three over Brooks with 47 seconds remaining to put Lakers up 116-113",
          timeRemaining: "0:47",
          winProbabilityShift: 34,
        },
        {
          player: "Austin Reaves",
          team: "LAL",
          description: "Steals the inbound pass and converts both free throws to ice the game",
          timeRemaining: "0:12",
          winProbabilityShift: 22,
        },
        {
          player: "Kevin Durant",
          team: "HOU",
          description: "Hits a contested fadeaway to cut the lead to 1 and keep Houston alive",
          timeRemaining: "1:34",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the game of the season in the Western Conference. Houston controlled the tempo for three quarters, building an 11-point lead behind Kevin Durant and Alperen Sengun's pick-and-roll mastery. But the fourth quarter belonged to Luka Dončić. He scored 14 of his 38 points in the final period, systematically dismantling Houston's defense with a mix of pull-up threes and surgical drives. The defining moment came with 47 seconds left — Luka sized up Dillon Brooks, crossed right, and launched a step-back three that ripped through the net. Toyota Center fell silent. The Lakers have won seven straight and Luka is playing the best basketball of his career. This is what Los Angeles traded for.",
    },
    {
      gameId: "OKC-BRK-20260322",
      teams: { home: "BRK", away: "OKC" },
      finalScore: { home: 98, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:15",
          description: "SGA opens with a personal 8-0 run in the first two minutes. The Nets have no answer for his midrange game.",
          runScore: "8-0 run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:30",
          description: "Chet Holmgren blocks three consecutive shots in a 90-second span, igniting a Thunder fast break that pushes the lead to 19.",
          runScore: "11-0 run",
          momentum: "away",
          keyPlayer: "Chet Holmgren",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:10",
          description: "Brooklyn briefly shows fight with a Nic Claxton-fueled 9-2 run, cutting the deficit to 12. But it's the high-water mark.",
          runScore: "9-2 run",
          momentum: "home",
          keyPlayer: "Nic Claxton",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:44",
          description: "SGA responds immediately with back-to-back threes and a lob to Holmgren. The lead balloons back to 23. Thunder bench comes in.",
          runScore: "12-3 run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Reaches 20 points in the second quarter — extending his all-time record to 130 consecutive 20-point games",
          timeRemaining: "Q2 3:18",
          winProbabilityShift: 8,
        },
        {
          player: "Chet Holmgren",
          team: "OKC",
          description: "Triple block sequence in Q2 that extinguished any Brooklyn hope — three rejections in 90 seconds",
          timeRemaining: "Q2 4:30",
          winProbabilityShift: 15,
        },
      ],
      narrative: "This was never a game. SGA scored the first 8 points and Oklahoma City never looked back. The MVP frontrunner needed only three quarters to drop 25 points — extending his all-time record to 130 consecutive 20-point games — before sitting the entire fourth. Chet Holmgren's defensive dominance (4 blocks, 18 points, 10 rebounds) made this feel like a heavyweight sparring with a featherweight. The Thunder are 55-15 and on pace for 65 wins. Brooklyn is merely the latest team to learn that playing OKC right now is an exercise in futility.",
    },
    {
      gameId: "GSW-BOS-20260322",
      teams: { home: "BOS", away: "GSW" },
      finalScore: { home: 118, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:40",
          description: "Brandin Podziemski hits two early threes and Golden State leads by 6. The Curry-less Warriors show early fight.",
          runScore: "10-2 run",
          momentum: "away",
          keyPlayer: "Brandin Podziemski",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "8:15",
          description: "Jayson Tatum takes control with 11 points in three minutes. Pull-up threes, slashing dunks — Boston seizes a lead they never relinquish.",
          runScore: "18-4 run",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "Jaylen Brown and Derrick White combine for 14 straight Boston points. The lead reaches 22. TD Garden is in cruise control.",
          runScore: "14-0 run",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "11 points in a 3-minute second-quarter stretch that flipped the game permanently",
          timeRemaining: "Q2 8:15",
          winProbabilityShift: 28,
        },
      ],
      narrative: "The Warriors came to TD Garden without Stephen Curry and left with their record below .500 for the first time since January. Brandin Podziemski showed early promise with two first-quarter threes, but Jayson Tatum extinguished any Golden State hope with an 11-point second-quarter blitz. From there, it was a Boston layup drill. Tatum finished with 31, Brown added 24, and the Celtics won their third straight. Golden State at 33-36 is a franchise at a crossroads — and without Curry, the path forward looks bleak.",
    },
    {
      gameId: "ATL-DAL-20260322",
      teams: { home: "DAL", away: "ATL" },
      finalScore: { home: 116, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Cooper Flagg comes out firing with 12 first-quarter points. The rookie is fearless — attacking the rim and hitting a transition three.",
          runScore: "14-6 run",
          momentum: "home",
          keyPlayer: "Cooper Flagg",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:50",
          description: "Jalen Johnson answers with a personal 10-0 run — including a poster dunk and a step-back three. Hawks take the lead at halftime.",
          runScore: "15-4 run",
          momentum: "away",
          keyPlayer: "Jalen Johnson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description: "Trae Young dishes 5 assists in a 4-minute stretch. The Hawks push the lead to 12 with crisp ball movement and open threes.",
          runScore: "13-2 run",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:15",
          description: "Flagg and Dallas mount a furious comeback — an 11-2 run cuts it to 3. American Airlines Center is deafening.",
          runScore: "11-2 run",
          momentum: "home",
          keyPlayer: "Cooper Flagg",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:30",
          description: "Nickeil Alexander-Walker hits the dagger three from the right wing. Hawks maintain composure and close out win number 11.",
          runScore: "6-0 run",
          momentum: "away",
          keyPlayer: "Nickeil Alexander-Walker",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nickeil Alexander-Walker",
          team: "ATL",
          description: "Dagger three-pointer from the right wing with 1:30 remaining to push the lead back to 6 and seal the 11th straight win",
          timeRemaining: "1:30",
          winProbabilityShift: 26,
        },
        {
          player: "Cooper Flagg",
          team: "DAL",
          description: "Driving layup through contact to complete an 11-2 Dallas run and cut the deficit to 3",
          timeRemaining: "4:15",
          winProbabilityShift: -20,
        },
        {
          player: "Jalen Johnson",
          team: "ATL",
          description: "Blocked Flagg at the rim on a potential game-tying drive with 2:10 remaining",
          timeRemaining: "2:10",
          winProbabilityShift: 14,
        },
      ],
      narrative: "The Hawks' 11-game winning streak was tested in Dallas. Cooper Flagg — the fearless rookie — came out swinging with 12 first-quarter points and nearly led a furious fourth-quarter comeback. But Atlanta's championship-caliber composure prevailed. Jalen Johnson answered Flagg's brilliance with 28 points and a crucial block, while Nickeil Alexander-Walker delivered the dagger three with 1:30 remaining. The Hawks are 38-31 and nobody in the East wants to see them right now. This streak is no accident — it's the product of a team that plays with the poise of a veteran contender.",
    },
    {
      gameId: "POR-IND-20260322",
      teams: { home: "IND", away: "POR" },
      finalScore: { home: 105, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:00",
          description: "Indiana goes on a 10-0 run behind Jarace Walker to take a 7-point halftime lead. Portland looks defeated.",
          runScore: "10-0 run",
          momentum: "home",
          keyPlayer: "Jarace Walker",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "8:30",
          description: "Deni Avdija sparks a 16-4 third-quarter blitz. Portland turns defensive stops into fast-break points and erases the deficit entirely.",
          runScore: "16-4 run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Portland maintains control with balanced scoring. Avdija, Sharpe, and Camara combine for 14 fourth-quarter points.",
          runScore: "14-7 run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Deni Avdija",
          team: "POR",
          description: "Personal 8-0 run to open the third quarter that erased Indiana's 7-point lead",
          timeRemaining: "Q3 8:30",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Portland's play-in hopes hung by a thread in Indianapolis — down 7 at halftime and looking listless. Then Deni Avdija happened. The Israeli forward opened the third quarter with a personal 8-0 run and Portland outscored Indiana 34-22 in the period. It was the kind of quarter that saves seasons. Portland moves to 34-36 and keeps its slim postseason hopes alive.",
    },
    {
      gameId: "TOR-CHI-20260322",
      teams: { home: "CHI", away: "TOR" },
      finalScore: { home: 111, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:40",
          description: "Josh Giddey orchestrates a smooth Chicago offense — 7 assists in the first quarter as the Bulls build a 9-point lead.",
          runScore: "13-4 run",
          momentum: "home",
          keyPlayer: "Josh Giddey",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "3:15",
          description: "Brandon Ingram catches fire from deep — three consecutive threes in a 4-minute stretch. Toronto takes the lead and never gives it back.",
          runScore: "17-6 run",
          momentum: "away",
          keyPlayer: "Brandon Ingram",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Brandon Ingram",
          team: "TOR",
          description: "Three consecutive three-pointers in the second quarter to erase a 9-point deficit and seize control",
          timeRemaining: "Q2 3:15",
          winProbabilityShift: 35,
        },
      ],
      narrative: "Brandon Ingram continues to validate the trade. Three straight three-pointers in the second quarter turned a 9-point deficit into a Toronto lead, and the Raptors never looked back. Ingram finished with 28 for the third consecutive game — shooting 5-of-7 from deep. Chicago's Josh Giddey had a solid 18/9/7 but the Bulls simply couldn't contain Ingram's scoring versatility. Toronto at 39-29 is a legitimate playoff threat in the East.",
    },
    {
      gameId: "UTA-MIN-20260322",
      teams: { home: "MIN", away: "UTA" },
      finalScore: { home: 120, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:00",
          description: "Julius Randle posts up three straight times for easy buckets. Minnesota leads by 12 after one quarter without Edwards.",
          runScore: "12-2 run",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Bones Hyland comes off the bench and erupts for 12 third-quarter points — including four three-pointers. The lead reaches 24.",
          runScore: "16-6 run",
          momentum: "home",
          keyPlayer: "Bones Hyland",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Bones Hyland",
          team: "MIN",
          description: "Four three-pointers in the third quarter off the bench to blow the game open",
          timeRemaining: "Q3 5:30",
          winProbabilityShift: 19,
        },
      ],
      narrative: "Minnesota doesn't miss Anthony Edwards — at least not yet. Julius Randle dominated early with 28 points and Bones Hyland provided the fireworks off the bench with 20. The Wolves led by double digits for virtually the entire game. Utah's Keyonte George had 20 but the Jazz were overmatched in every phase. Minnesota at 43-27 is proving they have the depth to weather Edwards' absence.",
    },
    {
      gameId: "LAC-NOP-20260322",
      teams: { home: "NOP", away: "LAC" },
      finalScore: { home: 106, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:45",
          description: "Zion Williamson attacks the basket for 10 second-quarter points. The Pelicans grab a 6-point lead at the half.",
          runScore: "12-4 run",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:10",
          description: "Norman Powell scores 11 in the third quarter. The Clippers' bench unit erases the deficit with a sustained 15-4 run.",
          runScore: "15-4 run",
          momentum: "away",
          keyPlayer: "Norman Powell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:00",
          description: "Kawhi Leonard checks in from his minutes restriction and immediately scores 6 points. The Clippers pull away late.",
          runScore: "8-2 run",
          momentum: "away",
          keyPlayer: "Kawhi Leonard",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Kawhi Leonard",
          team: "LAC",
          description: "Scored 6 points in a 3-minute fourth-quarter stint while on a minutes restriction to seal the win",
          timeRemaining: "3:00",
          winProbabilityShift: 16,
        },
        {
          player: "James Harden",
          team: "LAC",
          description: "Threaded a behind-the-back pass to Powell for a corner three that gave the Clippers the lead for good",
          timeRemaining: "Q3 2:40",
          winProbabilityShift: 12,
        },
      ],
      narrative: "The Clippers survived in New Orleans — barely. Zion Williamson was a force in the first half with 24 points but faded down the stretch. Norman Powell's 21 points off the bench carried the load while Kawhi Leonard managed his minutes restriction. The Clippers at 35-34 are clinging to the 8-seed by their fingernails. Every game is a must-win from here.",
    },
    {
      gameId: "DEN-MEM-20260322",
      teams: { home: "MEM", away: "DEN" },
      finalScore: { home: 105, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:00",
          description: "Memphis opens with energy behind a 9-3 run. The home crowd tries to will the Grizzlies to break their losing streak.",
          runScore: "9-3 run",
          momentum: "home",
          keyPlayer: "Desmond Bane",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:15",
          description: "Jokic takes over with a masterclass — 4 assists and 8 points in a 5-minute stretch. Denver leads by 10 at the half.",
          runScore: "18-7 run",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:00",
          description: "Jamal Murray hits three consecutive mid-range shots. Denver pushes the lead to 18 and Memphis waves the white flag.",
          runScore: "10-2 run",
          momentum: "away",
          keyPlayer: "Jamal Murray",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Orchestrated an 18-7 second-quarter run with 4 assists and 8 points to seize permanent control",
          timeRemaining: "Q2 5:15",
          winProbabilityShift: 24,
        },
      ],
      narrative: "Nikola Jokic was one assist shy of yet another triple-double — 22 points, 11 rebounds, 9 assists — as Denver dispatched Memphis with surgical precision. The Grizzlies have now lost nine straight and are firmly in the lottery. For Denver, it's the opposite: Jamal Murray looked sharp with 20 points and the Nuggets have won three of four. At 43-27, they're in the thick of a crowded 5-6 seed race.",
    },
  ],
};
