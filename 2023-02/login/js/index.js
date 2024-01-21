import { login, getUserLogged } from "./utils.js";

const render = () => {
    const user = getUserLogged();

    if (user !== null) {
        window.location.href = "landing.html";
        return;
    }

    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        const user = login(email, password);

        if (user === null) {
            alert("Usuario y/o contraseña incorrectos");
        } else {
            window.location.href = "landing.html";
        }
    });
}

window.onload = render;