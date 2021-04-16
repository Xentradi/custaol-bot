const mongoose = require('mongoose');

const dbUri =
    'mongodb://x3n:vcW2K8IQC4TnvxkFaKArjj52jcqguE5vNzT0SOb8bQ4p7Dos7iQRqSqsAqznfDQAzceZEhwSoqMP9k1GP7K7Mg==@x3n.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@x3n@';
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