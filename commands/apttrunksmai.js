const Discord = require('discord.js')
const { orange } = require('../colors.json')

module.exports = {

    name: 'apttrunksmai',
	description: 'Pulls up stats for LR Trunks and Mai',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR Trunks and Mai APT')
        .addField('Name:', 'TrunksMai')
        .addField('Output:', '5,931,289')
        .addField('Partner:', 'Trunks and Mai')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/708027308560351282/card_1014080_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'apttrunksmai'}