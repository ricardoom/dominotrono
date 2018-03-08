
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
  cnv.parent('canvas-container');
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

// some colors... in an array;
// might be easier in the future to work w/ HSL instead of Hex...
const bgcolors = [
  "#333",
  "#4C4",
  "#567",
  "#789",
  "#ABC",
  "#AF0",
  "#333",
  "#1AC",
  "#567",
  "#7D9",
  "#AFC",
  "#A10",
  "#3D3",
  "#4A4",
  "#537",
  "#729",
  "#A1C",
  "#9F0",
  "#333",
  "#444",
  "#5A7",
  "#7E9",
  "#1B2",
  "#4D0",
  "#7B9",
  "#D09"
];

// where we want to put a 0 in front of our number,
// since we're passing the value of time directly as a numeric corallary to our array, we dont want a zero. leaving here for ref. though.
// function addZero(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }
// var h = addZero(d.getUTCHours() - 5);
// var m = addZero(d.getUTCMinutes());


// get the time
function getHours() {
  const d = new Date();
  let offset = d.getTimezoneOffset() / 60;
  //console.log(offset);
  let h = d.getUTCHours() - offset;
  //console.log(h);
return h;
}

function fixTime() {
  let fix = getHours();
  console.log(fix);
   if (fix <= 19) {
     //fix = fix + (fix % 19);
     fix = fix + (fix % 19);
     console.log("heyo " + fix);
   }
   //  else {
   //   //fix = fix % 19;
   //   //fix = 19 % fix;
   //   console.log("pendejo " + fix);
   // }
}

fixTime();

function setBackGround() {
  const container = document.querySelector('body');
  //console.log(container);
  // look at the array of colors assign the colors sequentially
  // if its between 0 & 0:59 change the bg color to the first item in the color array [0], if its between 1 & 1:59 change the color the second item in the array [1], etc
  let theHour = getHours();
  //console.log(theHour);
  // set the background color to the corollary position in the bgColors array
  container.style.backgroundColor = bgcolors[theHour];
}

//setBackGround();

///
/// Now now dot the graient works
///
// hsl colors would be better than a bunch of hex numbers...
const bgPairs = [
  {
    start: [
        "#333", "#4C4", "#567", "#789", "#ABC", "#CC9", "#333", "#1AC", "#567", "#7D9", "#AFC", "#A10", "#3D3", "#4A4", "#537", "#cff", "#A1C", "#ad5", "#333", "#444", "#5A7", "#7E9", "#1B2", "#4D0"
      ],
    end: [
      "#abc", "#bcd", "#ef1", "#123", "#456", "#789", "#012", "#c1e", "#abc", "#a3f2f3", "#1fe", "#123", "#456", "#28b", "#012", "#c1e", "#bcd", "#edc00b", "#123", "#456", "#789", "#012", "#c1e", "#7B9"
      ]
  }
];
// Now set them to the hour:
const theHour = getHours();
const start = bgPairs[0].start[theHour];
const end = bgPairs[0].end[theHour];




const container = document.querySelector('html');



// console.log("the current hour: " + theHour);
// console.log("the start hex: " + bgPairs[0].start[theHour]);
// console.log("the end hex: " + bgPairs[0].end[theHour]);


function setTheGradient() {
  container.style.backgroundImage = 'linear-gradient(187deg,' + start + ',' + end + ')';
};

setTheGradient();

// TODO: instead of big ass arrays of colors. find a way to pipe hsl() colors to the background...
