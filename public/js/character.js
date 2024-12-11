function modifierCalc(attr) {
  attr = Number(attr);
  let mod = Math.floor((attr - 10) / 2);
  if (mod > 6) {
    mod = 6;
  } else if (mod < -5) {
    mod = -5;
  }
  return mod;
}

const abilityScores = [
  { scoreId: 'str_score', modId: 'str_modifier' },
  { scoreId: 'dex_score', modId: 'dex_modifier' },
  { scoreId: 'con_score', modId: 'con_modifier' },
  { scoreId: 'int_score', modId: 'int_modifier' },
  { scoreId: 'wis_score', modId: 'wis_modifier' },
  { scoreId: 'cha_score', modId: 'cha_modifier' }
];

const skillAbilityMap = {
  acrobatics: 'dex',
  arcana: 'int',
  athletics: 'str',
  crafting: 'int',
  deception: 'cha',
  diplomacy: 'cha',
  intimidation: 'cha',
  lore1: 'int',
  lore2: 'int',
  medicine: 'wis',
  nature: 'wis',
  occultism: 'int',
  performance: 'cha',
  religion: 'wis',
  society: 'int',
  stealth: 'dex',
  survival: 'wis',
  thievery: 'dex'
};

function calculateClassDC() {
  const base = Number(document.getElementById('class_dc_base')?.value) || 0;
  const keyAbility = document.getElementById('class_dc_key')?.value;
  const profBonus = Number(document.getElementById('class_dc_prof_bonus')?.value) || 0;
  const itemBonus = Number(document.getElementById('class_dc_item_bonus')?.value) || 0;

  const abilityModifiers = {
    STR: Number(document.getElementById('str_modifier')?.value) || 0,
    DEX: Number(document.getElementById('dex_modifier')?.value) || 0,
    CON: Number(document.getElementById('con_modifier')?.value) || 0,
    INT: Number(document.getElementById('int_modifier')?.value) || 0,
    WIS: Number(document.getElementById('wis_modifier')?.value) || 0,
    CHA: Number(document.getElementById('cha_modifier')?.value) || 0
  };

  const keyMod = abilityModifiers[keyAbility] || 0;
  const totalDC = base + keyMod + profBonus + itemBonus;
  const totalClassDCField = document.getElementById('total_class_dc');
  if (totalClassDCField) totalClassDCField.value = totalDC;
}

function calculateAC() {
  const baseAC = Number(document.getElementById('base_ac')?.value) || 0;
  const dexMod = Number(document.getElementById('dexterity_modifier')?.value) || 0;
  const acCap = Number(document.getElementById('ac_cap')?.value) || 0;
  const acProf = Number(document.getElementById('ac_proficiency')?.value) || 0;
  const unarmored = Number(document.getElementById('unarmored_bonus')?.value) || 0;
  const lightArmor = Number(document.getElementById('light_armor_bonus')?.value) || 0;
  const mediumArmor = Number(document.getElementById('medium_armor_bonus')?.value) || 0;
  const heavyArmor = Number(document.getElementById('heavy_armor_bonus')?.value) || 0;
  const acItem = Number(document.getElementById('ac_item_bonus')?.value) || 0;
  const shieldBonus = Number(document.getElementById('shield_bonus')?.value) || 0;

  const totalAC = baseAC + dexMod + acCap + acProf + unarmored + lightArmor + mediumArmor + heavyArmor + acItem + shieldBonus;
  const totalACField = document.getElementById('total_ac');
  if (totalACField) totalACField.value = totalAC;
}

function calculateSkillTotal(skill) {
  const modifier = Number(document.getElementById(`${skill}_modifier`)?.value) || 0;
  const profBonus = Number(document.getElementById(`${skill}_prof_bonus`)?.value) || 0;
  const itemBonus = Number(document.getElementById(`${skill}_item_bonus`)?.value) || 0;
  const otherModifierElement = document.getElementById(`${skill}_other_modifier`);
  const otherModifiers = otherModifierElement ? Number(otherModifierElement.value) || 0 : 0;

  const total = modifier + profBonus + itemBonus + otherModifiers;
  const totalElement = document.getElementById(`${skill}_total`);
  if (totalElement) {
    totalElement.value = total;
  }
}

function calculateAllSkills() {
  const skills = Object.keys(skillAbilityMap);
  skills.forEach(skill => {
    calculateSkillTotal(skill);
  });
}

function calculateMaxHP() {
  const level = Number(document.getElementById('level')?.value) || 1;
  const conMod = Number(document.getElementById('con_modifier')?.value) || 0;
  const classHP = {
    'Fighter': 10,
    'Wizard': 6,
    'Rogue': 8,
    'Cleric': 8,
    'Ranger': 8,
    'Barbarian': 12,
    'Bard': 8,
    'Druid': 8,
    'Monk': 8,
    'Paladin': 10,
    'Sorcerer': 6,
  };
  const classInput = document.getElementById('class');
  const characterClass = classInput ? classInput.value.trim() : 'Fighter';
  const hpPerLevel = classHP[characterClass] || 8;
  const totalMaxHP = (hpPerLevel * level) + (conMod * level);
  const maxHPField = document.getElementById('max_hp');
  if (maxHPField) maxHPField.value = totalMaxHP;
}

function updateSkillModifiers() {
  const skills = Object.keys(skillAbilityMap);
  skills.forEach(skill => {
    const associatedAbility = skillAbilityMap[skill];
    const abilityModifier = Number(document.getElementById(`${associatedAbility}_modifier`)?.value) || 0;
    const skillModifierField = document.getElementById(`${skill}_modifier`);
    if (skillModifierField) {
      skillModifierField.value = abilityModifier;
      calculateSkillTotal(skill);
    }
  });
}

function updateSavingThrowsAndPerception() {
  const conMod = Number(document.getElementById('con_modifier')?.value) || 0;
  const dexMod = Number(document.getElementById('dex_modifier')?.value) || 0;
  const wisMod = Number(document.getElementById('wis_modifier')?.value) || 0;

  const fortConField = document.getElementById('fortitude_con_modifier');
  if (fortConField) {
    fortConField.value = conMod;
  }

  const reflexDexField = document.getElementById('reflex_dex_modifier');
  if (reflexDexField) {
    reflexDexField.value = dexMod;
  }

  const willWisField = document.getElementById('will_wis_modifier');
  if (willWisField) {
    willWisField.value = wisMod;
  }

  const perceptionWisField = document.getElementById('perception_wis_modifier');
  if (perceptionWisField) {
    perceptionWisField.value = wisMod;
  }

  calculateSavingThrowsAndPerception();
}

function calculateSavingThrowsAndPerception() {
  const fortCon = Number(document.getElementById('fortitude_con_modifier')?.value) || 0;
  const fortProf = Number(document.getElementById('fortitude_proficiency')?.value) || 0;
  const fortItem = Number(document.getElementById('fortitude_item_bonus')?.value) || 0;
  const fortOther = Number(document.getElementById('fortitude_other_modifier')?.value) || 0;
  const fortTotal = fortCon + fortProf + fortItem + fortOther;
  const fortTotalField = document.getElementById('fortitude_total');
  if (fortTotalField) fortTotalField.value = fortTotal;

  const refDex = Number(document.getElementById('reflex_dex_modifier')?.value) || 0;
  const refProf = Number(document.getElementById('reflex_proficiency')?.value) || 0;
  const refItem = Number(document.getElementById('reflex_item_bonus')?.value) || 0;
  const refOther = Number(document.getElementById('reflex_other_modifier')?.value) || 0;
  const refTotal = refDex + refProf + refItem + refOther;
  const refTotalField = document.getElementById('reflex_total');
  if (refTotalField) refTotalField.value = refTotal;

  const willWis = Number(document.getElementById('will_wis_modifier')?.value) || 0;
  const willProf = Number(document.getElementById('will_proficiency')?.value) || 0;
  const willItem = Number(document.getElementById('will_item_bonus')?.value) || 0;
  const willOther = Number(document.getElementById('will_other_modifier')?.value) || 0;
  const willTotalVal = willWis + willProf + willItem + willOther;
  const willTotalField = document.getElementById('will_total');
  if (willTotalField) willTotalField.value = willTotalVal;

  const percWis = Number(document.getElementById('perception_wis_modifier')?.value) || 0;
  const percProf = Number(document.getElementById('perception_prof_bonus')?.value) || 0;
  const percItem = Number(document.getElementById('perception_item_bonus')?.value) || 0;
  const percTotalVal = percWis + percProf + percItem;
  const percTotalField = document.getElementById('perception_total');
  if (percTotalField) percTotalField.value = percTotalVal;
}

function initModifierCalculations() {
  abilityScores.forEach(({ scoreId, modId }) => {
    const scoreInput = document.getElementById(scoreId);
    const modInput = document.getElementById(modId);

    if (scoreInput && modInput) {
      modInput.value = modifierCalc(scoreInput.value);

      if (modId === 'dex_modifier') {
        const dexterityModifierField = document.getElementById('dexterity_modifier');
        if (dexterityModifierField) dexterityModifierField.value = modInput.value;
      }

      scoreInput.addEventListener('input', function () {
        const inputValue = scoreInput.value;
        const result = modifierCalc(inputValue);
        modInput.value = result;

        if (modId === 'dex_modifier') {
          const dexterityModifierField = document.getElementById('dexterity_modifier');
          if (dexterityModifierField) dexterityModifierField.value = result;
        }

        updateSkillModifiers();
        updateSavingThrowsAndPerception();

        const classDCKey = document.getElementById('class_dc_key')?.value;
        if (classDCKey && scoreId === `${classDCKey.toLowerCase()}_score`) {
          calculateClassDC();
        }

        if (scoreId === 'dex_score') {
          calculateAC();
        }

        if (scoreId === 'con_score') {
          calculateMaxHP();
        }
      });
    }
  });
}

function initCalculations() {
  const classDCInputs = ['class_dc_base', 'class_dc_key', 'class_dc_prof_bonus', 'class_dc_item_bonus'];
  classDCInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'class_dc_key') {
        element.addEventListener('change', calculateClassDC);
      }
      element.addEventListener('input', calculateClassDC);
    }
  });

  const acInputs = [
    'base_ac', 'dexterity_modifier', 'ac_cap', 'ac_proficiency',
    'unarmored_bonus', 'light_armor_bonus', 'medium_armor_bonus',
    'heavy_armor_bonus', 'ac_item_bonus', 'shield_bonus'
  ];
  acInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', calculateAC);
    }
  });

  const saveInputs = [
    'fortitude_proficiency', 'fortitude_item_bonus', 'fortitude_other_modifier',
    'reflex_proficiency', 'reflex_item_bonus', 'reflex_other_modifier',
    'will_proficiency', 'will_item_bonus', 'will_other_modifier',
    'perception_prof_bonus', 'perception_item_bonus'
  ];
  saveInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', calculateSavingThrowsAndPerception);
    }
  });

  const skills = Object.keys(skillAbilityMap);
  skills.forEach(skill => {
    const profBonus = document.getElementById(`${skill}_prof_bonus`);
    const itemBonus = document.getElementById(`${skill}_item_bonus`);
    const otherModifier = document.getElementById(`${skill}_other_modifier`);

    if (profBonus) {
      profBonus.addEventListener('input', () => calculateSkillTotal(skill));
    }
    if (itemBonus) {
      itemBonus.addEventListener('input', () => calculateSkillTotal(skill));
    }
    if (otherModifier) {
      otherModifier.addEventListener('input', () => calculateSkillTotal(skill));
    }
  });

  const classInput = document.getElementById('class');
  const levelInput = document.getElementById('level');
  const conModifierInput = document.getElementById('con_modifier');

  if (classInput) classInput.addEventListener('input', calculateMaxHP);
  if (levelInput) levelInput.addEventListener('input', calculateMaxHP);
  if (conModifierInput) conModifierInput.addEventListener('input', calculateMaxHP);

  calculateClassDC();
  calculateAC();
  calculateAllSkills();
  calculateMaxHP();
  updateSkillModifiers();
  updateSavingThrowsAndPerception();
}

document.addEventListener('DOMContentLoaded', () => {
  initModifierCalculations();
  initCalculations();
});