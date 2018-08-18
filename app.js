const config = require('./config.json');

const battlegrounds = require('battlegrounds')
const api = new battlegrounds(config.pubg.apiKey, config.pubg.region);




function getSeasonsList(data){
    if (data.attributes.isCurrentSeason == true){
        console.log(data);
    }
}

function getPlayerSees(data){
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log(data);
}

function getmatchdata(data){
    console.log(data);
}

async function init(){

    const seasons = await api.getSeasons();
    await seasons.forEach((data) => getSeasonsList(data));

    

    const players = await api.getPlayers({names: ['solid__snake', 'bumhole_sniper69', 'c_mcd', 'spearmizzle']});
    await players.forEach((data) => getPlayerInfo(data));

    // const player1 = await api.getPlayerSeason({id:'account.821f6a8c14934bc8a330b1e9f6097c62', season_id:'division.bro.official.2018-08'});
    // await player1.forEach((data) => getPlayerSees(data));

    // const player1 = await api.getPlayer({id:'account.821f6a8c14934bc8a330b1e9f6097c62'});
    // getmatchdata(player1);

    const player1 = await api.getPlayerSeason({id:'account.821f6a8c14934bc8a330b1e9f6097c62', season_id:'division.bro.official.2018-08'});
    const playerData = await player1.attributes.gameModeStats["squad-fpp"];
    getmatchdata(goodData);


}


init();