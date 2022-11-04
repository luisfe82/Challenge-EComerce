const ListaProductos = async () => {
  const respuesta = await fetch("http://localhost:3000/almacen");
  return await respuesta.json();
}

const BuscarUsuario = async () => {
  const respuesta = await fetch("http://localhost:3000/usuarios");
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

const crearProducto = (categoria, idC, url, nombre, precio, descripcion, stock) => {
  return fetch("http://localhost:3000/almacen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: uuid.v4(), categoria, idC, url, nombre, precio, descripcion, stock }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/almacen/${id}`, {
    method: "DELETE",
  });
};

export const productoServices = {
  ListaProductos,
  detalleCatego,
  detalleProdu,
  BuscarUsuario,
  crearProducto,
  eliminarProducto,
}