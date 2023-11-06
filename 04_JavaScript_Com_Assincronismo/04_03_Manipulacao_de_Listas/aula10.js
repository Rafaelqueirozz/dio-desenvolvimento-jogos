// Manipulação de listas - método map

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

let lista = [new Pessoa('Rafael'), new Pessoa('Luis'), new Pessoa('Priscilla'), new Pessoa('Sergio')]

// console.log(lista)


/*
Método 01 de executar uma nova lista apenas com os valores de nomes.
let listaNomes = [];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.nome)
}
console.log(listaNomes)
*/

// Através do método map

let listaNomes = lista.map((value) => {
    return value.nome;
})
console.log(listaNomes)

let listaNomes2 = lista.map((value,i) => {
    return i + ' - ' + value.nome;
})
console.log(listaNomes2)