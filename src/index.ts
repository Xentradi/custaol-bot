require('dotenv').config();
import { BotClient } from './class/BotClient.class';
import { ClientOptions, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { logger } from './modules/logger';

const eventsPath = resolve(__dirname, './events');
const commandsPath = resolve(__dirname, './commands');
const clientOptions: ClientOptions = { disableMentions: 'everyone' };
const client = new BotClient(clientOptions);

client.commands = new Collection<any, any>();

const eventFiles = readdirSync(eventsPath).filter((file) => {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
        return true;
    }
});

for (const file of eventFiles) {
    const event = require(`${eventsPath}/${file}`);
    if (!event.execute.length) {
        logger.warn(`Skipping empty file: ${eventsPath}/${file}`);
        delete require.cache[require.resolve(`${eventsPath}/${file}`)];
        continue;
    }
    try {
        client.on(event.name, event.execute.bind(null, client));
        logger.info(`Event bound: ${event.name}`);
        delete require.cache[require.resolve(`${eventsPath}/${file}`)];
    } catch (err) {
        logger.error(err);
    }
}

const commandFolders = readdirSync(`${commandsPath}`);
for (const folder of commandFolders) {
    const commandFiles = readdirSync(`${commandsPath}/${folder}`).filter((file) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${commandsPath}/${folder}/${file}`);
        if (command.name === undefined) {
            logger.warn(`Skipping empty file: ${commandsPath}/active/${file}`);
            delete require.cache[require.resolve(`${commandsPath}/active/${file}`)];
            continue;
        }
        try {
            client.commands.set(command.name, command);
            logger.info(`Command loaded: ${command.name}`);
        } catch (err) {
            logger.error(err);
        }
    }
}

client.login();
