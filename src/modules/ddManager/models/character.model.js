const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    home: String,
    location: String,
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
    },
    player: {
        type: String,
        required: false
    }

}, options);

module.exports = mongoose.model('Character', characterSchema);