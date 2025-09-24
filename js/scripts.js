// Filtrage projets
function filterProjects(type) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) card.style.display='block';
    else card.style.display='none';
  });
}

// Menu vertical mobile toggle
function toggleSidebar() {
  const sidebar = document.getElementById('mobileSidebar');
  sidebar.classList.toggle('show');
}

// Update devise icône desktop
function updateCurrencyIcon() {
  const select = document.getElementById('currencySelect');
  const icon = document.getElementById('currencyIcon');
  switch(select.value){
    case 'euro': icon.className='fa-solid fa-euro-sign'; break;
    case 'usd': icon.className='fa-solid fa-dollar-sign'; break;
    case 'gbp': icon.className='fa-solid fa-sterling-sign'; break;
  }
}

// Update devise icône mobile
function updateCurrencyIconMobile() {
  const select = document.getElementById('currencySelectMobile');
  const icon = document.getElementById('currencyIconMobile');
  switch(select.value){
    case 'euro': icon.className='fa-solid fa-euro-sign'; break;
    case 'usd': icon.className='fa-solid fa-dollar-sign'; break;
    case 'gbp': icon.className='fa-solid fa-sterling-sign'; break;
  }
}
