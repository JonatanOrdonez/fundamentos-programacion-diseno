const ensalada = ["lechuga", "tomate", "zanahoria"];

console.log(ensalada);

ensalada.push("pepino");

console.log(ensalada);

const primerElemento = ensalada[3];
console.log(primerElemento);
console.log(ensalada.length);

let nombresDeLaEnsalada = "";
for (const cosito of ensalada) {
  nombresDeLaEnsalada = nombresDeLaEnsalada + cosito + " ";
  console.log(cosito);
}

console.log(nombresDeLaEnsalada);

for (let i = 0; i < ensalada.length; i++) {
  const verdura = ensalada[i];
  console.log(verdura);
}

const parrafo = document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML = "<strong>" + nombresDeLaEnsalada + "</strong>";

parrafo.classList.add("parrafo--verde", "parrafo--titulo");
