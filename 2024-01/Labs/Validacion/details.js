import { obtenerGatoPorId, Cat } from "./utils.js";

const render = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("identificador");
  const gato = await obtenerGatoPorId(id);

  const body = document.querySelector("body");
  const gatoInstancia = new Cat(gato.id, gato.url, gato.width, gato.height);
  body.appendChild(gatoInstancia.render());
};

document.addEventListener("DOMContentLoaded", render);
