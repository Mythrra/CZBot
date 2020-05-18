const Discord = require('discord.js');
const client = new Discord.Client();

const {token, prefix} = require('./config.json');
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.login(token);


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "idle",
        game: {
            name: "Currently getting developed",
            type: "PLAYING"
        }
    }); 
});