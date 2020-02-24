class MothershipCharGenerator {
    constructor() {
        this.switchPrimary = false;
        this.abilityBonuses = [0,0,0,-3,-2,-2,-1,-1,-1,0,0,0,0,1,1,1,2,2,3];
        this.classes = {
            None: {
                name: "Not Set",
            },
            Teamster: {
                name: "Teamster",
                specialAbilities: [
                ]

            }
        };

        this.races = {
            Human: {
                specialAbilities: [
                    "+10% experience point bonus."
                ],
                allowedClasses: ["Fighter", "Mage", "Thief", "Cleric"]
            },
            Dwarf: {
                specialAbilities: [
                    "Darkvision 60'",
                    "Detect slanting passages, traps, shifting walls and new construction on a roll of 1-2 on 1d6"
                ],
                allowedClasses: ["Fighter", "Thief", "Cleric"]
            },
            Elf: {
                specialAbilities: [
                    "Darkvision 60'",
                    "Find secret doors more often than normal (1-2 on 1d6).",
                    "Find secret doors on cursory look (1 on 1d6).",
                    "Immune to paralyzing attack of ghouls.",
                    "Reduce surprise chance by 1 in 1d6."
                ],
                allowedClasses: ["Fighter", "Mage", "Thief", "Cleric", "FighterMage"]
            },
            Halfling: {
                specialAbilities: [
                    "+1 Attack Bonus with ranged weapons.",
                    "+2 AC vs larger than man-sized creatures.",
                    "+1 initiative.",
                    "90% hide in forest terrain. 70% hide elsewhere."
                ],
                allowedClasses: ["Fighter", "Thief", "Cleric"]
            }
        };

        this.class = this.classes["Fighter"];
        this.level = 0;
        this.race = "Human";
        this.baseAttackBonus = 0;
        this.hitDieType = 0;
        this.hitPoints = 0;
        this.spells = "None";
        this.specialAbilities = new Array();
        this.setThiefSkills();

        this.attributes = {
            Strength: {score: 10, bonus: 0},
            Speed: {score: 10, bonus: 0},
            Intellect: {score: 10, bonus: 0},
            Combat: {score: 10, bonus: 0}
        };

        this.saves= {
            Sanity: 0,
            Fear: 0,
            Body: 0,
            Armor: 0,
        };
    }

    setSwitchPrimary(value) {
        this.switchPrimary = value;
        if (this.switchPrimary) this.switchPrimaryAttribute();
    }

    switchPrimaryAttribute() {
        let sorted = Object.keys(this.attributes)
            .map(attr => ({ key: attr, value: this.attributes[attr] }))
            .sort((a, b) => b.value.score - a.value.score);

        switch(this.class.name) {
            case "Fighter":
                if (sorted[0].key != "Strength") this.switchScores("Strength", sorted[0]);
                break;
            case "Mage":
                if (sorted[0].key != "Intelligence") this.switchScores("Intelligence", sorted[0]);
                break;
            case "Thief":
                if (sorted[0].key != "Dexterity") this.switchScores("Dexterity", sorted[0]);
                break;
            case "Cleric":
                if (sorted[0].key != "Wisdom") this.switchScores("Wisdom", sorted[0]);
                break;
        }
    }

    switchScores(firstScoreName, secondScore) {
        let tmp = this.attributes[firstScoreName];
        console.log("Switching Scores: ", {firstScoreName: this.attributes[firstScoreName], "secondScore": this.attributes[secondScore.key], "Temp": tmp});
        this.attributes[firstScoreName] = secondScore.value;
        console.log("Switching Scores: ", {firstScoreName: this.attributes[firstScoreName], "secondScore": this.attributes[secondScore.key], "Temp": tmp});
        this.attributes[secondScore.key] = tmp;
        console.log("Switching Scores: ", {firstScoreName: this.attributes[firstScoreName], "secondScore": this.attributes[secondScore.key], "Temp": tmp});
        console.log("Final Attributes: ", this.attributes);
    }


    setClass(className) {
        if (this.classAllowed(className) === false && !this.switchPrimary) {
            console.log("set class failed");
            return false;
        }
        this.class = this.classes[className];

        this.calculateInfo();
        this.classChanged();
    }

    classChanged() {
        //Do stuff here.
    }

    setLevel(level) {
        if (level >= 0 && level <= 20) {
            this.level = level;
        } else {
            this.level = 0;
        }
        this.calculateInfo();
        this.levelChanged();
    }

    levelChanged() {
        //Do stuff here.
    }

    setRace(race) {
        if (!(race in this.races)) return;
        if (this.races[race].allowedClasses.indexOf(this.class.name) === -1) return;

        this.race = race;
        this.specialAbilities = this.races[race].specialAbilities;
        this.determineHitDieType();
        this.raceChanged();
    }

    raceChanged() {
        //Do stuff here.
    }

    calculateInfo(rerollHitPoints) {
        rerollHitPoints = true;

        this.determineHitDieType();
        if (rerollHitPoints) {
            this.hitPoints = this.rollHitPoints();
        }
        this.hitPoints = this.rollHitPoints();
        this.setSpells();
        this.setThiefSkills();
        this.setBaseAttackBonus();
        this.setSavingThrows();
        this.setTurnUndead();
    }

    classAllowed(className) {
        if (!(className in this.classes)) {
            console.log("classname " + className + " not in classes")
            return false;
        }
        for (var attr in this.classes[className].minAbilities) {
            if (attr in this.classes[className].minAbilities) {
                if (this.attributes[attr].score < this.classes[className].minAbilities[attr]) return false;
            }
        }

        if (this.races[this.race].allowedClasses.indexOf(className) === -1) return false;

        return true;
    }

    abilityAllowed (attr, score) {
        if (attr in this.class.minAbilities) {
            if (score < this.class.minAbilities[attr]) return false;
        }

        return true;
    }

    determineHitDieType() {
        this.hitDieType = this.class.hitDie;
        if (this.race === "Elf" || this.race === "Halfling") {
            if(this.hitDieType > 6) this.hitDieType = 6;
        }
    }

    setBaseAttackBonus() {
        this.baseAttackBonus = this.class.attackBonus[this.level];
    }

    setThiefSkills() {
        this.thiefSkills = {
            openLocks: this.class.thiefSkills.openLocks[this.level],
            removeTraps: this.class.thiefSkills.removeTraps[this.level],
            pickPockets: this.class.thiefSkills.pickPockets[this.level],
            moveSilently: this.class.thiefSkills.moveSilently[this.level],
            climbWalls: this.class.thiefSkills.climbWalls[this.level],
            hide: this.class.thiefSkills.hide[this.level],
            listen: this.class.thiefSkills.listen[this.level]
        };
    }

    setSavingThrows() {
        this.savingThrows.deathRay = this.class.savingThrows.deathRay[this.level];
        this.savingThrows.magicWands = this.class.savingThrows.magicWands[this.level];
        this.savingThrows.paralysis = this.class.savingThrows.paralysis[this.level];
        this.savingThrows.dragonBreath = this.class.savingThrows.dragonBreath[this.level];
        this.savingThrows.spells = this.class.savingThrows.spells[this.level];
    }

    setTurnUndead() {
        this.turnUndead.skeleton = this.class.turnUndead.skeleton[this.level];
        this.turnUndead.zombie = this.class.turnUndead.zombie[this.level];
        this.turnUndead.ghoul = this.class.turnUndead.ghoul[this.level];
        this.turnUndead.wight = this.class.turnUndead.wight[this.level];
        this.turnUndead.wraith = this.class.turnUndead.wraith[this.level];
        this.turnUndead.mummy = this.class.turnUndead.mummy[this.level];
        this.turnUndead.spectre = this.class.turnUndead.spectre[this.level];
        this.turnUndead.vampire = this.class.turnUndead.vampire[this.level];
        this.turnUndead.ghost = this.class.turnUndead.ghost[this.level];
    }

    setSpells() {
        this.spells = this.class.spells[this.level];
    }

    rollHitPoints() {
        var value = 0;
        var tmp = 0;

        for (var x = 1; x <= this.level; ++x) {
            tmp = this.rollDie(this.hitDieType) + this.attributes.Constitution.bonus;
            if (tmp < 1) tmp = 1;
            value += tmp;
        }
        return value;
    }

    getTotalHP() {
        return this.hitPoints;
    }

    setAttribute(attribute, value) {
        if (!(attribute in this.attributes)) return;

        if (value >= 3 && value <= 18) {
            this.attributes[attribute].score = value;
        } else {
            this.attributes[attribute].score = 0;
        }
        this.attributes[attribute].bonus = this.abilityBonuses[this.attributes[attribute].score];

        this.calculateInfo(false);
    }

    generateScores() {
        this.generateAttribute("Strength");
        this.generateAttribute("Dexterity");
        this.generateAttribute("Constitution");
        this.generateAttribute("Wisdom");
        this.generateAttribute("Intelligence");
        this.generateAttribute("Charisma");
    }

    generateAttribute(attr) {
        var oldValue = 0;
        var valid;

        oldValue = this.attributes[attr].score;
        do {
            this.setAttribute(attr, this.rollScore());
            if (this.classAllowed(this.class.name)) {
                valid = true;
            } else {
                valid = false;
                this.setAttribute(attr, oldValue);
            }
        } while (!valid);
    }

    rollScore() {
        return this.rollDie(6) + this.rollDie(6) + this.rollDie(6);
    }

    rollDie(sides) {
        if (sides === 0) return 0;
        let value = Math.floor((Math.random() * sides) + 1);
        return value;
    }

    getMeleeAttackBonus() {
        return this.baseAttackBonus + this.attributes.Strength.bonus;
    }

    getRangedAttackBonus() {
        var result = 0;
        result = this.baseAttackBonus + this.attributes.Dexterity.bonus;
        if (this.race === "Halfling") result += 1;
        return result;
    }

    getAC() {
        return 10 + this.attributes.Dexterity.bonus;
    }

    getDeathRaySave() {
        var result = this.savingThrows.deathRay;
        if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
        return result;
    }

    getMagicWandsSave() {
        var result = this.savingThrows.magicWands;
        if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
        return result;
    }

    getParalysisSave() {
        var result = this.savingThrows.paralysis;

        if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
        if(this.race === "Elf") result -= 1;

        return result;
    }

    getDragonBreathSave() {
        var result = this.savingThrows.dragonBreath;
        if(this.race === "Dwarf" || this.race === "Halfling") result -= 3;
        return result;
    }

    getSpellsSave() {
        var result = this.savingThrows.spells;

        if(this.race === "Halfling") result -= 4;
        if(this.race === "Dwarf") result -= 3;
        if(this.race === "Elf") result -= 2;

        return result;
    }
}