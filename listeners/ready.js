const { Listener } = require('discord-akairo');
const { client } = require('../czbot')

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
    let myGuild = client.guilds.cache.get('Put Server copy ID HERE');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('Put Channel Id Here');
    memberCountChannel.setName('Member Count: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    }
}

module.exports = ReadyListener;