const mongoose = require("mongoose");

const qbSchema = new mongoose.Schema(
  {
    PlayerName: { type: String, required: true },
    PlayerId: { type: Number, required: true },
    Pos: { type: String, required: true },
    Team: { type: String, required: true },
    PassingYDS: { type: Number, required: true },
    PassingTD: { type: Number, required: true },
    PassingInt: { type: Number, required: true },
    RushingYDS: { type: Number, required: true },
    RushingTD: { type: Number, required: true },
    "2PT": { type: Number, required: true },
    Fum: { type: Number, required: true },
    FanPtsAgainst_pts: { type: Number, required: true },
    TouchCarries: { type: Number, required: true },
    Touches: { type: Number, required: true },
    RzTouch: { type: Number, required: true },
    RzG2G: { type: Number, required: true },
    Rank: { type: Number, required: true },
    TotalPoints: { type: Number, required: true },
  },
  {
    collection: "QB_2023",
  }
);

const QB_Player = mongoose.model("QB_2023", qbSchema);
module.exports = QB_Player;
