const menuList = document.querySelector('.header-menu-list');
const menuBtn = document.querySelector('.header-menu-link');
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerBtn = document.querySelector('.header-burger-btn');
const burgeMenuList = document.querySelector('.header-burger-menu-list');
const orderBtn = document.querySelector('.header-burger-order-btn');
const closeBtn = document.querySelector('.header-close-btn');

menuList.addEventListener('click', handleMenuClick);
menuBtn.addEventListener('click', handleMenuClick);
burgerBtn.addEventListener('click', handleBurgerClick);
burgeMenuList.addEventListener('click', handleCloseClick);
orderBtn.addEventListener('click', handleCloseClick);
closeBtn.addEventListener('click', handleCloseClick);

document.body.addEventListener('click', event => {
  if (
    !menuList.classList.contains('visually-hidden') &&
    !event.target.classList.contains('header-menu-link')
  ) {
    handleMenuClick();
  }
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    burgerMenu.classList.contains('is-open-header')
  ) {
    handleCloseClick();
  }
});

const dropDown = new KeyframeEffect(
  menuList,
  [
    { opacity: '0', transform: 'translateY(-100%)' },
    { opacity: '1', transform: 'translateY(0)' },
  ],
  { duration: 500 }
);

const dropUp = new KeyframeEffect(
  menuList,
  [
    { opacity: '1', transform: 'translateY(0)' },
    { opacity: '0', transform: 'translateY(-100%)' },
  ],
  { duration: 500 }
);

const dropDownAnimation = new Animation(dropDown, document.timeline);

const dropUpAnimation = new Animation(dropUp, document.timeline);

const openKey = new KeyframeEffect(
  burgerMenu,
  [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
  { duration: 500 }
);

const closeKey = new KeyframeEffect(
  burgerMenu,
  [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
  { duration: 500 }
);

const openBurgerAnimation = new Animation(openKey, document.timeline);

const closeBurgerAnimation = new Animation(closeKey, document.timeline);

function handleMenuClick() {
  if (menuList.classList.contains('visually-hidden')) {
    dropDownAnimation.play();
    menuList.classList.remove('visually-hidden');
    return;
  }
  dropUpAnimation.play();
  setTimeout(() => {
    menuList.classList.add('visually-hidden');
  }, 500);
}

function handleBurgerClick() {
  burgerMenu.classList.add('is-open-header');
  openBurgerAnimation.play();
  document.body.style.overflow = 'hidden';
}

function handleCloseClick() {
  closeBurgerAnimation.play();
  setTimeout(() => {
    burgerMenu.classList.remove('is-open-header');
  }, 500);
  document.body.style.overflow = '';
}
