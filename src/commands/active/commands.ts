'use strict';

import { Client, Message } from "discord.js";

module.exports = {
  name: 'commands',
  description: 'Lists all registered bot commands.',
  usage: 'commands',
  execute(client: Client, message: Message, args: string[]) {
    let commands = '```';
    client.commands.each(command => {
      commands += command.name + ' - ' + command.description + '\n Usage: ' + client.prefix + command.usage + '\n';
    });
    commands += '```';
    message.channel.send(commands);
    
  },
};
