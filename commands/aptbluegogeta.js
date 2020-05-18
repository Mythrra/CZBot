const Discord = require('discord.js')
const { aqua } = require('../colors.json')

module.exports = {

    name: 'aptbluegogeta',
	description: 'Pulls up stats for LR Gogeta Blue',
        execute(message) 
        {
        let aptbluegogetaEmbed = new Discord.MessageEmbed()
        .setColor(aqua)
        .setTitle('LR Gogeta Blue APT')
        .addField('Name:', 'BlueGogeta')
        .addField('Output:', '8,681,559')
        .addField('Partner:', 'BlueVegito')
        .addField('AVG Support:', '19.38%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707976712444575825/card_4017970_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbluegogetaEmbed);
    }
}
exports.help = {
    name: 'aptbluegogeta'
};