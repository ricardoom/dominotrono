// Import the Cloudinary class
// import * as data from './artworks.json';
// const {display_name} = data;

import params from "@params";
// import { getRandomIntInclusive } from "./utils";
import {Cloudinary} from '@cloudinary/url-gen';

// console.log(params.artworks);
const data = params.artworks;

// for (const {secure_url} of data) {
//   console.log(secure_url);
// }
const rand = getRandomIntInclusive(0, data.length);
// console.log(data.length, data[5].secure_url);

const randImg = data[rand].display_name;
// console.log(randImg);

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'toupeeproofbullets'
  },
  url: {
    secure: true // force https, set to false to force http
  }
});


  
// Let's create a new image
const myImage = cld.image(randImg);

// Import the resize transformation and apply it to myImage
import {Resize} from '@cloudinary/url-gen/actions/resize';

// Resize the image to 100x100
myImage.resize(Resize.scale().width(960));

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();

// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
console.log(myURL);

console.log('am I working, maybe not?')