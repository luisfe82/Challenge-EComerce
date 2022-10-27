import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";

const detalleInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "index.html";
  }

  const tituloPrincipal = document.querySelector("[data-titulo]");
  const imagen = document.querySelector("[data-presenta]");
  
  tituloPrincipal.style.padding = "0 0 14rem 0";
  

  productoServices.detalleCatego(id).then((categoria) => {
    tituloPrincipal.textContent = categoria.titulo;
    imagen.style.background = `url("../assets/img/${categoria.imagen}") no-repeat center / cover`;

    const contenido = document.querySelector("[data-contenido]");

    productoServices.ListaProductos().then((data) => {
      data.forEach((almacen) => {
        const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio);
        if (almacen.categoria == categoria.titulo) {
          contenido.appendChild(nuevaLinea);
        }
      });
    }).catch(() => alert("hubo un error"));



  }).catch(() => alert("hubo un error"));
};

detalleInfo();

