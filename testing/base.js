const mongoose = require('mongoose');
const baseOptions = {
    discriminatorKey: 'itemtype',
}

const Base = mongoose.model('Base', new mongoose.Schema({
    title: {type: String, required: true},
    date_added: {type: Date, required: true},
    redo: {type: Boolean, required: false},
}, baseOptions))

module.exports = mongoose.model('Base');