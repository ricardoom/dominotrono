// console.log('atmos.js on the case');
// This ID should the be the name of the experiment page:
//
// import { getRandomIntInclusive } from "utils";
// Atmosphere in this case
// Get the parent wrapper node:

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const getRandomInt = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
};

function getRandom() {
  return Math.random();
}

const parentWrapper = document.querySelector('article');
// Get the DOM node:
const svgContainer = document.querySelector('#atmosphere');

// Get the viewport dimensions and set up two constants:
const x = document.body.clientWidth; // use the client window width
const y = document.body.clientHeight; // use the client window height

const radius = getRandomIntInclusive(50, 200);

function makeCircles(numberOfCircles) {
  // make sure all of the elements are somewhere in the viewBox
  svgContainer.setAttribute('viewBox', `0 0 ${x} ${y}`);
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(radius));
    //newCircle.style.color = `hsla(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandomInt()})`;
    newCircle.style.fill = `hsla(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandom()})`;
    // newCircle.style.fill = `hsla(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandomInt()})`;
    newCircle.style.filter = `blur(${getRandomInt(10)}px)`;
    svgContainer.appendChild(newCircle);
    // console.log(getRandomInt(5));
  }
}
// show and animate them

// kick it all off
makeCircles(getRandomInt(125));

// GSAP animation
// Do a simple check to see if gsap is available
const circles = document.querySelectorAll('circle');
const circArr = Array.from(circles);
if (gsap) {
  // get all the circles in the svg element
  // console.log(circArr);
  const opts = { x: 'random(1000, x, 100)', y: 'random(1000, y, 100)', duration: 5, repeat: -1, delay: 'random(-0.5, 0.5, .1)', yoyo: true };
  // gsap.to(circArr, { x: x, duration: 10, repeat: -1, delay: 0.3 });
  circArr.forEach((circ) => gsap.to(circ, opts));
}
