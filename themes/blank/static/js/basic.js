"use strict";

var indexPage = document.querySelector('.home-page');
var portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');
var tileParent = document.querySelectorAll('.portfolio-flex__content figure img');
var tilePatternTwo = document.getElementsByClassName('svgShapeClip');
var tiles = Array.from(portfolioTile);
var allTheChildren = tiles.map(function (el) {
  return el.childNodes;
});
var tilesArray = Array.from(tileParent);
var classesFromTileParent = tilesArray.map(function (classes) {
  return classes.classList;
});

var _loop = function _loop(i) {
  var tileClasses = tileParent[i].classList;
  portfolioTile[i].addEventListener('mouseenter', function () {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
  });
  portfolioTile[i].addEventListener('mouseleave', function () {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
  });
};

for (var i = 0; i < portfolioTile.length; i++) {
  _loop(i);
}

;