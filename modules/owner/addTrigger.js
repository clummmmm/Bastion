/**
 * @file addTrigger command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const sql = require('sqlite');
sql.open('./data/Bastion.sqlite');

exports.run = (Bastion, message, args) => {
  if (!Bastion.credentials.ownerId.includes(message.author.id)) {
    return Bastion.emit('userMissingPermissions', this.help.userPermission);
  }

  args = args.join(' ');
  if (!/.+ << .+/.test(args)) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return Bastion.emit('commandUsage', message, this.help);
  }
  args = args.split(' << ');
  sql.run('INSERT INTO triggers (trigger, response) VALUES (?, ?)', [ args[0], args[1] ]).catch(e => {
    Bastion.log.error(e.stack);
  });

  message.channel.send({
    embed: {
      color: Bastion.colors.green,
      title: 'New Trigger Added',
      fields: [
        {
          name: 'Trigger',
          value: args[0]
        },
        {
          name: 'Response',
          value: args[1]
        }
      ]
    }
  }).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: [ 'addtrip' ],
  enabled: true
};

exports.help = {
  name: 'addtrigger',
  description: 'Adds a trigger with a response message. Separate trigger & message with `<<`.`',
  botPermission: '',
  userPermission: 'BOT_OWNER',
  usage: 'addTrigger <trigger> << <response>',
  example: [ 'addTrigger Hi, there? << Hello $user! :wave:' ]
};
