///
/// Observer.js
///
document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  const fadedCards = [].slice.call(document.querySelectorAll('.card-state'));
  if ('IntersectionObserver' in window) {
    //console.log('IntersectionObserver done working...');
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    }); // /lazyImageObserver

    const cardOpts = {
      root: null,
      rootMargin: '450px 10% 450px 10%',
      threshold: 0.6,
    };

    let cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let fadedCard = entry.target;
        if (entry.isIntersecting) {
          //console.log(`${fadedCard} is intersecting...`);
          fadedCard.classList = fadedCard.dataset.class;
        } else {
          // console.log(`${fadedCard} not intersecting...`);
          fadedCard.classList = 'card-state';
        }
      });
    }, cardOpts);

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

    fadedCards.forEach((fadedCard) => {
      cardObserver.observe(fadedCard);
    });
  } else {
    //console.log('done messed up!');
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    let active = false;

    const lazyLoad = function () {
      if (active === false) {
        active = true;

        setTimeout(function () {
          lazyImages.forEach(function (lazyImage) {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== 'none'
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove('lazy');

              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
  }
});
