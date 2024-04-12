const render = () => {
  const contenedor = document.querySelector("#cuadro");

  contenedor.addEventListener("click", (event) => {
    console.log(event);
    alert("Se hace click en el cuadro");
  });

  contenedor.addEventListener("mouseenter", () => {
    contenedor.classList.remove("contenedor");
    contenedor.classList.add("contenedorDos");
    // alert("Entre al componente");
  });

  contenedor.addEventListener("mouseleave", () => {
    contenedor.classList.add("contenedor");
    contenedor.classList.remove("contenedorDos");
    // alert("Sali del componente");
  });
};

document.addEventListener("DOMContentLoaded", render);
