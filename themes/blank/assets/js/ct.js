// Cloudinary Image Import and Transformations

import params from "@params";
import { Cloudinary } from '@cloudinary/url-gen';
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

// Data pulled in from respective JSON files in the ./data directory. See HUGO template: partials/footer $params for which files are 
const data = params.artworks;
const slides = params.hpslides;
const quad3Slides = params.quad3Images;

// Function that gets the right number of items from its respective source, and returns the public_id, which utilizes both the parent folder and file name

const getRandItems = function(source) {
  const rand = getRandomIntInclusive(0, (source.length - 1));
  const randItem = source[rand].public_id;
  return randItem;
}

const randImg = getRandItems(data);
const randSlide = getRandItems(slides);
const randQuad3Img = getRandItems(quad3Slides);
// Create Instance instance
// TODO: sort out this double call to Cloudinary
// Outsource it to a module perhaps?

const cld = new Cloudinary({
  cloud: {
    cloudName: 'toupeeproofbullets'
  },
  url: {
    secure: true // force https, set to false to force http
  }
});
  
// Let's get images from our data file and build a URLs to use 
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

const baseURL = document.location;
const [local, remote] = ['http://localhost:1313/', "https://ricardogalvez.design/"];


if (baseURL.href === local || baseURL.href === remote) {
  const siteContent = document.querySelector('.site-content');
  const mastimg = siteContent.querySelector('.mast-img');
  const smallMast = siteContent.querySelector('.small-mast > img');
  const quad3Img = siteContent.querySelector('.quad-3-img');
  mastimg.setAttribute("src", imgAsset(randImg, 'ct1610', 'webp'));
  smallMast.setAttribute("src", imgAsset(randSlide, 'secondaryGraphic', 'webp'));
  quad3Img.setAttribute("src", imgAsset(randQuad3Img, 'quad3_219', 'webp'));
}
 
