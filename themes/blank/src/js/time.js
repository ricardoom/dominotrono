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

const bg-pairs = [
  {
    start: "#abc",
    end: "#ef0"
  },
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
  console.log(offset);
  let h = d.getUTCHours() - offset;

return h;
}


function setBackGround(color) {
  var container = document.querySelector('body');
  // look at the array of colors assign the colors sequentially
  // if its between 0 & 0:59 change the bg color to the first item in the color array [0], if its between 1 & 1:59 change the color the second item in the array [1], etc
  let theHour = getHours();
  console.log(theHour);
  container.style.backgroundColor = bgcolors[theHour];

  // set the hour to the background arrary

}

setBackGround();
