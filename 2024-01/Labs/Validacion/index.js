import { obtenerData, Cat } from "./utils.js";

const render = async () => {
  const data = await obtenerData();

  const titulo = document.querySelector("#titulo");
  titulo.textContent = data.data.titulo;

  const gatos = document.querySelector("#gatos");

  for (const gato of data.data.cats) {
    const gatoInstancia = new Cat(gato.id, gato.url, gato.width, gato.height);
    const gatoRender = gatoInstancia.render();
    gatos.appendChild(gatoRender);
    gatoInstancia.addEventListeners();
  }
};

document.addEventListener("DOMContentLoaded", render);
