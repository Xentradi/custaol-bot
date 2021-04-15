'use strict';
var Discord = require('discord.js');
var fs = require('fs');
require('dotenv').config();
var client = new Discord.Client({
    disableMentions: 'everyone'
});
client.commands = new Discord.Collection();
client.prefix = process.env.PREFIX;
var eventFiles = fs.readdirSync('./src/events/').filter(function (file) { return file.endsWith('.js'); });
for (var _i = 0, eventFiles_1 = eventFiles; _i < eventFiles_1.length; _i++) {
    var file = eventFiles_1[_i];
    var event_1 = require("./events/" + file);
    if (!event_1.execute.length) {
        console.log("Skipping empty file: ./events/" + file);
        delete require.cache[require.resolve("./events/" + file)];
        continue;
    }
    try {
        client.on(event_1.name, event_1.execute.bind(null, client));
        console.log("Event bound: " + event_1.name);
        delete require.cache[require.resolve("./events/" + file)];
    }
    catch (err) {
        console.error(err);
    }
}
var commandFiles = fs.readdirSync('./src/commands/active/').filter(function (file) { return file.endsWith('.js'); });
for (var _a = 0, commandFiles_1 = commandFiles; _a < commandFiles_1.length; _a++) {
    var file = commandFiles_1[_a];
    var command = require("./commands/active/" + file);
    if (!command.execute.length) {
        client.log("Skipping empty file: ./commands/active/" + file);
        delete require.cache[require.resolve("./commands/active/" + file)];
        continue;
    }
    try {
        client.commands.set(command.name, command);
        console.log("Command loaded: " + command.name);
    }
    catch (err) {
        console.error(err);
    }
}
client.login();