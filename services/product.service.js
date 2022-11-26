const ListaProductos = async () => {
  //const respuesta = await fetch("http://localhost:3000/almacen");
  const respuesta = await fetch("https://apimocha.com/almacen");
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

const crearProducto = async(categoria, idC, url, nombre, precio, descripcion, stock) => {
 try {
    return await fetch("http://localhost:3000/almacen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: uuid.v4(), categoria, idC, url, nombre, precio, descripcion, stock }),
    });
 } catch (error) {return console.log(error);}
};

const eliminarProducto = async (id) => {
  return await fetch(`http://localhost:3000/almacen/${id}`, {
    method: "DELETE",
  });
}

const buscarProducto = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/almacen/${id}`);
  return await respuesta.json();
};

const actualizarProducto = async (id, categoria, idC, url, nombre, precio, descripcion, stock) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/almacen/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, categoria, idC, url, nombre, precio, descripcion, stock }),
    });
    return respuesta;
  } catch (err) {
    return console.log(err);
  }
};

export const productoServices = {
  ListaProductos,
  detalleCatego,
  detalleProdu,
  BuscarUsuario,
  crearProducto,
  eliminarProducto,
  buscarProducto,
  actualizarProducto,
}
