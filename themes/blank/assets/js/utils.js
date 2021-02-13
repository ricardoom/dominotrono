//
// utilities for generating random integers and floating point numbers
//

const getRandomInt = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
};

function getRandomFloat(num) {
  return Math.random(num);
}

function getRandomPosNeg(num) {
  if (typeof num !== 'number') {
    return;
  }
  return num % 2 ? num * -1 : num;
}
