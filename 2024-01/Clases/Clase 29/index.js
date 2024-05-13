import { iniciarSesion, obtenerUsuarioEnSesion } from "./session.js";

const render = async () => {
  const usuario = obtenerUsuarioEnSesion();

  if (usuario) {
    window.location.href = document.referrer;
    return;
  }

  const form = document.querySelector("#login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      iniciarSesion(email, password);
      window.location.href = "./landing.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);
