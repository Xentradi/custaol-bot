import { Client } from "discord.js";

module.exports = {
    name: 'error',
    description: 'Prints errors to the console.',
    execute: async (client: Client, error:string) => {
        console.error(error);
    },
};
