// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 23, 2026
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
  generatedDate: "2026-11-23",
  date: "November 23, 2026",
  gameOfTheNight: "DEN-CHI-20261122",
  topClutchPerformer: {
    player: "Jamal Murray",
    team: "DEN",
    clutchRating: 97,
    description: "Murray was the axis on which an absurd 151-145 overtime thriller rotated — he scored through three Giddey-led Chicago surges, converted the go-ahead bucket in the final minute of OT, and finished with 45 points, 7 assists, and 3 steals against a Bulls team that refused to fold. No player on the November 22 slate carried a higher individual burden in a higher-stakes environment.",
  },
  games: [
    {
      gameId: "DEN-CHI-20261122",
      teams: { home: "CHI", away: "DEN" },
      finalScore: { home: 145, away: 151 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Buddy Hield erupted for three consecutive threes — a 9-0 Chicago run that erased a Denver double-digit lead and swung the energy inside United Center completely. Murray had been dominant to that point, but Hield's shooting gave the Bulls a genuine belief they could win the game in regulation.",
          runScore: "9-0 CHI",
          momentum: "home",
          keyPlayer: "Buddy Hield",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:31",
          description: "Jokic's back-to-back post scores answered a Josh Giddey triple-double crescendo that had tied the game at 136, pushing Denver back ahead by five and threatening to close the door. Giddey's 22-assist masterclass had the arena buzzing; Jokic's clinical response was the counter-argument.",
          runScore: "7-2 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "1:08",
          description: "Murray dribble-drove baseline, drew contact, finished through it, and hit the and-one free throw to put Denver ahead 149-145 — the decisive sequence after Chicago had twice tied the overtime period in the final two minutes. It was the play that ended Chicago's remarkable resistance.",
          runScore: "5-0 DEN",
          momentum: "away",
          keyPlayer: "Jamal Murray",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Josh Giddey",
          team: "CHI",
          description: "With Denver up four and two minutes left in regulation, Giddey threaded a no-look lob to Jalen Smith, then immediately deflected a Murray pass in transition to set up the Bulls' tying bucket — back-to-back plays that sent the game to overtime on pure playmaking will.",
          timeRemaining: "1:47 Q4",
          winProbabilityShift: -18,
        },
        {
          player: "Jamal Murray",
          team: "DEN",
          description: "Murray's and-one drive at 1:08 of OT with Chicago within two was the dagger — a fearless left-hand finish through Jalen Smith's outstretched arm that pushed the lead to four and effectively ended the Bulls' final comeback attempt.",
          timeRemaining: "1:08 OT",
          winProbabilityShift: 31,
        },
        {
          player: "Buddy Hield",
          team: "CHI",
          description: "Hield's corner three with 38 seconds left in regulation cut a Denver lead to one, forcing the Nuggets into a rushed possession and manufacturing the tie that sent United Center into delirium.",
          timeRemaining: "0:38 Q4",
          winProbabilityShift: -22,
        },
      ],
      narrative: "This was the kind of game that makes the regular season worth watching — a 4-12 team with nothing to lose forcing a 10-5 contender into overtime through sheer offensive brilliance and one of the most statistically complete triple-double nights in Bulls history. Giddey's 23-22-14 line was an argument for a Hall of Fame plaque on its own; it just wasn't enough against a Murray who has made overtime his personal stage. Denver escaped, but the word 'escaped' is doing enormous work in that sentence.",
    },
    {
      gameId: "BOS-GSW-20261122",
      teams: { home: "GSW", away: "BOS" },
      finalScore: { home: 88, away: 87 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:22",
          description: "Podziemski hit back-to-back threes to ignite a 10-2 Golden State run that turned a two-point Boston lead into a six-point Warriors advantage — the first significant momentum break in what had been a chess match all night. The Warriors' crowd, subdued for most of the first half, finally found its voice.",
          runScore: "10-2 GSW",
          momentum: "home",
          keyPlayer: "Brandin Podziemski",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:15",
          description: "Tatum answered with seven straight Boston points — two mid-range jumpers and a pull-up three — to retie the game at 85 and swing momentum back to the Celtics with just over three minutes remaining. It was a one-man reclamation effort that reminded Chase Center why Boston came in at 11-5.",
          runScore: "7-0 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:14",
          description: "Charles Bassey's midrange jumper with 14 seconds remaining gave Golden State the lead at 88-87 — a stunning late swing off a broken play that left Boston scrambling without a timeout for the final possession.",
          runScore: "3-0 GSW",
          momentum: "home",
          keyPlayer: "Charles Bassey",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Charles Bassey",
          team: "GSW",
          description: "Bassey caught a skip pass in the mid-post with 14 seconds left, pump-faked Tatum into the air, and calmly knocked down the go-ahead two — an unexpected dagger from an unexpected source that encapsulated Golden State's grinding, collective identity.",
          timeRemaining: "0:14 Q4",
          winProbabilityShift: 44,
        },
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Tatum's final-possession inbound catch saw him drive right, lose his footing slightly on a direction change, and release a forced floater that caromed off the back rim — a clean look that didn't fall, ending Boston's night one point short.",
          timeRemaining: "0:03 Q4",
          winProbabilityShift: -38,
        },
      ],
      narrative: "Eighty-eight to eighty-seven is a score that belongs in a different decade, and Golden State made it work through defensive suffocation and an unlikely hero in Charles Bassey. Boston's November slump is now a fully credentialed storyline — the Celtics have dropped three of four against teams they should handle, and Tatum's inability to manufacture a clean final look at Chase Center will fuel a week of uncomfortable conversations. The Warriors, however, earned this one the hard way.",
    },
    {
      gameId: "DAL-UTA-20261122",
      teams: { home: "UTA", away: "DAL" },
      finalScore: { home: 114, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:03",
          description: "Svi Mykhailiuk caught fire from deep — four threes in a six-minute stretch gave Utah a 12-point lead and had Delta Center believing in something it hasn't believed in all season. Mykhailiuk was operating in a different dimension than everyone else on the floor.",
          runScore: "14-4 UTA",
          momentum: "home",
          keyPlayer: "Svi Mykhailiuk",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:50",
          description: "Cooper Flagg imposed himself with five consecutive points and two key defensive stops, turning a Dallas three-point deficit into a two-point lead and announcing that the Mavericks were not going to let Utah complete the upset without a fight.",
          runScore: "9-2 DAL",
          momentum: "away",
          keyPlayer: "Cooper Flagg",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Caleb Martin",
          team: "DAL",
          description: "Martin's fourth-quarter steal on an Isaiah Collier drive — a full-extension swipe that led directly to a Kyrie Irving transition layup — stopped a Utah run cold at 112-110 and gave Dallas just enough cushion to survive the final two minutes.",
          timeRemaining: "1:33 Q4",
          winProbabilityShift: 29,
        },
        {
          player: "Svi Mykhailiuk",
          team: "UTA",
          description: "Mykhailiuk's tenth three of the night cut the Dallas lead to one with 22 seconds remaining — a genuinely stunning individual achievement that forced the Mavericks to convert both free throws down the stretch just to hold on.",
          timeRemaining: "0:22 Q4",
          winProbabilityShift: -21,
        },
      ],
      narrative: "Svi Mykhailiuk made ten three-pointers in a game that will be footnoted in obscurity precisely because Utah lost — but the performance deserves to be remembered on its own terms. A 3-15 team came within two points of knocking off a Mavericks squad with playoff ambitions, carried almost entirely by one shooter who refused to miss. Cooper Flagg's composure down the stretch was the difference, but Dallas should not feel comfortable about how close that was.",
    },
    {
      gameId: "OKC-MIA-20261122",
      teams: { home: "MIA", away: "OKC" },
      finalScore: { home: 123, away: 113 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:11",
          description: "Bam Adebayo orchestrated a 14-4 Miami run with a triple-double in progress — back-to-back transition assists, a mid-roll lob finish, and a defensive rebound that became an outlet pass in one seamless sequence. Oklahoma City's size disadvantage with Hartenstein struggling became impossible to mask.",
          runScore: "14-4 MIA",
          momentum: "home",
          keyPlayer: "Bam Adebayo",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:40",
          description: "Pelle Larsson's consecutive threes off Bam's drive-and-kick combinations extended the Miami lead to 18 and effectively converted the game from a competitive contest into a statement win. OKC's -21 Hartenstein differential was the visible wound; Larsson was the salt.",
          runScore: "8-2 MIA",
          momentum: "home",
          keyPlayer: "Pelle Larsson",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This was a size-and-movement clinic administered by Bam Adebayo to a Thunder team that brought a knife to a chess match. Adebayo's 24-15-12 line with two steals and two blocks is the kind of performance that should generate MVP conversation — it was complete domination in every category that matters, and Isaiah Hartenstein's -21 night underscored how badly OKC was outmatched at the five. Miami's 10-6 record understates how dangerous this team is when Bam is operating at this level.",
    },
    {
      gameId: "DET-ATL-20261122",
      teams: { home: "ATL", away: "DET" },
      finalScore: { home: 107, away: 97 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:30",
          description: "Dyson Daniels recorded three steals in a four-minute first-half stretch, converting all of them into Atlanta transition points and swinging the game's energy so completely that Detroit never recovered its offensive rhythm for the rest of the half.",
          runScore: "11-3 ATL",
          momentum: "home",
          keyPlayer: "Dyson Daniels",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:17",
          description: "Corey Kispert and Luguentz Dort combined for three consecutive baskets at plus-differentials of 21 and 20 respectively, pushing Atlanta's lead to 15 and demonstrating a depth advantage Detroit's depleted bench could not answer.",
          runScore: "9-2 ATL",
          momentum: "home",
          keyPlayer: "Corey Kispert",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Dyson Daniels didn't score five points and still dominated a professional basketball game — that sentence alone should tell you everything about this performance. Atlanta's defensive infrastructure suffocated Detroit's offense so completely that Cade Cunningham, one of the Eastern Conference's best scorers, finished with five points and a -8 differential. The Hawks' 11-6 record is built on exactly these kinds of nights: collective effort, elite defensive activity, and enough perimeter shooting to punish every defensive miscommunication.",
    },
    {
      gameId: "IND-NYK-20261122",
      teams: { home: "NYK", away: "IND" },
      finalScore: { home: 113, away: 106 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:55",
          description: "Karl-Anthony Towns posted seven straight New York points inside two minutes — a three, a mid-post turnaround, and two free throws — to give the Knicks a double-digit lead they would not fully relinquish. Madison Square Garden responded with the kind of sustained roar that travels through building walls.",
          runScore: "10-3 NYK",
          momentum: "home",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "Pascal Siakam and Andrew Nembhard combined for nine points in three minutes to cut New York's lead to four with five minutes remaining, exposing Indiana's ceiling if they could get stops — but Ivica Zubac's -13 second-unit differential meant the Pacers lacked the depth to sustain the pressure.",
          runScore: "9-3 IND",
          momentum: "away",
          keyPlayer: "Pascal Siakam",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "New York controlled this game the way a good team is supposed to control a game — methodically, without drama, through Towns's versatile dominance and Brunson's quiet orchestration. Indiana's fourth-quarter push was real enough to tighten the scoreline but Indiana without Haliburton lacks the creation at the top of the rotation to close a gap against a MSG crowd and a Knicks defense that knows how to protect leads. The Knicks at 11-6 are playing exactly to their archetype: physical, organized, and difficult to beat at home.",
    },
    {
      gameId: "ORL-WAS-20261122",
      teams: { home: "WAS", away: "ORL" },
      finalScore: { home: 116, away: 96 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:12",
          description: "Kyshawn George hit three three-pointers in the final three minutes of the first quarter, turning a two-point Washington edge into a 12-point lead before Orlando could process what was happening. The Magic's perimeter defense was immediately exposed, and the game's tone was set before the first break.",
          runScore: "12-2 WAS",
          momentum: "home",
          keyPlayer: "Kyshawn George",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:40",
          description: "AJ Dybantsa's combination of a driving finish, a kick-out assist to Bilal Coulibaly for a corner three, and a defensive rebound that led to a fast-break layup made it a 20-point Washington lead and confirmed this would be a thorough dismantling. Franz Wagner's -24 night was already being written.",
          runScore: "8-1 WAS",
          momentum: "home",
          keyPlayer: "AJ Dybantsa",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Washington put together the most complete team performance of the November 22 slate — six different players contributing across scoring, rebounding, and playmaking in a rout that was effectively decided in the first twelve minutes. Kyshawn George's six threes set the tempo, Trae Young's 11 assists kept the offense humming, and Anthony Davis provided the interior credibility that prevented Orlando from loading up on the perimeter. For a Wizards team sitting at 7-11, this was the reminder that the talent is there when it coheres.",
    },
  ],
};