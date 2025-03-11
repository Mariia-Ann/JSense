document.addEventListener("DOMContentLoaded", () => {
    const coversSection = document.querySelector(".covers");
    const marquees = document.querySelectorAll(".marquee");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                marquees.forEach(marquee => {
                    marquee.style.animationPlayState = "running";
                });
            } else {
                marquees.forEach(marquee => {
                    marquee.style.animationPlayState = "paused";
                });
            }
        });
    }, { threshold: 0.2 }); 
    
    if (coversSection) {
        observer.observe(coversSection);
    }
});
