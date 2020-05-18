const Discord = require('discord.js')
const { purple_dark } = require('../colors.json')

module.exports = {

    name: 'aptssjvegito',
	description: 'Pulls up stats for LR Super Saiyan Vegito',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(purple_dark)
        .setTitle('LR Super Saiyan Vegito APT')
        .addField('Name:', 'SSJVegito')
        .addField('Output:', '4,135,592')
        .addField('Partner:', 'Floater')
        .addField('AVG Support:', '10%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707998224480337950/card_4012900_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssjvegito'
};