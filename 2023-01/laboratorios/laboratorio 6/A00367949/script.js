//Nombre del contenedor en script

const ContenedorTareas = document.getElementById("ContenedorTareas")
const Tareascompletadas = document.getElementById("completadas")
Tareascompletadas.innerHTML += `<p>Tareas completas: 3</p>`
const TareasnoCompletadas = document.getElementById("noCompletadas")
TareasnoCompletadas.innerHTML += `<p>Tareas incompletas: 7</p>`
const Bloque = document.getElementById("bloque")
const Bloque2 = document.getElementById("bloque2")
//Tareas
const tarea = "tarea"

for (i=1; i<=3; i++) {
  ContenedorTareas.innerHTML+= `
  <div class="bloque2">
  <p>tarea ${i}</p>
  </div>
  `
}

for (i=4; i<=10; i++) {
  // ContenedorTareas.innerHTML+="<p> tarea" +i + "</p>"
  ContenedorTareas.innerHTML+= `
  <div class="bloque">
  <p>${i}. tarea</p>
  </div>
  `
}

//Estado de tarea

var estadoTarea1 = true
var estadoTarea2 = false

/*if (tarea = Bloque) {
  estadoTarea1 ++
} else {
  estadoTarea2
}

let ContadorBloque = 0
let ContadorBloque2 = 0

function agregarTareaAlHtml (tarea, estado) {
  if  (estado) {
      ContadorBloque ++
      ContenedorTareas.innerHTML+=
      `<div class="contador">
      <p>${ContadorBloque}. ${tarea}</p>
      </div>`    
  } else {
      ContadorBloque2 ++
      contenedorTareas.innerHTML+=
      `<div class="contador2">
      <p>${ContadorBloque2}. ${tarea}</p>
      </div>`
  }
}

agregarTareaAlHtml(tareascompletadas,estadoTarea1)
agregarTareaAlHtml(tareasnoCompletadas,estadoTarea2)

const Tareascompletadas = document.getElementById("completadas")
Tareascompletadas.innerHTML += `<p>Tareas completas: ${ContadorBloque}</p>`
const TareasnoCompletadas = document.getElementById("noCompletadas")
TareasnoCompletadas.innerHTML += `<p>Tareas incompletas: ${ContadorBloque2}</p>`*/