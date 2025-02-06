document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".testimonial-slide");

    if (slides.length === 0) {
        console.error("❌ No elements found for '.testimonial-slide'. Check your HTML structure.");
        console.log("HTML content of body:", document.body.innerHTML); // Debugging
        return;
    }

    console.log(`✅ Found ${slides.length} .testimonial-slide elements.`);

    function showSlides() {
        slides.forEach(slide => slide.classList.remove("active"));

        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;

        slides[slideIndex].classList.add("active");

        setTimeout(showSlides, 7000);
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[slideIndex].classList.add("active");
    }

    document.querySelector(".next")?.addEventListener("click", function () {
        plusSlides(1);
    });

    document.querySelector(".prev")?.addEventListener("click", function () {
        plusSlides(-1);
    });

    showSlides(); // Start slideshow after DOM is fully loaded
});
