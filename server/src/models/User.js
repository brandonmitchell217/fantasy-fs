const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // Add other fields as necessary
  },
  {
    collection: "Users",
  }
);

module.exports = userSchema;
