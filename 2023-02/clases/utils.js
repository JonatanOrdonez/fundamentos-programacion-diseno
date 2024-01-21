export const saludar = () => {
    // alert("HOLAAAA!!!!!!");
}

export class Persona {
    nombre = "";
    #apellido = "";

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.#apellido = apellido;
    }

    saludar() {
        console.log("Hola, mi nombre es", this.nombre);
        
    }

    #gritarApellido() {
        console.log("MI APELLIDO ES", this.#apellido);
    }
}