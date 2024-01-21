<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Document</title>
</head>

<body>

    <div id="contenedor">
    </div>

    <p id="tareascompletasp"></p>
    <p id="tareasincompletasp"></p>

    <script>
        const estadoTarea1 = true;
        const estadoTarea0 = false;

        const tarea1 = "Sacar al perro";
        const tarea2 = "Hacer tareas de fundamentos";
        const tarea3 = "Ir de compras";
        const tarea4 = "Hacer tarea de percepción";
        const tarea5 = "Hacer tarea de ilustración";
        const tarea6 = "Leer libro";
        const tarea7 = "Ir al gym";
        const tarea8 = "Estudiar";
        const tarea9 = "Programar";
        const tarea10 = "Programar otra vez";

        let ContadorTareaCompleta = 0;
        let ContadorTareaIncompleta = 0;

        const contenedorRef = document.getElementById("contenedor");

        function agregarTareaAlHtml (tarea, estado) {
            if  (estado === estadoTarea1) {
                ContadorTareaCompleta +=1
                contenedorRef.innerHTML+=
                `<div class="tarea-completada">
                <p>${tarea}</p>
                </div>`    
            } else {
                ContadorTareaIncompleta +=1
                contenedorRef.innerHTML+=
                `<div class="tarea-pendiente">
                <p>${tarea}</p>
                </div>`
            }
        }

        agregarTareaAlHtml(tarea1,estadoTarea1);
        agregarTareaAlHtml(tarea2,estadoTarea0);
        agregarTareaAlHtml(tarea3,estadoTarea0);
        agregarTareaAlHtml(tarea4,estadoTarea1);
        agregarTareaAlHtml(tarea5,estadoTarea0);
        agregarTareaAlHtml(tarea6,estadoTarea1);
        agregarTareaAlHtml(tarea7,estadoTarea1);
        agregarTareaAlHtml(tarea8,estadoTarea1);
        agregarTareaAlHtml(tarea9,estadoTarea0);
        agregarTareaAlHtml(tarea10,estadoTarea0);

        const tareasCompletasP = document.getElementById("tareascompletasp");
        tareasCompletasP.innerHTML = `Tareas completas: ${ContadorTareaCompleta}`;

        const tareasIncompletasP = document.getElementById("tareasincompletasp");
        tareasIn