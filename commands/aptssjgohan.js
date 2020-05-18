const Discord = require('discord.js')
const { blue_dark } = require('../colors.json')

module.exports = {

    name: 'aptssjgohan',
	description: 'Pulls up stats for LR Super Saiyan Gohan',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(blue_dark)
        .setTitle('LR Super Saiyan Gohan APT')
        .addField('Name:', 'SSJGohan')
        .addField('Output:', '4,066,058')
        .addField('Partner:', 'Floater')
        .addField('AVG Support:', '11.42%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707987818642800680/card_1017630_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssjgohan'
};