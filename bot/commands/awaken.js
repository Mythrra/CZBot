const { Command } = require('discord-akairo');
class AwakenCommand extends Command {
    constructor() {
        super('awaken', {
           aliases: ['awaken', 'awakenmymasters'] 
        
        });
    }

    exec(message){
    return message.channel.send('https://tenor.com/view/jojo-wamuu-esidisi-kars-pillar-men-gif-16379050');
    } 
    
}

    module.exports = AwakenCommand;