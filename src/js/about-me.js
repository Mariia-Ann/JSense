import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.information-item', {
    openOnInit: [],
  });
  const faqItems = document.querySelectorAll('.information-item');

  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.about-button');
    toggleButton.addEventListener('click', () => {
      const answer = item.querySelector('.visually-hidden');
      const icon = item.querySelector('.about-icon');

      if (answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
        icon.classList.add('open');
      } else {
        answer.classList.add('visually-hidden');
        icon.classList.remove('open');
      }
    });
  });
});

//

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const aboutSwiperContainer = document.querySelector('.skills-slider');

if (aboutSwiperContainer) {
  const aboutSwiper = new Swiper(aboutSwiperContainer, {
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1,
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: true,
    speed: 500,
    navigation: {
      nextEl: '.skills-button',
    },
    breakpoints: { 768: { slidesPerView: 3 }, 1440: { slidesPerView: 6 } },
  });
}
