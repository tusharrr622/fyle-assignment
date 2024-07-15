// script.js

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showImage(index) {
    const imageWidth = images[0].clientWidth;
    slider.style.transform = `translateX(${-index * imageWidth}px)`;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function currentSlide(n) {
    index = n;
    showImage(index);
}

// Initialize the first slide and dot
showImage(index);

// Optional: Auto-slide feature
setInterval(() => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
}, 3000); // Change image every 3 seconds
