const Discord = require('discord.js')
const { aqua } = require('../colors.json')

module.exports = {

    name: 'aptbluevegito',
	description: 'Pulls up stats for LR TEQ Vegito Blue',
        execute(message) 
        {
        let aptbluevegitoEmbed = new Discord.MessageEmbed()
        .setColor(aqua)
        .setTitle('LR TEQ Vegito Blue APT')
        .addField('Name:', 'BlueVegito')
        .addField('Output:', '8,764,498')
        .addField('Partner:', 'BlueGogeta')
        .addField('AVG Support:', '19.38%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707976024880840794/card_4017980_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbluevegitoEmbed);
    }
}
exports.help = {
    name: 'aptbluevegito'
};