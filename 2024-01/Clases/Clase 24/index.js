import { Ninja, obtenerPersonajes } from "./utils.js";

const render = async () => {
  const ninjas = await obtenerPersonajes();

  const body = document.querySelector(".aldeaDeLaHoja");

  for (const ninja of ninjas) {
    const ninjaObjecto = new Ninja(ninja.id, ninja.name, ninja.images[0]);
    const ninjaObjectoRender = ninjaObjecto.render();
    body.appendChild(ninjaObjectoRender);
    ninjaObjecto.addEventListeners();
  }
};

document.addEventListener("DOMContentLoaded", render);
