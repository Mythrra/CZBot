const Discord = require('discord.js')
const { crimson } = require('../colors.json')

module.exports = {

    name: 'aptgttrio',
	description: 'Pulls up stats for LR GT Trio',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(crimson)
        .setTitle('LR GT Trio APT')
        .addField('Name:', 'GTTrio')
        .addField('Output:', '7,455,890')
        .addField('Partner:', 'Kid Gohan')
        .addField('AVG Support:', '59.67%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707989238414704640/card_1016370_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptgttrio'
};