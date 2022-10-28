async function ListaProductos() {
  const respuesta = await fetch("http://localhost:3000/almacen");
  return await respuesta.json();
}

const detalleCatego = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/categoria/${id}`);
  return await respuesta.json();
};

const detalleProdu = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/almacen/${id}`);
  return await respuesta.json();
};

export const productoServices = {
  ListaProductos,
  detalleCatego,
  detalleProdu,
}