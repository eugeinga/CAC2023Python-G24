
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

fetch("/body/section.html")
  .then(response => response.text())
  .then(data => {
    const sectionContainer = document.getElementById('section-container');
    sectionContainer.innerHTML = data;
  });

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


/*

<button onclick="mostrarContenedor('contenedor1')">Mostrar contenedor 1</button>
<button onclick="mostrarContenedor('contenedor2')">Mostrar contenedor 2</button>
<button onclick="mostrarContenedor('contenedor3')">Mostrar contenedor 3</button>
<div class="contenedor-padre">
<div class="contenedor" id="contenedor1">
<p>Contenido del contenedor 1</p>
</div>
<div class="contenedor" id="contenedor2">
<p>Contenido del contenedor 2</p>
</div>
<div class="contenedor" id="contenedor3">
<p>Contenido del contenedor 3</p>
</div>
</div>


  function mostrarContenedor(id) {
  // Oculta todos los contenedores
  var contenedores = document.querySelectorAll('.contenedor');
  contenedores.forEach(function(contenedor) {
    contenedor.classList.remove('activo');
  });

  // Muestra el contenedor seleccionado
  var contenedorActivo = document.getElementById(id);
  contenedorActivo.classList.add('activo');
};

.contenedor {
  display: none;
}

.contenedor.activo {
  display: block;
}


*/