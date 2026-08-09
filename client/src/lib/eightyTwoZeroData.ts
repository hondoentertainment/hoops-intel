// 82-0 Challenge — team/era player pools
// Stat lines are representative per-game averages for that player's run with
// that franchise in that era (steals/blocks pre-1974 are historical estimates —
// the league didn't record them, and the sim needs a number).

export type EraKey = "60s70s" | "80s" | "90s" | "00s" | "10s" | "20s";

export const ERA_LABELS: Record<EraKey, string> = {
  "60s70s": "1960s–70s",
  "80s": "1980s",
  "90s": "1990s",
  "00s": "2000s",
  "10s": "2010s",
  "20s": "2020s",
};

export type Position = "G" | "F" | "C";

export interface EraPlayer {
  name: string;
  pos: Position;
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
}

export interface TeamEraPool {
  team: string;
  era: EraKey;
  players: EraPlayer[];
}

const p = (name: string, pos: Position, pts: number, reb: number, ast: number, stl: number, blk: number): EraPlayer => ({ name, pos, pts, reb, ast, stl, blk });

export const TEAM_ERA_POOLS: TeamEraPool[] = [
  { team: "ATL", era: "80s", players: [p("Dominique Wilkins", "F", 26.4, 6.9, 2.6, 1.3, 0.6), p("Doc Rivers", "G", 12.0, 3.0, 8.0, 2.0, 0.1), p("Tree Rollins", "C", 8.4, 7.2, 0.8, 0.5, 2.6)] },
  { team: "ATL", era: "20s", players: [p("Trae Young", "G", 25.5, 3.1, 9.5, 1.1, 0.1), p("Dejounte Murray", "G", 20.5, 5.3, 6.1, 1.5, 0.3), p("Jalen Johnson", "F", 16.0, 8.5, 3.5, 1.2, 0.8)] },
  { team: "BOS", era: "60s70s", players: [p("Bill Russell", "C", 15.1, 22.5, 4.3, 1.0, 3.5), p("Bob Cousy", "G", 18.4, 5.2, 7.5, 1.0, 0.1), p("John Havlicek", "F", 20.8, 6.3, 4.8, 1.2, 0.3)] },
  { team: "BOS", era: "80s", players: [p("Larry Bird", "F", 24.3, 10.0, 6.3, 1.7, 0.8), p("Kevin McHale", "F", 17.9, 7.3, 1.7, 0.4, 1.7), p("Robert Parish", "C", 14.5, 9.5, 1.4, 0.7, 1.5)] },
  { team: "BOS", era: "20s", players: [p("Jayson Tatum", "F", 27.0, 8.1, 4.6, 1.0, 0.6), p("Jaylen Brown", "G", 24.5, 5.5, 3.5, 1.1, 0.4), p("Derrick White", "G", 16.0, 4.0, 5.0, 1.0, 1.0)] },
  { team: "BRK", era: "00s", players: [p("Jason Kidd", "G", 14.9, 7.2, 9.1, 2.2, 0.3), p("Vince Carter", "G", 23.6, 5.8, 4.7, 1.2, 0.6), p("Kenyon Martin", "F", 15.0, 7.4, 2.0, 1.2, 1.1)] },
  { team: "BRK", era: "20s", players: [p("Kevin Durant", "F", 29.0, 7.2, 5.8, 0.8, 1.4), p("Kyrie Irving", "G", 27.0, 4.8, 5.7, 1.3, 0.6), p("James Harden", "G", 24.0, 8.0, 10.5, 1.3, 0.7)] },
  { team: "CHA", era: "90s", players: [p("Larry Johnson", "F", 19.6, 8.8, 4.3, 0.8, 0.4), p("Alonzo Mourning", "C", 21.3, 10.2, 1.2, 0.7, 3.2), p("Muggsy Bogues", "G", 8.8, 2.7, 8.8, 1.7, 0.0)] },
  { team: "CHA", era: "20s", players: [p("LaMelo Ball", "G", 22.5, 6.0, 7.5, 1.5, 0.3), p("Miles Bridges", "F", 20.0, 7.0, 3.5, 0.9, 0.6), p("Mark Williams", "C", 12.0, 9.5, 1.0, 0.7, 1.1)] },
  { team: "CHI", era: "90s", players: [p("Michael Jordan", "G", 30.4, 6.3, 5.4, 2.5, 0.9), p("Scottie Pippen", "F", 19.0, 6.9, 5.9, 2.1, 0.9), p("Dennis Rodman", "F", 5.2, 15.3, 2.9, 0.5, 0.4)] },
  { team: "CHI", era: "10s", players: [p("Derrick Rose", "G", 25.0, 4.1, 7.7, 1.0, 0.6), p("Jimmy Butler", "F", 20.9, 5.3, 4.3, 1.7, 0.6), p("Joakim Noah", "C", 12.6, 11.3, 5.4, 1.2, 1.5)] },
  { team: "CLE", era: "00s", players: [p("LeBron James", "F", 27.8, 7.0, 6.9, 1.8, 0.9), p("Zydrunas Ilgauskas", "C", 15.0, 8.0, 1.2, 0.5, 1.6), p("Mo Williams", "G", 15.5, 3.0, 5.0, 1.0, 0.1)] },
  { team: "CLE", era: "20s", players: [p("Donovan Mitchell", "G", 27.0, 4.5, 5.0, 1.4, 0.4), p("Darius Garland", "G", 20.0, 2.7, 7.5, 1.3, 0.1), p("Evan Mobley", "F", 15.5, 9.0, 3.0, 0.9, 1.5)] },
  { team: "DAL", era: "00s", players: [p("Dirk Nowitzki", "F", 25.0, 9.5, 3.0, 1.0, 1.0), p("Steve Nash", "G", 15.5, 3.0, 7.3, 1.0, 0.1), p("Michael Finley", "G", 20.0, 5.5, 3.5, 1.1, 0.4)] },
  { team: "DAL", era: "20s", players: [p("Luka Doncic", "G", 28.5, 9.0, 8.5, 1.2, 0.5), p("Cooper Flagg", "F", 18.0, 7.0, 3.5, 1.2, 1.0), p("Dereck Lively II", "C", 9.0, 7.5, 1.2, 0.6, 1.6)] },
  { team: "DEN", era: "80s", players: [p("Alex English", "F", 25.9, 5.6, 4.1, 1.1, 0.4), p("Fat Lever", "G", 17.0, 8.0, 7.5, 2.2, 0.2), p("Dan Issel", "C", 20.0, 7.5, 2.4, 0.7, 0.6)] },
  { team: "DEN", era: "20s", players: [p("Nikola Jokic", "C", 26.5, 12.0, 8.5, 1.3, 0.8), p("Jamal Murray", "G", 21.0, 4.0, 6.5, 1.0, 0.3), p("Aaron Gordon", "F", 15.0, 6.5, 3.0, 0.8, 0.8)] },
  { team: "DET", era: "80s", players: [p("Isiah Thomas", "G", 19.2, 3.6, 9.3, 1.9, 0.3), p("Joe Dumars", "G", 16.1, 2.2, 4.5, 0.9, 0.1), p("Bill Laimbeer", "C", 12.9, 9.7, 2.0, 0.7, 0.9)] },
  { team: "DET", era: "00s", players: [p("Chauncey Billups", "G", 16.5, 3.1, 6.2, 1.0, 0.2), p("Richard Hamilton", "G", 18.5, 3.2, 3.4, 0.7, 0.2), p("Ben Wallace", "C", 6.5, 12.5, 1.5, 1.5, 2.5)] },
  { team: "DET", era: "20s", players: [p("Cade Cunningham", "G", 24.0, 6.0, 9.0, 1.3, 0.5), p("Jaden Ivey", "G", 17.5, 4.0, 4.5, 0.9, 0.4), p("Jalen Duren", "C", 14.0, 11.0, 2.0, 0.7, 1.2)] },
  { team: "GSW", era: "90s", players: [p("Tim Hardaway", "G", 19.8, 3.8, 9.3, 1.9, 0.2), p("Chris Mullin", "F", 25.1, 5.4, 4.0, 1.9, 0.6), p("Mitch Richmond", "G", 22.0, 5.9, 4.6, 1.2, 0.4)] },
  { team: "GSW", era: "10s", players: [p("Stephen Curry", "G", 26.4, 4.6, 6.6, 1.7, 0.2), p("Klay Thompson", "G", 20.5, 3.5, 2.5, 0.9, 0.5), p("Draymond Green", "F", 9.0, 7.5, 6.5, 1.4, 1.1)] },
  { team: "HOU", era: "90s", players: [p("Hakeem Olajuwon", "C", 26.1, 11.4, 3.2, 1.7, 3.4), p("Clyde Drexler", "G", 19.9, 6.0, 5.4, 1.8, 0.6), p("Robert Horry", "F", 10.0, 5.5, 3.0, 1.4, 0.9)] },
  { team: "HOU", era: "00s", players: [p("Yao Ming", "C", 19.0, 9.2, 1.6, 0.4, 1.9), p("Tracy McGrady", "G", 24.4, 5.5, 5.6, 1.3, 0.6), p("Shane Battier", "F", 9.0, 5.0, 2.0, 1.0, 1.0)] },
  { team: "IND", era: "90s", players: [p("Reggie Miller", "G", 19.5, 3.0, 3.2, 1.1, 0.2), p("Rik Smits", "C", 14.8, 6.1, 1.5, 0.4, 1.1), p("Mark Jackson", "G", 8.0, 4.0, 8.0, 1.0, 0.1)] },
  { team: "IND", era: "20s", players: [p("Tyrese Haliburton", "G", 20.5, 3.5, 10.5, 1.2, 0.6), p("Pascal Siakam", "F", 20.0, 7.0, 3.5, 0.9, 0.4), p("Myles Turner", "C", 15.5, 7.0, 1.5, 0.8, 2.2)] },
  { team: "LAC", era: "10s", players: [p("Chris Paul", "G", 18.8, 4.4, 9.8, 2.3, 0.1), p("Blake Griffin", "F", 21.5, 9.5, 4.2, 1.0, 0.5), p("DeAndre Jordan", "C", 10.0, 13.5, 1.0, 0.6, 1.8)] },
  { team: "LAC", era: "20s", players: [p("Kawhi Leonard", "F", 24.5, 6.3, 3.8, 1.6, 0.6), p("Paul George", "F", 23.0, 6.0, 4.5, 1.5, 0.4), p("Ivica Zubac", "C", 12.0, 9.5, 1.5, 0.3, 1.1)] },
  { team: "LAL", era: "60s70s", players: [p("Jerry West", "G", 27.0, 5.8, 6.7, 2.2, 0.7), p("Elgin Baylor", "F", 27.4, 13.5, 4.3, 1.0, 0.3), p("Wilt Chamberlain", "C", 17.7, 19.2, 4.3, 0.5, 3.0)] },
  { team: "LAL", era: "80s", players: [p("Magic Johnson", "G", 19.5, 7.2, 11.2, 1.9, 0.4), p("Kareem Abdul-Jabbar", "C", 22.0, 8.0, 3.0, 0.8, 2.2), p("James Worthy", "F", 17.6, 5.1, 3.0, 1.1, 0.7)] },
  { team: "LAL", era: "00s", players: [p("Shaquille O'Neal", "C", 27.0, 11.8, 3.1, 0.6, 2.5), p("Kobe Bryant", "G", 25.0, 5.3, 4.7, 1.5, 0.6), p("Pau Gasol", "F", 18.5, 9.5, 3.5, 0.5, 1.6)] },
  { team: "LAL", era: "20s", players: [p("LeBron James", "F", 25.5, 7.8, 7.8, 1.2, 0.6), p("Anthony Davis", "C", 24.5, 11.0, 3.0, 1.2, 2.2), p("Austin Reaves", "G", 16.0, 4.5, 5.5, 0.9, 0.3)] },
  { team: "MEM", era: "10s", players: [p("Marc Gasol", "C", 15.0, 8.0, 3.5, 0.9, 1.4), p("Mike Conley", "G", 15.5, 3.0, 6.0, 1.5, 0.2), p("Zach Randolph", "F", 17.0, 10.5, 2.0, 0.8, 0.2)] },
  { team: "MEM", era: "20s", players: [p("Ja Morant", "G", 25.0, 5.5, 8.0, 1.1, 0.3), p("Jaren Jackson Jr.", "F", 20.0, 6.5, 1.5, 1.0, 1.9), p("Desmond Bane", "G", 20.0, 4.5, 4.0, 1.0, 0.4)] },
  { team: "MIA", era: "10s", players: [p("LeBron James", "F", 26.9, 7.6, 6.9, 1.7, 0.6), p("Dwyane Wade", "G", 22.0, 4.8, 5.6, 1.5, 0.8), p("Chris Bosh", "F", 18.0, 7.3, 2.0, 0.9, 1.0)] },
  { team: "MIA", era: "20s", players: [p("Jimmy Butler", "F", 21.0, 6.0, 5.5, 1.6, 0.3), p("Bam Adebayo", "C", 19.0, 10.0, 3.5, 1.1, 0.8), p("Tyler Herro", "G", 20.0, 5.5, 4.5, 0.8, 0.1)] },
  { team: "MIL", era: "60s70s", players: [p("Kareem Abdul-Jabbar", "C", 30.4, 15.3, 4.3, 1.1, 3.5), p("Oscar Robertson", "G", 16.3, 4.9, 7.5, 1.1, 0.1), p("Bob Dandridge", "F", 18.6, 7.0, 2.5, 1.0, 0.4)] },
  { team: "MIL", era: "20s", players: [p("Giannis Antetokounmpo", "F", 30.5, 11.5, 6.0, 1.0, 1.1), p("Damian Lillard", "G", 24.5, 4.5, 7.0, 1.0, 0.3), p("Brook Lopez", "C", 13.0, 5.0, 1.5, 0.6, 2.4)] },
  { team: "MIN", era: "00s", players: [p("Kevin Garnett", "F", 22.4, 12.4, 4.7, 1.4, 1.7), p("Sam Cassell", "G", 17.5, 3.0, 6.5, 1.2, 0.1), p("Latrell Sprewell", "G", 15.0, 4.0, 3.0, 1.0, 0.2)] },
  { team: "MIN", era: "20s", players: [p("Anthony Edwards", "G", 26.0, 5.5, 5.0, 1.3, 0.6), p("Karl-Anthony Towns", "C", 23.0, 11.0, 3.5, 0.7, 1.3), p("Rudy Gobert", "C", 13.0, 12.0, 1.3, 0.7, 1.9)] },
  { team: "NOP", era: "10s", players: [p("Anthony Davis", "C", 23.5, 10.5, 2.0, 1.3, 2.4), p("Jrue Holiday", "G", 17.0, 4.0, 7.0, 1.6, 0.6), p("Tyreke Evans", "G", 17.0, 5.0, 6.5, 1.3, 0.4)] },
  { team: "NOP", era: "20s", players: [p("Zion Williamson", "F", 25.0, 7.0, 4.5, 1.0, 0.6), p("Brandon Ingram", "F", 22.5, 5.5, 5.0, 0.7, 0.5), p("CJ McCollum", "G", 21.0, 4.0, 5.0, 0.9, 0.5)] },
  { team: "NYK", era: "60s70s", players: [p("Walt Frazier", "G", 19.3, 6.1, 6.3, 2.0, 0.2), p("Willis Reed", "C", 18.7, 12.9, 1.8, 0.6, 1.1), p("Earl Monroe", "G", 16.0, 3.5, 4.0, 1.0, 0.2)] },
  { team: "NYK", era: "90s", players: [p("Patrick Ewing", "C", 24.0, 11.0, 2.2, 1.0, 2.7), p("John Starks", "G", 15.0, 2.8, 5.0, 1.2, 0.1), p("Charles Oakley", "F", 10.0, 10.0, 2.5, 1.3, 0.3)] },
  { team: "NYK", era: "20s", players: [p("Jalen Brunson", "G", 28.0, 3.6, 6.7, 0.9, 0.2), p("Karl-Anthony Towns", "C", 21.0, 11.0, 3.1, 0.7, 0.8), p("OG Anunoby", "F", 16.5, 4.5, 2.2, 1.5, 0.7)] },
  { team: "OKC", era: "90s", players: [p("Gary Payton", "G", 19.0, 4.5, 7.5, 2.2, 0.2), p("Shawn Kemp", "F", 16.5, 9.5, 2.0, 1.3, 1.4), p("Detlef Schrempf", "F", 16.5, 6.5, 3.5, 0.8, 0.2)] },
  { team: "OKC", era: "10s", players: [p("Kevin Durant", "F", 28.0, 7.5, 4.0, 1.3, 1.1), p("Russell Westbrook", "G", 24.0, 7.0, 8.5, 1.8, 0.3), p("Serge Ibaka", "F", 12.5, 7.5, 0.8, 0.5, 2.7)] },
  { team: "OKC", era: "20s", players: [p("Shai Gilgeous-Alexander", "G", 31.2, 5.5, 6.1, 2.0, 0.9), p("Jalen Williams", "F", 20.0, 5.5, 5.0, 1.3, 0.6), p("Chet Holmgren", "C", 16.5, 8.0, 2.5, 0.7, 2.4)] },
  { team: "ORL", era: "90s", players: [p("Shaquille O'Neal", "C", 27.2, 12.5, 2.4, 0.7, 2.8), p("Penny Hardaway", "G", 19.0, 4.5, 6.5, 1.9, 0.5), p("Nick Anderson", "G", 15.5, 5.0, 3.0, 1.5, 0.4)] },
  { team: "ORL", era: "20s", players: [p("Paolo Banchero", "F", 24.0, 7.0, 5.5, 0.9, 0.6), p("Franz Wagner", "F", 21.5, 5.5, 4.5, 1.1, 0.4), p("Jalen Suggs", "G", 14.0, 3.5, 3.5, 1.4, 0.5)] },
  { team: "PHI", era: "80s", players: [p("Julius Erving", "F", 24.0, 7.0, 4.0, 1.8, 1.5), p("Moses Malone", "C", 23.0, 13.0, 1.5, 0.9, 1.4), p("Maurice Cheeks", "G", 12.0, 3.0, 7.0, 2.2, 0.3)] },
  { team: "PHI", era: "00s", players: [p("Allen Iverson", "G", 28.0, 4.0, 6.0, 2.3, 0.2), p("Dikembe Mutombo", "C", 11.7, 12.4, 1.0, 0.4, 2.5), p("Eric Snow", "G", 9.8, 2.5, 6.6, 1.5, 0.1)] },
  { team: "PHI", era: "20s", players: [p("Joel Embiid", "C", 30.5, 11.0, 4.2, 1.1, 1.7), p("Tyrese Maxey", "G", 25.5, 3.5, 6.0, 1.0, 0.4), p("Kelly Oubre Jr.", "F", 15.0, 5.5, 1.5, 1.1, 0.5)] },
  { team: "PHX", era: "90s", players: [p("Charles Barkley", "F", 23.5, 11.5, 4.5, 1.5, 0.9), p("Kevin Johnson", "G", 18.5, 3.5, 9.5, 1.5, 0.2), p("Dan Majerle", "G", 15.0, 5.0, 3.5, 1.5, 0.3)] },
  { team: "PHX", era: "20s", players: [p("Devin Booker", "G", 27.0, 4.5, 6.5, 1.0, 0.3), p("Bradley Beal", "G", 18.0, 4.0, 5.0, 1.0, 0.4), p("Deandre Ayton", "C", 17.0, 10.5, 1.5, 0.6, 0.8)] },
  { team: "POR", era: "60s70s", players: [p("Bill Walton", "C", 17.1, 13.2, 4.4, 0.8, 2.5), p("Maurice Lucas", "F", 20.0, 9.0, 3.0, 1.0, 0.7), p("Lionel Hollins", "G", 15.0, 3.0, 4.5, 1.9, 0.3)] },
  { team: "POR", era: "90s", players: [p("Clyde Drexler", "G", 21.5, 6.5, 5.5, 1.9, 0.7), p("Terry Porter", "G", 15.5, 3.5, 6.5, 1.4, 0.1), p("Buck Williams", "F", 10.0, 8.5, 1.2, 0.7, 0.6)] },
  { team: "POR", era: "10s", players: [p("Damian Lillard", "G", 24.0, 4.2, 6.5, 1.0, 0.3), p("CJ McCollum", "G", 21.0, 3.5, 3.5, 0.9, 0.4), p("Jusuf Nurkic", "C", 14.5, 9.5, 2.5, 0.9, 1.2)] },
  { team: "SAC", era: "00s", players: [p("Chris Webber", "F", 24.5, 10.5, 4.5, 1.4, 1.5), p("Peja Stojakovic", "F", 19.5, 5.5, 2.0, 1.1, 0.2), p("Mike Bibby", "G", 15.5, 3.0, 5.5, 1.1, 0.1)] },
  { team: "SAC", era: "20s", players: [p("De'Aaron Fox", "G", 25.0, 4.5, 6.2, 1.5, 0.4), p("Domantas Sabonis", "C", 19.5, 13.0, 7.0, 0.9, 0.5), p("Keegan Murray", "F", 14.0, 5.5, 1.5, 0.8, 0.7)] },
  { team: "SAS", era: "90s", players: [p("David Robinson", "C", 25.0, 11.5, 3.0, 1.5, 3.3), p("Sean Elliott", "F", 16.0, 4.5, 2.5, 0.8, 0.4), p("Avery Johnson", "G", 11.0, 2.0, 7.0, 1.1, 0.1)] },
  { team: "SAS", era: "00s", players: [p("Tim Duncan", "C", 21.5, 11.5, 3.0, 0.8, 2.4), p("Tony Parker", "G", 17.5, 3.0, 6.0, 1.0, 0.1), p("Manu Ginobili", "G", 15.5, 4.0, 4.0, 1.4, 0.3)] },
  { team: "SAS", era: "20s", players: [p("Victor Wembanyama", "C", 25.5, 11.0, 3.8, 1.2, 3.8), p("Stephon Castle", "G", 15.8, 4.5, 4.6, 2.4, 0.4), p("Devin Vassell", "G", 17.0, 4.0, 3.0, 1.0, 0.4)] },
  { team: "TOR", era: "00s", players: [p("Vince Carter", "G", 23.5, 5.2, 4.0, 1.3, 1.1), p("Chris Bosh", "F", 20.0, 9.0, 2.0, 0.8, 1.0), p("Jose Calderon", "G", 10.0, 2.5, 7.0, 0.9, 0.0)] },
  { team: "TOR", era: "10s", players: [p("DeMar DeRozan", "G", 21.0, 4.5, 3.5, 1.0, 0.3), p("Kyle Lowry", "G", 17.5, 4.8, 7.0, 1.4, 0.3), p("Jonas Valanciunas", "C", 12.0, 8.5, 1.0, 0.4, 1.0)] },
  { team: "UTA", era: "90s", players: [p("Karl Malone", "F", 26.5, 10.5, 3.5, 1.3, 0.8), p("John Stockton", "G", 13.5, 2.8, 11.5, 2.2, 0.2), p("Jeff Hornacek", "G", 15.0, 3.0, 4.5, 1.3, 0.2)] },
  { team: "UTA", era: "20s", players: [p("Lauri Markkanen", "F", 24.0, 8.5, 2.0, 0.7, 0.6), p("Collin Sexton", "G", 18.5, 3.0, 4.5, 0.9, 0.1), p("Walker Kessler", "C", 10.0, 10.0, 1.0, 0.5, 2.3)] },
  { team: "WAS", era: "60s70s", players: [p("Elvin Hayes", "F", 21.0, 12.5, 1.5, 0.9, 2.1), p("Wes Unseld", "C", 12.0, 13.5, 3.5, 1.0, 0.6), p("Phil Chenier", "G", 20.0, 3.5, 3.0, 1.3, 0.4)] },
  { team: "WAS", era: "10s", players: [p("John Wall", "G", 19.0, 4.5, 9.0, 1.7, 0.7), p("Bradley Beal", "G", 22.5, 4.0, 4.5, 1.1, 0.4), p("Marcin Gortat", "C", 12.0, 9.5, 1.5, 0.5, 0.7)] },
];

/** Historic buzzsaw opponents — the toughest nights on the simulated schedule. */
export const LEGENDARY_OPPONENTS = [
  "'96 Bulls",
  "'17 Warriors",
  "'86 Celtics",
  "'87 Lakers",
  "'01 Lakers",
  "'83 Sixers",
  "'71 Bucks",
  "'14 Spurs",
  "'08 Celtics",
  "'13 Heat",
  "'67 Sixers",
  "'26 Thunder",
];
