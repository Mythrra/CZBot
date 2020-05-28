const { Command } = require('discord-akairo');

class SayCommand extends Command {
	constructor() {
		super('say', {
			aliases: ['say'],
			channel: 'guild',
			args: [
				{
					id: 'thing',
					type: 'string',
					match: 'content'
				}
			],
		});
	}

	userPermissions(message) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator' || 'Admin' || 'Owner')) {
            return 'Moderator' || 'Admin' || 'Owner';
        }

        return null;
    }

	async exec(message, { thing }) {
		message.channel.send(thing);
		message.delete();
	}
}

module.exports = SayCommand;