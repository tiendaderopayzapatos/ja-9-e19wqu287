
document.addEventListener("DOMContentLoaded", () => {
  fetch("productos.json")
    .then(res => res.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.error("Error al cargar productos:", error));
});

function mostrarProductos(productos) {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;
  contenedor.innerHTML = "";
  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <p>Tallas disponibles: ${p.talla.join(", ")}</p>
      <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  alert("Producto " + id + " agregado al carrito (funcionalidad simulada)");
}
