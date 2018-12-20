//////
///// paper.js
/////

/// Keep in mind Paper has special markup
///
/// note paperscript type attribute
/// TODO:
/// Something more sustainable needs to be developed...
/// this is tantamount to hard coding, and we should be able to pass these experimental snippets as modules
/// especially w/ paper, since we have to pass it the text=

var paperJsContainer = document.querySelector('[data-vendor="paperjs"]');
// console.log(paperJsContainer);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

if (paperJsContainer != null) {
  console.log('paperJsContainer is called');

  var amount = getRandomInt(50);
  for (var i = 0; i < amount; i++) {
    var xPosition = getRandomInt(200);
    var yPosition = getRandomInt(200);
    var rect = new Rectangle();
    rect.size = [i, i];
    rect.x = xPosition;
    rect.y = yPosition;

    var path = new Path.Rectangle(rect);
    path.style = {
      strokeColor: '#eee',
      strokeWidth: 2,
      fillColor: new Color(0, 0, 0, 0.15),
    };

    //console.log(rect);

    var scale = (1 - i / amount) * 100;
    path.scale(scale);
    //console.log(scaled);
  }
} // paperJsContainer
