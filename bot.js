console.log('the bot works');
const config = require('./botConfig');
const Twit = require('twit');
const T = new Twit(config);

//
// Get the hastag to search with from the client
//

let params = {
  q: '%23trumpsucks since:2018-04-4',
  count: 1
}

function gotData(err, data, response) {
  let tweets = data.statuses;
  for (let i =0; i < tweets.length; i++) {
    //console.log(tweets[i].text);
  }
  let theResponse = response;

      console.log(theResponse);
    
}

//T.get('search/tweets', params, gotData);
let twitterReturn = T.get('search/tweets', params, gotData);
