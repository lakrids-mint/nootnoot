const fetch = require('node-fetch');
module.exports = {
    getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    },
    async getGif(searchTerm) {
        console.log(searchTerm);
        const url = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${process.env.TENOR_API_KEY}&contentfilter=high`;
        try {
            const response = await fetch(url);
            const json = await response.json();
            const randomNumber = this.getRandomNumber(json.results.length);
            return (json.results[randomNumber].url);
        } catch (error) {
            console.error('API call error: ', error);
            throw new Error('Something went wrong - did you do something illegal? :policepanda: Sometimes Pingu needs to rest. Come back later.');
        }
    },
};


