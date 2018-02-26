///
/// This is to get the time of day and then do stuff
/// Mostly the idea is to change the background color
/// based on the time.

// some colors... in an array;
// might be easier in the future to work w/ HSL instead of Hex...
var bgcolors = [
  "#333",
  "#444",
  "#567",
  "#789",
  "#ABC",
  "#AF0",
  "#333",
  "#444",
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

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// ask the time
function getHours() {
var d = new Date();
var h = addZero(d.getUTCHours() - 5);
var m = addZero(d.getUTCMinutes());

return h;
}



function setBackGround(color) {
  var container = document.querySelector('body');
  //console.log(container);
  // getHours()
  // look at the array of colors assign the colors sequentially
  // if its between 0 & 0:59 change the bg color to the first item in the color array [0], if its between 1 & 1:59 put change the color the second item in the array [1], etc
  var theHour = getHours();
  console.log(theHour);
  container.style.backgroundColor = bgcolors[theHour];

  // set the hour to the background arrary

}

setBackGround();
