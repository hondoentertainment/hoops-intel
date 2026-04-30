// Podcast Companion — Daily Episode Blueprint
// Last updated: April 30, 2026
// Generated from today's Hoops Intel edition

export interface TalkingPoint {
  topic: string;
  segment: "opener" | "deep-dive" | "hot-take" | "rapid-fire" | "closer";
  duration: string;
  keyStats: string[];
  debateAngle: string;
  suggestedQuote: string;
  relevantPlayers: string[];
}

export interface PodcastCompanionData {
  date: string;
  episodeTitle: string;
  rundown: TalkingPoint[];
  coldOpen: string;
  socialClip: string;
  tweetThread: string[];
}

export const podcastCompanion: PodcastCompanionData = {
  date: "April 30, 2026",
  episodeTitle: "Upset Prevention & Young Kings Rising: Mitchell Explodes, Rockets Shock Lakers, Pistons Avoid History",
  rundown: [
    {
      topic: "Detroit's Historic Close Call & Houston's Championship Statement",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Detroit avoided becoming first top seed EVER swept in Round 1",
        "Cunningham: 28 PTS, 9 AST, 11-19 FG in must-win Game 4",
        "Houston shot 52.1% from field in stunning Lakers road upset", 
        "Sengun dominated: 24 PTS, 11 REB, 10-15 FG vs AD and Lakers frontcourt",
        "LeBron managed just 18 points - worst playoff showing in years",
        "Rockets steal home court advantage in series opener"
      ],
      debateAngle: "Which story is bigger - Detroit barely avoiding the most embarrassing playoff collapse ever, or Houston announcing themselves as legitimate championship contenders by dominating LeBron and the Lakers on the road?",
      suggestedQuote: "Folks, we almost witnessed NBA history last night - and I'm talking about the BAD kind of history. No top seed has EVER been swept in the first round, and Detroit was literally one loss away from that ignominy.",
      relevantPlayers: ["Cade Cunningham", "Paolo Banchero", "Alperen Sengun", "LeBron James"]
    },
    {
      topic: "Donovan Mitchell's Playoff Evolution: From Disappointment to Dominance",
      segment: "deep-dive", 
      duration: "10 minutes",
      keyStats: [
        "Mitchell exploded for 34 points on 13-22 shooting (59.1%)",
        "Hit 6 three-pointers in series-evening victory",
        "Cleveland shot 125-120 in dominant home bounce-back",
        "Mitchell averaging 31.5 PPG through first two playoff games",
        "Cavs seized home court advantage back from Toronto",
        "Series now dead even at 1-1 heading to Toronto"
      ],
      debateAngle: "Is this the playoff breakthrough we've been waiting for from Donovan Mitchell? Has he finally shed the narrative of playoff disappointments and proven he can be the guy for a championship contender?",
      suggestedQuote: "Mitchell didn't just score 34 points - he completely took over every crucial moment. This looked like a superstar having his playoff coming-of-age moment in real time.",
      relevantPlayers: ["Donovan Mitchell", "Pascal Siakam", "Scottie Barnes"]
    },
    {
      topic: "Is This the End of Lakers Championship Window?",
      segment: "hot-take",
      duration: "7 minutes", 
      keyStats: [
        "LeBron shot poorly and looked his age against young Rockets",
        "Anthony Davis managed just 14 points, dominated by Sengun",
        "Lakers lost home court in Game 1 - historically bad sign",
        "Houston's young core completely outplayed LA veterans",
        "Rockets shot 52.1% while Lakers struggled offensively",
        "LeBron will be 42 next season if this is the end"
      ],
      debateAngle: "After watching LeBron struggle against Houston's young energy and the Lakers get completely outplayed at home, are we watching the end of their championship window in real time? Should they blow it up this summer?",
      suggestedQuote: "I hate to say it, but that looked like Father Time finally catching up to LeBron. When your 39-year-old superstar can't keep up with hungry 22-year-olds, your window might be slamming shut.",
      relevantPlayers: ["LeBron James", "Anthony Davis", "Alperen Sengun", "Jalen Green"]
    },
    {
      topic: "Tonight's Elimination Theater & Series Momentum Shifts",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "Knicks can close out Hawks tonight (7 PM ET, ESPN)",
        "Celtics look to finish Sixers despite Embiid's Game 3 explosion", 
        "Nuggets-Timberwolves Game 5 is winner-take-all (9:30 PM ET)",
        "Three potential elimination games on Wednesday slate",
        "Orlando still leads Detroit 3-1 despite Game 4 setback",
        "Victor Wembanyama averaging 31.2 PPG in conference semifinals"
      ],
      debateAngle: "Which of tonight's games has the highest stakes - the Knicks potentially closing out Atlanta, Boston trying to finish Philly, or that elimination showdown between Denver and Minnesota?",
      suggestedQuote: "Tonight we could see three teams punch their tickets to the next round. The elimination game energy is going to be absolutely electric, especially in that Nuggets-Wolves winner-take-all battle.",
      relevantPlayers: ["Joel Embiid", "Jalen Brunson", "Anthony Edwards", "Jamal Murray"]
    },
    {
      topic: "Young Stars Seizing Their Playoff Moments",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Paolo Banchero still averaging 25.8 PPG despite Game 4 loss",
        "Wembanyama dominating conference semifinals: 31.2 PPG, 13.4 RPG",
        "Sengun announced himself as championship-level center",
        "Chet Holmgren helped OKC advance with efficient two-way play",
        "Young Rockets core outplaying Lakers veterans",
        "Next generation taking over from aging superstars"
      ],
      debateAngle: "Are we witnessing the official changing of the guard in the NBA? The young stars aren't just getting experience anymore - they're taking over and winning series.",
      suggestedQuote: "This isn't about the future anymore - this is about right now. Wemby, Paolo, Sengun, these young guys are grabbing playoff moments and refusing to give them back to the old guard.",
      relevantPlayers: ["Victor Wembanyama", "Paolo Banchero", "Alperen Sengun", "Chet Holmgren", "Amen Thompson"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Last night delivered playoff drama that had everything - historic upset prevention, championship statements, and Father Time coming to collect his debt. Detroit avoided the most embarrassing collapse in NBA history while a 22-year-old Turkish center just announced himself to LeBron James and the basketball world. We've got young stars seizing their moments and aging legends facing reality checks. This is Hoops Intel, I'm your host, and we're breaking down a Tuesday night that shifted championship narratives across the league. Let's get into it!",
  socialClip: "Clip the segment where we discuss LeBron's struggles against Houston's young core - specifically the quote about Father Time catching up and the championship window slamming shut. The debate about whether the Lakers should blow it up will generate massive engagement and hot takes in the comments.",
  tweetThread: [
    "🧵 THREAD: Last night's playoff action was absolutely WILD. Let's break down how Detroit avoided history, Houston shocked the Lakers, and Mitchell exploded in Cleveland 👇",
    "1️⃣ HISTORY AVOIDED: Detroit prevented becoming the first top seed EVER swept in Round 1. Cunningham's 28 PTS & 9 AST gave the Pistons life, but they still trail Orlando 3-1. The Magic are still one win away from the biggest upset in NBA history 😤",
    "2️⃣ ROCKETS RISING: Houston STUNNED the Lakers 99-93 in LA behind Sengun's dominant 24 PTS & 11 REB. LeBron managed just 18 points in one of his worst playoff performances. Are we watching the changing of the guard in real time? 🚀",
    "3️⃣ MITCHELL'S MOMENT: Donovan Mitchell exploded for 34 points on 59% shooting to even Cleveland's series with Toronto. This looked like a superstar having his playoff breakthrough - the kind of performance that defines championship runs ⭐",
    "4️⃣ TONIGHT'S STAKES: Three potential elimination games including that winner-take-all Nuggets-Wolves showdown. Plus Embiid trying to save Philly's season and the Knicks looking to close out Atlanta. Championship dreams on the line everywhere 🔥"
  ]
};
