import { Persona } from "./utils.js";

const render = () => {
  const personas = [
    {
      nombre: "juan",
      apellido: "perez",
      edad: 1,
    },
    {
      nombre: "ana",
      apellido: "maria",
      edad: 2,
    },
  ];

  const body = document.querySelector("body");

  for (const persona of personas) {
    const instanciaPersona = new Persona(
      persona.nombre,
      persona.apellido,
      persona.edad
    );
    const nodoPersona = instanciaPersona.render();
    body.appendChild(nodoPersona);
    instanciaPersona.addEventListeners();
  }
};

document.addEventListener("DOMContentLoaded", render);
