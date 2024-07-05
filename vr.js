// JavaScript for slideshow functionality (optional)

// Select all photos
const photos = document.querySelectorAll('.photo');

let currentSlide = 0;
const slideInterval = 5000; // Change slide every 5 seconds

function nextSlide() {
    photos[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % photos.length;
    photos[currentSlide].classList.add('active');
}

// Automatically change slides
setInterval(nextSlide, slideInterval);
