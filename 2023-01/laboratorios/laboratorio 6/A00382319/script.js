
let pendiente=0
let completada=0



const contenedor = document.querySelector("#lista");

console.log (contenedor);

const parrafo = document.createElement("p");
parrafo.innerHTML = "TAREAS POR HACER";
parrafo.classList.add("titulo");

contenedor.appendChild(parrafo);


const parrafo2 = document.createElement("p");
parrafo2.innerHTML = "1.Preparar cafe";
parrafo2.classList.add("lista--tarea");
parrafo2.classList.add("lista--tarea-completada");
completada+=1;

contenedor.appendChild(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.innerHTML = "2.Preparar maleta gimnasio";
parrafo3.classList.add("lista--tarea");
parrafo3.classList.add("lista--tarea-pendiente");
pendiente+=1;

contenedor.appendChild(parrafo3);


const parrafo4 = document.createElement("p");
parrafo4.innerHTML = "3.Poner comida al Gato";
parrafo4.classList.add("lista--tarea");
parrafo4.classList.add("lista--tarea-pendiente");
pendiente+=1;

contenedor.appendChild(parrafo4);

const parrafo5 = document.createElement("p");
parrafo5.innerHTML = "4.Ducharse";
parrafo5.classList.add("lista--tarea");
parrafo5.classList.add("lista--tarea-completada");
completada+=1;

contenedor.appendChild(parrafo5);

const parrafo6 = document.createElement("p");
parrafo6.innerHTML = completada + " tareas completadas";
parrafo6.classList.add("texto");

contenedor.appendChild(parrafo6);

const parrafo7 = document.createElement("p");
parrafo7.innerHTML = pendiente + " tareas pendientes";
parrafo7.classList.add("texto");

contenedor.appendChild(parrafo7);