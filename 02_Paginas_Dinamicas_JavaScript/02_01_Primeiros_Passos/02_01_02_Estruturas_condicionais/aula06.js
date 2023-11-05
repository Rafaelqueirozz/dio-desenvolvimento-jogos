// Exercicio 02

/*

Faça um programa para calcular o valor de uma viagem.
Você terá as seguintes variáveis, sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por km;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let gastoMedio = 12;
let distanciaTotal = 898;
let tipoCombustivel = 'gasolina';

let totalLitros = distanciaTotal / gastoMedio;
let totalSeGasolina = totalLitros * precoGasolina;
let totalSeEtanol = totalLitros * precoEtanol;

const isEtanol = tipoCombustivel === 'etanol';

if (isEtanol) {
    console.log('Você usou etanol, o valor total foi:', totalSeEtanol.toFixed(2))
} else {
    console.log('Você usou gasolina, o valor total foi:', totalSeGasolina.toFixed(2))
}

