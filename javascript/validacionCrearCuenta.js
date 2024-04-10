// Espera a que el contenido HTML esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario para crear una cuenta por su ID
  const formularioCrearCuenta = document.getElementById("formulario2");
  // Obtiene el formulario para crear una cuenta por su ID
  const formularioRecuperarCuenta = document.getElementById("formulario3");

  // Agrega un evento de escucha al formulario cuando se envía
  formularioCrearCuenta.addEventListener("submit", (event) => {
    // Previene el comportamiento predeterminado de envío del formulario
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    const telefono = document.getElementById("fnumberPhone").value;
    const nombre = document.getElementById("fnombre").value;
    const correo = document.getElementById("fcorreo").value;
    const contraseña = document.getElementById("fpassword").value;
    const otraPantalla = document.getElementById("otra-cuenta");

    // Limpiar mensajes de error
    limpiarErrores();

    if (!validacionTelefono(telefono)) {
      mostrarError("errorTelefono", "Número telefónico inválido");
      return;
    }

    if (!validacionPassword(contraseña)) {
      mostrarError(
        "errorPassword",
        "Contraseña inválida,1 Mayuscula, 1 minuscula, debe ser de 8 caracteres"
      );
      return;
    }

    if (!validacionNombre(nombre)) {
      mostrarError("errorNombre", "Nombre inválido");
      return;
    }

    if (!validacionCorreo(correo)) {
      mostrarError("errorCorreo", "Correo invalido");
      return;
    }

    otraPantalla.style.display = "flex";
  });

  // Función para mostrar un mensaje de error
  function mostrarError(id, mensaje) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = mensaje;
    errorElement.style.display = "block"; // Mostrar el mensaje de error
  }

  // Función para limpiar los mensajes de error
  function limpiarErrores() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => {
      error.textContent = ""; // Limpiar el contenido del mensaje de error
      error.style.display = "none"; // Ocultar el mensaje de error
    });
  }

  // Funciones de validación genéricas

  // Función para validar un número de teléfono
  const validarNumero = function (telefono) {
    // Comprueba si el teléfono es nulo o vacío
    if (!telefono) {
      return false;
    }

    // Comprueba si el teléfono no es una cadena de 10 dígitos
    if (typeof telefono !== "string" || !/^\d{10}$/.test(telefono)) {
      return false;
    }

    return true;
  };

  // Función para validar una cadena de texto no vacía
  const validarCadena = function (valor) {
    // Comprueba si el valor es una cadena no vacía
    return typeof valor === "string" && valor.trim() !== "";
  };

  // Funciones de validación específicas para los campos del formulario

  // Función para validar el número telefónico
  const validacionTelefono = function (telefono) {
    return validarNumero(telefono);
  };

  // Función para validar la contraseña
  const validacionPassword = function (contraseña) {
    // Verifica si la contraseña es una cadena no vacía y cumple con ciertos criterios
    return (
      validarCadena(contraseña) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/.test(contraseña)
    );
  };

  // Función para validar el nombre
  const validacionNombre = function (nombre) {
    // Verifica si el nombre es una cadena no vacía
    return validarCadena(nombre) && /^[A-Za-z\s]+$/.test(nombre);
  };

  // Función para validar el nombre de usuario
  const validacionCorreo = function (usuario) {
    // Verifica si el usuario es una cadena no vacía y cumple con ciertos criterios
    return validarCadena(usuario) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario);
  };
});
