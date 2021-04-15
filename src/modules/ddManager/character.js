'use strict';

module.exports = class Character {
    constructor(name, level = 1, race = 'Human') {
        this.name = name;
        this.level = level;
        this.race = race;
        this.class = {};
        this.stats = {
            "strength": 8,
            "dexterity": 8,
            "constitution": 8,
            "intelligence": 8,
            "wisdom": 8,
            "charisma": 8
        };
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    getRace() {
        return this.race;
    }

    getStats() {
        return this.stats;
    }

    getStrength() {
        return this.stats.strength;
    }

    getDexterity() {
        return this.stats.dexterity;
    }

    getConstitution() {
        return this.stats.constitution;
    }

    getIntelligence() {
        return this.stats.intelligence;
    }

    getWisdom() {
        return this.stats.wisdom;
    }

    getCharisma() {
        return this.stats.charisma;
    }

    getModifier(stat) {
        return Math.floor((this.stats[`${stat}`] - 10) / 2);
    }

    getProficiency() {
        return Math.ceil(1 + (this.level / 4));
    }


    // Setters
    
    setName(name) {
        this.name = name;
    }

    setLevel(level) {
        this.name = level;
    }

    setRace(race) {
        this.name = race;
    }

    setStats(strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this.stats = {
            "strength": strength,
            "dexterity": dexterity,
            "constitution": constitution,
            "intelligence": intelligence,
            "wisdom": wisdom,
            "charisma": charisma
        }
    }

}