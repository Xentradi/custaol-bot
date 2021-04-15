module.exports = {
    name: 'error',
    description: 'Prints errors to the console.',
    execute: async (client, error) => {
        console.error(error);
    }
}