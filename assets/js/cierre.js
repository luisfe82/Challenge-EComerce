const cierreSession = document.querySelector("[data-cierre]");
const cierreSession2 = document.querySelector("[data-cierre2]");
const cierreSession3 = document.querySelector("[data-cierre3]");

function cerrar() {
    var respuesta = confirm("Estas Seguro que deseas salir del administrador");
    if (respuesta) {
        localStorage.removeItem('usuario');
        window.location.href = "../../index.html";
    }

}

cierreSession.addEventListener("click", cerrar);
cierreSession2.addEventListener("click", cerrar);
cierreSession3.addEventListener("click", cerrar);