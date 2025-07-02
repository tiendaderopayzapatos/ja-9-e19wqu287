// carrito.js

document.addEventListener("DOMContentLoaded", () => {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const lista = document.getElementById("lista-carrito");
  const totalTexto = document.getElementById("total-carrito");
  const botonPagar = document.getElementById("boton-pagar");

  let total = 0;

  if (carrito.length === 0) {
    lista.innerHTML = "<p>Tu carrito está vacío.</p>";
    botonPagar.style.display = "none";
  } else {
    carrito.forEach((producto, index) => {
      const item = document.createElement("div");
      item.innerHTML = `
        <p><strong>${producto.nombre}</strong> - Talla: ${producto.talla} - $${producto.precio.toFixed(2)}</p>
      `;
      lista.appendChild(item);
      total += producto.precio;
    });
    totalTexto.textContent = "Total a pagar: $" + total.toFixed(2);
    botonPagar.style.display = "inline-block";
  }

  // Botón para vaciar el carrito
  document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito");
    location.reload();
  });
});
