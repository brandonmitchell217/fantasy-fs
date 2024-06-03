const mongoose = require("mongoose");

const userLikeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Common fields for all player types
    PlayerName: { type: String, required: true },
    PlayerId: { type: Number, required: true },
    Pos: { type: String, required: true },
    Team: { type: String, required: true },

    // QB specific fields
    PassingYDS: { type: Number, required: false },
    PassingTD: { type: Number, required: false },
    PassingInt: { type: Number, required: false },

    // Fields common to RB, WR, TE
    RushingYDS: { type: Number, required: false },
    ReceivingRec: { type: Number, required: false },
    ReceivingYDS: { type: Number, required: false },
    ReceivingTD: { type: Number, required: false },
    "2PT": { type: Number, required: false },
    Fum: { type: Number, required: false },
    FanPtsAgainst_pts: { type: Number, required: false },
    TouchCarries: { type: Number, required: false },
    TouchReceptions: { type: Number, required: false },
    Touches: { type: Number, required: false },
    TargetsReceptions: { type: Number, required: false },
    Targets: { type: Number, required: false },
    ReceptionPercentage: { type: Number, required: false },
    RzTarget: { type: Number, required: false },
    RzTouch: { type: Number, required: false },
    RzG2G: { type: Number, required: false },
    Rank: { type: Number, required: false },
    TotalPoints: { type: Number, required: false },
  },
  {
    timestamps: true,
    collection: "UserLikes",
  }
);

// const UserLike = mongoose.model("UserLike", userLikeSchema);
module.exports = userLikeSchema;
