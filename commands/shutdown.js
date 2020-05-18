module.exports =
{
    async run(client, message, args) {
        if(message.author.id != "523713815007854623") return message.channel.send("You're the bot the owner!")
    
        try {
            await message.channel.send("Bot is shutting down...")
            process.exit()
        } catch(e) {
            message.channel.send(`ERROR: ${e.message}`)
        };
      }
    }
    