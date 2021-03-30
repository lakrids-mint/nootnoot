const fetch = require('node-fetch');

module.exports = {
    name: 'nootnoot',
    aliases: ['nn'],
    description: 'Get a super noot (with gif)',
    async execute(message, args) {
        message.channel.send('super noot with gif!');
        const url = `https://g.tenor.com/v1/search?q=pingu&key=${process.env.TENOR_API_KEY}&contentfilter=high`;
        try {
            const response = await fetch(url);
            const json = await response.json();
            function getRandomNoot(max) {
                return Math.floor(Math.random() * max);
            }
            console.log('response', json.results.length);
            const randomNoot = getRandomNoot(json.results.length);
            message.channel.send(json.results[randomNoot].url);
        } catch (error) {
            message.channel.send(`Something went wrong - did you do something illegal? :policepanda: Sometimes Pingu needs to rest. Come back later. ${error}`);
        }
    },
};