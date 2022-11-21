// Codigo antes de convertirlo en funcion asincrona
// const listaClientes = () => fetch("http://localhost:3000/usuarios").then((respuesta) => respuesta.json());
const listaClientes = async () => { 
    const respuesta =  await fetch("http://localhost:3000/usuarios");
    return await respuesta.json();
  }

// Codigo antes de convertirlo en funcion asincrona
// const crearCliente = (nombre, email, clave) => {
//   return fetch("http://localhost:3000/usuarios", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({id: uuid.v4(), nombre, email, clave }),
//   });
// };
const crearCliente = async (nombre, email, clave) => {
  return await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: uuid.v4(), nombre, email, clave }),
  });
};

// Codigo antes de convertirlo en funcion asincrona
// const eliminarCliente = (id) => {
//   return fetch(`http://localhost:3000/usuarios/${id}`, {
//     method: "DELETE",
//   });
// };
const eliminarCliente = async (id) => {
  return await fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "DELETE",
  });
};

// Codigo antes de convertirlo en funcion asincrona
// const detalleCliente = (id) => {
//   return fetch(`http://localhost:3000/usuarios/${id}`).then((respuesta) =>
//     respuesta.json()
//   );
// };
const detalleCliente = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/usuarios/${id}`);
  return await respuesta.json();
};

// Codigo antes de convertirlo en funcion asincrona
// const actualizarCliente = (id, nombre, email, clave) => {
//   return fetch(`http://localhost:3000/usuarios/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ nombre, email, clave }),
//   })
//     .then((respuesta) => respuesta)
//     .catch((err) => console.log(err));
// };
const actualizarCliente = async (id, nombre, email, clave) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, clave }),
    });
    return respuesta;
  } catch (err) {
    return console.log(err);
  }
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
