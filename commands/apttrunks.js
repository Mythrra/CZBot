const Discord = require('discord.js')
const { orange } = require('../colors.json')

module.exports = {

    name: 'apttrunks',
	description: 'Pulls up stats for LR Super Saiyan Trunks',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR Super Saiyan Trunks APT')
        .addField('Name:', 'Trunks')
        .addField('Output:', '5,554,552')
        .addField('Partner:', 'Eza Trunks')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708025992643608646/card_1011720_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'apttrunks'}