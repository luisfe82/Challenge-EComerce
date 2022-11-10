import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";

const obtenerInformacion = () => {
  const identificador = new URL(window.location);
  const id = identificador.searchParams.get("id");
  var vacio = true;

  const palabra = document.querySelector("[data-palabra]");
  palabra.innerText = id;

  if (id === null) {
    contenido.innerHTML = '<div class="content--noresult"><div class="content--noresult__caja"><h2 class="content--noresult__titulo">No se encontraron Resultados</h2></div></div>';
  }

  const contenido = document.querySelector("[data-contenido]");

  productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
      const regex = new RegExp(`^${id}`, "gi");
      if (almacen.nombre.match(regex)) {
        const nuevaLinea = lineaNuevaProducto(almacen.id, almacen.url, almacen.nombre, almacen.precio, "content");
        contenido.appendChild(nuevaLinea);
        vacio = false;
      }
    });
    if (vacio == true) {
      contenido.innerHTML = '<div class="content--noresult"><div class="content--noresult__caja"><h2 class="content--noresult__titulo">No se encontraron Resultados</h2></div></div>';
    }
  }).catch(() => alert("hubo un error"));
  
};

obtenerInformacion();