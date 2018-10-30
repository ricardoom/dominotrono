
const indexPage = document.querySelector('.home-page');

const portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');

const tileParent = document.querySelectorAll('.portfolio-flex__content figure img');

const tilePatternTwo = document.getElementsByClassName('svgShapeClip');

// const tiles = Array.from(portfolioTile);
// const tiles = Array.from(tileParent);

const tiles = Array.from(portfolioTile);
const allTheChildren = tiles.map(el => el.childNodes);
// console.log(allTheChildren);
const tilesArray = Array.from(tileParent);
const classesFromTileParent = tilesArray.map(classes => classes.classList);
// console.log(classesFromTileParent);


for (let i = 0; i < portfolioTile.length; i++) {
  const tileClasses = tileParent[i].classList;  
  portfolioTile[i].addEventListener('mouseenter', () => {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
    //console.log(tileClasses);
  });
  portfolioTile[i].addEventListener('mouseleave', () => {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
    //console.log(tileClasses);
  });
};

// portfolioTile.forEach((tile) => {
//   const getChildClass = tile.childNodes[1];
//   const portFolioClass = getChildClass.childNodes[1];
//   const theLastClass = portFolioClass.childNodes[1];
//   const imgClass = Array.from(theLastClass.classList);
//   tile.addEventListener('mouseenter', () => {
    
//     console.log(imgClass);
    
//     // imgClass.remove('portfolioCard');
//     // imgClass.add('portfolioCardOff');
//   });
//   tile.addEventListener('mouseleave', () => {
//     // const getChildClass = tile.childNodes[1];
//     // const portFolioClass = getChildClass.childNodes[1];
//     // const theLastClass = portFolioClass.childNodes[1];
//     // const imgClass = Array.from(theLastClass.classList);
//     console.log(imgClass);
//     // imgClass.add('portfolioCard');
//     // imgClass.remove('portfolioCardOff');
//   })
// });
//////
///// svg.js 
/////
const svgContainer = document.querySelector('.svgjs');

if (svgContainer != null) {
//console.log(svgContainer);

const draw = SVG(svgContainer).size('100%', '100%').viewbox(0,0,1000,1000),
        circle = draw.circle(50).fill('rgba(255,255,200,0.3)').move(120, 20),
        mask = draw.mask().add(circle.clone().fill('rgba(200,100,50,.5)')),
        path = draw.path("M760.3239,900.668S767,906,771,912c0,0-31,41-92.48609,51.02112C662,967,610,967,562.74944,910.5292,503,818,413,605,351.0719,586.52063a66.75826,66.75826,0,0,0-29.20819-6.82773c-10.8646-.23109-21.37952,2.01431-31.98247,3.72468-2.48758.40125-3.22047,2.13721-2.82874,4.43535.78289,4.593,2.45936,23.21372,2.4,27.93631-.0201,1.59927.14866,2.72073,2.0294,3.29209C295.205,620.21219,303,622,315.78251,621.31744a147.88881,147.88881,0,0,0,30.04361-5.26365c9.76495-2.84938,18.56066-7.01647,26.23866-13.62463l1.61944-1.61943c10.52629-10.26335,19.12491-22.34742,30.66327-31.70957,4.84728-3.93294,9.57689-7.976,14.63779-11.66928,9.35246-6.82521,19.99062-11.03753,30.42825-15.68371C449.41353,541.74717,410,492,396,461c-13.23345-29.30265-22.69671-60.34812-43.96028-84.93051C307,324,209,322,209,322c.40486,0,31.15591-13.89315,79-9,88,9,130.93712,64.63873,142.97224,79.07117C440.30019,403.25723,466.30135,458.42426,477,473c20.99926,28.97644,90.61135,68.70042,90.61135,68.70042-10.63.87124-20.2743,5.10767-29.43634,9.94082C528,559,502.80451,586.08835,492.9758,597.44835,481.13039,611.13925,453,635,430,644"),
        length = path.length()
  
//const maskPath = path.fill('none').stroke({width: 1, color: 'rgba(0, 0, 0, 1)'})
//const visiblePath = path.fill('none').stroke({width: 5, color: 'rgba(0, 0, 0, 0.5)'})
// var cover = draw.circle(100, 100).move(20, 20).fill('#f06');


//var hide = draw.circle(100, 100).move(20, 20).fill('#c8f');
// mask.animate(10000, '<>').during(function(pos, morph, eased){
  
//   let m = path.pointAt(eased * length)
//   circle.center(m.x, m.y).fill('rgba(255, 225, 225, 0.5)')
//   path.maskWith(mask)
// }).loop(true, true);
const maskPath = path.fill('none').stroke({width: 1, color: 'rgba(255,255, 255, 0.5)'});

circle.animate(10000, '<>').during(function(pos, morph, eased){
    
    var p = maskPath.pointAt(eased * length)
     circle.center(p.x, p.y).fill('rgba(255, 0, 102, .95)')
    //mask.add(circle.center(p.x, p.y))
    //maskPath.maskWith(mask.center(p.x, p.y))
}).loop(true, true);

////

// var draw = SVG(svgContainer).size(300, 130)
// var circle = draw.circle(50).fill('#fff')

// var mask = draw.mask()
// mask.add(circle.center(35, 35))
// mask.add(circle.clone().center(70, 70).size(70).fill('#ccc'))
// mask.add(circle.clone().center(90, 30).size(30).fill('#999'))
// mask.add(circle.clone().center(105, 115).size(50).fill('#333'))

// var rect = draw.rect(100, 100).move(20, 20).fill('#f06')
// rect.maskWith(mask)

// rect.on('mouseover', function() {
// 	this.animate(300, '<>').fill('#0f9')
// })
// rect.on('mouseout', function() {
// 	this.animate(300, '<>').fill('#f06')
// })


}
///
/// end svg.js
///

///
/// time.js
///

/// This is to get the time of day and then do stuff
/// Mostly the idea is to change the background color
/// based on the time.

// get the time
function getHours() {
  const d = new Date();
  const offset = d.getTimezoneOffset() / 60;
  console.log(offset);
  let h = d.getUTCHours() - offset;
  let absoluteFix = (Math.abs(h));
  h = h - absoluteFix;
return absoluteFix;
}

const bgPairs = [
  {
    start: [
        "#333", "#a49444", "#567", "#789", "#ABC", "#AF0", "#333", "#1AC", "#567", "#7D9", "#AFC", "#a979ca", "#3D3", "#4A4", "#537", "#cff", "#A1C", "#9F0", "#333", "#444", "#5A7", "#7E9", "#1B2", "#4D0"
      ],
    end: [
      "#abc", "#bcd", "#ef1", "#123", "#456", "#789", "#012", "#c1e", "#abc", "#a3f2f3", "#1fe", "#123", "#456", "#28b", "#012", "#c1e", "#bcd", "#edc00b", "#123", "#456", "#789", "#012", "#c1e", "#123"
      ]
  }
];

// Use HSLA values instead of HEX...
// const hslaPairs = [
//   {

//   }
// ];




// Now set them to the hour:
const theHour = getHours();
console.log(theHour);
const start = bgPairs[0].start[theHour];
const end = bgPairs[0].end[theHour];

function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function walk(angle) {
//     angle = Math.Random(180 - theHour);
//     return angle;
//     console.log(angle); 
// }

const theAngle = makeRandomNumber(0, 360);
const thePercentage = makeRandomNumber(0, 100);
const angle = theAngle - theHour; // Hue
const saturation = thePercentage - theHour; // Saturation
const lightness = thePercentage - theHour; // Lightness
const alpha = 0.75; // Alpha
const position = 100 - theHour;

const container = document.querySelector('body');
function setTheGradient() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75) 0%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg,' + start + ',' + end + ')';
};

function setTheGradientHSLA() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75)' + position + '%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg, hsla('+ angle +', '+ saturation +'%,'+ lightness +'%,' + alpha +'), hsla(180, 5%, 12%, 0.2))';
};

setTheGradientHSLA();

///
/// end time.js
///

// do stuff w/ the response,
// concatenate all the posts to a single string
// convert string to morse code


  // create the morse code alphabet
  // map sound to each character
  // map custom svg shape to each character
  // const alphaMorse = [
  //     {
  //       "a" : ". _",
  //       "b" : "_ . . .",
  //       "c" : "_ . _ .",
  //       "d" : "_ . .",
  //       "e" : ".",
  //       "f" : ". . _ .",
  //       "g" : "_ _ .",
  //       "h" : ". . . .",
  //       "i" : ". .",
  //       "j" : ". _ _ _",
  //       "k" : "_ . _",
  //       "l" : ". _ . .",
  //       "m" : "_ _",
  //       "n" : "_ .",
  //       "o" : "_ _ _",
  //       "p" : ". _ _ .",
  //       "q" : "_ _ . _",
  //       "r" : ". _ .",
  //       "s" : ". . .",
  //       "t" : "_",
  //       "u" : ". . _",
  //       "v" : ". . . _",
  //       "w" : ". _ _",
  //       "x" : "_ . . _",
  //       "y" : "_ . _ _",
  //       "z" : "_ _ . .",
  //       "0" : "_ _ _ _ _",
  //       "1" : ". _ _ _ _",
  //       "2" : ". . _ _ _",
  //       "3" : ". . . _ _",
  //       "4" : ". . . . _",
  //       "5" : ". . . . ",
  //       "6" : "_ . . . .",
  //       "7" : "_ _ . . .",
  //       "8" : "_ _ _ . .",
  //       "9" : "_ _ _ _ .",
  //     }
  //   ];
// 

const homePage = document.querySelector('.home-page');

if (homePage != null) {

  const morseSVG =
    {
      dotSVG : `<svg class="dot" viewBox="0 0 107.66667 107.66667">
        <title>dot</title>
        <circle cx="53.83333" cy="53.83333" r="53.83333" />
      </svg>`,
      dashSVG : `<svg class="dash" viewBox="0 0 200 108.48468">
        <title>dash</title>
        <rect width="200" height="108.48468" rx="54.24229" ry="54.24229" />
      </svg>`
    };

    const Dash = morseSVG.dashSVG;
    const Dot = morseSVG.dotSVG;
    const alphaMorse = [
        {
          //"a" : ". _",
          "a" : `${Dot}${Dash}`,
          //"b" : "_ . . .",
          "b" : `${Dash}${Dot}${Dot}${Dot}`,
          //"c" : "_ . _ .",
          "c" : `${Dash}${Dot}${Dash}${Dot}`,
          //"d" : "_ . .",
          "d" : `${Dash} ${Dot} ${Dot}`,
          //"e" : ".",
          "e" : `${Dot}`,
          //"f" : ". . _ .",
          "f" : `${Dot} ${Dot} ${Dash} ${Dot}`,
          //"g" : "_ _ .",
          "g" : `${Dash} ${Dash} ${Dot}`,
          //"h" : ". . . .",
          "h" : `${Dot} ${Dot} ${Dot} ${Dot}`,
          // "i" : ". .",
          "i" : `${Dot} ${Dot}`,
          // "j" : ". _ _ _",
          "j" : `${Dot} ${Dash} ${Dash} ${Dash}`,
          // "k" : "_ . _",
          "k" : `${Dash} ${Dot} ${Dash}`,
          //"l" : ". _ . .",
          "l" : `${Dot} ${Dash} ${Dot} ${Dot}`,
          // "m" : "_ _",
          "m" : `${Dash} ${Dash}`,
          // "n"
          "n" : `${Dash} ${Dot}`,
          //"o" : "_ _ _",
          "o" : `${Dash} ${Dash} ${Dash}`,
          //"p" : ". _ _ .",
          "p" : `${Dot} ${Dash} ${Dash} ${Dot}`,
          //"q" : "_ _ . _",
          "q" : `${Dash} ${Dash} ${Dot} ${Dash}`,
          // "r" : ". _ .",
          "r" : `${Dot} ${Dash} ${Dot}`,
          //"s" : ". . .",
          "s" : `${Dot} ${Dot} ${Dot}`,
          //"t" : "_",
          "t" : `${Dash}`,
          // "u" : ". . _",
          "u" : `${Dot} ${Dot} ${Dash}`,
          // "v" : ". . . _",
          "v" : `${Dot} ${Dot} ${Dot} ${Dash}`,
          //"w" : ". _ _",
          "w" : `${Dot}${Dash}${Dash}`,
          // "x" : "_ . . _",
          "x" : `${Dash} ${Dot} ${Dot} ${Dash}`,
          // "y" : "_ . _ _",
          "y" : `${Dash} ${Dot} ${Dash} ${Dash}`,
          // "z" : "_ _ . .",
          "z" : `${Dash} ${Dash} ${Dot} ${Dot}`,
          // "0" : "_ _ _ _ _",
          "0" : `${Dash} ${Dash} ${Dash} ${Dash} ${Dash}`,
          // "1" : ". _ _ _ _",
          "1" : `${Dot} ${Dash} ${Dash} ${Dash} ${Dash}`,
          // "2" : ". . _ _ _",
          "2" : `${Dot} ${Dot} ${Dash} ${Dash} ${Dash}`,
          // "3" : ". . . _ _",
          "3" : `${Dot} ${Dot} ${Dot} ${Dash} ${Dash}`,
          // "4" : ". . . . _",
          "4" : `${Dot} ${Dot} ${Dot} ${Dot} ${Dash}`,
          // "5" : ". . . . ",
          "5" : `${Dot} ${Dot} ${Dot} ${Dot} `,
          // "6" : "_ . . . .",
          "6" : `${Dash} ${Dot} ${Dot} ${Dot} ${Dot}`,
          // "7" : "_ _ . . .",
          "7" : `${Dash} ${Dash} ${Dot} ${Dot} ${Dot}`,
          // "8" : "_ _ _ . .",
          "8" : `${Dash} ${Dash} ${Dash} ${Dot} ${Dot}`,
          // "9" : "_ _ _ _ .",
          "9" : `${Dash} ${Dash} ${Dash} ${Dash} ${Dot}`,
          // spell out "hash"
          "#" : `${Dot} ${Dot} ${Dot} ${Dot} ${Dot}${Dash} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot}`,
        }
      ];

// convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    // only call api when new query is sent from ui
    let theResponse = "cactus girls #summerartcamp #imaginestudios #cactus #create";
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
  const svgDash = morseSVG.dashSVG;
  const svgDot = morseSVG.dotSVG;
  let incomingMorse = theMorseText;
  console.log("transformDotsDashes() is logging this: " + theMorseText);
  console.log(theMorseText);
  //console.log(dot, dash, svgDot, svgDash);
    // for (dot = 0; dot < theMorseText.length; dot++) {
    //   let theSVGDots = alphaMorse[0][theMorseText][dot];
    //   console.log(theSVGDots);
    // };
  //return svgDotsAndDashes;
  }

function convertToMorse(charactersToConvert, separator) {
  let characters = charactersToConvert.split(separator);
  //console.log("the string is: " + characters);

  for (c = 0; c < characters.length; c++) {
    if (characters[c] != " ") {
      //console.log("The phoentic glyph is: " + characters[c] + "\n " + "The Morse code is: " + alphaMorse[0][characters[c]]);
      let theFinalMorseText = alphaMorse[0][characters[c]];
      document.getElementById("morseOutput").innerHTML += theFinalMorseText;
      // let theFinalMorseSVG = transformDotsDashes(theFinalMorseText);
      // document.getElementById("morseOutputSVG").innerHTML += theFinalMorseSVG;
    }
  }
}

 // // invoke the convertToMorse() and pass it as a variable called tweets which is output of the twitterResponse() function.
  let tweets = twitterResponse();
  convertToMorse(tweets, "")

// Get User Input
    // get the user input from the input field
    let usersHash = document.getElementById("the-hash-input");
    const userButton = document.getElementById("hash-button");
    const resetButton = document.getElementById("reset-button");
    //resetButton.setAttribute("type", "reset");

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
//userButton.addEventListener("click", callTwitter);
//resetButton.addEventListener("click", resetInput);

  // play back the messages as morse
    // functionality

    // allow user to control speed of playback
    // contols to repeat / start at the beginning
    // allow all messages to be played concurrently
    // allow all messages to be played in serial
    // concurent playback is default

//

    }