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
        "#333", "#4C4", "#567", "#789", "#ABC", "#AF0", "#333", "#1AC", "#567", "#7D9", "#AFC", "#A10", "#3D3", "#4A4", "#537", "#cff", "#A1C", "#9F0", "#333", "#444", "#5A7", "#7E9", "#1B2", "#4D0"
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
