///
/// Basic.js
///
const portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');
const tileParent = document.querySelectorAll('.portfolio-flex__content figure img');

for (let i = 0; i < portfolioTile.length; i++) {
  const tileClasses = tileParent[i].classList;
  portfolioTile[i].addEventListener('mouseenter', () => {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
  });
  portfolioTile[i].addEventListener('mouseleave', () => {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
  });
}

///
/// Mobile Nav
///

const mobileNavButton = document.getElementById('mobileNavButton');
const mobileNavItems = document.getElementById('navItems');
mobileNavButton.addEventListener('click', function () {
  if (mobileNavItems.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    mobileNavItems.classList.remove('is-active');
  } else {
    mobileNavItems.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
  }
});