const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMCancelCommand extends Command {
    constructor() {
        super('mmcancel', {
           aliases: ['mmcancel'] 
        });
    }

    exec(message) {
        let embed = new MessageEmbed()
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/631038745893666816/707356104681717820/pfp-server.gif', {dynamic: true})
        .setFooter('CZBot developed by frozensnow')
        .setTitle('Trade/Sale Cancelled')
        .addField('You may now ping middlemen /talk in this channel.')

        return message.channel.send(embed)
    }
}

module.exports = MMCancelCommand;