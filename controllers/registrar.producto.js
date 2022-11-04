import { productoServices } from "../services/product.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

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

  productoServices.crearProducto(categoria,idC, url, nombre, precio, descripcion, stock).then(() => {
    alert("Registro realizado con exito")
    window.location.href = "productos.html";
  })
    .catch((err) => console.log(err));
});