import { productoServices } from "../services/product.service.js";
import { lineaNueva } from "./producto.controller.js";

const contenido = document.querySelector("[data-contenido]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        const nuevaLinea = lineaNueva(almacen.id,almacen.url, almacen.nombre, almacen.precio,almacen.categoria,"content");
        contenido.appendChild(nuevaLinea);
    });
}).catch(() => alert("hubo un error"));