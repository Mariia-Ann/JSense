document.addEventListener("DOMContentLoaded", () => {
    const benefitsBtn = document.querySelector(".benefits-btn");
    const targetSection = document.querySelector("#projects");
  
    if (benefitsBtn && targetSection) {
      benefitsBtn.addEventListener("click", () => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });