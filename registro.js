// registro.js

document.getElementById("form-registro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nuevoUsuario").value;
  const clave = document.getElementById("nuevaClave").value;
  const mensaje = document.getElementById("mensaje-registro");

  const usuario = { nombre, clave };
  localStorage.setItem("usuario", JSON.stringify(usuario));
  mensaje.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
});
