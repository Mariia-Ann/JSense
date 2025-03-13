
document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".hero");
    const colorOptions = document.querySelectorAll(".color-option");
    const colorMenuBtn = document.querySelector(".color-menu-btn");
    const colorPicker = document.querySelector(".color-picker");

    const backgroundImages = {
        red: "../img/hero/hero-1.webp",
        green: "../img/hero/hero-2.webp",
        blue: "../img/hero/hero-3.webp",
        orange: "../img/hero/hero-5.webp",
        khaki: "../img/hero/hero-4.webp",
        yellow: "../img/hero/hero-6.webp"
    };

    const savedBg = localStorage.getItem("selectedBg");
    if (savedBg) {
        background.style.backgroundImage = `url('${savedBg}')`;
    }

    colorMenuBtn.addEventListener("click", () => {
        colorPicker.classList.toggle("visible"); 
    });

    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            const color = option.getAttribute("data-color");
            const bgImage = backgroundImages[color];

            background.style.backgroundImage = `url('${bgImage}')`;
            localStorage.setItem("selectedBg", bgImage);

            colorPicker.classList.remove("visible");
        });
    });

    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            const theme = `theme-${option.getAttribute("data-color")}`;

            document.body.classList.remove("theme-red", "theme-green", "theme-blue", "theme-orange", "theme-khaki", "theme-yellow");
            document.body.classList.add(theme);

            localStorage.setItem("selectedTheme", theme);
        });
    });
});



