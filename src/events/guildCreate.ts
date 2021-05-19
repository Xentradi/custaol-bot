import { Client, Guild } from "discord.js";

module.exports = {
    name: 'guildCreate',
    description: 'What to do when joining a new server',
    execute: async (client:Client, guild:Guild) => {
        console.log(`Joined new server: ${guild}`);
    },
};
