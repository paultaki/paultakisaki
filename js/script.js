let slideIndex = 0;
let slides = document.querySelectorAll(".testimonial-slide");

function showSlides() {
    // Remove "active" class from all slides
    slides.forEach(slide => slide.classList.remove("active"));

    // Move to the next slide
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0; // Loop back to first

    // Add "active" class to the current slide
    slides[slideIndex].classList.add("active");

    // Set timer for auto-rotation
    setTimeout(showSlides, 7000);
}

// Manual navigation with previous and next buttons
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // Show the new active slide immediately
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}

// Start the automatic rotation
showSlides();

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
            slide.style.opacity = "0";
        });

        slideIndex++;

        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex - 1].style.opacity = "1";
        }, 50);
    }

    function nextSlide(n) {
        slideIndex += n - 1;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        if (slideIndex >= totalSlides) slideIndex = 0;
        showSlides();
    }

    document.querySelector(".next").addEventListener("click", function () {
        nextSlide(1);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        nextSlide(-1);
    });

    showSlides(); // Show the first slide
    setInterval(showSlides, 5000); // Auto rotate every 5 seconds
});
