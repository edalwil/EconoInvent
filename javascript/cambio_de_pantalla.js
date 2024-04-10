let mostrarPantallaCrearCuenta = document.getElementById("bnt-crearCuenta");
let mostrarPantallaIniciarSession = document.getElementById(
  "bnb-iniciar-session"
);

let mostrarPantallaIniciarSession2 = document.getElementById(
  "bnb-iniciar-session2"
);

mostrarPantallaCrearCuenta.addEventListener("click", function () {
  window.location.href = "../index/crear_cuenta.html";
});

mostrarPantallaIniciarSession.addEventListener("click", function () {
  window.location.href = "../index/iniciar_sesion.html";
});

mostrarPantallaIniciarSession2.addEventListener("click", function () {
  window.location.href = "../index/iniciar_sesion.html";
});
