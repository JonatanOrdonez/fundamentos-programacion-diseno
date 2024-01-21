const tarea1 = "Sacar a mi perro"
const estadoTarea1 = true

const tarea2 = "Lavar la loza"
const estadoTarea2 = false

const tarea3 = "Sacar la basura"
const estadoTarea3 = true

const tarea4 = "Hacer tarea de tipografía"
const estadoTarea4 = true

const tarea5 = "Hacer la tarea de sociedad"
const estadoTarea5 = false

const tarea6 = "Ponerle comida a mis mascotas"
const estadoTarea6 = true

const tarea7 = "Ir a la tienda"
const estadoTarea7 = true

const tarea8 = "Echar la ropa a la lavadora"
const estadoTarea8 = false

const tarea9 = "Ver un episodio de una serie"
const estadoTarea9 = true

const tarea10 = "Leer un capítulo de un libro"
const estadoTarea10 = false

let contadorNoCompletado = 0
let contadorCompletado = 0

const contenedorLista = document.getElementById("lista")


function agregarTarea (tarea, estado){ if (estado) {
    contadorCompletado ++
    contenedorLista.innerHTML += `
    <div class="lista--tarea-com lista--tarea">
    <p>${tarea}</p>
    </div>`
} else {
    contadorNoCompletado ++
    contenedorLista.innerHTML += `
    <div class="lista--tarea-pen lista--tarea">
    <p>${contadorNoCompletado}. ${tarea}</p>
    </div>`
} }

agregarTarea(tarea1,estadoTarea1);
agregarTarea(tarea2,estadoTarea2);
agregarTarea(tarea3,estadoTarea3);
agregarTarea(tarea4,estadoTarea4);
agregarTarea(tarea5,estadoTarea5);
agregarTarea(tarea6,estadoTarea6);
agregarTarea(tarea7,estadoTarea7);
agregarTarea(tarea8,estadoTarea8);
agregarTarea(tarea9,estadoTarea9);
agregarTarea(tarea10,estadoTarea10);


const completadasTexto = document.getElementById("completadas")
completadasTexto.innerHTML = `Hay ${contadorCompletado} tareas completadas y ${contadorNoCompletado} tareas no completadas`