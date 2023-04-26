// Aqui comienza las llamadas de datos 

fetch("/@/body-lenguaje/headerLenguaje.html")
.then(response => response.text())
.then(data => {
  const headerLenguaje = document.getElementById('headerLenguaje');
  headerLenguaje.innerHTML = data;
});

fetch("/@/body-lenguaje/section1Lenguaje.html")
.then(response => response.text())
.then(data => {
  const section1Lenguaje = document.getElementById('section1Lenguaje');
  section1Lenguaje.innerHTML = data;
});

fetch("/@/body-lenguaje/section2Lenguaje")
.then(response => response.text())
.then(data => {
  const section2Lenguaje = document.getElementById('section2Lenguaje');
  section2Lenguaje.innerHTML = data;
});


fetch("/body/footer.html")
.then(response => response.text())
.then(data => {
  const footerLenguaje = document.getElementById('footerLenguaje');
  footerLenguaje.innerHTML = data;
});