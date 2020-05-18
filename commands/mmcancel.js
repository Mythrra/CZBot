
const Discord = require('discord.js')
module.exports = {

  execute(client, message, args) {
    if(message.member.roles.cache.find(r => r.name === "Middlemen" || "Moderators" || "Admin" || "Owner"))
        {
        let mmEmbed = new Discord.MessageEmbed()
        .setColor('#7df9ff')
        .setTitle('Middlemen Cancel')
        .setDescription('Trade/Sale cancelled. You may now ping middlemen /talk in this channel.')
        .setThumbnail('https://cdn.discordapp.com/attachments/631038745893666816/707354305597800539/dbcz-icon.png')
        .setFooter('CZBot developed by frozensnow#0723')

        message.channel.send(mmEmbed);
        } 

        else message.channel.send("You do not have the correct role to run this command");
	}
}
