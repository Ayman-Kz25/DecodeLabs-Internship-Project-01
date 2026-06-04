// CAROUSEL FUNCTIONALITY
const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

function updateCarousel() {
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev", "next");
  });

  slides[current].classList.add("active");

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateCarousel();
  restartAutoPlay();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
  restartAutoPlay();
});

let autoPlay = setInterval(() => {
    current = (current + 1) % slides.length;
    updateCarousel();
}, 3000);

function restartAutoPlay() {
    clearInterval(autoPlay);
    
    autoPlay = setInterval(()=>{
        current = (current + 1) % slides.length;
        updateCarousel();
    }, 3000);
}

updateCarousel();

// LETTER CHANGING FUNCRTIONALITY
const letters = document.querySelectorAll(".letter");
const nextLetterBtn = document.querySelector(".letter-controls .next-btn");
const prevLetterBtn = document.querySelector(".letter-controls .prev-btn");

let index = 0;

function showLetter(i) {
  letters.forEach(l => l.classList.remove("active"));

  index = (i + letters.length) % letters.length;

  letters[index].classList.add("active");
}

showLetter(index);

nextLetterBtn.addEventListener("click", () => {
  showLetter(index + 1);
});

prevLetterBtn.addEventListener("click", () => {
  showLetter(index - 1);
});