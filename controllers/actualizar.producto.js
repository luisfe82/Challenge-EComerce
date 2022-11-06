import { productoServices } from "../services/product.service.js";


const obtenerInformacion = () => {
  const identificador = new URL(window.location);
  const id = identificador.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const categoria = document.querySelector("[data-categoria]");
  const url = document.querySelector("[data-url]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  const stock = document.querySelector("[data-stock]");

  productoServices.buscarProducto(id).then((almacen) => {
    // categoria.value = almacen.categoria;
    url.value = almacen.url;
    nombre.value = almacen.nombre;
    precio.value = almacen.precio;
    descripcion.value = almacen.descripcion;
    stock.value = almacen.stock;
  });
};

obtenerInformacion();

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const identificador = new URL(window.location);
  const id = identificador.searchParams.get("id");

  const NumCategoria = {
    "StartWars":"1",
    "Consolas":"2",
    "Diversos":"3"
  }

  const categoria = document.querySelector("[data-categoria]").value;
  const url = document.querySelector("[data-url]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const stock = document.querySelector("[data-stock]").value;
  let idC = NumCategoria[categoria];

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
      productoServices.actualizarProducto(id, categoria,idC, url, nombre, precio, descripcion, stock).then(() => {
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
        document.location.href = "productos.html";
      });
    }
  })

  
});