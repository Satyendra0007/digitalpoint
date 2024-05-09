const slider = document.getElementById("cousel-container");
const slides = document.querySelectorAll(".slide");
let currentIndex = 3;

const displaySlide = (currentIndex) => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  displaySlide(currentIndex);
}

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  displaySlide(currentIndex);
}

// setInterval(nextSlide, 3000);


