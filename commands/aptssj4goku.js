const Discord = require('discord.js')
const { crimson } = require('../colors.json')

module.exports = {

    name: 'aptssj4goku',
	description: 'Pulls up stats for LR Super Saiyan 4 Goku',
        execute(message) 
        {
        let aptssj4gokuEmbed = new Discord.MessageEmbed()
        .setColor(crimson)
        .setTitle('LR Super Saiyan 4 Goku APT')
        .addField('Name:', 'SSJ4Goku')
        .addField('Output:', '11,817,876')
        .addField('Partner:', 'AGL Pan')
        .addField('AVG Support:', '38.66%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707973486513225788/card_1014210_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptssj4gokuEmbed);
    }
}
exports.help = {
    name: 'aptssj4goku'
};