import { obtenerUsuarioEnSesion, cerrarSesion } from "./session.js";

const render = async () => {
  const usuario = obtenerUsuarioEnSesion();

  if (!usuario) {
    window.location.href = "./index.html";
  }

  const usuarioSesion = document.querySelector("#usuarioSession");
  usuarioSesion.innerHTML = "El usuario en sesion es " + usuario?.email;

  const botonCerrarSesion = document.querySelector("#closeSession");
  botonCerrarSesion.addEventListener("click", () => {
    cerrarSesion();
    window.location.href = "./index.html";
  });
};

document.addEventListener("DOMContentLoaded", render);
