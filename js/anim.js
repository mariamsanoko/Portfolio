
document.addEventListener("DOMContentLoaded", () => {
  // --- Animation au scroll ---
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  // --- Menu actif ---
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });

    // --- Animation compteur ---
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Durée de l'animation en ms
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    observer.observe(counter);
  });
});