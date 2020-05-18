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
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/631038745893666816/707356104681717820/pfp-server.gif', {dynamic: true})
        .setFooter('CZBot developed by frozensnow')
        .setTitle('Trade/Sale Complete')
        .addField('You may now ping middlemen /talk in this channel.')

        return message.channel.send(embed)
    }
}

module.exports = MMCompleteCommand;