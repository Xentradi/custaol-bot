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
const kittySchema = new mongoose.Schema({
    name: String,
});

kittySchema.methods.speak = function () {
    const greeting = this.name
        ? 'Meow name is ' + this.name
        : "I don't have a name";
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.save((err, kittens) => {
    if (err) return console.error(err);
    console.log(kittens);
});