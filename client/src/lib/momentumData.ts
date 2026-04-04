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
// DATA — April 3, 2026
// ═══════════════════════════════════════════════════════════

export const momentumData: MomentumData = {
  date: "April 3, 2026",
  gameOfTheNight: "OKC-DEN-20260402",
  topClutchPerformer: {
    player: "Nikola Jokić",
    team: "DEN",
    clutchRating: 97.8,
    description: "Scored 12 of his 34 points in the fourth quarter of a one-possession game, including back-to-back buckets to push the lead to 7 with 2:30 remaining. Added 3 assists and 2 rebounds in the final period to seal Denver's eighth straight win. Shot 5-of-7 in the fourth with the game completely on the line.",
  },
  games: [
    {
      gameId: "OKC-DEN-20260402",
      teams: { home: "OKC", away: "DEN" },
      finalScore: { home: 119, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:44",
          description: "SGA explodes out of the gate with 10 first-quarter points — two mid-range pull-ups, a step-back three, and a euro-step layup. Paycom Center is deafening. Denver looks rattled.",
          runScore: "14-4 run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:12",
          description: "Jokić goes to work in the post — 4 consecutive possessions, 4 different moves. He draws three fouls and scores 9 straight Denver points to erase the deficit and tie it at 47.",
          runScore: "15-5 run",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "Chet Holmgren and Jalen Williams combine for 11 third-quarter points on an 11-2 OKC run. The Thunder push the lead back to 9 and Paycom Center senses the close.",
          runScore: "11-2 run",
          momentum: "home",
          keyPlayer: "Chet Holmgren",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:10",
          description: "Jokić orchestrates a masterclass fourth quarter. He scores 6 straight Denver points himself, then threads back-to-back no-look passes to Aaron Gordon and Michael Porter Jr. for easy buckets. A 12-3 Denver run flips the game.",
          runScore: "12-3 run",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Back-to-back post buckets with 2:30 remaining push Denver's lead to 7 — a turnaround jumper over Holmgren followed by a drop-step with SGA draped on him",
          timeRemaining: "2:30",
          winProbabilityShift: 31,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Step-back three over Jamal Murray cuts the deficit to 4 with 1:12 remaining and keeps OKC alive",
          timeRemaining: "1:12",
          winProbabilityShift: -16,
        },
      ],
      narrative: "This was the game of the season. Two legitimate MVP candidates, two Western Conference contenders, a sell-out crowd in Oklahoma City and everything on the line. SGA set the tone early with 10 first-quarter points and the Thunder looked in complete control. Then Nikola Jokić happened. The big man's second-quarter takeover — 9 straight points using a different move every time — was a reminder that there is no answer for him when he decides to impose his will. The game traded haymakers through three quarters before Jokić authored the decisive stretch: a masterful fourth quarter that combined 12 points with 3 fourth-quarter assists in Denver's 12-3 closing run. The two clutch post buckets at the 2:30 mark were the dagger. Denver extends its win streak to eight, Jokić posts a 34/14/11 triple-double, and the MVP race is officially a conversation again.",
    },
    {
      gameId: "NYK-CLE-20260402",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 115, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description: "Darius Garland goes on a personal 9-0 Cleveland run in the first quarter. The Cavs defense locks up the Knicks offense and Cleveland leads by 8.",
          runScore: "9-0 run",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:45",
          description: "Brunson takes over. Scores 11 points in a 4-minute stretch — two mid-range pull-ups, a floater through the lane, and a three off the dribble. New York leads by 5 at the half and MSG is fully alive.",
          runScore: "16-5 run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:20",
          description: "Brunson hits back-to-back clutch pull-ups over Mitchell to push the lead to 9. Cleveland's comeback bid effectively ends here. MSG erupts for win number 50.",
          runScore: "8-2 run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Back-to-back pull-up jumpers over Donovan Mitchell with 3:20 remaining — pushes the lead to 9 and seals New York's 50th win",
          timeRemaining: "3:20",
          winProbabilityShift: 28,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Back-to-back threes to cut the fourth-quarter deficit to 5 and give Cleveland a last flicker of life",
          timeRemaining: "5:40",
          winProbabilityShift: -19,
        },
      ],
      narrative: "The Knicks needed a milestone win and Jalen Brunson delivered one. Cleveland took an 8-point first-quarter lead on the strength of Darius Garland's shooting, but Brunson's 11-point second-quarter eruption flipped the game entirely. The defining sequence came at the 3:20 mark in the fourth — back-to-back pull-up jumpers over Donovan Mitchell that pushed the lead to 9 and sent Madison Square Garden into delirium. Brunson finished with 34 points on 13-of-22 shooting. New York hits 50 wins and the Garden faithful are fully locked in.",
    },
    {
      gameId: "ATL-PHI-20260402",
      teams: { home: "ATL", away: "PHI" },
      finalScore: { home: 121, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:00",
          description: "Joel Embiid attacks the paint early — 8 first-quarter points and two Trae Young fouls drawn. Philadelphia leads by 7 and the Atlanta crowd is nervous.",
          runScore: "11-4 run",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:20",
          description: "Trae Young goes into full playmaker mode — 6 assists in the second quarter, with Atlanta running its offense to perfection. The Hawks go on a 19-6 run and lead by 6 at the half.",
          runScore: "19-6 run",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:00",
          description: "Trae drills back-to-back pull-up threes to push the Atlanta lead to 10. Philadelphia tries to foul and claw back but the Hawks hold on for the W2.",
          runScore: "10-3 run",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Back-to-back pull-up threes with 4 minutes remaining — first off a pick-and-roll, second off his own offensive rebound create — to push the lead to double digits",
          timeRemaining: "4:00",
          winProbabilityShift: 33,
        },
      ],
      narrative: "Philadelphia gave Atlanta a real test. Embiid came out aggressive in the first quarter and the 76ers led by 7 before Trae Young wrestled control back with a second-quarter master class. Six assists in the second period — all leading to open threes or dunks — ignited Atlanta's 19-6 run. Young finished with 31 points and 11 assists and the Hawks closed it out with two dagger pull-up threes in the fourth. Atlanta wins its second straight and finishes 44-34. Trae is playing his best basketball of the season.",
    },
    {
      gameId: "ORL-CHA-20260402",
      teams: { home: "ORL", away: "CHA" },
      finalScore: { home: 104, away: 98 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:15",
          description: "LaMelo Ball catches fire with two back-to-back step-back threes and a fast-break layup — Charlotte goes on a 12-3 run and takes the lead into halftime by 4.",
          runScore: "12-3 run",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:40",
          description: "Banchero asserts himself in the third — three consecutive post-up baskets and a transition slam. Orlando takes back the lead with a 14-4 run and the Amway Center is on its feet.",
          runScore: "14-4 run",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:55",
          description: "Banchero converts a tough and-one bucket in traffic to push Orlando's lead to 8. Charlotte's final rally never materializes.",
          runScore: "6-1 run",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "And-one conversion through contact with 2:55 remaining — hit the floater, absorbed the contact, and made the free throw to push Orlando's lead to 8",
          timeRemaining: "2:55",
          winProbabilityShift: 26,
        },
      ],
      narrative: "This was tighter than it should have been. LaMelo Ball took control in the second quarter with two step-back threes and gave Charlotte a 4-point halftime lead. Then Paolo Banchero woke up. The Orlando forward posted up three consecutive times in the third quarter — three different counters — and his transition slam off a Banchero outlet was the momentum-shifting sequence Orlando needed. The and-one with under three minutes remaining sealed a hard-fought 40th win. It wasn't pretty, but Orlando is still in the play-in hunt.",
    },
    {
      gameId: "PHX-GSW-20260402",
      teams: { home: "PHX", away: "GSW" },
      finalScore: { home: 122, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:00",
          description: "Booker hits three first-quarter threes in a 5-minute stretch. Phoenix goes on a 16-4 run and the Footprint Center crowd senses a statement game from the opening tip.",
          runScore: "16-4 run",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:00",
          description: "Brandin Podziemski hits two threes and Golden State goes on a 10-2 run to briefly cut the deficit to 8. The Warriors show a short-lived pulse.",
          runScore: "10-2 run",
          momentum: "away",
          keyPlayer: "Brandin Podziemski",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "7:30",
          description: "Booker goes on a personal 8-0 run to open the second half — a pull-up three, a driving dunk, and a step-back mid-range that bounces in. Golden State's bench never recovers. Phoenix leads by 24.",
          runScore: "8-0 run",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Devin Booker",
          team: "PHX",
          description: "Personal 8-0 run to open the third quarter — three different looks, all in — to expand the lead to 24 and end Golden State's competitive night entirely",
          timeRemaining: "Q3 7:30",
          winProbabilityShift: 29,
        },
      ],
      narrative: "This wasn't a game — it was an audition for playoff relevance. Devin Booker came out incandescent, hitting three first-quarter threes to set the tone for what became a 21-point Phoenix dismantling of a Golden State team that is coming apart at its seams. Podziemski briefly kept the Warriors alive in the second quarter, but Booker's personal 8-0 opening to the third ended all competitive uncertainty. He finished with 35 points on 13-of-22 shooting with 6 rebounds. Phoenix improves to 42-34 and has won four of its last five. The Warriors fall to 36-41 and the sell-off conversation in Golden State is growing louder by the night.",
    },
  ],
};
