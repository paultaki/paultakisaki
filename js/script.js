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
