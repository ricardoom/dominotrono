


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
