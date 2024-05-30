const mongoose = require("mongoose");

const wrSchema = new mongoose.Schema(
  {
    PlayerName: { type: String, required: true },
    PlayerId: { type: Number, required: true },
    Pos: { type: String, required: true },
    Team: { type: String, required: true },
    RushingYDS: { type: Number, required: true },
    ReceivingRec: { type: Number, required: true },
    ReceivingYDS: { type: Number, required: true },
    ReceivingTD: { type: Number, required: true },
    "2PT": { type: Number, required: true },
    Fum: { type: Number, required: true },
    FanPtsAgainst_pts: { type: Number, required: true },
    TouchCarries: { type: Number, required: true },
    TouchReceptions: { type: Number, required: true },
    Touches: { type: Number, required: true },
    TargetsReceptions: { type: Number, required: true },
    Targets: { type: Number, required: true },
    ReceptionPercentage: { type: Number, required: true },
    RzTarget: { type: Number, required: true },
    RzTouch: { type: Number, required: true },
    RzG2G: { type: Number, required: true },
    Rank: { type: Number, required: true },
    TotalPoints: { type: Number, required: true },
  },
  {
    collection: "WR_2023",
  }
);

const WR_Player = mongoose.model("WR_2023", wrSchema);
module.exports = WR_Player;
