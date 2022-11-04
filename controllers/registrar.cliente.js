import { clientServices } from "../services/client.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const clave = CryptoJS.SHA1(document.querySelector("[data-clave]").value);
  const encritar = new String(clave);
  clientServices.crearCliente(nombre, email,encritar).then(() => {
      alert("Registro realizado con exito")
      window.location.href = "../admin/usuarios.html";
    })
    .catch((err) => console.log(err));
});