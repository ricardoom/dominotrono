
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

