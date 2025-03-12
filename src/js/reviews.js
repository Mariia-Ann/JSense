import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const slideContainer = document.querySelector('.container');
const reviewList = document.querySelector('.reviews-list');
const notFoundLabel = document.querySelector('.not-found');

// let swiper2;

function countSlidesPerView() {
  const containerWidth = slideContainer.clientWidth;
  if (containerWidth === 320) {
    return 1;
  } else if (containerWidth === 375) {
    return 1;
  } else if (containerWidth === 768) {
    return 2;
  } else if (containerWidth === 1440) {
    return 4;
  }
 }

 

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  slidesPerView: countSlidesPerView(),
  spaceBetween: 16,
  loop: true, 
  freeMode: true,
  speed: 900,
  freeModeMomentum: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: '.right-btn2',
    prevEl: '.left-btn2',
    disabledClass: 'swiper-button-disabled' 
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    }
  },
  on: {
    slideChange: function() {
      const nextButton = document.querySelector('.right-btn2');
      const prevButton = document.querySelector('.left-btn2');
      
      
      if (this.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
        prevButton.setAttribute("disabled", "true");
      } else {
        prevButton.classList.remove('swiper-button-disabled');
        prevButton.removeAttribute("disabled");
      }

      
      if (this.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
        nextButton.setAttribute("disabled", "true");
      } else {
        nextButton.classList.remove('swiper-button-disabled');
        nextButton.removeAttribute("disabled");
      }
    }
  }
});


function handleResize() {
  swiper2.params.slidesPerView = countSlidesPerView();
  swiper2.update();
}

window.addEventListener('resize', handleResize);

async function fetchReviews() {
  try {
    const response = await fetch("https://portfolio-js.b.goit.study/api/reviews");
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    renderReviews(data);
    notFoundLabel.classList.add('visually-hidden');
  } catch (error) {
    notFoundLabel.classList.remove('visually-hidden');
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews from server',
      position: 'bottomRight',
    });
  }
}

const renderReviews = (data) => {
  data.forEach(element => {
    const markup = `<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${element.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${element.author}</h3>
      <p class="reviews-text">${element.review}</p>  
    </li>`;
    reviewList.insertAdjacentHTML('beforeend', markup);
  
  });
    // swiper2.update()
}

fetchReviews();

