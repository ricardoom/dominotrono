// Import the Cloudinary class
// import * as data from './artworks.json';
// const {display_name} = data;

import params from "@params";
// import { getRandomIntInclusive } from "./utils";
import {Cloudinary} from '@cloudinary/url-gen';
import {Resize} from '@cloudinary/url-gen/actions/resize';
// console.log(params.artworks);
const data = params.artworks;

// for (const {secure_url} of data) {
//   console.log(secure_url);
// }
const rand = getRandomIntInclusive(0, (data.length - 1));
console.log(data.length, rand);

const randImg = data[rand].display_name;
// console.log(randImg);

// Create your instance
// TODO: sort out this double call to Cloudinary
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
// Resize the image to 100x100
myImage
  .resize(Resize.scale().width(1200))
  .format('webp');

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();

// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
console.log(myURL);
// update the mastBG
const siteContent = document.getElementById('siteContent');
const mastimg = siteContent.querySelector('.mast-img');
mastimg.setAttribute("src", myURL);
console.log(mastimg);