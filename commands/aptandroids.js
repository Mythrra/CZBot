const Discord = require('discord.js')
const {orange} = require('../colors.json')

module.exports = {

    name: 'aptandroids',
	description: 'Pulls up stats for LR PHY Androids',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR PHY Androids APT')
        .addField('Name:', 'Androids')
        .addField('Output:', '4,115,704')
        .addField('Partner:', 'PhyCell')
        .addField('AVG Support:', '10%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707992736074170419/card_1018030_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptandroids'
};