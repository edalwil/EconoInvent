document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const telefono = document.getElementById("fnumberPhone").value;
    const contraseña = document.getElementById("fpassword").value;

    if (!validacionTelefono(telefono)) {
      console.log("Número telefónico inválido");
      return;
    }
    if (!validacionPassword(contraseña)) {
      console.log("Contraseña inválida");
      return;
    }
  });

  // validaciones genericas

  const validarNumero = function (telefono) {
    if (!telefono) {
      return false;
    }

    if (typeof telefono !== "string" || !/^\d{10}$/.test(telefono)) {
      return false;
    }

    return true;
  };

  const validarCadena = function (valor) {
    return typeof valor === "string" && valor.trim() !== "";
  };

  // validaciones de las const

  const validacionTelefono = function (telefono) {
    return validarNumero(telefono);
  };

  const validacionPassword = function (contraseña) {
    return (
      validarCadena(contraseña) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/.test(contraseña)
    );
  };

  const validacionNombre = function (nombre) {
    return validarCadena(nombre);
  };

  const validacionUsuario = function (usuario) {
    return (
      validarCadena(usuario) &&
      /^(?=(?:\D*\d){2})[A-Za-z\d]{5,10}$/.test(usuario)
    );
  };
});
