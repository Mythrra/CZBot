const Discord = require('discord.js')
const { lime_green } = require('../colors.json')

module.exports = {

    name: 'aptbroly',
	description: 'Pulls up stats for LR TEQ Super Saiyan Broly',
        execute(message) 
        {
        let aptbrolyEmbed = new Discord.MessageEmbed()
        .setColor(lime_green)
        .setTitle('LR Super Saiyan Broly APT')
        .addField('Name:', 'SSJBroly')
        .addField('Output:', '13,360,662')
        .addField('Partner:', 'AGL Turles')
        .addField('AVG Support:', '74.37%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707971699051855912/card_4016880_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptbrolyEmbed);
    }
}
exports.help = {
    name: 'aptbroly'
};