// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 25, 2026
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
  generatedDate: "2026-10-25",
  date: "October 25, 2026",
  gameOfTheNight: "NOP-DEN-20261024",
  topClutchPerformer: {
    player: "Nikola Jokic",
    team: "DEN",
    clutchRating: 97,
    description: "Jokic's overtime closing sequence was the young season's defining individual stretch — two buckets, a steal, and a go-ahead free throw pair in the final 90 seconds of OT to put away a Pelicans team that refused to quit. His 38-15-9 line obscures how essential every single possession was down the wire.",
  },
  games: [
    {
      gameId: "MIA-CHA-20261024",
      teams: { home: "CHA", away: "MIA" },
      finalScore: { home: 115, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:42",
          description: "Charlotte unleashed a 12-2 run fueled by transition buckets and perimeter execution to flip a four-point deficit into a six-point lead. Miami's half-court defense had no answers for the Hornets' pace.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:15",
          description: "Miami surged with a 9-2 closing run to cut the Charlotte lead to two, creating genuine late-game tension after a comfortable third quarter for the Hornets.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:08",
          description: "Charlotte responded immediately with back-to-back buckets to restore a six-point cushion and effectively seal the home win, ending Miami's late rally before it could fully materialize.",
          runScore: "4-0",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LaMelo Ball",
          team: "CHA",
          description: "Pull-up mid-range jumper over the Miami closeout to push the lead to six with under a minute remaining, erasing the momentum of Miami's late surge.",
          timeRemaining: "0:58",
          winProbabilityShift: 22,
        },
        {
          player: "Tyler Herro",
          team: "MIA",
          description: "Step-back three-pointer to cap Miami's 9-2 run and cut the deficit to two, briefly making Spectrum Center uncomfortable.",
          timeRemaining: "3:15",
          winProbabilityShift: -14,
        },
      ],
      narrative: "Charlotte's 2-1 start gets quietly stronger with each game. The Hornets showed genuine fourth-quarter composure by absorbing Miami's late charge and responding with the decisive buckets when the moment demanded it. Miami falls to 0-3 and the organizational emergency is no longer a preseason projection — it is an October reality.",
    },
    {
      gameId: "BRK-CLE-20261024",
      teams: { home: "CLE", away: "BRK" },
      finalScore: { home: 125, away: 121 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:20",
          description: "Brooklyn rattled off 11 straight points to erase a double-digit deficit and tie the game at 98, stunning Rocket Arena and swinging the emotional temperature of the building entirely.",
          runScore: "11-0",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Mitchell seized control with seven points in a 90-second stretch — a pull-up three, a floater, and a converted and-one — to push Cleveland back ahead by eight and quiet Brooklyn's momentum.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Drove baseline, absorbed contact, converted the layup and the free throw to push the lead to seven with 2:14 remaining — the play that functionally ended Brooklyn's comeback attempt.",
          timeRemaining: "2:14",
          winProbabilityShift: 31,
        },
        {
          player: "Cam Thomas",
          team: "BRK",
          description: "Isolation mid-range pull-up to cap Brooklyn's 11-0 third-quarter run and tie the game, giving the young Nets roster a genuine belief that the upset was achievable.",
          timeRemaining: "4:20",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the kind of game that defines a player's early-season identity. Mitchell absorbed Brooklyn's stunning third-quarter surge and responded with the exact clutch sequence Cleveland required — no panic, no deference, just execution. The Nets' fight is real and notable, but Mitchell reminded the league why Cleveland invested in him when the margin was smallest.",
    },
    {
      gameId: "MIL-PHI-20261024",
      teams: { home: "PHI", away: "MIL" },
      finalScore: { home: 127, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:10",
          description: "Embiid imposed his will with nine points in a dominant three-minute stretch to open up a 14-point halftime lead. Milwaukee's interior defense offered no structural resistance to his footwork and physicality.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:55",
          description: "Milwaukee briefly threatened with a 10-3 run that trimmed the lead to seven, with Giannis converting four straight points and forcing the Philadelphia coaching staff into an early timeout.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "2:30",
          description: "Philadelphia answered the Milwaukee surge immediately — an Embiid block, a fast-break bucket, and a three-pointer from the corner restored a 13-point lead and permanently ended Milwaukee's hope of a comeback.",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Philadelphia's 3-0 start is not a small-sample illusion — it is the product of Embiid operating at a level that no Eastern Conference team can currently match. Milwaukee's Giannis had his moments, but the Bucks' inability to generate secondary scoring when it matters ensures that individual brilliance never translates into team competitiveness. The 0-3 emergency designation is now structural, not situational.",
    },
    {
      gameId: "WAS-CHI-20261024",
      teams: { home: "CHI", away: "WAS" },
      finalScore: { home: 120, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:45",
          description: "Washington opened the game with a 14-4 run behind three Poole three-pointers, establishing perimeter control and exposing Chicago's defensive scheme from the opening minutes.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "LaVine erupted for 11 third-quarter points as Chicago clawed back to tie at 91, converting twice in traffic and hitting a pull-up three that temporarily made the United Center believe.",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Poole delivered the back-breaking response — back-to-back threes in a 90-second stretch to push Washington ahead by eight and expose Chicago's perimeter defense as fundamentally unequipped for this matchup.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jordan Poole",
          team: "WAS",
          description: "Off the dribble pull-up three from the right wing with the shot clock expiring, pushing the Washington lead to six with 3:40 remaining and deflating Chicago's late-game energy completely.",
          timeRemaining: "3:40",
          winProbabilityShift: 27,
        },
        {
          player: "Zach LaVine",
          team: "CHI",
          description: "Driving layup through contact to cut the deficit to four with just over two minutes remaining, giving the Bulls a final window that ultimately went unresolved.",
          timeRemaining: "2:12",
          winProbabilityShift: -11,
        },
      ],
      narrative: "Jordan Poole's 28-point performance was the East's most underreported story of the night — efficient, composed, and devastating on the perimeter against a Bulls team with no credible answer. Chicago's LaVine kept them in the conversation, but team-wide defensive lapses at critical junctures were the real antagonist of the evening. Washington at 2-1 is the East's most legitimate sleeper and deserves the desk's full attention.",
    },
    {
      gameId: "SAS-DAL-20261024",
      teams: { home: "DAL", away: "SAS" },
      finalScore: { home: 106, away: 122 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:30",
          description: "Wembanyama dismantled Dallas with a 16-4 second-quarter run that was entirely authored by his presence — two blocks that led to transition points, a mid-range jumper, and a drop-step baseline finish that the Mavericks had no structural answer for.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "9:00",
          description: "San Antonio extended the lead to 22 in the third quarter's opening minutes as Dallas's perimeter rotation collapsed and Wembanyama continued to own the paint. The game was functionally over before the third media timeout.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Sixteen points in a road demolition of Dallas carries a different weight than sixteen points against the league's worst team, and San Antonio earned every point of that margin. Wembanyama's 31-14-5 line was the most physically dominant individual performance of the night, executed against a franchise that arrived believing it was the more talented roster. DAL at 1-2 faces questions that the front office is not yet equipped to answer publicly.",
    },
    {
      gameId: "HOU-ATL-20261024",
      teams: { home: "ATL", away: "HOU" },
      finalScore: { home: 114, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:15",
          description: "Sengun authored a 13-4 Houston run with nine personal points — a hook over two defenders, a putback slam, and a mid-post turnaround — to erase Atlanta's early lead and swing the game's momentum decisively.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description: "Atlanta briefly threatened with an 8-2 run to cut the lead to four, energizing State Farm Arena and testing Houston's road composure for the first time all evening.",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:30",
          description: "Houston's perimeter rotation produced three consecutive stops and two fast-break conversions to push the lead back to ten, sealing the road victory and confirming the Rockets' collective execution is a genuine organizational asset.",
          runScore: "7-1",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Houston's 3-0 road start is not being manufactured by schedule softness — this was Atlanta at home, a legitimate Eastern Conference playoff team with the league's most dynamic point guard. Sengun's interior dominance combined with Houston's perimeter depth created a formula Atlanta's pace-and-space system could not dissolve. The Rockets are a title conversation. That sentence is no longer an overreaction.",
    },
    {
      gameId: "NOP-DEN-20261024",
      teams: { home: "DEN", away: "NOP" },
      finalScore: { home: 141, away: 135 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "New Orleans erupted with a 17-5 third-quarter run to tie the game at 108 and completely reverse Denver's comfortable halftime lead. The Pelicans' transition offense was unstoppable and Ball Arena fell eerily quiet.",
          runScore: "17-5",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:50",
          description: "Jokic responded to New Orleans's late-game push with back-to-back baskets to restore a five-point lead, each possession a masterclass in reading the defense and executing with no wasted motion.",
          runScore: "6-1",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "OT",
          timestamp: "1:30",
          description: "Jokic authored the decisive overtime sequence — a steal off a Pelicans lob attempt, a mid-post make, a drawn foul, and two free throws — to push Denver ahead by six and close out the most entertaining game of the young season.",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokic",
          team: "DEN",
          description: "Stolen pass off a Pelicans entry lob with 1:30 remaining in overtime, immediately converted into a transition mid-range make that pushed the Denver lead to four and broke New Orleans's last credible possession sequence.",
          timeRemaining: "1:30 OT",
          winProbabilityShift: 38,
        },
        {
          player: "Nikola Jokic",
          team: "DEN",
          description: "Two free throws after drawing a foul on a post-up with 48 seconds remaining in overtime, extending the lead to six and ending any realistic path for New Orleans to tie.",
          timeRemaining: "0:48 OT",
          winProbabilityShift: 29,
        },
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Thunderous putback slam off a missed three to tie the game at 126 with 22 seconds remaining in regulation, forcing overtime and confirming that New Orleans refused to be a comfortable victim.",
          timeRemaining: "0:22",
          winProbabilityShift: -24,
        },
      ],
      narrative: "The night's best basketball was played in Denver, and it required overtime and a 38-15-9 line from the best player on the planet to resolve it. Jokic's closing sequence in the extra period was the young season's most dominant individual stretch — a steal, a make, and two free throws that functionally ended New Orleans's belief before the clock did. The Pelicans fall to 0-3 but earned every possession and leave Ball Arena with organizational credibility intact.",
    },
    {
      gameId: "GS-PHX-20261024",
      teams: { home: "PHX", away: "GS" },
      finalScore: { home: 131, away: 122 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:55",
          description: "Phoenix built a 15-point halftime lead through relentless transition offense and a Warriors half-court defense that offered no resistance to Phoenix's pick-and-roll coverage in the paint.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:30",
          description: "Golden State trimmed the lead to six behind a Stephen Curry shooting burst — three consecutive makes from distance — that briefly made Mortgage Matchup Center nervous and forced a Phoenix timeout.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:00",
          description: "Phoenix reasserted control with a 10-2 fourth-quarter opening run as Golden State's defensive rotations broke down and Booker attacked the paint repeatedly. The Warriors' 0-3 record is now undeniable.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Phoenix's home win over Golden State is the Western Conference's quietest statement result of the night. Booker was in complete command from the second quarter forward and the Suns' ability to neutralize Curry's midgame surge without sacrificing their offensive structure is a genuine sign of organizational maturity. Golden State at 0-3 now carries a weight that no amount of small-sample rationalization can fully absorb.",
    },
  ],
};