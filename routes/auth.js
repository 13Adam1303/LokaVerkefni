const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("better-sqlite3")("./db/database.db");

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { error: null });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare("SELECT * FROM Users WHERE username = ?").get(username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.render("login", { error: "Invalid username or password" });
  }

  req.session.user = { id: user.id, username: user.username };
  res.redirect("/characters/dashboard");
});

router.get("/register", (req, res) => {
  res.render("register", { error: null });
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    db.prepare("INSERT INTO Users (username, password) VALUES (?, ?)").run(username, hashedPassword);
    res.redirect("/auth/login");
  } catch (err) {
    res.render("register", { error: "Username already taken" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/auth/login");
});

module.exports = router;


