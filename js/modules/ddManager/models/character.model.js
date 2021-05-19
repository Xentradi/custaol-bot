const mongoose = require('mongoose')

const options = {
    collection: 'characters'
}

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
        type: ObjectId,
        required: false
    }

}, options);

module.exports = mongoose.model('Character', characterSchema);