// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 24, 2026
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
  generatedDate: "2026-11-24",
  date: "November 24, 2026",
  gameOfTheNight: "PHX-NOP-20261123",
  topClutchPerformer: {
    player: "Jordan Poole",
    team: "POR",
    clutchRating: 91,
    description: "Six three-pointers off the bench in an overtime road environment — Poole's fourth-quarter and OT bombardment kept New Orleans alive and nearly stole a win Phoenix had no business surrendering.",
  },
  games: [
    {
      gameId: "POR-PHI-20261123",
      teams: { home: "PHI", away: "POR" },
      finalScore: { home: 111, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Portland opened the game with a blistering 14-2 run fueled by Avdija threes and Clingan tip-ins, silencing a raucous Philly crowd before the first TV timeout.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description: "Tyrese Maxey caught fire to slice the deficit to six, rattling off nine straight Sixers points and briefly threatening to flip the narrative at Xfinity Mobile Arena.",
          runScore: "18-9",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "3:08",
          description: "Donovan Clingan dominated the glass on three straight possessions, capping a 17-6 Portland run that pushed the lead to 22 and effectively ended Philadelphia's challenge for the night.",
          runScore: "17-6",
          momentum: "away",
          keyPlayer: "Donovan Clingan",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Portland arrived in Philadelphia and dismantled a 14-4 Sixers team with the kind of collective efficiency that announces genuine contender status. Avdija was the headliner but Clingan's 18-rebound stranglehold on the paint was the structural story — every time Philly threatened, the Blazers' front line simply refused to give up second opportunities. Maxey's -23 differential tells you everything about how completely Portland's energy smothered the home side.",
    },
    {
      gameId: "SAS-SAC-20261123",
      teams: { home: "SAC", away: "SAS" },
      finalScore: { home: 107, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description: "Castle orchestrated a crisp 13-3 Spurs run, finding cutters and bombing pull-up threes as San Antonio's ball movement exposed Sacramento's thin defensive rotation from the opening minutes.",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "2:45",
          description: "Sabonis went on a personal 9-2 tear in the final three minutes of the half, drawing fouls and scoring inside to trim the lead and give Sacramento a momentary pulse at Golden 1 Center.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Domantas Sabonis",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Julian Champagnie detonated for three consecutive threes in a two-minute span, extending San Antonio's lead to 20 and triggering a Sacramento timeout that couldn't stop the bleeding.",
          runScore: "15-4",
          momentum: "away",
          keyPlayer: "Julian Champagnie",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio's 15-3 record is no fluke — the Spurs arrived in Sacramento and treated the Kings like a scrimmage opponent, with Castle running the offense like a seasoned veteran and Champagnie providing three-point fireworks off the bench. Sabonis's 20-12-8 line is a statistical marvel trapped inside a losing effort, a nightly reminder that Sacramento's supporting cast simply cannot match up with the West's elite. The talent gap was visible from the opening tip and never narrowed.",
    },
    {
      gameId: "OKC-IND-20261123",
      teams: { home: "IND", away: "OKC" },
      finalScore: { home: 125, away: 120 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:10",
          description: "SGA went on a personal 11-2 run to give Oklahoma City a nine-point lead, carving through Indiana's defense with mid-range pull-ups and attacking the rim at will.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description: "Indiana responded with a 16-5 burst anchored by Siakam post-ups and Oubre three-pointers, flipping a seven-point deficit into a four-point Pacers lead entering the fourth.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:14",
          description: "Nembhard's back-to-back pull-up jumpers in transition pushed Indiana's lead to eight with two minutes left, answering every Thunder surge and sealing the Pacers' home victory.",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Andrew Nembhard",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Andrew Nembhard",
          team: "IND",
          description: "Back-to-back transition pull-up jumpers that extended Indiana's lead to eight and effectively ended OKC's comeback hopes.",
          timeRemaining: "2:14",
          winProbabilityShift: 28,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Drove baseline for a contested and-one to trim the deficit to five and force an Indiana timeout with 90 seconds remaining.",
          timeRemaining: "1:31",
          winProbabilityShift: -14,
        },
      ],
      narrative: "SGA gave everything — 38 points on a spectacular individual performance — but Indiana's depth wore down the Thunder in the final twelve minutes, with Siakam, Oubre, and Nembhard each playing a decisive role across different stretches of the second half. Jalen Slawson's 16-point, 10-rebound, 4-block bench explosion was the hidden story, providing Indiana a physical interior presence that disrupted OKC's driving lanes all night. The Thunder will rue a fourth quarter where their defense simply ran out of answers against Indiana's pace.",
    },
    {
      gameId: "BRK-MIN-20261123",
      teams: { home: "MIN", away: "BRK" },
      finalScore: { home: 142, away: 116 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:45",
          description: "McDaniels caught fire with three consecutive threes and a driving dunk, sparking a 19-4 Minnesota run that turned a close early game into a rout before the first quarter ended.",
          runScore: "19-4",
          momentum: "home",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Randle posted seven straight Nets points to briefly generate some life, cutting what had been a 28-point lead to 20 and forcing a Minnesota timeout midway through the third.",
          runScore: "7-2",
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "1:55",
          description: "Trey Lyles answered Randle's push with a three-pointer and two emphatic put-back dunks, pushing the lead back to 29 and extinguishing any residual Brooklyn optimism.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Trey Lyles",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "McDaniels was a force of nature — 34 points, 10 rebounds, and four threes in a performance that left Brooklyn's defense scrambling and helpless from the first quarter onward. Dosunmu's 23-point contribution off the bench was almost a footnote in a night where the Wolves' entire rotation was simply on a different level than a Nets squad being outclassed every night. Randle's -25 differential as the nominal team leader encapsulates Brooklyn's season in a single number.",
    },
    {
      gameId: "MIL-TOR-20261123",
      teams: { home: "TOR", away: "MIL" },
      finalScore: { home: 111, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:20",
          description: "Scottie Barnes erupted for nine points in ninety seconds — a mid-range jumper, a steal-and-dunk, and a three — to give Toronto a seven-point lead and send Scotiabank Arena into a frenzy.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "Herro and Turner combined for 14 consecutive Milwaukee points to open the fourth quarter, flipping a three-point Toronto advantage into an 11-point Bucks lead in under four minutes.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:48",
          description: "Barnes converted a four-point play to trim Milwaukee's lead to three and set up a frantic final two minutes in Toronto.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Tyler Herro",
          team: "MIL",
          description: "Nailed a step-back three over Barnes to push Milwaukee's lead to six with 58 seconds left, a dagger that essentially sealed the Bucks' second win of the season.",
          timeRemaining: "0:58",
          winProbabilityShift: 34,
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Four-point play off a drive and-one plus the free throw to cut the deficit to three and force a Milwaukee timeout.",
          timeRemaining: "1:48",
          winProbabilityShift: -19,
        },
        {
          player: "Myles Turner",
          team: "MIL",
          description: "Knocked down a corner three off a Herro drive-and-kick to extend the lead to eight with under two minutes remaining.",
          timeRemaining: "1:52",
          winProbabilityShift: 22,
        },
      ],
      narrative: "Barnes delivered one of the most brilliant losing performances of the season — 31 points, 8 assists, 2 steals, and 4 blocks in a losing effort that deserved a better fate — but Milwaukee's fourth-quarter execution was ice-cold and devastating. Herro's step-back three over Barnes with under a minute left was the defining clutch shot of a taut final period, the kind of make that separates good teams from great ones regardless of record. The Bucks are only 2-16 but performances like this suggest the turnaround may be closer than their standings imply.",
    },
    {
      gameId: "CLE-CHI-20261123",
      teams: { home: "CHI", away: "CLE" },
      finalScore: { home: 122, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:00",
          description: "Jordan Hawkins came off the bench and immediately knocked down three consecutive threes, igniting a 17-5 Chicago run that wiped out Cleveland's early lead and shifted United Center's energy entirely.",
          runScore: "17-5",
          momentum: "home",
          keyPlayer: "Jordan Hawkins",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:15",
          description: "Mitchell briefly wrestled momentum back for Cleveland with seven straight points including a three and two pull-ups, trimming Chicago's lead to six entering the fourth.",
          runScore: "9-3",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Matas Buzelis drained back-to-back threes and Tre Jones added a driving floater as Chicago opened the fourth with a 12-4 run to put the game decisively out of Cleveland's reach.",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Matas Buzelis",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Hawkins's three-triple barrage off the bench was the game's tipping point — an instant momentum killer that caught Cleveland's defense flat-footed and gave Chicago an energy advantage they never surrendered. Mitchell's 28 points were real but came largely in losing circumstances, with the Cavaliers' bench being systematically outworked by Hawkins, Buzelis, and Jones across all four quarters. Hezonja's -24 differential was the statistical summary of a night when Cleveland's reserves simply had no answer for Chicago's depth.",
    },
    {
      gameId: "PHX-NOP-20261123",
      teams: { home: "NOP", away: "PHX" },
      finalScore: { home: 119, away: 123 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "2:30",
          description: "Poole ignited off the bench with four threes in a seven-minute stretch to erase an eight-point Phoenix advantage, sending Smoothie King Center into a frenzy and flipping the lead to New Orleans.",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Jordan Poole",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:10",
          description: "Jalen Green answered with a three-pointer and two straight mid-range pull-ups to reclaim a five-point Phoenix lead, trading punches with Poole and refusing to let New Orleans pull away.",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "significant",
        },
        {
          quarter: "OT",
          timestamp: "2:45",
          description: "Miles Bridges grabbed an offensive rebound and muscled in a put-back over two defenders to give Phoenix a four-point overtime lead — a backbreaking play that proved to be the game's decisive possession.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Miles Bridges",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jordan Poole",
          team: "NOP",
          description: "Nailed his sixth three-pointer to tie the game at 112 with 1:04 remaining in regulation and force overtime.",
          timeRemaining: "1:04",
          winProbabilityShift: -27,
        },
        {
          player: "Miles Bridges",
          team: "PHX",
          description: "Offensive put-back over two Pelicans defenders in overtime to push Phoenix's lead to four — the most consequential single possession of the entire slate.",
          timeRemaining: "2:45 OT",
          winProbabilityShift: 38,
        },
        {
          player: "Devin Booker",
          team: "PHX",
          description: "Navigated two Pelicans defenders for a smooth floater in overtime to extend Phoenix's lead to six with 90 seconds left.",
          timeRemaining: "1:32 OT",
          winProbabilityShift: 29,
        },
        {
          player: "Jeremiah Fears",
          team: "NOP",
          description: "Threaded a no-look pass through three Phoenix defenders to find Bey for a corner three, cutting the lead to three in overtime.",
          timeRemaining: "1:08 OT",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the game of the night and it wasn't particularly close — a spectacular overtime thriller that featured Poole's six-three eruption forcing extra time, Fears threading impossible passes in crunch moments, and ultimately Miles Bridges's thunderous offensive put-back delivering Phoenix the dagger the Pelicans couldn't overcome. New Orleans deserved better from a game where Fears's 11-assist night was a masterclass and Poole's 28 points off the bench represented one of the finest individual clutch performances of the young season. The Suns found a way, but only barely.",
    },
    {
      gameId: "LAC-HOU-20261123",
      teams: { home: "HOU", away: "LAC" },
      finalScore: { home: 116, away: 104 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:45",
          description: "Durant asserted himself with six consecutive points and two emphatic mid-range jumpers, capping a 14-4 Houston run that established a double-digit lead the Clippers never seriously threatened.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Garland strung together back-to-back three-point plays and a floater to briefly cut Houston's lead to six, injecting life into a struggling Clippers road trip.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Sengun and Thompson combined for 10 straight points as Houston reasserted control in the fourth, extending the lead back to 15 and coasting to the final buzzer.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Durant's 32-point, +16 performance was the story of a Houston win that was never really in doubt after the second quarter, with the Rockets' frontcourt trio of Durant, Sengun, and Thompson combining to deliver a physical and technical lesson to Los Angeles's thin rotation. Garland's 26 points were largely cosmetic — his -12 differential indicating he was largely scoring in garbage time — and the Clippers at 4-12 look increasingly like a team still searching for a cohesive identity. Houston continues to look like one of the West's most complete rosters.",
    },
    {
      gameId: "UTA-LAL-20261123",
      teams: { home: "LAL", away: "UTA" },
      finalScore: { home: 109, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:00",
          description: "Doncic controlled the opening quarter with seven assists and six points, orchestrating a methodical 15-6 Lakers run that established the tone for a comfortable home victory.",
          runScore: "15-6",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "Filipowski went to work inside with five straight points to give Utah a brief spark, cutting what was a 14-point deficit to eight and forcing the Lakers to call a timeout.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Kyle Filipowski",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "LaRavia's consecutive put-backs and a Kessler block-and-push-ahead dunk opened the fourth with an 11-2 run that buried Utah for good, pushing the lead back to 20.",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Jake LaRavia",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Doncic was in complete control from the opening tip, dissecting Utah's defense with his trademark patience and precision to the tune of 28 points and 8 assists as the co-Western Conference leaders dispatched a struggling Jazz squad without breaking a sweat. Filipowski's 21-12 line is a statistical bright spot for Utah's rebuilding project but his -21 differential reveals how completely mismatched this contest was — the Jazz at 3-16 are absorbing these losses as painful tuition. The Lakers and Spurs are sitting pretty at 15-3 at the top of the West.",
    },
    {
      gameId: "MEM-CHA-20261123",
      teams: { home: "CHA", away: "MEM" },
      finalScore: { home: 111, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:30",
          description: "Ty Jerome set a slate record by drilling his fifth three of the half, sparking a 16-7 Memphis run that turned a tied game into a 10-point Grizzlies lead at halftime.",
          runScore: "16-7",
          momentum: "away",
          keyPlayer: "Ty Jerome",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:45",
          description: "Christian Anderson exploded off Charlotte's bench with four threes in a spectacular stretch, triggering a 20-8 Hornets run that erased the deficit and gave Charlotte a stunning two-point lead.",
          runScore: "20-8",
          momentum: "home",
          keyPlayer: "Christian Anderson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Jerome knocked down his seventh three of the game to reclaim momentum for Memphis, with Cam Spencer adding a layup-and-one as the Grizzlies responded with a 13-4 run to seal it.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Ty Jerome",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Ty Jerome",
          team: "MEM",
          description: "His seventh three-pointer of the game — a slate record — with 4:48 remaining reclaimed the lead for Memphis and shifted the game's psychological weight decisively toward the Grizzlies.",
          timeRemaining: "4:48",
          winProbabilityShift: 31,
        },
        {
          player: "Christian Anderson",
          team: "CHA",
          description: "Back-to-back threes off the bench pulled Charlotte to within two with just under three minutes remaining, refusing to let Memphis coast to victory.",
          timeRemaining: "2:51",
          winProbabilityShift: -16,
        },
      ],
      narrative: "Jerome's seven-three masterpiece was the best individual three-point shooting performance of the entire slate, and even then Charlotte nearly stole the game behind Anderson's breathtaking bench eruption that turned a double-digit deficit into a lead in the third quarter. The Hornets showed genuine fight — Naz Reid's 24 and Coby White's 21 gave them three scorers in the twenties — but Memphis's perimeter depth was simply impossible to contain over 48 minutes. Anderson's +13 off the bench was Charlotte's brightest individual development note in a narrow defeat.",
    },
  ],
};