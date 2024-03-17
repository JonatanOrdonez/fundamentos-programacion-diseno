console.log("Hello world!", "Jonatan!");

const nombre = "Jonatan";

// nombre = "Juan";

let apellido = "Ordoñez";
// Comentario
apellido = "Burbano";

const edad = 25.0;
console.log("Mi edad es ", edad);

const esMayorDeEdad = true;
console.log("Es mayor de edad ", esMayorDeEdad);

const notaA = 5;
const notaB = 4;

const promedio = (notaA + notaB) / 2;
console.log("El promedio es ", promedio);

const nombreCompleto = nombre + " " + apellido;
console.log("Mi nombre completo es", nombreCompleto);

const tipoDeDato = typeof nombreCompleto;
console.log(tipoDeDato);

const numero = parseInt("5");
console.log(numero, typeof numero);

const edadPorConsola = prompt("Ingrese su edad");
console.log(edadPorConsola, typeof edadPorConsola);
