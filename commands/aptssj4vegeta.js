const Discord = require('discord.js')
const { crimson } = require('../colors.json')

module.exports = {

    name: 'aptssj4vegeta',
	description: 'Pulls up stats for LR Super Saiyan 4 Vegeta',
        execute(message) 
        {
        let aptssj4vegetaEmbed = new Discord.MessageEmbed()
        .setColor(crimson)
        .setTitle('LR Super Saiyan 4 Vegeta APT')
        .addField('Name:', 'SSJ4Vegeta')
        .addField('Output:', '8,782,867')
        .addField('Partner:', 'STR SSJ4 Goku')
        .addField('AVG Support:', '29.41%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707973917309927464/card_1014220_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptssj4vegetaEmbed);
    }
}
exports.help = {
    name: 'aptssj4vegeta'
};