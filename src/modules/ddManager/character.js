

module.exports =  class Character {
    constructor(name, level = 1, race = 'Human', player = null) {
        this.name = name;
        this.level = level;
        this.race = race;
        this.player = player;
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

    getPlayer() {
        return this.player
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

    setName(level) {
        this.name = level;
    }

    setName(race) {
        this.name = race;
    }

    setName(player) {
        this.name = player;
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