import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";


const consolas = document.querySelector("[data-consolas]");

productoServices.ListaProductos().then((data) => {
    let top = 1;
    data.forEach((almacen) => {
        const nuevaLinea = lineaNuevaProducto(almacen.id,almacen.url, almacen.nombre, almacen.precio,"content");
        if (almacen.categoria == "Consolas" && top < 7) {
            consolas.appendChild(nuevaLinea);
            top +=1;
        }
    });
}).catch(() => alert("hubo un error"));