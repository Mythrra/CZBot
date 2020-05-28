const { Command } = require('discord-akairo');

class RollCommand extends Command {
    constructor() {
        super('roll', {
            aliases: ['roll', 'diceroll'],
        });
    }

    exec(message, args) {
        const diceRoll = () => Math.floor(Math.random() * 6) + 1;
        message.reply("rolled a " + diceRoll());
    }
}

module.exports = RollCommand;