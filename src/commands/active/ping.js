'use strict';
module.exports = {
  name: 'ping',
  description: 'Pong!',
  execute(client, message, args) {
    //client.functions.commandReact(message, 1);
    message.channel.send('Ping?').then((m) => {
      const latency = m.createdTimestamp - message.createdTimestamp;
      const apiPing = Math.round(client.ws.ping);
      m.edit(`Pong! Latency is ${latency}ms. API Latency is ${apiPing}ms.`);
    });
  },
};
