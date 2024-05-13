import { obtenerPersonajes, Ninja } from "./utils.js";

const render = async () => {
  const personajes = await obtenerPersonajes();

  const aldeaDeLaHoja = document.querySelector(".aldeaDeLaHoja");

  for (const personaje of personajes) {
    const ninja = new Ninja(personaje.id, personaje.name, personaje.images[0]);
    const ninjaRender = ninja.render();
    aldeaDeLaHoja.appendChild(ninjaRender);
  }
};

document.addEventListener("DOMContentLoaded", render);
