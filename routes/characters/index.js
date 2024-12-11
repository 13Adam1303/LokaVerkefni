const express = require("express");
const db = require("better-sqlite3")("./db/database.db"); 

const createRouter = require("./create");
const editRouter = require("./edit");
const viewRouter = require("./view");
const deleteRouter = require("./delete");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/auth/login");
  }

  try {
    const characters = db
      .prepare("SELECT * FROM CharacterSheets WHERE user_id = ?")
      .all(req.session.user.id);

    res.render("dashboard", { characters, user: req.session.user });
  } catch (err) {
    console.error("Error loading dashboard:", err.message);
    res.status(500).send("Failed to load dashboard");
  }
});

router.use("/", createRouter);
router.use("/", editRouter);
router.use("/", viewRouter);
router.use("/", deleteRouter);

module.exports = router;


