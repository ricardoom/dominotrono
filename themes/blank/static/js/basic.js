"use strict";

var indexPage = document.querySelector('.home-page');
var portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');
var tileParent = document.querySelectorAll('.portfolio-flex__content figure img');
var tilePatternTwo = document.getElementsByClassName('svgShapeClip'); // const tiles = Array.from(portfolioTile);
// const tiles = Array.from(tileParent);

var tiles = Array.from(portfolioTile);
var allTheChildren = tiles.map(function (el) {
  return el.childNodes;
}); // console.log(allTheChildren);

var tilesArray = Array.from(tileParent);
var classesFromTileParent = tilesArray.map(function (classes) {
  return classes.classList;
}); // console.log(classesFromTileParent);

var _loop = function _loop(i) {
  var tileClasses = tileParent[i].classList;
  portfolioTile[i].addEventListener('mouseenter', function () {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard'); //console.log(tileClasses);
  });
  portfolioTile[i].addEventListener('mouseleave', function () {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard'); //console.log(tileClasses);
  });
};

for (var i = 0; i < portfolioTile.length; i++) {
  _loop(i);
}

; // portfolioTile.forEach((tile) => {
//   const getChildClass = tile.childNodes[1];
//   const portFolioClass = getChildClass.childNodes[1];
//   const theLastClass = portFolioClass.childNodes[1];
//   const imgClass = Array.from(theLastClass.classList);
//   tile.addEventListener('mouseenter', () => {
//     console.log(imgClass);
//     // imgClass.remove('portfolioCard');
//     // imgClass.add('portfolioCardOff');
//   });
//   tile.addEventListener('mouseleave', () => {
//     // const getChildClass = tile.childNodes[1];
//     // const portFolioClass = getChildClass.childNodes[1];
//     // const theLastClass = portFolioClass.childNodes[1];
//     // const imgClass = Array.from(theLastClass.classList);
//     console.log(imgClass);
//     // imgClass.add('portfolioCard');
//     // imgClass.remove('portfolioCardOff');
//   })
// });