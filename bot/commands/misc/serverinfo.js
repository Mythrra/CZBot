const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')
const colors = require('../../colors.json');

class ServerinfoCommand extends Command {
    constructor() {
        super('serverinfo', {
           aliases: ['serverinfo'] 
        });
    }

    exec(message) {
        let embed = new MessageEmbed()
        .setColor(colors.crimson)
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .setFooter('CZBot developed by frozensnow', message.guild.iconURL({dynamic: true}))
        .setTitle('Server Info')
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL({dynamic: true}))
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .setTimestamp()

        return message.channel.send(embed)
    }
}

module.exports = ServerinfoCommand;