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

  Swal.fire({
    title: 'AluraGeek',
    html: '<span class="text">¿ Todo esta correto? </span>',
    imageUrl: '../assets/img/svg/notepad-svgrepo-com.svg',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Nube con un Rayo',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Actualizar',
  }).then((result) => {
    if (result.isConfirmed) {  
      clientServices.actualizarCliente(id, nombre, email, encriptar).then(() => {
        Swal.fire({
          title: 'AluraGeek',
          html: `<h2>Completado Exitosamente</h3>`,
          imageUrl: '../assets/img/svg/letter-v-svgrepo-com.svg',
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: 'Nube con un Rayo',
          showConfirmButton: false,
          timer: 10000
        })      
        document.location.href = "usuarios.html";
      });
    }
  })


  
});