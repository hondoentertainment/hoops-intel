// Auto-generated Draft Stock Tracker data
// Weekly big board and scouting reports for the 2026 NBA Draft

export interface DraftProspect {
  rank: number; prevRank: number; name: string; school: string;
  position: string; height: string; age: number; scoutingGrade: number;
  projection: string; bestFit: string[]; strengths: string[]; weaknesses: string[];
  comparison: string; weeklyNote: string; trend: "rising" | "falling" | "stable";
  stats: { ppg: number; rpg: number; apg: number; fgPct: number; threePct: number };
}

export interface TeamNeed {
  team: string; record: string; lotteryOdds: string;
  primaryNeed: string; secondaryNeed: string; bestProspectFit: string; note: string;
}

export interface DraftData {
  generatedDate: string; weekLabel: string; classYear: number;
  bigBoard: DraftProspect[]; risers: { name: string; change: number; reason: string }[];
  fallers: { name: string; change: number; reason: string }[];
  tankWatch: TeamNeed[]; weeklyScoutReport: string;
}

export const draftData: DraftData = {
  generatedDate: "September 28, 2026",
  weekLabel: "Week of September 28–4, 2026",
  classYear: 2026,
  bigBoard: [
    {
      rank: 1,
      prevRank: 1,
      name: "Darryn Peterson",
      school: "Kansas",
      position: "SG/SF",
      height: "6'6\"",
      age: 18,
      scoutingGrade: 98,
      projection: "Top-3 Pick",
      bestFit: ["GSW", "OKC", "BOS"],
      strengths: [
        "Elite shot creation off the dribble",
        "Advanced playmaking for his position",
        "High-level defensive IQ and length",
        "Mature feel for the game"
      ],
      weaknesses: [
        "Three-point consistency at college level still developing",
        "Needs to add functional strength",
        "Occasionally over-dribbles in half-court"
      ],
      comparison: "Young Paul George with Jalen Brunson's playmaking instincts",
      weeklyNote: "Peterson dropped 34 points on 14-of-22 shooting in Kansas's Blue-White scrimmage, cementing his status as the consensus No. 1 pick heading into the season. His step-back midrange game is already NBA-ready.",
      trend: "stable",
      stats: { ppg: 21.4, rpg: 5.8, apg: 4.9, fgPct: 48.2, threePct: 36.7 }
    },
    {
      rank: 2,
      prevRank: 3,
      name: "Tre Johnson",
      school: "Texas",
      position: "SG",
      height: "6'5\"",
      age: 18,
      scoutingGrade: 96,
      projection: "Top-5 Pick",
      bestFit: ["DET", "CLE", "PHX"],
      strengths: [
        "Elite scoring instincts and shot creation",
        "NBA-ready three-point shot off the catch and off screens",
        "Tremendous body control on floaters and pull-ups",
        "High basketball IQ for his age"
      ],
      weaknesses: [
        "Playmaking and assist numbers need growth",
        "Defensive effort inconsistent",
        "Slight frame may struggle guarding wings in NBA"
      ],
      comparison: "Devin Booker with Donovan Mitchell's scoring aggression",
      weeklyNote: "Johnson rose two spots after leaked scrimmage footage showed an unstoppable pull-up jumper that scouts are comparing to early Devin Booker. Texas coaches are reportedly giving him maximum offensive freedom this season.",
      trend: "rising",
      stats: { ppg: 23.1, rpg: 3.4, apg: 3.2, fgPct: 46.8, threePct: 39.2 }
    },
    {
      rank: 3,
      prevRank: 2,
      name: "Noa Essengue",
      school: "Ratiopharm Ulm (Germany)",
      position: "PF/SF",
      height: "6'9\"",
      age: 18,
      scoutingGrade: 95,
      projection: "Top-5 Pick",
      bestFit: ["SAS", "OKC", "MIN"],
      strengths: [
        "Exceptional length and athleticism for a wing/big hybrid",
        "Advanced European ball-handling for his size",
        "Versatile defender who can guard 2-through-5",
        "Natural feel for cutting and off-ball movement"
      ],
      weaknesses: [
        "Three-point shot still streaky under pressure",
        "NBA physical transition may take time",
        "Post-up game against elite college/pro bigs still raw"
      ],
      comparison: "Franz Wagner with Victor Wembanyama's defensive upside",
      weeklyNote: "Essengue slips one spot after Peterson's dominant scrimmage, but remains a consensus top-three talent. He posted 18 points and 9 rebounds in a Bundesliga pre-season game and his EuroLeague readiness is drawing comparisons to Wembanyama at the same stage.",
      trend: "falling",
      stats: { ppg: 14.2, rpg: 7.1, apg: 2.3, fgPct: 51.4, threePct: 34.1 }
    },
    {
      rank: 4,
      prevRank: 4,
      name: "Jasper Johnson",
      school: "Duke",
      position: "PG",
      height: "6'3\"",
      age: 18,
      scoutingGrade: 94,
      projection: "Top-6 Pick",
      bestFit: ["PHX", "LAC", "TOR"],
      strengths: [
        "Elite floor general with advanced read-and-react ability",
        "High-end on-ball defender for the position",
        "Excellent in pick-and-roll as a ball-handler",
        "Mid-range game is already pro-level"
      ],
      weaknesses: [
        "Three-point volume and consistency need work",
        "Gets into foul trouble defending bigger guards",
        "Finishing through contact at the rim in transition"
      ],
      comparison: "Tyrese Haliburton with Marcus Smart's defensive intensity",
      weeklyNote: "Johnson is quietly the most polished point guard in the class. Duke's coaching staff confirmed he'll run the primary offense from Day 1, a role that should dramatically boost his assist and decision-making showcase.",
      trend: "stable",
      stats: { ppg: 17.6, rpg: 3.9, apg: 7.8, fgPct: 44.3, threePct: 33.5 }
    },
    {
      rank: 5,
      prevRank: 5,
      name: "Ace Bailey",
      school: "Rutgers",
      position: "SF/PF",
      height: "6'9\"",
      age: 18,
      scoutingGrade: 93,
      projection: "Top-8 Pick",
      bestFit: ["GSW", "LAL", "CLE"],
      strengths: [
        "Rare combination of length, athleticism, and shooting",
        "Smooth off-the-dribble scorer in the midrange",
        "High ceiling as a small-ball 4 in modern lineups",
        "Projects as elite transition scorer"
      ],
      weaknesses: [
        "Shot creation against set defenses needs refinement",
        "Turnover-prone when pressured in half-court",
        "Defensive motor occasionally lapses"
      ],
      comparison: "Kevin Durant lite — elite scorer with unusual length for the position",
      weeklyNote: "Bailey had a strong Big Ten media day showing, drawing rave reviews for his improved ball-handling. Rutgers' system will give him high usage and scouts are eager to see how he performs against Big Ten competition.",
      trend: "stable",
      stats: { ppg: 18.9, rpg: 7.2, apg: 2.1, fgPct: 45.7, threePct: 35.4 }
    },
    {
      rank: 6,
      prevRank: 7,
      name: "Dylan Harper",
      school: "Rutgers",
      position: "PG/SG",
      height: "6'6\"",
      age: 18,
      scoutingGrade: 92,
      projection: "Top-10 Pick",
      bestFit: ["PHX", "LAC", "POR"],
      strengths: [
        "Ideal size for a modern combo guard",
        "Excellent pick-and-roll operator",
        "Underrated passer with an advanced feel for spacing",
        "Plus defender with good instincts and length"
      ],
      weaknesses: [
        "Three-point shot volume needs to increase",
        "Plays better off movement than isolation",
        "Physical conditioning still being optimized"
      ],
      comparison: "Jalen Green with Brandon Ingram's playmaking evolution",
      weeklyNote: "Harper climbs one spot this week as buzz builds around the Rutgers backcourt. Playing alongside Bailey should open significant lanes for Harper's pull-up game, and scouts are circling Rutgers' opener on October 15 as a must-watch.",
      trend: "rising",
      stats: { ppg: 19.3, rpg: 4.1, apg: 5.6, fgPct: 46.1, threePct: 34.8 }
    },
    {
      rank: 7,
      prevRank: 6,
      name: "Maxime Raynaud",
      school: "Stanford",
      position: "C/PF",
      height: "7'1\"",
      age: 21,
      scoutingGrade: 91,
      projection: "Top-10 Pick",
      bestFit: ["DET", "CHA", "MIA"],
      strengths: [
        "Elite rebounding instincts on both ends",
        "Surprisingly mobile for his size — runs the floor well",
        "Developing face-up game with shooting range",
        "High-level post footwork against college bigs"
      ],
      weaknesses: [
        "Defense in space against quick bigs is a concern",
        "NBA teams may need patience given age and transition",
        "Foul rate is higher than ideal"
      ],
      comparison: "Nikola Vucevic with Brook Lopez's floor-spacing upside",
      weeklyNote: "Raynaud returns for his senior season at Stanford and is already being called the most NBA-ready big in the class. He's added notable muscle mass over the offseason and his floater over shorter defenders is a genuine weapon.",
      trend: "falling",
      stats: { ppg: 17.8, rpg: 11.4, apg: 1.9, fgPct: 54.6, threePct: 36.1 }
    },
    {
      rank: 8,
      prevRank: 8,
      name: "Kon Knueppel",
      school: "Duke",
      position: "SG/SF",
      height: "6'7\"",
      age: 18,
      scoutingGrade: 90,
      projection: "Top-12 Pick",
      bestFit: ["BOS", "SAS", "MIN"],
      strengths: [
        "Exceptional shooter off screens and spot-up situations",
        "High-IQ off-ball mover who understands spacing",
        "Advanced feel for backdoor cuts and passing lanes",
        "Competitive defender with good positioning"
      ],
      weaknesses: [
        "Not a primary shot creator — needs to improve off the dribble",
        "Athleticism is solid but not elite for his position",
        "Needs to prove he can create for himself against top defenders"
      ],
      comparison: "Duncan Robinson with Sam Hauser's scoring versatility",
      weeklyNote: "Knueppel is being tabbed as Duke's best 3-and-D option alongside Jasper Johnson. His off-screen shooting mechanics are drawing comparisons to Klay Thompson in terms of footwork and release consistency.",
      trend: "stable",
      stats: { ppg: 14.6, rpg: 4.2, apg: 2.4, fgPct: 47.3, threePct: 41.2 }
    },
    {
      rank: 9,
      prevRank: 10,
      name: "VJ Edgecombe",
      school: "Baylor",
      position: "SG/SF",
      height: "6'5\"",
      age: 18,
      scoutingGrade: 89,
      projection: "Top-14 Pick",
      bestFit: ["OKC", "ATL", "TOR"],
      strengths: [
        "Elite athleticism and explosiveness — top of the class",
        "High-energy defender with disruptive hands",
        "Excellent in transition — relentless in open court",
        "Developing three-point shot is already functional"
      ],
      weaknesses: [
        "Half-court shot creation still raw",
        "Turnover-prone in half-court settings",
        "Decision-making can suffer when the game slows down"
      ],
      comparison: "Josh Giddey athleticism meets Patrick Beverley's defensive IQ",
      weeklyNote: "Edgecombe rises a spot following a remarkable pre-season workout that had multiple scouts raving about his first-step quickness. Baylor's up-tempo system is a perfect vehicle for his transition scoring and defensive burst.",
      trend: "rising",
      stats: { ppg: 16.1, rpg: 4.8, apg: 3.3, fgPct: 44.9, threePct: 35.7 }
    },
    {
      rank: 10,
      prevRank: 9,
      name: "Johni Broome",
      school: "Auburn",
      position: "C/PF",
      height: "6'10\"",
      age: 22,
      scoutingGrade: 88,
      projection: "Top-15 Pick",
      bestFit: ["CLE", "DEN", "PHI"],
      strengths: [
        "Dominant interior presence on both ends",
        "Elite rebounder with instinctive positioning",
        "Improving face-up game with short-to-mid range shooting",
        "High-level pick-and-roll defender"
      ],
      weaknesses: [
        "Age concern — already 22, limited upside ceiling",
        "Three-point shot not yet reliable enough for modern NBA",
        "Can be outrun by quicker bigs in space"
      ],
      comparison: "Bam Adebayo with Mitchell Robinson's rim protection",
      weeklyNote: "Broome drops one spot but remains a coveted prospect. His two-way impact at Auburn is generating serious buzz as a plug-and-play NBA big — teams needing immediate interior help are locked in on him.",
      trend: "falling",
      stats: { ppg: 18.3, rpg: 10.7, apg: 2.1, fgPct: 56.2, threePct: 28.4 }
    },
    {
      rank: 11,
      prevRank: 11,
      name: "Kasparas Jakucionis",
      school: "Illinois",
      position: "PG",
      height: "6'4\"",
      age: 19,
      scoutingGrade: 87,
      projection: "Top-16 Pick",
      bestFit: ["TOR", "ORL", "GSW"],
      strengths: [
        "Advanced European playmaking and court vision",
        "Great feel for creating offense in pick-and-roll",
        "Functional three-point shooter with quick release",
        "Mature decision-maker who rarely forces the issue"
      ],
      weaknesses: [
        "Needs to improve finishing through contact at the rim",
        "Defensive instensity needs to match skill level",
        "Athleticism is just average for the NBA level"
      ],
      comparison: "Nikola Jokic-lite playmaking in a point guard frame — early Patty Mills comparisons",
      weeklyNote: "Jakucionis had an outstanding summer in Lithuanian league play before arriving in Champaign. Illinois's staff is calling him the most prepared freshman they've seen in years from a conceptual basketball standpoint.",
      trend: "stable",
      stats: { ppg: 15.4, rpg: 3.7, apg: 6.2, fgPct: 45.1, threePct: 37.8 }
    },
    {
      rank: 12,
      prevRank: 13,
      name: "Liam McNeeley",
      school: "UConn",
      position: "SF",
      height: "6'7\"",
      age: 18,
      scoutingGrade: 86,
      projection: "Top-18 Pick",
      bestFit: ["MIA", "NYK", "SAS"],
      strengths: [
        "High-end shot-making off screens and handoffs",
        "Terrific positional size and wingspan for a wing",
        "Physical, intelligent off-ball defender",
        "Competitive motor that plays above his athleticism"
      ],
      weaknesses: [
        "Primary ball-handling and creation still developing",
        "Needs more shake off the dribble to beat top defenders",
        "Role may be ceiling-limited if shot doesn't translate"
      ],
      comparison: "Joe Harris with Bruce Brown's defensive versatility",
      weeklyNote: "McNeeley rises one spot this week as UConn's coaching staff announces he'll operate in a major offensive role. The Huskies' system — which produced multiple NBA wings — is considered ideal for his development.",
      trend: "rising",
      stats: { ppg: 14.9, rpg: 5.3, apg: 1.8, fgPct: 46.5, threePct: 38.9 }
    },
    {
      rank: 13,
      prevRank: 12,
      name: "Walter Clayton Jr.",
      school: "Florida",
      position: "PG/SG",
      height: "6'3\"",
      age: 22,
      scoutingGrade: 85,
      projection: "Top-20 Pick",
      bestFit: ["PHI", "CHA", "POR"],
      strengths: [
        "Elite shot-maker who can score from every zone",
        "Fearless clutch performer with late-game composure",
        "Quick trigger on three-ball — minimal wind-up",
        "Has elevated his playmaking each season"
      ],
      weaknesses: [
        "Age (22) limits upside projection for NBA teams",
        "Undersized for NBA two-guard slot",
        "Defensive engagement waxes and wanes"
      ],
      comparison: "Devonte' Graham with CJ McCollum's scoring upside",
      weeklyNote: "Clayton drops a spot amid age concerns creeping into draft conversations, but remains one of the most accomplished scorers in the class. His Florida squad looks like a Final Four contender and a deep run will boost his stock significantly.",
      trend: "falling",
      stats: { ppg: 20.7, rpg: 3.2, apg: 4.8, fgPct: 47.9, threePct: 40.3 }
    },
    {
      rank: 14,
      prevRank: 14,
      name: "Egor Demin",
      school: "BYU",
      position: "PG/SG",
      height: "6'9\"",
      age: 18,
      scoutingGrade: 84,
      projection: "Top-20 Pick",
      bestFit: ["MIN", "ORL", "ATL"],
      strengths: [
        "Rare playmaking vision from a 6'9\" guard",
        "Advanced passer who sees plays before they develop",
        "Excellent defensive potential given length and IQ",
        "Improving three-point shot with solid mechanics"
      ],
      weaknesses: [
        "Needs to play with more aggression and decisiveness",
        "Finishing at the rim remains inconsistent",
        "Can be too passive in isolation situations"
      ],
      comparison: "Magic Johnson's playmaking frame meets Cade Cunningham's positional versatility",
      weeklyNote: "Demin remains a high-intrigue prospect despite inconsistent early-season indicators. His September scrimmage tape showed flashes of his extraordinary passing ability, and BYU's coaching staff is working to unlock his scoring aggression.",
      trend: "stable",
      stats: { ppg: 13.6, rpg: 5.1, apg: 7.4, fgPct: 42.3, threePct: 33.6 }
    },
    {
      rank: 15,
      prevRank: 16,
      name: "Nique Clifford",
      school: "Colorado State",
      position: "SF/PF",
      height: "6'7\"",
      age: 23,
      scoutingGrade: 83,
      projection: "Top-22 Pick",
      bestFit: ["LAC", "BOS", "HOU"],
      strengths: [
        "Proven multi-year college producer with elite efficiency",
        "High-level athlete who excels in transition",
        "Versatile defender capable of guarding 2-through-4",
        "Underrated playmaking for his size"
      ],
      weaknesses: [
        "Age (23) creates legitimate ceiling questions",
        "Not a primary creator — needs ball-movers around him",
        "Three-point shot volume could be higher"
      ],
      comparison: "Dorian Finney-Smith with more athleticism — Royce O'Neale ceiling",
      weeklyNote: "Clifford rises one spot as teams in need of immediately-ready 3-and-D wings take notice. He was dominant in the Mountain West media day open run and his stock among mid-lottery teams has quietly climbed all offseason.",
      trend: "rising",
      stats: { ppg: 17.4, rpg: 8.3, apg: 3.1, fgPct: 52.1, threePct: 37.2 }
    },
    {
      rank: 16,
      prevRank: 15,
      name: "Labaron Philon",
      school: "Alabama",
      position: "PG",
      height: "6'2\"",
      age: 18,
      scoutingGrade: 82,
      projection: "Top-24 Pick",
      bestFit: ["GSW", "POR", "CHA"],
      strengths: [
        "Lightning quick first step — one of the fastest guards in the class",
        "Elite at creating advantages in ball-screen situations",
        "Highly competitive defender with active hands",
        "Advanced change-of-pace dribble to manipulate defenders"
      ],
      weaknesses: [
        "Size is a concern at the NBA level at 6'2\"",
        "Three-point shot needs refinement on the catch",
        "Tends to play too fast and lose control in traffic"
      ],
      comparison: "Early Trae Young athleticism with Tyus Jones's half-court mastery",
      weeklyNote: "Philon drops one spot amid uncertainty about how his size translates, but Alabama's track record of developing NBA guards keeps him firmly in lottery conversation. His defensive tenacity against bigger guards is already NBA-ready.",
      trend: "falling",
      stats: { ppg: 15.8, rpg: 2.9, apg: 6.1, fgPct: 44.7, threePct: 34.9 }
    },
    {
      rank: 17,
      prevRank: 17,
      name: "Tobi Lawal",
      school: "Georgia Tech",
      position: "PF/C",
      height: "6'10\"",
      age: 22,
      scoutingGrade: 81,
      projection: "Top-25 Pick",
      bestFit: ["MIA", "NYK", "OKC"],
      strengths: [
        "Explosive athleticism — elite rebounder in traffic",
        "Improving post game with nice touch around the rim",
        "Versatile enough to switch on pick-and-rolls",
        "High-motor guy who makes an impact on both ends"
      ],
      weaknesses: [
        "Perimeter shooting is still a work in progress",
        "Turnover-prone as a passer out of the post",
        "Half-court offensive role may be limited in NBA"
      ],
      comparison: "Bobby Portis with PJ Tucker's defensive versatility",
      weeklyNote: "Lawal is a consistent presence in the late-first-round conversation. Georgia Tech's coaching staff has installed a system that should get him more post touches, and his improved conditioning this offseason has scouts taking notice.",
      trend: "stable",
      stats: { ppg: 16.1, rpg: 9.2, apg: 1.4, fgPct: 53.7, threePct: 24.6 }
    },
    {
      rank: 18,
      prevRank: 19,
      name: "Hugo Gonzalez",
      school: "Real Madrid (Spain)",
      position: "SG/SF",
      height: "6'7\"",
      age: 19,
      scoutingGrade: 80,
      projection: "Top-25 Pick",
      bestFit: ["SAS", "DEN", "HOU"],
      strengths: [
        "Polished European skill set — excellent footwork and IQ",
        "NBA-ready three-point stroke with high consistency",
        "Savvy off-ball mover who understands spacing",
        "Can guard multiple positions due to length and anticipation"
      ],
      weaknesses: [
        "Athletic ceiling may not match elite competition",
        "Ball creation against elite defenders still unproven",
        "NBA transition period could take 1-2 seasons"
      ],
      comparison: "Quentin Grimes with Bogdan Bogdanovic's scoring feel",
      weeklyNote: "Gonzalez rises one spot after a standout ACB season opener in which he scored 22 points on 8-of-14 shooting, including 4-of-6 from three. Spanish federation scouts confirmed his three-level scoring is ahead of schedule for his age.",
      trend: "rising",
      stats: { ppg: 12.4, rpg: 3.8, apg: 2.6, fgPct: 48.9, threePct: 40.7 }
    },
    {
      rank: 19,
      prevRank: 18,
      name: "Derik Queen",
      school: "Maryland",
      position: "C/PF",
      height: "6'10\"",
      age: 18,
      scoutingGrade: 79,
      projection: "Top-25 Pick",
      bestFit: ["POR", "CHA", "PHI"],
      strengths: [
        "Exceptional passing big — can function as a hub in pick-and-pop",
        "Advanced footwork in post situations",
        "Excellent hands and catch radius",
        "Natural feel for timing and positioning on defense"
      ],
      weaknesses: [
        "Shot-blocking numbers are surprisingly low for his size",
        "Perimeter shooting range still limited to 15-18 feet",
        "Needs to develop more physicality at the NBA level"
      ],
      comparison: "Julius Randle with Domantas Sabonis's passing vision",
      weeklyNote: "Queen drops one spot as Johni Broome's dominance keeps the big man competition fierce. However, Queen's passing IQ is genuinely special — Maryland's coaching staff is building plays specifically to showcase his vision in the high post.",
      trend: "falling",
      stats: { ppg: 14.2, rpg: 8.6, apg: 3.4, fgPct: 51.8, threePct: 27.3 }
    },
    {
      rank: 20,
      prevRank: 20,
      name: "Yaxel Lendeborg",
      school: "Michigan",
      position: "PF/C",
      height: "6'9\"",
      age: 20,
      scoutingGrade: 78,
      projection: "Late Lottery / Early Second Round",
      bestFit: ["ATL", "ORL", "MIN"],
      strengths: [
        "Rare length and wingspan for a stretch big",
        "Has demonstrated consistent 3-point shooting ability",
        "Versatile defender who can guard the perimeter",
        "High-level rebounder who crashes from distance"
      ],
      weaknesses: [
        "Offensive consistency from game to game is the biggest question",
        "Can be too jumpy as a shot blocker — bites on fakes",
        "Back-to-basket offense is virtually nonexistent"
      ],
      comparison: "Isaiah Jackson with Mo Bamba's floor-spacing potential",
      weeklyNote: "Lendeborg's Michigan debut is highly anticipated given his transfer from UAB. Scouts are optimistic he can shine in the Big Ten, where his defensive versatility will be tested at a high level for the first time.",
      trend: "stable",
      stats: { ppg: 13.8, rpg: 8.9, apg: 1.2, fgPct: 49.3, threePct: 35.6 }
    },
    {
      rank: 21,
      prevRank: 22,
      name: "Rasheer Fleming",
      school: "Saint Joseph's",
      position: "SF/PF",
      height: "6'8\"",
      age: 22,
      scoutingGrade: 77,
      projection: "Late First Round",
      bestFit: ["LAC", "BOS", "SAS"],
      strengths: [
        "Exceptional three-point shooting for a power forward",
        "Outstanding cut-and-move off-ball operator",
        "High-effort defensive player with good instincts",
        "Consistent motor and winning culture mentality"
      ],
      weaknesses: [
        "Mid-major level of competition raises questions",
        "Ball-handling and creation limited to catch-and-shoot",
        "Will need to prove durability at full NBA speed"
      ],
      comparison: "Saddiq Bey with Keita Bates-Diop's positional versatility",
      weeklyNote: "Fleming rises one spot as teams looking for plug-and-play 3-and-D wings circle him. His 41.8% three-point shooting over two seasons at St. Joe's is drawing legitimate lottery-level attention from spacing-starved rosters.",
      trend: "rising",
      stats: { ppg: 16.9, rpg: 6.7, apg: 1.6, fgPct: 50.2, threePct: 41.8 }
    },
    {
      rank: 22,
      prevRank: 21,
      name: "Thomas Sorber",
      school: "Georgetown",
      position: "C",
      height: "7'0\"",
      age: 19,
      scoutingGrade: 76,
      projection: "Late First Round",
      bestFit: ["CLE", "DET", "LAL"],
      strengths: [
        "Traditional center with excellent size and touch",
        "High-low passing and interior footwork are already advanced",
        "Consistent back-to-basket scorer",
        "Solid pick-and-roll defender who holds his ground"
      ],
      weaknesses: [
        "Limited range — shooting is mostly confined to the paint",
        "NBA athleticism may limit him defensively in space",
        "Georgetown schedule will limit elite-level tests"
      ],
      comparison: "Ivica Zubac with Clint Capela's motor and energy",
      weeklyNote: "Sorber drops one spot amid questions about his perimeter range, but Georgetown has committed to getting him regular pick-and-pop looks to develop his mid-range game. His post footwork is genuinely special for a 19-year-old.",
      trend: "falling",
      stats: { ppg: 14.7, rpg: 9.4, apg: 1.7, fgPct: 57.3, threePct: 18.2 }
    },
    {
      rank: 23,
      prevRank: 23,
      name: "Marcus Allen",
      school: "Memphis",
      position: "PG",
      height: "6'4\"",
      age: 18,
      scoutingGrade: 75,
      projection: "Late First Round",
      bestFit: ["POR", "CHA", "PHX"],
      strengths: [
        "Smooth shot creator with excellent pull-up mechanics",
        "Physically impressive frame for a point guard",
        "Advanced for his age in reading pick-and-roll coverages",
        "Good transition finisher with burst and body control"
      ],
      weaknesses: [
        "Turnover-to-assist ratio needs significant improvement",
        "Shooting mechanics can break down under pressure",
        "Defensive awareness inconsistent at this level"
      ],
      comparison: "Anfernee Simons with Scoot Henderson's physical tools",
      weeklyNote: "Allen is one of the most physically imposing freshmen in the class. Memphis's system under their coaching staff will give him significant autonomy, and a strong American Athletic Conference season could push him into the top 18.",
      trend: "stable",
      stats: { ppg: 17.2, rpg: 3.6, apg: 5.3, fgPct: 43.8, threePct: 33.1 }
    },
    {
      rank: 24,
      prevRank: 25,
      name: "Camron House",
      school: "Arizona",
      position: "SG",
      height: "6'5\"",
      age: 20,
      scoutingGrade: 74,
      projection: "Late First / Early Second Round",
      bestFit: ["HOU", "MIN", "ORL"],
      strengths: [
        "Elite athleticism with plus finishing at the rim",
        "Improving three-point stroke with good catch-and-shoot mechanics",
        "High-energy defender with quickness to guard 1s and 2s",
        "Good motor as a rebounder from the backcourt"
      ],
      weaknesses: [
        "Ball creation off the dribble from mid-range needs work",
        "Decision-making in half-court sets still developing",
        "Shot selection can be inconsistent"
      ],
      comparison: "Jordan Nwora with Darius Garland's guard instincts",
      weeklyNote: "House rises one spot as Arizona's preseason scrimmages generated plenty of positive buzz. The Pac-12 successor conference schedule includes multiple top-25 matchups that should give him an excellent showcase.",
      trend: "rising",
      stats: { ppg: 14.3, rpg: 4.7, apg: 2.9, fgPct: 46.2, threePct: 36.4 }
    },
    {
      rank: 25,
      prevRank: 24,
      name: "Will Riley",
      school: "Illinois",
      position: "SF",
      height: "6'7\"",
      age: 18,
      scoutingGrade: 73,
      projection: "Late First / Early Second Round",
      bestFit: ["TOR", "ATL", "SAS"],
      strengths: [
        "Fluid ball-handler for his size with good finishing ability",
        "Excellent cutter and off-ball mover",
        "Projects as a high-level 3-and-D wing at next level",
        "Competitive nature and feel for team concepts"
      ],
      weaknesses: [
        "Outside shot is his biggest question mark",
        "Strength needs significant development",
        "Decision-making when creating for others needs work"
      ],
      comparison: "OG Anunoby in a fresher package — raw but with elite defensive tools",
      weeklyNote: "Riley drops one spot as comparisons to higher-ceiling prospects in his tier become more favorable. However, Illinois coaches are pushing him heavily on his shooting mechanics, and early returns from the gym look encouraging.",
      trend: "falling",
      stats: { ppg: 13.1, rpg: 5.4, apg: 2.2, fgPct: 44.6, threePct: 32.8 }
    },
    {
      rank: 26,
      prevRank: 26,
      name: "Adou Thiero",
      school: "Arkansas",
      position: "SF",
      height: "6'7\"",
      age: 20,
      scoutingGrade: 72,
      projection: "Second Round",
      bestFit: ["OKC", "DET", "HOU"],
      strengths: [
        "Electric athleticism — one of the best vertical leapers in the class",
        "High-effort defender who can be a tone-setter",
        "Solid transition scorer with rim-running ability",
        "Developing scoring package with improving shot quality"
      ],
      weaknesses: [
        "Three-point shooting is below average and a concern",
        "Half-court offensive skill set is still limited",
        "Decision-making in live-dribble situations inconsistent"
      ],
      comparison: "Jalen McDaniels with Herbert Jones's defensive motor",
      weeklyNote: "Thiero's athleticism is never in question, but the half-court offensive concerns keep him just outside the first-round bubble. Arkansas's coaches are reportedly working intensively on his catch-and-shoot mechanics this fall.",
      trend: "stable",
      stats: { ppg: 12.7, rpg: 5.9, apg: 1.4, fgPct: 48.1, threePct: 28.9 }
    },
    {
      rank: 27,
      prevRank: 28,
      name: "Drake Powell",
      school: "North Carolina",
      position: "SF",
      height: "6'7\"",
      age: 18,
      scoutingGrade: 71,
      projection: "Second Round",
      bestFit: ["GSW", "MIA", "BOS"],
      strengths: [
        "Excellent instincts as an off-ball defender",
        "Fluid athleticism and coordination for his size",
        "NBA-ready catch-and-shoot three-point mechanics",
        "Willing passer who rarely forces bad shots"
      ],
      weaknesses: [
        "Primary ball-handling needs significant development",
        "Can disappear offensively in structured half-court sets",
        "Needs to show more assertiveness as a scorer"
      ],
      comparison: "Caleb Martin with Al-Farouq Aminu's defensive upside",
      weeklyNote: "Powell rises one spot as UNC's new offensive system should give him more spot-up opportunities. His defensive film has made the rounds among front offices as particularly impressive for a freshman wing.",
      trend: "rising",
      stats: { ppg: 11.8, rpg: 4.9, apg: 1.9, fgPct: 45.8, threePct: 37.6 }
    },
    {
      rank: 28,
      prevRank: 27,
      name: "Brendan Hausen",
      school: "Gonzaga",
      position: "PF",
      height: "6'9\"",
      age: 21,
      scoutingGrade: 70,
      projection: "Second Round",
      bestFit: ["DEN", "LAL", "SAS"],
      strengths: [
        "Skilled face-up scorer with good touch in the midrange",
        "Excellent passing instincts from the elbow",
        "High IQ player who understands team concepts",
        "Solid positional rebounder with good timing"
      ],
      weaknesses: [
        "Athleticism at the NBA level is a legitimate concern",
        "Gonzaga schedule doesn't always reveal NBA-level weaknesses",
        "Needs to improve on-ball defensive foot speed"
      ],
      comparison: "Kelly Olynyk with Ersan Ilyasova's shooting versatility",
      weeklyNote: "Hausen drops one spot as more athletic 4s in the class are drawing stronger buzz. His Gonzaga system will likely produce gaudy numbers, but scouts will focus heavily on his performance in the WCC marquee matchups.",
      trend: "falling",
      stats: { ppg: 15.3, rpg: 7.1, apg: 2.8, fgPct: 51.6, threePct: 37.9 }
    },
    {
      rank: 29,
      prevRank: 29,
      name: "Colby Rogers",
      school: "Tennessee",
      position: "SG/SF",
      height: "6'5\"",
      age: 21,
      scoutingGrade: 69,
      projection: "Second Round",
      bestFit: ["MIA", "BOS", "NYK"],
      strengths: [
        "Proven winner in the SEC with multiple deep tournament runs",
        "Excellent defensive IQ and positional awareness",
        "Reliable three-point shooter in catch-and-shoot situations",
        "High character and winning culture mentality"
      ],
      weaknesses: [
        "Creation off the dribble is below average",
        "Lacks elite athleticism for his size",
        "Offensive role may be strictly 3-and-D at the NBA level"
      ],
      comparison: "Luke Kennard with Garrett Temple's defensive consistency",
      weeklyNote: "Rogers is a safe pick for teams that want a proven winner who will contribute immediately in a role. Tennessee's nationally-televised schedule gives him plenty of showcasing opportunities, starting with a Week 1 matchup vs. Kansas.",
      trend: "stable",
      stats: { ppg: 13.4, rpg: 4.1, apg: 2.3, fgPct: 46.7, threePct: 39.1 }
    },
    {
      rank: 30,
      prevRank: 30,
      name: "Micah Robinson",
      school: "Saint Mary's",
      position: "PG",
      height: "6'1\"",
      age: 22,
      scoutingGrade: 68,
      projection: "Second Round / Undrafted",
      bestFit: ["LAC", "PHI", "CLE"],
      strengths: [
        "Elite three-point shooter with quick catch-and-release",
        "High basketball IQ with excellent late-clock awareness",
        "Connector passer who makes everyone around him better",
        "Competitive on-ball defender despite size"
      ],
      weaknesses: [
        "Size at 6'1\" is a hard limitation at the NBA level",
        "Mid-major competition creates significant projection uncertainty",
        "Athleticism and burst are below NBA average",
        "Limited NBA upside due to positional constraints"
      ],
      comparison: "Payton Pritchard with Nate Archibald's crafty scoring feel",
      weeklyNote: "Robinson holds the 30 spot as a late-riser from the mid-major ranks. His elite shooting and IQ keep him on the board, but NBA teams will need exceptional performance in Saint Mary's WCC schedule to feel confident about a guaranteed draft slot.",
      trend: "stable",
      stats: { ppg: 18.6, rpg: 2.8, apg: 5.7, fgPct: 48.4, threePct: 42.1 }
    }
  ],
  risers: [
    {
      name: "Tre Johnson",
      change: 2,
      reason: "Leaked scrimmage footage of his unguardable pull-up jumper sent shockwaves through draft circles; Texas coaches confirm he'll have maximum offensive freedom this season."
    },
    {
      name: "VJ Edgecombe",
      change: 1,
      reason: "Pre-season workout at Baylor had multiple scouts raving about his first-step quickness and perimeter defense; Baylor's up-tempo system is a perfect showcase vehicle."
    },
    {
      name: "Liam McNeeley",
      change: 1,
      reason: "UConn coaching staff confirmed a major offensive role; the proven pipeline of NBA wings from the Husky program gives him added credibility heading into the season."
    }
  ],
  fallers: [
    {
      name: "Noa Essengue",
      change: -1,
      reason: "Drops one spot after Darryn Peterson's dominant scrimmage shifted momentum; still a consensus top-three talent but Peterson's floor-raising performance took the spotlight."
    },
    {
      name: "Johni Broome",
      change: -1,
      reason: "Age concerns (22) crept back into draft conversations as younger centers gained ground; remains a coveted two-way big but ceiling questions are tempering early enthusiasm."
    },
    {
      name: "Walter Clayton Jr.",
      change: -1,
      reason: "At 22, teams are beginning to factor in limited upside projections more heavily; a Final Four run with Florida could reverse the slide quickly."
    }
  ],
  tankWatch: [
    {
      team: "GSW",
      record: "41-41",
      lotteryOdds: "14.0%",
      primaryNeed: "Elite wing scorer / creator",
      secondaryNeed: "Shooting guard depth",
      bestProspectFit: "Tre Johnson",
      note: "Golden State sits at .500 and faces a coin-flip playoff chase. A late collapse could land them in lottery territory where Tre Johnson's Steph Curry-adjacent scoring instincts would be a dream fit alongside their playmaking infrastructure."
    },
    {
      team: "LAC",
      record: "42-40",
      lotteryOdds: "13.0%",
      primaryNeed: "Point guard of the future",
      secondaryNeed: "Athletic wing defender",
      bestProspectFit: "Jasper Johnson",
      note: "The Clippers are aging at the guard position and a late-season stumble puts them in lottery range. Jasper Johnson's two-way guard skill set is a natural fit for their culture of defensive identity."
    },
    {
      team: "POR",
      record: "42-40",
      lotteryOdds: "13.0%",
      primaryNeed: "Ball-dominant guard / playmaker",
      secondaryNeed: "Stretch big",
      bestProspectFit: "Dylan Harper",
      note: "Portland is in active rebuild mode and a pick in the 10-16 range is realistic. Dylan Harper's combo-guard versatility and playmaking upside at 6'6\" is exactly what Trail Blazers fans should be hoping for."
    },
    {
      team: "PHX",
      record: "45-37",
      lotteryOdds: "8.5%",
      primaryNeed: "Point guard",
      secondaryNeed: "3-and-D wing",
      bestProspectFit: "Jasper Johnson",
      note: "Phoenix is in freefall with a 6-game losing streak and if they slide out of the play-in they could land a high pick. Jasper Johnson's leadership and playmaking would give them a long-term answer at PG."
    },
    {
      team: "DEN",
      record: "54-28",
      lotteryOdds: "2.0%",
      primaryNeed: "Athletic wing",
      secondaryNeed: "Rim-running big",
      bestProspectFit: "VJ Edgecombe",
      note: "Denver is unlikely to land a lottery pick at this record, but they're spiraling with a 5-game losing streak. Their wing depth is thin and Edgecombe's athleticism and energy would complement Jokic perfectly — if they somehow slide."
    },
    {
      team: "LAL",
      record: "53-29",
      lotteryOdds: "2.5%",
      primaryNeed: "Long-term wing scorer",
      secondaryNeed: "Athletic big",
      bestProspectFit: "Ace Bailey",
      note: "Los Angeles is in a 5-game skid and their draft positioning will depend on whether they hold a top-10 protected pick. Ace Bailey's length and scoring ability would be a franchise-altering addition for a team in transition."
    },
    {
      team: "GSW",
      record: "41-41",
      lotteryOdds: "14.0%",
      primaryNeed: "Star-level creator",
      secondaryNeed: "Defense-first wing",
      bestProspectFit: "Darryn Peterson",
      note: "If Golden State's season continues to wobble, a top-five pick becomes possible. Peterson's off-the-dribble scoring and playmaking would give Curry an ideal co-star for a dynasty's final chapter."
    },
    {
      team: "PHX",
      record: "45-37",
      lotteryOdds: "8.5%",
      primaryNeed: "Two-way wing",
      secondaryNeed: "Interior anchor",
      bestProspectFit: "Noa Essengue",
      note: "Phoenix's front office is reportedly exploring every avenue to recoup assets. Essengue's European skill and two-way versatility would give them a modern-era building block regardless of the direction the roster takes."
    }
  ],
  weeklyScoutReport: "The 2026 NBA Draft class is taking shape with one of the deeper top-10 groups in recent memory, headlined by the Darryn Peterson–Tre Johnson–Noa Essengue triumvirate that has scouts debating legitimate No. 1 pick arguments for all three. The Rutgers tandem of Ace Bailey and Dylan Harper is the most intriguing co-feature storyline in college basketball this year, with their shared usage sure to generate fascinating data points for analytics-driven front offices. Internationally, Essengue's Bundesliga debut and Hugo Gonzalez's ACB opening performance both reaffirm that this is a globally deep class, while mid-major sleepers like Nique Clifford and Rasheer Fleming continue to attract legitimate first-round buzz from teams looking for ready-to-contribute 3-and-D wings. Tank Watch heats up as Phoenix, Golden State, and Portland all teetered at the .500 line heading into the final weeks, meaning the lottery picture is far from settled.",
};