const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMCancelCommand extends Command {
    constructor() {
        super('mmcancel', {
           aliases: ['mmcancel'] 
        });
    }

    userPermissions(message) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator' || 'Middlemen' || 'Admin' || 'Owner')) {
            return 'Moderator' || 'Middlemen' || 'Admin' || 'Owner';
        }

        return null;
    }



    exec(message) {
        let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
        .setFooter('CZBot developed by frozensnow')
        .setTitle('Trade/Sale Cancelled')
        .addField('You may now ping middlemen /talk in this channel.')

        return message.channel.send(embed)
    }
}

module.exports = MMCancelCommand;