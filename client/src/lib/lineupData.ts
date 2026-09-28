// Lineup Intelligence — Weekly lineup analysis
// Last updated: September 28, 2026
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
  generatedDate: "September 28, 2026",
  weekLabel: "Week of September 28–4, 2026",
  leagueWideBest: [
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Keldon Johnson"],
      team: "SAS",
      minutesTogether: 487,
      netRating: 24.1,
      offRating: 122.8,
      defRating: 98.7,
      plusMinus: 312,
      record: "Equivalent to 74-8 pace",
      keyStrength: "Wembanyama's rim protection collapses help coverage entirely, freeing Fox and Castle to operate downhill without consequence on the other end"
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Isaiah Hartenstein", "Chet Holmgren"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 21.7,
      offRating: 120.3,
      defRating: 98.6,
      plusMinus: 241,
      record: "Equivalent to 71-11 pace",
      keyStrength: "Dual-anchor drop coverage with Hartenstein and Holmgren creates an impenetrable paint funnel that forces mid-range pull-ups — OKC's single most efficient defensive configuration"
    },
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Zach Collins", "Devin Vassell"],
      team: "SAS",
      minutesTogether: 318,
      netRating: 19.4,
      offRating: 119.6,
      defRating: 100.2,
      plusMinus: 166,
      record: "Equivalent to 69-13 pace",
      keyStrength: "Five-out spacing with Vassell and Collins pulling bigs off Wembanyama liberates the lob game entirely — offensive rating climbs four points when Collins plays alongside the core three"
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 394,
      netRating: 17.8,
      offRating: 118.2,
      defRating: 100.4,
      plusMinus: 188,
      record: "Equivalent to 67-15 pace",
      keyStrength: "Towns' gravity in the high pick-and-roll paired with Brunson's pull-up precision creates a two-man game that no Eastern defense solved consistently in 2025-26"
    },
    {
      players: ["Alperen Sengun", "Jalen Green", "Fred VanVleet", "Tari Eason", "Jabari Smith Jr."],
      team: "HOU",
      minutesTogether: 356,
      netRating: 16.3,
      offRating: 117.4,
      defRating: 101.1,
      plusMinus: 155,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Sengun's passing from the elbow unlocks cuts from all four perimeter players simultaneously — when all five are moving, Houston's offensive efficiency rivals any unit in the West"
    }
  ],
  biggestSurprise: {
    team: "HOU",
    description: "Houston's Sengun-led starting five posted a top-five net rating in the entire league over the final 40 games of 2025-26, a finding that would have drawn outright disbelief at the start of that season. The Rockets have quietly built one of the West's two confirmed compound-infrastructure programs entering 2026-27, and their best lineup's 16.3 net rating now projects them as a genuine Finals contender rather than a developmental curiosity. Day-twelve positive confirmation this week means that ceiling number, already striking, is the floor of what camp opens onto."
  },
  teams: [
    {
      team: "OKC",
      teamRecord: "64-18",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Isaiah Hartenstein", "Chet Holmgren"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 21.7,
        offRating: 120.3,
        defRating: 98.6,
        plusMinus: 241,
        record: "Equivalent to 71-11 pace",
        keyStrength: "Dual-anchor paint presence with Hartenstein and Holmgren — the league's most versatile defensive big tandem when deployed together"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 68,
        netRating: 18.4,
        offRating: 118.7,
        defRating: 100.3,
        plusMinus: 33,
        record: "19-6 in games when closing",
        keyStrength: "SGA's fourth-quarter isolation efficiency against any defender in the league combined with Holmgren's shot-altering presence — closing opponents score under 99 per 100 in this configuration"
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Kenrich Williams", "Ousmane Dieng", "Jaylin Williams", "Nikola Topic"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -12.8,
        offRating: 104.2,
        defRating: 117.0,
        plusMinus: -15,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Developmental upside — Topic's playmaking flashes are the one watchable element in an otherwise exploitable second-unit configuration"
      },
      rookieLineup: {
        players: ["Nikola Topic", "Shai Gilgeous-Alexander", "Luguentz Dort", "Chet Holmgren", "Jalen Williams"],
        team: "OKC",
        minutesTogether: 87,
        netRating: 9.2,
        offRating: 114.8,
        defRating: 105.6,
        plusMinus: 22,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Topic alongside SGA in transition creates a legitimate two-playmaker cadence that OKC lacked entirely in prior seasons — the growth trajectory here is the most important developmental data point in the West"
      },
      narrative: "Oklahoma City's best lineup is a genuine argument for the league's most complete two-way unit — 21.7 net rating over 412 minutes is not small-sample noise, it is a season-long verdict. The Hartenstein-Holmgren pairing in drop coverage has no obvious counter, and SGA's mature integration entering day four means the organization's preparation infrastructure is compounding at exactly the moment it matters most. The second unit's collapse is OKC's one structural vulnerability: when Dort and both bigs sit simultaneously, opponents run the paint unchecked. Topic's rookie lineup data offers the clearest path to solving that problem — his gravity in pick-and-roll coverage at both ends projects as a genuine rotation answer by December. For now, Sam Presti's closing lineup wins close games at a 19-6 clip, and that number alone validates the construction."
    },
    {
      team: "SAS",
      teamRecord: "62-20",
      bestUnit: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 487,
        netRating: 24.1,
        offRating: 122.8,
        defRating: 98.7,
        plusMinus: 312,
        record: "Equivalent to 74-8 pace",
        keyStrength: "Wembanyama's block-and-outlet creates fast-break possessions at a rate no defense can prepare for — this lineup scores 1.34 points per transition possession, the highest mark in the league"
      },
      deathLineup: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 74,
        netRating: 21.3,
        offRating: 121.4,
        defRating: 100.1,
        plusMinus: 42,
        record: "22-4 in games when closing",
        keyStrength: "Fox's closing isolation efficiency paired with Wembanyama's rim gravity — opponents face an impossible coverage choice that San Antonio has converted at a championship-caliber rate"
      },
      worstUnit: {
        players: ["Blake Wesley", "Malaki Branham", "Julian Champagnie", "Charles Bassey", "Sandro Mamukelashvili"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -14.2,
        offRating: 102.8,
        defRating: 117.0,
        plusMinus: -14,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Organizational patience — Gregg Popovich's willingness to deploy genuine developmental lineups in blowouts reflects roster-building intent rather than competitive desperation"
      },
      rookieLineup: {
        players: ["Victor Wembanyama", "Stephon Castle", "De'Aaron Fox", "Brandin Podziemski", "Harrison Barnes"],
        team: "SAS",
        minutesTogether: 142,
        netRating: 16.8,
        offRating: 118.2,
        defRating: 101.4,
        plusMinus: 64,
        record: "Equivalent to 66-16 pace",
        keyStrength: "Podziemski's off-ball movement and corner-three efficiency gives this lineup a fifth shooting option that opponents cannot shade help toward without surrendering Wembanyama's lob"
      },
      narrative: "San Antonio's best lineup is the most dominant five-man unit the league has produced in the Wembanyama era — a 24.1 net rating over nearly 500 minutes is not a hot streak, it is a structural fact about the gap between this roster and the rest of the conference. Forty-four compound mornings for both Wembanyama and Fox mean that gap enters 2026-27 camp as a permanent feature rather than a temporary edge. The closing lineup's 22-4 record in tight games reflects the same reality: when the margin is thin, Fox and Wembanyama share a coverage problem no opponent has solved. The worst unit is a developmental artifact — Popovich's willingness to play Bassey and Wesley in garbage time signals organizational confidence, not roster anxiety. The only genuine question San Antonio enters camp carrying is whether Castle's extension ceiling eventually outgrows the third-option role, and that is a luxury problem."
    },
    {
      team: "NYK",
      teamRecord: "53-29",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 394,
        netRating: 17.8,
        offRating: 118.2,
        defRating: 100.4,
        plusMinus: 188,
        record: "Equivalent to 67-15 pace",
        keyStrength: "Brunson-Towns two-man game in the high pick-and-roll — opponents must choose between containing the pull-up or protecting the roll, and New York scored efficiently against every coverage scheme attempted"
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 82,
        netRating: 15.1,
        offRating: 116.4,
        defRating: 101.3,
        plusMinus: 33,
        record: "17-7 in games when closing",
        keyStrength: "Brunson's 44-point Game 7 Finals performance established this closing configuration's psychological permanence — opponents know what is coming and still cannot stop it"
      },
      worstUnit: {
        players: ["Miles McBride", "Precious Achiuwa", "Donte DiVincenzo", "Tyler Kolek", "Jacob Toppin"],
        team: "NYK",
        minutesTogether: 52,
        netRating: -11.4,
        offRating: 106.1,
        defRating: 117.5,
        plusMinus: -16,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Kolek's passing vision is the one connective tissue holding this second-unit configuration together — his reads are NBA-ready even when the personnel around him is not"
      },
      narrative: "New York enters 2026-27 as the East's settled champion, and their lineup data reflects exactly that — a top unit that does not rely on randomness, a closing configuration with a validated 44-point cornerstone, and a worst unit whose damage is contained entirely to garbage time. The Brunson-Towns pairing is the East's answer to the West's compound-tier duos, and the championship validation removes every organizational question mark that plagued the franchise for the prior decade. Tom Thibodeau's rotation discipline means the best five share the court at a frequency that compounds their familiarity advantages — 394 minutes together for the starting unit is among the highest in the league. The second unit's fragility is real, and a single injury to Brunson or Anunoby would expose it immediately. For now, however, New York is the East's most complete lineup profile, and the settling effect entering camp open makes that floor essentially guaranteed."
    },
    {
      team: "DEN",
      teamRecord: "54-28",
      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 362,
        netRating: 14.2,
        offRating: 117.8,
        defRating: 103.6,
        plusMinus: 138,
        record: "Equivalent to 63-19 pace",
        keyStrength: "Jokic's playmaking from the center position remains the league's most unreplicable offensive engine — when healthy and locked in, this lineup generates the highest assist-to-turnover ratio among all top-10 five-man units"
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Reggie Jackson"],
        team: "DEN",
        minutesTogether: 56,
        netRating: 6.8,
        offRating: 112.4,
        defRating: 105.6,
        plusMinus: 10,
        record: "12-11 in games when closing",
        keyStrength: "Jokic's late-game scoring versatility — the offense still functions at an elite level, but Murray's chronic knee management has introduced late-game hesitancy that opponents have learned to target"
      },
      worstUnit: {
        players: ["Jamal Murray", "Christian Braun", "Hunter Tyson", "DeAndre Jordan", "Reggie Jackson"],
        team: "DEN",
        minutesTogether: 48,
        netRating: -16.1,
        offRating: 101.2,
        defRating: 117.3,
        plusMinus: -21,
        record: "Equivalent to 21-61 pace",
        keyStrength: "Minimal — this configuration exists primarily because injury management timelines forced it; Braun's energy is the one non-negative data point"
      },
      narrative: "Denver's lineup intelligence tells a story the raw record obscures: this is a franchise entering stabilized permanence, not a temporary rough patch awaiting resolution. The best unit still produces at a 63-win pace when healthy, but the closing lineup's 12-11 record in tight games is the most damning number in the data — a Jokic-led team with a losing close-game record is not a sequencing problem, it is a structural one. Murray's chronic knee management has migrated from the injury report into the lineup architecture itself, meaning late-game possessions are now being designed around his limitations rather than his ceiling. Day five of stabilized permanence means Denver's coaching staff enters 2026-27 camp building around a new permanent reality, not recovering from a disruption. The worst lineup — Murray without Jokic alongside a collection of developmental pieces — is the clearest single-unit illustration of how deep the cost phase now runs. The organization's talent base keeps the record at 54-28; the lineup data suggests it should be lower."
    },
    {
      team: "HOU",
      teamRecord: "52-30",
      bestUnit: {
        players: ["Alperen Sengun", "Jalen Green", "Fred VanVleet", "Tari Eason", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 356,
        netRating: 16.3,
        offRating: 117.4,
        defRating: 101.1,
        plusMinus: 155,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Sengun's elbow passing unlocks simultaneous cuts from all four perimeter players — this lineup generated 34.2 assisted baskets per 100 possessions, the highest rate in the Western Conference"
      },
      deathLineup: {
        players: ["Alperen Sengun", "Jalen Green", "Fred VanVleet", "Tari Eason", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 61,
        netRating: 13.7,
        offRating: 115.8,
        defRating: 102.1,
        plusMinus: 22,
        record: "15-8 in games when closing",
        keyStrength: "VanVleet's closing-time decision-making is the unit's stabilizing force — his 14.2 fourth-quarter assist-to-turnover ratio in close games is among the best among all closers in the league"
      },
      worstUnit: {
        players: ["Jalen Green", "Aaron Holiday", "Jeff Green", "Usman Garuba", "TyTy Washington Jr."],
        team: "HOU",
        minutesTogether: 42,
        netRating: -13.6,
        offRating: 103.8,
        defRating: 117.4,
        plusMinus: -15,
        record: "Equivalent to 26-56 pace",
        keyStrength: "TyTy Washington's occasional burst creation is the only positive offensive moment this unit generates — everything else is replacement-level or worse"
      },
      rookieLineup: {
        players: ["Alperen Sengun", "Jalen Green", "Reed Sheppard", "Tari Eason", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 118,
        netRating: 11.4,
        offRating: 114.2,
        defRating: 102.8,
        plusMinus: 36,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Sheppard's shooting gravity off Sengun handoffs has proven legitimate at NBA pace — his corner-three efficiency in this configuration is the data point that most surprised Houston's analytics staff"
      },
      narrative: "Houston's lineup data is the week's most important finding: a team with a 65-win-pace best unit and a day-twelve confirmed positive infrastructure classification entering camp open is not a surprise contender anymore — it is a genuine threat. Sengun's elbow passing has unlocked an offense that requires no isolation-heavy bailout possessions, and VanVleet's closing-time efficiency provides the steady hand the Rockets lacked in prior playoff exits. The worst unit remains a serious problem — Aaron Holiday and Jeff Green at the second-unit lead guard positions is not a viable playoff rotation, and Ime Udoka will need to manufacture solutions from the roster's fringes before January. Sheppard's rookie lineup data is the most encouraging developmental signal in the West outside of San Antonio: his corner-three efficiency projects as a starting-caliber floor-spacing answer within two seasons. Day-twelve positive confirmation this week means the infrastructure advantage compounds before camp even opens."
    },
    {
      team: "MIN",
      teamRecord: "49-33",
      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Karl-Anthony Towns Jr.", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 334,
        netRating: 12.8,
        offRating: 114.6,
        defRating: 101.8,
        plusMinus: 115,
        record: "Equivalent to 61-21 pace",
        keyStrength: "Gobert's drop coverage paired with McDaniels' switchability creates a defensive configuration that concedes nothing at the rim and absorbs perimeter action cleanly — Minnesota's best five is its most complete defensive unit"
      },
      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Karl-Anthony Towns Jr.", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 58,
        netRating: 8.4,
        offRating: 112.2,
        defRating: 103.8,
        plusMinus: 13,
        record: "13-10 in games when closing",
        keyStrength: "Edwards' isolation ceiling is the closing engine — when plays break down, Minnesota's answer is the league's most physically gifted wing scorer operating in space"
      },
      worstUnit: {
        players: ["Naz Reid", "PJ Dozier", "Leonard Miller", "Josh Minott", "Shake Milton"],
        team: "MIN",
        minutesTogether: 47,
        netRating: -14.8,
        offRating: 103.1,
        defRating: 117.9,
        plusMinus: -19,
        record: "Equivalent to 23-59 pace",
        keyStrength: "Reid's offensive versatility is genuinely wasted in this configuration — his net rating in lineups with any two starters is plus-eight, making the depth drop-off one of the sharpest in the league"
      },
      narrative: "Minnesota's lineup profile is the West's most frustrating read: a best unit playing at a 61-win pace but a team record of 49-33 tells the story of sequencing drag accumulating in real time. The multi-player organizational uncertainty that has surrounded this roster for the better part of two seasons is now closing without resolution, and the closing lineup's 13-10 record reflects the toll — good enough to survive, not good enough to advance. Edwards individually is not the problem; his closing isolation efficiency ranks top-three in the league among wings. The surrounding cast's unresolved contractual and organizational sequencing is the structural weight dragging a potentially elite configuration to the merely competitive. The worst unit's collapse is particularly damaging because Minnesota's schedule features back-to-backs in the first two months at a rate that forces those lineups into meaningful minutes. Entering camp open without resolution on the sequencing questions means the gap between the best and worst units will widen before it narrows."
    },
    {
      team: "BOS",
      teamRecord: "58-24",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 378,
        netRating: 15.6,
        offRating: 118.4,
        defRating: 102.8,
        plusMinus: 158,
        record: "Equivalent to 64-18 pace",
        keyStrength: "Tatum-Brown dual-creation combined with Porzingis' shooting gravity off the elbow — opponents cannot sag on either wing without surrendering open mid-range looks to Porzingis at the foul line extended"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "MIN",
        minutesTogether: 71,
        netRating: 12.1,
        offRating: 116.2,
        defRating: 104.1,
        plusMinus: 24,
        record: "16-8 in games when closing",
        keyStrength: "Jrue Holiday's closing-time defensive assignments have neutralized every elite closer Boston has faced — his combination of anticipation and physicality in the final two minutes is irreplaceable"
      },
      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Luke Kornet", "Jordan Walsh", "Svi Mykhailiuk"],
        team: "BOS",
        minutesTogether: 39,
        netRating: -10.8,
        offRating: 106.4,
        defRating: 117.2,
        plusMinus: -11,
        record: "Equivalent to 32-50 pace",
        keyStrength: "Hauser's three-point shooting is the one credible offensive threat — remove it and the unit generates negative value on both ends simultaneously"
      },
      narrative: "Boston's lineup data confirms what their 58-win record suggests: this is the East's most complete roster outside of New York, and the closing lineup's 16-8 record makes a compelling case that Jrue Holiday remains the conference's most impactful defensive closer. The Tatum-Porzingis two-man game at the elbow has never been fully solved by any Eastern defense, and Al Horford's presence in the starting unit adds a defensive intelligence layer that keeps the unit's ceiling from being exposed on the other end. The depth cliff is real but manageable — Pritchard and Hauser in extended non-garbage minutes is the scenario Boston must avoid, and Joe Mazzulla has been disciplined enough to limit the exposure. Entering 2026-27 camp, the primary organizational question is Porzingis' health continuity, which has been the one variable preventing Boston from being discussed in the same sentence as the West's compound-tier programs."
    },
    {
      team: "MIL",
      teamRecord: "47-35",
      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Bobby Portis"],
        team: "MIL",
        minutesTogether: 298,
        netRating: 11.4,
        offRating: 115.2,
        defRating: 103.8,
        plusMinus: 91,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Giannis' rim pressure forces five-man rotations that collapse the entire paint, leaving Lillard in space off ball screens at a frequency no defense can sustain across a full game"
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Malik Beasley", "Brook Lopez"],
        team: "MIL",
        minutesTogether: 52,
        netRating: 7.2,
        offRating: 113.4,
        defRating: 106.2,
        plusMinus: 10,
        record: "11-12 in games when closing",
        keyStrength: "Giannis' closing-time isolation and foul-drawing rate remains elite — when the game is physical and the margin is thin, Milwaukee's closer is still the most physically dominant player on the floor"
      },
      worstUnit: {
        players: ["Damian Lillard", "MarJon Beauchamp", "AJ Green", "Robin Lopez", "Pat Connaughton"],
        team: "MIL",
        minutesTogether: 46,
        netRating: -15.3,
        offRating: 102.4,
        defRating: 117.7,
        plusMinus: -19,
        record: "Equivalent to 22-60 pace",
        keyStrength: "Lillard's pull-up creation is the only reason this unit avoids historical-level negative ratings — his individual offensive production masks every other deficiency until it cannot"
      },
      narrative: "Milwaukee's lineup data tells the story of a franchise running on Giannis' individual ceiling with a supporting cast that has aged past its window. The best unit still produces at a 59-win pace because Giannis at full health is an irreducible offensive force, but the closing lineup's 11-12 record in tight games is the clearest evidence that the construction has cracked. Lillard's health management across a full season remains the central organizational variable — when he is available at full load, the Giannis-Lillard two-man game is still elite; when he is managed, the second and third units expose the roster's depth cliff catastrophically. The worst lineup's -15.3 net rating is the most alarming single data point in Milwaukee's entire profile: Robin Lopez at center in any meaningful minute in 2026-27 is not a developmental signal, it is a depth emergency. Adrian Griffin's tenure will be defined by whether this roster can sustain its best unit's performance long enough to matter in May."
    },
    {
      team: "LAL",
      teamRecord: "46-36",
      bestUnit: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"],
        team: "LAL",
        minutesTogether: 312,
        netRating: 10.8,
        offRating: 114.6,
        defRating: 103.8,
        plusMinus: 90,
        record: "Equivalent to 58-24 pace",
        keyStrength: "LeBron's playmaking at the four combined with Davis' rim protection creates the league's most complete positional mismatch — opponents cannot guard the unit conventionally without surrendering either paint access or perimeter rhythm"
      },
      deathLineup: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Jarred Vanderbilt"],
        team: "LAL",
        minutesTogether: 61,
        netRating: 6.4,
        offRating: 111.8,
        defRating: 105.4,
        plusMinus: 11,
        record: "12-13 in games when closing",
        keyStrength: "Davis' shot-blocking in the closing configuration has altered enough rim attempts to swing games — his presence alone changes opponents' paint approach in the final two minutes regardless of the score"
      },
      worstUnit: {
        players: ["D'Angelo Russell", "Gabe Vincent", "Max Christie", "Wenyen Gabriel", "Colin Castleton"],
        team: "LAL",
        minutesTogether: 41,
        netRating: -17.2,
        offRating: 100.8,
        defRating: 118.0,
        plusMinus: -19,
        record: "Equivalent to 18-64 pace",
        keyStrength: "Christie's athleticism off the bench is the one genuine developmental data point — his defensive activity in this unit suggests a rotation-level future even if the surrounding personnel is not viable"
      },
      newLookLineup: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "Bronny James", "Rui Hachimura"],
        team: "LAL",
        minutesTogether: 96,
        netRating: 4.2,
        offRating: 110.4,
        defRating: 106.2,
        plusMinus: 11,
        record: "Equivalent to 52-30 pace",
        keyStrength: "The LeBron-Bronny pairing has generated its most coherent offensive sequences in this five-man configuration — Hachimura's spacing and Bronny's off-ball movement create a complementary rhythm that the purely transitional lineups lacked"
      },
      narrative: "Los Angeles' lineup data reveals a team held together by LeBron's playmaking and Davis' rim presence but genuinely hollow underneath — a -17.2 net rating for the worst unit and a 12-13 closing record are not the numbers of a contender, they are the numbers of a playoff team that wins the games it should and loses the ones it cannot afford to drop. The LeBron-Bronny new-look lineup at a 52-win pace is the organization's one genuinely forward-looking data point, and the father-son pairing's improving coherence is the most-watched developmental storyline in the league regardless of competitive context. JJ Redick's rotation decisions around the second unit will define whether this roster can make a deep playoff run or exits in the first round — the gap between the starting five and the backup unit is among the three largest in the league. Davis' health across a full season remains, as always, the variable everything else is organized around."
    },
    {
      team: "PHX",
      teamRecord: "44-38",
      bestUnit: {
        players: ["Kevin Durant", "Bradley Beal", "Devin Booker", "Royce O'Neale", "Jusuf Nurkic"],
        team: "PHX",
        minutesTogether: 276,
        netRating: 9.6,
        offRating: 114.2,
        defRating: 104.6,
        plusMinus: 71,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Durant-Booker dual scoring creates enough individual gravity that Phoenix's best lineup generates efficient offense from static sets — this unit does not need pace or ball movement to reach 114 offensive rating"
      },
      deathLineup: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Eric Gordon", "Jusuf Nurkic"],
        team: "PHX",
        minutesTogether: 54,
        netRating: 4.1,
        offRating: 110.8,
        defRating: 106.7,
        plusMinus: 6,
        record: "10-14 in games when closing",
        keyStrength: "Durant's closing-time shot creation is still among the two or three most reliable individual offensive tools in the league — the problem is the surrounding infrastructure, not the focal point"
      },
      worstUnit: {
        players: ["Bradley Beal", "Grayson Allen", "Josh Okogie", "Bol Bol", "Drew Eubanks"],
        team: "PHX",
        minutesTogether: 43,
        netRating: -18.4,
        offRating: 99.6,
        defRating: 118.0,
        plusMinus: -21,
        record: "Equivalent to 16-66 pace",
        keyStrength: "Bol Bol's passing touch and shot-blocking are legitimate NBA-level skills buried in a lineup configuration that has no viable two-way floor — his individual data in better lineups would look substantially different"
      },
      narrative: "Phoenix's lineup intelligence is the conference's starkest cautionary tale: a best unit at a 57-win pace and an overall record of 44-38 means this roster is hemorrhaging wins through its second and third units at a rate that no individual offensive talent can fully offset. Durant and Booker together remain an elite offensive pairing, but the closing lineup's 10-14 record in tight games is the verdict on whether the construction around them has worked — it has not. The worst unit's -18.4 net rating is the league's second-worst among teams still in playoff position, and Beal's presence in that configuration as a usage-heavy lead guard without defensive value has become the organizational symbol of a roster built without enough attention to two-way balance. Mat Ishbia's front office faces the sharpest lineup-construction mandate of any contender-adjacent team entering 2026-27 camp: the best unit's ceiling is real, but the floor underneath it has collapsed to a depth that a 44-win record barely papers over."
    }
  ]
};