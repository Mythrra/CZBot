const Discord = require('discord.js')
const { cyan } = require('../colors.json')

module.exports = {

    name: 'aptbrolytrio',
	description: 'Pulls up stats for LR Broly Trio',
        execute(message) 
        {
        let aptbrolyEmbed = new Discord.MessageEmbed()
        .setColor(cyan)
        .setTitle('LR Broly Trio APT')
        .addField('Name:', 'SSJBroly')
        .addField('Output:', '5,159,639')
        .addField('Partner:', 'Turles')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708027766565503186/card_1019000_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbrolyEmbed);
    }
}
exports.help = {
    name: 'aptbrolytrio'
};