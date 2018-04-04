console.log('the bot works');
const config = require('./botConfig');
const Twit = require('twit');
const T = new Twit(config);

//
// Get the hastag to search with from the client
//

let params = {
  q: '%23morsecode since:2018-04-4',
  count: 5
}

function gotData(err, data, response) {
  let tweets = data.statuses;
  //console.log(tweets);
  for (let i =0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

T.get('search/tweets', params, gotData);
