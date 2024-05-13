export const obtenerDatos = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

export class Tarea {
  #id;
  nombre;
  terminada;

  #nodoNombreTarea;
  #nodoEstadoTarea;
  #nodoBotonEliminarTarea;
  #nodoContenedorTarea;

  constructor(id, nombre, terminada) {
    this.#id = id;
    this.nombre = nombre;
    this.terminada = terminada;
  }

  render() {
    const contenedorTarea = document.createElement("div");
    contenedorTarea.id = this.#id;
    contenedorTarea.classList.add("tarea");
    this.#nodoContenedorTarea = contenedorTarea;

    const checkboxTarea = document.createElement("input");
    checkboxTarea.type = "checkbox";
    checkboxTarea.checked = this.terminada;
    this.#nodoEstadoTarea = checkboxTarea;

    const nombreTarea = document.createElement("p");
    nombreTarea.textContent = this.nombre;
    nombreTarea.classList.add("tarea__nombre");
    this.#nodoNombreTarea = nombreTarea;

    if (this.terminada === true) {
      nombreTarea.classList.add("tarea__nombre--terminada");
    }

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    this.#nodoBotonEliminarTarea = botonEliminar;

    contenedorTarea.appendChild(checkboxTarea);
    contenedorTarea.appendChild(nombreTarea);
    contenedorTarea.appendChild(botonEliminar);

    return contenedorTarea;
  }

  addEventListeners() {
    this.#nodoEstadoTarea.addEventListener("input", (event) => {
      const status = event.target.checked;
      if (status === true) {
        this.#nodoNombreTarea.classList.add("tarea__nombre--terminada");
      } else {
        this.#nodoNombreTarea.classList.remove("tarea__nombre--terminada");
      }
    });

    this.#nodoBotonEliminarTarea.addEventListener("click", () => {
      this.#nodoContenedorTarea.remove();
    });
  }
}
