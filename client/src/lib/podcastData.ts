// Podcast Companion — Daily Episode Blueprint
// Last updated: April 11, 2026
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
  date: "April 11, 2026",
  episodeTitle: "PISTONS CROWN THEMSELVES KINGS — Edwards Clutch God — Hawks Shock Cleveland",
  rundown: [
    {
      topic: "Pistons Officially Clinch Eastern Conference Top Seed",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "59-22 record — historic turnaround from lottery to conference leaders",
        "Cade Cunningham: 26 points, 9 assists on 10-16 shooting",
        "Dominated Charlotte 118-100 in wire-to-wire victory",
        "Home-court advantage secured throughout East playoffs",
        "Isaiah Stewart added 22 points, 10 rebounds in supporting role",
        "Pistons shot 52% from field, held Hornets to 38%"
      ],
      debateAngle: "Is this the most shocking rebuild completion in NBA history? From basement dwellers to conference champions in one season — does Cade deserve MVP consideration for this transformation?",
      suggestedQuote: "Detroit's 59-22 record and Eastern Conference top seed is one of the most remarkable turnarounds in NBA history. Cade Cunningham has transformed into a championship-caliber leader, and this Pistons team now has home-court advantage throughout the East playoffs. The rebuild is complete.",
      relevantPlayers: ["Cade Cunningham", "Isaiah Stewart", "Ausar Thompson", "LaMelo Ball"]
    },
    {
      topic: "Anthony Edwards' Clutch Gene Activated",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "35 points on scorching 13-22 shooting from the field",
        "12 fourth-quarter points including game-winning three with 47 seconds left",
        "Led Minnesota comeback from 10-point fourth-quarter deficit",
        "Timberwolves improved to 48-33 in crucial playoff positioning battle",
        "Edwards averaging 28.5 PPG in clutch situations this season",
        "Minnesota now 2.5 games ahead of play-in tournament line"
      ],
      debateAngle: "Has Anthony Edwards officially entered the superstar tier? His clutch performances this season rival anyone in the league — is he ready to carry Minnesota deep into the playoffs as the primary option?",
      suggestedQuote: "Anthony Edwards's 35-point comeback performance against Houston showcased why he's becoming one of the league's most clutch players. His 12 fourth-quarter points, capped by the game-winning three, kept Minnesota's playoff hopes alive. This is the Edwards we expected to see all season.",
      relevantPlayers: ["Anthony Edwards", "Jaden McDaniels", "Karl-Anthony Towns", "Alperen Şengün"]
    },
    {
      topic: "Atlanta's Stunning Upset Changes East Playoff Race",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Hawks demolished Cavaliers 124-102 in shocking blowout victory",
        "Trae Young orchestrated with 28 points, 12 assists on 10-18 shooting",
        "Atlanta shot 51% from field in dominant wire-to-wire performance",
        "Dejounte Murray added 24 points, Clint Capela dominated with 18-14",
        "Cleveland missing Jarrett Allen for third straight game",
        "Hawks moved to 46-35, creating crucial playoff seeding separation"
      ],
      debateAngle: "Are the Hawks the most dangerous low seed in the Eastern Conference? Trae Young showed he can still take over games when motivated — should playoff teams be terrified of facing Atlanta in the first round?",
      suggestedQuote: "Atlanta's 22-point upset of Cleveland might be the most important result of the night for Eastern Conference seeding. Trae Young's 28 and 12 performance showed he can still elevate his game when it matters most. The Hawks just made themselves a dangerous playoff matchup.",
      relevantPlayers: ["Trae Young", "Dejounte Murray", "Clint Capela", "Donovan Mitchell"]
    },
    {
      topic: "Heat's Offensive Explosion and Western Conference Chaos",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "Miami dropped 140 points on Washington behind Herro's 31-point return",
        "Heat connected on 18 three-pointers, shot 58% from the field",
        "Tyler Herro: 7 threes on 11-18 shooting in injury return",
        "Wembanyama: 27 points, 11 rebounds, 4 blocks secures West's 2-seed",
        "Spurs cruised past Dallas 139-120 to lock up playoff positioning",
        "Multiple playoff seeding battles still unresolved with weekend left"
      ],
      debateAngle: "Which conference has the most wide-open playoff race? The East has multiple teams separated by games while the West's middle tier remains completely unpredictable — where will we see the biggest first-round upsets?",
      suggestedQuote: "Miami's 140-point explosion against Washington was exactly what the Heat needed after recent struggles. Tyler Herro's 31 points with seven threes reminded everyone why he was Sixth Man of the Year. This offensive capability makes them a nightmare matchup for anyone.",
      relevantPlayers: ["Tyler Herro", "Jimmy Butler", "Victor Wembanyama", "Devin Vassell"]
    },
    {
      topic: "No Games Tonight Sets Up Epic Weekend Finale",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Rare league-wide rest day before final weekend of regular season",
        "Multiple playoff seeding battles remain unresolved",
        "Eastern Conference positions 4-10 separated by just 8 games",
        "Western Conference play-in race incredibly tight",
        "Key injury updates: Jarrett Allen still day-to-day",
        "Championship contenders getting healthy at perfect time"
      ],
      debateAngle: "Does this rest day benefit contenders more than teams fighting for playoff spots? Veterans can recover while hungry teams lose momentum — who gains the biggest advantage from tonight's break?",
      suggestedQuote: "With no games tonight, teams get a rare chance to rest before the season's final weekend. The playoff picture is taking shape, but several seeding battles remain unresolved. This brief pause gives everyone time to prepare for what should be an electric finish to the regular season.",
      relevantPlayers: ["Jarrett Allen", "Bradley Beal", "Kawhi Leonard", "Robert Williams III"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Welcome back to your daily NBA intelligence briefing. I'm coming at you on April 11th, and holy smokes, do we have some stories to unpack today. The Detroit Pistons just officially crowned themselves kings of the Eastern Conference with a dominant victory that clinched the top seed. Anthony Edwards went full clutch mode with 35 points in a heart-stopping comeback. And the Atlanta Hawks? They just shocked the basketball world with a 22-point beatdown of Cleveland that changes everything in the East playoff race. No games tonight, but trust me — we've got plenty to dive into. Let's get this intelligence rolling!",
  socialClip: "Anthony Edwards clutch takeover sequence — capture his 12 fourth-quarter points including the game-winning three-pointer with 47 seconds left. Overlay with his season clutch stats and Minnesota's playoff positioning battle context. Perfect 90-second clip showing why Edwards is entering the superstar conversation.",
  tweetThread: [
    "🎯 HOOPS INTEL DAILY: Pistons officially clinch East's #1 seed, Edwards goes clutch god mode, Hawks shock Cleveland in 22-point upset! No games tonight but PLENTY to discuss. Thread below 👇",
    "🔥 PISTONS CHAMPIONS: Detroit's 59-22 season is COMPLETE. Cade Cunningham (26-9) leads 118-100 domination of Charlotte to secure home-court throughout East playoffs. Most shocking rebuild in NBA history? 🏆",
    "⚡ EDWARDS CLUTCH GENE: 35 points, 13-22 FG, game-winning three with 47 seconds left! Led Minnesota's comeback from 10 down in 4th to beat Houston 136-132. This man is entering SUPERSTAR territory 🌟",
    "😱 HAWKS UPSET SPECIAL: Atlanta DEMOLISHED Cleveland 124-102 behind Trae's 28-12 masterpiece. Without Jarrett Allen, Cavs got completely outclassed. This changes EVERYTHING in East playoff seeding 🚨",
    "🎙️ Full breakdown on today's Hoops Intel pod — link in bio! Plus: Heat drop 140 on Wizards, Wemby secures West's 2-seed, and why tonight's rest day sets up an EPIC weekend finale. Don't miss it! 📻"
  ]
};
