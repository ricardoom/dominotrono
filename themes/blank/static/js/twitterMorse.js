"use strict";

var homePage = document.querySelector('.home-page');

if (homePage != null) {
  // convert the response to morse code
  // get the response from twitter
  var twitterResponse = function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    // only call api when new query is sent from ui
    var theResponse = 'cactus girls #summeratcamp #imaginestudios #cactus #create'; // make sure we convert the response to lower case since morse doesn't care about case and our charCodes object uses lower case.

    theResponse = theResponse.toLowerCase();
    return theResponse;
  }; ///
  /// split the return into individual strings so we can map them to their corresponding morse code character in charCodes above.
  ///
  // a function to convert the text dots and dashes to svgs
  // should take the output from convertToMorse() as an argument and return the input text morse code as svgs in the shapes of dots or dashes.


  var transformDotsDashes = function transformDotsDashes(theMorseText) {
    var dot = '.';
    var dash = '_';
    var svgDash = morseSVG.dashSVG;
    var svgDot = morseSVG.dotSVG;
    var incomingMorse = theMorseText;
    console.log('transformDotsDashes() is logging this: ' + theMorseText);
    console.log(theMorseText); //console.log(dot, dash, svgDot, svgDash);
    // for (dot = 0; dot < theMorseText.length; dot++) {
    //   let theSVGDots = alphaMorse[0][theMorseText][dot];
    //   console.log(theSVGDots);
    // };
    //return svgDotsAndDashes;
  };

  var convertToMorse = function convertToMorse(charactersToConvert, separator) {
    var characters = charactersToConvert.split(separator); //console.log("the string is: " + characters);

    for (c = 0; c < characters.length; c++) {
      if (characters[c] != ' ') {
        //console.log("The phoentic glyph is: " + characters[c] + "\n " + "The Morse code is: " + alphaMorse[0][characters[c]]);
        var theFinalMorseText = alphaMorse[0][characters[c]];
        document.getElementById('morseOutput').innerHTML += theFinalMorseText; // let theFinalMorseSVG = transformDotsDashes(theFinalMorseText);
        // document.getElementById("morseOutputSVG").innerHTML += theFinalMorseSVG;
      }
    }
  }; // // invoke the convertToMorse() and pass it as a variable called tweets which is output of the twitterResponse() function.


  //resetButton.setAttribute("type", "reset");
  var resetInput = function resetInput() {
    if (usersHash.value != '') {
      usersHash.value = '';
    }
  }; // capture the user's input


  var getHashTag = function getHashTag() {
    var newHash = usersHash.value;
    return newHash;
  }; // function to remove white space after user input


  var cleanUpInput = function cleanUpInput() {
    hashTag = getHashTag(); // a simple regular expression to remove whitespace

    noSpaceHash = hashTag.replace(/\s/g, '');
    return noSpaceHash;
  }; // a function to pass the input to bot.js


  var callTwitter = function callTwitter() {
    var theTwitterHash = cleanUpInput();
    console.log('callTwitter() output: ' + theTwitterHash); //return theTwitterHash
    // put the input (for now) from into the div below:

    var theOutput = document.getElementById('twitterReturn').innerHTML = theTwitterHash;
  }; //
  // On button press, clean up the user input and request the last 25 tweets about said hashTag
  //userButton.addEventListener("click", callTwitter);
  //resetButton.addEventListener("click", resetInput);
  // play back the messages as morse
  // functionality
  // allow user to control speed of playback
  // controls to repeat / start at the beginning
  // allow all messages to be played concurrently
  // allow all messages to be played in serial
  // concurrent playback is default
  //


  var morseSVG = {
    dotSVG: "<svg class=\"dot\" viewBox=\"0 0 107.66667 107.66667\">\n        <title>dot</title>\n        <circle cx=\"53.83333\" cy=\"53.83333\" r=\"53.83333\" />\n      </svg>",
    dashSVG: "<svg class=\"dash\" viewBox=\"0 0 200 108.48468\">\n        <title>dash</title>\n        <rect width=\"200\" height=\"108.48468\" rx=\"54.24229\" ry=\"54.24229\" />\n      </svg>"
  };
  var Dash = morseSVG.dashSVG;
  var Dot = morseSVG.dotSVG;
  var alphaMorse = [{
    //"a" : ". _",
    a: "".concat(Dot).concat(Dash),
    //"b" : "_ . . .",
    b: "".concat(Dash).concat(Dot).concat(Dot).concat(Dot),
    //"c" : "_ . _ .",
    c: "".concat(Dash).concat(Dot).concat(Dash).concat(Dot),
    //"d" : "_ . .",
    d: "".concat(Dash, " ").concat(Dot, " ").concat(Dot),
    //"e" : ".",
    e: "".concat(Dot),
    //"f" : ". . _ .",
    f: "".concat(Dot, " ").concat(Dot, " ").concat(Dash, " ").concat(Dot),
    //"g" : "_ _ .",
    g: "".concat(Dash, " ").concat(Dash, " ").concat(Dot),
    //"h" : ". . . .",
    h: "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot),
    // "i" : ". .",
    i: "".concat(Dot, " ").concat(Dot),
    // "j" : ". _ _ _",
    j: "".concat(Dot, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash),
    // "k" : "_ . _",
    k: "".concat(Dash, " ").concat(Dot, " ").concat(Dash),
    //"l" : ". _ . .",
    l: "".concat(Dot, " ").concat(Dash, " ").concat(Dot, " ").concat(Dot),
    // "m" : "_ _",
    m: "".concat(Dash, " ").concat(Dash),
    // "n"
    n: "".concat(Dash, " ").concat(Dot),
    //"o" : "_ _ _",
    o: "".concat(Dash, " ").concat(Dash, " ").concat(Dash),
    //"p" : ". _ _ .",
    p: "".concat(Dot, " ").concat(Dash, " ").concat(Dash, " ").concat(Dot),
    //"q" : "_ _ . _",
    q: "".concat(Dash, " ").concat(Dash, " ").concat(Dot, " ").concat(Dash),
    // "r" : ". _ .",
    r: "".concat(Dot, " ").concat(Dash, " ").concat(Dot),
    //"s" : ". . .",
    s: "".concat(Dot, " ").concat(Dot, " ").concat(Dot),
    //"t" : "_",
    t: "".concat(Dash),
    // "u" : ". . _",
    u: "".concat(Dot, " ").concat(Dot, " ").concat(Dash),
    // "v" : ". . . _",
    v: "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dash),
    //"w" : ". _ _",
    w: "".concat(Dot).concat(Dash).concat(Dash),
    // "x" : "_ . . _",
    x: "".concat(Dash, " ").concat(Dot, " ").concat(Dot, " ").concat(Dash),
    // "y" : "_ . _ _",
    y: "".concat(Dash, " ").concat(Dot, " ").concat(Dash, " ").concat(Dash),
    // "z" : "_ _ . .",
    z: "".concat(Dash, " ").concat(Dash, " ").concat(Dot, " ").concat(Dot),
    // "0" : "_ _ _ _ _",
    '0': "".concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash),
    // "1" : ". _ _ _ _",
    '1': "".concat(Dot, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash),
    // "2" : ". . _ _ _",
    '2': "".concat(Dot, " ").concat(Dot, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash),
    // "3" : ". . . _ _",
    '3': "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dash, " ").concat(Dash),
    // "4" : ". . . . _",
    '4': "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dash),
    // "5" : ". . . . ",
    '5': "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " "),
    // "6" : "_ . . . .",
    '6': "".concat(Dash, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot),
    // "7" : "_ _ . . .",
    '7': "".concat(Dash, " ").concat(Dash, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot),
    // "8" : "_ _ _ . .",
    '8': "".concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dot, " ").concat(Dot),
    // "9" : "_ _ _ _ .",
    '9': "".concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dash, " ").concat(Dot),
    // spell out "hash"
    '#': "".concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot).concat(Dash, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot, " ").concat(Dot)
  }];
  var tweets = twitterResponse();
  convertToMorse(tweets, ''); // Get User Input
  // get the user input from the input field

  var usersHash = document.getElementById('the-hash-input');
  var userButton = document.getElementById('hash-button');
  var resetButton = document.getElementById('reset-button');
}