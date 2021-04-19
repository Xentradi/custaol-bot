const mongoose = require('mongoose')

const options = {
    discriminatorKey: 'characterType',
    collection: 'characters'
}

const characterSchema = new mongoose.Schema({
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

}, options);

module.exports = mongoose.model('playerCharacter', playerCharacterSchema);