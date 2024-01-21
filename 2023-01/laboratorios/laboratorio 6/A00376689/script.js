var tarea1 = "Sacar al perro"
var tarea2 = "Hacer tareas de fundamentos"
var tarea3 = "Ir de compras"
var tarea4 = "Hacer tarea de percepción"
var tarea5 = "Ver nuevo cap de mi serie"
var tarea6 = "Preparar la cena"
var tarea7 = "Organizar cuarto"
var tarea8 = "Limpiar el balcón"
var tarea9 = "Sacar la basura" 
var tarea10 = "Revisar intu"


var estadotarea1 = true
var estadotarea2 = false

var ContadorTareaIncompleto = 0
var ContadorTareaCompleto = 0

const contenedorRef = document.getElementById("contenedor")

function agregarTareaAlHtml (tarea, estado) {
    if  (estado) {
        ContadorTareaCompleto ++
        contenedorRef.innerHTML+=
        `<div class="completo">
        <p>${tarea}</p>
        </div>`    
    } else {
        ContadorTareaIncompleto ++
        contenedorRef.innerHTML+=
        `<div class="incompleto">
        <p>${tarea}</p>
        </div>`
    }
}

agregarTareaAlHtml(tarea1,estadotarea1)
agregarTareaAlHtml(tarea2,estadotarea2)
agregarTareaAlHtml(tarea3,estadotarea2)
agregarTareaAlHtml(tarea4,estadotarea1)
agregarTareaAlHtml(tarea5,estadotarea1)
agregarTareaAlHtml(tarea6,estadotarea2)
agregarTareaAlHtml(tarea7,estadotarea1)
agregarTareaAlHtml(tarea8,estadotarea2)
agregarTareaAlHtml(tarea9,estadotarea1)
agregarTareaAlHtml(tarea10,estadotarea1)

const tareasCompletasP = document.getElementById("tareascompletasp")
tareasCompletasP.innerHTML += `Tareas completas: ${ContadorTareaCompleto}`

const tareasIncompletasP = document.getElementById("tareasincompletasp")
tareasIncompletasP.innerHTML += `Tareas incompletas: ${ContadorTareaIncompleto}`