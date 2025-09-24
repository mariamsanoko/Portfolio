// --- Menu mobile ---
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// --- Dark Mode ---
const modeToggle = document.querySelector(".mode-toggle");
if (modeToggle) {
  // Charger mode depuis localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    modeToggle.textContent = "☀️ Mode";
  }

  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    modeToggle.textContent = theme === "dark" ? "☀️ Mode" : "🌙 Mode";
  });
}
/* --- Styles de base --- */