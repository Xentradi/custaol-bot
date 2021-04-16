const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const nonPlayerCharacterSchema = new Schema({

})

module.exports = mongoose.model('nonPlayerCharacter', nonPlayerCharacterSchema);