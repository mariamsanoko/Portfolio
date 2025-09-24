// --- Mode sombre ---
const modeToggle = document.querySelector(".mode-toggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change l'icône du bouton
    if (document.body.classList.contains("dark-mode")) {
      modeToggle.textContent = "☀️ Mode";
    } else {
      modeToggle.textContent = "🌙 Mode";
    }
  });
}

// --- Navbar sticky ---
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}
