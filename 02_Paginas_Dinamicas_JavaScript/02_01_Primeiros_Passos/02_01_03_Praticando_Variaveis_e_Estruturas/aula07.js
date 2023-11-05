// Exercicio 03

/*

    1) Faça um algoritmo que dado as 3 notas recebidas por um aluno em um semestre da faculdade. Em seguida calcule e imprima a sua média e sua situação atual conforme abaixo:

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovado;

*/

let nota1 = 7.2;
let nota2 = 7.2;
let nota3 = 7.2;

let media = (nota1 + nota2 + nota3) / 3;

console.log('Sua média foi:', media)
if (media < 5) {
    console.log('Você está reprovado')
} else if (5 <= media && media<= 7) {
    console.log('Você está de recuperação')
} else {
    console.log('Você está aprovado')
}