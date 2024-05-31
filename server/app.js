const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const playerDbUri = process.env.PLAYER_DB_URI || "";
const userProfileDbUri = process.env.USER_PROFILE_DB_URI || "";

const playerDbConnection = mongoose.createConnection(playerDbUri);
const userProfileDbConnection = mongoose.createConnection(userProfileDbUri);

const Player = playerDbConnection.model(
  "Player",
  require("./src/models/Player")
);
const QB = playerDbConnection.model("QB", require("./src/models/QB"));
const RB = playerDbConnection.model("RB", require("./src/models/RB"));
const WR = playerDbConnection.model("WR", require("./src/models/WR"));
const TE = playerDbConnection.model("TE", require("./src/models/TE"));
const User = userProfileDbConnection.model(
  "User",
  require("./src/models/User")
);

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

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

Promise.all([
  playerDbConnection.asPromise(),
  userProfileDbConnection.asPromise(),
])
  .then(() => {
    console.log("Connected to both databases");
    app.listen(3100, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log("Error connecting to databases", err);
  });
