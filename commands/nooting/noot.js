const utils = require('../../utils/utils');


    
    module.exports = {
    name: 'noot',
    description: 'Get a simple noot',
    list_of_noots: ["NOOT!", "noot", "blah noot", "not a good day to noot", "<a:fistface:818638861646823494>"],
    execute(message, args) {
            
        message.channel.send(this.list_of_noots[utils.getRandomNumber(this.list_of_noots.length)]);
    },
};

