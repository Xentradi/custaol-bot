'use strict';

const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Discord.Client({
    disableMentions: 'everyone'
})

client.commands = new Discord.Collection();
client.prefix = process.env.PREFIX;

const eventFiles = fs.readdirSync('./src/events/').filter((file) => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (!event.execute.length) {
        console.log(`Skipping empty file: ./events/${file}`);
        delete require.cache[require.resolve(`./events/${file}`)];
        continue;
    }
    try {
        client.on(event.name, event.execute.bind(null, client));
        console.log(`Event bound: ${event.name}`);
        delete require.cache[require.resolve(`./events/${file}`)];
    }
    catch (err) { console.error(err); }
}

const commandFiles = fs.readdirSync('./src/commands/active/').filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/active/${file}`);
    if(!command.execute.length) {
        client.log(`Skipping empty file: ./commands/active/${file}`);
        delete require.cache[require.resolve(`./commands/active/${file}`)];
        continue;
    }
    try {
        client.commands.set(command.name, command);
        console.log(`Command loaded: ${command.name}`)
    }
    catch (err) { console.error(err); }
}

client.login();