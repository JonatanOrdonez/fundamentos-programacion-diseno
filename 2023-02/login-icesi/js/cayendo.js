import { obtenerUsuarioActual, cerrarSesion } from "./utils.js";

const render = () => {
    const usuarioActual = obtenerUsuarioActual();

    if (usuarioActual === null) {
        window.location.href = "index.html";
        return;
    }

    const bienvenida = document.querySelector("#bienvenida");
    bienvenida.textContent = "Bienvenid@ " + usuarioActual;


    const btnCerrarSesion = document.querySelector("#cerrarSesion");

    btnCerrarSesion.addEventListener("click", () => {
        cerrarSesion();
        window.location.href = "index.html";
    });
}

window.onload = render;