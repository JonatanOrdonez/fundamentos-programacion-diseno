import { register, getUserLogged } from "./utils.js";

const render = () => {
    const user = getUserLogged();

    if (user !== null) {
        window.location.href = "landing.html";
    }

    const registerForm = document.querySelector("#register");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        if(password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const user = register(email, password);

        if(user) {
            alert("El correo ya se encuentra registrado");
        } else {
            alert("Usuario registrado exitosamente");
            window.location.href = "index.html";
        }
    });
}

window.onload = render;