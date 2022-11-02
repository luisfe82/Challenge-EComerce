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
                const sesion = {
                    nombre,
                    email,
                }
                localStorage.setItem('usuario',JSON.stringify(sesion));
                alert("Te has logueado correctamente..")
                window.location.href = "admin/dashboard.html";
            }
        });
        if (encuentra == false) {
            alert("Email y/o Password son incorrectos.. intente nuevamente")
            document.querySelector("[data-email]").value = "";
            document.querySelector("[data-clave]").value = "";
         }        
    }).catch(() => alert("hubo un error"));
});