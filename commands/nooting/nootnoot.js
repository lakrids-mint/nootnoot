const { DiscordAPIError } = require('discord.js');
const service = require('../../services/gifAPI');

module.exports = {
    name: 'nootnoot',
    aliases: ['nn'],
    description: 'Noot Noot! Get a Pingu gif. Add an optional search term after the command eg. .nn happy',
    cooldown: 4,
    //args: true,
    async execute(message, args) {
        try {
            const result = await service.getGif(['pingu', 'noot noot'], args);
            message.channel.send(result);
        } catch (error) {
            console.error(error);
            message.channel.send(error);
        }
    },
};