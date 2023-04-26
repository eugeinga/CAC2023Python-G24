// Aqui comienza las llamadas de datos 

fetch("/@/body-Geografia/headerGeografia.html")
.then(response => response.text())
.then(data => {
  const headerGeografia = document.getElementById('headerGeografia');
  headerGeografia.innerHTML = data;
});

fetch("/@/body-Geografia/section1Geografia.html")
.then(response => response.text())
.then(data => {
  const section1Geografia = document.getElementById('section1Geografia');
  section1Geografia.innerHTML = data;
});

fetch("/body/footer.html")
.then(response => response.text())
.then(data => {
  const footerGeografia = document.getElementById('footerGeografia');
  footerGeografia.innerHTML = data;
});