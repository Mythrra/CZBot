const { Command } = require('discord-akairo');

class LegendsCommand extends Command {
    constructor() {
        super('legends', {
            regex: /^legends$/i
        });
    }

    exec(message, args) {
        return message.reply('We do not middleman for legends as the transfer process is easily scammable and there is no guarantee the account is yours after the trade, please do not ask again.')
    }
}

module.exports = LegendsCommand;