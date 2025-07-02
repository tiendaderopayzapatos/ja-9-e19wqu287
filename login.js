// login.js

document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuarioIngresado = document.getElementById("usuario").value;
  const claveIngresada = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje-login");

  const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioRegistrado) {
    mensaje.textContent = "No hay usuarios registrados.";
    return;
  }

  if (usuarioRegistrado.nombre === usuarioIngresado && usuarioRegistrado.clave === claveIngresada) {
    localStorage.setItem("usuario", JSON.stringify(usuarioRegistrado));
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
  }
});
