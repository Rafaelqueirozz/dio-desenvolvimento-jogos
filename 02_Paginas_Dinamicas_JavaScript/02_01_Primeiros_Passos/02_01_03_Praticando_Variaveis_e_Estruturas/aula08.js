// Exercicio 04

/*

    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a classificação abaixo:

    Tabela IMC:
    - Abaixo de 18.5 - Abaixo do peso;
    - Acima de 18.5 até 25 - Peso normal;
    - Acima de 25 até 30 - Acima do peso;
    - Acima de 30 até 40 - Obeso;
    - Acima de 40 - Obesidade grave;

    Fórmula do IMC:
    IMC = peso / altura²

*/

let peso = 73;
let altura = 1.72;

let imc = peso / Math.pow(altura, 2);


console.log(imc)
if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc <= 25) {
    console.log('Peso normal')
} else if (imc <= 30) {
    console.log('Acima do peso')
} else if (imc <= 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave')
}