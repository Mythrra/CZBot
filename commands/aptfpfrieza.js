const Discord = require('discord.js')
const {crimson} = require('../colors.json')

module.exports = {

    name: 'aptfpfrieza',
	description: 'Pulls up stats for LR FP Frieza',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(crimson)
        .setTitle('LR FP Frieza APT')
        .addField('Name:', 'FPFrieza')
        .addField('Output:', '6,337,826')
        .addField('Partner:', 'Cooler')
        .addField('AVG Support:', '29.8%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707999301779062915/card_1015570_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptfpfrieza'
};