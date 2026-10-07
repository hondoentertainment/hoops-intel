// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 7, 2026
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
  generatedDate: "2026-10-07",
  date: "October 7, 2026",
  gameOfTheNight: "NOP-OKC-20261006",
  topClutchPerformer: {
    player: "Zion Williamson",
    team: "NOP",
    clutchRating: 91,
    description: "Zion Williamson authored the night's defining closing sequence, scoring 8 of New Orleans's final 12 points in a road environment that had no business going their way. His ability to draw fouls, finish through contact, and hold the lead against a Thunder team with legitimate home-court identity made him the unambiguous clutch performer of October 6th.",
  },
  games: [
    {
      gameId: "NOP-OKC-20261006",
      teams: { home: "OKC", away: "NOP" },
      finalScore: { home: 110, away: 116 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "OKC opened with a 12-4 run behind back-to-back transition buckets and early defensive intensity, establishing BOK Center's home-court posture immediately.",
          runScore: "16-8 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:51",
          description: "New Orleans answered with a 14-3 counter-run spanning the final five minutes of the first quarter and opening minutes of the second, with Williamson repeatedly attacking the paint and drawing fouls.",
          runScore: "22-19 NOP",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:03",
          description: "OKC seized third-quarter control with a disciplined half-court offensive stretch, going up seven on a Gilgeous-Alexander pull-up and successive corner threes from the wings.",
          runScore: "78-71 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:18",
          description: "New Orleans erased the seven-point deficit with a decisive 15-4 closing burst, Williamson scoring six straight and Brandon Ingram adding a step-back triple that shifted the building's energy entirely.",
          runScore: "104-99 NOP",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:44",
          description: "NOP's lead grew to eight after Williamson converted a tough and-one and the free throw, effectively closing the door on OKC's comeback window in front of a stunned home crowd.",
          runScore: "112-104 NOP",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Caught a dump-off on the left block with 4:01 remaining, spun baseline through contact, and converted the and-one to give New Orleans their first lead in the fourth quarter. The play immediately shifted the energy at BOK Center.",
          timeRemaining: "4:01",
          winProbabilityShift: 22,
        },
        {
          player: "Brandon Ingram",
          team: "NOP",
          description: "Step-back three-pointer over a closing defender with 3:14 remaining pushed the lead to five and forced OKC into a timeout they couldn't convert into corrective action.",
          timeRemaining: "3:14",
          winProbabilityShift: 17,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Pulled up from the elbow for a mid-range jumper with 2:30 remaining to cut the deficit to three, briefly reigniting the home crowd before Williamson's subsequent and-one silenced the response.",
          timeRemaining: "2:30",
          winProbabilityShift: -11,
        },
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Drew a critical offensive foul call reversal under duress with 1:09 remaining, converting both free throws to push the lead to eight and functionally end OKC's possession-by-possession leverage.",
          timeRemaining: "1:09",
          winProbabilityShift: 19,
        },
      ],
      narrative: "BOK Center had every structural advantage — home crowd, favored roster, national perception — and New Orleans dismantled it quarter by quarter. The game's defining narrative arc was not the Pelicans' early deficit but the composure with which they absorbed OKC's third-quarter surge and then responded with a closing run that felt inevitable rather than desperate. Zion Williamson was the engine, but the organizational message from New Orleans was broader: this team has a fourth-quarter identity. For Oklahoma City, the loss introduces a real question about closing reliability that one preseason result shouldn't answer but one preseason result just raised.",
    },
    {
      gameId: "LAL-GSW-20261006",
      teams: { home: "GSW", away: "LAL" },
      finalScore: { home: 124, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:12",
          description: "Los Angeles opened with purpose, leaning on their front-court advantage for a 10-2 start that briefly suggested the Lakers' Sacramento momentum had transferred across the state.",
          runScore: "10-4 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "8:44",
          description: "Curry ignited a 19-6 Warriors run across the first-quarter close and second-quarter open, hitting three consecutive threes and turning Chase Center into a live-round shooting gallery. Golden State went from down six to up seven in under four minutes.",
          runScore: "38-29 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "Golden State's third-quarter execution — moving the ball through 11 consecutive passes on two straight possessions — produced a 17-point swing that made the national television audience irrelevant for the Lakers' purposes. The game was effectively decided.",
          runScore: "89-64 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "With the outcome long decided, Golden State's reserves maintained the margin through structured rotation play, the lead never dropping below 22 in the final period.",
          runScore: "105-80 GSW",
          momentum: "home",
          keyPlayer: "Moses Moody",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The Lakers arrived at Chase Center as the night's most momentum-positive road team and left 26 points worse off, which is a number that reframes Monday's Sacramento blowout as a team quality statement rather than an opponent-specific fluke. Golden State's second and third quarters were the analytical desk's clearest team-quality read of the preseason window — the ball movement, defensive rotations, and Curry's rhythm shooting against a live scheme were all present simultaneously. The question the result poses for Los Angeles is structural: was Sacramento's defensive scheme the specific variable, or is this Lakers group vulnerable to disciplined perimeter-heavy offenses at full pace? Golden State does not need that answer; they already provided theirs.",
    },
    {
      gameId: "DEN-UTA-20261006",
      teams: { home: "UTA", away: "DEN" },
      finalScore: { home: 106, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:55",
          description: "Utah rode home-crowd energy to a fast start, the Jazz's guard rotation creating three early turnovers and converting them into nine transition points for a double-digit lead.",
          runScore: "24-13 UTA",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:01",
          description: "Jokic methodically disassembled Utah's frontcourt mismatch scheme, posting up four consecutive possessions and going 4-for-4 from the field to anchor a 16-4 Denver correction run. The Nuggets' coaching staff adjustments from the Boulder film session were visibly operational.",
          runScore: "37-33 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:20",
          description: "Denver extended their lead with a third-quarter paint presence that Utah had no answer for, Jokic adding two assists on lob actions as Utah's help defense collapsed and the perimeter opened.",
          runScore: "84-73 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:15",
          description: "Utah made a brief 8-2 run to trim the margin to five, but Denver's second-unit held the line with disciplined half-court defense and timely free-throw shooting to close out the road win.",
          runScore: "99-94 DEN",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Denver needed this result not just for the win column but for the organizational psychological ledger, and they produced it against a Jazz team that had genuine home-court incentive following their own home opener win. The defining story is less the margin than the mechanism: Jokic's interior dominance was predictable, but the coaching staff's visible deployment of Monday's film corrections — the adjusted pick-and-roll coverage, the modified Jokic post-entry reads — gave the performance a structural weight beyond a standard bounce-back result. The Nuggets at 1-1 feel steadier than their record suggests; the Boulder loss is now contextualized. Utah at 1-1 has answered its own questions about home-court identity but now faces questions about frontcourt depth that Delta Center didn't resolve.",
    },
    {
      gameId: "BRK-CHA-20261006",
      teams: { home: "CHA", away: "BRK" },
      finalScore: { home: 90, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:30",
          description: "Brooklyn's defensive intensity was visible from the opening possession — three forced turnovers in the first four minutes established the tone before Charlotte could find early offensive rhythm.",
          runScore: "14-6 BRK",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:22",
          description: "Thomas and the Brooklyn backcourt pushed the lead to 22 with a devastating eight-minute stretch of offensive efficiency — seven-of-eight from the field, four assists, zero turnovers — that exposed Charlotte's defensive depth issues in live competition for the first time this preseason.",
          runScore: "62-40 BRK",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:00",
          description: "Charlotte's reserves mounted a token 11-4 stretch in the third quarter's opening minutes, narrowing the gap momentarily to 15 before Brooklyn's starters re-entered and restored the blowout margin within three possessions.",
          runScore: "71-56 BRK",
          momentum: "home",
          keyPlayer: "Brandon Miller",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "9:30",
          description: "Brooklyn's second unit played the entire fourth quarter with full competitive effort, the margin expanding to 34 as Charlotte's defensive rotations broke down systematically against the Nets' ball movement.",
          runScore: "115-82 BRK",
          momentum: "away",
          keyPlayer: "Ziaire Williams",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Thirty-four points is a number that resists preseason-noise classification, and it deserves analytical honesty: Brooklyn came to Spectrum Center and executed at a level that raised genuine questions about Charlotte's defensive infrastructure before October has found its footing. The Hornets' issues weren't effort-based — they were structural, the kind of rotation breakdowns and help-side lapses that don't self-correct by November without deliberate organizational intervention. For Brooklyn, the result is a real early signal from a franchise still calibrating what its rebuild ceiling looks like under the current roster configuration; Cam Thomas's offensive control in the first half was the night's most complete individual team-quality statement outside of Curry's Chase Center performance. The 34-point margin won't define either team's season, but it will define the conversation about both franchises heading into week two.",
    },
  ],
};