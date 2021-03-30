module.exports = {
    name: 'noot',
    description: 'Get a simple noot',
    execute(message, args) {
        message.channel.send('noot!');
    },
};