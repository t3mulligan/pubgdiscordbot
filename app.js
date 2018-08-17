// Require model and initiate client with api key
const pubg = require('pubg.js');
const config = require('./config.json');
const client = new pubg.Client(config.pubg.apiKey, config.pubg.region);


// Get a single player using their name
const player = client.getPlayer({name: 'solid__snake'})
    .then(player => console.log(player))
    .catch(error => console.log(error));
