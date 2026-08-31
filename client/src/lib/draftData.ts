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
  generatedDate: "August 31, 2026",
  weekLabel: "Week of August 31–6, 2026",
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
        "Elite two-way versatility",
        "Advanced playmaking for his position",
        "Explosive first step and finishing at the rim",
        "High-IQ defender with quick hands"
      ],
      weaknesses: [
        "Three-point consistency under pressure",
        "Needs to add functional strength",
        "Occasional over-dribbling in half-court"
      ],
      comparison: "Paul George",
      weeklyNote: "Peterson's pre-draft workout circuit concluded this week with a standout showing in Los Angeles. Multiple lottery teams confirmed he remains their consensus No. 1. His lateral quickness on defense drew particular raves from scouts who attended the closed workout.",
      trend: "stable",
      stats: { ppg: 19.4, rpg: 5.8, apg: 4.2, fgPct: 0.487, threePct: 0.371 }
    },
    {
      rank: 2,
      prevRank: 3,
      name: "Noa Essengue",
      school: "Ratiopharm Ulm (Germany)",
      position: "PF/SF",
      height: "6'9\"",
      age: 18,
      scoutingGrade: 96,
      projection: "Top-3 Pick",
      bestFit: ["SAS", "DET", "MIN"],
      strengths: [
        "Extraordinary length and fluidity for his size",
        "Already-refined shot creation off the dribble",
        "Instinctive feel for pick-and-roll defense",
        "Elite motor and competitiveness"
      ],
      weaknesses: [
        "Three-point volume still developing",
        "NBA physicality adjustment ahead",
        "Occasional decision-making lapses in transition"
      ],
      comparison: "Lauri Markkanen with higher defensive ceiling",
      weeklyNote: "Essengue jumped Peterson-camp observers at the NBA Global Combine this week, recording a 7'3\" wingspan and posting the top lane agility time among big men. His versatility package has teams picking in the top five seriously reconsidering their boards.",
      trend: "rising",
      stats: { ppg: 14.2, rpg: 7.1, apg: 1.8, fgPct: 0.512, threePct: 0.338 }
    },
    {
      rank: 3,
      prevRank: 2,
      name: "Tre Johnson",
      school: "Texas",
      position: "SG",
      height: "6'5\"",
      age: 18,
      scoutingGrade: 95,
      projection: "Top-3 Pick",
      bestFit: ["GSW", "LAL", "PHX"],
      strengths: [
        "Generational shot-making ability off the dribble",
        "Instant offense from any spot on the floor",
        "High free-throw rate and elite touch",
        "Competitive off-ball defender"
      ],
      weaknesses: [
        "Below-average playmaking for a guard",
        "Needs better shot selection discipline",
        "Lateral quickness concerns on switches"
      ],
      comparison: "Devin Booker",
      weeklyNote: "Johnson slipped one spot after a lukewarm workout in New York where his playmaking limitations were exposed in five-on-five drills. Scoring ability is undeniable, but multiple Eastern Conference teams noted concerns about running an offense through him. Still a near-certain top-three pick.",
      trend: "falling",
      stats: { ppg: 22.3, rpg: 3.4, apg: 2.7, fgPct: 0.461, threePct: 0.382 }
    },
    {
      rank: 4,
      prevRank: 4,
      name: "Caleb Wilson",
      school: "UCLA",
      position: "C/PF",
      height: "7'0\"",
      age: 19,
      scoutingGrade: 93,
      projection: "Top-5 Pick",
      bestFit: ["MIA", "TOR", "CLE"],
      strengths: [
        "Elite rim protection and verticality",
        "Reliable mid-range finisher",
        "Smart passer out of the post and pick-and-roll",
        "High basketball IQ and coachability"
      ],
      weaknesses: [
        "Three-point range limited",
        "Lateral mobility vs. stretch bigs",
        "Foul-drawing instincts still raw"
      ],
      comparison: "Brook Lopez",
      weeklyNote: "Wilson had a quiet but steady week on the workout circuit, solidifying his status as the class's premier center. His combination of defensive anchor ability and offensive polish at the five makes him an ideal modern-era big. Teams drafting 4-7 have him circled.",
      trend: "stable",
      stats: { ppg: 16.1, rpg: 9.3, apg: 2.4, fgPct: 0.581, threePct: 0.241 }
    },
    {
      rank: 5,
      prevRank: 6,
      name: "Kasparas Jakucionis",
      school: "Illinois",
      position: "PG",
      height: "6'4\"",
      age: 19,
      scoutingGrade: 91,
      projection: "Top-7 Pick",
      bestFit: ["TOR", "PHI", "HOU"],
      strengths: [
        "Elite floor vision and playmaking creativity",
        "High-level shot creation for self and others",
        "Natural leader and pick-and-roll maestro",
        "Crafty finisher through contact"
      ],
      weaknesses: [
        "Turnover-prone when trying to force plays",
        "Defensive engagement inconsistency",
        "Three-point accuracy needs refinement"
      ],
      comparison: "Young Ricky Rubio with more scoring upside",
      weeklyNote: "Jakucionis moved up one spot following a dazzling Chicago workout where he posted a 14-assist-to-2-turnover scrimmage line. His court vision and playmaking intelligence have scouts comparing his feel-for-the-game to early Rubio, with the benefit of a more developed scoring package.",
      trend: "rising",
      stats: { ppg: 15.6, rpg: 4.1, apg: 6.8, fgPct: 0.443, threePct: 0.356 }
    },
    {
      rank: 6,
      prevRank: 5,
      name: "Jeremiah Fears",
      school: "Oklahoma",
      position: "PG",
      height: "6'3\"",
      age: 18,
      scoutingGrade: 90,
      projection: "Top-8 Pick",
      bestFit: ["PHX", "MIA", "ATL"],
      strengths: [
        "Explosive burst and change-of-direction",
        "Fearless scorer in clutch moments",
        "Advanced three-point shooting mechanics",
        "High-press defensive potential"
      ],
      weaknesses: [
        "Playmaking consistency at NBA pace",
        "Slight frame needs strength development",
        "Decision-making in half-court sets"
      ],
      comparison: "De'Aaron Fox",
      weeklyNote: "Fears slipped a spot this week as Jakucionis's Chicago workout stole the narrative, but his profile is unchanged as a potential top-5 talent. His explosiveness in straight-line speed tests was the best of any guard at the Global Combine, clocking a 3.01-second lane agility time.",
      trend: "stable",
      stats: { ppg: 17.8, rpg: 3.2, apg: 5.1, fgPct: 0.451, threePct: 0.368 }
    },
    {
      rank: 7,
      prevRank: 7,
      name: "Khaman Maluach",
      school: "Duke",
      position: "C",
      height: "7'2\"",
      age: 18,
      scoutingGrade: 89,
      projection: "Top-10 Pick",
      bestFit: ["GSW", "ORL", "CHA"],
      strengths: [
        "Rare combination of size, athleticism, and fluidity",
        "Dominant shot-blocker with elite wingspan",
        "Fast developing post skill set",
        "Lob threat and alley-oop finisher"
      ],
      weaknesses: [
        "Offensive game beyond rim-running embryonic",
        "Foul trouble tendency",
        "Three-point shooting a work in progress"
      ],
      comparison: "Early-career Rudy Gobert with more athletic upside",
      weeklyNote: "Maluach posted a jaw-dropping 7'6\" wingspan at the Global Combine, the largest recorded at the event in a decade. His raw tools are franchise-altering but teams are split on his offensive upside. Defense-first organizations near the top of the lottery are the most aggressive suitors.",
      trend: "stable",
      stats: { ppg: 12.3, rpg: 8.7, apg: 0.9, fgPct: 0.624, threePct: 0.000 }
    },
    {
      rank: 8,
      prevRank: 9,
      name: "Liam McNeeley",
      school: "UConn",
      position: "SF",
      height: "6'7\"",
      age: 19,
      scoutingGrade: 87,
      projection: "Top-12 Pick",
      bestFit: ["DET", "BOS", "NYK"],
      strengths: [
        "Elite three-point shooting off the catch",
        "High-IQ movement and spacing",
        "Winning culture pedigree from UConn",
        "Reliable and composed under pressure"
      ],
      weaknesses: [
        "Athleticism limits blow-by creation",
        "Not a primary ball-handler",
        "Defensive footwork still developing"
      ],
      comparison: "Joe Harris with higher offensive ceiling",
      weeklyNote: "McNeeley moved up one spot after dropping in 7-of-10 from three during a Boston workout session. His shooting is legitimately elite — scouts clocked a quick and repeatable release on all six shooting stations. Projection as a plug-and-play three-and-D wing for a contender is firming up.",
      trend: "rising",
      stats: { ppg: 14.8, rpg: 4.9, apg: 2.1, fgPct: 0.467, threePct: 0.412 }
    },
    {
      rank: 9,
      prevRank: 8,
      name: "Adou Thiero",
      school: "Arkansas",
      position: "SF/PF",
      height: "6'7\"",
      age: 20,
      scoutingGrade: 86,
      projection: "Top-12 Pick",
      bestFit: ["OKC", "SAS", "MIN"],
      strengths: [
        "Elite athleticism and first-step explosion",
        "Instinctive transition scorer",
        "Long, disruptive defender with highlight blocks",
        "Competitive and high-motor every possession"
      ],
      weaknesses: [
        "Half-court offensive creation still limited",
        "Three-point shot mechanics inconsistent",
        "Needs more refined post footwork"
      ],
      comparison: "OG Anunoby",
      weeklyNote: "Thiero slipped one spot this week, primarily due to McNeeley's shooting display stealing headlines. His athleticism profile remains top-five in this class — scouts privately rave about his transition game and defensive ceiling. The consistency of his jumper is the only thing keeping him outside the top eight.",
      trend: "stable",
      stats: { ppg: 16.2, rpg: 6.4, apg: 1.7, fgPct: 0.499, threePct: 0.321 }
    },
    {
      rank: 10,
      prevRank: 10,
      name: "VJ Edgecombe",
      school: "Baylor",
      position: "SG/SF",
      height: "6'5\"",
      age: 19,
      scoutingGrade: 85,
      projection: "Top-15 Pick",
      bestFit: ["HOU", "PHI", "ORL"],
      strengths: [
        "Blazing speed in the open floor",
        "Elite finisher at the rim off the bounce",
        "Active and instinctive on-ball defender",
        "High-level athlete who plays above his frame"
      ],
      weaknesses: [
        "Three-point shooting still streaky",
        "Shot creation in the mid-range needs work",
        "Turnover-prone as a secondary playmaker"
      ],
      comparison: "Darius Garland athleticism, Jordan Clarkson role",
      weeklyNote: "Edgecombe had a steady week with no major movement. His workout in Houston drew positive reviews from Rockets scouts who noted his transition burst is unmatched in this class outside of Fears. The persistent question around his pull-up jumper keeps him anchored in the 10-15 range for now.",
      trend: "stable",
      stats: { ppg: 15.3, rpg: 4.2, apg: 2.9, fgPct: 0.476, threePct: 0.341 }
    },
    {
      rank: 11,
      prevRank: 11,
      name: "Kon Knueppel",
      school: "Duke",
      position: "SG/SF",
      height: "6'7\"",
      age: 19,
      scoutingGrade: 84,
      projection: "Top-15 Pick",
      bestFit: ["CLE", "MIA", "TOR"],
      strengths: [
        "Polished offensive skill set for his age",
        "Excellent shot-maker off screens",
        "Smart passer and situational awareness",
        "Strong frame ready for NBA physicality"
      ],
      weaknesses: [
        "Athleticism a step below elite prospects",
        "Defensive engagement inconsistent",
        "Ceiling may be limited as a non-creator"
      ],
      comparison: "Khris Middleton",
      weeklyNote: "Knueppel remains steady at 11 with a clean workout week featuring no red flags. Rival scouts noted his offensive polish is arguably the most NBA-ready in the class, comparing his footwork in the mid-range to a young Middleton. Defensive commitment in competitive drills still gets mixed reviews.",
      trend: "stable",
      stats: { ppg: 14.1, rpg: 4.6, apg: 2.6, fgPct: 0.471, threePct: 0.388 }
    },
    {
      rank: 12,
      prevRank: 13,
      name: "Labaron Philon",
      school: "Alabama",
      position: "PG",
      height: "6'2\"",
      age: 19,
      scoutingGrade: 83,
      projection: "Top-18 Pick",
      bestFit: ["ATL", "CHA", "POR"],
      strengths: [
        "Crafty downhill scorer with elite handle",
        "Advanced floater game in the paint",
        "High motor on both ends of the floor",
        "Pick-and-roll savvy well beyond his years"
      ],
      weaknesses: [
        "Three-point shot needs more consistency",
        "Size concerns as an NBA point guard",
        "Perimeter defense in space"
      ],
      comparison: "Pre-injury Isaiah Thomas with better defense",
      weeklyNote: "Philon rose one spot after an impressive showing at the Atlanta regional workout. His creativity in pick-and-roll situations had Hawks brass talking — he threw three pocket passes in scrimmages that drew audible reactions from the evaluation staff. Shooting volume is the one remaining question mark.",
      trend: "rising",
      stats: { ppg: 16.9, rpg: 3.1, apg: 5.7, fgPct: 0.458, threePct: 0.347 }
    },
    {
      rank: 13,
      prevRank: 12,
      name: "Tobi Lawal",
      school: "Georgia Tech",
      position: "PF/C",
      height: "6'9\"",
      age: 21,
      scoutingGrade: 82,
      projection: "Top-18 Pick",
      bestFit: ["LAL", "MIN", "DEN"],
      strengths: [
        "Elite athleticism for a power forward",
        "Strong lob and pick-and-roll finisher",
        "Excellent rim protector with timing",
        "Developing face-up game expanding range"
      ],
      weaknesses: [
        "Offensive creation on the perimeter limited",
        "Older prospect relative to class",
        "Free-throw shooting below average"
      ],
      comparison: "Onyeka Okongwu",
      weeklyNote: "Lawal slipped one spot as Philon moved past him, but his evaluation week was actually positive. His vertical leap (40.5 inches) led all big men at the Global Combine. The age concern (21) is real for risk-averse organizations, but his athletic upside and defensive reliability are legitimate lottery-level traits.",
      trend: "stable",
      stats: { ppg: 13.7, rpg: 8.2, apg: 1.2, fgPct: 0.571, threePct: 0.186 }
    },
    {
      rank: 14,
      prevRank: 14,
      name: "Jalil Bethea",
      school: "Miami (FL)",
      position: "SG",
      height: "6'4\"",
      age: 19,
      scoutingGrade: 81,
      projection: "Lottery Fringe",
      bestFit: ["TOR", "PHI", "GSW"],
      strengths: [
        "Elite shot-maker with range to the logo",
        "Quick, high-release shooting motion",
        "Underrated playmaking for his position",
        "Strong competitor in late-game situations"
      ],
      weaknesses: [
        "Defensive effort inconsistency is concerning",
        "Ball-stopping tendencies in offense",
        "Frame needs significant strength development"
      ],
      comparison: "Evan Fournier with higher offensive upside",
      weeklyNote: "Bethea had a strong individual workout in Miami this week, knocking down 28-of-35 three-point attempts in volume shooting drills. His shooting mechanics are clean, and teams need to determine if he can replicate that in live action. Defensive engagement in competitive scrimmages remains the persistent concern.",
      trend: "stable",
      stats: { ppg: 17.2, rpg: 3.6, apg: 3.4, fgPct: 0.447, threePct: 0.374 }
    },
    {
      rank: 15,
      prevRank: 16,
      name: "Thomas Sorber",
      school: "Georgetown",
      position: "C/PF",
      height: "6'11\"",
      age: 20,
      scoutingGrade: 80,
      projection: "Mid-First Round",
      bestFit: ["CHA", "ORL", "ATL"],
      strengths: [
        "Skilled passing big with excellent vision",
        "Soft hands as a catch-and-finish target",
        "Strong post footwork and touch",
        "High defensive IQ and positioning"
      ],
      weaknesses: [
        "Limited upside as an outside shooter",
        "Athleticism below average for an NBA center",
        "Struggles to create off the bounce"
      ],
      comparison: "Robin Lopez with better passing",
      weeklyNote: "Sorber moved up one spot after a Georgetown workout showing highlighted his passing chops. He registered 8 assists and 0 turnovers in a 20-minute scrimmage, drawing comparisons to Draymond Green's passing instincts from a big-man perspective — albeit with a very different overall profile.",
      trend: "rising",
      stats: { ppg: 14.4, rpg: 8.9, apg: 3.1, fgPct: 0.562, threePct: 0.214 }
    },
    {
      rank: 16,
      prevRank: 15,
      name: "Hugo Gonzalez",
      school: "Real Madrid (Spain)",
      position: "PG/SG",
      height: "6'4\"",
      age: 19,
      scoutingGrade: 79,
      projection: "Mid-First Round",
      bestFit: ["SAS", "DEN", "BOS"],
      strengths: [
        "Advanced European playmaking and IQ",
        "Excellent three-point shooter in catch-and-shoot",
        "Smart defensive positioning and anticipation",
        "High-level poise beyond his years"
      ],
      weaknesses: [
        "NBA athleticism transition remains uncertain",
        "Tendency to play within himself in one-on-one",
        "Aggressive scoring instinct needs development"
      ],
      comparison: "Ricky Rubio meets Bogdan Bogdanovic",
      weeklyNote: "Gonzalez slipped one spot in a week light on major news from his camp. His agent confirmed he will come to the NBA immediately rather than stay in Madrid, which bumped his stock among teams 14-20. A San Antonio connection — the Spurs' Spanish front-office influence — has him as a legitimate Spurs watch despite their positioning.",
      trend: "falling",
      stats: { ppg: 11.8, rpg: 3.4, apg: 5.9, fgPct: 0.453, threePct: 0.391 }
    },
    {
      rank: 17,
      prevRank: 17,
      name: "Derik Queen",
      school: "Maryland",
      position: "C/PF",
      height: "6'10\"",
      age: 19,
      scoutingGrade: 78,
      projection: "Mid-First Round",
      bestFit: ["POR", "LAC", "IND"],
      strengths: [
        "Advanced scoring repertoire around the basket",
        "Excellent footwork and body control in the post",
        "Crafty shot-faker who draws fouls at a high rate",
        "Reliable passer out of the high post"
      ],
      weaknesses: [
        "Perimeter shooting is not a current weapon",
        "Athleticism profile concerns in transition",
        "Defensive versatility limited by lateral mobility"
      ],
      comparison: "Nikola Jokic minus the three-point shooting — for now",
      weeklyNote: "Queen held steady this week with a quiet workout circuit. His feel for the game stands out as the best among non-lottery big men. The lack of a consistent jumper is a legitimate concern at the next level, but his IQ, touch, and passing ability are drawing Sabonis-comps from at least three front offices.",
      trend: "stable",
      stats: { ppg: 15.3, rpg: 8.6, apg: 3.3, fgPct: 0.574, threePct: 0.198 }
    },
    {
      rank: 18,
      prevRank: 20,
      name: "Egor Demin",
      school: "BYU",
      position: "PG/SF",
      height: "6'9\"",
      age: 18,
      scoutingGrade: 77,
      projection: "Mid-First Round",
      bestFit: ["GSW", "OKC", "PHX"],
      strengths: [
        "Rare playmaking vision from 6'9\" point forward",
        "Creative passer in open and structured sets",
        "Excellent transition decision-making",
        "High basketball IQ and positional versatility"
      ],
      weaknesses: [
        "Jump shot needs significant refinement",
        "Thin frame gets pushed around by NBA athletes",
        "Scoring creation in isolation situations"
      ],
      comparison: "Ben Simmons with a better attitude and developing jumper",
      weeklyNote: "Demin jumped two spots this week after his playmaking wizardry at BYU's pro day turned heads. He threw five passes in a 15-minute span that would look at home in a Luka Doncic highlight reel. Teams are rethinking his ranking — the shooting is still a project, but the vision is genuinely elite.",
      trend: "rising",
      stats: { ppg: 10.2, rpg: 4.7, apg: 7.1, fgPct: 0.431, threePct: 0.289 }
    },
    {
      rank: 19,
      prevRank: 18,
      name: "Marcus Allen Jr.",
      school: "Kentucky",
      position: "SF/PF",
      height: "6'8\"",
      age: 19,
      scoutingGrade: 76,
      projection: "Mid-to-Late First Round",
      bestFit: ["CLE", "MIA", "ATL"],
      strengths: [
        "High-level defensive instincts and versatility",
        "Strong, NBA-ready body at 230 pounds",
        "Excellent spot-up three-point mechanics",
        "Winning culture mentality and leadership"
      ],
      weaknesses: [
        "Offensive creation off the bounce limited",
        "Not a primary playmaker",
        "Can disappear offensively in stretches"
      ],
      comparison: "Grant Williams with superior athleticism",
      weeklyNote: "Allen Jr. slipped one spot as Demin's rise reshuffled the 18-22 range. His evaluation this week was steady — he's exactly what scouts think he is: a rangy, switchable defensive wing with a reliable catch-and-shoot game. Multiple playoff teams trading into the mid-first see him as a target.",
      trend: "stable",
      stats: { ppg: 12.8, rpg: 5.9, apg: 1.8, fgPct: 0.469, threePct: 0.374 }
    },
    {
      rank: 20,
      prevRank: 19,
      name: "Carter Bryant",
      school: "Arizona",
      position: "SF",
      height: "6'8\"",
      age: 19,
      scoutingGrade: 75,
      projection: "Mid-to-Late First Round",
      bestFit: ["HOU", "TOR", "DEN"],
      strengths: [
        "Big, switchable frame ideal for modern wings",
        "Improving three-point shooting off movement",
        "Strong rebounding for a wing",
        "Excellent transition finisher"
      ],
      weaknesses: [
        "Offensive versatility still very limited",
        "Handle too inconsistent for creation",
        "Defensive attention lapses off the ball"
      ],
      comparison: "Jonathan Kuminga",
      weeklyNote: "Bryant slipped one following Demin's surge. Arizona's pro day showed his shooting is improving — he connected on 58% of catch-and-shoot threes under simulated game pressure. Athleticism and frame are lottery-quality; the question remains whether the skill catches up with the physical tools.",
      trend: "falling",
      stats: { ppg: 11.6, rpg: 5.3, apg: 1.4, fgPct: 0.481, threePct: 0.352 }
    },
    {
      rank: 21,
      prevRank: 22,
      name: "Nique Clifford",
      school: "Colorado State",
      position: "SF/SG",
      height: "6'6\"",
      age: 21,
      scoutingGrade: 74,
      projection: "Late First Round",
      bestFit: ["POR", "LAC", "CHA"],
      strengths: [
        "Elite rebounder for a wing — best in class",
        "Versatile defender who guards 1-through-4",
        "Consistent three-point shooter off the catch",
        "High-effort, maximum-motor player"
      ],
      weaknesses: [
        "Older prospect with limited upside ceiling",
        "Not a primary creator at next level",
        "Finishing through elite rim protection"
      ],
      comparison: "Mikal Bridges at the same age",
      weeklyNote: "Clifford moved up one spot after the week's most underrated workout moment — he went 6-for-8 from three and grabbed 14 rebounds in a 30-minute scrimmage in Denver. His motor is relentless and scouts love the winning profile. Age (21) keeps him in the late first rather than the lottery.",
      trend: "rising",
      stats: { ppg: 16.4, rpg: 8.8, apg: 2.3, fgPct: 0.487, threePct: 0.379 }
    },
    {
      rank: 22,
      prevRank: 21,
      name: "Rasheer Fleming",
      school: "Saint Joseph's",
      position: "PF",
      height: "6'9\"",
      age: 21,
      scoutingGrade: 73,
      projection: "Late First Round",
      bestFit: ["MIA", "BOS", "OKC"],
      strengths: [
        "Rapidly improving three-point stroke",
        "Excellent off-ball movement and cutting instincts",
        "Strong help-side defender and rim protector",
        "High IQ in structured defensive schemes"
      ],
      weaknesses: [
        "Below-average athlete by NBA standards",
        "Offensive game almost entirely catch-and-shoot",
        "Limited upside ceiling as a creator"
      ],
      comparison: "Kelly Olynyk",
      weeklyNote: "Fleming slipped one as Clifford pushed past him but remains a lock for the first round. His shooting has been the most improved skill in the class — he's going from fringe shooter to legitimate weapon. Miami's interest, given their stretch-four preferences, is well-documented this week.",
      trend: "stable",
      stats: { ppg: 13.9, rpg: 6.7, apg: 1.6, fgPct: 0.493, threePct: 0.386 }
    },
    {
      rank: 23,
      prevRank: 23,
      name: "Drake Powell",
      school: "North Carolina",
      position: "SF",
      height: "6'7\"",
      age: 19,
      scoutingGrade: 72,
      projection: "Late First Round",
      bestFit: ["ORL", "ATL", "POR"],
      strengths: [
        "Exceptional length and wingspan for a wing",
        "Natural shot-blocker and weak-side defender",
        "Improving catch-and-shoot ability",
        "Athletic and fluid mover in the open floor"
      ],
      weaknesses: [
        "Offensive game extremely raw and underdeveloped",
        "Shot creation off the dribble non-existent",
        "Needs two to three years of NBA development"
      ],
      comparison: "Early-career Bruce Brown with more length",
      weeklyNote: "Powell is a pure project pick who remains stable at 23 based on his physical tools alone. Carolina's pro day had him looking more polished than expected in spot-up situations. Teams picking 20-28 love the length-and-wingspan profile; the risk is entirely on the offensive development timeline.",
      trend: "stable",
      stats: { ppg: 9.4, rpg: 5.1, apg: 1.2, fgPct: 0.441, threePct: 0.318 }
    },
    {
      rank: 24,
      prevRank: 25,
      name: "Yaxel Lendeborg",
      school: "UAB / Michigan",
      position: "PF/C",
      height: "6'9\"",
      age: 20,
      scoutingGrade: 71,
      projection: "Late First / Early Second Round",
      bestFit: ["DEN", "MIN", "SAS"],
      strengths: [
        "Elite rebounder with a 7'3\" wingspan",
        "Quick second-jump and consistent motor",
        "Developing face-up jumper out to 17 feet",
        "Versatile defender who can guard multiple positions"
      ],
      weaknesses: [
        "Three-point range not yet a weapon",
        "Offensive polish below lottery-level contemporaries",
        "Foul-prone tendencies in the post"
      ],
      comparison: "Jaren Jackson Jr. defensive profile, different offensive ceiling",
      weeklyNote: "Lendeborg moved up one spot after an impressive Michigan pro day where his rebounding instincts were on full display. He grabbed 19 boards in a 35-minute workout setting that had Western Conference scouts buzzing. His transition to power forward gives him a higher ceiling than center-only prospects at this range.",
      trend: "rising",
      stats: { ppg: 11.8, rpg: 11.4, apg: 1.1, fgPct: 0.534, threePct: 0.221 }
    },
    {
      rank: 25,
      prevRank: 24,
      name: "Will Riley",
      school: "Illinois",
      position: "SG/SF",
      height: "6'7\"",
      age: 19,
      scoutingGrade: 70,
      projection: "Late First Round",
      bestFit: ["PHI", "CHA", "LAC"],
      strengths: [
        "Outstanding feel for scoring off movement",
        "Quick, reliable three-point shooter",
        "Good positional size and length for a wing",
        "Excellent off-ball IQ and backdoor cutting"
      ],
      weaknesses: [
        "Athleticism limits ability to create vs. elite defenders",
        "Defensive intensity inconsistent",
        "Not a primary playmaker or ball-handler"
      ],
      comparison: "Danny Green with higher offensive ceiling",
      weeklyNote: "Riley dropped one spot as Lendeborg's rebounding showcase changed the ordering around 24-25. His overall profile hasn't changed — he's a 3-and-D wing prospect who shoots it well and moves without the ball at a high level. Comfortable projection in the 22-27 range for most boards.",
      trend: "falling",
      stats: { ppg: 13.1, rpg: 4.2, apg: 1.9, fgPct: 0.464, threePct: 0.389 }
    },
    {
      rank: 26,
      prevRank: 26,
      name: "Marcus Dockery",
      school: "Indiana",
      position: "PG",
      height: "6'1\"",
      age: 20,
      scoutingGrade: 69,
      projection: "Late First / Early Second",
      bestFit: ["GSW", "LAL", "MIA"],
      strengths: [
        "High-volume three-point shooting with consistent mechanics",
        "Quick trigger off screens — elite catch-and-shoot",
        "Deceptive quickness and tight handle",
        "Veteran-savvy feel for the game"
      ],
      weaknesses: [
        "Size is a concern at NBA shooting guard",
        "Playmaking ceiling limited at 6'1\"",
        "Defensive liabilities against bigger guards"
      ],
      comparison: "Fred VanVleet",
      weeklyNote: "Dockery is steady at 26 and continues to generate buzz as an underrated senior with real shooting chops. His Hoosier pro day this week had him hitting 13 consecutive three-pointers at one point. Teams need a catch-and-shoot backup guard — he profiles as the best option in this class at that role.",
      trend: "stable",
      stats: { ppg: 17.6, rpg: 2.8, apg: 4.1, fgPct: 0.453, threePct: 0.401 }
    },
    {
      rank: 27,
      prevRank: 28,
      name: "Johni Broome",
      school: "Auburn",
      position: "C/PF",
      height: "6'10\"",
      age: 22,
      scoutingGrade: 68,
      projection: "Late First / Early Second",
      bestFit: ["CLE", "DET", "BOS"],
      strengths: [
        "Dominant post scorer with elite footwork",
        "Best post defender in this draft class",
        "Strong free-throw shooter for a big",
        "Natural leader and experienced college performer"
      ],
      weaknesses: [
        "Oldest prospect in the top 30 — limited upside ceiling",
        "Three-point range not yet developed",
        "NBA transition pace adjustment ahead"
      ],
      comparison: "Daniel Theis with All-Star ceiling upside",
      weeklyNote: "Broome rose one spot after his workout with Cleveland drew strong internal reviews. The Cavaliers, needing frontcourt depth, were reportedly very high on his post-game polish. At 22, his ceiling questions are real, but his readiness to contribute immediately is arguably best in class at the center spot.",
      trend: "rising",
      stats: { ppg: 18.2, rpg: 10.8, apg: 2.1, fgPct: 0.541, threePct: 0.289 }
    },
    {
      rank: 28,
      prevRank: 27,
      name: "Cedric Coward",
      school: "Washington State",
      position: "SF",
      height: "6'7\"",
      age: 21,
      scoutingGrade: 67,
      projection: "Late First / Second Round",
      bestFit: ["POR", "LAC", "ATL"],
      strengths: [
        "Legitimate 3-and-D profile at NBA size",
        "Above-average athletic tools for a wing",
        "Reliable corner three-pointer under pressure",
        "Solid help-side defender with good awareness"
      ],
      weaknesses: [
        "Limited creation off the dribble",
        "Needs to be in the right system to thrive",
        "Not a playmaker or primary option"
      ],
      comparison: "Dorian Finney-Smith",
      weeklyNote: "Coward slipped one as Broome's Cleveland workout moved him up. Washington State's limited national exposure hurt his overall valuation this season, but scouts who saw him consistently rate his 3-and-D potential as legitimate first-round value. A few trade-up scenarios have him as a target for teams 22-26.",
      trend: "falling",
      stats: { ppg: 14.7, rpg: 5.6, apg: 1.7, fgPct: 0.473, threePct: 0.371 }
    },
    {
      rank: 29,
      prevRank: 29,
      name: "Mouhamed Faye",
      school: "Washington State",
      position: "C",
      height: "7'0\"",
      age: 21,
      scoutingGrade: 66,
      projection: "Late First / Second Round",
      bestFit: ["ORL", "POR", "TOR"],
      strengths: [
        "Outstanding length and elite-level shot-blocking instincts",
        "Quick feet for a seven-footer",
        "Improving touch around the basket",
        "High-effort rebounder with good positioning"
      ],
      weaknesses: [
        "Offensive game nearly nonexistent beyond the paint",
        "Shooting at any distance remains a project",
        "Foul trouble chronic throughout college career"
      ],
      comparison: "Clint Capela development trajectory",
      weeklyNote: "Faye is steady at 29 — a pure defensive center with a legitimate shot-blocking future in the league. His pre-draft workouts have been inconsistent, but his 7'4\" wingspan and 3.6 blocks-per-game average keep him in late first-round conversation. Teams building youth and length are monitoring him closely.",
      trend: "stable",
      stats: { ppg: 9.8, rpg: 8.4, apg: 0.7, fgPct: 0.571, threePct: 0.000 }
    },
    {
      rank: 30,
      prevRank: 30,
      name: "Alier Maluk",
      school: "Oregon",
      position: "PF/C",
      height: "6'11\"",
      age: 19,
      scoutingGrade: 65,
      projection: "Second Round / Fringe First",
      bestFit: ["SAS", "OKC", "MIN"],
      strengths: [
        "Outstanding raw length at 7'1\" wingspan",
        "Fluid movement skills unusual for his size",
        "Emerging face-up game out to 18 feet",
        "High basketball IQ and coachability"
      ],
      weaknesses: [
        "Extremely raw offensively — needs significant development",
        "Strength level below NBA-ready",
        "Shot consistency wildly streaky"
      ],
      comparison: "Thaddeus Young ceiling, Bol Bol risk profile",
      weeklyNote: "Maluk rounds out the board at 30 as the classic high-upside, high-risk prospect. Oregon's pre-draft showcase this week featured a jaw-dropping sequence where he hit three consecutive mid-range jumpers then committed four consecutive offensive fouls. Teams in the 25-35 range have very split evaluations — he could land anywhere from 24 to undrafted.",
      trend: "stable",
      stats: { ppg: 8.6, rpg: 6.2, apg: 1.1, fgPct: 0.447, threePct: 0.281 }
    }
  ],
  risers: [
    {
      name: "Noa Essengue",
      change: 1,
      reason: "Led all big men at the NBA Global Combine with the top lane agility time and a recorded 7'3\" wingspan, prompting multiple top-five teams to re-examine their boards. His versatility package is increasingly viewed as the class's highest two-way ceiling."
    },
    {
      name: "Egor Demin",
      change: 2,
      reason: "BYU pro day playmaking performance turned heads leaguewide. Five elite-level passes in a 15-minute span have teams reconsidering his ranking — vision and IQ are genuinely special, and a commitment to come to the NBA immediately sealed his momentum."
    },
    {
      name: "Liam McNeeley",
      change: 1,
      reason: "Connected on 7-of-10 three-pointers in a Boston shooting workout with scouts grading his release as top-five in the class. His profile as a plug-and-play 3-and-D wing for a contender is rapidly firming up around picks 8-12."
    }
  ],
  fallers: [
    {
      name: "Tre Johnson",
      change: -1,
      reason: "New York workout exposed playmaking limitations in five-on-five settings. Ball-stopping tendencies and below-average playmaking for a guard created hesitation among teams picking 2-4. Still a top-three lock, but no longer a unanimous No. 1 pick on every board."
    },
    {
      name: "Hugo Gonzalez",
      change: -1,
      reason: "Light news week and a quiet workout circuit allowed other prospects to surpass him in the 15-18 range. His IQ and European pedigree remain assets, but scouts want to see more aggressive scoring instincts before moving him back into the lottery discussion."
    },
    {
      name: "Carter Bryant",
      change: -1,
      reason: "Demin's surge reshuffled the 18-22 cluster and bumped Bryant down one. No negative workout news — his shooting continues to improve — but the lack of creation ability off the bounce makes him a clear role-player projection in a range populated by higher-upside prospects."
    }
  ],
  tankWatch: [
    {
      team: "GSW",
      record: "41-41",
      lotteryOdds: "14.0%",
      primaryNeed: "Point Guard / Lead Creator",
      secondaryNeed: "Wing Scorer",
      bestProspectFit: "Jeremiah Fears",
      note: "Golden State sits 10th in the West at .500 and is firmly in tank territory if they miss the play-in. A Fears pick would give them an explosive next-generation lead guard as they transition away from the Curry era. Peterson and Tre Johnson are also dream scenarios if they fall."
    },
    {
      team: "LAC",
      record: "42-40",
      lotteryOdds: "10.5%",
      primaryNeed: "Wing Scorer / 3-and-D Forward",
      secondaryNeed: "Playmaking Guard",
      bestProspectFit: "Adou Thiero",
      note: "The Clippers' rebuild is quietly progressing, and a ping-pong ball lottery selection could accelerate the timeline dramatically. Thiero's elite athleticism and defensive ceiling align perfectly with their culture. Noa Essengue is the dream pick if they somehow climb into the top three."
    },
    {
      team: "POR",
      record: "42-40",
      lotteryOdds: "11.5%",
      primaryNeed: "Point Guard",
      secondaryNeed: "Big Man / Center",
      bestProspectFit: "Kasparas Jakucionis",
      note: "Portland is building around their young core and desperately needs a playmaking point guard to anchor their future. Jakucionis's creative passing and pick-and-roll mastery would accelerate their rebuild. Caleb Wilson at center would address their biggest roster hole if available."
    },
    {
      team: "PHX",
      record: "45-37",
      lotteryOdds: "7.5%",
      primaryNeed: "Wing Scorer",
      secondaryNeed: "Playmaking Guard",
      bestProspectFit: "Tre Johnson",
      note: "Phoenix is in a difficult middle ground — too good to get a top pick but too inconsistent to be a real threat. A Tre Johnson falling to the late lottery would be a franchise reset gift. Their L6 skid and 1-9 last-10 record has lottery positioning within reach if they continue down this path."
    },
    {
      team: "MIA",
      record: "43-39",
      lotteryOdds: "6.0%",
      primaryNeed: "Point Guard",
      secondaryNeed: "Stretch Big",
      bestProspectFit: "Labaron Philon",
      note: "Miami's culture-first organization would love a high-motor, crafty guard like Philon who profiles perfectly for the Heat's development system. Their lottery odds are modest but real. Rasheer Fleming as a stretch four is also a natural fit for their system — Miami's scouts attended his workout in full force this week."
    },
    {
      team: "ATL",
      record: "46-36",
      lotteryOdds: "4.0%",
      primaryNeed: "Wing Defender / 3-and-D",
      secondaryNeed: "Backup Center",
      bestProspectFit: "Adou Thiero",
      note: "Atlanta's L4 slide has them dangerously close to play-in bubble territory, which could swing their pick projection significantly. They need switchable defensive wings desperately. Thiero's OG Anunoby comparison fits their needs precisely, and they hosted Philon this week as a secondary guard option."
    },
    {
      team: "ORL",
      record: "45-37",
      lotteryOdds: "5.0%",
      primaryNeed: "Scoring Wing",
      secondaryNeed: "Backup Big",
      bestProspectFit: "VJ Edgecombe",
      note: "Orlando's young core has plateaued and they need an injection of scoring creation. Edgecombe's speed and finishing at the rim would complement their existing roster well. If they miss the playoffs, their lottery positioning could yield a genuine difference-maker — they're monitoring both wing scorers and athletic bigs closely."
    },
    {
      team: "PHI",
      record: "45-37",
      lotteryOdds: "5.5%",
      primaryNeed: "Point Guard",
      secondaryNeed: "Stretch Wing",
      bestProspectFit: "Kasparas Jakucionis",
      note: "Philadelphia's L6 skid has them in genuine danger of missing the playoffs entirely. A lottery pick landing would be a best-case scenario for their next chapter. Jakucionis as a playmaking PG fits their need for a high-IQ, pass-first guard after years of trying to build around isolation scorers."
    }
  ],
  weeklyScoutReport: "The 2026 Draft class took center stage this week at the NBA Global Combine, where Noa Essengue's otherworldly measurements and Egor Demin's playmaking wizardry provided the two biggest headlines of the pre-draft circuit. The top of the board remains fluid — Peterson, Essengue, and Tre Johnson are widely considered 1A, 1B, and 1C — but Essengue's combine performance has injected genuine debate into the No. 1 conversation for the first time this cycle. In the 15-25 range, the shooting-forward contingent is emerging as a deep and valuable tier, with McNeeley, Clifford, and Fleming all impressing scouts who attended their respective regional workouts this week. With the lottery now finalized and teams in the bottom quartile of both conferences eyeing their positioning, tank-watch chatter is intensifying, particularly around Golden State, Portland, and Phoenix — three franchises with legitimate lottery odds and pressing organizational decisions tied to where they land on May's ping-pong balls.",
};