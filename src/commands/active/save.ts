'use strict';
const chance = require('chance').Chance();

module.exports = {
  name: 'save',
  description: 'Rolls a d20 and sends you the roll + your provided save modifier. If you do not provide a modifier it assumes 0.',
  usage: 'save [SaveModifier]',
  execute: async (client, message, args) => {
    //client.functions.commandReact(message, 1);

    const modifier = Number(args[0]) || 0;
    if (modifier < 0) modifier = 0;
    const dice = 1;
    const sides = 21;
    const mean = Math.floor(sides*0.85);
    const variance = 7;

    const roll = _weightedRandom(5, sides, mean, variance);
    let result = Number(roll) + modifier;
    if (roll === 20) result = 'NAT 20!';
    if (roll <= 1)  result = Number(result) + modifier + 1;
    
    const newMsg = `${result}`;
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
  const probablity = []; const sequence = [];
  for (let i=min; i<max; i++) {
    probablity.push(Math.pow(max-Math.abs(mean-i), variance));
    sequence.push(i);
  }
  return chance.weighted(sequence, probablity);
}
