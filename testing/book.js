const mongoose = require('mongoose');

const Base = require('./base');

const Book = Base.discriminator('Book', new mongoose.Schema({
    author: {type: String, required: true}
}));

module.exports = mongoose.model('Book');