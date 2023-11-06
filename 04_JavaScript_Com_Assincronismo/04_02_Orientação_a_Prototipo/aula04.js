// Entendendo o operador new

/*
function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

// const rafael = new Pessoa('Rafael', 31);
const rafael = {
    genero: 'Masculino'
}

Pessoa.call(rafael, 'Rafael', 31);
console.log(rafael)
*/

String.prototype.toPLang = function () {
    return `P ${this}`
}

console.log('Teste'.toPLang());