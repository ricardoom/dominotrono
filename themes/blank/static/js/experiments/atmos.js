// console.log('atmos.js on the case');
// This ID should the be the name of the experiment page:
//

// Atmosphere in this case
// Get the DOM node:
const svgContainer = document.querySelector('#atmosphere');
// Get the viewport dimensions and set up two constants:
const x = svgContainer.clientWidth; // use the client window width
const y = svgContainer.clientHeight; // use the client window height
const r = getRandomInt(100);

//
// set up the animation function
// takes an options object as an argument
const animator = (options) => {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction from 0 to 1
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    // current animation state:
    // prop is the property we're animating
    let props = options.timing(timeFraction);
    options.draw(props);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

// we need to add or update the svg el on the page

// we need to get the ID

// we need alter the elements gracefully

// paint them to the screen
function makeCircles(numberOfCircles) {
  // if there are already circles remove them:
  //removeCircles(svgContainer);
  // removeElementWithPizzaz(svgContainer);
  // make sure all of the elements are somewhere in the viewBox
  svgContainer.setAttribute('viewBox', `0 0 ${x} ${y}`);
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(r));
    newCircle.style.color = `hsla(${getRandomInt(360)},${getRandomInt(100)}%, ${getRandomInt(100)}%`;
    newCircle.style.fill = 'currentColor';
    newCircle.style.filter = `blur(${getRandomInt(3)}px)`;
    svgContainer.appendChild(newCircle);

    // this object
    // animation options:
    // const animateTheCircles = {
    //   duration: getRandomInt(1500),
    //   timing(timeFraction) {
    //     return timeFraction;
    //   },
    //   draw(opacity) {
    //     newCircle.style.opacity = opacity - 0.1;
    //   },
    // };

    // run the circle animation on each circle:
    // function runAnimate() {
    //   animator(animateTheCircles);
    // }

    // run the animation function:
    // runAnimate();
  }
}
// show and animate them

// kick it all off
makeCircles(getRandomInt(25));

// Do Some Gsap stuff shall we?
// Do a simple check to see if gsap is available
if (gsap) {
  const circles = document.querySelectorAll('circle');
  console.log(circles);
  // circles.forEach(
  //   // gsap.to('circle', {
  //   //   x: x - 100,
  //   //   duration: 0.5,
  //   //   repeat: -1,
  //   // })
  // );
}
