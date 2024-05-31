const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Player = require("./src/models/Player");
const QB = require("./src/models/QB");
const RB = require("./src/models/RB");
const WR = require("./src/models/WR");
const TE = require("./src/models/TE");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send("Hello World from API");
});

app.get("/api/players", async (req, res) => {
  try {
    const players = await Player.find({});
    res.status(200).json(players);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/players/:id", async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findOne({ PlayerId: playerId });

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.status(200).json(player);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/players/qb", async (req, res) => {
  try {
    const qb = await QB.find({});
    res.status(200).json(qb);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/players/rb", async (req, res) => {
  try {
    const rb = await RB.find({});
    res.status(200).json(rb);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/players/wr", async (req, res) => {
  try {
    const wr = await WR.find({});
    res.status(200).json(wr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/players/te", async (req, res) => {
  try {
    const te = await TE.find({});
    res.status(200).json(te);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => {
    console.log("connect to mongodb");
    app.listen(3100, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
