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
