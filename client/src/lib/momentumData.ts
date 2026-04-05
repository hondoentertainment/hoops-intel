// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 5, 2026
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
// DATA — April 5, 2026
// ═══════════════════════════════════════════════════════════

export const momentumData: MomentumData = {
  date: "April 5, 2026",
  gameOfTheNight: "OKC-SAS-20260404",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 99.1,
    description: "Scored 14 of his 32 points in the fourth quarter with 3 blocks on the night — including a fadeaway over Holmgren that broke the internet and a chase-down block on SGA that sealed the game. Finished with 32/10/6/3BLK and seized the one-seed for San Antonio at 60-18 with a 12-game win streak.",
  },
  games: [
    {
      gameId: "OKC-SAS-20260404",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 113, away: 118 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:00",
          description: "SGA opens aggressively with 10 first-quarter points — a pull-up three, two mid-range jumpers, and a driving finish through contact. The Thunder crowd is deafening and OKC leads by 8.",
          runScore: "14-6 run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:45",
          description: "Wembanyama erases the deficit single-handedly. A face-up three over Holmgren, a spin move baseline dunk, and a block on the other end that starts a fast break layup. San Antonio goes on a 17-4 run and takes a 3-point halftime lead.",
          runScore: "17-4 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "OKC responds with a 12-3 run — Dort hits two corner threes and SGA finishes through traffic twice. The Thunder retake the lead by 4 and the arena erupts.",
          runScore: "12-3 run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Wembanyama takes over the fourth quarter. The iconic fadeaway over Holmgren from the left elbow, then a step-back three, then a chase-down block on SGA's driving layup. San Antonio goes on a 15-4 run and seizes a 7-point lead that OKC cannot overcome.",
          runScore: "15-4 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "The fadeaway over Holmgren from the left elbow with 4:20 remaining — rising over the 7-1 defender with perfect form and dropping it through the net to push the lead to 5. The shot that seized the one-seed and broke the internet.",
          timeRemaining: "4:20",
          winProbabilityShift: 32,
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Chase-down block on SGA's driving layup with 1:30 remaining to preserve the 5-point lead and end Oklahoma City's last realistic chance at a comeback",
          timeRemaining: "1:30",
          winProbabilityShift: 28,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Step-back mid-range over Vassell with 3:10 remaining to cut the deficit to 3 and give OKC one last lifeline before Wemby's block sealed it",
          timeRemaining: "3:10",
          winProbabilityShift: -15,
        },
      ],
      narrative: "This was the game of the year. SGA came out firing with 10 first-quarter points and the Thunder crowd was electric as OKC built an 8-point lead. Then Wembanyama happened. His second-quarter eruption — a three over Holmgren, a baseline dunk, a fast-break block — fueled a 17-4 run that flipped the game. OKC fought back in the third behind Dort and SGA, retaking the lead by 4. But the fourth quarter belonged entirely to Wemby. The fadeaway over Holmgren at the 4:20 mark — a shot that will live forever in NBA highlight packages — put San Antonio up 5. The chase-down block on SGA with 1:30 left was the exclamation point. Wemby finished with 32/10/6/3BLK and the Spurs seized the one-seed at 60-18 with their 12th consecutive victory. The throne has a new king.",
    },
    {
      gameId: "LAL-DEN-20260404",
      teams: { home: "LAL", away: "DEN" },
      finalScore: { home: 126, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:15",
          description: "Jokic controls the first quarter with 10 early points and 4 assists — two lobs to Aaron Gordon and a no-look dish for a corner three. Denver takes an 8-point lead and the Nuggets look locked in.",
          runScore: "16-8 run",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:00",
          description: "Luka erupts. A step-back three from 30 feet, a euro-step through three defenders, and a behind-the-back assist for an alley-oop. The Lakers go on a 20-6 run and take a 6-point halftime lead. Crypto.com Arena is shaking.",
          runScore: "20-6 run",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Jokic refuses to go away. He scores 12 third-quarter points — a post-up hook, two mid-range pull-ups, and a transition three. Denver claws back to within 2 and the game feels like a playoff preview.",
          runScore: "14-6 run",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:45",
          description: "Luka takes control down the stretch. Back-to-back possessions — a pull-up three and a drive-and-kick for an open corner three — push the Lakers' lead to 8. Denver never gets closer than 5 the rest of the way.",
          runScore: "10-3 run",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Dončić",
          team: "LAL",
          description: "Pull-up three from 30 feet over Murray with 3:15 remaining to push the lead to 8 and break Denver's spirit after a furious Jokic-led comeback bid",
          timeRemaining: "3:15",
          winProbabilityShift: 30,
        },
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Post-up hook over two defenders with 4:30 remaining to cut the deficit to 3 and give Denver a real chance before Luka answered",
          timeRemaining: "4:30",
          winProbabilityShift: -18,
        },
      ],
      narrative: "A heavyweight bout between two of the best players on earth. Jokic was magnificent early — 10 points and 4 assists in the first quarter as Denver built an 8-point lead. But Luka's second-quarter explosion was unstoppable. The step-back three from 30 feet, the euro-step, the behind-the-back assist — it was the full Luka experience and the Lakers went on a 20-6 run that flipped the game. Jokic fought back in the third with 12 points but Luka had the final word with a clutch pull-up three from 30 feet that pushed the lead to 8 and ended Denver's comeback. Luka finished with 36/8/10, Jokic with 32/12/9, and the Lakers improved to 52-26 with their fifth straight win. Denver's streak is over but this game proved both teams are legitimate title contenders.",
    },
    {
      gameId: "NYK-CLE-20260404",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 112, away: 105 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Donovan Mitchell goes off for 12 second-quarter points — three pull-up threes in a 4-minute stretch. Cleveland takes a 5-point lead and the Cavaliers look like the East's best.",
          runScore: "15-5 run",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:15",
          description: "Brunson ignites the MSG crowd. A driving layup through traffic, a step-back three, and two free throws after drawing Mobley into a foul. The Knicks go on a 16-4 run and take a 6-point lead entering the fourth.",
          runScore: "16-4 run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:30",
          description: "Cleveland makes a push — Garland and Mitchell combine for 7 quick points to cut the lead to 2. MSG holds its breath before Brunson answers with a mid-range pull-up.",
          runScore: "7-0 run",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Mid-range pull-up over Garland with 2:45 remaining to push the lead back to 4 and silence Cleveland's rally. Followed with two clutch free throws at 1:10 to ice the game.",
          timeRemaining: "2:45",
          winProbabilityShift: 26,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three over Anunoby with 4:00 remaining to cut the deficit to 2 and give Cleveland life",
          timeRemaining: "4:00",
          winProbabilityShift: -20,
        },
      ],
      narrative: "Madison Square Garden was a cauldron. Mitchell's second-quarter shooting gave Cleveland a 5-point lead and it looked like the Cavs might steal one in New York. But Brunson's third-quarter takeover — 16-4 run fueled by his driving, shooting, and ability to draw fouls — flipped the script and gave the Knicks a 6-point cushion. Cleveland made one last push in the fourth, cutting it to 2, but Brunson answered with a cold-blooded mid-range pull-up and two clutch free throws to seal it. Brunson finished with 28/7 and the Knicks won their third straight to reach 51 wins. This team is built for the postseason.",
    },
    {
      gameId: "ATL-MIA-20260404",
      teams: { home: "ATL", away: "MIA" },
      finalScore: { home: 114, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:45",
          description: "Jimmy Butler attacks early with 8 first-quarter points — two driving finishes and a mid-range fadeaway. Miami leads by 6 and the Heat look energized on the road.",
          runScore: "12-6 run",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:30",
          description: "Trae Young takes over. Three consecutive possessions — a floater in the lane, a lob to Capela, and a step-back three from 28 feet. Atlanta goes on a 15-3 run and takes a 7-point halftime lead.",
          runScore: "15-3 run",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Miami claws back to within 3 behind Herro's shooting, but Trae answers with a pull-up floater and a dish to Okongwu for an and-one. Atlanta pushes the lead back to 8 and the Hawks close it out.",
          runScore: "9-4 run",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Pull-up floater from 15 feet over Adebayo with 4:20 remaining to push the lead to 6 after Miami had cut it to 3 — the dagger that ended the Heat's comeback",
          timeRemaining: "4:20",
          winProbabilityShift: 22,
        },
        {
          player: "Tyler Herro",
          team: "MIA",
          description: "Back-to-back threes in the fourth quarter to cut Atlanta's lead to 3 and give Miami a brief window",
          timeRemaining: "5:30",
          winProbabilityShift: -16,
        },
      ],
      narrative: "Trae Young reminded everyone why he's one of the most dangerous offensive players in the league. Butler gave Miami an early 6-point lead but Trae's second-quarter explosion — the floater, the lob, the deep three — swung the game decisively. When Herro's fourth-quarter shooting cut it to 3, Trae answered with a floater over Adebayo that broke Miami's back. He finished with 28/9 and the Hawks won their third straight to improve to 45-34. Atlanta is surging at the perfect time and Trae is the engine driving everything.",
    },
    {
      gameId: "TOR-CHA-20260404",
      teams: { home: "TOR", away: "CHA" },
      finalScore: { home: 118, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:30",
          description: "LaMelo Ball opens with 9 first-quarter points — a transition three, a pull-up from the logo, and a driving layup. Charlotte leads by 5 and the Hornets look competitive early.",
          runScore: "11-6 run",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:00",
          description: "Scottie Barnes takes over. A transition slam, a face-up three, and two driving finishes through contact. Toronto goes on an 18-5 run and takes a 10-point halftime lead.",
          runScore: "18-5 run",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:15",
          description: "Barnes continues his dominance with 8 third-quarter points and 3 assists. The Raptors push the lead to 18 and Charlotte's body language deteriorates. The game is effectively over by the midpoint of the third.",
          runScore: "12-4 run",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Personal 8-0 run bridging the second and third quarters — a transition slam to close the half and a face-up three to open the third — to push the lead from 10 to 18 and end any Charlotte resistance",
          timeRemaining: "Q3 10:00",
          winProbabilityShift: 24,
        },
        {
          player: "LaMelo Ball",
          team: "CHA",
          description: "Pull-up three from the logo in the first quarter to give Charlotte an early 5-point lead before Barnes took over",
          timeRemaining: "Q1 6:30",
          winProbabilityShift: -8,
        },
      ],
      narrative: "Scottie Barnes was a man on a mission. LaMelo Ball gave Charlotte an early 5-point lead with his usual flair, but Barnes flipped the switch in the second quarter with an 18-5 run that he personally orchestrated — scoring, passing, and defending at an All-Star level. His 29/8/7 was a complete masterclass and the Raptors bounced back from their previous loss with authority. The 14-point margin flatters Charlotte — this game was over by the third quarter. Barnes is proving he's a franchise cornerstone and Toronto's future looks bright with him leading the way.",
    },
  ],
};
