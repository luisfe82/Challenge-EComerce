const boton = document.querySelector("[data-btnMenu]");

function MostrarMenu() {
    const element = document.querySelector("[data-menu]");
    const link = document.querySelector("[data-ul]");

    element.classList.toggle('cabecera__menu--mostrar');
    element.classList.toggle('cabecera__menu');
    
    link.classList.toggle('cabecera__menu__list-nav__mostrar');
    link.classList.toggle('cabecera__menu__list-nav');
}

boton.addEventListener('click', MostrarMenu);