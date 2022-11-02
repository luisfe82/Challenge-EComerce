function init() {
    const Session = JSON.parse(localStorage.getItem('usuario')) || [] ;
    if (Session.nombre == "" || Session.nombre == null) {
        window.location.href = "../../index.html";
    }
}

window.onload = () => {
    const Session = JSON.parse(localStorage.getItem('usuario')) || [] ;
    const nombre = document.querySelector("[data-nombres]");
    const correo = document.querySelector("[data-correos]");
    nombre.innerText = `${Session.nombre}`;
    correo.innerText = `${Session.email}`;
}

init();