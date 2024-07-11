// Cloudinary Image Import and Transformations

import params from "@params";
import {Cloudinary} from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions/resize';
// console.log(params.artworks);
const data = params.artworks;
const rand = getRandomIntInclusive(0, (data.length - 1));
const randImg = data[rand].display_name;

// Create Instance instance
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

const baseURL = document.location;
const [local, remote] = ['http://localhost:1313/', "https://ricardogalvez.design/"];
// console.log(baseURL === local || remote);
console.log(baseURL.href, local === baseURL.href)

if (baseURL.href === local || baseURL.href === remote) {
  console.log('its local...', baseURL.href)
  const siteContent = document.querySelector('.site-content');
  const mastimg = siteContent.querySelector('.mast-img');
  mastimg.setAttribute("src", myURL);
}
 
