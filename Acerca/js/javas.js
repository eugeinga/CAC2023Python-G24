function mostrarMenu() {
    let botonMenu = document.querySelector('#boton-menu');
    let nav = document.querySelector('nav');
    nav.style.left = nav.style.left === '-250px' ? '0' : '-250px';
    localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
}
/*
*/

fetch("/aside/aside.html")
  .then(response => response.text())
  .then(data => {
    const asideContainer = document.getElementById('mi-aside-container');
    asideContainer.innerHTML = data;
  });