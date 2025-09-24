// js/filter.js
function filterProjects(type) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(p => {
    if(type === 'all' || p.dataset.type === type) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}
