const slides = document.querySelectorAll(".slides img");
let counterDisplayElem = document.querySelector(".counter-display");

let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initSlider);

updateDisplay();

function updateDisplay() {
  counterDisplayElem.innerHTML = slideIndex + 1 + "/" + slides.length;
}

function initSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
