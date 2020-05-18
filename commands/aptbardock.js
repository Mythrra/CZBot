const Discord = require('discord.js')
const {orange} = require('../colors.json')

module.exports = {

    name: 'aptbardock',
	description: 'Pulls up stats for LR Bardock',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(orange)
        .setTitle('LR Bardock APT')
        .addField('Name:', 'Bardock')
        .addField('Output:', '5,213,848')
        .addField('Partner:', 'Tora')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707998688550715392/card_1014020_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptbardock'
};