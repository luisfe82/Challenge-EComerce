import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";


const consolas = document.querySelector("[data-consolas]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio,"content");
        if (almacen.categoria == "Consolas") {
            consolas.appendChild(nuevaLinea);
        }
    });
}).catch(() => alert("hubo un error"));