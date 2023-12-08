let listaNumeroSorteados = [];
let quantidadeDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function MensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }

MensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let mensagemDeTentativas;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemDeTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('h1', 'Parabéns você Acertou!');
            exibirTextoNaTela('p', mensagemDeTentativas);
            document.getElementById ('reiniciar').removeAttribute('disabled');
    }     else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto e menor');
    }       else {
                exibirTextoNaTela('p', 'O número secreto a maior');
    }
tentativas++;
limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeros + 1 );
    let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

    if( quantidadeDeElementosNaLista == quantidadeDeNumeros){
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    }       else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados)
        return numeroEscolhido;
    } 
}
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}
function ReiniciarJogo() {  
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}