import {getMovies, Pelicula} from "./utils.js";

const render = async () => {
    const movies = await getMovies();

    const recomendadas = document.getElementById("recomendadas");
    const populares = document.getElementById("populares");

    for (const recomendada of movies.recomendadas) {
        const pelicula = new Pelicula(recomendada.id, recomendada.titulo, recomendada.poster, recomendada.rating);
        recomendadas.appendChild(pelicula.render());
    }


    for (const popular of movies.populares) {
        const pelicula = new Pelicula(popular.id, popular.titulo, popular.poster, popular.rating);
        populares.appendChild(pelicula.render());
    }
}

window.onload = render;