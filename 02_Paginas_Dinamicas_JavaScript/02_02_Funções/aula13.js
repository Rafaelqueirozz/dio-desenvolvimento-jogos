// Funções - Exercicio 04

// Reescrevendo a aula09 em funções

function aplicarDesconto(valor, desconto){
    return valor - (valor * desconto / 100);
}

function aplicarJuros(valor, juros){
    return valor + (valor * juros / 100);
}


let precoEtiqueta = 100;
let formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagamento === 3) {
    console.log(aplicarDesconto(precoEtiqueta, 0))
} else if (formaDePagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10))
} else {
    console.log('Forma de pagamento inválida')
}