import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";

const obtenerInformacion = () => {
  const identificador = new URL(window.location);
  const id = identificador.searchParams.get("id");

  const palabra = document.querySelector("[data-palabra]");
  palabra.innerText = id;

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const contenido = document.querySelector("[data-contenido]");

  productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
      const regex = new RegExp(`^${id}`, "gi");
      if (almacen.nombre.match(regex)) {
        const nuevaLinea = lineaNuevaProducto(almacen.id, almacen.url, almacen.nombre, almacen.precio, "content");
        contenido.appendChild(nuevaLinea);
      }
    });
  }).catch(() => alert("hubo un error"));

};

obtenerInformacion();