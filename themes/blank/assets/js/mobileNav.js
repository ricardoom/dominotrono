///
/// Mobile Nav
///

const mobileNavButton = document.getElementById('mobileNavButton');
const mobileNavItems = document.getElementById('navItems');
const burger = document.getElementById('burgerIcon');
const closer = document.getElementById('circleXCloseIcon');

mobileNavButton.addEventListener('click', function() {
  if (mobileNavItems.classList.contains('is-active')) {
    mobileNavButton.classList.remove('button-active');
    mobileNavItems.setAttribute('aria-expanded', 'false');
    mobileNavItems.classList.remove('is-active');
    closer.style.display = 'none';
    burger.style.display = 'block';
  } else {
    mobileNavItems.classList.add('is-active');
    mobileNavItems.setAttribute('aria-expanded', 'true');
    mobileNavButton.classList.add('button-active');
    closer.style.display = 'block';
    burger.style.display = 'none';
  }
});
