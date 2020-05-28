const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
	constructor () {
		super('ready', {
			emitter: 'client',
			event: 'ready',
			category: 'client'
		});
	}

	exec () {
		this.client.logger.info(`${this.client.user.tag}, ready to serve ${this.client.users.size} users in ${this.client.guilds.size} servers.`, 'ready');

		// let myGuild = client.guilds.cache.get('460387987230949377');
		// let memberCount = myGuild.memberCount;
		// let memberCountChannel = myGuild.channels.cache.get('715565236941226026');
		// memberCountChannel.setName('Member Count: ' + memberCount)
		// .then(result => console.log(result))
		// .catch(error => console.log(error));
	}
}

module.exports = ReadyListener;