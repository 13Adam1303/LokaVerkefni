CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE CharacterSheets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    class TEXT NOT NULL,
    level INTEGER NOT NULL CHECK (level >= 1 AND level <= 20),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

ALTER TABLE CharacterSheets ADD COLUMN max_hp INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN current_hp INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN temporary_hp INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN dying INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN wounded INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN resistances TEXT DEFAULT '';
ALTER TABLE CharacterSheets ADD COLUMN conditions TEXT DEFAULT '';

ALTER TABLE CharacterSheets ADD COLUMN base_ac INTEGER NOT NULL DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN dexterity_modifier INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN ac_cap INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN ac_proficiency INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN unarmored_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN light_armor_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN medium_armor_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN heavy_armor_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN ac_item_bonus INTEGER NOT NULL DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN shield_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN shield_hardness INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN shield_max_hp INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN shield_current_hp INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN shield_bt INTEGER NOT NULL DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN fortitude_con_modifier INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN fortitude_proficiency INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN fortitude_item_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN fortitude_other_modifier INTEGER NOT NULL DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN reflex_dex_modifier INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN reflex_proficiency INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN reflex_item_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN reflex_other_modifier INTEGER NOT NULL DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN will_wis_modifier INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN will_proficiency INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN will_item_bonus INTEGER NOT NULL DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN will_other_modifier INTEGER NOT NULL DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN notes TEXT DEFAULT '';

ALTER TABLE CharacterSheets ADD COLUMN acrobatics_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN arcana_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN athletics_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN crafting_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN deception_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN diplomacy_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN intimidation_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore1_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore2_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN medicine_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN nature_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN occultism_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN performance_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN religion_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN society_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN stealth_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN survival_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN thievery_modifier INTEGER DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN acrobatics_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN arcana_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN athletics_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN crafting_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN deception_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN diplomacy_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN intimidation_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore1_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore2_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN medicine_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN nature_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN occultism_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN performance_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN religion_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN society_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN stealth_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN survival_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN thievery_prof_bonus INTEGER DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN acrobatics_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN arcana_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN athletics_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN crafting_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN deception_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN diplomacy_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN intimidation_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore1_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN lore2_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN medicine_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN nature_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN occultism_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN performance_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN religion_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN society_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN stealth_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN survival_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN thievery_item_bonus INTEGER DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN languages TEXT DEFAULT '';

ALTER TABLE CharacterSheets ADD COLUMN str_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN str_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN dex_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN dex_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN con_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN con_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN int_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN int_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN wis_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN wis_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN cha_score INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN cha_modifier INTEGER DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN class_dc_base INTEGER DEFAULT 10;
ALTER TABLE CharacterSheets ADD COLUMN class_dc_key TEXT DEFAULT 'STR';
ALTER TABLE CharacterSheets ADD COLUMN class_dc_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN class_dc_item_bonus INTEGER DEFAULT 0;

ALTER TABLE CharacterSheets ADD COLUMN perception_wis_modifier INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN perception_prof_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN perception_item_bonus INTEGER DEFAULT 0;
ALTER TABLE CharacterSheets ADD COLUMN senses TEXT DEFAULT '';

ALTER TABLE CharacterSheets ADD COLUMN ancestry TEXT DEFAULT '';
ALTER TABLE CharacterSheets ADD COLUMN heritage TEXT DEFAULT '';
ALTER TABLE CharacterSheets ADD COLUMN size TEXT DEFAULT 'Medium';
ALTER TABLE CharacterSheets ADD COLUMN alignment TEXT DEFAULT 'Neutral';
ALTER TABLE CharacterSheets ADD COLUMN traits TEXT DEFAULT '';
ALTER TABLE CharacterSheets ADD COLUMN deity TEXT DEFAULT '';
