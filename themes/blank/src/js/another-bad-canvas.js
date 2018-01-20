
var canvas = document.querySelector('.shortcode-canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(23,167,45,0.4)';
// ctx.fillRect(325, 402, 300, 234);
// ctx.fillStyle = 'rgba(193, 7, 145, 0.4)';
// ctx.fillRect(144, 102, 156, 123);
// ctx.fillStyle = 'rgba(203, 0, 0, 0.4)';
// ctx.fillRect(67, 333, 145, 215);

// ctx.beginPath(); // this gets carried through, so redefine on each object
// for (n = 0; n < 100; n++) {
//   var x = Math.random() + n / (window.innerWidth - n);
//   var y = Math.random() + n / (window.innerHeight - 1);
// ctx.moveTo(x, y); // x,y
// ctx.lineTo(x, 100); // where the line is going
// ctx.lineTo(x, y); // you can continue the line
// ctx.strokeStyle = 'rgba(0, 167, 123, 0.7)';
// ctx.stroke();
// }

// arc
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// ctx.beginPath();
// ctx.arc(575, 175, 100, 0, 2 * Math.PI);
// ctx.strokeStyle = 'rgba(230, 17, 11, 0.7)';
// ctx.stroke(); // dont forget the stroke method!

// ctx.beginPath();
// ctx.arc(50, 40, 123, 0, 2 * Math.PI, false);
// ctx.strokeStyle = 'rgba(250, 7, 161, 0.2)';
// ctx.stroke(); // dont forget the stroke method!

// for (i = 0; i < 255; i++) {
//
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * Math.floor(400 / 3.5 * i);
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
//     for (var j = 0; j < 7.5; j++) {
//       ctx.strokeStyle = 'rgb(' + Math.floor(255 - j * i ) + ',' + Math.floor(255 - j * 11) + ', ' + Math.floor(255 - j) + ')';
//       ctx.lineWidth = (j * (Math.random() / i * 16))
//                        }
//     ctx.stroke(); // dont forget the stroke method!
// };


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

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
