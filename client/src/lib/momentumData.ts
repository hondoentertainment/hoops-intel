// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 8, 2026
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
  generatedDate: "2026-10-08",
  date: "October 8, 2026",
  gameOfTheNight: "MIL-OKC-20261007",
  topClutchPerformer: {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    clutchRating: 94,
    description: "Giannis absorbed OKC's late-game pressure and delivered the decisive possessions in the final two minutes at Paycom Center, willing Milwaukee to a two-point road escape that no one in the building saw coming after the Thunder led late. His fourth-quarter presence was categorical — every time OKC threatened to close the door, he found a way through it.",
  },
  games: [
    {
      gameId: "MIL-OKC-20261007",
      teams: { home: "OKC", away: "MIL" },
      finalScore: { home: 126, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "OKC opened with a 12-2 run to establish early Paycom Center control, forcing Milwaukee into a timeout and setting the tone for a physical first quarter.",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:34",
          description: "Giannis attacked the paint relentlessly through the second quarter, fueling an 18-8 Milwaukee counter-run that flipped the lead and silenced the Paycom crowd.",
          runScore: "22-14",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:55",
          description: "OKC answered at the start of the third with a 14-4 burst, reclaiming a double-digit lead and reigniting the home crowd heading into the final quarter.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:20",
          description: "Milwaukee's half-court execution sharpened dramatically in the final five minutes — a 10-2 closing run erased OKC's late advantage and set up a one-possession finish that neither team could afford to lose.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:48",
          description: "OKC regained a one-point lead with under a minute left, sending Paycom Center into a frenzy and setting the stage for the game's defining possession.",
          runScore: "4-2",
          momentum: "home",
          keyPlayer: "Chet Holmgren",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Giannis Antetokounmpo",
          team: "MIL",
          description: "Giannis caught a post entry with 38 seconds left, drew a double-team, and finished through contact at the rim to give Milwaukee the lead for good — a possession that demonstrated why his fourth-quarter gravity is still unmatchable in the East.",
          timeRemaining: "0:38",
          winProbabilityShift: 31,
        },
        {
          player: "Damian Lillard",
          team: "MIL",
          description: "Lillard iced the game with two free throws after being intentionally fouled, converting both to push the margin to three and forcing OKC into a desperation heave that fell short.",
          timeRemaining: "0:09",
          winProbabilityShift: 22,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "SGA drove baseline for a layup with 1:02 remaining to pull OKC within one, momentarily threatening to turn the arena narrative entirely on its head.",
          timeRemaining: "1:02",
          winProbabilityShift: -18,
        },
      ],
      narrative: "This was the night's most complete two-point swing — a game that changed hands five times in the fourth quarter alone and never settled into a comfortable margin for either team. OKC had the lead, the crowd, and the momentum with under a minute left, and still could not close. Giannis's finishing sequence near the rim was the single most important play of the preseason window so far, a possession that reset every organizational read on Milwaukee's road competitiveness. The Bucks came into Paycom Center 1-1 and left having beaten a benchmark-tier program on its home floor — that is not a footnote, that is a statement. Oklahoma City's 0-2 preseason start is now the desk's most pressing Western Conference early-season question.",
    },
    {
      gameId: "ORL-MEM-20261007",
      teams: { home: "MEM", away: "ORL" },
      finalScore: { home: 118, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:44",
          description: "Memphis used Ja Morant's early aggression to build a 9-2 opening run, establishing FedExForum's signature first-quarter energy and putting Orlando on immediate defensive pressure.",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:15",
          description: "Orlando's defensive discipline tightened around Morant in the second quarter — a structured 16-6 run built on perimeter execution and transition discipline gave the Magic their first lead of the game.",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "Memphis mounted a gritty third-quarter charge, closing to within two on a Morant mid-range sequence that threatened to flip the building's energy entirely.",
          runScore: "12-5",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:10",
          description: "Franz Wagner responded to Memphis's charge with back-to-back perimeter scores that steadied Orlando's lead to six and effectively ended Memphis's window for a comeback.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Franz Wagner",
          team: "ORL",
          description: "Wagner pulled up from the right elbow with 3:44 left and Memphis within three, draining a mid-range jumper that was equal parts skill and composure — the shot that defined Orlando's road identity in this game.",
          timeRemaining: "3:44",
          winProbabilityShift: 19,
        },
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Morant converted a difficult floater in traffic with 2:15 remaining to cut the deficit to three, briefly giving the FedExForum crowd a reason to believe Memphis could find a late escape.",
          timeRemaining: "2:15",
          winProbabilityShift: -12,
        },
      ],
      narrative: "Orlando's 2-0 start is the East's cleanest early organizational narrative, and this game is the primary evidence. The Magic came into FedExForum — a building with genuine preseason crowd energy — and executed their defensive game plan against Ja Morant for 48 minutes without flinching. Franz Wagner's perimeter reliability was the engine from start to finish, and Orlando's ability to absorb Memphis's third-quarter charge without cracking speaks to a defensive identity that looks regulation-ready. Memphis falls to 1-1 and the Grizzlies' home-court comfort proved insufficient against a Magic team that arrived with structure. The desk's early read on Orlando is now two data points deep, and both point in the same direction.",
    },
    {
      gameId: "GSW-POR-20261007",
      teams: { home: "POR", away: "GSW" },
      finalScore: { home: 123, away: 118 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:50",
          description: "Golden State opened with familiar ball movement and a 10-3 scoring run, carrying its 26-point statement win over the Lakers into Moda Center with early authority.",
          runScore: "14-7",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "8:22",
          description: "Scoot Henderson ignited Portland's transition game with consecutive drives and a pull-up three, fueling a 17-7 second-quarter run that erased the deficit and gave the Blazers the lead entering halftime.",
          runScore: "17-7",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:10",
          description: "Golden State tightened defensively in the third and Curry's pick-and-roll execution produced six straight Warriors points, pulling GSW within two and setting up a tense final quarter on national television.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:45",
          description: "Portland responded to Golden State's third-quarter charge with a 14-5 run to open the fourth — Scoot Henderson's offensive creation in isolation was the difference, extending the lead to nine and effectively breaking Golden State's will on the road.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Portland's win on NBA TV was more convincing than the five-point final margin suggests — the Blazers went on a 14-5 run to open the fourth quarter that drained every ounce of Golden State's competitive oxygen. Scoot Henderson's fourth-quarter offensive creation was the story of this game: not volume, but quality, the kind of shot-making and drive-and-kick execution that reads as a genuine developmental leap. Golden State arrived at Moda Center 24 hours removed from a statement performance and left with their second preseason loss in three games, which makes their organizational read genuinely volatile entering the regular-season stretch. Portland's 1-0 start is clean, earned, and broadcast nationally — and that matters for a franchise still rebuilding its identity.",
    },
    {
      gameId: "MIN-IND-20261007",
      teams: { home: "IND", away: "MIN" },
      finalScore: { home: 123, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:02",
          description: "Minnesota's defensive intensity from Monday's Milwaukee road win carried into Hilton Coliseum early — a 10-4 Timberwolves opening run put Indiana on its heels and silenced the home-opener crowd.",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:30",
          description: "Haliburton unlocked Indiana's pace offense in the second quarter with four consecutive assists — a 22-9 Pacers run turned the game's momentum completely and gave Indiana a lead it would not relinquish.",
          runScore: "22-9",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Indiana extended its advantage with a composed third quarter built entirely on pace and ball movement — Minnesota's half-court defense, which had been a strength, simply could not keep up with the Pacers' tempo.",
          runScore: "16-8",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:45",
          description: "Minnesota's attempt at a fourth-quarter rally — a 10-4 run that briefly cut the deficit to eight — was answered immediately by Indiana bench scoring that sealed the home-opener result.",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Indiana's offensive pace was a problem Minnesota simply could not solve for 48 minutes, and Tyrese Haliburton's second-quarter playmaking sequence was the moment this game's narrative was written. The Pacers' home-opener at Hilton Coliseum was supposed to be a test — Minnesota came in 1-0 after a blowout road win at Milwaukee and carried legitimate credentials — but Indiana outpaced them from the midway point of the second quarter onward. The desk's Tuesday preview called for Minnesota to control this game, and the 11-point result is a direct contradiction that demands recalibration. Timberwolves drop to 1-2 in the preseason, bookending their one emphatic win with two losses that reveal genuine spacing and pace vulnerabilities.",
    },
    {
      gameId: "PHX-CHI-20261007",
      teams: { home: "CHI", away: "PHX" },
      finalScore: { home: 124, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:10",
          description: "Phoenix came out with structure and purpose — a 13-5 opening run gave the Suns early control at the United Center and briefly suggested a bounce-back performance from an 0-1 team.",
          runScore: "13-5",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "4:55",
          description: "Coby White's perimeter shooting ignited the United Center crowd — a 20-8 Chicago run spanning the final six minutes of the first half flipped the lead and swung the building's energy entirely behind the Bulls.",
          runScore: "20-8",
          momentum: "home",
          keyPlayer: "Coby White",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Phoenix tightened defensively in the third quarter and cut the deficit to four on a Durant mid-range sequence, momentarily suggesting the Suns had found their competitive footing in the second half.",
          runScore: "13-6",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Chicago's bench unit produced the game-sealing sequence — an 18-9 fourth-quarter run that buried Phoenix's comeback attempt and allowed the United Center to fully exhale on its home-opener night.",
          runScore: "18-9",
          momentum: "home",
          keyPlayer: "Coby White",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Chicago's United Center home-opener followed a clean narrative arc: Phoenix arrived with structure, took an early lead, and then watched Coby White dismantle their defensive continuity piece by piece over the game's final 30 minutes. The Bulls' offense through White is faster and more decisive than the desk expected at this preseason stage, and the home crowd's energy was a genuine factor in sustaining momentum through Phoenix's third-quarter answer. Phoenix's organizational situation is now the West's most ambiguous early story — two consecutive losses to teams outside the West contender tier, and no clear evidence that the Suns' system is generating the defensive consistency their season depends on. The desk is watching PHX closely as the preseason window narrows toward meaningful roster evaluation.",
    },
  ],
};