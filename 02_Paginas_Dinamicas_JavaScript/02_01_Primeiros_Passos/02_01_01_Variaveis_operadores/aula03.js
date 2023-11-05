// Exercicio 01

/*

Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis, sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por km;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

let precoCombustivel = 5;
let gastoMedioCombustivel = 10;
let distanciaPercorrida = 200;

let resultado = (distanciaPercorrida / gastoMedioCombustivel) * precoCombustivel;

console.log('O preço do combustivel está em media:', precoCombustivel, 'reais')
console.log('O médio de gasto do carro é', gastoMedioCombustivel, 'km/l')
console.log('A distancia da viagem é:', distanciaPercorrida, 'km')
console.log('O custo previsto é:', resultado, 'reais')

console.log('O custo previsto é (com duas casas decimais):', resultado.toFixed(2), 'reais')
