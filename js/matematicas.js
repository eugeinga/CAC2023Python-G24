// Aqui comienza las llamadas de datos 

fetch("/@/body-matematicas/headerMatematicas.html")
.then(response => response.text())
.then(data => {
  const headerMatematicas = document.getElementById('headerMatematicas');
  headerMatematicas.innerHTML = data;
});

fetch("/@/body-matematicas/section1Matematicas.html")
.then(response => response.text())
.then(data => {
  const section1Matematicas = document.getElementById('section1Matematicas');
  section1Matematicas.innerHTML = data;
});

fetch("/@/body-matematicas/section2Matematicas.html")
.then(response => response.text())
.then(data => {
  const section2Matematicas = document.getElementById('section2Matematicas');
  section2Matematicas.innerHTML = data;
});

fetch("/@/body-matematicas/section3Matematicas.html")
.then(response => response.text())
.then(data => {
  const section3Matematicas = document.getElementById('section3Matematicas');
  section3Matematicas.innerHTML = data;
});

fetch("/body/footer.html")
.then(response => response.text())
.then(data => {
  const footerMatematicas = document.getElementById('footerMatematicas');
  footerMatematicas.innerHTML = data;
});

