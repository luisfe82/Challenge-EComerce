import { clientServices } from "../services/client.service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  clientServices.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const clave = CryptoJS.SHA1(document.querySelector("[data-clave]").value);
  const encriptar = new String(clave);
  clientServices.actualizarCliente(id, nombre, email, encriptar).then(() => {
    alert("Actualizado correctamente")
    // window.location.href = "/screens/edicion_concluida.html";
  });
});