// Watch Priority Ranker — Tonight's games ranked by watchability
// Data sourced from gamePreviews in pulseData.ts

export interface WatchableGame {
  rank: number;
  homeTeam: string;
  awayTeam: string;
  time: string;
  tv: string;
  watchScore: number; // 0-100
  factors: {
    starPower: number; // 0-20
    playoffImplications: number; // 0-20
    rivalry: number; // 0-20
    entertainment: number; // 0-20
    storyline: number; // 0-20
  };
  headline: string;
  mustWatch: boolean;
  storyline: string;
  keyMatchup: string;
}

export interface WatchGuideData {
  date: string;
  games: WatchableGame[];
  topPick: { gameIndex: number; reason: string };
  sleeper: { gameIndex: number; reason: string };
  skipIt: { gameIndex: number; reason: string };
}

export const watchGuideData: WatchGuideData = {
  date: "Thursday, March 24, 2026",
  games: [
    {
      rank: 1,
      homeTeam: "CHA",
      awayTeam: "DET",
      time: "7:00 PM ET",
      tv: "ESPN",
      watchScore: 94,
      factors: {
        starPower: 19,
        playoffImplications: 18,
        rivalry: 15,
        entertainment: 20,
        storyline: 20,
      },
      headline: "Cunningham vs. LaMelo -- The East's Must-See Guard Duel",
      mustWatch: true,
      storyline: "The marquee Thursday night matchup. Cade Cunningham is expected to return from back spasms to face LaMelo Ball's surging Hornets. Charlotte (35-34) has won 9 of 12 and is pushing hard for the play-in. Detroit (49-19) leads the entire Eastern Conference and needs Cunningham healthy for the postseason. Two of the league's most electric young guards going head-to-head on national TV. This is appointment television.",
      keyMatchup: "Cade Cunningham vs. LaMelo Ball",
    },
    {
      rank: 2,
      homeTeam: "PHX",
      awayTeam: "NYK",
      time: "9:00 PM ET",
      tv: "League Pass",
      watchScore: 87,
      factors: {
        starPower: 18,
        playoffImplications: 17,
        rivalry: 16,
        entertainment: 18,
        storyline: 18,
      },
      headline: "Brunson Returns to Face Booker's Struggling Suns",
      mustWatch: true,
      storyline: "Jalen Brunson is expected to return from rest for a road trip to Phoenix. The Suns have lost three of their last four and are sliding dangerously in the West standings at 39-30. New York (45-25) has won four of five and the returning Brunson should give them a boost. Devin Booker is averaging 28 points over his last five games. Two elite scorers, one game with real playoff positioning stakes.",
      keyMatchup: "Jalen Brunson vs. Devin Booker",
    },
    {
      rank: 3,
      homeTeam: "ORL",
      awayTeam: "CLE",
      time: "7:30 PM ET",
      tv: "ESPN",
      watchScore: 84,
      factors: {
        starPower: 16,
        playoffImplications: 19,
        rivalry: 17,
        entertainment: 16,
        storyline: 16,
      },
      headline: "Mobley vs. Banchero Round Two -- East Playoff Preview",
      mustWatch: false,
      storyline: "The second Mobley-Banchero matchup this week. Orlando won the first meeting earlier in the week. The Magic (38-30) are fighting to hold the 6-seed while Cleveland (42-27) needs to protect the 4-seed. Both big men have been dominant -- this is a potential first-round playoff preview with real seeding consequences.",
      keyMatchup: "Evan Mobley vs. Paolo Banchero",
    },
    {
      rank: 4,
      homeTeam: "SAS",
      awayTeam: "LAC",
      time: "8:30 PM ET",
      tv: "League Pass",
      watchScore: 79,
      factors: {
        starPower: 19,
        playoffImplications: 15,
        rivalry: 12,
        entertainment: 17,
        storyline: 16,
      },
      headline: "Wemby Returns from Rest to Face Kawhi's Minutes Restriction",
      mustWatch: false,
      storyline: "Victor Wembanyama returns from his rest night to face Kawhi Leonard, who played 26 limited minutes in New Orleans. San Antonio (51-18) is dominant at home. The Clippers (35-34) are barely above .500 and can't afford to lose if they want to stay in the play-in picture. Kawhi's minutes restriction means this one could get away from LA quickly.",
      keyMatchup: "Victor Wembanyama vs. Kawhi Leonard",
    },
    {
      rank: 5,
      homeTeam: "HOU",
      awayTeam: "POR",
      time: "8:00 PM ET",
      tv: "League Pass",
      watchScore: 68,
      factors: {
        starPower: 15,
        playoffImplications: 16,
        rivalry: 10,
        entertainment: 14,
        storyline: 13,
      },
      headline: "Durant Looks to Snap Rockets' Slide Against Desperate Portland",
      mustWatch: false,
      storyline: "Houston (41-27) looks to bounce back after consecutive losses to the Lakers. Kevin Durant has been brilliant despite the team's recent slide. Portland (34-36) is fighting for play-in positioning after their win in Indiana. The Rockets need a statement win to stop the bleeding. Portland needs every W they can get.",
      keyMatchup: "Kevin Durant vs. Deni Avdija",
    },
    {
      rank: 6,
      homeTeam: "OKC",
      awayTeam: "MIL",
      time: "8:00 PM ET",
      tv: "League Pass",
      watchScore: 62,
      factors: {
        starPower: 16,
        playoffImplications: 8,
        rivalry: 10,
        entertainment: 15,
        storyline: 13,
      },
      headline: "SGA Chases 131 vs. Giannis-less Bucks",
      mustWatch: false,
      storyline: "The Thunder go for their 12th straight win against a depleted Milwaukee team missing Giannis and Turner. OKC (55-15) is running away with the West. SGA's streak is at 130 consecutive 20-point games. The Bucks (28-41) are fading fast. Watch for SGA's streak and little else -- this one should be a blowout.",
      keyMatchup: "Shai Gilgeous-Alexander vs. Kevin Porter Jr.",
    },
    {
      rank: 7,
      homeTeam: "GSW",
      awayTeam: "TOR",
      time: "10:00 PM ET",
      tv: "League Pass",
      watchScore: 55,
      factors: {
        starPower: 13,
        playoffImplications: 14,
        rivalry: 8,
        entertainment: 12,
        storyline: 8,
      },
      headline: "Curry-less Warriors Host Ingram's Surging Raptors",
      mustWatch: false,
      storyline: "The Warriors (33-36) host Toronto without Curry for the second straight game. Golden State dropped below .500 in Boston and faces another tough opponent. Brandon Ingram has scored 28 in three straight for the Raptors (39-29). The Warriors are teetering -- this is a late-night game that could officially end Golden State's season.",
      keyMatchup: "Brandon Ingram vs. Brandin Podziemski",
    },
  ],
  topPick: {
    gameIndex: 0,
    reason: "Cunningham vs. LaMelo on ESPN -- two of the league's most electrifying guards in a game with real Eastern Conference implications. Cade returns from back spasms. LaMelo is on an absolute tear. This is the game of the night.",
  },
  sleeper: {
    gameIndex: 4,
    reason: "Portland is playing desperate basketball right now and Durant loves these 'prove it' games after losses. The Blazers are scrappy enough to keep this close, and a hungry KD is always worth watching.",
  },
  skipIt: {
    gameIndex: 5,
    reason: "OKC by 25. SGA will score his 20 in the first half and sit. Milwaukee without Giannis is an extended summer league audition. Unless you're tracking the consecutive 20-point game record, find something better to do with your evening.",
  },
};
