// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nroAmigos = amigos.length;

function actualizarListaAmigos(amigos){
    lista = limpiarLista('listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    limpiarEntrada();
    if (nroAmigos > 0) {
        let indiceAmigo = Math.floor(Math.random() * nroAmigos);
        amigoSecreto = limpiarLista('resultado');
        let amigo = document.createElement("li");
        amigo.textContent = "El amigo secreto sorteado es:  "+amigos[indiceAmigo]
        amigos = [];
        nroAmigos = amigos.length;
        limpiarLista('listaAmigos');
        amigoSecreto.appendChild(amigo);
        // console.log(amigos);
    }else{
        document.getElementById('b2').setAttribute('disabled', 'true');
    }
}

function limpiarLista(id){
    let lista = document.getElementById(id);
    lista.innerHTML = "";
    return lista;
}

function agregarAmigo() {
    document.getElementById('b2').removeAttribute('disabled');
    agrega = document.getElementById('amigo').value;
    limpiarLista('resultado');
    if (agrega !== "") {
        amigos.push(agrega);
        limpiarEntrada();
        actualizarListaAmigos(amigos);
        nroAmigos = amigos.length;
        console.log(amigos);
    }else{
        alert("Por favor, ingrese un nombre válido.");
    }
}

function limpiarEntrada() {
    document.getElementById('amigo').value = '';
}

