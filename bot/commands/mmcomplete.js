const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMCompleteCommand extends Command {
    constructor() {
        super('mmcomplete', {
           aliases: ['mmcomplete'] 
        });
    }

    exec(message) {
        let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
        .setFooter('CZBot developed by frozensnow')
        .setTitle('Trade/Sale Complete')
        .addField('You may now ping middlemen /talk in this channel.')

        return message.channel.send(embed)
    }
}

module.exports = MMCompleteCommand;