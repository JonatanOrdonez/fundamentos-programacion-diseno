export const obtenerTareas = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

export class Tarea {
  #id;
  nombre;
  terminada;
  #nodo;
  #nodoNombre;
  #nodoEstadoTarea;
  #nodoEliminar;

  constructor(id, nombre, terminada) {
    this.#id = id;
    this.nombre = nombre;
    this.terminada = terminada;
  }

  render() {
    const contenedorTarea = document.createElement("div");
    contenedorTarea.id = this.#id;
    this.#nodo = contenedorTarea;
    contenedorTarea.classList.add("tarea");

    const nombreTarea = document.createElement("p");
    nombreTarea.textContent = this.nombre;
    this.#nodoNombre = nombreTarea;
    nombreTarea.classList.add("tarea__nombre");

    if (this.terminada === true) {
      nombreTarea.classList.add("tarea__nombre--terminada");
    }

    const checkboxTarea = document.createElement("input");
    checkboxTarea.type = "checkbox";
    checkboxTarea.checked = this.terminada;
    this.#nodoEstadoTarea = checkboxTarea;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    this.#nodoEliminar = botonEliminar;

    contenedorTarea.appendChild(checkboxTarea);
    contenedorTarea.appendChild(nombreTarea);
    contenedorTarea.appendChild(botonEliminar);

    return contenedorTarea;
  }

  addEventListeners() {
    this.#nodoEstadoTarea.addEventListener("input", (event) => {
      const status = event.target.checked;

      if (status === true) {
        this.#nodoNombre.classList.add("tarea__nombre--terminada");
      } else {
        this.#nodoNombre.classList.remove("tarea__nombre--terminada");
      }
    });

    this.#nodoEliminar.addEventListener("click", () => {
      this.#nodo.remove();
    });
  }
}
