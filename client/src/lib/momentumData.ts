// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 16, 2026
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
  generatedDate: "2026-10-18",
  date: "October 16, 2026",
  gameOfTheNight: "TOR-NYK-20261015",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "New York Knicks",
    clutchRating: 88,
    description:
      "Brunson authored the defining sequence of Thursday's tightest game, orchestrating back-to-back fourth-quarter possessions that converted a two-point Knicks deficit into a lead MSG never surrendered. With the organization's preseason credibility on the line at 0-4, he delivered the window's most contextually loaded clutch shift — two points of final margin, maximum organizational weight.",
  },
  games: [
    {
      gameId: "TOR-NYK-20261015",
      teams: { home: "NYK", away: "TOR" },
      finalScore: { home: 122, away: 120 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "Toronto opened with a crisp pick-and-roll attack that caught the Knicks' defense rotating late, igniting a 9-2 run that established early road control inside MSG.",
          runScore: "18-9 TOR",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description:
            "New York answered with a sustained half-court grind, converting six consecutive mid-range possessions and forcing Toronto into three shot-clock violations to reclaim the lead before halftime.",
          runScore: "54-48 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:28",
          description:
            "Toronto's bench unit erupted with a 12-3 third-quarter burst, exploiting Knicks rotation fatigue and converting three straight transition layups to swing the lead back to the Raptors heading into the final frame.",
          runScore: "88-92 TOR",
          momentum: "away",
          keyPlayer: "Immanuel Quickley",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:51",
          description:
            "Brunson seized the game's most critical juncture, drilling back-to-back pull-up jumpers over Toronto's coverage to flip a two-point deficit into a lead that MSG's crowd instantly amplified into a full organizational exhale.",
          runScore: "108-104 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:38",
          description:
            "Toronto trimmed it to one on a Scottie Barnes putback with under a minute left, triggering a final possession sequence that required the Knicks to execute in a pressure environment they had repeatedly failed to navigate this preseason.",
          runScore: "120-119 NYK",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Consecutive pull-up jumpers in the paint over switching coverage flipped a 104-106 deficit into a 108-106 lead with 5:51 remaining — the singular possession sequence that defined NYK's survival.",
          timeRemaining: "5:51",
          winProbabilityShift: 34,
        },
        {
          player: "Scottie Barnes",
          team: "Toronto Raptors",
          description:
            "Offensive rebound and putback over two defenders cut the Knicks' lead to one with 38 seconds left, forcing New York into a must-execute final possession and briefly swinging the room's oxygen to the Toronto bench.",
          timeRemaining: "0:38",
          winProbabilityShift: -22,
        },
        {
          player: "OG Anunoby",
          team: "New York Knicks",
          description:
            "Sealed the game with two clutch free throws at the 14-second mark after drawing a foul on Toronto's desperate full-court trap, providing the two-point cushion that became the final margin.",
          timeRemaining: "0:14",
          winProbabilityShift: 28,
        },
      ],
      narrative:
        "Thursday's game at Madison Square Garden was less a basketball showcase than an organizational stress test conducted in public, with two points of final margin doing heavy lifting for a franchise that had spent four preseason games searching for a reason to believe in itself. Toronto controlled tempo for long stretches — their bench unit's third-quarter burst was the game's single most decisive non-Brunson sequence — but the Raptors could not sustain that energy into a fourth quarter where MSG's urgency became a genuine environmental factor. Brunson's back-to-back pull-ups at the 5:51 mark were the kind of possessions that shift a team's preseason psychological ledger, converting collective anxiety into something resembling competence. The two-point margin is thin enough to be suspicious and meaningful enough to matter — NYK at 1-4 is still a damaged preseason number, but the alternative result would have been the window's most corrosive organizational outcome for an East contender.",
    },
    {
      gameId: "OKC-HOU-20261015",
      teams: { home: "HOU", away: "OKC" },
      finalScore: { home: 116, away: 89 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:33",
          description:
            "Houston imposed physical interior pressure from the opening tip, with Sengun converting four consecutive post-up opportunities that immediately signaled OKC's inability to match the Rockets' size on the interior.",
          runScore: "18-8 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:02",
          description:
            "SGA briefly stabilized Oklahoma City with three straight isolation scores to start the second quarter, pulling the Thunder within seven and suggesting a competitive game remained available if OKC could generate stops.",
          runScore: "22-29 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "2:17",
          description:
            "Houston's defensive rotation collapsed OKC's half-court offense into a six-minute scoring drought, during which the Rockets converted in transition four times to blow the game decisively open before halftime and effectively end the contest as a competitive event.",
          runScore: "64-38 HOU",
          momentum: "home",
          keyPlayer: "Jalen Green",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description:
            "Toyota Center's crowd reached its loudest register as Houston's starters completed the window's most thorough national-TV statement, extending the margin beyond 30 and rendering the second half a glorified exhibition for the Rockets' depth rotation.",
          runScore: "94-62 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was not a game so much as a 48-minute demonstration of organizational divergence — Houston knowing exactly what it is, Oklahoma City unable to access what it was supposed to be. The Rockets' second-quarter defensive stretch was the decisive sequence: a six-minute OKC scoring drought that Toyota Center metabolized into full-venue energy, and by the time the margin crested 26 at halftime the game's only remaining question was how large Houston's statement would ultimately read on a national-TV box score. SGA's brief second-quarter stabilization window was the game's one moment of competitive ambiguity — three isolation scores that briefly suggested OKC had a path — but the Thunder's inability to generate a single defensive stop during Houston's closing burst answered the question before it could fully form. At 1-4 entering the final preseason weekend, Oklahoma City is now the desk's loudest West alarm: the window is nearly closed, the national-TV sample has been damning, and the gap between what the Thunder looked like last April and what they look like tonight is the most unsettling organizational distance in the Western Conference.",
    },
  ],
};