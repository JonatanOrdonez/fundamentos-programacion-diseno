import { cargarInformacion } from "./utils.js";

const render = async () => {
  const respuesta = await cargarInformacion();
  console.log(respuesta);

  const contenedor = document.getElementById("contenedor");

  for (const integrante of respuesta.familia) {
    const texto = document.createElement("p");
    texto.textContent = integrante.nombre;

    texto.addEventListener("click", () => {
      alert(`Hola, soy ${integrante.nombre}`);
    });

    contenedor.appendChild(texto);
  }
};

document.addEventListener("DOMContentLoaded", render);
