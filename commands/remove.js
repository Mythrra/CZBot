const { Command } = require('discord-akairo');

class RemoveCommand extends Command {
    constructor() {
        super('remove', {
            aliases: ['remove'],
            args: [
                {
                    id: 'commandID'
                }
            ],
            ownerOnly: true,
            category: 'owner'
        });
    }

    exec(message, args) {
        // `this` refers to the command object.
        this.handler.remove(args.commandID);
        return message.reply(`Remove command ${args.commandID}`);
    }
}

module.exports = RemoveCommand;