//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let Erro = 'Por favor, insira um nome de um amigo seu!';
function adicionarAmigo(){
    let Amigo = document.querySelector('input').value;
    if (Amigo == '') {
        alert(Erro);
        return;
    } else {
        amigos.push(Amigo);
        limparCampo();
        mostrarAmigos();
        return console.log(amigos);
    }
}
function mostrarAmigos(){
    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = ''
    let i = 0
    while (i < amigos.length) {
        let listaHTML = document.createElement('li');
        listaHTML.textContent= amigos[i];
        lista.appendChild(listaHTML);
        i++;

    }
}

function sortearAmigo() {
    let quantidadeDeElementosNaLista = amigos.lenght;

    if (quantidadeDeElementosNaLista == 0){
        alert(Erro)
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let mostrarResultado = document.querySelector('#resultado')
    mostrarResultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}!`
}







function limparCampo() {
    Amigo = document.querySelector('input');
    Amigo.value = '';
}

