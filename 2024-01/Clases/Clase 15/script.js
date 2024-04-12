const contenedor = document.querySelector("#contenedor");

const textoUno = document.createElement("p");
textoUno.innerHTML = "Hola, este es mi primer parrafo";
textoUno.classList.add("texto--rojo");
textoUno.setAttribute("id", "parrafoUno");

const textoDos = document.createElement("p");
textoDos.innerHTML = "Hola, este es mi segundo parrafo";
textoDos.classList.add("texto--verde");
textoDos.setAttribute("style", "font-size: 3rem");

contenedor.appendChild(textoUno);
contenedor.appendChild(textoDos);

const digimones = [
  "https://digimon.shadowsmith.com/img/koromon.jpg",
  "https://digimon.shadowsmith.com/img/tsunomon.jpg",
  "https://digimon.shadowsmith.com/img/yokomon.jpg",
  "https://digimon.shadowsmith.com/img/motimon.jpg",
  "https://digimon.shadowsmith.com/img/patamon.jpg",
  "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
  "https://digimon.shadowsmith.com/img/greymon.jpg",
  "https://digimon.shadowsmith.com/img/tanemon.jpg",
];

const digimonesContenedor = document.querySelector("#digimones");

for (const digimon of digimones) {
  const img = document.createElement("img");
  img.setAttribute("src", digimon);
  img.setAttribute("alt", digimon);

  img.classList.add("imagen");

  digimonesContenedor.appendChild(img);
}
