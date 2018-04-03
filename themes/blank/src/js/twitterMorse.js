/// get the twitter api key and make sure we can make requests and get a responsive

// do stuff w/ the response,

// asumes we can have a string back from twitter w/ last 25 posts w/ a given hastag
// concatenate all the posts to a single string
// convert string to morse code
  // find libaray to convert from string to morse
  // or will have to create our own
  // create the morse code alphabet
  // map sound to each character
  // map custom svg shape to each character
  const alphaMorse = [
      {
        "a" : [
          {
            morse : ". _",
            svg : "<svg></svg>",
            mp3 : "",
          },
        ],
        "b" : "_ . . .",
        "c" : "_ . _ .",
        "d" : "_ . .",
        "e" : ".",
        "f" : ". . _ .",
        "g" : "_ _ .",
      }
    ];

  // convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    let theResponse = "whatever we got from twitter...";
    //console.log(theResponse);
    return theResponse;
  }
  function convertToMorse() {
    let convert = twitterResponse;
    //convert.split("");
    console.log(convert);
  }
// play back the messages as morse
// functionality
  // allow for user input
    // get the user input from the input field

    let usersHash = document.getElementById("the-hash-input");
    const userButton = document.getElementById("hash-button");
    const resetButton = document.getElementById("reset-button");
    resetButton.setAttribute("type", "reset");

    function resetInput() {
      if (usersHash.value != "") {
      usersHash.value = "";
    }
  }
    // capture the user's input
    function getHashTag() {
      let newHash = usersHash.value
      return newHash;
    };
    // function to remove white space after user input
    function cleanUpInput() {
      hashTag = getHashTag();
      // a simple regular expression to remove whitespace
      noSpaceHash = hashTag.replace(/\s/g, "");
      return noSpaceHash;
    };
    // function to construct the api call w/ the cleaned up user input
    function callTwitter() {
      theTwitterHash = cleanUpInput();
      // TODO: set up twitter dev account
      twitterAPIKey = "/theKey";
      twitterURL = "https://api.twitter.com/dev/something/" + theTwitterHash + twitterAPIKey;
      console.log(twitterURL);
      }
//
// On button press, clean up the user input and request the last 25 tweets about said hashTag
userButton.addEventListener("click", callTwitter);
resetButton.addEventListener("click", resetInput);

  // allow user to control speed of playback
  // contols to repeat / start at the beginning
  // allow all messages to be played concurrently
  // allow all messages to be played in serial
    // concurent playback is default
// only call api when new query is sent from ui
//









<!--

//Morse code converter- By Luke Watson (luke@lukewatson.f2s.com)
//Script featured on JK (http://javascriptkit.com)
//Visit http://javascriptkit.com for this script and more
//
// var charCodes = new Array(36);
// charCodes["a"]=". _";
// charCodes["b"]="_ . . .";
// charCodes["c"]="_ . _ .";
// charCodes["d"]="_ . .";
// charCodes["e"]=".";
// charCodes["f"]=". . _ .";
// charCodes["g"]="_ _ .";
// charCodes["h"]=". . . .";
// charCodes["i"]=". .";
// charCodes["j"]=". _ _ _";
// charCodes["k"]="_ . _";
// charCodes["l"]=". _ . .";
// charCodes["m"]="_ _";
// charCodes["n"]="_ .";
// charCodes["o"]="_ _ _";
// charCodes["p"]=". _ _ .";
// charCodes["q"]="_ _ . _";
// charCodes["r"]=". _ .";
// charCodes["s"]=". . .";
// charCodes["t"]="_";
// charCodes["u"]=". . _";
// charCodes["v"]=". . . _";
// charCodes["w"]=". _ _";
// charCodes["x"]="_ . . _";
// charCodes["y"]="_ . _ _";
// charCodes["z"]="_ _ . .";
// charCodes["1"]=". _ _ _ _";
// charCodes["2"]=". . _ _ _";
// charCodes["3"]=". . . _ _";
// charCodes["4"]=". . . . _";
// charCodes["5"]=". . . . .";
// charCodes["6"]="_ . . . .";
// charCodes["7"]="_ _ . . .";
// charCodes["8"]="_ _ _ . .";
// charCodes["9"]="_ _ _ _ .";
// charCodes["0"]="_ _ _ _ _";
// var temp=''
//
// function encode() {
//   document.morsecode.chars.value = document.morsecode.chars.value.toLowerCase();
//   document.morsecode.codebox.value = "";
//   temp = ''
//
//   var chars = document.morsecode.chars.value.split("");
//
//   for (a = 0; a < chars.length; a++) {
//     if (chars[a] != " ") {
//         if (window.charCodes[chars[a]]) {
//           document.morsecode.codebox.value += charCodes[chars[a]] + "    ";
//           temp += chars[a] + "=" + charCodes[chars[a]] + "\n";
//         }
//           else temp += chars[a] + "=(None)\n";
//         }
//         else temp += "\n";
//     }
    //document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
//}
