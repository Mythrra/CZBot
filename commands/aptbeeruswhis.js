const Discord = require('discord.js')
const { red_dark} = require('../colors.json')

module.exports = {

    name: 'aptbeeruswhis',
	description: 'Pulls up stats for LR Beerus & Whis',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(red_dark)
        .setTitle('LR Beerus & Whis APT')
        .addField('Name:', 'BeerusWhis')
        .addField('Output:', '6,967,371')
        .addField('Partner:', 'Beerus')
        .addField('AVG Support:', '20.37%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707990483766345778/card_1013770_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptbeeruswhis'
};