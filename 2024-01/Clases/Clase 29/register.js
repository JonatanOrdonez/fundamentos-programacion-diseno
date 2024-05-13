import { registrarUsuario } from "./session.js";

const render = async () => {
  const form = document.querySelector("#register");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    try {
      registrarUsuario(email, password, confirmPassword);
      window.location.href = "./index.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);
