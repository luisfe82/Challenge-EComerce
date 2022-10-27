import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";

const diversos = document.querySelector("[data-diversos]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio);
        if (almacen.categoria == "Diversos") {
            diversos.appendChild(nuevaLinea);
        }
    });
}).catch(() => alert("hubo un error"));
