'use strict';
const chance = require('chance').Chance();

module.exports = {
  name: 'save',
  description: '`/save [modifier]` Returns a save value + your modifier leave modifier blank for 0',
  execute: async (client, message, args) => {
    //client.functions.commandReact(message, 1);

    const modifier = Number(args[0]) || 0;
    if (modifier < 0) modifier = 0;
    const dice = 1;
    const sides = 21;
    const mean = Math.floor(sides*0.85);
    const variance = 7;

    const roll = _weightedRandom(1, sides, mean, variance);
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
