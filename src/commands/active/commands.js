'use strict';
module.exports = {
  name: 'commands',
  description: 'Lists all registered bot commands.',
  usage: 'commands',
  execute(client, message, args) {
    let commands = '```';
    client.commands.each(command => {
      commands += command.name + ' - ' + command.description + '\n Usage: ' + client.prefix + command.usage + '\n';
    });
    commands += '```';
    message.channel.send(commands);
    
  },
};
