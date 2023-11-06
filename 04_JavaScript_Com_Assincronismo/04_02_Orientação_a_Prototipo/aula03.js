// Aprendendo Sobrescrita e Shadowing


/*

const pessoa = {
    idade: 18
}

const rafael = {
    nome: 'Rafael',
    idade: 31,
    __proto__: pessoa
}

console.log(rafael.idade); 

*/

// Tenta achar a idade na constante rafael, se não achar, vai no prototipo, ou seja um jeito de colocar um valor default.

// Forma de criar objetos e prototipos e invocar sua criação.

// Método 01:
/* 
const pessoa = {
    genero: 'Masculino'
}

const rafael = {
    nome: 'Rafael',
    __proto__: pessoa
}

console.log(rafael.genero);
*/

// Método 02:

const pessoa = {
    genero: 'Masculino'
}

const rafael = Object.create(pessoa);
rafael.nome = 'Rafael';

console.log(rafael.genero);