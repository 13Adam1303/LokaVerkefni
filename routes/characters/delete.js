const express = require("express");
const db = require("better-sqlite3")("./db/database.db");

const router = express.Router();

router.post("/delete/:id", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");

  const characterId = req.params.id;

  try {
    const result = db.prepare("DELETE FROM CharacterSheets WHERE id = ? AND user_id = ?").run(characterId, req.session.user.id);

    if (result.changes === 0) {
      return res.status(404).send("Character not found or not authorized to delete");
    }

    res.redirect("/characters/dashboard");
  } catch (err) {
    console.error("Error during character deletion:", err.message);
    res.status(500).send("Failed to delete character");
  }
});

module.exports = router;

