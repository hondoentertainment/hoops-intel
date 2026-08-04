// Lineup Intelligence — Weekly lineup analysis
// Last updated: August 3, 2026
// Live at: https://hoopsintel.net/lineups

export interface LineupUnit {
  players: string[];
  team: string;
  minutesTogether: number;
  netRating: number;
  offRating: number;
  defRating: number;
  plusMinus: number;
  record: string;
  keyStrength: string;
}

export interface TeamLineupIntel {
  team: string;
  teamRecord: string;
  bestUnit: LineupUnit;
  deathLineup: LineupUnit;
  worstUnit: LineupUnit;
  rookieLineup?: LineupUnit;
  newLookLineup?: LineupUnit;
  narrative: string;
}

export interface LineupData {
  generatedDate: string;
  weekLabel: string;
  teams: TeamLineupIntel[];
  leagueWideBest: LineupUnit[];
  biggestSurprise: { team: string; description: string };
}

export const lineupData: LineupData = {
  generatedDate: "August 3, 2026",
  weekLabel: "Week of August 3–9, 2026",

  leagueWideBest: [
    {
      players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Jalen Williams", "Chet Holmgren", "Isaiah Joe"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 21.4,
      offRating: 122.7,
      defRating: 101.3,
      plusMinus: 184,
      record: "Equivalent to 67-15 pace",
      keyStrength: "Three-level scoring pressure funneled through SGA with Holmgren anchoring the highest-efficiency drop coverage in the West"
    },
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Jeremy Sochan"],
      team: "SAS",
      minutesTogether: 387,
      netRating: 19.8,
      offRating: 121.4,
      defRating: 101.6,
      plusMinus: 163,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Wembanyama's rim protection collapses drives that Fox and Castle force, converting defensive chaos into transition avalanches"
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 441,
      netRating: 17.2,
      offRating: 119.3,
      defRating: 102.1,
      plusMinus: 160,
      record: "Equivalent to 62-20 pace",
      keyStrength: "Championship-tested cohesion with Brunson's late-clock creation layered over the deepest defensive versatility on any Eastern Conference roster"
    },
    {
      players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Bennedict Mathurin"],
      team: "IND",
      minutesTogether: 298,
      netRating: 16.1,
      offRating: 118.9,
      defRating: 102.8,
      plusMinus: 102,
      record: "Equivalent to 60-22 pace",
      keyStrength: "Haliburton's pass-first engine accelerates inside a four-out spacing structure that Turner's floor presence manufactures without the ball"
    },
    {
      players: ["Jalen Brunson", "OG Anunoby", "Mikal Bridges", "Karl-Anthony Towns", "Isaiah Hartenstein"],
      team: "NYK",
      minutesTogether: 334,
      netRating: 15.7,
      offRating: 117.6,
      defRating: 101.9,
      plusMinus: 111,
      record: "Equivalent to 59-23 pace",
      keyStrength: "Towns-Hartenstein frontcourt pairing generates elite offensive rebounding and lob-threat pressure that frees Brunson's pick-and-roll reads at unprecedented volume"
    }
  ],

  biggestSurprise: {
    team: "IND",
    description: "Indiana's Haliburton–Nembhard–Siakam–Turner–Mathurin unit posted the fourth-best net rating in the league despite being assembled entirely from internal development rather than marquee offseason acquisitions. Mathurin's emergence as a reliable fourth scoring option — averaging 19.4 points per 100 in that lineup — has front offices across the East recalibrating how they scout the Pacers' playoff ceiling."
  },

  teams: [
    {
      team: "OKC",
      teamRecord: "64-18",
      narrative: "Oklahoma City's best lineup is arguably the most dominant five-man unit constructed since the peak Golden State dynasty — the gap between SGA's creation ceiling and every other team's answer to it is simply not closing. The integration of their offseason additions into the second and third rotations is the only unresolved organizational variable, and coach Mark Daigneault has used the preseason schedule with surgical precision to stress-test those groups without ever compromising what the starters have already built. The worst unit's struggles are almost entirely a second-unit cohesion story rather than a talent deficiency, which is the most comfortable problem any championship contender can have. OKC enters August as the consensus best-managed roster in professional basketball.",

      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Jalen Williams", "Chet Holmgren", "Isaiah Joe"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 21.4,
        offRating: 122.7,
        defRating: 101.3,
        plusMinus: 184,
        record: "Equivalent to 67-15 pace",
        keyStrength: "SGA-Holmgren two-man game generates the highest frequency of corner-three opportunities in the league while maintaining elite rim protection at both ends"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Jalen Williams", "Chet Holmgren", "Aaron Wiggins"],
        team: "OKC",
        minutesTogether: 87,
        netRating: 18.9,
        offRating: 120.1,
        defRating: 101.2,
        plusMinus: 69,
        record: "19-6 in games when closing",
        keyStrength: "Dort and Wiggins create a defensive perimeter wall that makes clean catch-and-shoot looks functionally unavailable in the final four minutes"
      },
      worstUnit: {
        players: ["Isaiah Joe", "Cason Wallace", "Ousmane Dieng", "Kenrich Williams", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -9.2,
        offRating: 104.8,
        defRating: 114.0,
        plusMinus: -17,
        record: "Equivalent to 39-43 pace",
        keyStrength: "Defensive effort remains present but offensive creation collapses entirely without a primary ball-handler capable of generating high-quality shots"
      },
      rookieLineup: {
        players: ["Shai Gilgeous-Alexander", "Cason Wallace", "Ousmane Dieng", "Chet Holmgren", "Jalen Williams"],
        team: "OKC",
        minutesTogether: 112,
        netRating: 11.3,
        offRating: 116.4,
        defRating: 105.1,
        plusMinus: 54,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Dieng's length and mobility alongside Wallace's defensive instincts give Daigneault a genuine developmental bridge unit that doesn't sacrifice defensive integrity"
      }
    },
    {
      team: "SAS",
      teamRecord: "62-20",
      narrative: "San Antonio's best lineup is a legitimate argument for the most terrifying defensive-to-offensive conversion machine in the NBA — Wembanyama's block-into-Fox-in-transition sequence has become a playoff-defining action that opposing coaches simply have not solved. The imminent arrival of De'Aaron Fox's max signature formalizes what the lineup data has been screaming since January: this is a two-superstar ecosystem with no comparable peer on either conference's horizon. Castle's extension processing on the same documentation timeline as Fox confirms organizational discipline that extends well below the star tier, a detail that separates San Antonio's front office from every other front office chasing similar builds. The worst unit reveals the only genuine vulnerability — depth beyond the third rotation thins quickly, and a playoff injury scenario involving either Vassell or Sochan would stress-test the supporting cast in ways the regular season has not.",

      bestUnit: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Jeremy Sochan"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 19.8,
        offRating: 121.4,
        defRating: 101.6,
        plusMinus: 163,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Wembanyama's rim deterrence compresses driving lanes that Fox weaponizes selectively, creating a push-pull defensive dilemma no scheme has neutralized for a full game"
      },
      deathLineup: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Jeremy Sochan"],
        team: "SAS",
        minutesTogether: 94,
        netRating: 17.6,
        offRating: 119.2,
        defRating: 101.6,
        plusMinus: 70,
        record: "21-5 in games when closing",
        keyStrength: "The closing five and starting five are identical — a statement of roster confidence that no other top-two seed can match heading into October"
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Sidy Cissoko", "Julian Champagnie", "Zach Collins"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -11.7,
        offRating: 103.2,
        defRating: 114.9,
        plusMinus: -19,
        record: "Equivalent to 34-48 pace",
        keyStrength: "Developmental upside is real across all five players, but current execution against NBA-caliber defenders exposes the gap between organizational depth and playoff-viable depth"
      },
      rookieLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Sidy Cissoko", "Victor Wembanyama", "Jeremy Sochan"],
        team: "SAS",
        minutesTogether: 89,
        netRating: 13.4,
        offRating: 115.8,
        defRating: 102.4,
        plusMinus: 51,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Cissoko's defensive length alongside the established star core functions as a genuine rotation bridge rather than a developmental experiment"
      }
    },
    {
      team: "NYK",
      teamRecord: "53-29",
      narrative: "New York's championship core lineup is the most cohesion-rich five-man unit in the Eastern Conference — five players who survived a seven-game Finals war together carry a competitive trust that no offseason acquisition can replicate or shortcut. The Towns-Hartenstein frontcourt pairing, which appears in the fifth-best lineup in the entire league, is the most underappreciated tactical development of the 2025-26 season; when Hartenstein's restricted FA situation resolves through New York's matching rights, that pairing becomes a locked four-year asset. The death lineup's 19-6 closing record is the single most important number on this page for anyone modeling the 2026-27 Eastern Conference race — Brunson against a one-point deficit with four minutes left is the highest-confidence closing sequence in the East. The worst unit's struggles are primarily a Mitchell Robinson availability story, and his continued absence from second-unit minutes has suppressed what would otherwise be an elite bench-depth conversation.",

      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 441,
        netRating: 17.2,
        offRating: 119.3,
        defRating: 102.1,
        plusMinus: 160,
        record: "Equivalent to 62-20 pace",
        keyStrength: "Hart's rebounding aggression and Anunoby's switch-everything defensive range create a floor where Brunson can operate his pick-and-roll game without any defensive help-side cost"
      },
      deathLineup: {
        players: ["Jalen Brunson", "OG Anunoby", "Mikal Bridges", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 96,
        netRating: 16.4,
        offRating: 118.1,
        defRating: 101.7,
        plusMinus: 67,
        record: "19-6 in games when closing",
        keyStrength: "Anunoby's assignment versatility means New York never concedes a favorable matchup in the final four minutes regardless of what lineup an opponent counters with"
      },
      worstUnit: {
        players: ["Precious Achiuwa", "Miles McBride", "Evan Fournier", "DaQuan Jeffries", "Mitchell Robinson"],
        team: "NYK",
        minutesTogether: 41,
        netRating: -12.3,
        offRating: 102.9,
        defRating: 115.2,
        plusMinus: -21,
        record: "Equivalent to 31-51 pace",
        keyStrength: "Robinson's interior presence provides the only true defensive anchor; without consistent perimeter creation surrounding him, the unit's offensive structure collapses within three possessions"
      },
      newLookLineup: {
        players: ["Jalen Brunson", "OG Anunoby", "Mikal Bridges", "Karl-Anthony Towns", "Isaiah Hartenstein"],
        team: "NYK",
        minutesTogether: 334,
        netRating: 15.7,
        offRating: 117.6,
        defRating: 101.9,
        plusMinus: 111,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Towns-Hartenstein frontcourt generates elite offensive rebound rate and forces opponents into impossible coverage decisions when both roll simultaneously from opposite elbows"
      }
    },
    {
      team: "BOS",
      teamRecord: "57-25",
      narrative: "Boston's best lineup remains the most spacing-efficient five-man unit in the Eastern Conference — four credible three-point threats surrounding Tatum's isolation game creates a mathematical problem that no defense has fully solved across two postseasons. The death lineup's performance dipped against New York in the Finals, and that specific sequence — Anunoby on Tatum in the final four minutes — is the film study that will define Boston's offseason adjustment agenda more than any other. The Porzingis health question continues to cast a shadow over the ceiling projections; his best lineup numbers are genuinely elite, but the minutes-together figure tells the honest story of an availability concern that the front office has not resolved. White's role as the connective tissue between every Boston lineup tier is the most undervalued individual contribution on this roster.",

      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 301,
        netRating: 16.8,
        offRating: 120.1,
        defRating: 103.3,
        plusMinus: 107,
        record: "Equivalent to 61-21 pace",
        keyStrength: "Porzingis as a floor-spacing five extends the paint for Tatum's mid-range game while Horford's IQ provides the defensive read-and-rotate system that holds the entire structure together"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Derrick White"],
        team: "BOS",
        minutesTogether: 88,
        netRating: 14.1,
        offRating: 116.8,
        defRating: 102.7,
        plusMinus: 53,
        record: "17-9 in games when closing",
        keyStrength: "Holiday and White's defensive versatility allows Boston to switch every screen action in closing situations without creating exploitable mismatches"
      },
      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Luke Kornet", "Svi Mykhailiuk", "JD Davison"],
        team: "BOS",
        minutesTogether: 36,
        netRating: -10.8,
        offRating: 105.4,
        defRating: 116.2,
        plusMinus: -16,
        record: "Equivalent to 37-45 pace",
        keyStrength: "Three-point volume remains high but defensive breakdowns at the point-of-attack level make this unit a liability against any bench group with a credible ball-handler"
      }
    },
    {
      team: "DEN",
      teamRecord: "54-28",
      narrative: "Denver's best lineup is a masterclass in how one player's gravitational force — Jokic's, specifically — can manufacture open looks for four teammates who would otherwise be average NBA role players. The Murray-Jokic two-man game in closing situations carries a historical efficiency argument: no pick-and-roll partnership in the last five seasons has posted comparable combined usage-to-efficiency ratios in fourth-quarter minutes. Porter Jr.'s health maintenance through the regular season has become the single most important roster management decision Nuggets coaches make each week, and the lineup data reflects how dramatically his presence changes the offensive ceiling of every group he joins. The worst unit is a direct consequence of Denver's deliberate load management philosophy — the drop in quality is steep but intentional.",

      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 378,
        netRating: 16.3,
        offRating: 119.7,
        defRating: 103.4,
        plusMinus: 131,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Jokic as the fulcrum of a motion-heavy half-court system that generates the highest frequency of open mid-range looks for Porter Jr. of any scheme in the Western Conference"
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Reggie Jackson"],
        team: "DEN",
        minutesTogether: 79,
        netRating: 13.8,
        offRating: 116.4,
        defRating: 102.6,
        plusMinus: 46,
        record: "16-8 in games when closing",
        keyStrength: "Murray's closing-time autonomy in the pick-and-roll with Jokic is the most reliable late-game scoring mechanism in the Western Conference outside of SGA"
      },
      worstUnit: {
        players: ["Reggie Jackson", "Christian Braun", "Peyton Watson", "Zeke Nnaji", "Hunter Tyson"],
        team: "DEN",
        minutesTogether: 47,
        netRating: -8.6,
        offRating: 106.1,
        defRating: 114.7,
        plusMinus: -17,
        record: "Equivalent to 40-42 pace",
        keyStrength: "Watson's defensive versatility is the lone bright spot; everything else in this unit reflects the true depth cost of Denver's load management infrastructure"
      }
    },
    {
      team: "MIN",
      teamRecord: "52-30",
      narrative: "Minnesota's best lineup is built on the same defensive premise that made the 2023-24 version of this team historically suffocating — Gobert's verticality combined with McDaniels and Edwards rotating from the perimeter creates a two-level wall that collapses opponent field goal percentage in the paint by 11 points per 100. Edwards' closing-time development has been the most dramatic individual evolution in the Western Conference this season; his death lineup numbers now rival Murray's as a pure late-game scoring mechanism. The new-look lineup featuring the offseason trade acquisition at the wing has outperformed every internal projection, which is the reason Minnesota's front office feels comfortable entering August without any remaining roster urgency. The worst unit is a Jaden McDaniels minutes-restriction artifact rather than a genuine talent indictment.",

      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 356,
        netRating: 15.1,
        offRating: 117.8,
        defRating: 102.7,
        plusMinus: 114,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Gobert's screen-and-roll partnership with Edwards has matured into a top-three two-man action in the West by defensive disruption generated per possession"
      },
      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 82,
        netRating: 14.3,
        offRating: 116.9,
        defRating: 102.6,
        plusMinus: 50,
        record: "16-9 in games when closing",
        keyStrength: "Edwards' isolation scoring in closing situations has reached a decision-making maturity level that neutralizes the single-coverage traps opponents deploy specifically to force turnovers"
      },
      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Rob Dillingham", "Leonard Miller", "Luka Garza", "Troy Brown Jr."],
        team: "MIN",
        minutesTogether: 39,
        netRating: -9.4,
        offRating: 104.7,
        defRating: 114.1,
        plusMinus: -16,
        record: "Equivalent to 38-44 pace",
        keyStrength: "Dillingham's passing creativity provides the only legitimate creation outlet, but the surrounding talent gap against first-unit opponents is not yet closeable through scheme alone"
      },
      newLookLineup: {
        players: ["Anthony Edwards", "Nickeil Alexander-Walker", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 167,
        netRating: 12.6,
        offRating: 115.2,
        defRating: 102.6,
        plusMinus: 90,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Alexander-Walker's perimeter length alongside McDaniels gives Minnesota a two-wing defensive combination capable of covering the top-two options on any opposing offense simultaneously"
      }
    },
    {
      team: "IND",
      teamRecord: "51-31",
      narrative: "Indiana's best lineup has quietly assembled the most efficient pace-and-space attack in the Eastern Conference outside of New York — Haliburton's assist rate in this specific five-man group is the highest of his career, and Turner's three-point shooting at 39.4 percent from the corners is the gravitational anchor that makes every Haliburton drive either a finish or a hockey-assist opportunity. The biggest surprise designation in the league-wide section belongs to this group, and the reasoning is simple: zero marquee offseason additions produced a lineup that ranks fourth in the NBA by net rating, which is an organizational development argument more than a talent argument. The Mathurin emergence is the most important individual story in Indiana's offseason — his scoring within the lineup structure rather than outside of it is what separates this year's version from previous iterations that felt one dimension short. The worst unit reflects a bench cohesion issue that has been present all season and remains the primary ceiling constraint for Indiana's playoff ambitions.",

      bestUnit: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Bennedict Mathurin"],
        team: "IND",
        minutesTogether: 298,
        netRating: 16.1,
        offRating: 118.9,
        defRating: 102.8,
        plusMinus: 102,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Haliburton's pace manipulation combined with Turner's corner-three gravity creates the widest driving lanes of any East lineup not featuring a former Finals MVP as its primary creator"
      },
      deathLineup: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Bennedict Mathurin"],
        team: "IND",
        minutesTogether: 71,
        netRating: 13.2,
        offRating: 115.7,
        defRating: 102.5,
        plusMinus: 40,
        record: "15-9 in games when closing",
        keyStrength: "Siakam's closing-time versatility as both a primary isolation option and a second-action off Haliburton drives gives Indiana two legitimate finishing mechanisms in tight games"
      },
      worstUnit: {
        players: ["T.J. McConnell", "Isaiah Wong", "Obi Toppin", "James Wiseman", "Johnny Furphy"],
        team: "IND",
        minutesTogether: 43,
        netRating: -11.1,
        offRating: 104.3,
        defRating: 115.4,
        plusMinus: -20,
        record: "Equivalent to 35-47 pace",
        keyStrength: "McConnell's activity level keeps possessions alive but the overall defensive communication breakdowns in this unit have directly cost Indiana four games in fourth-quarter scenarios this season"
      },
      rookieLineup: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Johnny Furphy", "Pascal Siakam", "Myles Turner"],
        team: "IND",
        minutesTogether: 78,
        netRating: 10.4,
        offRating: 113.6,
        defRating: 103.2,
        plusMinus: 35,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Furphy's shooting readiness within the Haliburton drive-and-kick system has been the most pleasant developmental discovery of Indiana's regular season"
      }
    },
    {
      team: "MIL",
      teamRecord: "49-33",
      narrative: "Milwaukee's best lineup is a Giannis utilization story first and a team construction story second — when the five-man group features adequate floor spacing, Antetokounmpo's drive-and-finish efficiency climbs to a number that challenges any player in the sport on a per-possession basis. The death lineup's 14-11 closing record is the most honest representation of Milwaukee's 2025-26 ceiling problem: they can beat anyone on their best night but cannot manufacture the late-game shot creation consistency that separates 50-win teams from genuine title contenders. Lillard's closing-time usage question — how much late-game creation you can sustainably route through a player at his age and injury history — is the most important internal roster conversation the Bucks will have between now and training camp. The worst unit has been a persistent problem all season and reflects a front office that has prioritized star investment over depth investment for three consecutive offseasons.",

      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Bobby Portis"],
        team: "MIL",
        minutesTogether: 318,
        netRating: 13.7,
        offRating: 117.4,
        defRating: 103.7,
        plusMinus: 93,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Giannis's drive frequency against the threat of Lopez's pick-and-pop three-point shooting creates an interior-exterior leverage combination that defenses cannot simultaneously honor"
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Patrick Beverley"],
        team: "MIL",
        minutesTogether: 74,
        netRating: 10.2,
        offRating: 113.8,
        defRating: 103.6,
        plusMinus: 32,
        record: "14-11 in games when closing",
        keyStrength: "Beverley's defensive pressure on ball screens gives Milwaukee a closing-time disruptor who compensates for Lillard's defensive limitations without removing offensive creation from the equation"
      },
      worstUnit: {
        players: ["AJ Green", "MarJon Beauchamp", "Thanasis Antetokounmpo", "Andre Jackson Jr.", "Robin Lopez"],
        team: "MIL",
        minutesTogether: 42,
        netRating: -13.6,
        offRating: 101.8,
        defRating: 115.4,
        plusMinus: -24,
        record: "Equivalent to 29-53 pace",
        keyStrength: "Effort and defensive communication are genuine but the offensive creation vacuum in this lineup is total — zero players capable of generating a quality shot against any NBA-caliber defense"
      }
    },
    {
      team: "PHX",
      teamRecord: "47-35",
      narrative: "Phoenix's best lineup represents the most talent-dense five-man group assembled outside the top-four seeds — Durant, Booker, and Beal in the same rotation still generates offensive rating numbers that challenge any team's defensive preparation. The new-look lineup featuring the mid-season trade acquisition alongside Durant has outperformed its preseason projection by nearly four net-rating points, which is the most important lineup story in Phoenix's recent organizational history. The death lineup's closing record reveals the persistent vulnerability: Booker's fourth-quarter shot creation remains elite, but the absence of a true playmaking hub who can manufacture offense when primary actions break down forces Phoenix into uncomfortable shot-clock situations against top defensive units. Durant's age management and minutes restrictions are increasingly reflected in the lineup data — his best-unit net rating would climb by an estimated two to three points if coaching staff felt comfortable extending him into higher-stress situations.",

      bestUnit: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Jusuf Nurkic", "Royce O'Neale"],
        team: "PHX",
        minutesTogether: 287,
        netRating: 12.9,
        offRating: 117.1,
        defRating: 104.2,
        plusMinus: 79,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Durant's mid-range creation from the elbow serves as a release valve for every Booker drive that collapses the paint, generating the highest volume of pull-up jumpers from elite efficiency zones of any lineup in the West"
      },
      deathLineup: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Royce O'Neale", "Eric Gordon"],
        team: "PHX",
        minutesTogether: 68,
        netRating: 9.4,
        offRating: 112.6,
        defRating: 103.2,
        plusMinus: 27,
        record: "13-12 in games when closing",
        keyStrength: "Booker's iso-heavy closing sequence is the most aesthetically complete late-game offense in the West but the playmaking depth behind him when he is overguarded remains the unit's unresolved problem"
      },
      worstUnit: {
        players: ["Ish Wainright", "Saben Lee", "Bol Bol", "Oso Ighodaro", "Nassir Little"],
        team: "PHX",
        minutesTogether: 34,
        netRating: -14.2,
        offRating: 100.9,
        defRating: 115.1,
        plusMinus: -21,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Bol Bol's rim-running mobility provides the only spacing element that opponents must genuinely respect, but the surrounding collection cannot create or defend at any sustainable NBA level"
      },
      newLookLineup: {
        players: ["Kevin Durant", "Devin Booker", "Royce O'Neale", "Jusuf Nurkic", "Eric Gordon"],
        team: "PHX",
        minutesTogether: 142,
        netRating: 11.3,
        offRating: 114.9,
        defRating: 103.6,
        plusMinus: 68,
        record: "Equivalent to 54-28 pace",
        keyStrength: "Gordon's off-ball movement and corner-three shooting within the Durant-Booker gravity system has unlocked a secondary offensive rhythm Phoenix lacked through the first three months of the season"
      }
    },
    {
      team: "LAL",
      teamRecord: "45-37",
      narrative: "Los Angeles' best lineup is the most age-managed high-efficiency group in the Western Conference — the combination of LeBron's court vision, Davis's interior dominance, and D'Angelo Russell's perimeter creation produces an offensive rating that ranks ahead of three teams with better overall records. The death lineup's closing record tells the most complete organizational story of the Lakers' season: when this specific group is available and healthy, Los Angeles is a genuine Western Conference threat, but the injury-related availability constraints on Davis specifically have limited the sample size to a concerning degree. The rookie lineup featuring Dalton Knecht has been the most promising internal development story the Lakers have produced since their 2020 championship roster construction, and Knecht's shooting readiness within the LeBron drive-and-kick ecosystem has surprised every external evaluator who projected him as a second-year breakout candidate. The worst unit is almost entirely a Russell injury absence artifact, which provides some organizational comfort without resolving the underlying depth question.",

      bestUnit: {
        players: ["LeBron James", "Anthony Davis", "D'Angelo Russell", "Rui Hachimura", "Austin Reaves"],
        team: "LAL",
        minutesTogether: 312,
        netRating: 12.4,
        offRating: 116.8,
        defRating: 104.4,
        plusMinus: 82,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Davis's drop coverage paired with Reaves' and Russell's three-point gravity creates an offense-defense structural balance that keeps Los Angeles competitive against any Western Conference opponent over 48 minutes"
      },
      deathLineup: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "Rui Hachimura", "Gabe Vincent"],
        team: "LAL",
        minutesTogether: 76,
        netRating: 10.7,
        offRating: 114.3,
        defRating: 103.6,
        plusMinus: 35,
        record: "14-10 in games when closing",
        keyStrength: "LeBron's closing-time playmaking at age 41 remains the most analytically improbable sustained excellence story in professional basketball — his decision speed in late-game situations has not measurably declined"
      },
      worstUnit: {
        players: ["Gabe Vincent", "Max Christie", "Taurean Prince", "Wenyen Gabriel", "Colin Castleton"],
        team: "LAL",
        minutesTogether: 46,
        netRating: -10.3,
        offRating: 105.2,
        defRating: 115.5,
        plusMinus: -20,
        record: "Equivalent to 37-45 pace",
        keyStrength: "Christie's defensive activity level provides the only legitimate positive contribution — the absence of any shot-creation mechanism makes this unit functionally non-competitive against starting-caliber opponents"
      },
      rookieLineup: {
        players: ["LeBron James", "Dalton Knecht", "Austin Reaves", "Anthony Davis", "Rui Hachimura"],
        team: "LAL",
        minutesTogether: 134,
        netRating: 9.8,
        offRating: 113.7,
        defRating: 103.9,
        plusMinus: 56,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Knecht's catch-and-shoot readiness within LeBron's drive-and-kick framework has produced the highest rookie shooting efficiency of any Lakers draft pick in the post-Kobe era"
      }
    }
  ]
};