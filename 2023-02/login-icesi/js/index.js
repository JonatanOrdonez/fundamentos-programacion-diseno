import { iniciarSesion, obtenerUsuarioActual } from "./utils.js";

const render = () => {
    const usuarioActual = obtenerUsuarioActual();

    if(usuarioActual !== null) {
        window.location.href = "cayendo.html";
        return;
    }

    const loginForm = document.querySelector("#login");
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const usuario = iniciarSesion(email, password);

        if (usuario === null) {
            alert('Nombre de usuario y/o contraseña incorrectos');
            return;
        }

        window.location.href = "cayendo.html";
    });
}

window.onload = render;