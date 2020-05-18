const Discord = require('discord.js')
const { lime_green } = require('../colors.json')

module.exports = {

    name: 'aptlssjbroly',
	description: 'Pulls up stats for LR STR LSSJ Broly',
        execute(message) 
        {
        let aptbrolyEmbed = new Discord.MessageEmbed()
        .setColor(lime_green)
        .setTitle('LR STR LSSJ Broly APT')
        .addField('Name:', 'LSSJBroly')
        .addField('Output:', '7,401,683')
        .addField('Partner:', 'SSJ Broly')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708024618409000960/card_1010440_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbrolyEmbed);
    }
}
exports.help = {
    name: 'aptlssjbroly'
};