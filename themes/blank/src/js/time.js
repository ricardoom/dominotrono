///
/// This is to get the time of day and then do stuff
/// Mostly the idea is to change the background color
/// based on the time.

// get the time
function getHours() {
  const d = new Date();
  const offset = d.getTimezoneOffset() / 60;
  console.log(offset);
  let h = d.getUTCHours() - offset;
  let absoluteFix = (Math.abs(h));
  h = h - absoluteFix;
return absoluteFix;
}

const bgPairs = [
  {
    start: [
        "#333", "#a49444", "#567", "#789", "#ABC", "#AF0", "#333", "#1AC", "#567", "#7D9", "#AFC", "#a979ca", "#3D3", "#4A4", "#537", "#cff", "#A1C", "#9F0", "#333", "#444", "#5A7", "#7E9", "#1B2", "#4D0"
      ],
    end: [
      "#abc", "#bcd", "#ef1", "#123", "#456", "#789", "#012", "#c1e", "#abc", "#a3f2f3", "#1fe", "#123", "#456", "#28b", "#012", "#c1e", "#bcd", "#edc00b", "#123", "#456", "#789", "#012", "#c1e", "#123"
      ]
  }
];

// Use HSLA values instead of HEX...
// const hslaPairs = [
//   {

//   }
// ];




// Now set them to the hour:
const theHour = getHours();
console.log(theHour);
const start = bgPairs[0].start[theHour];
const end = bgPairs[0].end[theHour];

function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function walk(angle) {
//     angle = Math.Random(180 - theHour);
//     return angle;
//     console.log(angle); 
// }

const theAngle = makeRandomNumber(0, 360);
const thePercentage = makeRandomNumber(0, 100);
const angle = theAngle - theHour; // Hue
const saturation = thePercentage - theHour; // Saturation
const lightness = thePercentage - theHour; // Lightness
const alpha = 0.75; // Alpha
const position = 100 - theHour;

const container = document.querySelector('body');
function setTheGradient() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75) 0%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg,' + start + ',' + end + ')';
};

function setTheGradientHSLA() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75)' + position + '%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg, hsla('+ angle +', '+ saturation +'%,'+ lightness +'%,' + alpha +'), hsla(180, 5%, 12%, 0.2))';
};

setTheGradientHSLA();