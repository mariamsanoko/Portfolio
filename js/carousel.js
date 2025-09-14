const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (index < track.children.length - 1) {
    index++;
    updateCarousel();
  } else {
    index = 0; // boucle
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  } else {
    index = track.children.length - 1; // retour fin
    updateCarousel();
  }
});
