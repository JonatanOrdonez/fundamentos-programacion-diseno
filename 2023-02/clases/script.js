import { Persona } from "./utils.js";
 
const render = () => {
    const juanito = new Persona("Juanito", "Perez");
    juanito.saludar();
    console.log(juanito.nombre);

    const anita = new Persona("ANITA", "LALALA");
    anita.saludar();
}

window.onload = render;