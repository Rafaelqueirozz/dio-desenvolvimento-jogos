// Manipulação de listas - método reduce
// Percorrendo toda a lista e reduzindo a um unico valor

/*
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somaTodosNumeros = lista.reduce((previous, current) => {
    console.log('Anterior', previous, 'Atual', current);
    return previous + current;
}, 0);

console.log(somaTodosNumeros);
*/

// Join e combinação de funções de manipulação

let lista = [1, 2, 3];
console.log(lista.join(' ; '))
console.log()


let listaNomes = [{nome: 'Rafael'}, {nome: 'Luis'}, {nome: 'Priscilla'}, {nome: 'Rodrigo'}, {nome: 'Paulo'}];
console.log(listaNomes.map((e) => e.nome).join(' ; '))
console.log()
console.log(listaNomes.filter((e) => e.nome.startsWith('R')));
console.log()

let elementosEmHtml = listaNomes
    .filter((e) => e.nome.startsWith('R'))
    .map(e => `<li>${e.nome}</li>`)
    .join('\n');

console.log(elementosEmHtml);