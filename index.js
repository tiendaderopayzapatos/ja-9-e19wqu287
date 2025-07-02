// index.js

function cargarFiltros() {
  const categorias = [...new Set(productos.map(p => p.categoria))];
  const tallas = [...new Set(productos.flatMap(p => p.talla))];

  const selectCategoria = document.getElementById("filtro-categoria");
  const selectTalla = document.getElementById("filtro-talla");

  categorias.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    selectCategoria.appendChild(opt);
  });

  tallas.forEach(talla => {
    const opt = document.createElement("option");
    opt.value = talla;
    opt.textContent = talla;
    selectTalla.appendChild(opt);
  });
}

function mostrarProductos() {
  const contenedor = document.getElementById("lista-productos");
  const categoria = document.getElementById("filtro-categoria").value;
  const talla = document.getElementById("filtro-talla").value;
  const busqueda = document.getElementById("buscador").value.toLowerCase();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  contenedor.innerHTML = "";

  productos.forEach(producto => {
    if ((categoria && producto.categoria !== categoria) ||
        (talla && !producto.talla.includes(talla)) ||
        (busqueda && !producto.nombre.toLowerCase().includes(busqueda))) {
      return;
    }

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;

    if (!usuario) {
      div.querySelector("button").disabled = true;
      div.querySelector("button").textContent = "Inicia sesión para comprar";
    }

    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) return;

  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");
}

function actualizarMenuUsuario() {
  const menu = document.getElementById("menu-usuario");
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
    menu.innerHTML = `Hola, ${usuario.nombre} | <a href="#" onclick="cerrarSesion()">Salir</a>`;
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  cargarFiltros();
  mostrarProductos();
  actualizarMenuUsuario();
  document.getElementById("filtro-categoria").addEventListener("change", mostrarProductos);
  document.getElementById("filtro-talla").addEventListener("change", mostrarProductos);
  document.getElementById("buscador").addEventListener("input", mostrarProductos);
});
