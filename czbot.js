const {AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler} = require('discord-akairo');
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

        this.inhibitorHandler = new InhibitorHandler(this, {
            directory: './inhibitors/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.loadAll();

        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.inhibitorHandler.loadAll();

        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();

    }
}

const client = new MyClient();
client.login(token);