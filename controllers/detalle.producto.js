import { productoServices } from "../services/product.service.js";
import { lineaProducto } from "./producto.controller.js";

const detalleInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "index.html";
  }


  productoServices.detalleProdu(id).then((almacen) => {

    const contenido = document.querySelector("[data-contenido]");

    const nuevaLinea = lineaProducto(almacen.idC, almacen.categoria, almacen.url, almacen.nombre, almacen.precio, almacen.descripcion, almacen.stock);

    contenido.appendChild(nuevaLinea);

  }).catch(() => alert("hubo un error"));
};

detalleInfo();

