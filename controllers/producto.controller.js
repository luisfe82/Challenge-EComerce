
export const lineaNuevaProducto = (url, nombre, precio) => {
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