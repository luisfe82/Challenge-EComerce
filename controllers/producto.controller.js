
export const lineaNuevaProducto = (url, nombre, precio,css) => {
    const linea = document.createElement('div');
    linea.classList.add(`${css}--body__caja`);
    const contenido =
    `
    <div class="${css}--body__caja__imagen">
        <img src="./assets/img/${url}" alt="">
    </div>
    <div class="${css}--body__caja__titulo">${nombre}</div>
    <div class="${css}--body__caja__texto">R$ ${precio}</div>
    <span><a class="${css}--body__caja__link">Ver producto</a></span>
    `;
    linea.innerHTML = contenido;
    return linea;
};