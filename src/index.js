'use strict';

const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const eventsPath = path.resolve(__dirname, './events');
const commandsPath = path.resolve(__dirname, './commands');


const client = new Discord.Client({
    disableMentions: 'everyone'
})

client.commands = new Discord.Collection();
client.prefix = process.env.PREFIX;

const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`${eventsPath}/${file}`);
    if (!event.execute.length) {
        console.log(`Skipping empty file: ${eventsPath}/${file}`);
        delete require.cache[require.resolve(`${eventsPath}/${file}`)];
        continue;
    }
    try {
        client.on(event.name, event.execute.bind(null, client));
        console.log(`Event bound: ${event.name}`);
        delete require.cache[require.resolve(`${eventsPath}/${file}`)];
    }
    catch (err) { console.error(err); }
}

const commandFiles = fs.readdirSync(`${commandsPath}/active`).filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`${commandsPath}/active/${file}`);
    if(!command.execute.length) {
        client.log(`Skipping empty file: ${commandsPath}/active/${file}`);
        delete require.cache[require.resolve(`${commandsPath}/active/${file}`)];
        continue;
    }
    try {
        client.commands.set(command.name, command);
        console.log(`Command loaded: ${command.name}`)
    }
    catch (err) { console.error(err); }
}

client.login();