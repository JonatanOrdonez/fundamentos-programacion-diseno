import { getUserLogged, logout } from './utils.js';

const render = () => {
    const user = getUserLogged();

    if (user === null) {
        window.location.href = "index.html";
    } else {
        const welcome = document.querySelector("#welcome");
        welcome.textContent = "@Bienvenido " + user;
    }

    const logoutButton = document.querySelector("#cerrar-sesion");

    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
        window.location.href = "index.html";
    });
}

window.onload = render;