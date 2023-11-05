// const funcoes = require('./aula24_funcoesAuxiliares'); método 01 de importar

// console.log(funcoes);
// console.log(funcoes.gets());

// -------------------------------------------------------------------

// Aprendendo Object Destructuring

const pessoa = {
    nome: 'Rafael'
};

// Os dois códigos abaixo resultam na mesma coisa.
const { nome } = pessoa;
// const nome = pessoa.nome;

console.log(nome);


// ------------------------------------------------------------------

// Assim sendo, podemos também reescrever a primeira linha da seguinte maneira:

const {gets, print} = require('./aula24_funcoesAuxiliares') // Metodo 2 de importar

print(gets());