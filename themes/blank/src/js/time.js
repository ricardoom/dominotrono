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
  console.log(h);
return h;
}


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
const bgPairs = [
  // {
  //   start: "#abc",
  //   end: "#ef0"
  // },
  // {
  //   start: "#db0",
  //   end: "#1fa"
  // },
  {
    start: [
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
        "#4D0"
      ],
    end: [
        "#abc",
        "#bcd",
        "#ef1",
        "#123",
        "#456",
        "#789",
        "#012",
        "#c1e",
        "#abc",
        "#bcd",
        "#ef1",
        "#123",
        "#456",
        "#789",
        "#012",
        "#c1e",
        "#bcd",
        "#ef1",
        "#123",
        "#456",
        "#789",
        "#012",
        "#c1e",
        "#7B9"
      ]
  }
];

function setBackGroundGradient() {
  const container = document.querySelector('body');
  let theHour = getHours();
  bgPairs.forEach(pair => {
  //const getTheGradients = '$start, $end';
  let getTheStart = pair.start;
  let getTheEnd = pair.end;
  console.log(getTheStart[theHour]);
  console.log(getTheEnd[theHour]);
  });

  container.style.backgroundImage = 'linear-gradient(187deg,' + getTheStart[theHour] ',' + getTheEnd[theHour] ')';
  //console.log(container);
  //return gradient;
}

setBackGroundGradient();
