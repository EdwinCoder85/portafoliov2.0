function changeLanguage() {
  const flagsElement = document.getElementById("nav__flags");
  const flagsSidebar = document.getElementById("sidebar__flags");
  const textsToChange = document.querySelectorAll("[data-section]");
  
  const changeLanguage = async language => {
    const requestJson = await fetch(`./assets/languages/${language}.json`)
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
}

export default changeLanguage