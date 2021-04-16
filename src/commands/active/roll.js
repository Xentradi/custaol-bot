'use strict';
const chance = require('chance').Chance();

module.exports = {
    name: 'roll',
    description: 'Rolls <X> number of <Y> sided dice and prints the values.',
    usage: 'roll <X> <Y>',
    execute: async (client, message, args) => {
        if (!args[0] || isNaN(args[0]) || !args[1] || isNaN(args[1]))
            message.reply(this.description);
        //client.functions.commandReact(message, 1);

        const dice = args[0];
        const sides = Number(args[1]) + 1;
        const mean = Math.floor(sides * 0.7);
        const variance = 0.5;
        let result = [];

        for (let i = 0; i < dice; i++) {
            result.push(_weightedRandom(1, sides, mean, variance));
        }
        result = result.join('\n');
        const newMsg = `${dice}d${sides - 1}:\n${result}`;
        return message.channel.send(newMsg);
    },
};

/**
 * Generate random num with weighted chance from min to max parameters.
 * @param {integer} min Minimum value
 * @param {integer} max Maxiumum value
 * @param {integer} mean Most likely number to appear
 * @param {integer} variance Higher variance reduces randomness
 * @return {integer}
 */
function _weightedRandom(min, max, mean, variance) {
    const probablity = [];
    const sequence = [];
    for (let i = min; i < max; i++) {
        probablity.push(Math.pow(max - Math.abs(mean - i), variance));
        sequence.push(i);
    }
    return chance.weighted(sequence, probablity);
}
