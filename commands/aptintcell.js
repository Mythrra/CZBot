const Discord = require('discord.js')
const { purple_medium } = require('../colors.json')

module.exports = {

    name: 'aptintcell',
	description: 'Pulls up stats for LR INT Cell',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(purple_medium)
        .setTitle('LR INT Cell APT')
        .addField('Name:', 'IntCell')
        .addField('Output:', '4,039,837')
        .addField('Partner:', 'PhyCell')
        .addField('AVG Support:', '12.75%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707986190732755014/card_1017900_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptintcell'
};