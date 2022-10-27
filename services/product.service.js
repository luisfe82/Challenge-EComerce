async function ListaProductos() {
    const respuesta = await fetch("http://localhost:3000/almacen");
    return await respuesta.json();
}

export const productoServices = {
    ListaProductos,
}