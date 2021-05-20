import { Collection, Message } from 'discord.js';
import { resolve } from 'path';
import { BotClient } from '../class/BotClient.class';
import { logger } from '../modules/logger';

const configPath = resolve(__dirname, '../../config');
const allDrinks = require(configPath + '/drinks.json').allDrinks;
const goodDrinks = require(configPath + '/drinks.json').goodDrinks;
const badDrinks = require(configPath + '/drinks.json').badDrinks;
const prefix = require(configPath + '/config.json').prefix;

module.exports = {
    name: 'message',
    description: 'Handle message events',
    execute: async (client: BotClient, message: Message) => {
        if (message.author.bot) return;
        if (message.content.toLowerCase() === '?help') {
            message.reply(`Dial ${prefix} for ${client.user?.username}`);
        }

        // What to do if a message doesn't start with the correct prefix.

        if (!message.content.startsWith(prefix)) {
            // Check to see if they're talking about drinks and respond accordingly. Otherwise do nothing.
            detectDrinks(message).then((res) => {
                if (res === 1)
                    return message.channel.send(
                        'You are having drink? ' + client.user?.username + ' would like one as well.'
                    );
                if (res === 2)
                    return message.channel.send(
                        'How you drink that? Makes ' + client.user?.username + ' sick like picture of your mother.'
                    );
                return;
            });
        }

        /**
         * Command Handler
         */
        const args: any[] = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).execute(client, message, args);
        } catch (err) {
            logger.error(err);
        }
    },
};

function findOne(haystack: String[], needle: String[]) {
    return needle.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
}

async function detectDrinks(message: Message) {
    let words = message.content.toLowerCase().trim().split(/ +/g);
    if (findOne(words, allDrinks)) {
        if (findOne(words, goodDrinks)) {
            // Good drinks
            return 1;
        } else if (findOne(words, badDrinks)) {
            // Yucky drinks
            return 2;
        }
    }
    return 0;
}
