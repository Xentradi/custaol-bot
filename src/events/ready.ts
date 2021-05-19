import { Client } from "discord.js";

module.exports = {
    name: 'ready',
    description: 'Function to perform when the "ready" event is received',
    execute: async (client:Client) => {
        console.log(
            `Connected as ${client.user?.tag}.\ Connected to ${client.guilds.cache.size} servers.`
        );
    },
};
