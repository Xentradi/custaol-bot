import { Client, Collection } from "discord.js";

class myClient extends Client {
    commands = new Collection();
}

const client = new myClient({
    disableMentions: 'everyone'
});

client.commands = new Collection();
