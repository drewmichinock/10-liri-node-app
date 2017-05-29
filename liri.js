// write the code you need to grab the data from keys.js. 

var Twitter = require("twitter");

var keys = require("./keys.js");

var client = new Twitter(

    keys.twitterKeys

);

var request = require("request");

var args = process.argv.slice(2);

if (args[0] === "my-tweets") {

    doTweets();

} else if (args[0] === "spotify-this-song") {

    doSpotify();

} else if (args[0] === "movie-this") {

    doOMDB();

} else if (args[0] === "do-what-it-says") {

    doText();

} else {

    console.log("missing argument");

    return;

}


function doTweets() {

    var params = {screen_name: 'drew_michinock'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {

        var tweetText = tweets.map(function(tweet) {

            return tweet.text;

        });

        console.log(tweetText);
    }
    });
    
}
 
function doSpotify() {

    
}

function doOMDB() {

    var title = args[1] || "Mr. Nobody";

    request("http://www.omdbapi.com/?apikey=37326a07&t=" + title, function(error, response, body){

        if (!error) {

            var body = JSON.parse(body);

            console.log("Title: " + body.Title);
            console.log("Year: " + body.Year);
            console.log("IMDb Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("IMDb URL: " + "http://www.imdb.com/title/" + body.imdbID + "/");

        }

    });
    
}

function doText() {

}