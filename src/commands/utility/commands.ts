import { Message } from 'discord.js';
import { BotClient } from '../../class/BotClient.class';
import { resolve } from 'path';

const configPath = resolve(__dirname, '../../config');
const prefix = require(configPath + '/config.json').prefix;

module.exports = {
    name: 'commands',
    description: 'Lists all registered bot commands.',
    usage: 'commands',
    async execute(client: BotClient, message: Message, args: any[]) {
        let commands = '```';
        client.commands.each((command) => {
            commands += command.name + ' - ' + command.description + '\n Usage: ' + prefix + command.usage + '\n';
        });
        commands += '```';
        message.channel.send(commands);
    },
};
