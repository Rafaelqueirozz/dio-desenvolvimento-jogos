// Exercicios de estruturas de repetição

// Exercicios

// 1) Crie um programa que dado um número imprima a tabuada até 10

const numero = 1;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)    
}

// 2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

const lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 0; i < lista.length; i++) {
    const numeroLista = lista[i];
    if (numeroLista % 2 == 0) {
        console.log(numeroLista)
    }
}