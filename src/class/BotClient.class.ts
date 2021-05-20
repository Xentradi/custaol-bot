import { Client, Collection } from 'discord.js';

export class BotClient extends Client {
    commands = new Collection<any, any>();
}
