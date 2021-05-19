const mongoose = require('mongoose');

const options = {
    collection: 'inventory'
}

const itemSchema = new mongoose.Schema({
    name: String,
    desc: String,
    character: ObjectId,
    quantity: Number,
}, options)

module.exports = mongoose.model('Item', itemSchema);