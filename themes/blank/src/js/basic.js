
const indexPage = document.querySelector('.home-page');

const portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');

const tileParent = document.querySelectorAll('.portfolio-flex__content figure img');

const tilePatternTwo = document.getElementsByClassName('svgShapeClip');

const tiles = Array.from(portfolioTile);
const allTheChildren = tiles.map(el => el.childNodes);
const tilesArray = Array.from(tileParent);
const classesFromTileParent = tilesArray.map(classes => classes.classList);

for (let i = 0; i < portfolioTile.length; i++) {
  const tileClasses = tileParent[i].classList;  
  portfolioTile[i].addEventListener('mouseenter', () => {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
  });
  portfolioTile[i].addEventListener('mouseleave', () => {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
    //console.log(tileClasses);
  });
};
