const tareaPendiente = document.querySelector("#tareaPendiente");
const tareaCompleta = document.querySelector("#tareaCompleta");

tareaPendiente.addEventListener("click", cambiarEstado);

function cambiarEstado (){
    tareaCompleta.classList.toggle(rgb(158, 163, 168));
    tareaPendiente.classList.toggle(rgb(93, 182, 255));
}

const tarea1 = "Sacar al perro"
const tarea2 = "Realizar entregas"
const tarea3 = "Mercar"
const tarea4 = "Lavar ropa"
const tarea5 = "Ver serie"
const tarea6 = "Cocinar"
const tarea7 = "Limpiar la casa"
const tarea8 = "Hacer deporte"
const tarea9 = "Leer" 
const tarea10 = "Repasar"


const ContadorTareaPendiente = 0
const ContadorTareaCompleta = 0

const listaTareas = document.getElementById("listaTareas")

function listaTareasinnerHTML (tarea, estado) {
    if  (estado) {
        
        `<div class="tareaCompleta">
        <p>${tarea}</p>
        </div>`    
    } else {
        ContadorTareaPendiente ++
        listaTareas.innerHTML+=
        `<div class="tareaPendiente">
        <p>${tarea}</p>
        </div>`
    }
}

listaTareasinnerHTML(tarea1,tareaPendiente)
listaTareasinnerHTML(tarea2,tareaCompleta)
listaTareasinnerHTML(tarea3,tareaCompleta)
listaTareasinnerHTML(tarea4,tareaPendiente)
listaTareasinnerHTML(tarea5,tareaCompleta)
listaTareasinnerHTML(tarea6,tareaPendiente)
listaTareasinnerHTML(tarea7,tareaCompleta)
listaTareasinnerHTML(tarea8,tareaCompleta)
listaTareasinnerHTML(tarea9,tareaCompleta)
listaTareasinnerHTML(tarea10,tareaCompleta)


