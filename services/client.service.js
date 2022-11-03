const listaClientes = () =>
  fetch("http://localhost:3000/usuarios").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};
