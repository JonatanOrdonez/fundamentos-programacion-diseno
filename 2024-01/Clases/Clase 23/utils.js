export class Persona {
  nombre;
  apellido;
  #edad;
  #nodo;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#edad = edad;
  }

  saludar() {
    const mensaje = "Hola " + this.nombre;
    alert(mensaje);
    this.#gritar();
  }

  #gritar() {
    const mensaje = "HOLA " + this.apellido;
    alert(mensaje);
  }

  render() {
    const parrafo = document.createElement("p");
    parrafo.textContent = this.nombre + " " + this.apellido + " " + this.#edad;
    this.#nodo = parrafo;
    parrafo.id = this.nombre + this.apellido;
    return parrafo;
  }

  addEventListeners() {
    this.#nodo.addEventListener("click", () => {
      alert(this.nombre + " " + this.apellido + " " + this.#edad);
    });
  }
}
