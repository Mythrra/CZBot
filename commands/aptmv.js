const Discord = require('discord.js')
const { blue_light} = require('../colors.json')

module.exports = {

    name: 'aptmv',
	description: 'Pulls up stats for LR Majin Vegeta',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(blue_light)
        .setTitle('LR Majin Vegeta APT')
        .addField('Name:', 'MV')
        .addField('Output:', '7,088,345')
        .addField('Partner:', 'EZA SSB Vegeta')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707989836077989953/card_1010160_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptmv'
};