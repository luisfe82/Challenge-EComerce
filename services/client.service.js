const listaClientes = () => fetch("http://localhost:3000/usuarios").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email, clave) => {
  return fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: uuid.v4(), nombre, email, clave }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/usuarios/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (id, nombre, email, clave) => {
  return fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, clave }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
