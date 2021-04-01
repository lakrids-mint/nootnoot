const fetch = require('node-fetch');
const utils = require('../utils/utils');

module.exports = {
    async getGif(searchTerms, args) {
        const searchTerm = searchTerms[utils.getRandomNumber(searchTerms.length)];
        const userInput = args ? args[0] : '';
        console.log('arg', args);
        const url = `https://g.tenor.com/v1/search?q=${searchTerms[0]}%20${userInput}&key=${process.env.TENOR_API_KEY}&contentfilter=high`;
        console.log(url)
        try {
            const response = await fetch(url);
            const json = await response.json();
            const randomNumber = utils.getRandomNumber(json.results.length);
            console.log('number of gifs: ', json.results.length);
            return (json.results[randomNumber].url);
        }
        catch (error) {
            console.error('API call error: ', error);
            throw new Error('Something went wrong - did you do something illegal? :policepanda: Sometimes Pingu needs to rest. Come back later.');
        }
    },
};


