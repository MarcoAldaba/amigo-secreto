// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// let amigos = [];
let amigos = ["Marco", "Elena", "Shadow"];
let nroAmigos = amigos.length;

// console.log(nroAmigos);
function actualizarListaAmigos(amigos){
    lista = limpiarLista('listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
actualizarListaAmigos(amigos);
function sortearAmigo(){
    if (nroAmigos > 0) {
        let indiceAmigo = Math.floor(Math.random() * nroAmigos);
        amigoSecreto = limpiarLista('resultado');
        let amigo = document.createElement("li");
        amigo.textContent = "El amigo secreto sorteado es:  "+amigos[indiceAmigo]
        amigos = [];
        nroAmigos = amigos.length;
        limpiarLista('listaAmigos');
        amigoSecreto.appendChild(amigo);
        
    }else{
        // limpiarLista('resultado');
        // console.log('ok');
        // document.getElementById('b2').setAttribute('disabled', 'true');
    }
}

function limpiarLista(id){
    let lista = document.getElementById(id);
    lista.innerHTML = "";
    return lista;
}