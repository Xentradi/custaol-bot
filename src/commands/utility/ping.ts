'use strict';

import { Client, Message } from "discord.js";

module.exports = {
    name: 'ping',
    description:
        "Returns the bot's latency to the user and the bot's latency to the Discord API.",
    usage: 'ping',
    execute(client:Client, message:Message, args:string[]) {
        //client.functions.commandReact(message, 1);
        message.channel.send('Ping?').then((m) => {
            const latency = m.createdTimestamp - message.createdTimestamp;
            const apiPing = Math.round(client.ws.ping);
            m.edit(
                `Pong! Latency to user: ${latency}ms. API Latency: ${apiPing}ms.`
            );
        });
    },
};
