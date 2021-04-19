'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.MONGO_URI;
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbUri, mongooseOptions);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connection successful');
});


