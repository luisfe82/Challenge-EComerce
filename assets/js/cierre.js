const cierreSession = document.querySelector("[data-cierre]");
const cierreSession2 = document.querySelector("[data-cierre2]");
const cierreSession3 = document.querySelector("[data-cierre3]");

function cerrar() {
    Swal.fire({
        title: 'AluraGeek',
        html: '<span class="text">¿ Estas Seguro que deseas Salir? </span>',
        imageUrl: '../assets/img/svg/question-svgrepo-com.svg',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Nube con un Rayo',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('usuario');
          window.location.href = "../../index.html";
        }
      })
}

cierreSession.addEventListener("click", cerrar);
cierreSession2.addEventListener("click", cerrar);
cierreSession3.addEventListener("click", cerrar);