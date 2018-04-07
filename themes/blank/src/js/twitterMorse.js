
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

const textToSVG = [
  {
    dotSVG : `<svg xmlns="http://www.w3.org/2000/svg" width="108.66667" height="108.66667" viewBox="0 0 108.66667 108.66667">
      <title>dot</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle id="_Ellipse_" data-name="&lt;Ellipse&gt;" cx="54.33333" cy="54.33333" r="53.83333" fill="#231f20" stroke="#fff" stroke-miterlimit="10"/>
        </g>
      </g>
    </svg>
`,
    dashSVG : `<svg xmlns="http://www.w3.org/2000/svg" width="201" height="109.48468" viewBox="0 0 201 109.48468">
      <title>dash</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect x="0.5" y="0.5" width="200" height="108.48468" rx="54.24229" ry="54.24229" fill="#231f20" stroke="#fff" stroke-miterlimit="10"/>
        </g>
      </g>
    </svg>
`
  }
];


// convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    // only call api when new query is sent from ui
    let theResponse = "Whatever We Get From Twitter";
    // make sure we convert the response to lower case since morse doesnt care about case and our charCodes object uses lower case.
    theResponse = theResponse.toLowerCase();
    return theResponse;
  }

///
/// split the return into indivdual strings so we can map them to their corresponding morse code character in charCodes above.
///

// a function to convert the text dots and dashes to svgs
// should take the output from convertToMorse() as an argument and return the input text morse code as svgs in the shapes of dots or dashes.
function transformDotsDashes(theMorseText) {
  const dot = ".";
  const dash = "_";
  const svgDash = textToSVG[0].dashSVG;
  const svgDot = textToSVG[0].dotSVG;
  console.log(dot, dash, svgDot, svgDash);
  }

function convertToMorse(charactersToConvert, separator) {
  let characters = charactersToConvert.split(separator);
  //console.log("the string is: " + characters);

  for (c = 0; c < characters.length; c++) {
    if (characters[c] != " ") {
      //console.log("The phoentic glyph is: " + characters[c] + "\n " + "The Morse code is: " + alphaMorse[0][characters[c]]);
      let theFinalMorseText = alphaMorse[0][characters[c]];
      document.getElementById("morseOutput").innerHTML += theFinalMorseText;
      let theFinalMorseSVG = transformDotsDashes(theFinalMorseText);
      document.getElementById("morseOutputSVG").innerHTML += theFinalMorseSVG;
    }
  }
}

 // // invoke the convertToMorse() and pass it as a variable called tweets which is output of the twitterResponse() function.
  let tweets = twitterResponse();
  convertToMorse(tweets, "")

//transformDotsDashes();

// Get User Input
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

  // play back the messages as morse
    // functionality

    // allow user to control speed of playback
    // contols to repeat / start at the beginning
    // allow all messages to be played concurrently
    // allow all messages to be played in serial
    // concurent playback is default

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
