import { clientServices } from "../services/client.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  
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
    confirmButtonText: 'Guardar',
  }).then((result) => {
    if (result.isConfirmed) {
      clientServices.crearCliente(nombre, email, encriptar).then(() => {        
        Swal.fire({
          title: 'AluraGeek',
          html: `<h2>Completado Exitosamente</h3>`,
          imageUrl: '../assets/img/svg/letter-v-svgrepo-com.svg',
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: 'Nube con un Rayo',
          showConfirmButton: false,
          timer: 10000
        });   
        window.location.href = "usuarios.html";     
      })
      .catch((err) => console.log(err));
    }
  })

  
});