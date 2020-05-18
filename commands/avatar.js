module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) 
	{

		if(message.member.roles.cache.find(r => r.name === "Middlemen" || "Moderators" || "Admin" || "Owner")){
			if (!message.mentions.users.size) {
				return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
			}
	
			const avatarList = message.mentions.users.map(user => {
				return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;

				
			});

			message.channel.send(avatarList);
		}

		else message.channel.send("You do not have the correct role to run this command");
	},
};

exports.help = {
    name: 'avatar'
};