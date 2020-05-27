const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js');

class AvatarCommand extends Command {
    constructor() {
        super('avatar', {
           aliases: ['avatar', 'pfp'] 
        });
    }

    exec(message) {

        const user = message.mentions.users.first();

        if (!message.mentions.users.size) {
            let embed = new MessageEmbed()
            .setTitle(message.author.username + `\'s Avatar`)
            .setFooter('CZBot developed by frozensnow')
            .setImage(message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))

            message.channel.send(embed);
            
        }

        else {
            let sEmbed = new MessageEmbed()
            .setTitle(user.username + `\'s Avatar`)
            .setFooter('CZBot developed by frozensnow')
            .setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            message.channel.send(sEmbed)
        }


    }
}

module.exports = AvatarCommand;