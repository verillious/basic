var cg = new BasicFantasyCharGenerator();

function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function setSpecialAbilities() {
    var tag = $("#special_abilities");
    tag.html("");
    for (x = 0; x < cg.specialAbilities.length; x++) {
        tag.append("* " + cg.specialAbilities[x] + "<br>");
    }
}

function updateSheet() {
    reloadClassSelect();
    reloadRaceSelect();
    reloadAbilitySelects();
    $("#base_attack_bonus").html(cg.baseAttackBonus);
    $("#melee_attack_bonus").html(cg.getMeleeAttackBonus());
    $("#ranged_attack_bonus").html(cg.getRangedAttackBonus());
    $("#ac_bonus").html(cg.attributes.Dexterity.bonus);
    $("#hit_points").html(cg.getTotalHP());
    $("#spells_per_level").html(cg.spells);
    $("#death").html(cg.getDeathRaySave());
    $("#wands").html(cg.getMagicWandsSave());
    $("#paralysis").html(cg.getParalysisSave());
    $("#breath").html(cg.getDragonBreathSave());
    $("#spells").html(cg.getSpellsSave());
    $("#skeleton").html(cg.turnUndead.skeleton);
    $("#zombie").html(cg.turnUndead.zombie);
    $("#ghoul").html(cg.turnUndead.ghoul);
    $("#wight").html(cg.turnUndead.wight);
    $("#wraith").html(cg.turnUndead.wraith);
    $("#mummy").html(cg.turnUndead.mummy);
    $("#spectre").html(cg.turnUndead.spectre);
    $("#vampire").html(cg.turnUndead.vampire);
    $("#ghost").html(cg.turnUndead.ghost);
    $("#openLocks").html(cg.thiefSkills.openLocks);
    $("#removeTraps").html(cg.thiefSkills.removeTraps);
    $("#pickPockets").html(cg.thiefSkills.pickPockets);
    $("#moveSilently").html(cg.thiefSkills.moveSilently);
    $("#climbWalls").html(cg.thiefSkills.climbWalls);
    $("#hide").html(cg.thiefSkills.hide);
    $("#listen").html(cg.thiefSkills.listen);
    setSpecialAbilities();
}

function reloadRaceSelect() {
    $("#character_race_select option").each(function() {
        if (cg.races[$(this).val()].allowedClasses.indexOf(cg.class.name) === -1) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });
}

function reloadClassSelect() {
    $("#character_class_select option").each(function() {
        if ((cg.classAllowed($(this).val()) === false && !cg.switchPrimary)
            || (cg.classAllowed($(this).val()) === false && $(this).val() == "FighterMage")) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });
}

function reloadAbilitySelects() {
    var abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

    abilities.forEach(function(item) {
        var attr = item;
        $("#character_" + attr + "_select option").each(function() {
            if (cg.abilityAllowed(capitalizeFirstLetter(attr), $(this).val()) === false) {
                $(this).prop("disabled", true);
            } else {
                $(this).prop("disabled", false);
            }
            //if (cg.attributes[capitalizeFirstLetter(attr)].score == $(this).val())
        });
    });
}

function toggleSwitchPrimary() {
    cg.setSwitchPrimary($("#switch_primary").prop("checked"));
    setAttributes();
}

function setAttributes() {
    $("#character_strength_select").val(cg.attributes.Strength.score).change();
    $("#character_dexterity_select").val(cg.attributes.Dexterity.score);
    $("#character_constitution_select").val(cg.attributes.Constitution.score);
    $("#character_intelligence_select").val(cg.attributes.Intelligence.score);
    $("#character_wisdom_select").val(cg.attributes.Wisdom.score);
    $("#character_charisma_select").val(cg.attributes.Charisma.score);
}

$(document).ready(function() {

    cg.setRace("Human");
    cg.setClass("Fighter");
    cg.setLevel(1);
    cg.setAttribute("Strength", 10);
    cg.setAttribute("Dexterity", 10);
    cg.setAttribute("Constitution", 10);
    cg.setAttribute("Intelligence", 10);
    cg.setAttribute("Wisdom", 10);
    cg.setAttribute("Charisma", 10);

    updateSheet();

    $("#roll_ability_scores").click(function() {
        cg.generateScores();
        if (cg.switchPrimary) cg.switchPrimaryAttribute();
        setAttributes();
        updateSheet();
    });

    $("#character_class_select").change(function() {
        cg.setClass($("#character_class_select").val());
        if (cg.switchPrimary) cg.switchPrimaryAttribute();
        setAttributes();
        updateSheet();
    });

    $("#character_level_select").change(function() {
        cg.setLevel($("#character_level_select").val());
        updateSheet();
    });

    $("#character_race_select").change(function() {
        cg.setRace($("#character_race_select").val());

        updateSheet();
    });

    $("#character_strength_select").change(function() {
        cg.setAttribute("Strength", $("#character_strength_select").val());
        updateSheet();
    });

    $("#character_dexterity_select").change(function() {
        cg.setAttribute("Dexterity", $("#character_dexterity_select").val());
        updateSheet();
    });

    $("#character_constitution_select").change(function() {
        cg.setAttribute("Constitution", $("#character_constitution_select").val());
        updateSheet();
    });

    $("#character_wisdom_select").change(function() {
        cg.setAttribute("Wisdom", $("#character_wisdom_select").val());
        updateSheet();
    });

    $("#character_intelligence_select").change(function() {
        cg.setAttribute("Intelligence", $("#character_intelligence_select").val());
        updateSheet();
    });

    $("#character_charisma_select").change(function() {
        cg.setAttribute("Charisma", $("#character_charisma_select").val());
        updateSheet();
    });
});
