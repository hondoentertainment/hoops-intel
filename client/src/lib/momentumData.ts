// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 11, 2026
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
  generatedDate: "2026-11-11",
  date: "November 11, 2026",
  gameOfTheNight: "MIA-UTA-20261110",
  topClutchPerformer: {
    player: "Jimmy Butler",
    team: "MIA",
    clutchRating: 91,
    description: "Butler authored the decisive closing chapter in Salt Lake City — 11 of his 27 points arrived in the fourth quarter, including back-to-back buckets that extinguished Utah's final comeback attempt and preserved Miami's six-point road win. His composure in a building that had the crowd genuinely invested is the east's most reliable clutch variable not named Brunson.",
  },
  games: [
    {
      gameId: "BOS-PHI-20261110",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 101, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Tatum ignites an 11-2 Boston run with consecutive pull-up jumpers, erasing an early Philadelphia lead and putting the Celtics in front for good. Philadelphia's halfcourt defense had no answer for Boston's pace changes off made baskets.",
          runScore: "11-2 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Boston's ball movement reaches its structural peak — five consecutive possessions end in open corner threes and the Celtics rattle in three of them to extend their lead to 18. Philadelphia's halfcourt set collapses entirely and head coach calls timeout with the building already deflated.",
          runScore: "14-3 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description: "Embiid strings together eight personal points to briefly make it a 12-point game and give Philadelphia's bench a pulse. The rally proves cosmetic — Boston responds with a 9-2 close to the third quarter and the game's outcome is settled before the fourth tip.",
          runScore: "8-2 PHI",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Boston's road demolition of Philadelphia was less a game than a structural demonstration — the Celtics' ball movement exposed every gap in Philadelphia's halfcourt defense from the opening possession and Tatum's 31-9-7 was the clinical instrument of a methodical 22-point win. Embiid's 24 points were real but entirely isolated, the kind of individual production that registers in a box score and nowhere on the scoreboard. At 10-2, Boston owns the East's best record and Philadelphia's early-season cushion just shrank to a single game.",
    },
    {
      gameId: "OKC-POR-20261110",
      teams: { home: "POR", away: "OKC" },
      finalScore: { home: 123, away: 103 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:08",
          description: "Henderson explodes downhill on three consecutive possessions, drawing fouls twice and finishing a pull-up floater the third time. Portland's corner-three spacing opens the lane completely and OKC's defensive rotation has no answer for Henderson's first-step advantage.",
          runScore: "12-4 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:33",
          description: "Portland extends their halftime lead to 14 on a Henderson-to-corner-three sequence that becomes the structural signature of the first half. OKC's vaunted defensive depth is a step slow on every rotation and the Trail Blazers head to the break with the building fully energized.",
          runScore: "16-5 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:47",
          description: "OKC mounts their most credible response of the night — a 9-2 run pulls them within single digits briefly and forces Portland into two shot-clock violations. Henderson re-enters and immediately answers with a step-back three that ends the threat and re-establishes Portland's command.",
          runScore: "9-2 OKC",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Portland's 20-point upset of Oklahoma City was the night's most unexpected result and Henderson's 34-11-6 was the most complete individual performance on the entire slate — a point guard fully arrived at the moment OKC least expected it. The Trail Blazers built a 14-point halftime lead and never relinquished structural control, exposing a vulnerability in OKC's defensive scheme that the desk will monitor heading into their rematch tonight. At 8-3, Portland now occupies the same record as the Thunder and the West's most compressed tier just became genuinely three-team.",
    },
    {
      gameId: "MIL-NYK-20261110",
      teams: { home: "NYK", away: "MIL" },
      finalScore: { home: 117, away: 85 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:41",
          description: "Brunson sets the tone immediately — back-to-back threes in the opening five minutes push New York's lead to 11 and the Madison Square Garden crowd is at full volume before Milwaukee can establish any defensive identity. Without Lillard's perimeter pressure, the Bucks have no mechanism to contain Brunson's pick-and-roll authority.",
          runScore: "13-4 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "3:22",
          description: "New York's defense suffocates Milwaukee's halfcourt offense for a full five-minute stretch — holding the Bucks to two points and constructing a 19-point lead that effectively closes the game before halftime. The MSG crowd is celebrating a rout before the third quarter begins.",
          runScore: "17-2 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "New York's 32-point destruction of Milwaukee at Madison Square Garden was the Bucks' most damaging result of the decade — a historic blowout at a hostile venue that exposes the full structural collapse of a roster operating without Lillard's perimeter authority. Brunson's 28-10-5 set the tempo inside the opening minute and the game was functionally over by halftime, the kind of performance that shifts narratives from concern to organizational emergency. At 1-10, Milwaukee's front office faces questions that the remaining schedule will only amplify.",
    },
    {
      gameId: "LAC-PHX-20261110",
      teams: { home: "PHX", away: "LAC" },
      finalScore: { home: 133, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:14",
          description: "Booker opens the game in immediate attack mode — three first-quarter threes against a Kawhi-less perimeter defense that has no individual authority to contest him. Phoenix redirects last night's San Antonio humiliation into an LA Clippers roster that is structurally undermanned.",
          runScore: "15-6 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:08",
          description: "Booker's fifth three of the game stretches Phoenix's lead to 21 and the Suns' bench carries the margin through the remainder of the half. The Clippers have no structural counter — without Leonard their perimeter rotations are a half-step late on every Booker read.",
          runScore: "14-4 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:30",
          description: "LA strings together a brief 10-3 run to make the margin look somewhat presentable — but Booker responds with a clinical mid-range sequence that ends the flicker of hope and signals the game's conclusion has already been written.",
          runScore: "10-3 LAC",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Booker's 38-point masterpiece was the night's highest individual scoring total and the most visceral possible answer to Phoenix's San Antonio embarrassment — five threes against a perimeter defense that had no Kawhi Leonard and no structural authority to slow him down. The Suns converted frustration into dominance from the opening possession and the 23-point final margin tells the story of a team that found its footing against exactly the right opponent at exactly the right moment. LAC at 2-8 without Leonard is a roster quietly sliding toward a structural reckoning of its own.",
    },
    {
      gameId: "MIA-UTA-20261110",
      teams: { home: "UTA", away: "MIA" },
      finalScore: { home: 109, away: 115 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:45",
          description: "Miami constructs a 10-point lead on Butler's relentless mid-range creation and secondary ball movement — the Heat look in complete control and Utah's young roster appears overmatched by the defensive intensity Miami brings as a base possession.",
          runScore: "13-5 MIA",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:22",
          description: "Utah erases a nine-point fourth-quarter deficit with a stunning 13-4 run — crowd energy in the Delta Center surges and Miami's rotations become visibly unsettled. The Jazz pull within four and the game's outcome is suddenly a live question the desk did not project entering the fourth.",
          runScore: "13-4 UTA",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:11",
          description: "Butler re-asserts individual authority at the precise moment Miami needs it most — back-to-back buckets off isolation creation restore a comfortable margin and Utah's rally dies at the hands of the East's most reliable clutch variable. The Jazz pull within four a second time but Butler answers both times.",
          runScore: "8-3 MIA",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jimmy Butler",
          team: "MIA",
          description: "Butler catches on the left elbow, pump-fakes his defender into the air, and draws two free throws that push Miami's lead to six with 1:48 remaining — the possession that functionally closed Utah's final comeback window.",
          timeRemaining: "1:48",
          winProbabilityShift: 22,
        },
        {
          player: "Jimmy Butler",
          team: "MIA",
          description: "Isolation left-block turnaround jumper over a closing defender to make it an eight-point Miami lead with 48 seconds remaining — the shot that extinguished Utah's final possession of meaningful consequence.",
          timeRemaining: "0:48",
          winProbabilityShift: 18,
        },
        {
          player: "Keyonte George",
          team: "UTA",
          description: "George pulls up from the right wing off a Utah secondary break and connects to cut the Miami lead to four — the defensive alert play that pulled Utah within striking distance for the second time in the fourth quarter.",
          timeRemaining: "2:34",
          winProbabilityShift: -11,
        },
      ],
      narrative: "Miami's six-point road win at Utah was the night's most genuinely dramatic result — a game the Heat controlled, nearly surrendered, and ultimately closed on the back of Butler's fourth-quarter composure when the Delta Center crowd had Utah legitimately believing. The Jazz pulled within four twice in the final five minutes and both times Butler had the same answer: isolation creation, shot clock pressure, and the kind of clutch sequence that separates proven closers from developing ones. At a combined 1-10, Utah is better than their record and Miami will need to be sharper defensively if they want the East's middle tier to treat them as a legitimate threat.",
    },
    {
      gameId: "ORL-SAC-20261110",
      teams: { home: "SAC", away: "ORL" },
      finalScore: { home: 100, away: 107 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:17",
          description: "Banchero takes over the second quarter with his mid-range creation — three consecutive isolation possessions result in two buckets and a drawn foul, and Orlando constructs a lead that Sacramento's defensive cohesion is structurally unable to close. The Kings lack the individual authority to contain Banchero's read-and-react decision-making.",
          runScore: "11-4 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:03",
          description: "Sacramento produces their most competitive stretch of the night — a 12-5 third-quarter run closes the gap to three and briefly gives the Golden 1 Center genuine energy. The Kings' halfcourt offense finds rhythm against Orlando's switching scheme before Banchero reasserts his mid-range authority to stabilize the Orlando lead entering the fourth.",
          runScore: "12-5 SAC",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Orlando's seven-point road win at Sacramento was a credible professional result — not spectacular but structurally sound, the kind of road performance that separates developing contenders from lottery permanence. Banchero's 26-9-5 was his most efficient road line of the season and the Magic's ability to absorb Sacramento's third-quarter run and close cleanly suggests a defensive identity that travels. SAC at 1-10 faces mounting front-office questions that the remaining schedule will not answer favorably.",
    },
  ],
};