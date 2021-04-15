class Player {
    constructor(name, id) {
        this.name = name;
        this.snowflake = id;
    }


    setName(name) {
        this.name = name;
    }

    setId(id) {
        this.id = id;
    }

    setActiveCharacter(character) {
        this.activeCharacter = character;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getActiveCharacter() {
        return this.activeCharacter;
    }
}