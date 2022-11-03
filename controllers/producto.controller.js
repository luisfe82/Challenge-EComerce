export const lineaNuevaProducto = (id, url, nombre, precio, css) => {
    const linea = document.createElement('div');
    linea.classList.add(`${css}--body__caja`);
    const contenido =
        `
    <div class="${css}--body__caja__imagen">
        <img src="${url}" alt="${nombre}">
    </div>
    <div class="${css}--body__caja__titulo">${nombre}</div>
    <div class="${css}--body__caja__texto">R ${precio}</div>
    <span><a href="./producto.html?id=${id}" class="${css}--body__caja__link">Ver producto</a></span>
    `;
    linea.innerHTML = contenido;
    return linea;
};
export const lineaNueva = (id, url, nombre, precio, categoria, css) => {
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
        <span><a href="#" class="${css}--body__caja__link--borrar"> Borrar</a></span>
    </div>
    `;
    linea.innerHTML = contenido;
    return linea;
};

export const lineaProducto = (idC, categoria, url, nombre, precio, descripcion, stock) => {
    const linea = document.createElement('div');
    linea.classList.add('detalleProducto');
    const contenido =
        `
        <div class="detalleProducto--caja">
            <div class="detalleProducto__titulo">${nombre}</div>
            <div class="detalleProducto__imagen">
                <img src="${url}" alt="${nombre}">
            </div>
        </div>

        <div class="detalleProducto--caja">
            <div class="detalleProducto__descripcion">
                <p class="detalleProducto__texto">${descripcion}</p> 
                <p>R ${precio}   <br>
                    en 12 x 208.25 pesos sin interés </p>
                <p>IVA incluido</p>
                <a href="./categoria.html?id=${idC}"><p class="detalleProducto__titulo">${categoria}</p></a>
            </div>
        </div>

        <div class="detalleProducto--caja">
            <p class="detalleProducto__oferta">
                Oferta del Dia 
            </p>
            <p class="detalleProducto__texto">
                10% OFF con Citibanamex
            </p>
            <p>
                Stock Disponible : ${stock} pzas 
            </p>
            <p class="detalleProducto__texto">
                Cantidad : 1
            </p>
            <div class="detalleProducto--caja__botones">
                <button>Comprar Ahora</button>
                <button>Agregar al carrito</button>
            </div>
        </div>                
    `;
    linea.innerHTML = contenido;
    return linea;
};