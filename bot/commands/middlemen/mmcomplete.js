const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMCompleteCommand extends Command {
    constructor() {
        super('mmcomplete', {
           aliases: ['mmcomplete'] 
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
        .setTimestamp()
        .setTitle('Trade/Sale Complete')
        .addField('You may now ping middlemen /talk in this channel.')

        return message.channel.send(embed)
    }
}

module.exports = MMCompleteCommand;