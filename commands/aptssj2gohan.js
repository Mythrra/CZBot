const Discord = require('discord.js')
const { blue_dark } = require('../colors.json')

module.exports = {

    name: 'aptssj2gohan',
	description: 'Pulls up stats for LR Super Saiyan 2 Gohan',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(blue_dark)
        .setTitle('LR Super Saiyan 2 Gohan APT')
        .addField('Name:', 'SSJ2Gohan')
        .addField('Output:', '6,089,766')
        .addField('Partner:', 'LR Trunks')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708025887274303588/card_1010070_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssj2gohan'
};