class Player {
    constructor(name, id = null) {
        this.name = name;
        this.snowflake = id;
    }

    setName(name) {
        this.name = name;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}