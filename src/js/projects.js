import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const projectsBtnLeft = document.querySelector(".project-arrow-left");
const projectsBtnRight = document.querySelector(".project-arrow-right");

const swiper = new Swiper('.swiper-container', {
  
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
    projectsBtnLeft.disabled = true; 
  } else {
    projectsBtnLeft.disabled = false;
  }

  if (swiper.isEnd) {
    projectsBtnRight.disabled = true;
  } else {
    projectsBtnRight.disabled = false;
  }
}

updateNavigationBtn();
