const { AkairoClient, CommandHandler } = require('discord-akairo');
const {prefix, token} = require('./config.json')

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: ['523713815007854623', '291855108793171969'], // or ['123992700587343872', '86890631690977280']
        }, {
            disableEveryone: true
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: msg => {
                // Get prefix here...
                return prefix;
            },
            allowMention: false
        });

        this.commandHandler.loadAll();

    }
}

const client = new MyClient();
client.login(token);