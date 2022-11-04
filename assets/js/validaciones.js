export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  nombreUsuario: {
    valueMissing: "El campo Nombre no puede estar vacío",
  },
  url: {
    valueMissing: "El campo Url no puede estar vacío",
  },
  producto: {
    valueMissing: "El campo Nombre del Producto no puede estar vacío, Nombre: 4 a 15 caracteres",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  precio: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es [$XXX,XXX.XX] ",
  },
  stock: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es 4 cifras XXXX",
  },
  asunto: {
      valueMissing: "El campo Nombre no puede estar vacío",
  },
  mensaje: {
      valueMissing: "El campo Mensaje no puede estar vacío, ¡Debe contener entre 4 a 500 caracteres!",
  },
  descripcion: {
      valueMissing: "El campo Descripción no puede estar vacío, ¡Debe contener entre 4 a 500 caracteres!",
  }
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}