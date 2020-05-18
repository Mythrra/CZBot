const Discord = require('discord.js')
const { dark_blue } = require('../colors.json')

module.exports = {

    name: 'aptssjgoku',
	description: 'Pulls up stats for LR AGL Super Saiyan Goku',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(dark_blue)
        .setTitle('LR AGL Super Saiyan Goku APT')
        .addField('Name:', 'SSJGoku/Bombku')
        .addField('Output:', '8,283,507')
        .addField('Partner:', 'LR Gogeta')
        .addField('AVG Support:', '4% 8.1 orbs')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707983093583183974/card_1018490_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptssjgoku'
};