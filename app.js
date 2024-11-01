// Assuming you're using Express and MongoDB
const express = require("express");
const app = express();
const User = require("./models/User");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if username is taken
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already taken" });
  }

  // Create new user if username is available
  const newUser = new User({ username, password });
  await newUser.save();
  res.status(200).json({ message: "User registered successfully" });
});
