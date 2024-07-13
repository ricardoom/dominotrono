// Cloudinary Image Import and Transformations

import params from "@params";
import { Cloudinary } from '@cloudinary/url-gen';
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const data = params.artworks;
const slides = params.hpslides;

// const rand = getRandomIntInclusive(0, (data.length - 1));

// Function that gets the right number of items from its respective source, and returns the public_id, which utilizes both the parent folder and file name

const getRandItems = function(source) {
  const rand = getRandomIntInclusive(0, (source.length - 1));
  const randItem = source[rand].public_id;
  return randItem;
}

const randImg = getRandItems(data);
const randSlide = getRandItems(slides);
// console.log(randImg, randSlide);


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
// const myImage = cld.image(randImg);

// // Import the resize transformation and apply it to myImage
// // Resize the image to 100x100
// myImage
//   // .resize(Resize.scale().width(1200))
//   .namedTransformation(name("ct1610"))
//   .format('webp');

// // When we're done, we can apply all our changes and create a URL.
// const myURL = myImage.toURL();




// Function to use different data sources, but does same thing as above:
// 1. get the name of the file we want
// 2. takes a named transformation
// 3. takes a format 
// 4 returns the URL

const imgAsset = function(asset, transform, format = 'webp') {
  const img = cld.image(asset);
  const output = img
    .namedTransformation(name(transform))
    .format(format);
  const url = img.toURL();
  return url;
};

const asset = imgAsset(randSlide, 'ct1610', 'webp');
console.log(asset);

const baseURL = document.location;
const [local, remote] = ['http://localhost:1313/', "https://ricardogalvez.design/"];
// console.log(baseURL === local || remote);
// console.log(baseURL.href, local === baseURL.href)

if (baseURL.href === local || baseURL.href === remote) {
  // console.log('its local...', baseURL.href)
  const siteContent = document.querySelector('.site-content');
  const mastimg = siteContent.querySelector('.mast-img');
  const smallMast = siteContent.querySelector('.small-mast > img');
  mastimg.setAttribute("src", imgAsset(randImg, 'ct1610', 'webp'));
  smallMast.setAttribute("src", imgAsset(randSlide, '480', 'webp'))
}
 
