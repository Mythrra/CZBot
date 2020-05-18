const discord = require('discord.js');
const client = new discord.Client();

const token = require('./config.json').token;

client.login(token);

//client.on('ready', () => {
//     let myGuild = client.guilds.cache.get('Put Server copy ID HERE');
//     let memberCount = myGuild.memberCount;
//     let memberCountChannel = myGuild.channels.cache.get('Put Channel Id Here');
//     memberCountChannel.setName('Member Count: ' + memberCount)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// });

// client.on('guildMemberAdd', member => {
//     let myGuild = client.guilds.cache.get('Put Server copy ID HERE');
//     let memberCount = myGuild.memberCount;
//     let memberCountChannel = myGuild.channels.cache.get('Put Channel Id Here');
//     memberCountChannel.setName('Member Count: ' + memberCount)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// });

// client.on('guildMemberRemove', member => {
//     let myGuild = client.guilds.cache.get('Put Server copy ID HERE');
//     let memberCount = myGuild.memberCount;
//     let memberCountChannel = myGuild.channels.cache.get('Put Channel Id Here');
//     memberCountChannel.setName('Member Count: ' + memberCount)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// });