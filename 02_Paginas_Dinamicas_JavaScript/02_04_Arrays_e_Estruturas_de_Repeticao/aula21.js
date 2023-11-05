// Percorrendo Arrays (listas)
// Aprendendo a usar o for

/* 
Estrutura do for:
for (variavel contadora; contadora < tamanho; index +1)
*/

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let contadora = 0; 
    contadora < notas.length;
    contadora ++) {
    soma = soma + notas[contadora]
}

console.log(soma);

console.log();
// Exemplo 2

const nome = 'Rafael Queiroz'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}