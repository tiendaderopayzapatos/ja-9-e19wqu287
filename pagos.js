// pagos.js

document.getElementById("form-pago").addEventListener("submit", function (e) {
  e.preventDefault();

  const tarjeta = document.getElementById("numero-tarjeta").value;
  const mensaje = document.getElementById("mensaje-pago");

  if (!/^[0-9]{16}$/.test(tarjeta)) {
    mensaje.textContent = "La tarjeta debe contener exactamente 16 dígitos numéricos.";
    return;
  }

  const envio = document.getElementById("envio").value;
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const totalCarrito = carrito.reduce((total, item) => total + item.precio, 0);

  let costoEnvio = 0;
  if (envio === "quito") costoEnvio = 2;
  else if (envio === "guayaquil") costoEnvio = 3;
  else if (envio === "cuenca") costoEnvio = 4;
  else costoEnvio = 5;

  const totalFinal = totalCarrito + costoEnvio;

  mensaje.textContent = `Pago procesado. Total final con envío: $${totalFinal.toFixed(2)}. ¡Gracias por tu compra!`;

  localStorage.removeItem("carrito");
});
