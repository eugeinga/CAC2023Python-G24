
function cargarDatos() {

  let nombre = document.getElementsByName("nombre")[0].value;
  if (nombre.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres");
    return false;
  }

  let apellido = document.getElementsByName("apellido")[0].value;
  if (apellido.length < 2) {
    alert("El Apellido debe tener al menos 2 caracteres");
    return false;
  }

  let edad = document.getElementsByName("edad")[0].value;
  if (isNaN(edad) || edad < 18 || edad > 120) {
    alert("Por favor ingrese una edad válida (mayor de 18 y menor de 120)");
    return false;
  }

  let dni = document.getElementsByName("dni")[0].value;
  if (dni.length < 6) {
    alert("El DNI debe tener al menos 6 caracteres");
    return false;
  } 

  let email = document.getElementsByName("email")[0].value;
  if (!/@/.test(email) || email.split('@')[0].length === 0 || email.split('@')[1].length === 0) {
    alert("Por favor ingrese un correo electrónico válido");
    return false;
  }

form.reset()

}