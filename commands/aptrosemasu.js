const Discord = require('discord.js')
const { lime_green } = require('../colors.json')

module.exports = {

    name: 'aptrosemasu',
	description: 'Pulls up stats for LR Super Saiyan Rose Goku Black & Zamasu',
        execute(message) 
        {
        let aptbrolyEmbed = new Discord.MessageEmbed()
        .setColor(lime_green)
        .setTitle('LR Rosemasu APT')
        .addField('Name:', 'Rosemasu')
        .addField('Output:', '5,720,173')
        .addField('Partner:', 'Str rose')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708024719340863611/card_1011140_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbrolyEmbed);
    }
}
exports.help = {
    name: 'aptrosemasu'
};