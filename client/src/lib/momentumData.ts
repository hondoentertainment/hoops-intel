// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 21, 2026
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
  generatedDate: "2026-10-21",
  date: "October 21, 2026",
  gameOfTheNight: "PHI-NYK-20261020",
  topClutchPerformer: {
    player: "Tyrese Maxey",
    team: "PHI",
    clutchRating: 91,
    description: "Maxey authored three consecutive clutch buckets in the final four minutes at Madison Square Garden, each one landing like a grenade in one of the loudest buildings in sports. His ability to manufacture clean looks against New York's switching schemes — and convert them — was the single reason Philadelphia walked out of MSG with a win.",
  },
  games: [
    {
      gameId: "BOS-DET-20261020",
      teams: { home: "DET", away: "BOS" },
      finalScore: { home: 121, away: 113 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:41",
          description: "Cunningham orchestrated a 12-2 Detroit run through the mid-second quarter, turning a two-point edge into a commanding 14-point lead. His pick-and-roll reads carved Boston's switching defense apart, and the Little Caesars crowd sensed the statement being made in real time.",
          runScore: "12-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Detroit extended its advantage to 16 on the back of relentless transition defense and two consecutive Cunningham-to-Duren lobs that energized a building already at full volume. Boston's half-court offense looked labored and disjointed against Detroit's disciplined rotations.",
          runScore: "8-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:52",
          description: "Tatum ignited a 9-2 Boston push to trim the deficit to five, briefly threatening to turn a rout into a genuine drama. The Celtics' pressure forced two Detroit turnovers in 90 seconds and the Garden North crowd in Detroit suddenly tensed — but the Pistons' defensive identity reasserted itself before Boston could get any closer.",
          runScore: "9-2 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit used the home opener as a proving ground, and the Pistons passed with distinction. Cunningham's 34-point masterclass was less about the volume and more about the timing — every big shot came at a moment Boston needed a stop. The Celtics' 4-0 preseason glow faded fast under Detroit's suffocating defensive structure, and the East's hierarchy just sent its clearest opening-night signal in years.",
    },
    {
      gameId: "OKC-SAS-20261020",
      teams: { home: "SAS", away: "OKC" },
      finalScore: { home: 104, away: 116 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:30",
          description: "SGA opened the game with nine straight Oklahoma City points on back-to-back pull-up mid-rangers and a floater through contact, establishing an immediate tone that Frost Bank Center had no answer for. The Thunder's pace was relentless from the opening tip.",
          runScore: "9-0 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Wembanyama briefly dragged San Antonio within five with a pair of mid-range pull-ups and a chase-down block that momentarily rewired the building's energy. The Spurs rattled off eight straight and the crowd sensed a potential comeback brewing in the South Texas heat.",
          runScore: "8-3 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "1:44",
          description: "SGA responded to San Antonio's surge with a step-back three followed by a coast-to-coast finish, stretching the lead back to double digits and effectively ending the Spurs' comeback window. OKC's ball movement in the third quarter was a clinic in pace-and-pressure basketball.",
          runScore: "10-3 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Oklahoma City came to San Antonio with a 1-4 preseason scar and left with a statement. SGA's 38 points weren't just a statistical achievement — they were a series of precision strikes at every moment the Spurs found footing. Wembanyama showed flashes of brilliance but could never recruit enough secondary support to sustain pressure, and OKC's depth advantage became the story of the second half.",
    },
    {
      gameId: "PHI-NYK-20261020",
      teams: { home: "NYK", away: "PHI" },
      finalScore: { home: 100, away: 106 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:22",
          description: "New York's home energy materialized into a 10-3 run that pushed the Knicks ahead by eight, riding Brunson's pick-and-roll mastery and a pair of corner threes from the wings. MSG was at full roar and it looked like the Knicks' 11-game closing streak was ready to roll seamlessly into 2026-27.",
          runScore: "10-3 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "Philadelphia's switching scheme finally caught up with Brunson — neutralizing him for a critical four-minute stretch — while Maxey seized control with back-to-back pull-up jumpers to flip a four-point New York lead into a two-point Philly advantage. The momentum shift was palpable and the building grew uneasy.",
          runScore: "11-3 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:55",
          description: "New York trimmed it to two on a Brunson drive-and-finish with under two minutes left, giving MSG one final surge of desperate belief. But Maxey answered on the very next possession with a step-back three that put Philadelphia up five and effectively sealed the stunning road win.",
          runScore: "5-2 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Consecutive pull-up jumpers in the final five minutes erased a four-point Knicks lead and shifted the game's entire gravitational center toward Philadelphia. Maxey was operating in a different gear than everyone else on the floor.",
          timeRemaining: "4:58",
          winProbabilityShift: 34,
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Step-back three-pointer over a closing Knick defender with 1:47 remaining, extending the lead to five and functionally ending New York's hope of an opening-night recovery. The shot silenced 20,000 people instantaneously.",
          timeRemaining: "1:47",
          winProbabilityShift: 41,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Crafty left-handed finish through contact to cut the deficit to two with under two minutes to play, momentarily reigniting MSG and setting up what could have been a frantic final sequence.",
          timeRemaining: "1:58",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Madison Square Garden opened its 2026-27 season in stunned silence, and Tyrese Maxey was the architect of that silence. The 76ers executed a textbook late-game heist — locking down Brunson precisely when New York needed him most, then watching Maxey take the game by the throat in the final four minutes. Philadelphia's opening-night road win at MSG is the kind of result that echoes through a franchise's early-season psyche, and for the Knicks, an 11-game win streak suddenly feels like ancient history.",
    },
  ],
};