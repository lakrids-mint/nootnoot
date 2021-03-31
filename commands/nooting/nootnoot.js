const service = require('../../services/gifAPI');

module.exports = {
    name: 'nootnoot',
    aliases: ['nn'],
    description: 'Get a super noot (with gif)',
    async execute(message, args) {
        message.channel.send('NOOT NOOT :pinga:');
        try {
            const result = await service.getGif('pingu');
            message.channel.send(result);
        } catch (error) {
            console.error(error);
            message.channel.send(error);
        }
    },
};