// Podcast Companion — Daily Episode Blueprint
// Last updated: May 6, 2026
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
  date: "May 6, 2026",
  episodeTitle: "Thunder and Pistons Drop Championship Statements | Conference Semifinals Chaos",
  rundown: [
    {
      topic: "Cade Cunningham's Playoff Masterpiece Powers Detroit Past Cleveland",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Cunningham: 28 points, 11 assists, 11-19 FG in Game 1 win",
        "Detroit shot 52% from field, controlled boards 48-39",
        "Four Pistons scored 15+: balanced attack overwhelmed Cleveland",
        "Mitchell's 32 points not enough as Cavs fall 111-101 at Little Caesars Arena",
        "Pistons take 1-0 series lead in Eastern Conference Semifinals",
        "Detroit's home court advantage proving decisive early"
      ],
      debateAngle: "Is Cade Cunningham already a top-5 point guard in the league after this playoff performance?",
      suggestedQuote: "This wasn't just a good game—this was Cade Cunningham announcing himself as a championship-caliber floor general. The way he controlled tempo, found open teammates, and took over when Detroit needed buckets? That's All-NBA level impact right there.",
      relevantPlayers: ["Cade Cunningham", "Donovan Mitchell", "Isaiah Stewart", "Jalen Duren", "Jarrett Allen"]
    },
    {
      topic: "Oklahoma City's Defensive Clinic Exposes Lakers' Championship Flaws",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Thunder held LeBron-AD to 32 combined points—lowest since 2021",
        "OKC forced 19 turnovers, dominated paint 52-34",
        "SGA efficient 26 points on 10-17 shooting with 8 assists",
        "Lakers shot just 39% from field in 108-90 blowout loss",
        "Thunder's home court energy at Paycom Center was suffocating",
        "Jalen Williams added 24 points as secondary scorer"
      ],
      debateAngle: "Are the Lakers' championship window officially closed after this defensive demolition?",
      suggestedQuote: "When you hold LeBron James and Anthony Davis to 32 combined points in a playoff game, you're not just playing good defense—you're making a statement that echoes throughout the entire league. This Thunder defense is built for June basketball.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "LeBron James", "Anthony Davis", "Jalen Williams", "Luguentz Dort"]
    },
    {
      topic: "Are the Detroit Pistons Actually Championship Contenders?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Detroit finished 60-22, best record in franchise since 2006",
        "Pistons have four players averaging 15+ in playoffs",
        "Young core led by 22-year-old Cunningham showing playoff maturity",
        "Detroit's depth advantage clear—bench outscored Cleveland 34-18",
        "Home court through East finals if they advance",
        "Balanced scoring attack makes them matchup nightmare"
      ],
      debateAngle: "Is Detroit's championship window opening faster than anyone expected, or are they still a year away?",
      suggestedQuote: "Look, I know it sounds crazy to talk about the Pistons as title contenders, but watch that Game 1 performance again. That's not a young team learning—that's a championship-caliber squad announcing their arrival.",
      relevantPlayers: ["Cade Cunningham", "Isaiah Stewart", "Jalen Duren"]
    },
    {
      topic: "Tonight's Game 2 Swing Games Could Define Championship Race",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "76ers face elimination down 0-1 at Madison Square Garden",
        "Knicks favored by 8.5 after 39-point Game 1 blowout",
        "Embiid listed probable with knee soreness—must-win scenario",
        "Spurs desperate to protect home court vs surging Timberwolves",
        "Minnesota seeks commanding 2-0 lead on road in San Antonio",
        "Edwards vs Wembanyama matchup could swing series momentum"
      ],
      debateAngle: "Which Game 2 carries more championship implications—Knicks-76ers or Spurs-Timberwolves?",
      suggestedQuote: "These aren't just Game 2s—these are potential series-defining moments. Philadelphia and San Antonio both facing 0-2 holes that could end their championship dreams before June even arrives.",
      relevantPlayers: ["Joel Embiid", "Jalen Brunson", "Victor Wembanyama", "Anthony Edwards"]
    },
    {
      topic: "Championship Contender Power Rankings After Night 1",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "Thunder look dominant with 64-18 record and elite defense",
        "Pistons proving depth and home court advantage matter",
        "Lakers championship hopes fading after defensive struggles",
        "Knicks building momentum with historic playoff performances",
        "Conference semifinals already delivering must-watch basketball",
        "Home court proving decisive in early games"
      ],
      debateAngle: "Who emerges as the new championship favorite after these Game 1 statements?",
      suggestedQuote: "After watching Oklahoma City dismantle the Lakers and Detroit control Cleveland, we might need to completely recalibrate our championship expectations. The youth movement is real, and it's happening right now.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Cade Cunningham", "Jalen Brunson", "Victor Wembanyama"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Last night wasn't just playoff basketball—it was a seismic shift in the championship landscape. Cade Cunningham put on a clinic with 28 and 11 to power Detroit past Cleveland, while Shai Gilgeous-Alexander and the Thunder absolutely demolished LeBron and the Lakers in Oklahoma City. We're talking about holding the King and AD to just 32 combined points in a playoff game. Tonight, we've got must-win Game 2s that could define legacies. Buckle up—this is about to get wild.",
  socialClip: "Cade Cunningham masterclass discussion from the opener segment, focusing on his 28-point, 11-assist performance and whether he's already a top-5 point guard. Cut to the quote about announcing himself as a championship-caliber floor general. Perfect for Twitter/TikTok with playoff highlights overlay.",
  tweetThread: [
    "🚨 NEW HOOPS INTEL POD: Thunder & Pistons drop CHAMPIONSHIP STATEMENTS in Conference Semifinals openers! Cade's masterpiece, OKC's defensive clinic, and tonight's must-win Game 2s 🎧⬇️",
    "Cade Cunningham: 28 PTS, 11 AST on 58% shooting. This wasn't just a good game—this was a 22-year-old announcing himself as a championship-level floor general. Detroit's window is opening FAST 🔥",
    "Oklahoma City held LeBron + AD to 32 COMBINED points. When's the last time you saw that in a playoff game? This Thunder defense is built for June basketball, and the Lakers' title hopes are fading ⚡",
    "Tonight's Game 2s are MASSIVE: 76ers face elimination at MSG, Spurs need to protect home court vs Minnesota. These aren't just games—they're potential series-defining moments 🎯",
    "After last night: Are we looking at OKC vs Detroit as a potential conference finals matchup? The youth movement in the NBA is REAL and it's happening right now. Full breakdown in today's pod! 🏆"
  ]
};
