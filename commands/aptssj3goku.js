const Discord = require('discord.js')
const { lime_green } = require('../colors.json')

module.exports = {

    name: 'aptssj3goku',
	description: 'Pulls up stats for LR Super Saiyan 3 Goku',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(lime_green)
        .setTitle('LR Super Saiyan 3 Goku APT')
        .addField('Name:', 'SSJ3Goku')
        .addField('Output:', '7,611,195')
        .addField('Partner:', 'SSJ3 Bardock')
        .addField('AVG Support:', '19.53%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707984952951832656/card_1016840_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssj3goku'
};