const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')
const colors = require('../colors.json');

class UserinfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo'] 
        });
    }

    exec(message) {

        const user = message.mentions.users.first();

        if (!message.mentions.users.size) {
            let embed = new MessageEmbed()
            .setColor(colors.aqua)
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setFooter('CZBot developed by frozensnow', message.author.avatarURL({dynamic: true}))
            .setTitle('User Info')
            .setAuthor(`${message.author.name}\'s Info`, message.author.avatarURL({dynamic: true}))
            .addField("**Username:**", `${message.author.username}`, true)
            .addField("**ID:**", `${message.author.id}`, true)
            .addField("**Status:**", `${message.author.presence.status}`, true)
            .addField("**Discriminator:**", `${message.author.discriminator}`, true)
            .addField("**Created At:**", `${message.author.createdAt}`, true)
    
            return message.channel.send(embed)
        }

        else {
            let embed = new MessageEmbed()
            .setColor(colors.aqua)
            .setThumbnail(user.avatarURL({dynamic: true}))
            .setFooter('CZBot developed by frozensnow', user.avatarURL({dynamic: true}))
            .setTitle('User Info')
            .setAuthor(`${user.username}\'s Info`, user.avatarURL({dynamic: true}))
            .addField("**Username:**", `${user.username}`, true)
            .addField("**ID:**", `${user.id}`, true)
            .addField("**Status:**", `${user.presence.status}`, true)
            .addField("**Discriminator:**", `${user.discriminator}`, true)
            .addField("**Created At:**", `${user.createdAt}`, true)
    
            return message.channel.send(embed)
        }

    }
}

module.exports = UserinfoCommand;