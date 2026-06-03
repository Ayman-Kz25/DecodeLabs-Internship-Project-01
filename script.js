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
