const express = require("express");
const db = require("better-sqlite3")("./db/database.db");

const router = express.Router();

router.get("/:id", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");

  const characterId = req.params.id;
  try {
    const character = db.prepare("SELECT * FROM CharacterSheets WHERE id = ? AND user_id = ?").get(characterId, req.session.user.id);

    if (!character) {
      return res.status(404).send("Character not found");
    }

    res.render("viewCharacter", { character });
  } catch (err) {
    console.error("Error loading character:", err.message);
    res.status(500).send("Failed to load character");
  }
});

module.exports = router;

