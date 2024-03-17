const numeros = [1];

console.log(numeros.length);

numeros.push(2);
numeros.push(1);

console.log(numeros.length);

function sumar(a, b) {
  const resultado = a + b;
  console.log(resultado);
}

const sumarVersionDos = (manzana, pera, limon) => {
  const resultado = manzana + pera + limon;
  console.log(resultado);
};

sumar(1, 5);
sumar(2, 3);
sumarVersionDos(2, 3, 1);

const multiplicacion = (a, b) => {
  const resultado = a * b;
  return resultado;
};

const resultadoOperacion = multiplicacion(2, 3);
console.log(resultadoOperacion);
console.log(multiplicacion(2, 5));

const mostrarNombre = (nombre) => {
  const resultado = "Hola " + nombre;
  console.log(resultado);
};

mostrarNombre("Juan");

const retornarNombre = (nombre) => {
  return "Hola " + nombre;
};

const nombreEsperado = retornarNombre("Pedro");
console.log(nombreEsperado);
