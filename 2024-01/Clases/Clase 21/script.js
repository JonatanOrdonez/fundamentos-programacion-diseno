const render = () => {
  let persona = {
    nombre: "Jonatan",
    edad: 27,
    esMayorDeEdad: true,
  };

  console.log(persona);
  console.log(persona.nombre, persona.edad, persona.esMayorDeEdad);

  persona.edad = 30;
  console.log(persona);

  persona.nombreMascota = "Toby";
  console.log(persona);

  const personaDos = {
    edad: 17,
    esMayorDeEdad: false,
    nombre: "Ana",
    nombreMascota: "Luna",
  };

  console.log(personaDos);

  const familia = [
    persona,
    personaDos,
    { nombre: "Pedro", edad: 40, esMayorDeEdad: true, nombreMascota: "Rex" },
  ];

  console.log(familia);

  for (const integrante of familia) {
    console.log(integrante.nombre);
    console.log(integrante);
  }
};

document.addEventListener("DOMContentLoaded", render);
