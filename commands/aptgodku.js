const Discord = require('discord.js')
const { crimson } = require('../colors.json')

module.exports = {

    name: 'aptgodku',
	description: 'Pulls up stats for LR Super Saiyan God Goku',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(crimson)
        .setTitle('LR Super Saiyan God Goku APT')
        .addField('Name:', 'Godku')
        .addField('Output:', '7,406,114')
        .addField('Partner:', 'SSBKK')
        .addField('AVG Support:', '40%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707988611219456080/card_1018250_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptgodku'
};