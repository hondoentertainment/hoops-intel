// Podcast Companion — Daily Episode Blueprint
// Last updated: April 19, 2026
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
  date: "April 19, 2026",
  episodeTitle: "Statement Saturday: Mobley Goes Nuclear & Denver's 13-Game Roll",
  rundown: [
    {
      topic: "Evan Mobley's Career Night Powers Cleveland's Statement Win",
      segment: "opener",
      duration: "6 minutes",
      keyStats: [
        "31 points on 13-of-19 shooting (68.4% FG)",
        "12 rebounds and 4 blocks in dominant two-way performance",
        "Cleveland shot 52.3% as a team in 126-113 blowout",
        "Career-high scoring night for the fourth-year big man",
        "Cavaliers improve to 53-30, strengthening 4th seed position",
        "Six Cleveland players scored in double figures"
      ],
      debateAngle: "Is Mobley's breakout the missing piece that makes Cleveland a legitimate Eastern Conference championship threat, or was this just one great night against a vulnerable Toronto team?",
      suggestedQuote: "When Evan Mobley plays like this — 31 and 12 with elite defense — the Cavaliers aren't just a playoff team, they're a problem for everyone in the East. This is what Cleveland has been waiting for from their franchise cornerstone.",
      relevantPlayers: ["Evan Mobley", "Darius Garland", "Jarrett Allen", "RJ Barrett"]
    },
    {
      topic: "Denver's Historic 13-Game Win Streak and Championship Pedigree",
      segment: "deep-dive",
      duration: "8 minutes",
      keyStats: [
        "13 consecutive victories — longest active streak in NBA",
        "Jokić's 24 points, 11 assists on 10-of-15 shooting",
        "Nuggets shooting 49.1% during win streak",
        "Aaron Gordon 19 points on 8-of-12 shooting as perfect third option",
        "Minnesota held to 41.3% shooting in 116-105 defeat",
        "Denver now 55-28, looking like Western Conference favorites"
      ],
      debateAngle: "Are we watching Denver hit their championship form at the perfect time, or is this streak masking deeper issues that will surface in the playoffs?",
      suggestedQuote: "Thirteen straight wins isn't luck — it's championship DNA. When Jokić is playing like this and Aaron Gordon is your efficient third option, the Nuggets are basically playing a different sport than everyone else.",
      relevantPlayers: ["Nikola Jokić", "Aaron Gordon", "Kentavious Caldwell-Pope", "Anthony Edwards"]
    },
    {
      topic: "Lakers and Knicks Cruise: Are We Underestimating These Championship Dark Horses?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Lakers win fourth straight, now 54-29 with elite defense",
        "Anthony Davis: 25 points, 11 rebounds, 3 blocks on 57.9% shooting",
        "Knicks improve to 54-29 with 113-102 win over Atlanta",
        "Jalen Brunson: 26 points, 7 assists on efficient 55.6% shooting",
        "Both teams showing championship-level two-way balance",
        "Houston held to 42.1% shooting by Lakers defense"
      ],
      debateAngle: "Hot Take: The Lakers and Knicks are being completely overlooked in championship conversations, but both teams are peaking at exactly the right time and could shock everyone in the playoffs.",
      suggestedQuote: "While everyone's talking about Denver and Boston, the Lakers and Knicks are quietly putting together the kind of late-season runs that end with championship parades. Don't sleep on these teams.",
      relevantPlayers: ["Anthony Davis", "D'Angelo Russell", "Jalen Brunson", "Julius Randle"]
    },
    {
      topic: "Rapid Fire: Tonight's Heavyweight Battles and Injury Updates",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Boston (-8.5) hosts Philadelphia in Eastern Conference clash",
        "Oklahoma City (-12.5) welcomes Phoenix in potential playoff preview",
        "Detroit faces Orlando in battle of Eastern Conference risers",
        "Luka Dončić still day-to-day with knee soreness",
        "Kawhi Leonard week-to-week with hip flexor strain",
        "Marcus Smart expected to return for Memphis tonight"
      ],
      debateAngle: "Which of tonight's four games has the biggest playoff seeding implications, and are we seeing the final injury concerns before the postseason push?",
      suggestedQuote: "Tonight's slate is loaded: Tatum versus Embiid, SGA against Booker, and two Eastern Conference dark horses in Detroit and Orlando. Plus, the injury report is finally clearing up at the perfect time.",
      relevantPlayers: ["Jayson Tatum", "Joel Embiid", "Shai Gilgeous-Alexander", "Devin Booker", "Luka Dončić"]
    },
    {
      topic: "Championship Contenders Separate Themselves with Two Weeks Until Playoffs",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Oklahoma City leads West at 64-18 (.780 winning percentage)",
        "Detroit surprising everyone at 60-22 in the East",
        "Denver's 13-game streak has them peaking at perfect time",
        "Four teams (OKC, SAS, BOS, DET) with 55+ wins",
        "Playoff races tightening with multiple teams at 45-37",
        "Victor Wembanyama continues Rookie of the Year dominance"
      ],
      debateAngle: "With two weeks left in the regular season, which teams are truly separating themselves as championship favorites versus pretenders who will falter in the playoffs?",
      suggestedQuote: "The playoffs start in two weeks, and we're finally seeing which teams have that championship gear. Denver's rolling, Cleveland's hitting their ceiling, and the Lakers are looking dangerous. It's about to get really interesting.",
      relevantPlayers: ["Victor Wembanyama", "Shai Gilgeous-Alexander", "Nikola Jokić", "Evan Mobley"]
    }
  ],
  coldOpen: "Good morning, hoop heads! Last night was supposed to be a quiet Friday in the Association, but somebody forgot to tell Evan Mobley. The Cleveland big man just went absolutely nuclear — 31 points, 12 boards, 4 blocks, and a career-high performance that has the entire Eastern Conference on notice. Meanwhile, Nikola Jokić is making winning 13 straight games look as easy as breathing, and both the Lakers and Knicks sent their own messages with dominant home victories. With championship contenders starting to separate themselves and tonight's loaded slate featuring Boston-Philly and OKC-Phoenix, we've got a packed show ahead. This is Hoops Intel, and trust me — you're going to want to hear what happened while you were sleeping.",
  socialClip: "30-second clip of the host breaking down Evan Mobley's career night with animated graphics showing his 31 points on 68.4% shooting, emphasizing how this performance elevates Cleveland's championship ceiling. Include the quote: 'When Mobley plays like this, the Cavaliers aren't just a playoff team — they're a legitimate threat to everyone in the East.' Perfect for Instagram Reels and TikTok with basketball highlights overlaid.",
  tweetThread: [
    "🏀 STATEMENT SATURDAY: Last night's results just shifted the entire playoff landscape. Mobley dropped a career-high 31, Denver won their 13TH STRAIGHT, and both LAL/NYK sent championship messages. Here's what you missed while sleeping... 🧵",
    "2/ EVAN MOBLEY ERUPTION: 31 pts (13-19 FG), 12 reb, 4 blk in a 126-113 Cleveland ROUT of Toronto. This wasn't just a career night — it was a statement about the Cavs' championship ceiling. When Mobley plays like THIS, Cleveland becomes a legitimate Eastern Conference threat 🔥",
    "3/ DENVER'S DOMINANCE: Jokić orchestrated win #13 in a row with 24 pts & 11 ast on 10-15 shooting. The Nuggets are hitting their championship form at the PERFECT time. Aaron Gordon (19 pts, 8-12 FG) as your third option? That's title-level depth right there 👑",
    "4/ LAKERS & KNICKS ROLLING: Both teams improve to 54-29 with convincing home wins. AD: 25-11-3blk. Brunson: 26-7-5. While everyone talks Denver/Boston, these two are quietly building championship momentum. Don't sleep on teams peaking at the right time 👀",
    "5/ TONIGHT'S LOADED SLATE: BOS vs PHI (1pm), OKC vs PHX (3:30pm), DET vs ORL (6:30pm), SA vs POR (9pm). Championship contenders are separating themselves with 2 weeks until playoffs. Which teams have that extra gear? We're about to find out 🚀 #HoopsIntel"
  ]
};
