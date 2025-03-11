import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { refs } from './refs';

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    375: {
      spaceBetween: 20
    },
    768: {
      spaceBetween: 35
    },
    1440: {
      spaceBetween: 40
    }},
  speed: 900,
  effect: 'slide',
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.project-arrow-right',
    prevEl: '.project-arrow-left',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});



function updateNavigationBtn() {
  if (swiper.isBeginning) {
    refs.projectsBtnLeft.disabled = true; 
  } else {
    refs.projectsBtnLeft.disabled = false;
  }

  if (swiper.isEnd) {
    refs.projectsBtnRight.disabled = true;
  } else {
    refs.projectsBtnRight.disabled = false;
  }
}

updateNavigationBtn();
