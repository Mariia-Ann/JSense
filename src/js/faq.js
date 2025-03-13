import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
document.addEventListener("DOMContentLoaded", () => {
  const accordion = new Accordion(".faq-item", {
    openOnInit: []
  });

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggleButton = item.querySelector(".faq-container");
    const answer = item.querySelector(".faq-text");
    const icon = item.querySelector(".faq-vector-icon");

    toggleButton.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      toggleFAQ(item, answer, icon, !isOpen);
    });
  });

  function toggleFAQ(item, answer, icon, open) {
    if (open) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = "1";
      icon.style.transform = "rotate(180deg)";
    } else {
      item.classList.remove("active");
      answer.style.maxHeight = "0";
      answer.style.opacity = "0";
      icon.style.transform = "rotate(0deg)";
    }
  }
});
