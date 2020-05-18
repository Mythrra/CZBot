const Discord = require('discord.js')
const { orange } = require('../colors.json')

module.exports = {

    name: 'aptgotentrunks',
	description: 'Pulls up stats for LR Goten & Trunks',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR Goten and Trunks APT')
        .addField('Name:', 'GotenTrunks')
        .addField('Output:', '6,603,437')
        .addField('Partner:', 'Gotenks')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708026730320756836/card_1011640_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptgotentrunks'}