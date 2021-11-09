///
/// Mobile Nav
///

const mobileNavButton = document.getElementById('mobileNavButton');
const mobileNavItems = document.getElementById('navItems');
const mobileNavLabel = document.querySelector('.menu-label');
const navControlIcon = document.getElementById('navControlIcon');

mobileNavButton.addEventListener('click', function () {
  if (mobileNavItems.classList.contains('is-active')) {
    mobileNavButton.classList.remove('button-active');
    mobileNavItems.setAttribute('aria-expanded', 'false');
    mobileNavItems.classList.remove('is-active');
    mobileNavLabel.innerText = 'Menu';
  } else {
    mobileNavItems.classList.add('is-active');
    mobileNavItems.setAttribute('aria-expanded', 'true');
    mobileNavButton.classList.add('button-active');
    mobileNavLabel.innerText = 'Close';
  }
  navControlIcon.classList.toggle('inactive');
});
