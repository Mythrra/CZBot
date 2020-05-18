const Discord = require('discord.js')

module.exports = {

    name: 'aptgofrieza',
	description: 'Pulls up stats for LR Goku and Frieza',
        execute(message) 
        {
        let aptgofriezaEmbed = new Discord.MessageEmbed()
        .setColor('#7df9ff')
        .setTitle('LR Goku and Frieza APT')
        .addField('Name: ', 'Gofrieza')
        .addField('Output:', '15,879,132')
        .addField('Partner: ', 'TEQ Tien')
        .addField('AVG Support: ', '86.13%')
        .setThumbnail('https://cdn.discordapp.com/attachments/707939491209543741/707943014416252958/card_1014970_thumb.png')
        .setFooter('CZBot developed by frozensnow#0723 | Credits to the homie Kariru')

        message.channel.send(aptgofriezaEmbed);
    }
}
exports.help = {
    name: 'aptgofrieza'
};
