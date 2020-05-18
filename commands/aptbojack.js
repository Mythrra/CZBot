const Discord = require('discord.js')
const {purple_dark} = require('../colors.json')

module.exports = {

    name: 'aptbojack',
	description: 'Pulls up stats for LR Bojack',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(purple_dark)
        .setTitle('LR Bojack APT')
        .addField('Name:', 'Bojack')
        .addField('Output:', '5,893,193')
        .addField('Partner:', 'Bojack TUR')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707992218677411870/card_1012160_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptbojack'
};