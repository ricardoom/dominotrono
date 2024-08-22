// Cloudinary Image Import and Transformations

import params from "@params";
import { Cloudinary } from '@cloudinary/url-gen';
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

// Data pulled in from respective JSON files in the ./data directory. See HUGO template: partials/footer $params for which files are 
const artworkSlides = params.artworks;
const hpSlides = params.hpslides;
const quad3Slides = params.quad3Images;
const uxSlides = params.ux;
const vdSlides = params.vd;
const webdevSlides = params.webdev;
// Function that gets the right number of items from its respective source, and returns the public_id, which utilizes both the parent folder and file name

const getRandItems = function(source) {
  const rand = getRandomIntInclusive(0, (source.length - 1));
  const randItem = source[rand].public_id;
  return randItem;
}

const randArtworkSlide = getRandItems(artworkSlides);
const randHpSlide = getRandItems(hpSlides);
const randQuad3Slide = getRandItems(quad3Slides);
const randUxSlide = getRandItems(uxSlides);
const randVDSlide = getRandItems(vdSlides);
const randWDSlide = getRandItems(webdevSlides);

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
  const mastImg = siteContent.querySelector('.mast-img');
  const smallMastImg = siteContent.querySelector('.small-mast > img');
  const quad3Img = siteContent.querySelector('.quad-3-img');
  const uxImg = siteContent.querySelector('.user-experience');
  const vdImg = siteContent.querySelector('.visual-design');
  const wdImg = siteContent.querySelector('.web-development');

  mastImg.setAttribute("src", imgAsset(randArtworkSlide, 'ct1610', 'webp'));
  smallMastImg.setAttribute("src", imgAsset(randHpSlide, 'secondaryGraphic', 'webp'));
  quad3Img.setAttribute("src", imgAsset(randQuad3Slide, 'quad3_219', 'webp'));
  uxImg.setAttribute('src', imgAsset(randUxSlide, '2x3_3x', 'webp'));
  vdImg.setAttribute('src', imgAsset(randVDSlide, '2x3_3x', 'webp'));
  wdImg.setAttribute('src', imgAsset(randWDSlide, '2x3_3x', 'webp'));
}
 
