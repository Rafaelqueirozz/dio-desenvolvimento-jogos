// Criando um objeto - Objeto no JavaScript é uma coleção dinâmica de chave: valor.

const pessoa1 = {
    nome: 'Rafael Queiroz',
    idade: 31
}

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1)

// Adicionando um conjunto chave:valor para a constante pessoa1;
pessoa1.altura = 1.72;
console.log(pessoa1);

// Deletando um conjunto chave:valor para a constante pessoa1;
delete pessoa1.altura;
console.log(pessoa1);

// Função de um objeto é chamado de método

const pessoa2 = {
    nome: 'Rafael',
    idade: 31,
    altura: 1.72,

    descreverPessoa: function () {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura}m de altura`)
    }
}

pessoa2.descreverPessoa();


// Acessando dinâmicamente um valor de um objeto

const atributo = 'idade'
console.log(pessoa2[atributo])
console.log(pessoa2['idade'])