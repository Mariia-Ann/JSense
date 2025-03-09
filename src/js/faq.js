import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
document.addEventListener('DOMContentLoaded', () => {
  
    const faqItems = document.querySelectorAll('.faq-item');
 

    function closeAll() {
      faqItems.forEach(item => {
        item.querySelector('.faq-text').classList.add('hidden'); 
        item.querySelector('.faq-vector-icon').classList.remove('open'); 
      });
    }
 
    faqItems.forEach(item => {
      const toggleButton = item.querySelector('.faq-container');
 
      toggleButton.addEventListener('click', () => {
        const answer = item.querySelector('.faq-text');
        const icon = item.querySelector('.faq-vector-icon');
 
        if (!answer.classList.contains('hidden')) {
          answer.classList.add('hidden');
          icon.classList.remove('open');
        } else {
          closeAll();
 
          answer.classList.remove('hidden');
          icon.classList.add('open');
        }
      });
    });
 
    closeAll();
  });

