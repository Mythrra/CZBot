const Discord = require('discord.js')
const {green_light} = require('../colors.json')

module.exports = {

    name: 'aptgobros',
	description: 'Pulls up stats for LR Super Saiyan Gohan and Super Saiyan Goten',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(green_light)
        .setTitle('LR SSJ Gohan & SSJ Goten APT')
        .addField('Name:', 'Gobros')
        .addField('Output:', '7,242,591')
        .addField('Partner:', 'Bombku')
        .addField('AVG Support:', '13.33%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707991058746703872/card_1019400_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptgobros'
};