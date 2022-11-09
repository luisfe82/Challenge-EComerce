import { productoServices } from "../services/product.service.js";


const obtenerInformacion = () => {
  const identificador = new URL(window.location);
  const id = identificador.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const categoria = document.querySelector("[data-categoria]");
  const url = document.querySelector("[data-url]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  const stock = document.querySelector("[data-stock]");

  productoServices.buscarProducto(id).then((almacen) => {
    // categoria.value = almacen.categoria;
    url.value = almacen.url;
    nombre.value = almacen.nombre;
    precio.value = almacen.precio;
    descripcion.value = almacen.descripcion;
    stock.value = almacen.stock;
  });
};

obtenerInformacion();