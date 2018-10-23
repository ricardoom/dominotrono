

// some simple event listeners... almost time to refactor this js mess

const portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');

const tileParent = document.querySelectorAll('.portfolio-flex__content figure img');

const tilePatternTwo = document.getElementsByClassName('svgShapeClip');


for (let i = 0; i < portfolioTile.length; i++) {
  portfolioTile[i].addEventListener('mouseenter', () => {
    const tileClasses = tileParent[i].classList;
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
    //console.log(tileClasses);
  });
  portfolioTile[i].addEventListener('mouseleave', () => {
    const tileClasses = tileParent[i].classList;
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
    //console.log(tileClasses);
  });
}



// portfolioTile.forEach((tile) => {
 
//   tile.addEventListener('mouseenter', () => {
//     const getChildClass = tile.childNodes[1];
//     const portFolioClass = getChildClass.childNodes[1];
//     const theLastClass = portFolioClass.childNodes[1];
//     const imgClass = theLastClass.classList;
//     imgClass.remove('portfolioCard');
//     imgClass.add('portfolioCardOff');
//   });
//   tile.addEventListener('mouseleave', () => {
//     const getChildClass = tile.childNodes[1];
//     const portFolioClass = getChildClass.childNodes[1];
//     const theLastClass = portFolioClass.childNodes[1];
//     const imgClass = theLastClass.classList;
//     imgClass.add('portfolioCard');
//     imgClass.remove('portfolioCardOff');
//   })
// });
