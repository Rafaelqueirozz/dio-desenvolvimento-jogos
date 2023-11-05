const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
}

let media = somaNotas / notas.length

console.log('Soma das notas', somaNotas)
console.log('Quantidade de notas', notas.length)
console.log('A média é:', media)