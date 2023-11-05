// Declarando funções

/*
function nomeDaFuncao(parametros){
    codigo
}
*/

function teste() {
    console.log('teste')
}

teste(); // chamar a função
teste();

function digaMeuNome(nome) {
    console.log('Seu nome é ' + nome)
}

digaMeuNome('Rafael')

function quadrado(valor) {
    return 'O quadrado de ' + valor + ' é ' + valor ** 2;
}

let quadradoDeCinco = quadrado(5)
console.log(quadradoDeCinco)

function incrementarJuros(valor, percentualJuros) {
    let valorAcrescimo = valor * (percentualJuros / 100);
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10))