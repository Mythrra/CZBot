const Discord = require('discord.js')
const { orange } = require('../colors.json')

module.exports = {

    name: 'aptssjgogeta',
	description: 'Pulls up stats for LR Super Saiyan Gogeta',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR Super Saiyan Gogeta APT')
        .addField('Name:', 'SSJGogeta')
        .addField('Output:', '5,709,584')
        .addField('Partner:', 'Bombku')
        .addField('AVG Support:', '5.95%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707987230328881282/card_4012930_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssjgogeta'
};