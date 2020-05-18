const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMStartCommand extends Command {
    constructor() {
        super('mmstart', {
           aliases: ['mmstart'] 
        });
    }

    exec(message) {

        let embed = new MessageEmbed()
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/631038745893666816/707356104681717820/pfp-server.gif', {dynamic: true})
        .setFooter('CZBot developed by frozensnow')
        .setTitle('Trade/Sale Started')
        .addField('If you are not involved please do not talk / ping in this channel until we are finished. NOTE: Once you send the account info to the middleman, then you agree to the deal. Make sure you made up your mind before sending the account info.')

        return message.channel.send(embed)

    }
}

module.exports = MMStartCommand;