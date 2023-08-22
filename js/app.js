/*********************************SHOW/HIDDEN MENU************************************/
const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function(){
  menuList.classList.toggle('nav__list--show');
});

links.forEach(function(link){
  link.addEventListener('click', function(){
    menuList.classList.remove('nav__list--show')
  })
})

/*******************************SWITCH THEME**************************************/
document.addEventListener('DOMContentLoaded', function() {
  const swictherTheme = document.querySelector('.nav__check');
  const root = document.documentElement;

  if(root.getAttribute('data-theme') === 'dark'){
    swictherTheme.checked = true;      
  } 

  function toggleTheme(){
    const setTheme = this.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
  }
  
  swictherTheme.addEventListener('click', toggleTheme);
});

const storageTheme = localStorage.getItem('theme');
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const newTheme = storageTheme ?? systemColorScheme;

document.documentElement.setAttribute('data-theme', newTheme);

/*********************************CHANGE LANGUAGE************************************/
const flagsElement = document.getElementById("nav__flags");
const flagsSidebar = document.getElementById("sidebar__flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json();

  for(const textToChange of textsToChange) {
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value
    textToChange.innerHTML = texts[section][value];
  }
}

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
})

flagsSidebar.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
})