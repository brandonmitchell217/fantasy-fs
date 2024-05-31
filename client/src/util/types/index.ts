export interface Player {
  PlayerName: string;
  PlayerId: number;
  Pos: string;
  Team: string;
  PassingYDS?: number;
  PassingTD?: number;
  PassingInt?: number;
  RushingYDS?: number;
  ReceivingRec?: number;
  ReceivingYDS?: number;
  ReceivingTD?: number;
  "2PT"?: number;
  Fum?: number;
  FanPtsAgainst_pts?: number;
  TouchCarries?: number;
  TouchReceptions?: number;
  Touches?: number;
  TargetsReceptions?: number;
  Targets?: number;
  ReceptionPercentage?: number;
  RzTarget?: number;
  RzTouch?: number;
  RzG2G?: number;
  Rank?: number;
  TotalPoints?: number;
}
