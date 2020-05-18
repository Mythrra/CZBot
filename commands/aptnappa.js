const Discord = require('discord.js')
const { red_dark} = require('../colors.json')

module.exports = {

    name: 'aptnappa',
	description: 'Pulls up stats for LR Nappa',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(red_dark)
        .setTitle('LR Nappa APT')
        .addField('Name:', 'Nappa')
        .addField('Output:', '3,661,068')
        .addField('Partner:', 'AGL Turles')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707991058746703872/card_1019400_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptnappa'
};