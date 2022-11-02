const cierreSession = document.querySelector("[data-cierre]");
const cierreSession2 = document.querySelector("[data-cierre2]");
const cierreSession3 = document.querySelector("[data-cierre3]");


function cerrar() {
    console.log("Cerrar Session");
}

cierreSession.addEventListener("click", cerrar);
cierreSession2.addEventListener("click", cerrar);
cierreSession3.addEventListener("click", cerrar);