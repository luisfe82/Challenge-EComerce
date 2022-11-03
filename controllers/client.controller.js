export const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="thead-nombre"> ${nombre} </td>
    <td class="thead-email" > ${email} </td>
    <td class="thead-opera">
        <a href="">
            <img src="../assets/img/editar.png" alt="usuario a editar">
        </a>
        <a href="">
            <img src="../assets/img/eliminar.png" alt="usuario a eliminar">
        </a>                                    
    </td>
  `;
    linea.innerHTML = contenido;
    return linea;
};

