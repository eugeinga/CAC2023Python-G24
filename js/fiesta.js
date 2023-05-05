/*
Combo Base 
Combo Super
Combo Full 
*/


// llamadas de Estructuras


/* Header de la Pagina  */

fetch("/body/header.html")
.then(response => response.text())
.then(data => {
  const headerContainer = document.getElementById('header-container');
  headerContainer.innerHTML = data;
});

/* Nav de la Pagina  */

fetch("/body/nav.html")
.then(response => response.text())
.then(data => {
  const navContainer = document.getElementById('nav-container');
  navContainer.innerHTML = data;
});

/* Section de la Pagina  */


/* Aside de la Pagina  */

fetch("/body/aside.html")
.then(response => response.text())
.then(data => {
  const asideContainer = document.getElementById('aside-container');
  asideContainer.innerHTML = data;
});

/* Footer de la Pagina  */

fetch("/body/footer.html")
.then(response => response.text())
.then(data => {
  const footerContainer = document.getElementById('footer-container');
  footerContainer.innerHTML = data;
});

