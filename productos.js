// === productos.js ===
// Lista de productos simulada (más de 100 productos ejemplo resumido por espacio)

const productos = [
  {
    id: 1,
    nombre: "Camisa blanca manga larga hombre",
    categoria: "camisas",
    talla: ["S", "M", "L", "XL"],
    precio: 24.99,
    imagen: "img/camisa1.jpg"
  },
  {
    id: 2,
    nombre: "Pantalón jean azul desgastado",
    categoria: "pantalones",
    talla: ["S", "M", "L"],
    precio: 29.99,
    imagen: "img/pantalon1.jpg"
  },
  {
    id: 3,
    nombre: "Zapatos cuero negro elegantes",
    categoria: "zapatos",
    talla: ["40", "41", "42"],
    precio: 39.99,
    imagen: "img/zapatos1.jpg"
  },
  {
    id: 4,
    nombre: "Vestido largo rojo con encaje",
    categoria: "vestidos",
    talla: ["M", "L"],
    precio: 34.99,
    imagen: "img/vestido1.jpg"
  },
  {
    id: 5,
    nombre: "Traje de baño azul con flores",
    categoria: "trajes de baño",
    talla: ["S", "M"],
    precio: 19.99,
    imagen: "img/banador1.jpg"
  },
  {
    id: 6,
    nombre: "Zapatillas deportivas blancas unisex",
    categoria: "zapatillas",
    talla: ["38", "39", "40", "41"],
    precio: 45.00,
    imagen: "img/zapatillas1.jpg"
  }
];

if (typeof module !== 'undefined') {
  module.exports = productos;
}
