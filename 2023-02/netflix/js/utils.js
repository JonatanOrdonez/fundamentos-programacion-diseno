export const getMovies = async () => {
    const response = await fetch('https://raw.githubusercontent.com/JonatanOrdonez/netflix/main/data.json');
    const movies = await response.json();
    return movies;
}

export class Pelicula {
    id = "";
    titulo = "";
    image = "";
    rating = 0;

    constructor(id, titulo, image, rating) {
        this.id = id;
        this.titulo = titulo;
        this.image = image;
        this.rating = rating;
    }

    render() {
        const div = document.createElement("div");
        div.classList.add("pelicula");

        const img = document.createElement("img");
        img.classList.add("pelicula__imagen");
        img.src = this.image;

        div.appendChild(img);

        const stars = this.#renderStarRate();

        div.appendChild(stars);

        return div;
    }

    #renderStarRate() {
        const div = document.createElement("div");
        div.classList.add("pelicula__valoracion");

        for (let i = 0; i < 5; i++) {
            const span = document.createElement("span");
            span.classList.add("fa-star");
            span.classList.add("fa-solid");

            if (i < this.rating) {
                span.style.color = "#ffa500";
            }

            div.appendChild(span);
        }
        return div;
    }
}