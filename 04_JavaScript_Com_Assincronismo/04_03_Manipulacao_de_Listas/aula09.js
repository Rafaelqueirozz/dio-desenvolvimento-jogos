// Manipulação de listas - Foreach e Filter

// Método foreach:

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef);
})
*/

/*
 O ForEach criou uma interação onde vai passar pela lista cada vez percorrendo os valores da seguinte maneira:
 Valor, indice na lista, e a lista completa de onde saiu o elemento.
*/

// Essa função corresponde exatamente conforme o codigo abaixo:

/*
for (let i = 0; i < lista.length; i++) {
    const valor = lista[i];
    console.log(valor, i, lista);
}
*/

// Método Filter:
// Enviamos uma função dentro do filtro para retornar os valores que queremos.
let listaNumerosPares = lista.filter((valor) => {
    return (valor % 2 === 0)
})

console.log(lista)
console.log(listaNumerosPares)
