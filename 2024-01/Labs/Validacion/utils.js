export const obtenerData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

export const obtenerGatoPorId = async (id) => {
  const data = await obtenerData();

  for (const gato of data.data.cats) {
    if (gato.id === id) {
      return gato;
    }
  }

  return null;
};

export class Cat {
  #id;
  #url;
  #width;
  #height;
  #nodoTitulo;

  constructor(id, url, width, height) {
    this.#id = id;
    this.#url = url;
    this.#width = width;
    this.#height = height;
  }

  render() {
    const gato = document.createElement("div");
    gato.classList.add("gato");

    const titulo = document.createElement("p");
    titulo.textContent = this.#id;
    titulo.classList.add("gato__titulo");
    this.#nodoTitulo = titulo;

    if (this.#height > 1000) {
      titulo.classList.add("gato__titulo--grande");
    }

    const img = document.createElement("img");
    img.alt = this.#id;
    img.src = this.#url;
    img.classList.add("gato__imagen");

    gato.appendChild(titulo);
    gato.appendChild(img);

    return gato;
  }

  addEventListeners() {
    this.#nodoTitulo.addEventListener("click", () => {
      window.location.href = "./details.html?identificador=" + this.#id;
    });
  }

  details() {}
}
