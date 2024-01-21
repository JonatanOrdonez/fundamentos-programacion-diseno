const tasks = [
	{
		name: "sacar a mi perro",
		completed: false
	},
	{
		name: "Hacer la tareas de fundamentos",
		completed: false
	},
	{
		name: "Ir de compras",
		completed: true
	},
	{
		name: "Hacer tarea de percepcion",
		completed: false
	},
	{
		name: "Ver nuevo capitulo de mi serie",
		completed: true
	},
    {
		name: "Sacar a mi perro",
		completed: false
	},
	{
		name: "Bañar perro",
		completed: false
	},
	{
		name: "Ir de paseo",
		completed: true
	},
	{
		name: "Hacer tarea de programacion",
		completed: true
	},
	{
		name: "Leer libro",
		completed: false
	},
    {
		name: "Ir de fiesta",
		completed: true
	},
	{
		name: "Hacer tarea de calculo",
		completed: false
	},
	{
		name: "Buscar trabajo",
		completed: false
	},
	
];

const taskList = document.querySelector("#lista");

let completedTasks = 0; 
let numerotarea=1;
let pendingtask=0;
for (const task of tasks) {
    const newTask = document.createElement("li");

    newTask.innerText = `${numerotarea}. ${task.name}`;

	if (task.completed) {
		newTask.classList.add("task-completed");
        completedTasks++;
	} else {
        newTask.classList.add("task-pending");
        pendingtask++;
	}
    taskList.appendChild(newTask);
    numerotarea+=1
}
tasks.forEach((task, index) => {
	
});

const totalTasks = tasks.length;
const remainingTasks = totalTasks - completedTasks;

document.querySelector("#total-tasks").innerText = totalTasks;
document.querySelector("#completed-tasks").innerText = completedTasks;
document.querySelector("#task-pending").innerText = pendingtask;
