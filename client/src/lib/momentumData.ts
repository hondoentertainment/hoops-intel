// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 26, 2026
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
  generatedDate: "2026-11-27",
  date: "November 26, 2026",
  gameOfTheNight: "SAS-POR-20261125",
  topClutchPerformer: {
    player: "Damian Lillard",
    team: "POR",
    clutchRating: 94,
    description: "Lillard authored the definitive clutch sequence of the night — back-to-back threes in the final three minutes to repel every Wembanyama-led Spurs charge, sealing a win that required every bit of Portland's backcourt resolve against the season's most dominant individual performance.",
  },
  games: [
    {
      gameId: "SAS-POR-20261125",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 116, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:22",
          description: "Wembanyama took over with a personal 9-2 run — back-to-back blocks converted into fast-break points and a pull-up three — to push SAS ahead by 8 and silence the Moda Center crowd.",
          runScore: "9-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:41",
          description: "Deni Avdija answered Wembanyama's dominance with five straight points, capped by a step-back three that leveled the game, while Lillard drew two quick fouls to swing the foul differential Portland's way.",
          runScore: "11-4 POR",
          momentum: "home",
          keyPlayer: "Deni Avdija",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:48",
          description: "With Portland clinging to a 3-point lead, Lillard hit consecutive threes on successive possessions to push the margin to 9 and silence any realistic Spurs comeback, even as Wembanyama continued to pour in impossible mid-range jumpers.",
          runScore: "8-2 POR",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Step-back three over Wembanyama's outstretched 7-foot-4 wingspan with Portland up 2 — extended the lead to 5 and effectively ended the Spurs' last credible possession sequence.",
          timeRemaining: "2:48",
          winProbabilityShift: 22,
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Catch-and-shoot three from the wing off a Stephon Castle drive-and-kick — his 44th point — briefly trimmed the deficit to 4 and forced Portland into a timeout they could not afford to waste.",
          timeRemaining: "1:31",
          winProbabilityShift: -11,
        },
        {
          player: "Deni Avdija",
          team: "POR",
          description: "Two clutch free throws after drawing contact on an offensive rebound put the game effectively out of reach and ensured Portland would not need a stop it was not guaranteed to get.",
          timeRemaining: "0:54",
          winProbabilityShift: 14,
        },
      ],
      narrative: "Victor Wembanyama produced arguably the most breathtaking individual effort of the NBA season — 44 points, 16 rebounds, 2 blocks — and still could not drag San Antonio past a Portland team that refused to flinch. The Blazers had the antidote in Deni Avdija's 33-point, 12-rebound counter and Damian Lillard's cold-blooded three-point shooting down the stretch, turning what could have been a Wembanyama legend game into a painful road stumble for the Spurs. SAS drops to 15-4 in its first real test of mortality, and the basketball world is left marveling at how a 44-point performance went home with an L.",
    },
    {
      gameId: "MIN-OKC-20261125",
      teams: { home: "OKC", away: "MIN" },
      finalScore: { home: 106, away: 113 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "SGA scored 11 of OKC's first 15 second-quarter points to open a 7-point Thunder lead, the Paycom Center responding to every bucket as Oklahoma City looked like the team built to win at home.",
          runScore: "11-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:58",
          description: "Jaden McDaniels ignited a decisive 14-4 Minnesota run with a pair of threes and an emphatic block-to-layup sequence, flipping the momentum irreversibly as the Wolves began to dominate every facet the box score captures.",
          runScore: "14-4 MIN",
          momentum: "away",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "LaMelo Ball orchestrated Minnesota's fourth-quarter control with three consecutive assists that produced nine points, pushing the lead to double digits and exposing OKC's inability to close off driving lanes.",
          runScore: "9-2 MIN",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Oklahoma City looked like the dominant home team through the first half as SGA torched Minnesota, but the Wolves flipped a switch in the third quarter that OKC never found the breaker for. Jaden McDaniels' +13 differential is the statistical ghost haunting Thunder fans — a reminder that individual brilliance from SGA could not compensate for Minnesota's systemic second-half superiority. The Timberwolves now sit comfortably at 14-5 while OKC's home-court aura takes a credibility hit.",
    },
    {
      gameId: "MIA-PHI-20261125",
      teams: { home: "PHI", away: "MIA" },
      finalScore: { home: 111, away: 104 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:12",
          description: "LeBron James orchestrated a 10-2 Philadelphia run with 3 assists and a punctuating three-pointer, establishing Philadelphia's control and demonstrating why his all-court presence remains unguardable even at this stage of his career.",
          runScore: "10-2 PHI",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:45",
          description: "Giannis Antetokounmpo powered Miami to within 3 on a 12-4 run — four consecutive paint buckets that exposed Philadelphia's interior defense and briefly made the Xfinity Mobile Arena a hostile environment for the home crowd.",
          runScore: "12-4 MIA",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:20",
          description: "Tyrese Maxey erupted for 9 consecutive Philadelphia points — three pull-up jumpers in a row — to push the lead back to double digits and drain whatever belief Miami had manufactured in the third quarter.",
          runScore: "9-0 PHI",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "PHI",
          description: "LeBron dribble-drove baseline for a right-handed finish over Giannis with PHI up 6 — pushing the lead to 8 — then sealed the possession with a pressure free throw after drawing the foul.",
          timeRemaining: "3:04",
          winProbabilityShift: 18,
        },
      ],
      narrative: "LeBron James' 25-10-12 triple-double was the season's most complete all-around performance, a masterclass in knowing exactly what a team needs at every moment. Philadelphia's execution down the stretch was immaculate — Maxey's fourth-quarter eruption took the air out of a Miami team that had Giannis playing at an elite level in defeat. At 15-4, Philadelphia is making a compelling case that this roster is built differently than any team in the East.",
    },
    {
      gameId: "CLE-NYK-20261125",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 121, away: 102 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:33",
          description: "Jose Alvarado came off the bench and immediately detonated — three consecutive threes in a 90-second stretch turned a 2-point game into an 11-point New York lead and left Cleveland's defense looking bewildered at MSG.",
          runScore: "13-2 NYK",
          momentum: "home",
          keyPlayer: "Jose Alvarado",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:17",
          description: "Mikal Bridges controlled the third quarter on both ends — 8 points, 2 deflections, and consistent positional defense that turned Jarrett Allen's already difficult night into a statistical catastrophe capped by a -32 differential.",
          runScore: "10-3 NYK",
          momentum: "home",
          keyPlayer: "Mikal Bridges",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Jose Alvarado's five-three barrage in the first half was the moment this game became a foregone conclusion — the kind of bench explosion that breaks an opponent's spirit before halftime. Mikal Bridges' +33 differential tells the story of a game Cleveland was never truly competitive in after the second quarter, with Jarrett Allen's -32 serving as a stark bookend. MSG was rocking from early in the second period, and the Knicks never gave Cleveland a reason to believe.",
    },
    {
      gameId: "PHX-HOU-20261125",
      teams: { home: "HOU", away: "PHX" },
      finalScore: { home: 116, away: 104 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:01",
          description: "Alperen Sengun orchestrated a 12-3 Houston run entirely through passing — four assists in six minutes, manipulating Phoenix's interior defense and exposing the Suns' lack of a credible answer for his playmaking at the five.",
          runScore: "12-3 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:44",
          description: "Kevin Durant scored 8 straight Phoenix points to cut the Houston lead to 5 — a reminder of how dangerous the Suns remain when Durant is locked in — but Amen Thompson responded with an emphatic put-back slam that steadied Houston.",
          runScore: "10-6 HOU",
          momentum: "home",
          keyPlayer: "Amen Thompson",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Alperen Sengun's triple-double was built on vision and feel rather than athleticism — 11 assists that dissected Phoenix's defense with surgical precision while he simultaneously punished them in the post. Houston's interior dominance was the defining theme, with Sengun and Amen Thompson combining for 23 rebounds and ensuring Phoenix could never string together the stops needed to make a genuine run. At 14-5, the Rockets have firmly established themselves as a Western Conference heavyweight.",
    },
    {
      gameId: "LAC-MEM-20261125",
      teams: { home: "MEM", away: "LAC" },
      finalScore: { home: 115, away: 97 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:28",
          description: "Ty Jerome's relentless defensive activity — two steals converted into 6 fast-break points — ignited a 16-4 Memphis run that turned a close game into a rout the Clippers never recovered from.",
          runScore: "16-4 MEM",
          momentum: "home",
          keyPlayer: "Ty Jerome",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:55",
          description: "Jaylen Wells buried back-to-back threes to push the lead to 22 as Memphis's half-court offense operated with clockwork efficiency — Cedric Coward's relentless offensive rebounding giving the Grizzlies second chances LA simply could not afford to surrender.",
          runScore: "10-2 MEM",
          momentum: "home",
          keyPlayer: "Jaylen Wells",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Ty Jerome's four-steal, seven-assist performance was the defensive engine that dismantled a Clippers team that has now lost nine of ten and shows no structural path out of this spiral. Memphis was relentless on both ends, with Jerome's disruption creating easy offense and Cedric Coward's physical rebounding ensuring LA never got comfortable. At 14-5, the Grizzlies are cementing their identity as one of the West's most complete and legitimate contenders.",
    },
    {
      gameId: "SAC-GSW-20261125",
      teams: { home: "GSW", away: "SAC" },
      finalScore: { home: 129, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:12",
          description: "De'Anthony Melton hit four threes in a seven-minute stretch to blow the game open, with Golden State's spacing creating astronomical looks that Sacramento's compromised roster had no capacity to contest.",
          runScore: "18-6 GSW",
          momentum: "home",
          keyPlayer: "De'Anthony Melton",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:40",
          description: "Gui Santos added 10 third-quarter points on efficient shooting, burying any residual Sacramento hope as Chase Center settled into a celebration — Brandin Podziemski's playmaking keeping the ball moving fluidly through Golden State's sets.",
          runScore: "12-5 GSW",
          momentum: "home",
          keyPlayer: "Gui Santos",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Eight threes from De'Anthony Melton is the kind of shooting night that belongs in a video game, and Sacramento — now 2-16 and the West's worst team — had no answer for a Golden State offense that generated open looks from every angle. Domantas Sabonis' 27-10-6 showing is a reflection of his individual excellence rather than any team competitiveness; the Kings are in a freefall with no visible floor. Golden State meanwhile looks rejuvenated, Melton's performance injecting legitimate optimism into a 10-8 squad searching for its identity.",
    },
    {
      gameId: "BRK-MIL-20261125",
      teams: { home: "MIL", away: "BRK" },
      finalScore: { home: 97, away: 104 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "7:02",
          description: "Julius Randle scored 10 points in a 14-5 Brooklyn run to seize control at Fiserv Forum — an astonishing inversion of expectations as the NBA's worst team was bullied in its own building by one of its few potential trade partners.",
          runScore: "14-5 BRK",
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:33",
          description: "Tyler Herro scored 7 consecutive Milwaukee points to trim the Brooklyn lead to 3, briefly making Fiserv Forum believe before Noah Clowney answered with two critical buckets off the bench to push the margin back to 7.",
          runScore: "9-5 MIL",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Egor Demin",
          team: "BRK",
          description: "Demin split two defenders on a driving floater with Milwaukee down 3 — his poise in the clutch shocking a Fiserv crowd that briefly believed a Bucks comeback was possible.",
          timeRemaining: "2:11",
          winProbabilityShift: 16,
        },
      ],
      narrative: "Brooklyn walked into Fiserv Forum as a double-digit underdog and walked out with a road win that exposed just how structurally broken Milwaukee has become at 2-17. Julius Randle was the difference-maker, but Egor Demin's clutch floater in the final two minutes showed a young team growing into competitive basketball. The Bucks' historically poor start continues to deepen, and there is no visible coalition of veterans capable of reversing this trajectory.",
    },
    {
      gameId: "CHI-CHA-20261125",
      teams: { home: "CHA", away: "CHI" },
      finalScore: { home: 105, away: 107 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "5:17",
          description: "Brandon Miller seized the third quarter with 14 consecutive Charlotte points — four threes and a driving layup that lifted the Hornets from down 6 to up 8 and briefly made Spectrum Center believe in an unlikely victory.",
          runScore: "14-3 CHA",
          momentum: "home",
          keyPlayer: "Brandon Miller",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:44",
          description: "Matas Buzelis anchored Chicago's response with 8 fourth-quarter points and two critical defensive plays, stabilizing a Bulls team that could easily have collapsed under Miller's offensive assault and completing a 12-4 Chicago run.",
          runScore: "12-4 CHI",
          momentum: "away",
          keyPlayer: "Matas Buzelis",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Josh Giddey",
          team: "CHI",
          description: "Giddey drove baseline to convert a difficult lefty layup-and-one with Chicago up 1, extending the lead to 4 and forcing Charlotte to burn their final timeout in a moment that required veteran composure from a maturing young player.",
          timeRemaining: "1:18",
          winProbabilityShift: 21,
        },
        {
          player: "Brandon Miller",
          team: "CHA",
          description: "Miller hit a pull-up three to cut the deficit to 2 with under a minute remaining — his 35th point and a reminder that Charlotte has an offensive weapon capable of manufacturing points from nothing in the most pressurized moments.",
          timeRemaining: "0:47",
          winProbabilityShift: -13,
        },
        {
          player: "Matas Buzelis",
          team: "CHI",
          description: "Buzelis made two pressure free throws after Charlotte fouled on the inbounds — icing the game and completing Chicago's escape from a performance that had nearly unraveled in spectacular fashion.",
          timeRemaining: "0:11",
          winProbabilityShift: 19,
        },
      ],
      narrative: "Brandon Miller's 35-point eruption was the most spectacular losing effort on a night loaded with star performances, a one-man offensive cyclone that nearly ripped a win away from a Chicago team that had no business surviving the third quarter. Matas Buzelis and Josh Giddey provided the clutch infrastructure the Bulls needed when Miller's brilliance made this genuinely uncomfortable — Chicago's young core demonstrating they can execute when the game is on the line. Charlotte falls to 4-13, left to marvel at what Miller is becoming and wonder when the supporting cast will grow around him.",
    },
  ],
};