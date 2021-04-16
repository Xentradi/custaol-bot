const mongoose = require('mongoose')

const playerCharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    race: {
        type: String,
        required: true
    },
    class: [String],
    stats: {
        type: Map,
        of: Number
    }

})

module.exports = mongoose.model('playerCharacter', playerCharacterSchema);