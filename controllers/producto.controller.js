import { productoServices } from "../services/product.service.js";

const lineaNuevaProducto = (url, nombre, precio) => {
    const linea = document.createElement('div');
    linea.classList.add('content--body__caja');
    const contenido =
    `
    <div class="content--body__caja__imagen">
        <img src="./assets/img/${url}" alt="">
    </div>
    <div class="content--body__caja__titulo">${nombre}</div>
    <div class="content--body__caja__texto">R$ ${precio}</div>
    <span><a class="content--body__caja__link">Ver producto</a></span>
    `;
    linea.innerHTML = contenido;
    return linea;
};

const starwars = document.querySelector("[data-starwars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        if (almacen.categoria == "starwars") {
            const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio);
            starwars.appendChild(nuevaLinea);
        }        
        if (almacen.categoria == "consolas") {
            const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio);
            consolas.appendChild(nuevaLinea);
        }        
        if (almacen.categoria == "diversos") {
            const nuevaLinea = lineaNuevaProducto(almacen.url, almacen.nombre, almacen.precio);
            diversos.appendChild(nuevaLinea);
        }        
    });
}).catch((err) => alert("hubo un error"))