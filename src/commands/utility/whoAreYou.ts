import { Message } from 'discord.js';
import { BotClient } from '../../class/BotClient.class';

module.exports = {
    name: 'whoareyou',
    description: 'Explains who the bot is and its purpose.',
    usage: 'whoareyou',
    execute(client: BotClient, message: Message, args: string[]) {
        //client.functions.commandReact(message, 1);
        message.channel.send(
            `Who is ${client.user?.username}?! ${client.user?.username} is your favorite mask inhabiting magic item dealer! ${client.user?.username} also help you roll dice and keep track of items... Ok not that last one;  DM guy is pretty lazy and didn't prepare that just, like he didn't prepare for the next game.`
        );
    },
};
