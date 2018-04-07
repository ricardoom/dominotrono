
// do stuff w/ the response,
// concatenate all the posts to a single string
// convert string to morse code


  // create the morse code alphabet
  // map sound to each character
  // map custom svg shape to each character
  const alphaMorse = [
      {
        "a" : ". _",
        "b" : "_ . . .",
        "c" : "_ . _ .",
        "d" : "_ . .",
        "e" : ".",
        "f" : ". . _ .",
        "g" : "_ _ .",
        "h" : ". . . .",
        "i" : ". .",
        "j" : ". _ _ _",
        "k" : "_ . _",
        "l" : ". _ . .",
        "m" : "_ _",
        "o" : "_ _ _",
        "p" : ". _ _ .",
        "q" : "_ _ . _",
        "r" : ". _ .",
        "s" : ". . .",
        "t" : "_",
        "u" : ". . _",
        "v" : ". . . _",
        "w" : ". _ _",
        "x" : "_ . . _",
        "y" : "_ . _ _",
        "z" : "_ _ . .",
        "0" : "_ _ _ _ _",
        "1" : ". _ _ _ _",
        "2" : ". . _ _ _",
        "3" : ". . . _ _",
        "4" : ". . . . _",
        "5" : ". . . . ",
        "6" : "_ . . . .",
        "7" : "_ _ . . .",
        "8" : "_ _ _ . .",
        "9" : "_ _ _ _ .",
      }
    ];

// convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    let theResponse = "Whatever We Get From Twitter...";
    // make sure we convert the response to lower case since morse doesnt care about case and our charCodes object uses lower case.
    theResponse = theResponse.toLowerCase();
    return theResponse;
  }

///
/// split the return into indivdual strings so we can map them to their corresponding morse code character in charCodes above.
///

function convertToMorse(charactersToConvert, separator) {
  let characters = charactersToConvert.split(separator);
  console.log("the string is: " + characters);
  //
}

let tweets = twitterResponse();
// invoke the convertToMorse() and pass it as a variable called tweets
convertToMorse(tweets, "");




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


    // a function to pass the input to bot.js
    function callTwitter() {
      let theTwitterHash = cleanUpInput();
      console.log("callTwitter() output: " + theTwitterHash);
      //return theTwitterHash
      // put the input (for now) from into the div below:
      let theOutput = document.getElementById("twitterReturn").innerHTML = theTwitterHash;
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
//     document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
// }
