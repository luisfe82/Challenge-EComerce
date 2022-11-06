import { productoServices } from "../services/product.service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    var encuentra = false;
    var nombre = "";
    const email = document.querySelector("[data-email]").value;
    const clave = CryptoJS.SHA1(document.querySelector("[data-clave]").value);
    productoServices.BuscarUsuario().then((data) => {
        data.forEach((usuario) => {
            if (usuario.email == email && usuario.clave == clave) {
                encuentra = true;
                nombre = usuario.nombre;
                Swal.fire({
                    title: 'AluraGeek',
                    html: `<h2>B i e n v e n i d @</h2><br><h3 class="text">${nombre}</h3>`,
                    imageUrl: '../assets/img/svg/letter-v-svgrepo-com.svg',
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'Nube con un Rayo',
                    showConfirmButton: false,
                    timer: 5000
                  })
                const sesion = {
                    nombre,
                    email,
                }
                localStorage.setItem('usuario', JSON.stringify(sesion));
                window.location.href = "admin/dashboard.html";
            }
        });
        if (encuentra == false) {
            Swal.fire({
                title: 'AluraGeek',
                html: '<span class="text">Email y/o Contraseña son incorrectos</span><br> <span class="text">Intente nuevamente</span>',
                imageUrl: '../assets/img/svg/storm-svgrepo-com.svg',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Nube con un Rayo',
              })
            document.querySelector("[data-email]").value = "";
            document.querySelector("[data-clave]").value = "";

        }
    });
});

function cierreModal() {
    
}