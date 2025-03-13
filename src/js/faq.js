import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener('DOMContentLoaded', () => {


  const accordion = new Accordion('.faq-item', {
    openOnInit: []
  });

  const faqItems = document.querySelectorAll('.faq-item');


  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-container');

    toggleButton.addEventListener('click', () => {
      const answer = item.querySelector('.faq-text');
      const icon = item.querySelector('.faq-vector-icon');


      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.add('open');
      } else {
        answer.classList.add('hidden');
        icon.classList.remove('open');
      }
    });
  });
})