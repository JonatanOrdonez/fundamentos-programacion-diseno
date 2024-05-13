import { obtenerTareas, Tarea } from "./utils.js";

const renderizarTareas = async (textoFiltro) => {
  const data = await obtenerTareas();
  const contenedorTareasNormales = document.querySelector("#tareasNormales");
  contenedorTareasNormales.innerHTML = "";

  for (const tarea of data.tareasNormales) {
    if (
      textoFiltro === "" ||
      tarea.nombre.toLowerCase().includes(textoFiltro.toLowerCase())
    ) {
      const instanciaTarea = new Tarea(tarea.id, tarea.nombre, tarea.terminada);
      const instanciaTareaRender = instanciaTarea.render();
      contenedorTareasNormales.appendChild(instanciaTareaRender);
      instanciaTarea.addEventListeners();
    }
  }

  const contenedorTareasCriticas = document.querySelector("#tareasCriticas");
  contenedorTareasCriticas.innerHTML = "";

  for (const tarea of data.tareasCriticas) {
    if (
      textoFiltro === "" ||
      tarea.nombre.toLowerCase().includes(textoFiltro.toLowerCase())
    ) {
      const instanciaTarea = new Tarea(tarea.id, tarea.nombre, tarea.terminada);
      const instanciaTareaRender = instanciaTarea.render();
      contenedorTareasCriticas.appendChild(instanciaTareaRender);
      instanciaTarea.addEventListeners();
    }
  }
};

const render = async () => {
  await renderizarTareas("");

  const inputFiltroTaras = document.querySelector(".barraBusqueda");
  inputFiltroTaras.addEventListener("input", async (event) => {
    const textoFiltro = event.target.value;
    await renderizarTareas(textoFiltro);
  });
};

document.addEventListener("DOMContentLoaded", render);
