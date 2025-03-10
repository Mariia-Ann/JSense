const ScrollBtnHero = document.querySelector('.btn-scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    ScrollBtnHero.classList.remove('is-btnshow-hide');
  } else {
    ScrollBtnHero.classList.add('is-btnshow-hide');
  }
});
ScrollBtnHero.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};