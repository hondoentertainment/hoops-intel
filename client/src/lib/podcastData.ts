// Podcast Companion — Daily Episode Blueprint
// Last updated: April 8, 2026
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
  date: "April 8, 2026",
  episodeTitle: "Thunder Drop Nuclear Bomb on Lakers | CJ McCollum Goes Video Game Mode | Bucks' Season Officially Over?",
  rundown: [
    {
      topic: "Thunder Obliterate Lakers in Championship Statement",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "OKC 123, LAL 87 - 36-point annihilation",
        "Shai Gilgeous-Alexander: 28 points in just 29 minutes",
        "Thunder led by 30 at halftime",
        "Chet Holmgren perfect 9-of-9 shooting",
        "OKC now just 2 games behind SAS for West #1 seed",
        "Lakers shot 39% while Thunder hit 57%"
      ],
      debateAngle: "Is this the moment we officially crown OKC as championship favorites over San Antonio?",
      suggestedQuote: "This wasn't just a win, this was a public execution. SGA needed 29 minutes to drop 28 on perfect efficiency while Chet went 9-for-9. When you beat a 50-win Lakers team by 36 points on their home court, you're sending a message to the entire league.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Josh Giddey", "LeBron James", "Anthony Davis"]
    },
    {
      topic: "The Science Behind Championship-Level Dominance",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Thunder outscored Lakers by +30 in SGA's 29 minutes",
        "OKC shooting 57% vs Lakers 39% - 18-point differential",
        "Holmgren's 22 points, 9 rebounds, 4 blocks on perfect shooting",
        "Thunder forced 16 Lakers turnovers",
        "OKC now 63-16 with championship-level net rating",
        "This was Lakers' worst home loss this season"
      ],
      debateAngle: "What separates a regular blowout from a championship statement game like this Thunder performance?",
      suggestedQuote: "There's a difference between beating a bad team by 30 and demolishing a playoff team by 36. The Thunder didn't just win, they controlled every single possession. Their defensive execution was championship-level, their offensive flow was pristine, and they never let up.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams"]
    },
    {
      topic: "Are the New Orleans Pelicans the NBA's Biggest What-If Story?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Pelicans scored 156 points - second-highest this season",
        "CJ McCollum: 41 points on 9-of-14 from three",
        "Big 3 combined: McCollum 41, Ingram 32, Zion 28",
        "New Orleans shot 60% from field, made 21 threes",
        "Pelicans are 26-54 despite this offensive firepower",
        "When Big 3 plays together: historic offensive rating"
      ],
      debateAngle: "If healthy all season, would this Pelicans Big 3 have been a legitimate championship contender?",
      suggestedQuote: "When you watch CJ McCollum go 9-of-14 from three for 41 points while Ingram drops 32 and Zion adds 28, you realize this might be the most talented team to miss the playoffs in NBA history. The ceiling is championship-level, but availability is the best ability.",
      relevantPlayers: ["CJ McCollum", "Brandon Ingram", "Zion Williamson", "Jonas Valanciunas"]
    },
    {
      topic: "Rapid Fire: Rockets Lock Up 3-Seed, Bucks Season Over, Wild Scoreboards",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "Rockets hit 50 wins, Şengün near triple-double: 26/12/9",
        "Bucks lose to Nets 96-90, now 12 games out of playoffs",
        "Cam Thomas 27 points in season-killing upset",
        "Anthony Edwards 32 points in Wolves' 124-104 road win",
        "Four games decided by 15+ points tonight",
        "Combined 449 points in Pelicans-Jazz shootout"
      ],
      debateAngle: "Which second-tier storyline from tonight will have the biggest playoff implications?",
      suggestedQuote: "The Rockets hitting 50 wins with Şengün's brilliant all-around play locks up the 3-seed, while Giannis and the Bucks just watched their season end courtesy of Cam Thomas and the Nets. Sometimes the NBA is beautifully cruel.",
      relevantPlayers: ["Alperen Şengün", "Giannis Antetokounmpo", "Cam Thomas", "Anthony Edwards"]
    },
    {
      topic: "Looking Ahead: Playoff Race Heating Up and Tomorrow's Must-Watch Games",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Thunder now 2 games behind Spurs for West #1 seed",
        "Tonight: Cavs @ Hawks (ESPN) - major 4-seed vs 5-seed implications",
        "Thunder visit Clippers after demolishing Lakers",
        "One week left in regular season",
        "Western Conference playoff picture nearly set",
        "Eastern Conference still wide open outside top 4"
      ],
      debateAngle: "Can the Thunder actually catch San Antonio for the top seed, and does it even matter for their championship chances?",
      suggestedQuote: "After that demolition job in Los Angeles, the Thunder have to feel like they can beat anyone, anywhere. The question isn't whether they can win a championship - it's whether anyone can stop them when they're playing like this.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Trae Young", "Donovan Mitchell", "Kawhi Leonard"]
    }
  ],
  coldOpen: "Welcome to Hoops Intel - I'm your host and if you watched any basketball last night, you witnessed something special. The Oklahoma City Thunder didn't just beat the Lakers - they absolutely obliterated them 123-87 in what might be the most dominant championship statement of the season. Shai Gilgeous-Alexander needed just 29 minutes to drop 28 points on perfect efficiency while Chet Holmgren went 9-for-9 from the field. Meanwhile in New Orleans, CJ McCollum turned into Steph Curry on steroids, hitting 9 threes for 41 points in a 156-point explosion. We've got championship statements, historic scoring, and the Bucks' season officially ending. This is your NBA intel for April 8th - let's dive in.",
  socialClip: "The moment from Shai Gilgeous-Alexander's post-game interview where he says 'We knew we had to make a statement tonight' paired with highlights of his 28 points in 29 minutes during the 36-point demolition of the Lakers. Caption: 'When SGA talks about making statements, this is what championship-level dominance looks like 🔥 #ThunderUp'",
  tweetThread: [
    "🚨 HOOPS INTEL PODCAST LIVE 🚨\n\nThe Thunder just dropped a NUCLEAR BOMB on the Lakers 123-87\n\n• SGA: 28 pts in 29 minutes\n• Chet: PERFECT 9-of-9 shooting\n• Led by 30 AT HALFTIME\n\nThis wasn't a game, it was a championship statement 🔥",
    "Meanwhile CJ McCollum turned into a video game character:\n\n41 POINTS on 9-of-14 from THREE 🎯\n\nThe Pelicans scored 156 points (!!!) in a wild shootout vs Utah. When this Big 3 is healthy, they might have the highest ceiling in the league. What could have been... 😤",
    "ICYMI: The Bucks season is officially OVER\n\nLost to the Nets 96-90 and are now 12 games out of the playoffs with one week left. Giannis deserved better than this. The championship window has officially closed in Milwaukee 📉",
    "Quick hits from a WILD night:\n• Rockets hit 50 wins, Şengün near triple-double\n• Anthony Edwards dropped 32 in Minnesota's road win\n• Four blowouts of 15+ points\n• Combined 449 points in NO-Utah game\n\nThe playoff race is getting SPICY 🌶️",
    "Tomorrow's MUST-WATCH:\nCavs @ Hawks on ESPN 📺\n\nMajor 4-seed vs 5-seed implications. Plus Thunder visit the Clippers after that Lakers massacre.\n\nFull breakdown on today's pod - link in bio! What storyline has you most hyped for the playoffs? 👇"
  ]
};
