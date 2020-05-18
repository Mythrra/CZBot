const Discord = require('discord.js')
const { hot_pink } = require('../colors.json')

module.exports = {

    name: 'aptrose',
	description: 'Pulls up stats for LR Super Saiyan Rose Goku Black',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(hot_pink)
        .setTitle('LR Super Saiyan Rose Goku Black APT')
        .addField('Name:', 'Rose')
        .addField('Output:', '9,487,499')
        .addField('Partner:', 'Scouter Vegeta')
        .addField('AVG Support:', '29.99%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707982030507475054/card_1018880_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptrose'
};