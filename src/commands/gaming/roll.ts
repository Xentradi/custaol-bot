import { Client, Message } from "discord.js";
const chance = require('chance').Chance();

module.exports = {
    name: 'roll',
    description: 'Rolls <X>d<Y> sided dice and prints the values.',
    usage: '<X>d<Y>',
    async execute(client:Client, message:Message, args:any[]) {
        if (!args[0] || isNaN(args[0]) || !args[1] || isNaN(args[1]))
            return message.reply(this.description);
        //client.functions.commandReact(message, 1);

        const dice = args[0];
        const sides = Number(args[1]) + 1;
        const mean = Math.floor(sides * 0.7);
        const variance = 0.5;
        let result:string[] = [];

        for (let i = 0; i < dice; i++) {
            result.push(_weightedRandom(1, sides, mean, variance));
        }
        let resultString = result.join('\n');
        const newMsg = `${dice}d${sides - 1}:\n${resultString}`;
        return message.channel.send(newMsg);
    },
};

/**
 * Generate random num with weighted chance from min to max parameters.
 * @param {integer} min Minimum value
 * @param {integer} max Maximum value
 * @param {integer} mean Most likely number to appear
 * @param {integer} variance Higher variance reduces randomness
 * @return {integer}
 */
function _weightedRandom(min:number, max:number, mean:number, variance:number) {
    const probability = [];
    const sequence = [];
    for (let i = min; i < max; i++) {
        probability.push(Math.pow(max - Math.abs(mean - i), variance));
        sequence.push(i);
    }
    return chance.weighted(sequence, probability);
}
