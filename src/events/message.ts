import { Client, Message } from "discord.js";

const keywords = require('../../config.json').keywords;
const goodDrinks = require('../../config.json').goodDrinks;
const badDrinks = require('../../config.json').badDrinks;

module.exports = {
    name: 'message',
    description: 'Handle message events',
    execute: async (client: Client, message: Message) => {
        if (message.author.bot) return;
        if (message.content.toLowerCase() === '?help') message.reply(`Dial ${client.prefix} for ${client.user.username}`);
        
        // alcohol detector

        let words = message.content.toLowerCase().trim().split(/ +/g);
        if (findOne(words, goodDrinks)) {
            // Good alcohols
            return message.channel.send('You are having drink? ' + client.user.username + ' would like one as well.');
        } else if (findOne(words, badDrinks)) {
            // Yucky alcohols
            return message.channel.send('How you drink that? Makes ' + client.user.username + ' sick like picture of your mother.');
        }
        
        
        // Handle Commands
        if (!message.content.startsWith(client.prefix)) return;

        const args = message.content
            .slice(client.prefix.length)
            .trim()
            .split(/ +/g);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).execute(client, message, args);
        }
        catch (err) { console.error(err); }
    }
}

let findOne = function (haystack, needle) {
    return needle.some(function (v) {
        return haystack.indexOf(v) >= 0;
    })
}