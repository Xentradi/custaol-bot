module.exports = {
    name: 'guildCreate',
    description: 'What to do when joining a new server',
    execute: async (client, guild) => {
        console.log(`Joined new server: ${guild}`);
    },
};
