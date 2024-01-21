const lista = document.querySelector (".lista");
const body= document.querySelector ("body");

let numero = 0;

const h3 =document.createElement('h3');
h3.innerHTML= ' Seleccionar tareas faltantes '

body.appendChild(h3)

const arrayElement = ['Sacar a mi perro', 'Hacer tarea de fundamentos ', 'Ir de compras', 'Hacer tarea de percepción', 'Ver nuevo cap de mi serie','Tarea', 'Tarea','Tarea','Tarea','Tarea',]

arrayElement.forEach(item => { 
    console.log(item);

    const p = document.createElement('p')
    p.innerHTML =item


    
p.className='gris';
   
   
   
    p.addEventListener('click', () => {
        
        console.log(p.className);
        if(p.className=='gris'){
            
         p.classList.toggle('azul');
        p.className='azul';
        numero++;
        p.innerHTML = numero+item
        h3.innerHTML= ' Seleccionar tareas faltantes '+numero
    
        }
        else
        {
            p.classList.toggle('gris');
            p.className='gris';
            p.innerHTML =item
        numero--;
        h3.innerHTML= ' Seleccionar tareas faltantes '+numero
        }

       
    })



lista.appendChild(p)

    
});









    












