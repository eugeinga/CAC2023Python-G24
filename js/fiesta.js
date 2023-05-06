
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

//  Calculos Para los Presuepuestos 

function calcularTotal() {
  let total = 0;
  const precioComboBase = 30000.00;
  const precioComboSuper = 35000.00;
  const precioComboFull = 40000.00;
  const precioHoraExtra = 2500.00;
  const precioGlobologia = 3500.00;
  const precioMaquillajeArtistico = 4500.00;
  const precioShoeDeTiteres = 4000.00;
  const precioCabinaDeFotos = 5500.00;
  const precioShowDeMagia = 5000.00;
  const precioDescartablesParaNino = 750.00;
  const precioDescartablesParaAdultos = 750.00;
  const precioTorta = 5500.00;
  const precioSorpresitas = 500.00;
  const precioCoordinador = 3000.00;
  const precioNinoAdicional = 450.00;
  const precioAdultoAdicional = 450.00;

  const cantidadComboBase = 1;
  const cantidadComboSuper = 1;
  const cantidadComboFull = 1;
  const cantidadHoraExtra = parseInt(document.getElementById("cantidadHoraExtra").value);
  const cantidadGlobologia = parseInt(document.getElementById("cantidadGlobologia").value);
  const cantidadMaquillajeArtistico = parseInt(document.getElementById("cantidadMaquillajeArtistico").value);
  const cantidadShoeDeTiteres= parseInt(document.getElementById("cantidadShowDeTiteres").value);
  const cantidadCabinaDeFotos = parseInt(document.getElementById("cantidadCabinaDeFotos").value);
  const cantidadShowDeMagia = parseInt(document.getElementById("cantidadShowDeMagia").value);
  const cantidadDescartablesParaNino = parseInt(document.getElementById("cantidadDescartablesParaNino").value);
  const cantidadDescartablesParaAdultos = parseInt(document.getElementById("cantidadDescartablesParaAdultos").value);
  const cantidadTorta = parseInt(document.getElementById("cantidadTorta").value);
  const cantidadSorpresitas = parseInt(document.getElementById("cantidadSorpresitas").value);
  const cantidadCoordinador = parseInt(document.getElementById("cantidadCoordinador").value);
  const cantidadNinoAdicional = parseInt(document.getElementById("cantidadNinoAdicional").value);
  const cantidadAdultoAdicional = parseInt(document.getElementById("cantidadAdultoAdicional").value);

  const ComboBaseSeleccionado = document.getElementById("ComboBase").checked;
  const ComboSuperSeleccionado = document.getElementById("ComboSuper").checked;
  const ComboFullSeleccionado = document.getElementById("ComboFull").checked;
  const HoraExtraSeleccionado = document.getElementById("HoraExtra").checked;
  const GlobologiaSeleccionado = document.getElementById("Globologia").checked;
  const MaquillajeArtisticoSeleccionado = document.getElementById("MaquillajeArtistico").checked;
  const ShowDeTiteresSeleccionado = document.getElementById("ShowDeTiteres").checked;
  const CabinaDeFotosSeleccionado = document.getElementById("CabinaDeFotos").checked;
  const ShowDeMagiaSeleccionado = document.getElementById("ShowDeMagia").checked;
  const DescartablesParaNinoSeleccionado = document.getElementById("DescartablesParaNino").checked;
  const DescartablesParaAdultosSeleccionado = document.getElementById("DescartablesParaAdultos").checked;
  const TortaSeleccionado = document.getElementById("Torta").checked;
  const SorpresitasSeleccionado = document.getElementById("Sorpresitas").checked;
  const CoordinadorSeleccionado = document.getElementById("Coordinador").checked;
  const NinoAdicionalSeleccionado = document.getElementById("NinoAdicional").checked;
  const AdultoAdicionalSeleccionado = document.getElementById("AdultoAdicional").checked;

  if (ComboBaseSeleccionado) {
    total += precioComboBase * cantidadComboBase ;
  }

  if (ComboSuperSeleccionado) {
    total += precioComboSuper * cantidadComboSuper ;
  }

  if (ComboFullSeleccionado) {
    total += precioComboFull * cantidadComboFull ;
  }

  if (HoraExtraSeleccionado) {
    total += precioHoraExtra * cantidadHoraExtra;
  }

  if (GlobologiaSeleccionado) {
    total += precioGlobologia * cantidadGlobologia;
  }

  if (MaquillajeArtisticoSeleccionado) {
    total += precioMaquillajeArtistico * cantidadMaquillajeArtistico;
  }

  if (ShowDeTiteresSeleccionado) {
    total += precioShoeDeTiteres * cantidadShoeDeTiteres;
  }

  if (CabinaDeFotosSeleccionado) {
    total += precioCabinaDeFotos * cantidadCabinaDeFotos;
  }

  if (ShowDeMagiaSeleccionado) {
    total += precioShowDeMagia * cantidadShowDeMagia;
  }

  if (DescartablesParaNinoSeleccionado) {
    total += precioDescartablesParaNino * cantidadDescartablesParaNino;
  }

  if (DescartablesParaAdultosSeleccionado) {
    total += precioDescartablesParaAdultos * cantidadDescartablesParaAdultos;
  }

  if (TortaSeleccionado) {
    total += precioTorta * cantidadTorta;
  }

  if (SorpresitasSeleccionado) {
    total += precioSorpresitas * cantidadSorpresitas;
  }

  if (CoordinadorSeleccionado) {
    total += precioCoordinador * cantidadCoordinador;
  }

  if (NinoAdicionalSeleccionado) {
    total += precioNinoAdicional * cantidadNinoAdicional;
  }

  if (AdultoAdicionalSeleccionado) {
    total += precioAdultoAdicional * cantidadAdultoAdicional;
  }

  document.getElementById("total").innerHTML = "Total: $ " + total.toFixed(2);
}
