// Criando instancias com Construtor()

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${idade} anos de idade.`);
    }
}

const teste = new Pessoa();

const rafael = new Pessoa('Rafael Queiroz', 31);
console.log(rafael)
console.log(teste)