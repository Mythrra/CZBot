const Discord = require('discord.js')
const { orange } = require('../colors.json')

module.exports = {

    name: 'aptphycell',
	description: 'Pulls up stats for LR PHY Cell',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR PHY Cell APT')
        .addField('Name:', 'PhyCell')
        .addField('Output:', '5,070,039')
        .addField('Partner:', 'IntCell')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707997400811307008/card_1014940_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptphycell'
};