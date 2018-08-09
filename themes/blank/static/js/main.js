
const shortCanvas = document.querySelector('.shortcode-canvas');

if (shortCanvas != null) {

  shortCanvas.width = window.innerWidth - 200;
  shortCanvas.height = window.innerHeight - 200;

  const ctx = shortCanvas.getContext('2d');


function Circle(x, y, dx, dy, r, sw) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r; // radius
  this.sw = sw;
  this.draw =  function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(2, 160, 105, 0.7)';
    ctx.lineWidth = this.sw;
    ctx.stroke(); // dont forget the stroke method!
  } // /draw

  this.update = function() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  } // /update
}

circleArray = [];

for (var i = 0; i < 50; i++) {
  var r = (Math.random() * 145);
  // var r = Math.floor(Math.random() * 100);
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  // velocity
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2  ;
  var sw = (Math.random() * 40);
  circleArray.push(new Circle(x, y, dx, dy, r, sw));
}

// console.log(circleArray);

//////
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// void ctx.clearRect(x, y, width, height);
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight); // clears the canvas

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

};

const jumboCanvas = document.querySelector('.jumbotron .canvas');

if (jumboCanvas != null) {

  jumboCanvas.width = window.innerWidth;
  jumboCanvas.height = window.innerHeight;

  const ctx = jumboCanvas.getContext('2d');

  // arc
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  ctx.beginPath();
  ctx.arc(575, 175, 100, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgba(230, 17, 11, 0.7)';
  ctx.stroke(); // dont forget the stroke method!

  ctx.beginPath();
  ctx.arc(50, 40, 123, 0, 2 * Math.PI, false);
  ctx.strokeStyle = 'rgba(250, 7, 161, 0.2)';
  ctx.stroke(); // dont forget the stroke method!

  for (i = 0; i < 255; i++) {

      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      var r = Math.random() * Math.floor(400 / 3.5 * i);

        ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, false);

      for (var j = 0; j < 7.5; j++) {
        ctx.strokeStyle = 'rgb(' + Math.floor(255 - j * i ) + ',' + Math.floor(255 - j * 11) + ', ' + Math.floor(255 - j) + ')';
        ctx.lineWidth = (j * (Math.random() / i * 16))
      }

      ctx.stroke(); // dont forget the stroke method!
  };

  this.update = function() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  } // /update

  // function animate() {
  //   requestAnimationFrame(animate);
  //   ctx.clearRect(0, 0, innerWidth, innerHeight); // clears the canvas
  //
  //   for (var i = 0; i < circleArray.length; i++) {
  //     circleArray[i].update();
  //   }
  // }
  //
  // animate();

}


//var newJumbo = document.querySelector('.new-jumbo');

/// here are the papers!

// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0));
// myPath.add(new Point(100, 50));




function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('jumbo-container');
  loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=11221,us&units=imperial&appid=d335a16d5b5a98484b5566b3f3e2991e", goData);
}

function goData(data) {
  //console.log(data);
  //background(255, 0, 200);
  for (var i= 0; i < data.number; i++) {
    rect(random(width), random(height), random(64), random(64));
    fill(255);
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

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

const theAngle = makeRandomNumber(0,360);
const thePercentage = makeRandomNumber(0,100);
const angle = theAngle - theHour; // Hue
const saturation = thePercentage - theHour; // Saturation
const lightness = thePercentage - theHour; // Lightness
const alpha = 0.75; // Alpha

const container = document.querySelector('body');
function setTheGradient() {
  container.style.backgroundImage = 'linear-gradient(182deg, hsla(0, 5%, 5%, 0.75) 0%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg,' + start + ',' + end + ')';
};

function setTheGradientHSLA() {
  container.style.backgroundImage = 'linear-gradient(182deg, hsla(0, 5%, 5%, 0.75) 0%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg, hsla('+ angle +', '+ saturation +'%,'+ lightness +'%,' + alpha +'), hsla(180, 5%, 12%, 0.2))';
};

setTheGradientHSLA();

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

  const morseSVG =
    {
      dotSVG : `<svg width="107.66667" height="107.66667" viewBox="0 0 107.66667 107.66667">
        <title>dot</title>
        <circle id="_Ellipse_" cx="53.83333" cy="53.83333" r="53.83333" />
      </svg>`,
      dashSVG : `<svg width="200" height="108.48468" viewBox="0 0 200 108.48468">
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
  const svgDash = morseSVG.dashSVG;
  const svgDot = morseSVG.dotSVG;
  let incomingMorse = theMorseText;
  console.log("transformDotsDashes() is logging this: " + theMorseText);
  //console.log(theMorseText);
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