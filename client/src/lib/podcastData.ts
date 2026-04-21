// Podcast Companion — Daily Episode Blueprint
// Last updated: April 21, 2026
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
  date: "April 21, 2026",
  episodeTitle: "Sunday Night Stunners: Trae Young's MSG Masterpiece & The End of Denver's Historic Run",
  rundown: [
    {
      topic: "Trae Young's Clutch Heroics Stun Madison Square Garden",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "28 points and 9 assists on 10-of-19 shooting",
        "6-of-11 from three including game-winner with 8.4 seconds left",
        "Hawks jump into tie for 5th place in East at 47-36",
        "Knicks led by 12 points in third quarter before collapse",
        "Brunson had 24 points but couldn't answer Young's barrage",
        "Atlanta shot 47.8% from three as team in second half"
      ],
      debateAngle: "Is Trae Young proving he's built for the biggest moments, or are we overreacting to one shot? His playoff history suggests mixed results in pressure situations.",
      suggestedQuote: "When you can walk into the world's most famous arena and hit that shot in that moment, you've announced yourself as a playoff assassin.",
      relevantPlayers: ["Trae Young", "Jalen Brunson", "Julius Randle"]
    },
    {
      topic: "Anthony Edwards Ends Denver's Historic 13-Game Winning Streak",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Edwards exploded for 32 points on 12-of-21 shooting",
        "Shot 6-of-10 from three-point range in clutch performance",
        "Nuggets streak dated back to March 15th - first loss in over month",
        "Minnesota shot 52.1% as team while holding Denver to 46.7%",
        "Jokić had 26 points, 12 rebounds, 8 assists in losing effort",
        "Timberwolves strengthen hold on 6th seed at 50-33"
      ],
      debateAngle: "Did Denver's 13-game winning streak actually hurt them by creating unsustainable expectations? Sometimes peaking too early in the regular season backfires in playoffs.",
      suggestedQuote: "Sometimes it takes a special individual performance to halt historic momentum, and Edwards delivered exactly that kind of game-changing effort.",
      relevantPlayers: ["Anthony Edwards", "Nikola Jokić", "Karl-Anthony Towns", "Jaden McDaniels"]
    },
    {
      topic: "Are the Knicks Championship Window Closing After MSG Collapse?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Knicks had 12-point lead in third quarter at home",
        "Now 53-30 but seeding hopes took massive hit",
        "Randle and Brunson combined for 45 points but couldn't close",
        "New York allowed 32 fourth-quarter points to Atlanta",
        "Hawks shot 58.3% in final frame to steal victory",
        "MSG crowd went from electric to stunned silence"
      ],
      debateAngle: "Is this loss a season-defining moment that exposes the Knicks' inability to close games, or just one bad quarter that doesn't define their championship potential?",
      suggestedQuote: "The Knicks had everything set up perfectly — then Trae Young happened. That's a loss that will haunt New York for months.",
      relevantPlayers: ["Jalen Brunson", "Julius Randle", "Trae Young"]
    },
    {
      topic: "Rapid-Fire Sunday Roundup: Standings Shakeup Edition",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Mobley's 24 points, 10 rebounds lead Cavs past Raptors 115-105",
        "Cleveland improves to 53-30, strengthens 4th seed grip",
        "Toronto drops into three-way tie for final playoff spots",
        "Hawks and Magic now tied for 5th at 46-37",
        "Eastern Conference playoff picture getting wild",
        "Western Conference top seeds remain Oklahoma City and San Antonio"
      ],
      debateAngle: "With just games remaining, which teams are peaking at the right time versus those showing concerning signs before the playoffs?",
      suggestedQuote: "Sunday's results were a perfect example of why the NBA regular season matters until the very last game.",
      relevantPlayers: ["Evan Mobley", "Donovan Mitchell", "Scottie Barnes"]
    },
    {
      topic: "Monday Night Preview: Celtics-76ers Playoff Atmosphere Brewing",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "Boston visits Philadelphia in crucial East showdown at 7 PM ET",
        "Celtics riding 4-game win streak, 76ers desperate for home wins",
        "Tatum averaging 28.4 points over last 10 games",
        "Embiid has dominated Boston historically at home",
        "Lakers-Rockets late night could preview playoff matchup",
        "Wembanyama and Spurs continue top-seed chase in Portland"
      ],
      debateAngle: "Which Monday night game has the highest stakes - Celtics trying to lock up seeding, or Western Conference teams jockeying for playoff position?",
      suggestedQuote: "Boston visits Philadelphia in a crucial Eastern Conference battle with massive playoff seeding implications for both teams.",
      relevantPlayers: ["Jayson Tatum", "Joel Embiid", "Anthony Davis", "Victor Wembanyama"]
    }
  ],
  coldOpen: "Sunday night in the NBA delivered playoff-level drama that left us speechless. At Madison Square Garden, Trae Young buried a step-back three with 8.4 seconds left to stun the Knicks and send the most famous arena in basketball into stunned silence. Three time zones away in Denver, Anthony Edwards exploded for 32 points to end the Nuggets' historic 13-game winning streak in equally dramatic fashion. We've got playoff positioning shakeups, clutch heroics, and championship implications - this is Hoops Intel, and we're breaking down the Sunday night stunners that just changed everything.",
  socialClip: "Trae Young's step-back three-pointer over Jalen Brunson with 8.4 seconds left at Madison Square Garden. Perfect for social - capture the shot going in, crowd reaction, and Young's celebration. Caption: 'ICE COLD: Trae Young silences MSG with game-winning dagger!' Include slow-motion replay and crowd audio for maximum impact.",
  tweetThread: [
    "🧵 SUNDAY NIGHT STUNNERS THREAD: Two massive upsets just reshuffled the entire playoff picture. Let's break down how Trae Young and Anthony Edwards delivered game-changing performances... 1/5",
    "🎯 TRAE AT MSG: 28 points, 9 assists, and a step-back THREE with 8.4 seconds left over Jalen Brunson to stun the Knicks 107-106. The Hawks jump into a tie for 5th place while New York's seeding hopes take a massive hit. Playoff assassin mode activated. 2/5",
    "🔥 ANT-MAN ERUPTS: Anthony Edwards dropped 32 points on 12-21 shooting (6-10 from three!) to end Denver's HISTORIC 13-game winning streak. The Nuggets hadn't lost since March 15th, but Edwards single-handedly ended their dominance with clutch shot after clutch shot. 3/5",
    "📊 THE RIPPLE EFFECTS: Atlanta's win creates a three-way tie for playoff spots in the East. Meanwhile, Minnesota strengthens their 6th seed while proving they can beat anyone when Edwards is locked in. These aren't just wins - they're statement victories. 4/5",
    "🏀 MONDAY PREVIEW: Celtics at 76ers (7 PM ET) brings playoff atmosphere to Philly, while Lakers-Rockets could preview a first-round series. The regular season is winding down, but the drama is just heating up. Which team made the biggest statement Sunday night? 5/5"
  ]
};
