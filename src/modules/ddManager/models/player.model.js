const mongoose = require('mongoose')

const options = {
    collection: 'players'
}

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discordId: String,
    activeCharacter: {
        type: ObjectId,
        required: false
    },
}, options);

module.exports = mongoose.model('Player', playerSchema);