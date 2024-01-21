const render = () => {
    // const nameSession = sessionStorage.getItem("name_session");
    // console.log(nameSession);

    // const nameLocal = localStorage.getItem("name_local");
    // console.log(nameLocal);
    // localStorage.removeItem("name_local");

    // localStorage.setItem("name_local", "Jonatan local");
    // const persona = {
    //     name: "Jonatan"
    // };

    // console.log(persona, typeof persona);

    // const personaString = JSON.stringify(persona);

    // console.log(personaString, typeof personaString);

    // localStorage.setItem("persona", personaString);

    // const arregloPersonas = [persona];

    // const arregloPersonasString = JSON.stringify(arregloPersonas);

    // localStorage.setItem("arreglo_personas", arregloPersonasString);

    const personaString = localStorage.getItem("persona");
    console.log(personaString);

    const persona = JSON.parse(personaString);
    console.log(persona, persona.name);

    const arregloPersonasString = localStorage.getItem("arreglo_personas");
    console.log(arregloPersonasString);

    const arregloPersonas = JSON.parse(arregloPersonasString);
    console.log(arregloPersonas, arregloPersonas[0].name);
}

window.onload = render;