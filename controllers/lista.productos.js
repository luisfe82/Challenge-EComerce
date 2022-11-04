import { productoServices } from "../services/product.service.js";

const lineaNueva = (id, url, nombre, precio, categoria, css) => {
    const linea = document.createElement('div');
    linea.classList.add(`${css}--body__caja`);
    const contenido =
        `
    <div class="${css}--body__caja__imagen">
        <img src="${url}" alt="${nombre}">
    </div>
    <div class="${css}--body__caja__titulo">${nombre}</div>
    <div class="${css}--body__caja__texto">${precio}</div>
    <div class="${css}--body__caja__texto">${categoria}</div>
    <div  class="${css}--body__box">
        <span><a href="#" class="${css}--body__caja__link--editar">Editar</a></span>
        <button class="${css}--body__caja__link--borrar" type="button" id="${id}">
            Eliminar
        </button> 
    </div>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServices.eliminarProducto(id)
            .then((respuesta) => {
                alert("Eliminado correctamente");
            })
            .catch(() => alert("Ocurrió un error"));
    });
    return linea;
};

const contenido = document.querySelector("[data-contenido]");

productoServices.ListaProductos().then((data) => {
    data.forEach((almacen) => {
        const nuevaLinea = lineaNueva(almacen.id,almacen.url, almacen.nombre, almacen.precio,almacen.categoria,"content");
        contenido.appendChild(nuevaLinea);
    });
}).catch(() => alert("hubo un error"));