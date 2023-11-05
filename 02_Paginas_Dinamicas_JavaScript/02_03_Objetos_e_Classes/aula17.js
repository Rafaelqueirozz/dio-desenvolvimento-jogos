// Funções recebendo objetos

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

// Criando uma função para comparar idade
function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const rafael = new Pessoa('Rafael', 31);
const priscilla = new Pessoa('Priscilla', 33);
const marcela = new Pessoa('Marcela', 34);
const luis = new Pessoa('Luis', 31);

compararIdade(rafael, priscilla);
compararIdade(rafael, marcela);
compararIdade(priscilla, marcela);
compararIdade(rafael, luis);