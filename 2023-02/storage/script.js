const USUARIOS_KEY = "usuarios";

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);
    console.log(typeof usuarios);
    if (usuarios) {
        const usuariosJson = JSON.parse(usuarios);
        console.log(typeof usuariosJson);
        return usuariosJson;
    } else {
        return [];
    }
}

const guardarUsuarios = (usuarios) => {
    console.log(typeof usuarios);
    const usuariosStr = JSON.stringify(usuarios);
    console.log(typeof usuariosStr);
    localStorage.setItem(usuariosStr);
}

const usuarios = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 20,
        email: "juan.perez@mail.com"
    }, 
    {
        nombre: "Maria",
        apellido: "Gomez",
        edad: 30,
        email: "maria.gomez@mail.com"
    }
]

const render = () => {
    guardarUsuarios(usuarios);
    const usuariosDelStorage = obtenerUsuarios();
}


window.onload = render;