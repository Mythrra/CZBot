const { Command } = require('discord-akairo');
class YamchaCommand extends Command {
    constructor() {
        super('yamcha', {
           aliases: ['yamcha'] 
        
        });
    }


    userPermissions(message) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator' || 'Admin' || 'Owner')) {
            return 'Moderator' || 'Admin' || 'Owner';
        }

        return null;
    }
    exec(message){
    return message.channel.send(':goat::regional_indicator_y::regional_indicator_a::regional_indicator_m::regional_indicator_c::regional_indicator_h::regional_indicator_a::goat::regional_indicator_t::regional_indicator_h::regional_indicator_e::goat::regional_indicator_g::regional_indicator_o::regional_indicator_a::regional_indicator_t::goat:');
    } 
    
}

    module.exports = YamchaCommand;