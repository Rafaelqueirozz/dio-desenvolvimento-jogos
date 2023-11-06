// Variaveis - JavaScript é case sensitive e fracamento tipado

// Declarando uma variável

/*

Convenção de declaração de variáveis

1. Pode começar com letra, $ ou _;
2. _ para quando é restrita àquele escopo
3. Começa com letra minuscula
4. var camelCase - Inicia cada palavra com letra maiuscula, junto.
5. $ para identificar mais fácil que é uma variável
6. para constantes, escrever toda maiuscula:
    const TESTE = 10;
7. Criar novas classes, iniciar com letra maiúscula.

*/

// Tipos de dados

/*

    1. Boolean
    2. null
    3. undefined
    4. number
    5. string
    6. symbol

*/

// Objetos

/* Objetos 01

const x = {
    nome: 'Rafael',
    idade: 31
}

console.log(typeof(x))
console.log(x)
console.log(x.nome)
console.log(x.idade)

x.altura = 1.72;
x['nome'] = 'Luis';

console.log(x)

*/

const y = {
    nome: 'Rafael',
    idade: 30,
    falar: function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

y.falar();