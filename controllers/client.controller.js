import { clientServices } from "../services/client.service.js";

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="thead-nombre"> ${nombre} </td>
    <td class="thead-email" > ${email} </td>
    <td class="thead-opera">
        <a href="../admin/editar-usuario.html?id=${id}">
            <img src="../assets/img/editar.png" alt="usuario a editar">
        </a>
        <button class="thead-boton" type="button" id="${id}">
            <img src="../assets/img/eliminar.png" alt="usuario a eliminar">
        </button>                                    
    </td>
  `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        Swal.fire({
            title: 'AluraGeek',
            html: '<span class="text">¿ Estas Seguro que deseas Eliminarlo? </span>',
            imageUrl: '../assets/img/svg/exclamation-mark-svgrepo-com.svg',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Nube con un Rayo',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrarlo',
          }).then((result) => {
            if (result.isConfirmed) {
                clientServices.eliminarCliente(id)
                .then((respuesta) => {
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
                })
                .catch(() => alert("Ocurrió un error"));
            }
          }) 
        
    });
    return linea;
};

const table = document.querySelector("[data-table]");

clientServices
    .listaClientes()
    .then((data) => {
        data.forEach(({ nombre, email, id }) => {
            const nuevaLinea = crearNuevaLinea(nombre, email, id);
            table.appendChild(nuevaLinea);
        });
    })
    .catch(() => alert("Ocurrió un error"));