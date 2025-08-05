// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigosSorteados = [];
let amigosDispo = [];

function agregarAmigoSecreto(){
    let nombre = document.querySelector("#amigo").value.trim();

    if(nombre === ""){
        alert("Por favor, debes ingresar el nombre de un amigo.");
        return;
    }

    if(amigos.includes(nombre)){
        alert("Ese amigo ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    vaciarTexto();
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
amigosSorteados = [];

function sortearAmigos() {
    if (amigos.length < 2) {
        alert("No se puede realizar el sorteo con menos de dos amigos.");
        return;
    }

    let disponibles = [...amigos];
    amigosSorteados = [];

    for (let i = 0; i < amigos.length; i++) {
        let posibles = disponibles.filter(nombre => nombre !== amigos[i]);

        if (posibles.length === 0) {
            alert("No se pudo completar el sorteo sin repetir. Intenta de nuevo.");
            return;
        }

        let indice = Math.floor(Math.random() * posibles.length);
        let seleccionado = posibles[indice];

        amigosSorteados.push({
            amigos: amigos[i],
            amigosSorteados: seleccionado
        });

        // Elimina el seleccionado
        disponibles = disponibles.filter(nombre => nombre !== seleccionado);
    }

    // Mostrar resultados en un DOM
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    amigosSorteados.forEach(a => {
        const li = document.createElement("li");
        li.textContent = `amigo: ${a.amigos} - sorteado: ${a.amigosSorteados}`;
        resultado.appendChild(li);
    });
}


function asignarTexto(elemento, texto){
    let elementoDom = document.querySelector(elemento);
    elementoDom.innerHTML = texto;
    return;
}

function vaciarTexto(){
    document.querySelector("#amigo").value = "";
    return;
}


