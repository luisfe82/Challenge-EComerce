import { productoServices } from "../services/product.service.js";
import { lineaNuevaProducto } from "./producto.controller.js";

const starwars = document.querySelector("[data-starwars]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio,"content");
        if (almacen.categoria == "StarWars") {
            starwars.appendChild(nuevaLinea);
        }
    });
}).catch(() => alert("hubo un error"));