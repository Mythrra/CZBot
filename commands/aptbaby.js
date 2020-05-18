const Discord = require('discord.js')
const {electric_blue} = require('../colors.json')

module.exports = {

    name: 'aptbaby',
	description: 'Pulls up stats for LR Baby',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(electric_blue)
        .setTitle('LR Baby APT')
        .addField('Name:', 'Baby')
        .addField('Output:', '6,707,012')
        .addField('Partner:', 'Rildo')
        .addField('AVG Support:', '86.67%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707993393472602225/card_1016400_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptbaby'
};