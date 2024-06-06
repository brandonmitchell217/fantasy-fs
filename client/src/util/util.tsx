import { Player } from "./types";

export const filterPlayersByPosition = (
  players: Player[],
  position: string
) => {
  return players.filter((player) => player.Pos === position);
};

export const filterPlayersByTeam = (players: Player[], team: string) => {
  return players.filter((player) => player.Team === team);
};

export const filterPlayersByPositionAndTeam = (
  players: Player[],
  position: string,
  team: string
) => {
  return players.filter(
    (player) => player.Pos === position && player.Team === team
  );
};

export const determinePlayerColor = (team: string) => {
  switch (team) {
    case "ARI":
      return "bg-[#97233F]";
    case "ATL":
      return "bg-[#A71930]";
    case "BAL":
      return "bg-[#241773]";
    case "BUF":
      return "bg-[#00338D]";
    case "CAR":
      return "bg-[#0085CA]";
    case "CHI":
      return "bg-[#0B162A]";
    case "CIN":
      return "bg-[#FB4F14]";
    case "CLE":
      return "bg-[#311D00]";
    case "DAL":
      return "bg-[#041E42]";
    case "DEN":
      return "bg-[#FB4F14]";
    case "DET":
      return "bg-[#0076B6]";
    case "GB":
      return "bg-[#203731]";
    case "HOU":
      return "bg-[#03202F]";
    case "IND":
      return "bg-[#002C5F]";
    case "JAX":
      return "bg-[#101820]";
    case "KC":
      return "bg-[#E31837]";
    case "LV":
      return "bg-[#000000]";
    case "LAC":
      return "bg-[#0072CE]";
    case "LAR":
      return "bg-[#002244]";
    case "MIA":
      return "bg-[#008E97]";
    case "MIN":
      return "bg-[#4F2683]";
    case "NE":
      return "bg-[#002244]";
    case "NO":
      return "bg-[#D3BC8D]";
    case "NYJ":
      return "bg-[#203731]";
    case "PHI":
      return "bg-[#004C54]";
    case "PIT":
      return "bg-[#FFB81C]";
    case "SF":
      return "bg-[#AA0000]";
    case "SEA":
      return "bg-[#002244]";
    case "TB":
      return "bg-[#D50A0A]";
    case "TEN":
      return "bg-[#0C2340]";
    case "WAS":
      return "bg-[#773141]";
    default:
      return "bg-[#000000]";
  }
};

export const playerLabels: string[] = [
  "Pass YDS",
  "Pass TD",
  "Int",
  "Rush YDS",
  "Rush TD",
  "Rec",
  "Rec YDS",
  "Rec TD",
  "2PT",
  "Fum",
  "Pts-Against",
  "TouchCarries",
  "TouchRec",
  "Touches",
  "Targets Rec",
  "Targets",
  "Rec %",
  "RzTarget",
  "RzTouch",
  "RzG2G",
  "Rank",
  "Points",
];

export const extractPlayerStats = (player: Player) => {
  return {
    PassingYDS: player.PassingYDS,
    PassingTD: player.PassingTD,
    PassingInt: player.PassingInt,
    RushingYDS: player.RushingYDS,
    ReceivingRec: player.ReceivingRec,
    ReceivingYDS: player.ReceivingYDS,
    ReceivingTD: player.ReceivingTD,
    "2PT": player["2PT"],
    Fum: player.Fum,
    FanPtsAgainst_pts: player.FanPtsAgainst_pts,
    TouchCarries: player.TouchCarries,
    TouchReceptions: player.TouchReceptions,
    Touches: player.Touches,
    TargetsReceptions: player.TargetsReceptions,
    Targets: player.Targets,
    ReceptionPercentage: player.ReceptionPercentage,
    RzTarget: player.RzTarget,
    RzTouch: player.RzTouch,
    RzG2G: player.RzG2G,
    Rank: player.Rank,
    TotalPoints: player.TotalPoints,
  };
};

export const shortenString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + ".";
};
