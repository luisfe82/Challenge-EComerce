const btnBuscar = document.querySelector("[data-botonBuscar]");
const input = document.querySelector("[data-input]");
const buscador = document.querySelector("[data-buscador]");
const search = document.querySelector("[data-lupa]");
const imagenLupa = document.querySelector("[data-imglupa]");
const imagenEquis = document.querySelector("[data-imgequis]");

btnBuscar.addEventListener("click",() =>{
    buscador.classList.toggle('visible');
    imagenLupa.classList.toggle('visible-lupa');
    imagenEquis.classList.toggle('visible-lupa');
})

search.addEventListener("click",()=>{
    if (input.value == "") {
        Swal.fire({
            title: 'AluraGeek',
            html: '<span class="text">Hubo un error...</span><br> <span class="text">No ha escrito nada...</span>',
            imageUrl: '../assets/img/svg/storm-svgrepo-com.svg',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Nube con un Rayo',
          })
    } else {window.location.href = `search.html?id=${input.value}`;} 
})