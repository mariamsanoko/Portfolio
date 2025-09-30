const articlesData = [
  {"title":"Créer une Power App mobile","summary":"Guide pas-à-pas pour créer une app mobile.","tags":["PowerApps","NoCode"],"image":"articles/images/powerapp1.png"},
  {"title":"Intégrer un chatbot IA","summary":"Tutoriel pour coach IA personnalisé.","tags":["Chatbot","PowerApps"],"image":"articles/images/chatbot1.png"},
  {"title":"Power BI dashboards","summary":"Analyser performances et inscriptions.","tags":["PowerBI","Reporting"],"image":"articles/images/powerbi1.png"},
  {"title":"Automatiser avec Power Automate","summary":"Notifications et rappels automatiques.","tags":["PowerAutomate","NoCode"],"image":"articles/images/powerautomate1.png"},
  {"title":"Programme d’affiliation","summary":"Suivi partenaires et commissions.","tags":["Sales","NoCode"],"image":"articles/images/affiliation1.png"}
];

let currentPage = 1;
const articlesPerPage = 4;
let filteredArticles = [...articlesData];

function renderArticles() {
  const container = document.querySelector('.articles-container');
  container.innerHTML = '';
  const start = (currentPage-1)*articlesPerPage;
  const end = start + articlesPerPage;
  const pageArticles = filteredArticles.slice(start,end);

  pageArticles.forEach(a=>{
    if(!localStorage.getItem(a.title+"_likes")) localStorage.setItem(a.title+"_likes",0);
    if(!localStorage.getItem(a.title+"_views")) localStorage.setItem(a.title+"_views",0);
    let likes = parseInt(localStorage.getItem(a.title+"_likes"));
    let views = parseInt(localStorage.getItem(a.title+"_views")) + 1;
    localStorage.setItem(a.title+"_views", views);

    const articleElem = document.createElement('div');
    articleElem.className='blog-post';
    setTimeout(()=>articleElem.classList.add('fade-in'), 100);

    articleElem.innerHTML = `
      <img src="${a.image}" alt="${a.title}">
      <h2>${a.title}</h2>
      <p>${a.summary}</p>
      <p class="hashtags">${a.tags.map(tag=>`<a href="#">#${tag}</a>`).join(' ')}</p>
      <div class="likes-views">❤️ ${likes} Likes | 👁 ${views} Vues</div>
      <div class="share">
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=#" target="_blank">Partager LinkedIn</a> | 
        <a href="https://twitter.com/intent/tweet?url=#&text=${encodeURIComponent(a.title)}" target="_blank">Partager Twitter</a>
      </div>`;

    container.appendChild(articleElem);
    articleElem.querySelector('.likes-views').addEventListener('click',()=>{
      likes++;
      localStorage.setItem(a.title+"_likes", likes);
      renderArticles();
    });
  });

  document.getElementById('page-info').innerText = `Page ${currentPage} / ${Math.ceil(filteredArticles.length/articlesPerPage)}`;
}

function filterArticles(tag) {
  currentPage=1;
  if(tag==='all'){ filteredArticles=[...articlesData]; renderArticles(); return; }
  filteredArticles = articlesData.filter(a=>a.tags.includes(tag));
  renderArticles();
}

function nextPage(){ if(currentPage<Math.ceil(filteredArticles.length/articlesPerPage)){currentPage++; renderArticles();} }
function prevPage(){ if(currentPage>1){currentPage--; renderArticles();} }

function searchArticles(){
  const keyword = document.getElementById('search-input').value.toLowerCase();
  filteredArticles = articlesData.filter(a=>
    a.title.toLowerCase().includes(keyword) ||
    a.summary.toLowerCase().includes(keyword) ||
    a.tags.some(tag=>tag.toLowerCase().includes(keyword))
  );
  currentPage=1;
  renderArticles();
}

renderArticles();