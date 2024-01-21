const contenedorTareas = document.getElementById("contenedor-tareas")

const tarea1= "Agregar el index.html"
const estadoTarea1 = false

const tarea2= "Darle comida a Otis"
const estadoTarea2 = true

const tarea3= "Limpiar arenero de Otis"
const estadoTarea3 = false

const tarea4= "Ordenar mi cuarto"
const estadoTarea4 = true

const tarea5= "Sacar la basura"
const estadoTarea5 = true

const tarea6= "Sobrevivir"
const estadoTarea6 = false

const tarea7= "Lavar ropa"
const estadoTarea7 = false

const tarea8= "Llamar a mi hermana"
const estadoTarea8 = true

const tarea9= "Comprar comida"
const estadoTarea9 = false

const tarea10= "Imprimir trabajo"
const estadoTarea10 = true

let contadorNoCompletado = 0
let contadorCompletado = 0

//Creo funcion para agregar tareas al html
function agregarTareaAlHtml(tarea, estado) {
if(estado){
    contadorCompletado ++
contenedorTareas.innerHTML += `
<div class="general active">
     <p>${contadorCompletado}. ${tarea}</p>
`    
} else { 
    contadorNoCompletado ++
    contenedorTareas.innerHTML += `
<div class="general inactive">
     <p>${contadorNoCompletado}. ${tarea}</p>
`
}

}
//Agregarlas a la página
agregarTareaAlHtml(tarea1, estadoTarea1)
agregarTareaAlHtml(tarea2, estadoTarea2)
agregarTareaAlHtml(tarea3, estadoTarea3)
agregarTareaAlHtml(tarea4, estadoTarea4)
agregarTareaAlHtml(tarea5, estadoTarea5)
agregarTareaAlHtml(tarea6, estadoTarea6)
agregarTareaAlHtml(tarea7, estadoTarea7)
agregarTareaAlHtml(tarea8, estadoTarea8)
agregarTareaAlHtml(tarea9, estadoTarea9)
agregarTareaAlHtml(tarea10, estadoTarea10)

const tareasCompletadasP = document.getElementById ("completadas")
tareasCompletadasP.innerHTML += `Tareas completadas: ${contadorCompletado}`
const tareasNoCompletadasP = document.getElementById ("noCompletadas")
tareasNoCompletadasP.innerHTML += `Tareas noCompletadas: ${contadorNoCompletado}`