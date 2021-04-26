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
}, options);

module.exports = mongoose.model('Player', playerSchema);