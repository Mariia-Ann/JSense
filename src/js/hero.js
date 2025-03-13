
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    const colorOptions = document.querySelectorAll(".color-option");
    const colorMenuBtn = document.querySelector(".color-menu-btn");
    const colorPicker = document.querySelector(".color-picker");

    
    const imageClasses = ["image-1", "image-2", "image-3", "image-4", "image-5"];

    let currentImageIndex = 0;

    function changeBackgroundImages(index) {
        imageClasses.forEach(imageClass => {
            heroSection.classList.remove(imageClass);
        });

        heroSection.classList.add(imageClasses[index]);
    };
    
    const savedBgIndex = localStorage.getItem("selectedBg");
    if (savedBgIndex !== null) {
        currentImageIndex = parseInt(savedBgIndex);
        changeBackgroundImages(currentImageIndex);
    }

    colorMenuBtn.addEventListener("click", () => {
        colorPicker.classList.toggle("visible"); 
    });

    colorOptions.forEach( (option, index) => {
        option.addEventListener("click", () => {
            currentImageIndex = index;
            changeBackgroundImages(currentImageIndex)

                localStorage.setItem("selectedBg", currentImageIndex);

            colorPicker.classList.remove("visible");

            const color = option.getAttribute("data-color");
            const theme = `theme-${color}`;
            document.body.classList.remove("theme-red", "theme-green", "theme-blue", "theme-orange", "theme-khaki", "theme-yellow");
            document.body.classList.add(theme);

            localStorage.setItem("selectedTheme", theme);
        });
    });

    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});



