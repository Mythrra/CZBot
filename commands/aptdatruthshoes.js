const Discord = require('discord.js')
const { dark_blue } = require('../colors.json')

module.exports = {

    name: 'aptdatruthshoes',
	description: 'Pulls up stats for DaTruths favorite LR, LR Kale and Caulifla',
        execute(message) 
        {
        let embed = new Discord.MessageEmbed()
        .setColor(dark_blue)
        .setTitle('LR Kale and Caulifla APT')
        .addField('Name:', 'KaleCaulifla')
        .addField('Output:', '8,137,252')
        .addField('Partner:', 'SSJ4 Goku')
        .addField('AVG Support:', '3.1%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707984952951832656/card_1016840_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(embed);
    }
}
exports.help = {
    name: 'aptdatruthshoes'
};