///
/// Ajaxy Load the sprite
///
const spritePath = 'images/socialMediaSprite.svg';
// const body = document.body;
const nav = document.querySelector('.site-header__siteNavigation');
const ajax = new XMLHttpRequest();
ajax.open('GET', spritePath, true);
ajax.send();
ajax.onload = function(e) {
  const div = document.createElement('div');
  div.setAttribute('class', 'site-header__siteNavigation--social-svg');
  div.innerHTML = ajax.responseText;
  nav.insertBefore(div, nav.childNodes[0]);
};
