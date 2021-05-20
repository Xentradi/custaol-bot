import { Client } from 'discord.js';
import { logger } from '../modules/logger';

module.exports = {
    name: 'ready',
    description: 'Function to perform when the "ready" event is received',
    execute: async (client: Client) => {
        logger.info(`Connected as ${client.user?.tag}.\ Connected to ${client.guilds.cache.size} servers.`);
    },
};
