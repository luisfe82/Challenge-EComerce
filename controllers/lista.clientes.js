import { clientServices } from "../services/client.service.js";
import { crearNuevaLinea } from "./client.controller.js";

const table = document.querySelector("[data-table]");

clientServices
    .listaClientes()
    .then((data) => {
        data.forEach(({ nombre, email, id }) => {
            const nuevaLinea = crearNuevaLinea(nombre, email, id);
            table.appendChild(nuevaLinea);
        });
    })
    .catch(() => alert("Ocurrió un error"));
