// Require model and initiate client with api key
const pubg = require('pubg.js');
const config = require('./config.json');
const client = new pubg.Client(config.pubg.apiKey, config.pubg.region);
