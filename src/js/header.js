const MenuList = document.querySelector('.header-menu-list');
const MenuBtn = document.querySelector('.header-menu-link');
const BurgerMenu = document.querySelector('.header-burger-menu');
const BurgerBtn = document.querySelector('.header-burger-btn');
const BurgeMenuList = document.querySelector('.header-burger-menu-list');
const OrderBtn = document.querySelector('.header-burger-order-btn');
const CloseBtn = document.querySelector('.header-close-btn');

MenuList.addEventListener('click', handleMenuClick);
MenuBtn.addEventListener('click', handleMenuClick);
BurgerBtn.addEventListener('click', handleBurgerClick);
BurgeMenuList.addEventListener('click', handleCloseClick);
OrderBtn.addEventListener('click', handleCloseClick);
CloseBtn.addEventListener('click', handleCloseClick);

document.body.addEventListener('click', event => {
  if (
    !MenuList.classList.contains('visually-hidden') &&
    !event.target.classList.contains('header-menu-link')
  ) {
    handleMenuClick();
  }
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    !MenuList.classList.contains('visually-hidden')
  ) {
    handleMenuClick();
  }
});

const DropDown = new KeyframeEffect(
  MenuList,
  [
    { opacity: '0', transform: 'translateY(-100%)' },
    { opacity: '1', transform: 'translateY(0)' },
  ],
  { duration: 500 }
);

const DropUp = new KeyframeEffect(
  MenuList,
  [
    { opacity: '1', transform: 'translateY(0)' },
    { opacity: '0', transform: 'translateY(-100%)' },
  ],
  { duration: 500 }
);

const DropDownAnimation = new Animation(DropDown, document.timeline);

const DropUpAnimation = new Animation(DropUp, document.timeline);

const OpenKey = new KeyframeEffect(
  BurgerMenu,
  [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
  { duration: 500 }
);

const CloseKey = new KeyframeEffect(
  BurgerMenu,
  [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
  { duration: 500 }
);

const OpenBurgerAnimation = new Animation(OpenKey, document.timeline);

const CloseBurgerAnimation = new Animation(CloseKey, document.timeline);

function handleMenuClick() {
  if (MenuList.classList.contains('visually-hidden')) {
    DropDownAnimation.play();
    MenuList.classList.remove('visually-hidden');
    return;
  }
  DropUpAnimation.play();
  setTimeout(() => {
    MenuList.classList.add('visually-hidden');
  }, 500);
}

function handleBurgerClick() {
  BurgerMenu.classList.add('is-open-header');
  OpenBurgerAnimation.play();
  document.body.style.overflow = 'hidden';
}

function handleCloseClick() {
  CloseBurgerAnimation.play();
  setTimeout(() => {
    BurgerMenu.classList.remove('is-open-header');
  }, 500);
  document.body.style.overflow = '';
}
