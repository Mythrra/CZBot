const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class MmstartCommand extends BaseCommand {
  constructor() {
    super('mmstart', 'middlemen', []);
  }

  run(client, message, args) {
    if(message.member.roles.cache.find(r => r.name === "Middlemen" || "Moderators" || "Admin" || "Owner"))
        {
        let mmEmbed = new Discord.MessageEmbed()
        .setColor('#7df9ff')
        .setTitle('Middlemen Start')
        .setDescription('Trade/Sale Started. If you are not involved please do not talk / ping in this channel until we are finished. **NOTE: Once you send the code to the middleman, then you agree to the deal. Make sure you made up your mind before sending the account info.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/631038745893666816/707354305597800539/dbcz-icon.png')
        .setFooter('CZBot developed by frozensnow#0723')

        message.channel.send(mmEmbed);
        }   
        
        else message.channel.send("You do not have the correct role to run this command");
  }
}