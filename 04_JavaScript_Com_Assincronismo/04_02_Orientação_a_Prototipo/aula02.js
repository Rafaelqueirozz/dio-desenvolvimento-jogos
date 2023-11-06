// Definição de objeto - Coleção dinâmica de chave valor.

const objeto = {
    chave1: 'Valor qualquer',
    chave2: 3
}

// console.log(objeto.chave1)
// console.log(objeto.chave2)
// console.log(objeto)

// ---------------------------------------------------------------------------------

// Temos também prototipos que são bases para criar nossos objetos - ou heranças

const prototipo = {
    genero: 'Masculino'
}
const objeto_com_prototipo = {
    chave1: 'valor 1',
    chave2: 'valor 2',
    __proto__: prototipo
}

console.log(objeto_com_prototipo.genero);

function Pessoa (nome,idade) { // 1 Letra maiuscula é função construtora
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}

let rafael = new Pessoa ('Rafael', 31)

console.log(rafael);

rafael.falar();


// A sintaxe das linhas 27 a 34 é igual a esta abaixo:

// Foi criado para facilitar entendimento e aprendizado no js

class Pessoa2 {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let luis = new Pessoa2('Luis', 31);
luis.descrever();