// Aprendendo importação

// Criando 2 funções para exportar
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

// objeto para exportar as duas funções criadas
module.exports = { gets, print };