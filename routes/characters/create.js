const express = require("express");
const db = require("better-sqlite3")("./db/database.db");

const router = express.Router();

router.get("/create", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");
  res.render("characterCreator", { error: null });
});

router.post("/create", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");

  const {
    name,
    class: charClass,
    level,
    max_hp,
    current_hp,
    temporary_hp,
    dying,
    wounded,
    resistances,
    conditions,
    base_ac,
    dexterity_modifier,
    ac_cap,
    ac_proficiency,
    unarmored_bonus,
    light_armor_bonus,
    medium_armor_bonus,
    heavy_armor_bonus,
    ac_item_bonus,
    shield_bonus,
    shield_hardness,
    shield_max_hp,
    shield_current_hp,
    shield_bt,
    fortitude_con_modifier,
    fortitude_proficiency,
    fortitude_item_bonus,
    fortitude_other_modifier,
    reflex_dex_modifier,
    reflex_proficiency,
    reflex_item_bonus,
    reflex_other_modifier,
    will_wis_modifier,
    will_proficiency,
    will_item_bonus,
    will_other_modifier,
    notes,
    languages,
    senses,
    perception_wis_modifier,
    perception_prof_bonus,
    perception_item_bonus,
    ancestry,
    heritage,
    size,
    alignment,
    traits,
    deity,
    str_score,
    str_modifier,
    dex_score,
    dex_modifier: dex_mod,
    con_score,
    con_modifier,
    int_score,
    int_modifier,
    wis_score,
    wis_modifier,
    cha_score,
    cha_modifier,
    class_dc_base,
    class_dc_key,
    class_dc_prof_bonus,
    class_dc_item_bonus,
    ...skills
  } = req.body;

  const userId = req.session.user.id;

  const skillFields = [
    "acrobatics_modifier", "acrobatics_prof_bonus", "acrobatics_item_bonus",
    "arcana_modifier", "arcana_prof_bonus", "arcana_item_bonus",
    "athletics_modifier", "athletics_prof_bonus", "athletics_item_bonus",
    "crafting_modifier", "crafting_prof_bonus", "crafting_item_bonus",
    "deception_modifier", "deception_prof_bonus", "deception_item_bonus",
    "diplomacy_modifier", "diplomacy_prof_bonus", "diplomacy_item_bonus",
    "intimidation_modifier", "intimidation_prof_bonus", "intimidation_item_bonus",
    "lore1_modifier", "lore1_prof_bonus", "lore1_item_bonus",
    "lore2_modifier", "lore2_prof_bonus", "lore2_item_bonus",
    "medicine_modifier", "medicine_prof_bonus", "medicine_item_bonus",
    "nature_modifier", "nature_prof_bonus", "nature_item_bonus",
    "occultism_modifier", "occultism_prof_bonus", "occultism_item_bonus",
    "performance_modifier", "performance_prof_bonus", "performance_item_bonus",
    "religion_modifier", "religion_prof_bonus", "religion_item_bonus",
    "society_modifier", "society_prof_bonus", "society_item_bonus",
    "stealth_modifier", "stealth_prof_bonus", "stealth_item_bonus",
    "survival_modifier", "survival_prof_bonus", "survival_item_bonus",
    "thievery_modifier", "thievery_prof_bonus", "thievery_item_bonus"
  ];

  const skillValues = skillFields.map(field => skills[field] || 0);

  try {
    const query = `
      INSERT INTO CharacterSheets 
      (user_id, name, "class", level, max_hp, current_hp, temporary_hp, dying, wounded, resistances, conditions, base_ac, dexterity_modifier, 
       ac_cap, ac_proficiency, unarmored_bonus, light_armor_bonus, medium_armor_bonus, heavy_armor_bonus, ac_item_bonus, shield_bonus, 
       shield_hardness, shield_max_hp, shield_current_hp, shield_bt, fortitude_con_modifier, fortitude_proficiency, fortitude_item_bonus, 
       fortitude_other_modifier, reflex_dex_modifier, reflex_proficiency, reflex_item_bonus, reflex_other_modifier, will_wis_modifier, 
       will_proficiency, will_item_bonus, will_other_modifier, notes, languages, senses, ancestry, heritage, size, alignment, traits, deity,
       perception_wis_modifier, perception_prof_bonus, perception_item_bonus,
       str_score, str_modifier, dex_score, dex_modifier, con_score, con_modifier, int_score, int_modifier, wis_score, wis_modifier, cha_score, cha_modifier,
       class_dc_base, class_dc_key, class_dc_prof_bonus, class_dc_item_bonus,
       acrobatics_modifier, acrobatics_prof_bonus, acrobatics_item_bonus,
       arcana_modifier, arcana_prof_bonus, arcana_item_bonus,
       athletics_modifier, athletics_prof_bonus, athletics_item_bonus,
       crafting_modifier, crafting_prof_bonus, crafting_item_bonus,
       deception_modifier, deception_prof_bonus, deception_item_bonus,
       diplomacy_modifier, diplomacy_prof_bonus, diplomacy_item_bonus,
       intimidation_modifier, intimidation_prof_bonus, intimidation_item_bonus,
       lore1_modifier, lore1_prof_bonus, lore1_item_bonus,
       lore2_modifier, lore2_prof_bonus, lore2_item_bonus,
       medicine_modifier, medicine_prof_bonus, medicine_item_bonus,
       nature_modifier, nature_prof_bonus, nature_item_bonus,
       occultism_modifier, occultism_prof_bonus, occultism_item_bonus,
       performance_modifier, performance_prof_bonus, performance_item_bonus,
       religion_modifier, religion_prof_bonus, religion_item_bonus,
       society_modifier, society_prof_bonus, society_item_bonus,
       stealth_modifier, stealth_prof_bonus, stealth_item_bonus,
       survival_modifier, survival_prof_bonus, survival_item_bonus,
       thievery_modifier, thievery_prof_bonus, thievery_item_bonus)
      VALUES (${Array(119).fill('?').join(', ')})`;

    const values = [
      userId,
      name,
      charClass,
      level,
      max_hp,
      current_hp,
      temporary_hp,
      dying,
      wounded,
      resistances,
      conditions,
      base_ac,
      dexterity_modifier,
      ac_cap,
      ac_proficiency,
      unarmored_bonus,
      light_armor_bonus,
      medium_armor_bonus,
      heavy_armor_bonus,
      ac_item_bonus,
      shield_bonus,
      shield_hardness,
      shield_max_hp,
      shield_current_hp,
      shield_bt,
      fortitude_con_modifier,
      fortitude_proficiency,
      fortitude_item_bonus,
      fortitude_other_modifier,
      reflex_dex_modifier,
      reflex_proficiency,
      reflex_item_bonus,
      reflex_other_modifier,
      will_wis_modifier,
      will_proficiency,
      will_item_bonus,
      will_other_modifier,
      notes,
      languages,
      senses || '',
      ancestry || '',
      heritage || '',
      size || 'Medium',
      alignment || 'Neutral',
      traits || '',
      deity || '',
      perception_wis_modifier || 0,
      perception_prof_bonus || 0,
      perception_item_bonus || 0,
      str_score || 10,
      str_modifier || 0,
      dex_score || 10,
      dex_mod || 0, 
      con_score || 10,
      con_modifier || 0,
      int_score || 10,
      int_modifier || 0,
      wis_score || 10,
      wis_modifier || 0,
      cha_score || 10,
      cha_modifier || 0,
      class_dc_base || 10,
      class_dc_key || 'STR',
      class_dc_prof_bonus || 0,
      class_dc_item_bonus || 0,
      ...skillValues
    ];
    const numPlaceholders = (query.match(/\?/g) || []).length;
    if (values.length !== numPlaceholders) {
      throw new Error(`Mismatch between placeholders (${numPlaceholders}) and values (${values.length}).`);
    }

    db.prepare(query).run(values);
    res.redirect("/characters/dashboard");
  } catch (err) {
    console.error("Error during character creation:", err.message);
    res.render("characterCreator", { error: "Failed to create character" });
  }
});

module.exports = router;


