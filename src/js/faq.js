import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener('DOMContentLoaded', () => {
  
  // Створення екземпляра Accordion
  const accordion = new Accordion('.faq-item', {
    openOnInit: [] // Не відкриваємо нічого по замовчуванню
  });

  const faqItems = document.querySelectorAll('.faq-item');
  
  // Тепер ми не будемо закривати всі секції при натисканні
  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-container');
    
    toggleButton.addEventListener('click', () => {
      const answer = item.querySelector('.faq-text');
      const icon = item.querySelector('.faq-vector-icon');
      
      // Перевірка, чи потрібно показати/сховати відповідь
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