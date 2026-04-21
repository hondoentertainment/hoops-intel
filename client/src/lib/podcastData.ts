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
  episodeTitle: "Ice Cold: Trae Stuns MSG, Ant-Man Ends Historic Streak",
  
  rundown: [
    {
      topic: "Trae Young's MSG Masterpiece",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "28 points, 9 assists on 6-of-11 three-point shooting",
        "Step-back three with 8.4 seconds left over Brunson",
        "Hawks jump to 5th place tie in East at 46-36",
        "Knicks blow double-digit lead, fall to 53-30",
        "Young shot 54.5% from the field in hostile MSG environment",
        "Atlanta outscored New York 32-24 in the fourth quarter"
      ],
      debateAngle: "Is Trae Young now officially clutch enough to lead a championship run, or was this just one moment?",
      suggestedQuote: "When you can walk into Madison Square Garden and hit that shot in that moment with playoff seeding on the line, you've announced yourself as a clutch assassin who belongs in any conversation about elite performers.",
      relevantPlayers: ["Trae Young", "Jalen Brunson", "Julius Randle"]
    },
    
    {
      topic: "The Streak Snapper: Edwards Ends Denver's Historic Run",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Anthony Edwards: 32 points on 12-21 shooting, 6-10 from three",
        "Denver's 13-game win streak snapped - longest of the season",
        "Timberwolves shot 52.1% as a team vs league's best defense",
        "Jokić had 26-12-8 but looked gassed down the stretch",
        "Minnesota's +18 net rating in Edwards' 38 minutes",
        "Nuggets had won 13 straight dating back to March 15th"
      ],
      debateAngle: "Did Denver peak too early with their 13-game streak, or is this just a road bump before another title run?",
      suggestedQuote: "Sometimes it takes a special individual performance to halt historic momentum, and Edwards delivered exactly that kind of game-changing effort on the biggest stage.",
      relevantPlayers: ["Anthony Edwards", "Nikola Jokić", "Karl-Anthony Towns", "Jaden McDaniels"]
    },
    
    {
      topic: "Playoff Seeding Chaos Theory",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Hawks now tied for 5th in East after stunning MSG win",
        "Knicks' championship odds took massive hit with home loss",
        "5 teams within 2 games for seeds 5-9 in Eastern Conference",
        "Western Conference top 4 separated by just 1.5 games",
        "10 teams still fighting for final playoff spots",
        "Every remaining game carries maximum seeding weight"
      ],
      debateAngle: "Are road upsets like Hawks-Knicks and Wolves-Nuggets proof that playoff seeding doesn't matter anymore?",
      suggestedQuote: "With just days remaining in the regular season, every single possession carries maximum weight, and we witnessed two teams rise to the moment while others crumbled under championship pressure.",
      relevantPlayers: ["Trae Young", "Anthony Edwards", "Jalen Brunson", "Nikola Jokić"]
    },
    
    {
      topic: "Around the League Lightning Round",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Evan Mobley: 24-10-3 blocks, 62.5% shooting vs Toronto",
        "Cavaliers improve to 52-30 with convincing road win",
        "Scottie Barnes led Raptors with 20-8-5 in losing effort",
        "Cleveland outrebounded Toronto 48-39",
        "Donovan Mitchell added 22 points as secondary scorer",
        "Raptors shot just 42.9% from the field"
      ],
      debateAngle: "Is Evan Mobley's two-way dominance being overshadowed by flashier stars around the league?",
      suggestedQuote: "Mobley dominated both ends with 24 points on 62.5% shooting while adding 10 rebounds and 3 blocks in Cleveland's convincing road victory.",
      relevantPlayers: ["Evan Mobley", "Donovan Mitchell", "Scottie Barnes"]
    },
    
    {
      topic: "Tonight's Must-Watch Games Preview",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "Celtics vs 76ers - 7:00 PM ET on Peacock",
        "Boston 56-26 vs Philadelphia 45-37",
        "Tatum vs Embiid marquee matchup with seeding implications",
        "Lakers vs Rockets - 10:30 PM ET on NBC",
        "Spurs vs Trail Blazers - 8:00 PM ET on NBC",
        "3 games, all with playoff positioning consequences"
      ],
      debateAngle: "Which tonight's game has the highest stakes for playoff positioning and championship hopes?",
      suggestedQuote: "Boston hosts Philadelphia in a crucial Eastern Conference battle with massive playoff seeding implications for both teams.",
      relevantPlayers: ["Jayson Tatum", "Joel Embiid", "Anthony Davis", "Victor Wembanyama"]
    }
  ],
  
  coldOpen: "Two seconds left at Madison Square Garden. Trae Young with the ball. Jalen Brunson draped all over him. Step-back three... BANG! The Garden goes silent. Meanwhile in Denver, Anthony Edwards just dropped 32 to snap the Nuggets' 13-game streak. Sunday night delivered playoff chaos, clutch heroics, and seismic shifts in both conferences. This is Hoops Intel, where the game never stops, and neither do we. Let's dive in.",
  
  socialClip: "30-second clip of Trae Young's step-back three with 8.4 seconds left, featuring the crowd reaction and Young's celebration. Overlay text: 'ICE COLD AT MSG' with Hawks vs Knicks final score. End with Young's post-game quote about performing in hostile environments.",
  
  tweetThread: [
    "🧵 SUNDAY NIGHT CHAOS: Two massive road upsets just reshuffled the entire playoff picture. Trae Young's dagger at MSG and Ant-Man ending Denver's 13-game streak - let's break it down...",
    
    "🎯 CLUTCH GENE: Trae Young buried a step-back three over Brunson with 8.4 seconds left to stun Madison Square Garden. 28 points, 9 assists, 6-of-11 from deep in the most hostile environment. Hawks jump to 5th place tie in the East.",
    
    "🔥 STREAK SNAPPER: Anthony Edwards exploded for 32 points on 60% three-point shooting to end Denver's season-high 13-game winning streak. The Nuggets looked gassed after their historic run - concerning timing with playoffs approaching.",
    
    "📊 SEEDING CHAOS: These upsets completely reshuffled playoff positioning. 5 Eastern Conference teams within 2 games for seeds 5-9. Every remaining game carries championship implications with just days left in the regular season.",
    
    "🎙️ TONIGHT'S INTEL: Celtics-76ers (7 PM), Spurs-Blazers (8 PM), Lakers-Rockets (10:30 PM). All with massive seeding stakes. Full breakdown on today's pod - link in bio 🎧"
  ]
};
