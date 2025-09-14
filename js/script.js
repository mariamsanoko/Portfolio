// Menu mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

 