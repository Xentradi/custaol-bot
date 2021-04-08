'use strict';


module.exports = {
  name: 'whoareyou',
  description: 'Explains who the bot is and what his purpose is.',
  execute(client, message, args) {
    //client.functions.commandReact(message, 1);
    message.channel.send(`Who is ${client.user.username}?! ${client.user.username} is your favorite mask inhabiting magic item dealer! ${client.user.username} also help you roll dice and keep track of items... Ok not that last one;  DM guy is pretty lazy and didn't prepare that just, like he didn't prepare for the next game.`)

    message.channel.send('Ping?').then((m) => {
      const latency = m.createdTimestamp - message.createdTimestamp;
      const apiPing = Math.round(client.ws.ping);
      m.edit(`Pong! Latency is ${latency}ms. API Latency is ${apiPing}ms.`);
    });
  },
};
