module.exports = {
    name: 'ready',
    description: 'Function to perform when the "ready" event is received',
    execute: async (client) => {
        console.log(
            `Connected as ${client.user.tag}.\ Connected to ${client.guilds.cache.size} servers.`
        );
    },
};
